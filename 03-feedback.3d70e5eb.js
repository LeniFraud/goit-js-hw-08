!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,o,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function h(e){return c=e,f=setTimeout(w,t),s?y(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function w(){var e=p();if(O(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function S(e){return f=void 0,v&&i?y(e):(i=o=void 0,a)}function T(){var e=p(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return h(l);if(d)return f=setTimeout(w,t),y(l)}return void 0===f&&(f=setTimeout(w,t)),a}return t=j(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?a:S(p())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var h=document.querySelector(".feedback-form"),O="feedback-form-state",w=h.elements,S=w.email,T=w.message;!function(){try{var e=JSON.parse(localStorage.getItem(O));if(!e)return;S.value=e.email,T.value=e.message}catch(e){console.log("Error: ",e)}}(),h.addEventListener("input",e(t)((function(){var e={email:S.value,message:T.value};localStorage.setItem(O,JSON.stringify(e))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:S.value,message:T.value}),localStorage.removeItem(O),h.reset()}))}();
//# sourceMappingURL=03-feedback.3d70e5eb.js.map
