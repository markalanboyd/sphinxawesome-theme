!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2);const o=document.querySelector("nav"),r=document.querySelector("#search-pane"),c=document.querySelector("#tooltip"),a=document.querySelector("#snackbar"),l=document.querySelector("#searchbox"),i=document.querySelector("#search-input"),s=document.querySelector("#openNavBtn");s&&s.addEventListener("click",()=>{o.setAttribute("data-menu","open")});const d=document.querySelector("#closeNavBtn");d&&d.addEventListener("click",()=>{o.setAttribute("data-menu","closed")}),document.querySelectorAll("nav li.current a").forEach(e=>{d.offsetWidth>0&&d.offsetHeight>0&&e.addEventListener("click",()=>{o.setAttribute("data-menu","closed")})});const u=document.querySelector("#openSearchBtn");u&&u.addEventListener("click",()=>{r.setAttribute("data-menu","open")});const y=document.querySelector("#closeSearchBtn");function m(e){const t=document.createElement("button");t.setAttribute("aria-label",_("Copy this code block")),t.classList.add("absolute","right-0","top-0","p-2","text-gray-600","outline-none","focus:outline-none","focus:text-pink-500","hover:text-pink-500"),t.innerHTML='<svg aria-hidden="true" class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-4v4a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 012 2v4h4V2H8v4zM2 8v10h10V8H2z"/></svg>',t.addEventListener("mouseenter",e=>{const t=e.target.getBoundingClientRect();c.style.opacity=.6,c.style.visibility="visible",c.style.top=t.y+t.height+1+"px",c.style.left=t.x-4+"px",c.textContent=_("Copy this code")}),t.addEventListener("mouseleave",()=>{c.textContent="",c.style.opacity=0,c.style.visibility="hidden"}),t.addEventListener("click",()=>{const t=function(e){const t=window.getSelection(),n=document.createRange();return n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n),t}(e);document.execCommand("copy"),t.removeAllRanges(),p(_("Copied code to clipboard"))}),e.appendChild(t)}function p(e){a.textContent=e,a.style.opacity=1,a.style.transform="translate(0,0)",setTimeout(v,2e3)}function v(){a.style.opacity=0,a.style.transform="translate(0,100%)",a.classList.remove("bg-gray-200","text-blue-700"),a.classList.add("bg-gray-900","text-gray-100")}y&&y.addEventListener("click",()=>{r.setAttribute("data-menu","closed")}),document.querySelectorAll("pre.literal-block").forEach(e=>{const t=document.createElement("div");t.classList.add("highlight"),e.parentNode.insertBefore(t,e),t.appendChild(e)}),document.querySelectorAll("div.highlight").forEach(e=>{e.style.position="relative",m(e)}),setTimeout(()=>{const e=document.querySelectorAll(".highlighted");e.length&&(a.innerHTML='<a class="tracking-wide" href="javascript:Documentation.hideSearchWords()">'+_("Clear highlighted words")+"</a>",a.classList.remove("bg-gray-900","text-gray-100"),a.classList.add("bg-gray-200","text-blue-700"),a.style.opacity=1,a.style.transform="translate(0,0)",document.querySelector("#snackbar > a").addEventListener("click",()=>{v(),i.value=""}),i.value=e[0].textContent,i.addEventListener("search",()=>{Documentation.hideSearchWords(),v()}))},500),l.addEventListener("submit",e=>{i.value.length<1&&e.preventDefault()}),window.addEventListener("keydown",e=>{"Slash"===e.code&&(i.focus(),i.value="",e.preventDefault()),"Escape"===e.code&&(i.blur(),e.preventDefault())}),window.addEventListener("scroll",()=>{c.textContent="",c.style.opacity=0,c.style.visibility="hidden"}),document.querySelectorAll(".headerlink").forEach(e=>{e.addEventListener("click",t=>{!function(e,t){const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n);const o=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);n.select(),document.execCommand("copy"),document.body.removeChild(n),o&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(o));p(t)}(e.href,_("Copied link to clipboard")),t.preventDefault()})})},function(e,t,n){},function(e,t,n){}]);
