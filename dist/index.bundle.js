var Mx=function(){"use strict";function t(){return!0}return{isMx:t,Matrix:function(){return function(n){var r=this;this.fillEmptyCells=function(t,n){void 0===n&&(n=0);var r=t.reduce(function(t,n){return n.length>t?n.length:t},0);return t.map(function(t){for(var i=t.slice(),u=0;u<r;u++)i[u]?i[u]=i[u]:i[u]=n;return i})},this.cell=function(t,n){return r._data[n][t]},this.row=function(t){return r._data[t]},this.column=function(t){return r._data.reduce(function(n,r){return n.concat([r[t]])},[])},this.isMx=t,this._data=this.fillEmptyCells(n)}}()}}();
