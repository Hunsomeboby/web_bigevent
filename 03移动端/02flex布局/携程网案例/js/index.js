window.addEventListener('load', function() {
    //1.获取元素
    var foucus = this.document.querySelector('.foucus');
    var ul = foucus.children[0];
    var ol = foucus.children[1];
    //获得foucus的宽度
    var w = foucus.offsetWidth;
    //2.利用定时器自动播放轮播图
    var index = 0;
    var timer = this.setInterval(function() {
        index++;
        var translateX = -index * w;
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translateX + 'px)';
    }, 2000);
    //等着过度完成之后，再去判断，监听过渡完成的事件 transitionend
    ul.addEventListener('transitionend', function() {
        // console.log('过度完成了');
        if (index >= 3) {
            index = 0;
            //去掉过渡效果
            ul.style.transition = 'none';
            //快速返回第一张
            var translateX = -index * w;
            ul.style.transform = 'translateX(' + translateX + 'px)';
        } else if (index < 0) {
            index = 2;
            //去掉过渡效果
            ul.style.transition = 'none';
            //快速返回最后一张
            var translateX = -index * w;
            ul.style.transform = 'translateX(' + translateX + 'px)';
        }
        //小圆点变化
        //1.先移除小圆点样式
        ol.querySelector('.current').classList.remove('current');
        //2.根据索引让小圆点变化
        ol.children[index].classList.add('current');
    });

    //4.手指滑动轮播图
    //(1)触摸元素 touchstart:获取手指的初始坐标
    var startX = 0;
    //手指移动的距离
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    });
    //(2)计算手指滑动距离，并且移动盒子
    ul.addEventListener('touchmove', function(e) {
        //计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        //移动盒子 原来的位置 + 手指移动的距离
        var translateX = -index * w + moveX;
        //不需要动画过度
        //去掉过渡效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translateX + 'px)';
        flag = true;
        //阻止屏幕滚动
        e.preventDefault();
    });
    //(3)手指离开，如果移动距离大于50px，播放上一张或下一张
    ul.addEventListener('touchend', function(e) {
        if (flag) {
            //(3)手指离开，如果移动距离大于50px，播放上一张或下一张
            if (Math.abs(moveX) > 50) {
                //如果是右滑，播放上一张（move是正值）
                if (moveX > 0) {
                    index--;
                } else {
                    //如果是左滑，播放下一张（move是负值）
                    index++;
                }
                var translateX = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translateX + 'px)';
            } else {
                var translateX = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translateX + 'px)';
            }
        }
        //开启定时器
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var translateX = -index * w;
            ul.style.transition = 'all .3s'
            ul.style.transform = 'translateX(' + translateX + 'px)';
        }, 2000);
    });

    //返回顶部
    var goBack = this.document.querySelector('.goBack');
    var nav = this.document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });
    goBack.addEventListener('click', function() {
        window.scroll(0, 0);
    });
})