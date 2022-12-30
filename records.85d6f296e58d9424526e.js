(()=>{"use strict";var t,e={601:(t,e,r)=>{r(669),r(580);var n=r(409),o=["Total","Insane","Hard","Main","Easy","Mod","Unknown"],a=r(627);function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e,this.className="map-records",this.$component=this.initHtml()}var e,r;return e=t,(r=[{key:"getOptions",value:function(){return this.options.record}},{key:"getHtml",value:function(){return this.$component}},{key:"initHtml",value:function(){var t,e,r,n="https://kog.tw/#p=maps&map=".concat(this.options.record.name),o=this.options.record.category.toLowerCase(),c=(t=this.options.record.time,e=Math.round(100*t%100),r=Math.floor(t),[Math.floor(r/3600),Math.floor(r/60)%60,r%60,e].map((function(t){return t<10?"0"+t:t})).filter((function(t,e){return"00"!==t||e>0})).reduce((function(t,e,r,n){var o=r+1!==n.length?":":".";return 0===r?"".concat(e):"".concat(t).concat(o).concat(e)}),"")),s="";return void 0!==this.options.record.players&&(s+='\n        <td class="'.concat(this.className,'__table-cell-players">\n          ').concat(this.options.record.players.join(", "),"\n        </td>\n      ")),a('\n      <tr class="'.concat(this.className,"__table-row js-").concat(this.className,"__table-row ").concat(this.className,'__table-row_body">\n        <td class="').concat(this.className,"__table-cell-rank js-").concat(this.className,"__table-cell-rank ").concat(this.className,"__table-cell-rank_rank").concat(this.options.record.rank,'">\n          ').concat(this.options.record.rank,'\n        </td>\n        <td class="').concat(this.className,'__table-cell-name">\n          <a class="').concat(this.className,'__table-cell-name-link" href="').concat(n,'" target="_blank" rel="noopener noreferrer">\n            ').concat(this.options.record.name,"\n          </a>\n        </td>\n        ").concat(s,'\n        <td class="').concat(this.className,"__table-cell-category ").concat(this.className,"__table-cell-category_").concat(o," js-").concat(this.className,'__table-cell-category">\n          ').concat(this.options.record.category,'\n        </td>\n        <td class="').concat(this.className,"__table-cell-time js-").concat(this.className,'__table-cell-time">\n          ').concat(c,"\n        </td>\n      </tr>\n    "))}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const l=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=r,this.className="map-records",this.$component=e.find(".js-".concat(this.className)),this.$tableBody=this.$component.find(".js-".concat(this.className,"__table-body")),this.recordEntries=[],this.options.records.forEach((function(t){t.category!==n.options.sortBy&&"Total"!==n.options.sortBy||n.recordEntries.push(new s({record:t}))})),this.options.withPlayers||this.sortRecordEntries()}var e,r,n;return e=t,n=[{key:"compareMapEntries",value:function(t,e){var r=t.getOptions().rank-e.getOptions().rank;if(0!==r)return r;var n=t.getOptions().category,a=e.getOptions().category,c=o.indexOf(n)-o.indexOf(a);return 0!==c?c:0}}],(r=[{key:"getRecordEntries",value:function(){return this.recordEntries}},{key:"render",value:function(t){var e=this;this.$tableBody.empty(),t.forEach((function(t){var r=t.getHtml();e.$tableBody.append(r)}))}},{key:"sortRecordEntries",value:function(){this.recordEntries.sort(t.compareMapEntries)}}])&&i(e.prototype,r),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&p(t.prototype,e),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}const h=u((function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=r,this.className="records",this.$component=e,this.$title=this.$component.find(".js-".concat(this.className,"__title-text")),this.$title.html("Latest records"),this.mapRecords=new l(this.$component.find(".js-".concat(this.className,"__map-records")),this.options.mapRecords),new n.Z(this.$component.find(".js-".concat(this.className,"__pagination")),{dataSource:this.mapRecords.getRecordEntries(),render:this.mapRecords.render.bind(this.mapRecords)})}));function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}!function(t){var e=r(990),n=r(675),o={mapRecords:d({records:e.data.reverse(),sortBy:"Total"},n.mapRecords)};new h(t(".js-".concat("records")),o)}(r(627))},990:t=>{t.exports=JSON.parse('{"data":[{"players":["Ziinox","Neø"],"time":691.24,"category":"Insane","name":"bzw4","rank":1},{"players":["Neø","Ziinox"],"time":433.26,"category":"Insane","name":"ghosttown","rank":1},{"players":["Zero Two"],"time":225.52,"category":"Main","name":"Bl0odFlip","rank":1},{"players":["JuKKi"],"time":139.22,"category":"Insane","name":"Mixi4Rouz","rank":1},{"players":["Drakenmake","Neø"],"time":364.34,"category":"Insane","name":"SUPSANE","rank":1}]}')},675:t=>{t.exports=JSON.parse('{"mapRecords":{"withPlayers":true}}')}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t].call(a.exports,a,a.exports,n),a.exports}n.m=e,t=[],n.O=(e,r,o,a)=>{if(!r){var c=1/0;for(p=0;p<t.length;p++){for(var[r,o,a]=t[p],s=!0,i=0;i<r.length;i++)(!1&a||c>=a)&&Object.keys(n.O).every((t=>n.O[t](r[i])))?r.splice(i--,1):(s=!1,a<c&&(c=a));if(s){t.splice(p--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[r,o,a]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t={914:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,a,[c,s,i]=r,l=0;if(c.some((e=>0!==t[e]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(i)var p=i(n)}for(e&&e(r);l<c.length;l++)a=c[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(p)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[871,977],(()=>n(601)));o=n.O(o)})();