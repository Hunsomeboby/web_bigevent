$(function() {
    load();
    //一、按下回车，保存输入框中的数据
    $("#title").on("keydown", function(event) {
        if (event.keyCode === 13) {
            //1、先读取本地已存储的数据
            var local = getDate();
            // console.log(local);
            //2、将数据追加到数组中
            local.push({ title: $(this).val(), done: false });
            //3、存储到本地
            // localStorage.setItem("todolist",local);
            saveDate(local);
            //4、将数据渲染到页面中
            load();
        }
    });
    //二、点一下a标签，删除数据数据
    $("ol").on("click", "a", function() {
        // alert("111");
        //1、获取本地数据
        var date = getDate();
        //2、修改数据
        var index = $(this).attr("id");
        // console.log(index);
        date.splice(index, 1);
        //3、保存数据到本地
        saveDate(date);
        //4、重新渲染
        load();
    });



    //读取本地数据的函数
    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data != null) {
            //获取的数据是字符串，转换成数组对象
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    //保存本地存储数据
    function saveDate(date) {
        localStorage.setItem("todolist", JSON.stringify(date));
    }
    //渲染页面
    function load() {
        //1、读取数据
        var data = getDate();
        //2、遍历数据
        //先清空ol中的标签
        $("ol").empty();
        //再遍历数据
        $.each(data, function(i, n) {
            $("ol").prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='#' id=" + i + "></a></li>");
        });
    }
})