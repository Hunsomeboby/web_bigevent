// 最左边的第一个模块
// 监控区域模块制作
(function() {
    $(".monitor .tabs").on("click", "a", function() {
        $(this)
            .addClass("active")
            .siblings("a")
            .removeClass("active");

        // console.log($(this).index());
        //   选取对应索引号的content
        $(".monitor .content")
            .eq($(this).index())
            .show()
            .siblings(".content")
            .hide();
    });
    // 1. 先克隆marquee里面所有的行（row）
    $(".marquee-view .marquee").each(function() {
        // console.log($(this));
        var rows = $(this)
            .children()
            .clone();
        $(this).append(rows);
    });
})();

// 最左边的第二个模块
(function() {
    $(".monitor .inner .tabs").on('click', 'a', function() {
        $(this).addClass('active').siblings('a').removeClass('active');

        //显示内容
        $(".monitor .content").eq($(this).index()).show().siblings('.content').hide();
    });
    // 最左边的第三个模块
    var myCharts = echarts.init(document.querySelector('.pie'));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // 注意颜色写的位置
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [{
            name: "点位统计",
            type: "pie",
            // 如果radius是百分比则必须加引号
            radius: ["10%", "70%"],
            center: ["50%", "50%"],
            roseType: "radius",
            data: [
                { value: 20, name: "云南" },
                { value: 26, name: "北京" },
                { value: 24, name: "山东" },
                { value: 25, name: "河北" },
                { value: 20, name: "江苏" },
                { value: 25, name: "浙江" },
                { value: 30, name: "四川" },
                { value: 42, name: "湖北" }
            ],
            // 修饰饼形图文字相关的样式 label对象
            label: {
                fontSize: 10
            },
            // 修饰引导线样式
            labelLine: {
                // 连接到图形的线长度
                length: 6,
                // 连接到文字的线长度
                length2: 8
            }
        }]
    };
    myCharts.setOption(option);
    //监听图标，实现自动缩放
    window.addEventListener('resize', function() {
        myCharts.resize();
    })
})();

// 中间的第二个模块
(function() {
    var chartDom = document.querySelector('.bar');
    var myChart = echarts.init(chartDom);
    var item = {
        name: '',
        value: 1200,
        // 1. 修改当前柱形的样式
        itemStyle: {
            color: "#254065"
        },
        // 2. 鼠标放到柱子上不想高亮显示
        emphasis: {
            itemStyle: {
                color: "#254065"
            }
        },
        // 3. 鼠标经过柱子不显示提示框组件
        tooltip: {
            extraCssText: "opacity: 0"
        }
    };
    var option = {
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0,
            0,
            0,
            1, [
                { offset: 0, color: "#00fffb" }, // 0 起始颜色
                { offset: 1, color: "#0061ce" } // 1 结束颜色
            ]
        ),
        tooltip: {
            //item触发，不会有阴影
            trigger: 'item',
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
            // 显示网格
            show: true,
            // 修改网格边框
            borderColor: "rgba(0, 240, 255, 0.3)"
        },
        xAxis: [{
            type: 'category',
            data: [
                "上海",
                "广州",
                "北京",
                "深圳",
                "合肥",
                "",
                "......",
                "",
                "杭州",
                "厦门",
                "济南",
                "成都",
                "重庆"
            ],
            axisTick: {
                //将x轴刻度移到中间，并隐藏
                alignWithLabel: false,
                show: false
            },
            axisLabel: {
                //设置x轴文字颜色
                color: "#4c9bfd",
                //设置成 0 强制显示所有标签
                interval: 0
            },
            // x轴这条线的颜色样式
            axisLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                //将y轴刻度移到中间，并隐藏
                alignWithLabel: false,
                show: false
            },
            axisLabel: {
                //设置y轴文字颜色
                color: "#4c9bfd"
            },
            // y轴这条线的颜色样式
            axisLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                }
            },
            // y轴分割线的颜色样式
            splitLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)"
                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [
                2100,
                1900,
                1700,
                1560,
                1400,
                // {
                //     name: '',
                //     value: 1200,
                //     // 1. 修改当前柱形的样式
                //     itemStyle: {
                //         color: "#254065"
                //     },
                //     // 2. 鼠标放到柱子上不想高亮显示
                //     emphasis: {
                //         itemStyle: {
                //             color: "#254065"
                //         }
                //     },
                //     // 3. 鼠标经过柱子不显示提示框组件
                //     tooltip: {
                //         extraCssText: "opacity: 0"
                //     }
                // }
                item,
                item,
                item,
                900,
                750,
                600,
                480,
                240
            ]
        }]
    };
    myChart.setOption(option);
    //监听图标，实现自动缩放
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();

// 最右边的第二个模块
(function() {
    var chartDom = document.querySelector('.line');
    var myChart = echarts.init(chartDom);
    // (1)准备数据
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    };
    var option = {
        //设置折现颜色
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            // 通过坐标轴触发
            trigger: 'axis'
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            }
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd",
                //设置成 0 强制显示所有标签
                interval: 0
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: '预期销售额',
                type: 'line',
                stack: '总量',
                //让折线变圆滑
                smooth: true,
                data: data.year[0]
            },
            {
                name: '实际销售额',
                type: 'line',
                stack: '总量',
                //让折线变圆滑
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    myChart.setOption(option);

    //***************切换效果 *******************/
    $('.sales .caption').on('click', 'a', function() {
        index = $(this).index() - 1;
        //点击当前a，高亮显示 调用active
        $(this).addClass('active').siblings('a').removeClass('active');
        //根据a的自定义属性，去获取data对象中的数据
        // console.log();
        // console.log(data.year);
        // console.log(data['year']);
        //****** 根据自定义获取数据----打印 ******/
        // console.log(data[this.dataset.type]);
        var arr = data[this.dataset.type];
        option.series[0].data = arr[0];
        option.series[1].data = arr[1];
        //重新渲染数据
        myChart.setOption(option);
    });
    //***************自动切换*******************/
    // 1、开启定时器
    var as = $('.sales .caption a');
    var index = 0;
    var time = setInterval(function() {
        index++;
        if (index >= 4) {
            index = 0;
        }
        as.eq(index).click();
    }, 1000);
    // 2、鼠标经过清除定时器
    $('.sales').hover(
        function() {
            clearInterval(time);
        },
        function() {
            clearInterval(time);
            time = setInterval(function() {
                index++;
                if (index >= 4) {
                    index = 0;
                }
                as.eq(index).click();
            }, 1000);
        }
    );
    //监听图标，实现自动缩放
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();

// 最右边的第三个模块的一
(function() {
    // 1、实例对象
    var chartDom = document.querySelector('.radar');
    var myChart = echarts.init(chartDom);
    var dataBJ = [
        [155, 120, 156, 4, 38, 66, 111]
    ];
    // var lineStyle = {
    //     normal: {
    //         width: 1,
    //         opacity: 0.5
    //     }
    // };
    var option = {
        tooltip: {
            show: true,
            position: ['48%', '-9%']
        },
        legend: {
            bottom: 5,
            itemGap: 20,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            selectedMode: 'single'
        },
        radar: {
            indicator: [
                { name: '机场', max: 300 },
                { name: '商城', max: 250 },
                { name: 'PM10', max: 300 },
                { name: 'CO', max: 5 },
                { name: 'NO2', max: 200 },
                { name: 'SO2', max: 100 }
            ],
            //修改雷达图大小
            radius: '48% ',
            shape: 'circle',
            // 分割的圆圈个数
            splitNumber: 4,

            name: {
                //修饰雷达图文字
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            // 分割的圆圈线条的样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.5)"
                }
            },
            splitArea: {
                show: false
            },
            //坐标轴的线
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.5)'
                }
            }
        },
        series: [{
            name: '北京',
            type: 'radar',
            // lineStyle: lineStyle,
            lineStyle: {
                normal: {
                    width: 1,
                    opacity: 0.5,
                    //区域线条颜色
                    color: '#fff'
                }
            },
            data: dataBJ,
            //设置小圆点，或者方块、隐藏等
            symbol: 'circle',
            //设置小圆点的大小
            symbolSize: 5,
            //设置小圆点颜色
            itemStyle: {
                color: '#fff'
            },
            //显示小圆点数据
            label: {
                //显示数据
                show: true,
                //设置字体大小
                fontSize: 10
            },
            areaStyle: {
                //区域面积颜色
                color: 'rgba(238,197,102,0.6)'
            }
        }]
    };
    myChart.setOption(option);
    //监听图标，实现自动缩放
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();

// 最右边的第三个模块的二
(function() {
    var chartDom = document.querySelector('.gauge');
    var myChart = echarts.init(chartDom);
    var option = {
        series: [{
            name: '销售进度',
            type: 'pie',
            //鼠标经过不放大

            //修改饼形图大小
            radius: ['125%', '150%'],
            //移动饼形图位置
            center: ['48%', '80%'],
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            //修改起始角度为180
            startAngle: 180,
            data: [
                { value: 100 },
                { value: 100 },
                {
                    value: 200,
                    itemStyle: {
                        color: 'transparent'
                    }
                }
            ]
        }]
    };
    myChart.setOption(option);
})();

// 最右边的第四个模块
(function() {
    // 1. 准备相关数据
    var hotData = [{
            city: "北京", // 城市
            sales: "25, 179", // 销售额
            flag: true, //  上升还是下降
            brands: [
                //  品牌种类数据
                { name: "可爱多", num: "9,086", flag: true },
                { name: "娃哈哈", num: "8,341", flag: true },
                { name: "喜之郎", num: "7,407", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "6,724", flag: false },
                { name: "好多鱼", num: "2,170", flag: true }
            ]
        },
        {
            city: "河北",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "3,457", flag: false },
                { name: "娃哈哈", num: "2,124", flag: true },
                { name: "喜之郎", num: "8,907", flag: false },
                { name: "八喜", num: "6,080", flag: true },
                { name: "小洋人", num: "1,724", flag: false },
                { name: "好多鱼", num: "1,170", flag: false }
            ]
        },
        {
            city: "上海",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "2,345", flag: true },
                { name: "娃哈哈", num: "7,109", flag: true },
                { name: "喜之郎", num: "3,701", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "2,724", flag: false },
                { name: "好多鱼", num: "2,998", flag: true }
            ]
        },
        {
            city: "江苏",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "2,156", flag: false },
                { name: "娃哈哈", num: "2,456", flag: true },
                { name: "喜之郎", num: "9,737", flag: true },
                { name: "八喜", num: "2,080", flag: true },
                { name: "小洋人", num: "8,724", flag: true },
                { name: "好多鱼", num: "1,770", flag: false }
            ]
        },
        {
            city: "山东",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "9,567", flag: true },
                { name: "娃哈哈", num: "2,345", flag: false },
                { name: "喜之郎", num: "9,037", flag: false },
                { name: "八喜", num: "1,080", flag: true },
                { name: "小洋人", num: "4,724", flag: false },
                { name: "好多鱼", num: "9,999", flag: true }
            ]
        }
    ];
    //  2. 根据数据渲染各省热销 sup 模块内容
    // (1)遍历数据接收到的数据
    var supHtml = "";
    $.each(hotData, function(index, object) {
        // console.log(object);
        //(2)创建标签，并添加数据
        supHtml += `<li><span>${object.city}</span><span> ${object.sales} <s class=
        ${object.flag ? "icon-up" : "icon-down"}></s></span></li>`;
    });
    // 把生成的5个小li字符串给 sub dom盒子
    $(".sup").html(supHtml);
    // 3. 当鼠标进入 tab 的时候
    // 鼠标经过当前的小li要高亮显示
    $(".province .sup").on("mouseenter", "li", function() {
        index = $(this).index();
        render($(this));
    });
    // 声明一个函数 里面设置sup当前小li高亮还有 对应的品牌对象渲染
    // 这个函数需要传递当前元素进去
    function render(currentEle) {
        currentEle
            .addClass("active")
            .siblings()
            .removeClass();
        // 拿到当前城市的品牌对象
        // console.log($(this).index());
        // 可以通过hotData[$(this).index()] 得到当前的城市
        // console.log(hotData[$(this).index()]);
        // 我们可以通过hotData[$(this).index()].brands 拿到的是城市对象的品牌种类
        // console.log(hotData[$(this).index()].brands);
        // 开始遍历品牌数组
        var subHTML = "";
        $.each(hotData[currentEle.index()].brands, function(index, item) {
            // 是对应城市的每一个品牌对象
            // console.log(item);
            subHTML += `<li><span>${item.name}</span><span> ${item.num}<s class=
    ${item.flag ? "icon-up" : "icon-down"}
    ></s></span></li>`;
        });
        // 把生成的6个小li字符串给 sub dom盒子
        $(".sub").html(subHTML);
    }
    // 4. 默认把第一个小li处于鼠标经过状态
    var lis = $(".province .sup li");
    lis.eq(0).mouseenter();
    // 5 开启定时器
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index >= 5) index = 0;
        // lis.eq(index).mouseenter();
        render(lis.eq(index));
    }, 2000);

    $(".province .sup").hover(
        // 鼠标经过事件
        function() {
            clearInterval(timer);
        },
        // 鼠标离开事件
        function() {
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                if (index >= 5) index = 0;
                // lis.eq(index).mouseenter();
                render(lis.eq(index));
            }, 2000);
        }
    );
})();