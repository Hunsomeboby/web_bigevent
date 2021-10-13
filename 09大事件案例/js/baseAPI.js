//每次调用 $.get() 或  $.poat() 或  $.ajax() 的时候，
//会先调用 ajaxPrefilter() 这个函数
//这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(option) {
    // console.log(option.url);
    //在发起真正的 Ajax 请求之前，统一拼接请求的根路径
    option.url = "http://api-breakingnews-web.itheima.net" + option.url;
    console.log(option.url);
})