"use strict";function isMx(){return!0}var Matrix=function(){return function(t){var n=this;this.fillEmptyCells=function(t,n){void 0===n&&(n=0);var i=t.reduce(function(t,n){return n.length>t?n.length:t},0);return t.map(function(t){for(var r=t.slice(),u=0;u<i;u++)r[u]?r[u]=r[u]:r[u]=n;return r})},this.cell=function(t,i){return n._data[i][t]},this.row=function(t){return n._data[t]},this.column=function(t){return n._data.reduce(function(n,i){return n.concat([i[t]])},[])},this.isMx=isMx,this._data=this.fillEmptyCells(t)}}(),Mx={isMx:isMx,Matrix:Matrix};module.exports=Mx;