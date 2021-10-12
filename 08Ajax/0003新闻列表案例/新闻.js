$(function() {
    //给不足两位数的时间去补0
    function padZero(n) {
        if (n < 10) {
            return '0' + n;
        } else {
            return n;
        }
    }
    //定义数据过滤器
    template.defaults.imports.dateFormat = function(dtStr) {
            var dt = new Date(dtStr);
            var y = dt.getFullYear();
            var m = padZero(dt.getMonth() + 1);
            var d = padZero(dt.getDate());
            var hh = padZero(dt.getHours());
            var mm = padZero(dt.getMinutes());
            var ss = padZero(dt.getSeconds());
            return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss;
        }
        //获取新闻数据
    function getNewList() {
        $.get('http://www.liulongbin.top:3006/api/news', function(res) {
            if (res.status != 200) {
                return alert('获取新闻失败！');
            }
            // console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
                //把tags里的字符串改造为数组
                res.data[i].tags = res.data[i].tags.split(',');
            }
            console.log(res);
            var htmlStr = template('tpl-news', res);
            $('#news-list').html(htmlStr);
        })
    }
    getNewList();
})