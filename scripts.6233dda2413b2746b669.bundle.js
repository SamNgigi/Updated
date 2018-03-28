var scrollToElement=function(t,e){var s=e||600;$("html,body").animate({scrollTop:$(t).offset().top},s)};$(document).ready(function(){$(".nav-link").on("click",function(t){t.preventDefault();var e=$(this).attr("href");scrollToElement(e)}),$(window).scroll(function(){$(window).scrollTop()>=42?$("#navbar").fadeIn(300):$("#navbar").fadeOut(300)})}),function(){"use strict";window.onload=function(){document.documentElement.className+=" loaded",Typed.new("#typed",{stringsElement:document.getElementById("typed-strings"),loop:!0,typeSpeed:5,backSpeed:2,startDelay:10,backDelay:1600})}}(),function(t,e,s){"use strict";var n=function(t,e){var n=this;this.el=t,this.options={},Object.keys(o).forEach(function(t){n.options[t]=o[t]}),Object.keys(e).forEach(function(t){n.options[t]=e[t]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=s&&this.options.stringsElement instanceof s?this.options.stringsElement[0]:this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};n.prototype={constructor:n,init:function(){var t=this;t.timeout=setTimeout(function(){for(var e=0;e<t.strings.length;++e)t.sequence[e]=e;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var t=this;!0===this.showCursor&&(this.cursor=e.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement&&(this.strings=[],this.stringsElement.style.display="none",Array.prototype.slice.apply(this.stringsElement.children).forEach(function(e){t.strings.push(e.innerHTML)})),this.init()},typewrite:function(t,e){if(!0!==this.stop){var s=Math.round(70*Math.random())+this.typeSpeed,n=this;n.timeout=setTimeout(function(){var s=0,o=t.substr(e);if("^"===o.charAt(0)){var i=1;/^\^\d+/.test(o)&&(i+=(o=/\d+/.exec(o)[0]).length,s=parseInt(o)),t=t.substring(0,e)+t.substring(e+i)}if("html"===n.contentType){var r=t.substr(e).charAt(0);if("<"===r||"&"===r){var a;for(a="<"===r?">":";";t.substr(e+1).charAt(0)!==a&&(t.substr(e).charAt(0),!(++e+1>t.length)););e++}}n.timeout=setTimeout(function(){if(e===t.length){if(n.options.onStringTyped(n.arrayPos),n.arrayPos===n.strings.length-1&&(n.options.callback(),n.curLoop++,!1===n.loop||n.curLoop===n.loopCount))return;n.timeout=setTimeout(function(){n.backspace(t,e)},n.backDelay)}else{0===e&&n.options.preStringTyped(n.arrayPos);var s=t.substr(0,e+1);n.attr?n.el.setAttribute(n.attr,s):n.isInput?n.el.value=s:"html"===n.contentType?n.el.innerHTML=s:n.el.textContent=s,n.typewrite(t,++e)}},s)},s)}},backspace:function(t,e){if(!0!==this.stop){var s=Math.round(70*Math.random())+this.backSpeed,n=this;n.timeout=setTimeout(function(){if("html"===n.contentType&&">"===t.substr(e).charAt(0)){for(;"<"!==t.substr(e-1).charAt(0)&&(t.substr(e).charAt(0),!(--e<0)););e--}var s=t.substr(0,e);n.attr?n.el.setAttribute(n.attr,s):n.isInput?n.el.value=s:"html"===n.contentType?n.el.innerHTML=s:n.el.textContent=s,e>n.stopNum?n.backspace(t,--e):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.shuffle&&(n.sequence=n.shuffleArray(n.sequence)),n.init()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))},s)}},shuffleArray:function(t){var e,s,n=t.length;if(n)for(;--n;)e=t[s=Math.floor(Math.random()*(n+1))],t[s]=t[n],t[n]=e;return t},reset:function(){clearInterval(this.timeout),this.el.getAttribute("id"),this.el.textContent="","undefined"!=typeof this.cursor&&"undefined"!=typeof this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},n.new=function(t,s){Array.prototype.slice.apply(e.querySelectorAll(t)).forEach(function(t){var e=t._typed,o="object"==typeof s&&s;e&&e.reset(),t._typed=e=new n(t,o),"string"==typeof s&&e[s]()})},s&&(s.fn.typed=function(t){return this.each(function(){var e=s(this),o=e.data("typed"),i="object"==typeof t&&t;o&&o.reset(),e.data("typed",o=new n(this,i)),"string"==typeof t&&o[t]()})}),t.Typed=n;var o={strings:["These are the default values","Try them","Use your own!",".."],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery);