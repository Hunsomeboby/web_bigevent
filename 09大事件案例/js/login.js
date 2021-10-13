$(function() {
    $(".switch").on('click', function() {
        //登录框和注册框的互换
        // console.log($(this).parent().parent().siblings("div"));
        $(this).parent().parent().hide().siblings("div").show();
    });

    //登录代码
    $("#form_login").on('submit', function(e) {
        // 1. 阻止默认的提交行为
        e.preventDefault()
            //获取登录的用户名和密码
        var ipts = $(this).find('input');
        var i = 0;
        // console.log(ipts[0].value.trim());
        $.each(ipts, function(index, demElemt) {
            if (ipts[index].value.trim() != "") {
                i++;
                // console.log(ipts[0].value.trim());
            }
        });
        if (i == ipts.length && i != 0) {
            $.post('/api/login', {
                    username: ipts[0].value.trim(),
                    password: ipts[1].value.trim()
                },
                function(res) {
                    if (res.status === 0) {
                        return alert("登录成功");
                    } else {
                        return alert("登录失败");
                    }
                });
            i = 0;
        } else {
            alert("用户名或密码不能为空");
        }
    });

    //注册代码
    $("#form_reg").on('submit', function(e) {
        // 1. 阻止默认的提交行为
        e.preventDefault()
            // console.log($(this).find("input"));
            //获取登录的用户名和密码
        var ipts = $(this).find('input');
        var i = 0;
        // console.log(ipts[0].value.trim());
        $.each(ipts, function(index, demElemt) {
            if (ipts[index].value.trim() != "") {
                i++;
                // console.log(ipts[index].value.trim());
            }
        });
        if (i == ipts.length && i != 0) {
            // alert("注册成功");
            $.post('/api/reguser', {
                username: ipts[0].value.trim(),
                password: ipts[1].value.trim()
            }, function(res) {
                if (res.status !== 0) {
                    console.log(res.message);
                    return alert("注册失败");
                } else {
                    alert("注册成功");
                }
            });
            i = 0;
        } else {
            alert("用户名或密码不能为空!!!");
        }
    });
})