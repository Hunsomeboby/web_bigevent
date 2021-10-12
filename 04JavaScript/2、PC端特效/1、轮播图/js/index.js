window.addEventListener('load', function() {
    // 获取大盒子
    var box = this.document.querySelector('.box');
    // 左侧按钮
    var left_btn = this.document.getElementById('left_btn');
    // 右侧按钮
    var right_btn = this.document.getElementById('right_btn');
    //鼠标经过,左侧和右侧箭头显示
    box.addEventListener('mouseenter', function() {
        left_btn.style.display = 'block';
        right_btn.style.display = 'block';
        clearInterval(time);
        time = null;
    });
    //鼠标离开,左侧和右侧箭头隐藏
    box.addEventListener('mouseleave', function() {
        left_btn.style.display = 'none';
        right_btn.style.display = 'none';
        img_zidong();
    });


    //根据图片数量,动态生成小圆点 
    //1.获取插入小圆点的父级ol
    var circle = this.document.querySelector('.circle');
    //2.获取图片数量(li的个数)
    var ul = box.querySelector('ul');
    //左右按钮控制图片移动的大小下标
    var index_img = 0;
    //存放所有生成的li
    var arr_li = [];
    //s③放图片盒子的宽度(图片的大小)
    var boxWidth = box.offsetWidth;
    //3.循环插入小圆点
    for (var i = 0; i < ul.children.length; i++) {
        //(1).创建li,给自定义属性:记录索引号
        var li = this.document.createElement('li');
        arr_li.push(li);
        li.setAttribute('index', i);
        //(2).插入li
        circle.appendChild(li);
        //(4)为每个生成的小圆圈绑定点击事件
        li.addEventListener('click', function() {
            //①将所有li背景颜色清除
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            //②设置点击的li背景颜色
            this.className = 'current';
            //s④获取点击的li的index属性
            var index = this.getAttribute('index');
            index_img = parseInt(index);
            console.log('左侧按钮:' + index_img);

            console.log(index);
            animate_huandong(ul, -index * boxWidth);
        });
    }
    //(3).将第一个小圆点设置类名为current(样式设置了背景为红色)
    circle.children[0].className = 'current';

    //先克隆图片
    var fist = ul.children[0].cloneNode(true);
    ul.appendChild(fist);
    //1.左鼠标箭头控制轮播图
    var flag = true;
    left_btn.addEventListener('click', function() {
        if (flag) {
            console.log('执行节流阀');
            //关闭
            flag = false;
            // if ((index_img + 1) < ul.children.length) {
            //当到最后一张的时候,让ul快速回到left=0
            if (index_img + 1 == ul.children.length) {
                ul.style.left = 0;
                index_img = 0;
            }
            //(1)点击图片移动
            index_img++;
            animate_huandong(ul, -index_img * boxWidth, function() {
                flag = true;
            });

            //(2)点击让对应的小圆点背景设置为红色
            //①将所有li背景颜色清除
            for (var i = 0; i < arr_li.length; i++) {
                arr_li[i].className = '';
            }
            //②设置点击的li背景颜色
            if (index_img == arr_li.length) {
                arr_li[0].className = 'current';
            } else {
                arr_li[index_img].className = 'current';
            }

            // }
        }
    });
    //2.右鼠标箭头控制轮播图
    right_btn.addEventListener('click', function() {
        if (flag) {
            console.log('执行节流阀');
            //关闭
            flag = false;
            console.log('所有li' + arr_li);
            if (index_img == 0) {
                ul.style.left = -(box.offsetWidth * (ul.children.length - 1)) + 'px';
                index_img = 4;
            }
            index_img--;
            animate_huandong(ul, -index_img * boxWidth, function() {
                flag = true;
            });
            //①将所有li背景颜色清除
            for (var i = 0; i < arr_li.length; i++) {
                arr_li[i].className = '';
            }
            //②设置点击的li背景颜色
            arr_li[index_img].className = 'current';
        }
    });

    //1.自动播放轮播图
    var time;
    img_zidong();

    function img_zidong() {
        time = this.setInterval(function() {
            if (index_img + 1 == ul.children.length) {
                console.log(ul.children.length);
                ul.style.left = 0;
                index_img = 0;
            }
            //(1)点击图片移动
            index_img++;
            animate_huandong(ul, -index_img * boxWidth);

            //(2)点击让对应的小圆点背景设置为红色
            //①将所有li背景颜色清除
            for (var i = 0; i < arr_li.length; i++) {
                arr_li[i].className = '';
            }
            //②设置点击的li背景颜色
            if (index_img == arr_li.length) {
                arr_li[0].className = 'current';
            } else {
                arr_li[index_img].className = 'current';
            }
        }, 2000);
    }
})