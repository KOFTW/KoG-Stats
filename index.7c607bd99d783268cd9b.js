(()=>{"use strict";var e,t={470:(e,t,r)=>{r(669),r(580);var n=r(275),a=["rank 1","rank 2","rank 3","rank 4","rank 5"];function o(e,t,r,n){if(n>=a.length)return 0;var i=a[n];return e.categories[r][i]!==t.categories[r][i]?e.categories[r][i]-t.categories[r][i]:o(e,t,r,n+1)}var i=r(627);function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const c=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=r,this.className="leaderboard",this.$component=t,this.$rank=this.$component.find(".js-".concat(this.className,"__table-cell-rank")),this.$ranks=this.$component.find(".js-".concat(this.className,"__table-cell-total-ranks")),this.$name=this.$component.find(".js-".concat(this.className,"__table-cell-name"))}var t,r;return t=e,(r=[{key:"getOptions",value:function(){return this.options.player}},{key:"getHtml",value:function(){return this.$component}},{key:"setHandlers",value:function(){this.$name.on("click.player-entry-name",this.handleNameClick.bind(this))}},{key:"hasAnyRanks",value:function(e){for(var t=0;t<a.length;t++)if(this.options.player.categories[e][a[t]]>0)return!0;return!1}},{key:"update",value:function(e,t){this.setRank(t);var r=this.options.player.categories[e];this.setRanks(r)}},{key:"makeActive",value:function(e){this.$rank.addClass("".concat(this.className,"__table-cell-rank_rank").concat(e))}},{key:"removeActive",value:function(e){this.$rank.removeClass("".concat(this.className,"__table-cell-rank_rank").concat(e))}},{key:"handleNameClick",value:function(){var e=new URLSearchParams(window.location.search);e.set("player",this.options.player.name),location.href="/player-profile.html?".concat(e.toString())}},{key:"setRank",value:function(e){this.$rank.html(e.toString()),e>=1&&e<=3&&this.makeActive(e)}},{key:"setRanks",value:function(e){this.$ranks.each((function(t,r){i(r).html(e[a[t]].toString())}))}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();var l=r(627);function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const u=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=r,this.className="leaderboard",this.$component=t.find(".js-".concat(this.className)),this.$tableBody=this.$component.find(".js-".concat(this.className,"__table-body")),this.$playerEntries=this.$component.find(".js-".concat(this.className,"__table-row")),this.playerEntries=[],this.$playerEntries.each(this.initPlayerEntry.bind(this)),"Total"!==this.options.sortBy?this.initLeaderboard():(this.playerEntries[0].update("Total",1),this.playerEntries[1].update("Total",2),this.playerEntries[2].update("Total",3))}var t,r,n;return t=e,n=[{key:"comparePlayerEntries",value:function(e){return function(t,r){return o(t.getOptions(),r.getOptions(),e,0)}}}],(r=[{key:"getPlayerEntries",value:function(){var e=this;return this.playerEntries.filter((function(t){return t.hasAnyRanks(e.options.sortBy)}))}},{key:"render",value:function(e){var t=this;this.$tableBody.empty(),e.forEach((function(e){var r=e.getHtml();t.$tableBody.append(r),e.setHandlers()}))}},{key:"initLeaderboard",value:function(){var t=this;this.$tableBody.empty();var r=this.options.sortBy;this.playerEntries=this.playerEntries.sort(e.comparePlayerEntries(r)).reverse(),this.playerEntries.forEach((function(e,n){if(e.hasAnyRanks(r)){e.update(r,n+1);var a=e.getHtml();t.$tableBody.append(a),e.setHandlers()}}))}},{key:"initPlayerEntry",value:function(e,t){var r=l(t);this.playerEntries.push(new c(r,{player:this.options.players[e]}))}}])&&p(t.prototype,r),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var h=r(409);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&b(e.prototype,t),r&&b(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}const v=d((function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=r,this.className="landing",this.$component=t,this.$pagination=this.$component.find(".js-".concat(this.className,"__pagination")),this.$categoryMenu=this.$component.find(".js-".concat(this.className,"__category-menu"));var a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({sortBy:this.options.sortBy},this.options.categoryMenu);this.categoryMenu=new n.Z(this.$component,a),this.leaderboard=new u(this.$component.find(".js-".concat(this.className,"__leaderboard")),{sortBy:this.options.sortBy,players:this.options.players}),new h.Z(this.$pagination,{dataSource:this.leaderboard.getPlayerEntries(),render:this.leaderboard.render.bind(this.leaderboard)})}));function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(e){var t=r(478),n=r(131).topRanks,a=new URLSearchParams(window.location.search),o=Object.fromEntries(a.entries()),i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({sortBy:void 0===o.sortBy?"Total":o.sortBy,players:n},t);new v(e(".js-".concat("landing")),i)}(r(627))},478:e=>{e.exports=JSON.parse('{"categoryMenu":{"categories":["Total","Insane","Hard","Main","Easy","Mod"]}}')}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(p=0;p<e.length;p++){for(var[r,a,o]=e[p],s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(p--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={826:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,s,c]=r,l=0;if(i.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var p=c(n)}for(t&&t(r);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(p)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[871,29],(()=>n(470)));a=n.O(a)})();