//获取评论，并循环生成元素
function getCommentList() {
    $.ajax({
        method: 'get',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        data: {},
        success: function(res) {
            // console.log(res);
            if (res.status !== 200) {
                return alert('获取数据失败!');
            }
            // alert('获取数据成功!');
            //获取数据成功，循环生成评论列表
            var rows = [];
            $.each(res.data, function(i, item) {
                var str = '<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：' + item.time + '</span><span class="badge" style="background-color: #5BC0DE;">评论人：' + item.username + '</span>' + item.content + '</li>';
                rows.push(str);
            });
            $('#cmt-list').empty().append(rows.join(''));
        }
    });
}
getCommentList();
$(function() {
    $('#formAddCmt').submit(function(e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function(res) {
            if (res.status !== 201) return alert('发表评论失败！');
            getCommentList();
            //重置表单，不用每个input的去清空内容
            $('#formAddCmt')[0].reset();
        });
    });
})