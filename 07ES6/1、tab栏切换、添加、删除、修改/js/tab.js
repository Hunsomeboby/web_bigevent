var that;
class Tab {
    constructor(id) {
            //获取元素
            that = this;
            this.main = document.querySelector(id);
            this.add = this.main.querySelector(".tabadd");

            //li的父元素
            this.ul = this.main.querySelector(".fisrstnav ul:first-child");
            this.fsection = this.main.querySelector(".tabscon");
            this.init();
        }
        //5、清除样式
    clearClass() {

            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';
            }
        }
        //获取所有li 和 section
    updateNode() {
        this.lis = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll("section");
        this.remove = this.main.querySelectorAll(".icon-guanbi");
        this.spans = this.main.querySelectorAll(".fisrstnav li span:first-child");
    }
    init() {
        this.updateNode();
        //初始化事件绑定-------切换
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            //******** this.toggleTab不加括号，加了括号就会没点击就自动调用函数*******/
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTag;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
        //初始化事件绑定-------添加
        this.add.onclick = this.addTag;
    }

    // 1、切换功能
    toggleTab() {
            // console.log(this.index);
            //点击的li变样式
            that.clearClass();
            this.className = 'liactive';
            that.sections[this.index].className = 'conactive';
        }
        // 2、添加功能
    addTag() {
            var random = Math.random();
            that.clearClass();
            //(1)创建li元素和section元素
            var li = ' <li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
            var section = '  <section class="conactive">' + random + '</section>';
            //(2)追加
            that.ul.insertAdjacentHTML('beforeend', li);
            that.fsection.insertAdjacentHTML('beforeend', section);
            that.init();
        }
        // 3、删除功能
    removeTag(e) {
            e.stopPropagation();
            var index = this.parentNode.index;
            // console.log(index);
            //删除
            that.lis[index].remove();
            that.sections[index].remove();
            that.init();
            //删除完毕，让前一个li处于选定状态,if判断：如果li有选定状态，则不让删除li的前一个为选定状态
            if (document.querySelector('.liactive')) return; //return:结束代码
            index--;
            //自动点击，不需要自己点击才触发
            // if (index > 0) {
            //     that.lis[index].click();
            // }
            that.lis[index] && that.lis[index].click();
        }
        // 4、修改功能
    editTab() {
        // alert(11);
        var str = this.innerHTML;
        //(1) 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // (2)生成文本框
        this.innerHTML = '<input type="text"/>';
        var input = this.children[0];
        input.value = str;
        // 文字处于选定状态
        input.select();
        // (3)
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        };
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                //自动调用失去焦点事件
                this.blur();
            }
        };
    }

}
var tab = new Tab("#tab");