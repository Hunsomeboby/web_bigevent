(function() {
    var data = [{
            date: 20180701,
            dizhi: '11北京市昌平西路金燕龙写字楼',
            bianhao: 1000001
        }, {
            date: 20180702,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000002
        },
        {
            date: 20180703,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000003
        },
        {
            date: 20180704,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000004
        },
        {
            date: 20180705,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000005
        },
        {
            date: 20180706,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000006
        },
        {
            date: 20180707,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000007
        },
        {
            date: 20180708,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000008
        },
        {
            date: 20180709,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000009
        },
        {
            date: 20180710,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000010
        },
    ]
    var data_two = [{
            date: 201807011,
            dizhi: '11北京市昌平西路金燕龙写字楼',
            bianhao: 10000012
        }, {
            date: 201807013,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000002
        },
        {
            date: 201807014,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000003
        },
        {
            date: 201807015,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000004
        },
        {
            date: 201807016,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000005
        },
        {
            date: 201807017,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000006
        },
        {
            date: 201807018,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000007
        },
        {
            date: 201807019,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000008
        },
        {
            date: 201807020,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000009
        },
        {
            date: 201807121,
            dizhi: '北京市昌平区城西路金燕龙写字楼',
            bianhao: 1000010
        },
    ]
    var arr_data = [data, data_two];
    //1、按钮切换
    $(".tab").on("click", ".jiankong", function() {
        $(this).addClass("active").siblings(".jiankong").removeClass("active");
        xuanrang(arr_data[$(this).index()]);
    });
    // $(".marquee").append("<div class='row'><span>20180701</span><span>11北京市昌平西路金燕龙写字楼</span> <span>1000001</span></div>");
    // $(".marquee").append("<div class='row'><span>20180701</span><span>11北京市昌平西路金燕龙写字楼</span> <span>1000001</span></div>")

    function xuanrang(data) {
        var createElement = '';
        $.each(data, function(index, element) {
            // console.log(element);
            createElement += "<div class='row'><span>" + element.date + "</span><span>" + element.dizhi +
                "</span> <span>" + element.bianhao + "</span></div>";
        });
        $(".marquee").empty();
        $(".marquee").append(createElement);
        // 1. 先克隆marquee里面所有的行（ row）
        $(".shuju .marquee").each(function() {
            var rows = $(this)
                .children()
                .clone();
            $(this).append(rows);
        });
    };
    xuanrang(data);
})();