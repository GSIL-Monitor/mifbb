/**
 * Created by Administrator on 2018/1/11 0011.
 */
$(function () {
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    if (true) {
        var aNodes = $('#mnews a');
        for (var i = 0; i < aNodes.length; i++) {
            var href = aNodes[i].getAttribute('href');

            if(href.indexOf('http://baijiahao.baidu.com/') === 0){
                aNodes[i].setAttribute('href', '../iframe.htm?'+href);
            };
            /*if(href.indexOf('https://www.toutiao.com/') === 0){
                aNodes[i].setAttribute('href', '../antiHijack.htm?'+href);
            };*/

        }
    }
    document.body.addEventListener('touchmove',function(event){
        if($('body').hasClass('open')){
            event.preventDefault();
        }
    },false);
});