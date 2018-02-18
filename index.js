$(() => {
    setTimeout(() => {
        $('table._FKw.irc_but_r > tbody > tr').each((i, e) => {
            var $tr = $(e);
            var $td = $('<td/>');
            var $a = $('<a/>');
            console.log($tr)
            $a.attr({
                role: "button",
            })
            $a.append($('<span>画像を表示</span>'))
            $td.append($a);
            $tr.prepend($td)
            $a.on('click',function(){
				window.open($('img.irc_mi').attr('src'))
            })
            console.log($tr.parents('.irc_mmc'))
        })
    }, 1000)
})

function injectScript(func) {
    var el = document.createElement('script');
    el.text = "(" + func.toString() + ")()";
    // console.log(document.)
    document.documentElement.appendChild(el);
}