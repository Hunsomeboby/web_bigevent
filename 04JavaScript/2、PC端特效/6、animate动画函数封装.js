// window.onload = function() {
//     var div = document.querySelector('div');
//     var btn_400 = document.querySelector('.btn_400');
//     var btn_800 = document.querySelector('.btn_800');
//1、动画函数（匀速动画）的封装  obj:谁调用该函式    target:到哪个位子结束
function animate(obj, target) {
    //保证一个对象只有一个定时器，解决每点击一次就会开启一个定时器的bug
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        if (div.offsetLeft >= target) {
            clearInterval(timer);
        }
        obj.style.left = div.offsetLeft + 5 + 'px';
    }, 30);
}
//1、动画函数（缓动动画）的封装  obj:谁调用该函式    target:到哪个位子结束   callback：接收一个函数
function animate_huandong(obj, target, callback) {
    //保证一个对象只有一个定时器，解决每点击一次就会开启一个定时器的bug
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        //后退是负数，取整要用负数的函数取，整数取整用Math.ceil
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //回调函数
            if (callback) {
                //调用回调函数
                callback();
            }
        }
        //（目标值 - 当前位子）/ 10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);
}
// btn_400.addEventListener('click', function() { //此次有bug，每点击一次就会调用一次，开启一个定时器，导致速度越来越快
//     //2、调用函数
//     // animate(div, 400);
//     animate_huandong(div, 400, function() {
//         console.log('定时器结束，调用该函数');
//         div.style.backgroundColor = 'blue';
//     });
// });

// btn_800.addEventListener('click', function() { //此次有bug，每点击一次就会调用一次，开启一个定时器，导致速度越来越快
//     //2、调用函数
//     // animate(div, 400);
//     animate_huandong(div, 800);
// });