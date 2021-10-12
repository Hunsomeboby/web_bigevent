$(function() {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui();

    //1、为发送按钮绑定点击事件
    $('#btnSen').on('click', function() {
        var text = $('#input_txt').val().trim();
        if (text.length <= 0) {
            // console.log('1');
            return $('#input_txt').val('');
        }
        //2、用户输入了内容，追加到页面中
        $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>');
        $('#input_txt').val('');
        //3、页面内容过多，重置滚动条
        resetui();
        getMsg(text);
    });
    //2、回车的时候，执行绑定的点击事件
    $('#input_txt').on('keyup', function(e) {
        if (e.keyCode === 13) {
            $('#btnSen').click();
        }
    });
    //获取聊天机器人响应的消息
    function getMsg(text) {
        $.ajax({
            method: 'get',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },
            success: function(res) {
                // console.log(res);
                if (res.message === 'success') {
                    var msg = res.data.info.text;
                    // console.log(msg);
                    $('#talk_list').append('<li class="left_word"><img src="img/person02.png" /> <span>' + msg + '</span></li>');
                    //3、页面内容过多，重置滚动条
                    resetui();
                    //语音播放,将获取的信息转换成语音
                    getVoice(msg);
                }
            }
        })
    }
    //语音播放
    function getVoice(text) {
        $.ajax({
            method: 'get',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text
            },
            success: function(res) {
                if (res.status === 200) {
                    //播放语音
                    $('#voice').attr('src', res.voiceUrl);
                }
            }
        })
    }
})