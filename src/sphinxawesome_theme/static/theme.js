!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1),o(2);const n=document.querySelector("nav"),c=document.querySelector("#search-pane"),r=document.querySelector("#tooltip"),l=document.querySelector("#snackbar"),a=document.querySelector("#searchbox"),u=document.querySelector("#search-input"),i=document.querySelector("#openNavBtn");i&&(i.onclick=()=>{n.setAttribute("data-menu","open")});const s=document.querySelector("#closeNavBtn");s&&(s.onclick=()=>{n.setAttribute("data-menu","closed")}),document.querySelectorAll("nav li.current a").forEach(e=>{s.offsetWidth>0&&s.offsetHeight>0&&(e.onclick=()=>{n.setAttribute("data-menu","closed")})});const d=document.querySelector("#openSearchBtn");d&&(d.onclick=()=>{c.setAttribute("data-menu","open")});const y=document.querySelector("#closeSearchBtn");function m(e){l.textContent=e,l.style.opacity=1,l.style.transform="translate(0,0)",setTimeout(f,2e3)}function f(){l.style.opacity=0,l.style.transform="translate(0,100%)",l.classList.remove("bg-gray-200","text-blue-700"),l.classList.add("bg-gray-900","text-gray-100")}y&&(y.onclick=()=>{c.setAttribute("data-menu","closed")}),document.querySelectorAll("button.copy").forEach(e=>{function t(e){const t=e.target.getBoundingClientRect();r.style.opacity=.6,r.style.visibility="visible",r.style.top=t.y+t.height+1+"px",r.style.left=t.x-4+"px",r.textContent=_("Copy this code")}function o(){r.textContent="",r.style.opacity=0,r.style.visibility="hidden"}e.onmouseenter=e=>{t(e)},e.onfocus=e=>{t(e)},e.onmouseleave=o,e.onblur=o,e.onclick=()=>{const t=function(e){const t=window.getSelection(),o=document.createRange();return o.selectNodeContents(e),t.removeAllRanges(),t.addRange(o),t}(e.parentNode);document.execCommand("copy"),t.removeAllRanges(),m(_("Copied code to clipboard"))}}),setTimeout(()=>{const e=document.querySelectorAll(".highlighted");e.length&&(l.innerHTML='<a class="tracking-wide" href="javascript:Documentation.hideSearchWords()">'+_("Clear highlighted words")+"</a>",l.classList.remove("bg-gray-900","text-gray-100"),l.classList.add("bg-gray-200","text-blue-700"),l.style.opacity=1,l.style.transform="translate(0,0)",document.querySelector("#snackbar > a").onclick=()=>{f(),u.value=""},u.value=e[0].textContent,u.onsearch=()=>{Documentation.hideSearchWords(),f()})},500),a.onsubmit=e=>{u.value.length<1&&e.preventDefault()},window.addEventListener("keydown",e=>{"Slash"===e.code&&(u.focus(),u.value="",e.preventDefault()),"Escape"===e.code&&(u.blur(),e.preventDefault())}),window.onscroll=()=>{r.textContent="",r.style.opacity=0,r.style.visibility="hidden"},document.querySelectorAll(".headerlink").forEach(e=>{e.onclick=t=>{!function(e,t){const o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",document.body.appendChild(o);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);o.select(),document.execCommand("copy"),document.body.removeChild(o),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n));m(t)}(e.href,_("Copied link to clipboard")),t.preventDefault()}}),document.querySelectorAll(".expand").forEach(e=>{e.onclick=()=>{e.parentElement.classList.toggle("expanded")}});document.querySelectorAll("#nav-toc a").forEach(e=>{e.onfocus=e=>{document.querySelectorAll(".expand").forEach(t=>{const o=t.parentElement;o.contains(e.target)?o.classList.add("expanded"):o.classList.contains("current")||o.classList.remove("expanded")})}});const p=document.querySelector("#main-wrapper"),g=p.offsetTop,h=document.documentElement.offsetHeight||document.body.offsetHeight,b=document.querySelectorAll("main section");p.onscroll=()=>{for(var e=0;e<b.length;++e){const t=b[e].getBoundingClientRect();if(g<=t.top&&t.top<=h){const t=document.querySelector(`#nav-toc a[href*=${b[e].id}]`);t&&t.classList.add("current")}if(t.top<g||t.top>h){const t=document.querySelector(`#nav-toc a[href*=${b[e].id}]`);t&&t.classList.remove("current")}}}},function(e,t,o){},function(e,t,o){}]);
