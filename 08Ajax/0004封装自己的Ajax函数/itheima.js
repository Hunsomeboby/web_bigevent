// 1、将对象转换成查询字符串
function resolveData(data) {
    var arr = [];
    for (var k in data) {
        var str = k + '=' + data[k];
        arr.push(str);
    }
    return arr.join('$');
}
// var result = resolveData({ name: 'zs', age: 20 });
// console.log(result);
function itheima(options) {
    var xhr = new XMLHttpRequest();
    //把外界传递过来的参数对象，转换为查询字符串
    var qs = resolveData(options.data);
    if (options.method.toUpperCase() === 'GET') {
        //GET请求
        xhr.open(options.method, options.url + '?' + qs)
        xhr.send();
    } else if (options.method.toUpperCase() === 'POST') {
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Conten-Type', 'application/x-www/form-urlencode');
        xhr.send();
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            options.success(result);
        }
    }

}