(function(window){var svgSprite='<svg><symbol id="icon-star2" viewBox="0 0 1024 1024"><path d="M512 271.232C376.32 67.712 104.96 186.8288 104.96 408.5248c0 149.98016 135.50592 256.95232 237.44 337.60256 105.92768 83.79904 135.68 101.76 169.6 135.68 33.92-33.92 62.27456-53.66272 169.6-135.68 103.39328-78.97088 237.44-189.25568 237.44-339.21024C919.04 186.8288 647.68 67.712 512 271.232"  ></path></symbol><symbol id="icon-star1" viewBox="0 0 1024 1024"><path d="M925.866667 458.666667c-61.866667 66.133333-164.266667 174.933333-164.266667 174.933333s19.2 155.733333 29.866667 243.2c4.266667 34.133333-49.066667 34.133333-49.066667 34.133333l-2.133333-2.133333c-81.066667-38.4-217.6-102.4-217.6-102.4s-140.8 66.133333-221.866667 104.533333c-32 14.933333-51.2-2.133333-46.933333-38.4 10.666667-89.6 29.866667-238.933333 29.866667-238.933333s-87.466667-93.866667-149.333333-160c-34.133333-36.266667-32-68.266667 4.266667-74.666667 87.466667-17.066667 236.8-44.8 236.8-44.8s81.066667-147.2 123.733333-224C512 102.4 531.2 102.4 546.133333 128c40.533333 74.666667 123.733333 226.133333 123.733333 226.133333S832 384 919.466667 401.066667C949.333333 407.466667 951.466667 430.933333 925.866667 458.666667z"  ></path></symbol><symbol id="icon-star" viewBox="0 0 1024 1024"><path d="M960 400 617.038 400 512.058 64 407.038 400 64 400 341.892 608.418 232 960 512 736 792 960 682.146 608.39Z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)