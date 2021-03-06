/*! jQuery v@1.8.0 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bX(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bV.length;while(e--){b=bV[e]+c;if(b in a)return b}return d}function bY(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function bZ(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bY(c)&&(e[f]=p._data(c,"olddisplay",cb(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b$(a,b,c){var d=bO.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function b_(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bU[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bU[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bU[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bU[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bU[e]+"Width"))||0));return f}function ca(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bP.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+b_(a,b,c||(f?"border":"content"),e)+"px"}function cb(a){if(bR[a])return bR[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bR[a]=c,c}function ch(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||cd.test(a)?d(a,e):ch(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ch(a+"["+e+"]",b[e],c,d);else d(a,b)}function cy(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cz(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cu;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cz(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cz(a,c,d,e,"*",g)),h}function cA(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cB(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cC(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cK(){try{return new a.XMLHttpRequest}catch(b){}}function cL(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cT(){return setTimeout(function(){cM=b},0),cM=p.now()}function cU(a,b){p.each(b,function(b,c){var d=(cS[b]||[]).concat(cS["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cV(a,b,c){var d,e=0,f=0,g=cR.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cM||cT(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cM||cT(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cW(k,j.opts.specialEasing);for(;e<g;e++){d=cR[e].call(j,a,k,j.opts);if(d)return d}return cU(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cW(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cX(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bY(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cb(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cO.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cY(a,b,c,d,e){return new cY.prototype.init(a,b,c,d,e)}function cZ(a,b){var c,d={height:a},e=0;for(;e<4;e+=2-b)c=bU[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function c_(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=r.test(" ")?/^[\s\xA0]+|[\s\xA0]+$/g:/^\s+|\s+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.0",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":a.toString().replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete"||e.readyState!=="loading"&&e.addEventListener)setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){p.isFunction(c)&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return typeof a=="object"?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length||!d)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/^(?:\{.*\}|\[.*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.shift(),e=p._queueHooks(a,b),f=function(){p.dequeue(a,b)};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),delete e.stop,d.call(a,f,e)),!c.length&&e&&e.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)(d=p._data(g[h],a+"queueHooks"))&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>-1)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=[].slice.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click")){g=p(this),g.context=this;for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){i={},k=[],g[0]=f;for(d=0;d<q;d++)l=o[d],m=l.selector,i[m]===b&&(i[m]=g.is(m)),i[m]&&k.push(l);k.length&&u.push({elem:f,matches:k})}}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){j=u[d],c.currentTarget=j.elem;for(e=0;e<j.matches.length&&!c.isImmediatePropagationStopped();e++){l=j.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,h=((p.event.special[l.origType]||{}).handle||l.handler).apply(j.elem,r),h!==b&&(c.result=h,h===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{ready:{setup:p.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bd(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)Z(a,b[e],c,d)}function be(a,b,c,d,e,f){var g,h=$.setFilters[b.toLowerCase()];return h||Z.error(b),(a||!(g=e))&&bd(a||"*",d,g=[],e),g.length>0?h(g,c,f):[]}function bf(a,c,d,e,f){var g,h,i,j,k,l,m,n,p=0,q=f.length,s=L.POS,t=new RegExp("^"+s.source+"(?!"+r+")","i"),u=function(){var a=1,c=arguments.length-2;for(;a<c;a++)arguments[a]===b&&(g[a]=b)};for(;p<q;p++){s.exec(""),a=f[p],j=[],i=0,k=e;while(g=s.exec(a)){n=s.lastIndex=g.index+g[0].length;if(n>i){m=a.slice(i,g.index),i=n,l=[c],B.test(m)&&(k&&(l=k),k=e);if(h=H.test(m))m=m.slice(0,-5).replace(B,"$&*");g.length>1&&g[0].replace(t,u),k=be(m,g[1],g[2],l,k,h)}}k?(j=j.concat(k),(m=a.slice(i))&&m!==")"?B.test(m)?bd(m,j,d,e):Z(m,c,d,e?e.concat(k):k):o.apply(d,j)):Z(a,c,d,e)}return q===1?d:Z.uniqueSort(d)}function bg(a,b,c){var d,e,f,g=[],i=0,j=D.exec(a),k=!j.pop()&&!j.pop(),l=k&&a.match(C)||[""],m=$.preFilter,n=$.filter,o=!c&&b!==h;for(;(e=l[i])!=null&&k;i++){g.push(d=[]),o&&(e=" "+e);while(e){k=!1;if(j=B.exec(e))e=e.slice(j[0].length),k=d.push({part:j.pop().replace(A," "),captures:j});for(f in n)(j=L[f].exec(e))&&(!m[f]||(j=m[f](j,b,c)))&&(e=e.slice(j.shift().length),k=d.push({part:f,captures:j}));if(!k)break}}return k||Z.error(a),g}function bh(a,b,e){var f=b.dir,g=m++;return a||(a=function(a){return a===e}),b.first?function(b,c){while(b=b[f])if(b.nodeType===1)return a(b,c)&&b}:function(b,e){var h,i=g+"."+d,j=i+"."+c;while(b=b[f])if(b.nodeType===1){if((h=b[q])===j)return b.sizset;if(typeof h=="string"&&h.indexOf(i)===0){if(b.sizset)return b}else{b[q]=j;if(a(b,e))return b.sizset=!0,b;b.sizset=!1}}}}function bi(a,b){return a?function(c,d){var e=b(c,d);return e&&a(e===!0?c:e,d)}:b}function bj(a,b,c){var d,e,f=0;for(;d=a[f];f++)$.relative[d.part]?e=bh(e,$.relative[d.part],b):(d.captures.push(b,c),e=bi(e,$.filter[d.part].apply(null,d.captures)));return e}function bk(a){return function(b,c){var d,e=0;for(;d=a[e];e++)if(d(b,c))return!0;return!1}}var c,d,e,f,g,h=a.document,i=h.documentElement,j="undefined",k=!1,l=!0,m=0,n=[].slice,o=[].push,q=("sizcache"+Math.random()).replace(".",""),r="[\\x20\\t\\r\\n\\f]",s="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",t=s.replace("w","w#"),u="([*^$|!~]?=)",v="\\["+r+"*("+s+")"+r+"*(?:"+u+r+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+t+")|)|)"+r+"*\\]",w=":("+s+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",x=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",y=r+"*([\\x20\\t\\r\\n\\f>+~])"+r+"*",z="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+v+"|"+w.replace(2,7)+"|[^\\\\(),])+",A=new RegExp("^"+r+"+|((?:^|[^\\\\])(?:\\\\.)*)"+r+"+$","g"),B=new RegExp("^"+y),C=new RegExp(z+"?(?="+r+"*,|$)","g"),D=new RegExp("^(?:(?!,)(?:(?:^|,)"+r+"*"+z+")*?|"+r+"*(.*?))(\\)|$)"),E=new RegExp(z.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+y,"g"),F=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,G=/[\x20\t\r\n\f]*[+~]/,H=/:not\($/,I=/h\d/i,J=/input|select|textarea|button/i,K=/\\(?!\\)/g,L={ID:new RegExp("^#("+s+")"),CLASS:new RegExp("^\\.("+s+")"),NAME:new RegExp("^\\[name=['\"]?("+s+")['\"]?\\]"),TAG:new RegExp("^("+s.replace("[-","[-\\*")+")"),ATTR:new RegExp("^"+v),PSEUDO:new RegExp("^"+w),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+r+"*(even|odd|(([+-]|)(\\d*)n|)"+r+"*(?:([+-]|)"+r+"*(\\d+)|))"+r+"*\\)|)","i"),POS:new RegExp(x,"ig"),needsContext:new RegExp("^"+r+"*[>+~]|"+x,"i")},M={},N=[],O={},P=[],Q=function(a){return a.sizzleFilter=!0,a},R=function(a){return function(b){return b.nodeName.toLowerCase()==="input"&&b.type===a}},S=function(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}},T=function(a){var b=!1,c=h.createElement("div");try{b=a(c)}catch(d){}return c=null,b},U=T(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),V=T(function(a){a.id=q+0,a.innerHTML="<a name='"+q+"'></a><div name='"+q+"'></div>",i.insertBefore(a,i.firstChild);var b=h.getElementsByName&&h.getElementsByName(q).length===2+h.getElementsByName(q+0).length;return g=!h.getElementById(q),i.removeChild(a),b}),W=T(function(a){return a.appendChild(h.createComment("")),a.getElementsByTagName("*").length===0}),X=T(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==j&&a.firstChild.getAttribute("href")==="#"}),Y=T(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||a.getElementsByClassName("e").length===0?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length!==1)}),Z=function(a,b,c,d){c=c||[],b=b||h;var e,f,g,i,j=b.nodeType;if(j!==1&&j!==9)return[];if(!a||typeof a!="string")return c;g=ba(b);if(!g&&!d)if(e=F.exec(a))if(i=e[1]){if(j===9){f=b.getElementById(i);if(!f||!f.parentNode)return c;if(f.id===i)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(i))&&bb(b,f)&&f.id===i)return c.push(f),c}else{if(e[2])return o.apply(c,n.call(b.getElementsByTagName(a),0)),c;if((i=e[3])&&Y&&b.getElementsByClassName)return o.apply(c,n.call(b.getElementsByClassName(i),0)),c}return bm(a,b,c,d,g)},$=Z.selectors={cacheLength:50,match:L,order:["ID","TAG"],attrHandle:{},createPseudo:Q,find:{ID:g?function(a,b,c){if(typeof b.getElementById!==j&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==j&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==j&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:W?function(a,b){if(typeof b.getElementsByTagName!==j)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(K,""),a[3]=(a[4]||a[5]||"").replace(K,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||Z.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&Z.error(a[0]),a},PSEUDO:function(a){var b,c=a[4];return L.CHILD.test(a[0])?null:(c&&(b=D.exec(c))&&b.pop()&&(a[0]=a[0].slice(0,b[0].length-c.length-1),c=b[0].slice(0,-1)),a.splice(2,3,c||a[3]),a)}},filter:{ID:g?function(a){return a=a.replace(K,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(K,""),function(b){var c=typeof b.getAttributeNode!==j&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(K,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=M[a];return b||(b=M[a]=new RegExp("(^|"+r+")"+a+"("+r+"|$)"),N.push(a),N.length>$.cacheLength&&delete M[N.shift()]),function(a){return b.test(a.className||typeof a.getAttribute!==j&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return b?function(d){var e=Z.attr(d,a),f=e+"";if(e==null)return b==="!=";switch(b){case"=":return f===c;case"!=":return f!==c;case"^=":return c&&f.indexOf(c)===0;case"*=":return c&&f.indexOf(c)>-1;case"$=":return c&&f.substr(f.length-c.length)===c;case"~=":return(" "+f+" ").indexOf(c)>-1;case"|=":return f===c||f.substr(0,c.length+1)===c+"-"}}:function(b){return Z.attr(b,a)!=null}},CHILD:function(a,b,c,d){if(a==="nth"){var e=m++;return function(a){var b,f,g=0,h=a;if(c===1&&d===0)return!0;b=a.parentNode;if(b&&(b[q]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[q]=e}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0}}return function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e=$.pseudos[a]||$.pseudos[a.toLowerCase()];return e||Z.error("unsupported pseudo: "+a),e.sizzleFilter?e(b,c,d):e}},pseudos:{not:Q(function(a,b,c){var d=bl(a.replace(A,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!$.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:Q(function(a){return function(b){return(b.textContent||b.innerText||bc(b)).indexOf(a)>-1}}),has:Q(function(a){return function(b){return Z(a,b).length>0}}),header:function(a){return I.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:R("radio"),checkbox:R("checkbox"),file:R("file"),password:R("password"),image:R("image"),submit:S("submit"),reset:S("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return J.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){var d=a.pop();return c?a:[d]},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){var d=a.splice(+b,1);return c?a:d}}};$.setFilters.nth=$.setFilters.eq,$.filters=$.pseudos,X||($.attrHandle={href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}}),V&&($.order.push("NAME"),$.find.NAME=function(a,b){if(typeof b.getElementsByName!==j)return b.getElementsByName(a)}),Y&&($.order.splice(1,0,"CLASS"),$.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!==j&&!c)return b.getElementsByClassName(a)});try{n.call(i.childNodes,0)[0].nodeType}catch(_){n=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}var ba=Z.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},bb=Z.contains=i.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc=Z.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=bc(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=bc(b);return c};Z.attr=function(a,b){var c,d=ba(a);return d||(b=b.toLowerCase()),$.attrHandle[b]?$.attrHandle[b](a):U||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},Z.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},[0,0].sort(function(){return l=0}),i.compareDocumentPosition?e=function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:(e=function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],g=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return f(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)g.unshift(j),j=j.parentNode;c=e.length,d=g.length;for(var l=0;l<c&&l<d;l++)if(e[l]!==g[l])return f(e[l],g[l]);return l===c?f(a,g[l],-1):f(e[l],b,1)},f=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),Z.uniqueSort=function(a){var b,c=1;if(e){k=l,a.sort(e);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1)}return a};var bl=Z.compile=function(a,b,c){var d,e,f,g=O[a];if(g&&g.context===b)return g;e=bg(a,b,c);for(f=0;d=e[f];f++)e[f]=bj(d,b,c);return g=O[a]=bk(e),g.context=b,g.runs=g.dirruns=0,P.push(a),P.length>$.cacheLength&&delete O[P.shift()],g};Z.matches=function(a,b){return Z(a,null,null,b)},Z.matchesSelector=function(a,b){return Z(b,null,null,[a]).length>0};var bm=function(a,b,e,f,g){a=a.replace(A,"$1");var h,i,j,k,l,m,p,q,r,s=a.match(C),t=a.match(E),u=b.nodeType;if(L.POS.test(a))return bf(a,b,e,f,s);if(f)h=n.call(f,0);else if(s&&s.length===1){if(t.length>1&&u===9&&!g&&(s=L.ID.exec(t[0]))){b=$.find.ID(s[1],b,g)[0];if(!b)return e;a=a.slice(t.shift().length)}q=(s=G.exec(t[0]))&&!s.index&&b.parentNode||b,r=t.pop(),m=r.split(":not")[0];for(j=0,k=$.order.length;j<k;j++){p=$.order[j];if(s=L[p].exec(m)){h=$.find[p]((s[1]||"").replace(K,""),q,g);if(h==null)continue;m===r&&(a=a.slice(0,a.length-r.length)+m.replace(L[p],""),a||o.apply(e,n.call(h,0)));break}}}if(a){i=bl(a,b,g),d=i.dirruns++,h==null&&(h=$.find.TAG("*",G.test(a)&&b.parentNode||b));for(j=0;l=h[j];j++)c=i.runs++,i(l,b)&&e.push(l)}return e};h.querySelectorAll&&function(){var a,b=bm,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=i.matchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;T(function(a){a.innerHTML="<select><option selected></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+r+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),T(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+r+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=e.length&&new RegExp(e.join("|")),bm=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a)))if(d.nodeType===9)try{return o.apply(f,n.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j=d.getAttribute("id"),k=j||q,l=G.test(a)&&d.parentNode||d;j?k=k.replace(c,"\\$&"):d.setAttribute("id",k);try{return o.apply(f,n.call(l.querySelectorAll(a.replace(C,"[id='"+k+"'] $&")),0)),f}catch(i){}finally{j||d.removeAttribute("id")}}return b(a,d,f,g,h)},g&&(T(function(b){a=g.call(b,"div");try{g.call(b,"[test!='']:sizzle"),f.push($.match.PSEUDO)}catch(c){}}),f=new RegExp(f.join("|")),Z.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!ba(b)&&!f.test(c)&&(!e||!e.test(c)))try{var h=g.call(b,c);if(h||a||b.document&&b.document.nodeType!==11)return h}catch(i){}return Z(c,null,null,[b]).length>0})}(),Z.attr=p.attr,p.find=Z,p.expr=Z.selectors,p.expr[":"]=p.expr.pseudos,p.unique=Z.uniqueSort,p.text=Z.getText,p.isXMLDoc=Z.isXML,p.contains=Z.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=(c[0]||c).ownerDocument||c[0]||c,typeof c.createDocumentFragment=="undefined"&&(c=e),a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=0,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(g=b===e&&bA;(h=a[s])!=null;s++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{g=g||bk(b),l=l||g.appendChild(b.createElement("div")),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(f=n.length-1;f>=0;--f)p.nodeName(n[f],"tbody")&&!n[f].childNodes.length&&n[f].parentNode.removeChild(n[f])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l=g.lastChild}h.nodeType?t.push(h):t=p.merge(t,h)}l&&(g.removeChild(l),h=l=g=null);if(!p.support.appendChecked)for(s=0;(h=t[s])!=null;s++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(s=0;(h=t[s])!=null;s++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[s+1,0].concat(r)),s+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^margin/,bO=new RegExp("^("+q+")(.*)$","i"),bP=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bQ=new RegExp("^([-+])=("+q+")","i"),bR={},bS={position:"absolute",visibility:"hidden",display:"block"},bT={letterSpacing:0,fontWeight:400,lineHeight:1},bU=["Top","Right","Bottom","Left"],bV=["Webkit","O","Moz","ms"],bW=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return bZ(this,!0)},hide:function(){return bZ(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bW.apply(this,arguments):this.each(function(){(c?a:bY(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bX(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bQ.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bX(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bT&&(f=bT[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(a,b){var c,d,e,f,g=getComputedStyle(a,null),h=a.style;return g&&(c=g[b],c===""&&!p.contains(a.ownerDocument.documentElement,a)&&(c=p.style(a,b)),bP.test(c)&&bN.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=c,c=g.width,h.width=d,h.minWidth=e,h.maxWidth=f)),c}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bP.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0||bH(a,"display")!=="none"?ca(a,b,d):p.swap(a,bS,function(){return ca(a,b,d)})},set:function(a,c,d){return b$(a,c,d?b_(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bP.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bU[d]+b]=e[d]||e[d-2]||e[0];return f}},bN.test(a)||(p.cssHooks[a+b].set=b$)});var cc=/%20/g,cd=/\[\]$/,ce=/\r?\n/g,cf=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,cg=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||cg.test(this.nodeName)||cf.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(ce,"\r\n")}}):{name:b.name,value:c.replace(ce,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ch(d,a[d],c,f);return e.join("&").replace(cc,"+")};var ci,cj,ck=/#.*$/,cl=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cm=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,cn=/^(?:GET|HEAD)$/,co=/^\/\//,cp=/\?/,cq=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cr=/([?&])_=[^&]*/,cs=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,ct=p.fn.load,cu={},cv={},cw=["*/"]+["*"];try{ci=f.href}catch(cx){ci=e.createElement("a"),ci.href="",ci=ci.href}cj=cs.exec(ci.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&ct)return ct.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cq,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cA(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cA(a,b),a},ajaxSettings:{url:ci,isLocal:cm.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cw},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cy(cu),ajaxTransport:cy(cv),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cB(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cC(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cl.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(ck,"").replace(co,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=cs.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==cj[1]&&i[2]==cj[2]&&(i[3]||(i[1]==="http:"?80:443))==(cj[3]||(cj[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cz(cu,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!cn.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cp.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cr,"$1_="+z);l.url=A+(A===l.url?(cp.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cw+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cz(cv,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cD=[],cE=/\?/,cF=/(=)\?(?=&|$)|\?\?/,cG=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cD.pop()||p.expando+"_"+cG++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cF.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cF.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cF,"$1"+f):m?c.data=i.replace(cF,"$1"+f):k&&(c.url+=(cE.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cD.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cH,cI=a.ActiveXObject?function(){for(var a in cH)cH[a](0,1)}:!1,cJ=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cK()||cL()}:cK,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cI&&delete cH[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cJ,cI&&(cH||(cH={},p(a).unload(cI)),cH[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cM,cN,cO=/^(?:toggle|show|hide)$/,cP=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cQ=/queueHooks$/,cR=[cX],cS={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cP.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&&j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};p.Animation=p.extend(cV,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cS[c]=cS[c]||[],cS[c].unshift(b)},prefilter:function(a,b){b?cR.unshift(a):cR.push(a)}}),p.Tween=cY,cY.prototype={constructor:cY,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cY.propHooks[this.prop];return a&&a.get?a.get(this):cY.propHooks._default.get(this)},run:function(a){var b,c=cY.propHooks[this.prop];return this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration),this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cY.propHooks._default.set(this),this}},cY.prototype.init.prototype=cY.prototype,cY.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cY.propHooks.scrollTop=cY.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(cZ(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bY).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cV(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cQ.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:cZ("show"),slideUp:cZ("hide"),slideToggle:cZ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cY.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cN&&(cN=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cN),cN=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c$=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&&m.ownerDocument;if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=c_(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c$.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c$.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=c_(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
;/*!
 * Lo-Dash 1.0.0-rc.3 <http://lodash.com>
 * (c) 2012 John-David Dalton <http://allyoucanleet.com/>
 * Based on Underscore.js 1.4.3 <http://underscorejs.org>
 * (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
 * Available under MIT license <http://lodash.com/license>
 */
;(function(window, undefined) {

  /** Detect free variable `exports` */
  var freeExports = typeof exports == 'object' && exports;

  /** Detect free variable `global` and use it as `window` */
  var freeGlobal = typeof global == 'object' && global;
  if (freeGlobal.global === freeGlobal) {
    window = freeGlobal;
  }

  /** Used for array and object method references */
  var arrayRef = [],
      // avoid a Closure Compiler bug by creatively creating an object
      objectRef = new function(){};

  /** Used to generate unique IDs */
  var idCounter = 0;

  /** Used internally to indicate various things */
  var indicatorObject = objectRef;

  /** Used by `cachedContains` as the default size when optimizations are enabled for large arrays */
  var largeArraySize = 30;

  /** Used to restore the original `_` reference in `noConflict` */
  var oldDash = window._;

  /** Used to detect template delimiter values that require a with-statement */
  var reComplexDelimiter = /[-?+=!~*%&^<>|{(\/]|\[\D|\b(?:delete|in|instanceof|new|typeof|void)\b/;

  /** Used to match HTML entities */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#x27);/g;

  /** Used to match empty string literals in compiled template source */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match regexp flags from their coerced string values */
  var reFlags = /\w*$/;

  /** Used to insert the data object variable into compiled template source */
  var reInsertVariable = /(?:__e|__t = )\(\s*(?![\d\s"']|this\.)/g;

  /** Used to detect if a method is native */
  var reNative = RegExp('^' +
    (objectRef.valueOf + '')
      .replace(/[.*+?^=!:${}()|[\]\/\\]/g, '\\$&')
      .replace(/valueOf|for [^\]]+/g, '.+?') + '$'
  );

  /**
   * Used to match ES6 template delimiters
   * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-7.8.6
   */
  var reEsTemplate = /\$\{((?:(?=\\?)\\?[\s\S])*?)}/g;

  /** Used to match "interpolate" template delimiters */
  var reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to ensure capturing order of template delimiters */
  var reNoMatch = /($^)/;

  /** Used to match HTML characters */
  var reUnescapedHtml = /[&<>"']/g;

  /** Used to match unescaped characters in compiled string literals */
  var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;

  /** Used to fix the JScript [[DontEnum]] bug */
  var shadowed = [
    'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
    'toLocaleString', 'toString', 'valueOf'
  ];

  /** Used to make template sourceURLs easier to identify */
  var templateCounter = 0;

  /** Native method shortcuts */
  var ceil = Math.ceil,
      concat = arrayRef.concat,
      floor = Math.floor,
      getPrototypeOf = reNative.test(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf,
      hasOwnProperty = objectRef.hasOwnProperty,
      push = arrayRef.push,
      propertyIsEnumerable = objectRef.propertyIsEnumerable,
      toString = objectRef.toString;

  /* Native method shortcuts for methods with the same name as other `lodash` methods */
  var nativeBind = reNative.test(nativeBind = slice.bind) && nativeBind,
      nativeIsArray = reNative.test(nativeIsArray = Array.isArray) && nativeIsArray,
      nativeIsFinite = window.isFinite,
      nativeIsNaN = window.isNaN,
      nativeKeys = reNative.test(nativeKeys = Object.keys) && nativeKeys,
      nativeMax = Math.max,
      nativeMin = Math.min,
      nativeRandom = Math.random;

  /** `Object#toString` result shortcuts */
  var argsClass = '[object Arguments]',
      arrayClass = '[object Array]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      funcClass = '[object Function]',
      numberClass = '[object Number]',
      objectClass = '[object Object]',
      regexpClass = '[object RegExp]',
      stringClass = '[object String]';

  /** Detect various environments */
  var isIeOpera = !!window.attachEvent,
      isV8 = nativeBind && !/\n|true/.test(nativeBind + isIeOpera);

  /* Detect if `Function#bind` exists and is inferred to be fast (all but V8) */
  var isBindFast = nativeBind && !isV8;

  /* Detect if `Object.keys` exists and is inferred to be fast (IE, Opera, V8) */
  var isKeysFast = nativeKeys && (isIeOpera || isV8);

  /**
   * Detect the JScript [[DontEnum]] bug:
   *
   * In IE < 9 an objects own properties, shadowing non-enumerable ones, are
   * made non-enumerable as well.
   */
  var hasDontEnumBug;

  /** Detect if own properties are iterated after inherited properties (IE < 9) */
  var iteratesOwnLast;

  /**
   * Detect if `Array#shift` and `Array#splice` augment array-like objects
   * incorrectly:
   *
   * Firefox < 10, IE compatibility mode, and IE < 9 have buggy Array `shift()`
   * and `splice()` functions that fail to remove the last element, `value[0]`,
   * of array-like objects even though the `length` property is set to `0`.
   * The `shift()` method is buggy in IE 8 compatibility mode, while `splice()`
   * is buggy regardless of mode in IE < 9 and buggy in compatibility mode in IE 9.
   */
  var hasObjectSpliceBug = (hasObjectSpliceBug = { '0': 1, 'length': 1 },
    arrayRef.splice.call(hasObjectSpliceBug, 0, 1), hasObjectSpliceBug[0]);

  /** Detect if an `arguments` object's indexes are non-enumerable (IE < 9) */
  var nonEnumArgs = true;

  (function() {
    var props = [];
    function ctor() { this.x = 1; }
    ctor.prototype = { 'valueOf': 1, 'y': 1 };
    for (var prop in new ctor) { props.push(prop); }
    for (prop in arguments) { nonEnumArgs = !prop; }

    hasDontEnumBug = !/valueOf/.test(props);
    iteratesOwnLast = props[0] != 'x';
  }(1));

  /** Detect if `arguments` objects are `Object` objects (all but Opera < 10.5) */
  var argsAreObjects = arguments.constructor == Object;

  /** Detect if `arguments` objects [[Class]] is unresolvable (Firefox < 4, IE < 9) */
  var noArgsClass = !isArguments(arguments);

  /**
   * Detect lack of support for accessing string characters by index:
   *
   * IE < 8 can't access characters by index and IE 8 can only access
   * characters by index on string literals.
   */
  var noCharByIndex = ('x'[0] + Object('x')[0]) != 'xx';

  /**
   * Detect if a node's [[Class]] is unresolvable (IE < 9)
   * and that the JS engine won't error when attempting to coerce an object to
   * a string without a `toString` property value of `typeof` "function".
   */
  try {
    var noNodeClass = ({ 'toString': 0 } + '', toString.call(document) == objectClass);
  } catch(e) { }

  /**
   * Detect if sourceURL syntax is usable without erroring:
   *
   * The JS engine embedded in Adobe products will throw a syntax error when
   * it encounters a single line comment beginning with the `@` symbol.
   *
   * The JS engine in Narwhal will generate the function `function anonymous(){//}`
   * and throw a syntax error.
   *
   * Avoid comments beginning `@` symbols in IE because they are part of its
   * non-standard conditional compilation support.
   * http://msdn.microsoft.com/en-us/library/121hztk3(v=vs.94).aspx
   */
  try {
    var useSourceURL = (Function('//@')(), !isIeOpera);
  } catch(e) { }

  /** Used to identify object classifications that `_.clone` supports */
  var cloneableClasses = {};
  cloneableClasses[funcClass] = false;
  cloneableClasses[argsClass] = cloneableClasses[arrayClass] =
  cloneableClasses[boolClass] = cloneableClasses[dateClass] =
  cloneableClasses[numberClass] = cloneableClasses[objectClass] =
  cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;

  /** Used to lookup a built-in constructor by [[Class]] */
  var ctorByClass = {};
  ctorByClass[arrayClass] = Array;
  ctorByClass[boolClass] = Boolean;
  ctorByClass[dateClass] = Date;
  ctorByClass[objectClass] = Object;
  ctorByClass[numberClass] = Number;
  ctorByClass[regexpClass] = RegExp;
  ctorByClass[stringClass] = String;

  /** Used to determine if values are of the language type Object */
  var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
  };

  /** Used to escape characters for inclusion in compiled string literals */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\t': 't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a `lodash` object, that wraps the given `value`, to enable
   * method chaining.
   *
   * The chainable wrapper functions are:
   * `after`, `assign`, `bind`, `bindAll`, `bindKey`, `chain`, `compact`, `compose`,
   * `concat`, `countBy`, `debounce`, `defaults`, `defer`, `delay`, `difference`,
   * `filter`, `flatten`, `forEach`, `forIn`, `forOwn`, `functions`, `groupBy`,
   * `initial`, `intersection`, `invert`, `invoke`, `keys`, `map`, `max`, `memoize`,
   * `merge`, `min`, `object`, `omit`, `once`, `pairs`, `partial`, `pick`, `pluck`,
   * `push`, `range`, `reject`, `rest`, `reverse`, `shuffle`, `slice`, `sort`,
   * `sortBy`, `splice`, `tap`, `throttle`, `times`, `toArray`, `union`, `uniq`,
   * `unshift`, `values`, `where`, `without`, `wrap`, and `zip`
   *
   * The non-chainable wrapper functions are:
   * `clone`, `cloneDeep`, `contains`, `escape`, `every`, `find`, `has`, `identity`,
   * `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`, `isEmpty`,
   * `isEqual`, `isFinite`, `isFunction`, `isNaN`, `isNull`, `isNumber`, `isObject`,
   * `isPlainObject`, `isRegExp`, `isString`, `isUndefined`, `join`, `lastIndexOf`,
   * `mixin`, `noConflict`, `pop`, `random`, `reduce`, `reduceRight`, `result`,
   * `shift`, `size`, `some`, `sortedIndex`, `template`, `unescape`, and `uniqueId`
   *
   * The wrapper functions `first` and `last` return wrapped values when `n` is
   * passed, otherwise they return unwrapped values.
   *
   * @name _
   * @constructor
   * @category Chaining
   * @param {Mixed} value The value to wrap in a `lodash` instance.
   * @returns {Object} Returns a `lodash` instance.
   */
  function lodash(value) {
    // exit early if already wrapped, even if wrapped by a different `lodash` constructor
    if (value && typeof value == 'object' && value.__wrapped__) {
      return value;
    }
    // allow invoking `lodash` without the `new` operator
    if (!(this instanceof lodash)) {
      return new lodash(value);
    }
    this.__wrapped__ = value;
  }

  /**
   * By default, the template delimiters used by Lo-Dash are similar to those in
   * embedded Ruby (ERB). Change the following template settings to use alternative
   * delimiters.
   *
   * @static
   * @memberOf _
   * @type Object
   */
  lodash.templateSettings = {

    /**
     * Used to detect `data` property values to be HTML-escaped.
     *
     * @static
     * @memberOf _.templateSettings
     * @type RegExp
     */
    'escape': /<%-([\s\S]+?)%>/g,

    /**
     * Used to detect code to be evaluated.
     *
     * @static
     * @memberOf _.templateSettings
     * @type RegExp
     */
    'evaluate': /<%([\s\S]+?)%>/g,

    /**
     * Used to detect `data` property values to inject.
     *
     * @static
     * @memberOf _.templateSettings
     * @type RegExp
     */
    'interpolate': reInterpolate,

    /**
     * Used to reference the data object in the template text.
     *
     * @static
     * @memberOf _.templateSettings
     * @type String
     */
    'variable': ''
  };

  /*--------------------------------------------------------------------------*/

  /**
   * The template used to create iterator functions.
   *
   * @private
   * @param {Obect} data The data object used to populate the text.
   * @returns {String} Returns the interpolated text.
   */
  var iteratorTemplate = template(
    // conditional strict mode
    "<% if (obj.useStrict) { %>'use strict';\n<% } %>" +

    // the `iteratee` may be reassigned by the `top` snippet
    'var index, iteratee = <%= firstArg %>, ' +
    // assign the `result` variable an initial value
    'result = <%= firstArg %>;\n' +
    // exit early if the first argument is falsey
    'if (!<%= firstArg %>) return result;\n' +
    // add code before the iteration branches
    '<%= top %>;\n' +

    // array-like iteration:
    '<% if (arrayLoop) { %>' +
    'var length = iteratee.length; index = -1;\n' +
    "if (typeof length == 'number') {" +

    // add support for accessing string characters by index if needed
    '  <% if (noCharByIndex) { %>\n' +
    '  if (isString(iteratee)) {\n' +
    "    iteratee = iteratee.split('')\n" +
    '  }' +
    '  <% } %>\n' +

    // iterate over the array-like value
    '  while (++index < length) {\n' +
    '    <%= arrayLoop %>\n' +
    '  }\n' +
    '}\n' +
    'else {' +

    // object iteration:
    // add support for iterating over `arguments` objects if needed
    '  <%  } else if (nonEnumArgs) { %>\n' +
    '  var length = iteratee.length; index = -1;\n' +
    '  if (length && isArguments(iteratee)) {\n' +
    '    while (++index < length) {\n' +
    "      index += '';\n" +
    '      <%= objectLoop %>\n' +
    '    }\n' +
    '  } else {' +
    '  <% } %>' +

    // Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
    // (if the prototype or a property on the prototype has been set)
    // incorrectly sets a function's `prototype` property [[Enumerable]]
    // value to `true`. Because of this Lo-Dash standardizes on skipping
    // the the `prototype` property of functions regardless of its
    // [[Enumerable]] value.
    '  <% if (!hasDontEnumBug) { %>\n' +
    "  var skipProto = typeof iteratee == 'function' && \n" +
    "    propertyIsEnumerable.call(iteratee, 'prototype');\n" +
    '  <% } %>' +

    // iterate own properties using `Object.keys` if it's fast
    '  <% if (isKeysFast && useHas) { %>\n' +
    '  var ownIndex = -1,\n' +
    '      ownProps = objectTypes[typeof iteratee] ? nativeKeys(iteratee) : [],\n' +
    '      length = ownProps.length;\n\n' +
    '  while (++ownIndex < length) {\n' +
    '    index = ownProps[ownIndex];\n' +
    "    <% if (!hasDontEnumBug) { %>if (!(skipProto && index == 'prototype')) {\n  <% } %>" +
    '    <%= objectLoop %>\n' +
    '    <% if (!hasDontEnumBug) { %>}\n<% } %>' +
    '  }' +

    // else using a for-in loop
    '  <% } else { %>\n' +
    '  for (index in iteratee) {<%' +
    '    if (!hasDontEnumBug || useHas) { %>\n    if (<%' +
    "      if (!hasDontEnumBug) { %>!(skipProto && index == 'prototype')<% }" +
    '      if (!hasDontEnumBug && useHas) { %> && <% }' +
    '      if (useHas) { %>hasOwnProperty.call(iteratee, index)<% }' +
    '    %>) {' +
    '    <% } %>\n' +
    '    <%= objectLoop %>;' +
    '    <% if (!hasDontEnumBug || useHas) { %>\n    }<% } %>\n' +
    '  }' +
    '  <% } %>' +

    // Because IE < 9 can't set the `[[Enumerable]]` attribute of an
    // existing property and the `constructor` property of a prototype
    // defaults to non-enumerable, Lo-Dash skips the `constructor`
    // property when it infers it's iterating over a `prototype` object.
    '  <% if (hasDontEnumBug) { %>\n\n' +
    '  var ctor = iteratee.constructor;\n' +
    '    <% for (var k = 0; k < 7; k++) { %>\n' +
    "  index = '<%= shadowed[k] %>';\n" +
    '  if (<%' +
    "      if (shadowed[k] == 'constructor') {" +
    '        %>!(ctor && ctor.prototype === iteratee) && <%' +
    '      } %>hasOwnProperty.call(iteratee, index)) {\n' +
    '    <%= objectLoop %>\n' +
    '  }' +
    '    <% } %>' +
    '  <% } %>' +
    '  <% if (arrayLoop || nonEnumArgs) { %>\n}<% } %>\n' +

    // add code to the bottom of the iteration function
    '<%= bottom %>;\n' +
    // finally, return the `result`
    'return result'
  );

  /** Reusable iterator options for `assign` and `defaults` */
  var assignIteratorOptions = {
    'args': 'object, source, guard',
    'top':
      "for (var argsIndex = 1, argsLength = typeof guard == 'number' ? 2 : arguments.length; argsIndex < argsLength; argsIndex++) {\n" +
      '  if ((iteratee = arguments[argsIndex])) {',
    'objectLoop': 'result[index] = iteratee[index]',
    'bottom': '  }\n}'
  };

  /**
   * Reusable iterator options shared by `each`, `forIn`, and `forOwn`.
   */
  var eachIteratorOptions = {
    'args': 'collection, callback, thisArg',
    'top': "callback = callback && typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg)",
    'arrayLoop': 'if (callback(iteratee[index], index, collection) === false) return result',
    'objectLoop': 'if (callback(iteratee[index], index, collection) === false) return result'
  };

  /** Reusable iterator options for `forIn` and `forOwn` */
  var forOwnIteratorOptions = {
    'arrayLoop': null
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a function optimized to search large arrays for a given `value`,
   * starting at `fromIndex`, using strict equality for comparisons, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {Mixed} value The value to search for.
   * @param {Number} [fromIndex=0] The index to search from.
   * @param {Number} [largeSize=30] The length at which an array is considered large.
   * @returns {Boolean} Returns `true` if `value` is found, else `false`.
   */
  function cachedContains(array, fromIndex, largeSize) {
    fromIndex || (fromIndex = 0);

    var length = array.length,
        isLarge = (length - fromIndex) >= (largeSize || largeArraySize);

    if (isLarge) {
      var cache = {},
          index = fromIndex - 1;

      while (++index < length) {
        // manually coerce `value` to a string because `hasOwnProperty`, in some
        // older versions of Firefox, coerces objects incorrectly
        var key = array[index] + '';
        (hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = [])).push(array[index]);
      }
    }
    return function(value) {
      if (isLarge) {
        var key = value + '';
        return hasOwnProperty.call(cache, key) && indexOf(cache[key], value) > -1;
      }
      return indexOf(array, value, fromIndex) > -1;
    }
  }

  /**
   * Used by `_.max` and `_.min` as the default `callback` when a given
   * `collection` is a string value.
   *
   * @private
   * @param {String} value The character to inspect.
   * @returns {Number} Returns the code unit of given character.
   */
  function charAtCallback(value) {
    return value.charCodeAt(0);
  }

  /**
   * Used by `sortBy` to compare transformed `collection` values, stable sorting
   * them in ascending order.
   *
   * @private
   * @param {Object} a The object to compare to `b`.
   * @param {Object} b The object to compare to `a`.
   * @returns {Number} Returns the sort order indicator of `1` or `-1`.
   */
  function compareAscending(a, b) {
    var ai = a.index,
        bi = b.index;

    a = a.criteria;
    b = b.criteria;

    // ensure a stable sort in V8 and other engines
    // http://code.google.com/p/v8/issues/detail?id=90
    if (a !== b) {
      if (a > b || typeof a == 'undefined') {
        return 1;
      }
      if (a < b || typeof b == 'undefined') {
        return -1;
      }
    }
    return ai < bi ? -1 : 1;
  }

  /**
   * Creates a function that, when called, invokes `func` with the `this`
   * binding of `thisArg` and prepends any `partailArgs` to the arguments passed
   * to the bound function.
   *
   * @private
   * @param {Function|String} func The function to bind or the method name.
   * @param {Mixed} [thisArg] The `this` binding of `func`.
   * @param {Array} partialArgs An array of arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   */
  function createBound(func, thisArg, partialArgs) {
    var isFunc = isFunction(func),
        isPartial = !partialArgs,
        key = thisArg;

    // juggle arguments
    if (isPartial) {
      partialArgs = thisArg;
    }
    if (!isFunc) {
      thisArg = func;
    }

    function bound() {
      // `Function#bind` spec
      // http://es5.github.com/#x15.3.4.5
      var args = arguments,
          thisBinding = isPartial ? this : thisArg;

      if (!isFunc) {
        func = thisArg[key];
      }
      if (partialArgs.length) {
        args = args.length
          ? partialArgs.concat(slice(args))
          : partialArgs;
      }
      if (this instanceof bound) {
        // ensure `new bound` is an instance of `bound` and `func`
        noop.prototype = func.prototype;
        thisBinding = new noop;
        noop.prototype = null;

        // mimic the constructor's `return` behavior
        // http://es5.github.com/#x13.2.2
        var result = func.apply(thisBinding, args);
        return isObject(result) ? result : thisBinding;
      }
      return func.apply(thisBinding, args);
    }
    return bound;
  }

  /**
   * Produces an iteration callback bound to an optional `thisArg`. If `func` is
   * a property name, the callback will return the property value for a given element.
   *
   * @private
   * @param {Function|String} [func=identity|property] The function called per
   * iteration or property name to query.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @param {Object} [accumulating] Used to indicate that the callback should
   *  accept an `accumulator` argument.
   * @returns {Function} Returns a callback function.
   */
  function createCallback(func, thisArg, accumulating) {
    if (!func) {
      return identity;
    }
    if (typeof func != 'function') {
      return function(object) {
        return object[func];
      };
    }
    if (typeof thisArg != 'undefined') {
      if (accumulating) {
        return function(accumulator, value, index, object) {
          return func.call(thisArg, accumulator, value, index, object);
        };
      }
      return function(value, index, object) {
        return func.call(thisArg, value, index, object);
      };
    }
    return func;
  }

  /**
   * Creates compiled iteration functions.
   *
   * @private
   * @param {Object} [options1, options2, ...] The compile options object(s).
   *  useHas - A boolean to specify using `hasOwnProperty` checks in the object loop.
   *  args - A string of comma separated arguments the iteration function will accept.
   *  top - A string of code to execute before the iteration branches.
   *  arrayLoop - A string of code to execute in the array loop.
   *  objectLoop - A string of code to execute in the object loop.
   *  bottom - A string of code to execute after the iteration branches.
   *
   * @returns {Function} Returns the compiled function.
   */
  function createIterator() {
    var data = {
      'arrayLoop': '',
      'bottom': '',
      'hasDontEnumBug': hasDontEnumBug,
      'isKeysFast': isKeysFast,
      'objectLoop': '',
      'nonEnumArgs': nonEnumArgs,
      'noCharByIndex': noCharByIndex,
      'shadowed': shadowed,
      'top': '',
      'useHas': true
    };

    // merge options into a template data object
    for (var object, index = 0; object = arguments[index]; index++) {
      for (var key in object) {
        data[key] = object[key];
      }
    }
    var args = data.args;
    data.firstArg = /^[^,]+/.exec(args)[0];

    // create the function factory
    var factory = Function(
        'createCallback, hasOwnProperty, isArguments, isString, objectTypes, ' +
        'nativeKeys, propertyIsEnumerable',
      'return function(' + args + ') {\n' + iteratorTemplate(data) + '\n}'
    );
    // return the compiled function
    return factory(
      createCallback, hasOwnProperty, isArguments, isString, objectTypes,
      nativeKeys, propertyIsEnumerable
    );
  }

  /**
   * A function compiled to iterate `arguments` objects, arrays, objects, and
   * strings consistenly across environments, executing the `callback` for each
   * element in the `collection`. The `callback` is bound to `thisArg` and invoked
   * with three arguments; (value, index|key, collection). Callbacks may exit
   * iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array|Object|String} Returns `collection`.
   */
  var each = createIterator(eachIteratorOptions);

  /**
   * Used by `template` to escape characters for inclusion in compiled
   * string literals.
   *
   * @private
   * @param {String} match The matched character to escape.
   * @returns {String} Returns the escaped character.
   */
  function escapeStringChar(match) {
    return '\\' + stringEscapes[match];
  }

  /**
   * Used by `escape` to convert characters to HTML entities.
   *
   * @private
   * @param {String} match The matched character to escape.
   * @returns {String} Returns the escaped character.
   */
  function escapeHtmlChar(match) {
    return htmlEscapes[match];
  }

  /**
   * Checks if `value` is a DOM node in IE < 9.
   *
   * @private
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a DOM node, else `false`.
   */
  function isNode(value) {
    // IE < 9 presents DOM nodes as `Object` objects except they have `toString`
    // methods that are `typeof` "string" and still can coerce nodes to strings
    return typeof value.toString != 'function' && typeof (value + '') == 'string';
  }

  /**
   * A no-operation function.
   *
   * @private
   */
  function noop() {
    // no operation performed
  }

  /**
   * Slices the `collection` from the `start` index up to, but not including,
   * the `end` index.
   *
   * Note: This function is used, instead of `Array#slice`, to support node lists
   * in IE < 9 and to ensure dense arrays are returned.
   *
   * @private
   * @param {Array|Object|String} collection The collection to slice.
   * @param {Number} start The start index.
   * @param {Number} end The end index.
   * @returns {Array} Returns the new array.
   */
  function slice(array, start, end) {
    start || (start = 0);
    if (typeof end == 'undefined') {
      end = array ? array.length : 0;
    }
    var index = -1,
        length = end - start || 0,
        result = Array(length < 0 ? 0 : length);

    while (++index < length) {
      result[index] = array[start + index];
    }
    return result;
  }

  /**
   * Used by `unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {String} match The matched character to unescape.
   * @returns {String} Returns the unescaped character.
   */
  function unescapeHtmlChar(match) {
    return htmlUnescapes[match];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Assigns own enumerable properties of source object(s) to the `destination`
   * object. Subsequent sources will overwrite propery assignments of previous
   * sources.
   *
   * @static
   * @memberOf _
   * @alias extend
   * @category Objects
   * @param {Object} object The destination object.
   * @param {Object} [source1, source2, ...] The source objects.
   * @returns {Object} Returns the destination object.
   * @example
   *
   * _.assign({ 'name': 'moe' }, { 'age': 40 });
   * // => { 'name': 'moe', 'age': 40 }
   */
  var assign = createIterator(assignIteratorOptions);

  /**
   * Checks if `value` is an `arguments` object.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is an `arguments` object, else `false`.
   * @example
   *
   * (function() { return _.isArguments(arguments); })(1, 2, 3);
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    return toString.call(value) == argsClass;
  }
  // fallback for browsers that can't detect `arguments` objects by [[Class]]
  if (noArgsClass) {
    isArguments = function(value) {
      return value ? hasOwnProperty.call(value, 'callee') : false;
    };
  }

  /**
   * Iterates over `object`'s own and inherited enumerable properties, executing
   * the `callback` for each property. The `callback` is bound to `thisArg` and
   * invoked with three arguments; (value, key, object). Callbacks may exit iteration
   * early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns `object`.
   * @example
   *
   * function Dog(name) {
   *   this.name = name;
   * }
   *
   * Dog.prototype.bark = function() {
   *   alert('Woof, woof!');
   * };
   *
   * _.forIn(new Dog('Dagny'), function(value, key) {
   *   alert(key);
   * });
   * // => alerts 'name' and 'bark' (order is not guaranteed)
   */
  var forIn = createIterator(eachIteratorOptions, forOwnIteratorOptions, {
    'useHas': false
  });

  /**
   * Iterates over an object's own enumerable properties, executing the `callback`
   * for each property. The `callback` is bound to `thisArg` and invoked with three
   * arguments; (value, key, object). Callbacks may exit iteration early by explicitly
   * returning `false`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns `object`.
   * @example
   *
   * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
   *   alert(key);
   * });
   * // => alerts '0', '1', and 'length' (order is not guaranteed)
   */
  var forOwn = createIterator(eachIteratorOptions, forOwnIteratorOptions);

  /**
   * A fallback implementation of `isPlainObject` that checks if a given `value`
   * is an object created by the `Object` constructor, assuming objects created
   * by the `Object` constructor have no inherited enumerable properties and that
   * there are no `Object.prototype` extensions.
   *
   * @private
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if `value` is a plain object, else `false`.
   */
  function shimIsPlainObject(value) {
    // avoid non-objects and false positives for `arguments` objects
    var result = false;
    if (!(value && typeof value == 'object') || isArguments(value)) {
      return result;
    }
    // check that the constructor is `Object` (i.e. `Object instanceof Object`)
    var ctor = value.constructor;
    if ((!isFunction(ctor) && (!noNodeClass || !isNode(value))) || ctor instanceof ctor) {
      // IE < 9 iterates inherited properties before own properties. If the first
      // iterated property is an object's own property then there are no inherited
      // enumerable properties.
      if (iteratesOwnLast) {
        forIn(value, function(value, key, object) {
          result = !hasOwnProperty.call(object, key);
          return false;
        });
        return result === false;
      }
      // In most environments an object's own properties are iterated before
      // its inherited properties. If the last iterated property is an object's
      // own property then there are no inherited enumerable properties.
      forIn(value, function(value, key) {
        result = key;
      });
      return result === false || hasOwnProperty.call(value, result);
    }
    return result;
  }

  /**
   * A fallback implementation of `Object.keys` that produces an array of the
   * given object's own enumerable property names.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns a new array of property names.
   */
  function shimKeys(object) {
    var result = [];
    forOwn(object, function(value, key) {
      result.push(key);
    });
    return result;
  }

  /**
   * Used to convert characters to HTML entities:
   *
   * Though the `>` character is escaped for symmetry, characters like `>` and `/`
   * don't require escaping in HTML and have no special meaning unless they're part
   * of a tag or an unquoted attribute value.
   * http://mathiasbynens.be/notes/ambiguous-ampersands (under "semi-related fun fact")
   */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;'
  };

  /** Used to convert HTML entities to characters */
  var htmlUnescapes = invert(htmlEscapes);

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a clone of `value`. If `deep` is `true`, nested objects will also
   * be cloned, otherwise they will be assigned by reference.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to clone.
   * @param {Boolean} deep A flag to indicate a deep clone.
   * @param- {Object} [guard] Internally used to allow this method to work with
   *  others like `_.map` without using their callback `index` argument for `deep`.
   * @param- {Array} [stackA=[]] Internally used to track traversed source objects.
   * @param- {Array} [stackB=[]] Internally used to associate clones with their
   *  source counterparts.
   * @returns {Mixed} Returns the cloned `value`.
   * @example
   *
   * var stooges = [
   *   { 'name': 'moe', 'age': 40 },
   *   { 'name': 'larry', 'age': 50 },
   *   { 'name': 'curly', 'age': 60 }
   * ];
   *
   * var shallow = _.clone(stooges);
   * shallow[0] === stooges[0];
   * // => true
   *
   * var deep = _.clone(stooges, true);
   * deep[0] === stooges[0];
   * // => false
   */
  function clone(value, deep, guard, stackA, stackB) {
    if (value == null) {
      return value;
    }
    if (guard) {
      deep = false;
    }
    // inspect [[Class]]
    var isObj = isObject(value);
    if (isObj) {
      var className = toString.call(value);
      if (!cloneableClasses[className] || (noNodeClass && isNode(value))) {
        return value;
      }
      var isArr = isArray(value);
    }
    // shallow clone
    if (!isObj || !deep) {
      return isObj
        ? (isArr ? slice(value) : assign({}, value))
        : value;
    }
    var ctor = ctorByClass[className];
    switch (className) {
      case boolClass:
      case dateClass:
        return new ctor(+value);

      case numberClass:
      case stringClass:
        return new ctor(value);

      case regexpClass:
        return ctor(value.source, reFlags.exec(value));
    }
    // check for circular references and return corresponding clone
    stackA || (stackA = []);
    stackB || (stackB = []);

    var length = stackA.length;
    while (length--) {
      if (stackA[length] == value) {
        return stackB[length];
      }
    }
    // init cloned object
    var result = isArr ? ctor(value.length) : {};

    // add the source value to the stack of traversed objects
    // and associate it with its clone
    stackA.push(value);
    stackB.push(result);

    // recursively populate clone (susceptible to call stack limits)
    (isArr ? forEach : forOwn)(value, function(objValue, key) {
      result[key] = clone(objValue, deep, null, stackA, stackB);
    });

    // add array properties assigned by `RegExp#exec`
    if (isArr) {
      if (hasOwnProperty.call(value, 'index')) {
        result.index = value.index;
      }
      if (hasOwnProperty.call(value, 'input')) {
        result.input = value.input;
      }
    }
    return result;
  }

  /**
   * Creates a deep clone of `value`. Functions and DOM nodes are **not** cloned.
   * The enumerable properties of `arguments` objects and objects created by
   * constructors other than `Object` are cloned to plain `Object` objects.
   *
   * Note: This function is loosely based on the structured clone algorithm.
   * See http://www.w3.org/TR/html5/common-dom-interfaces.html#internal-structured-cloning-algorithm.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to deep clone.
   * @returns {Mixed} Returns the deep cloned `value`.
   * @example
   *
   * var stooges = [
   *   { 'name': 'moe', 'age': 40 },
   *   { 'name': 'larry', 'age': 50 },
   *   { 'name': 'curly', 'age': 60 }
   * ];
   *
   * var deep = _.cloneDeep(stooges);
   * deep[0] === stooges[0];
   * // => false
   */
  function cloneDeep(value) {
    return clone(value, true);
  }

  /**
   * Assigns own enumerable properties of source object(s) to the `destination`
   * object for all `destination` properties that resolve to `null`/`undefined`.
   * Once a property is set, additional defaults of the same property will be
   * ignored.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The destination object.
   * @param {Object} [default1, default2, ...] The default objects.
   * @returns {Object} Returns the destination object.
   * @example
   *
   * var iceCream = { 'flavor': 'chocolate' };
   * _.defaults(iceCream, { 'flavor': 'vanilla', 'sprinkles': 'rainbow' });
   * // => { 'flavor': 'chocolate', 'sprinkles': 'rainbow' }
   */
  var defaults = createIterator(assignIteratorOptions, {
    'objectLoop': 'if (result[index] == null) ' + assignIteratorOptions.objectLoop
  });

  /**
   * Creates a sorted array of all enumerable properties, own and inherited,
   * of `object` that have function values.
   *
   * @static
   * @memberOf _
   * @alias methods
   * @category Objects
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns a new array of property names that have function values.
   * @example
   *
   * _.functions(_);
   * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
   */
  function functions(object) {
    var result = [];
    forIn(object, function(value, key) {
      if (isFunction(value)) {
        result.push(key);
      }
    });
    return result.sort();
  }

  /**
   * Checks if the specified object `property` exists and is a direct property,
   * instead of an inherited property.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to check.
   * @param {String} property The property to check for.
   * @returns {Boolean} Returns `true` if key is a direct property, else `false`.
   * @example
   *
   * _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
   * // => true
   */
  function has(object, property) {
    return object ? hasOwnProperty.call(object, property) : false;
  }

  /**
   * Creates an object composed of the inverted keys and values of the given `object`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to invert.
   * @returns {Object} Returns the created inverted object.
   * @example
   *
   *  _.invert({ 'first': 'Moe', 'second': 'Larry', 'third': 'Curly' });
   * // => { 'Moe': 'first', 'Larry': 'second', 'Curly': 'third' } (order is not guaranteed)
   */
  function invert(object) {
    var result = {};
    forOwn(object, function(value, key) {
      result[value] = key;
    });
    return result;
  }

  /**
   * Checks if `value` is an array.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is an array, else `false`.
   * @example
   *
   * (function() { return _.isArray(arguments); })();
   * // => false
   *
   * _.isArray([1, 2, 3]);
   * // => true
   */
  var isArray = nativeIsArray || function(value) {
    // `instanceof` may cause a memory leak in IE 7 if `value` is a host object
    // http://ajaxian.com/archives/working-aroung-the-instanceof-memory-leak
    return (argsAreObjects && value instanceof Array) || toString.call(value) == arrayClass;
  };

  /**
   * Checks if `value` is a boolean (`true` or `false`) value.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a boolean value, else `false`.
   * @example
   *
   * _.isBoolean(null);
   * // => false
   */
  function isBoolean(value) {
    return value === true || value === false || toString.call(value) == boolClass;
  }

  /**
   * Checks if `value` is a date.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a date, else `false`.
   * @example
   *
   * _.isDate(new Date);
   * // => true
   */
  function isDate(value) {
    return value instanceof Date || toString.call(value) == dateClass;
  }

  /**
   * Checks if `value` is a DOM element.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a DOM element, else `false`.
   * @example
   *
   * _.isElement(document.body);
   * // => true
   */
  function isElement(value) {
    return value ? value.nodeType === 1 : false;
  }

  /**
   * Checks if `value` is empty. Arrays, strings, or `arguments` objects with a
   * length of `0` and objects with no own enumerable properties are considered
   * "empty".
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Array|Object|String} value The value to inspect.
   * @returns {Boolean} Returns `true` if the `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({});
   * // => true
   *
   * _.isEmpty('');
   * // => true
   */
  function isEmpty(value) {
    var result = true;
    if (!value) {
      return result;
    }
    var className = toString.call(value),
        length = value.length;

    if ((className == arrayClass || className == stringClass ||
        className == argsClass || (noArgsClass && isArguments(value))) ||
        (className == objectClass && typeof length == 'number' && isFunction(value.splice))) {
      return !length;
    }
    forOwn(value, function() {
      return (result = false);
    });
    return result;
  }

  /**
   * Performs a deep comparison between two values to determine if they are
   * equivalent to each other.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} a The value to compare.
   * @param {Mixed} b The other value to compare.
   * @param- {Object} [stackA=[]] Internally used track traversed `a` objects.
   * @param- {Object} [stackB=[]] Internally used track traversed `b` objects.
   * @returns {Boolean} Returns `true` if the values are equvalent, else `false`.
   * @example
   *
   * var moe = { 'name': 'moe', 'luckyNumbers': [13, 27, 34] };
   * var clone = { 'name': 'moe', 'luckyNumbers': [13, 27, 34] };
   *
   * moe == clone;
   * // => false
   *
   * _.isEqual(moe, clone);
   * // => true
   */
  function isEqual(a, b, stackA, stackB) {
    // exit early for identical values
    if (a === b) {
      // treat `+0` vs. `-0` as not equal
      return a !== 0 || (1 / a == 1 / b);
    }
    // a strict comparison is necessary because `null == undefined`
    if (a == null || b == null) {
      return a === b;
    }
    // compare [[Class]] names
    var className = toString.call(a),
        otherName = toString.call(b);

    if (className == argsClass) {
      className = objectClass;
    }
    if (otherName == argsClass) {
      otherName = objectClass;
    }
    if (className != otherName) {
      return false;
    }
    switch (className) {
      case boolClass:
      case dateClass:
        // coerce dates and booleans to numbers, dates to milliseconds and booleans
        // to `1` or `0`, treating invalid dates coerced to `NaN` as not equal
        return +a == +b;

      case numberClass:
        // treat `NaN` vs. `NaN` as equal
        return a != +a
          ? b != +b
          // but treat `+0` vs. `-0` as not equal
          : (a == 0 ? (1 / a == 1 / b) : a == +b);

      case regexpClass:
      case stringClass:
        // coerce regexes to strings (http://es5.github.com/#x15.10.6.4)
        // treat string primitives and their corresponding object instances as equal
        return a == b + '';
    }
    var isArr = className == arrayClass;
    if (!isArr) {
      // unwrap any `lodash` wrapped values
      if (a.__wrapped__ || b.__wrapped__) {
        return isEqual(a.__wrapped__ || a, b.__wrapped__ || b);
      }
      // exit for functions and DOM nodes
      if (className != objectClass || (noNodeClass && (isNode(a) || isNode(b)))) {
        return false;
      }
      // in older versions of Opera, `arguments` objects have `Array` constructors
      var ctorA = !argsAreObjects && isArguments(a) ? Object : a.constructor,
          ctorB = !argsAreObjects && isArguments(b) ? Object : b.constructor;

      // non `Object` object instances with different constructors are not equal
      if (ctorA != ctorB && !(
            isFunction(ctorA) && ctorA instanceof ctorA &&
            isFunction(ctorB) && ctorB instanceof ctorB
          )) {
        return false;
      }
    }
    // assume cyclic structures are equal
    // the algorithm for detecting cyclic structures is adapted from ES 5.1
    // section 15.12.3, abstract operation `JO` (http://es5.github.com/#x15.12.3)
    stackA || (stackA = []);
    stackB || (stackB = []);

    var length = stackA.length;
    while (length--) {
      if (stackA[length] == a) {
        return stackB[length] == b;
      }
    }
    var index = -1,
        result = true,
        size = 0;

    // add `a` and `b` to the stack of traversed objects
    stackA.push(a);
    stackB.push(b);

    // recursively compare objects and arrays (susceptible to call stack limits)
    if (isArr) {
      // compare lengths to determine if a deep comparison is necessary
      size = a.length;
      result = size == b.length;

      if (result) {
        // deep compare the contents, ignoring non-numeric properties
        while (size--) {
          if (!(result = isEqual(a[size], b[size], stackA, stackB))) {
            break;
          }
        }
      }
      return result;
    }
    // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
    // which, in this case, is more costly
    forIn(a, function(value, key, a) {
      if (hasOwnProperty.call(a, key)) {
        // count the number of properties.
        size++;
        // deep compare each property value.
        return (result = hasOwnProperty.call(b, key) && isEqual(value, b[key], stackA, stackB));
      }
    });

    if (result) {
      // ensure both objects have the same number of properties
      forIn(b, function(value, key, b) {
        if (hasOwnProperty.call(b, key)) {
          // `size` will be `-1` if `b` has more properties than `a`
          return (result = --size > -1);
        }
      });
    }
    return result;
  }

  /**
   * Checks if `value` is, or can be coerced to, a finite number.
   *
   * Note: This is not the same as native `isFinite`, which will return true for
   * booleans and empty strings. See http://es5.github.com/#x15.1.2.5.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a finite number, else `false`.
   * @example
   *
   * _.isFinite(-101);
   * // => true
   *
   * _.isFinite('10');
   * // => true
   *
   * _.isFinite(true);
   * // => false
   *
   * _.isFinite('');
   * // => false
   *
   * _.isFinite(Infinity);
   * // => false
   */
  function isFinite(value) {
    return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
  }

  /**
   * Checks if `value` is a function.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   */
  function isFunction(value) {
    return typeof value == 'function';
  }
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return value instanceof Function || toString.call(value) == funcClass;
    };
  }

  /**
   * Checks if `value` is the language type of Object.
   * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(1);
   * // => false
   */
  function isObject(value) {
    // check if the value is the ECMAScript language type of Object
    // http://es5.github.com/#x8
    // and avoid a V8 bug
    // http://code.google.com/p/v8/issues/detail?id=2291
    return value ? objectTypes[typeof value] : false;
  }

  /**
   * Checks if `value` is `NaN`.
   *
   * Note: This is not the same as native `isNaN`, which will return `true` for
   * `undefined` and other values. See http://es5.github.com/#x15.1.2.4.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is `NaN`, else `false`.
   * @example
   *
   * _.isNaN(NaN);
   * // => true
   *
   * _.isNaN(new Number(NaN));
   * // => true
   *
   * isNaN(undefined);
   * // => true
   *
   * _.isNaN(undefined);
   * // => false
   */
  function isNaN(value) {
    // `NaN` as a primitive is the only value that is not equal to itself
    // (perform the [[Class]] check first to avoid errors with some host objects in IE)
    return isNumber(value) && value != +value
  }

  /**
   * Checks if `value` is `null`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is `null`, else `false`.
   * @example
   *
   * _.isNull(null);
   * // => true
   *
   * _.isNull(undefined);
   * // => false
   */
  function isNull(value) {
    return value === null;
  }

  /**
   * Checks if `value` is a number.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a number, else `false`.
   * @example
   *
   * _.isNumber(8.4 * 5);
   * // => true
   */
  function isNumber(value) {
    return typeof value == 'number' || toString.call(value) == numberClass;
  }

  /**
   * Checks if a given `value` is an object created by the `Object` constructor.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Stooge(name, age) {
   *   this.name = name;
   *   this.age = age;
   * }
   *
   * _.isPlainObject(new Stooge('moe', 40));
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'name': 'moe', 'age': 40 });
   * // => true
   */
  var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
    if (!(value && typeof value == 'object')) {
      return false;
    }
    var valueOf = value.valueOf,
        objProto = typeof valueOf == 'function' && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);

    return objProto
      ? value == objProto || (getPrototypeOf(value) == objProto && !isArguments(value))
      : shimIsPlainObject(value);
  };

  /**
   * Checks if `value` is a regular expression.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a regular expression, else `false`.
   * @example
   *
   * _.isRegExp(/moe/);
   * // => true
   */
  function isRegExp(value) {
    return value instanceof RegExp || toString.call(value) == regexpClass;
  }

  /**
   * Checks if `value` is a string.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is a string, else `false`.
   * @example
   *
   * _.isString('moe');
   * // => true
   */
  function isString(value) {
    return typeof value == 'string' || toString.call(value) == stringClass;
  }

  /**
   * Checks if `value` is `undefined`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Mixed} value The value to check.
   * @returns {Boolean} Returns `true` if the `value` is `undefined`, else `false`.
   * @example
   *
   * _.isUndefined(void 0);
   * // => true
   */
  function isUndefined(value) {
    return typeof value == 'undefined';
  }

  /**
   * Creates an array composed of the own enumerable property names of `object`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns a new array of property names.
   * @example
   *
   * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
   * // => ['one', 'two', 'three'] (order is not guaranteed)
   */
  var keys = !nativeKeys ? shimKeys : function(object) {
    // avoid iterating over the `prototype` property
    return typeof object == 'function' && propertyIsEnumerable.call(object, 'prototype')
      ? shimKeys(object)
      : (isObject(object) ? nativeKeys(object) : []);
  };

  /**
   * Merges enumerable properties of the source object(s) into the `destination`
   * object. Subsequent sources will overwrite propery assignments of previous
   * sources.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The destination object.
   * @param {Object} [source1, source2, ...] The source objects.
   * @param- {Object} [indicator] Internally used to indicate that the `stack`
   *  argument is an array of traversed objects instead of another source object.
   * @param- {Array} [stackA=[]] Internally used to track traversed source objects.
   * @param- {Array} [stackB=[]] Internally used to associate values with their
   *  source counterparts.
   * @returns {Object} Returns the destination object.
   * @example
   *
   * var stooges = [
   *   { 'name': 'moe' },
   *   { 'name': 'larry' }
   * ];
   *
   * var ages = [
   *   { 'age': 40 },
   *   { 'age': 50 }
   * ];
   *
   * _.merge(stooges, ages);
   * // => [{ 'name': 'moe', 'age': 40 }, { 'name': 'larry', 'age': 50 }]
   */
  function merge(object, source, indicator) {
    var args = arguments,
        index = 0,
        length = 2,
        stackA = args[3],
        stackB = args[4];

    if (indicator !== indicatorObject) {
      stackA = [];
      stackB = [];

      // work with `_.reduce` by only using its callback `accumulator` and `value` arguments
      if (typeof indicator != 'number') {
        length = args.length;
      }
    }
    while (++index < length) {
      forOwn(args[index], function(source, key) {
        var found, isArr, value;
        if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
          // avoid merging previously merged cyclic sources
          var stackLength = stackA.length;
          while (stackLength--) {
            found = stackA[stackLength] == source;
            if (found) {
              break;
            }
          }
          if (found) {
            object[key] = stackB[stackLength];
          }
          else {
            // add `source` and associated `value` to the stack of traversed objects
            stackA.push(source);
            stackB.push(value = (value = object[key], isArr)
              ? (isArray(value) ? value : [])
              : (isPlainObject(value) ? value : {})
            );
            // recursively merge objects and arrays (susceptible to call stack limits)
            object[key] = merge(value, source, indicatorObject, stackA, stackB);
          }
        } else if (source != null) {
          object[key] = source;
        }
      });
    }
    return object;
  }

  /**
   * Creates a shallow clone of `object` excluding the specified properties.
   * Property names may be specified as individual arguments or as arrays of
   * property names. If `callback` is passed, it will be executed for each property
   * in the `object`, omitting the properties `callback` returns truthy for. The
   * `callback` is bound to `thisArg` and invoked with three arguments; (value, key, object).
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The source object.
   * @param {Function|String} callback|[prop1, prop2, ...] The properties to omit
   *  or the function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns an object without the omitted properties.
   * @example
   *
   * _.omit({ 'name': 'moe', 'age': 40, 'userid': 'moe1' }, 'userid');
   * // => { 'name': 'moe', 'age': 40 }
   *
   * _.omit({ 'name': 'moe', '_hint': 'knucklehead', '_seed': '96c4eb' }, function(value, key) {
   *   return key.charAt(0) == '_';
   * });
   * // => { 'name': 'moe' }
   */
  function omit(object, callback, thisArg) {
    var isFunc = typeof callback == 'function',
        result = {};

    if (isFunc) {
      callback = createCallback(callback, thisArg);
    } else {
      var props = concat.apply(arrayRef, arguments);
    }
    forIn(object, function(value, key, object) {
      if (isFunc
            ? !callback(value, key, object)
            : indexOf(props, key, 1) < 0
          ) {
        result[key] = value;
      }
    });
    return result;
  }

  /**
   * Creates a two dimensional array of the given object's key-value pairs,
   * i.e. `[[key1, value1], [key2, value2]]`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns new array of key-value pairs.
   * @example
   *
   * _.pairs({ 'moe': 30, 'larry': 40, 'curly': 50 });
   * // => [['moe', 30], ['larry', 40], ['curly', 50]] (order is not guaranteed)
   */
  function pairs(object) {
    var result = [];
    forOwn(object, function(value, key) {
      result.push([key, value]);
    });
    return result;
  }

  /**
   * Creates a shallow clone of `object` composed of the specified properties.
   * Property names may be specified as individual arguments or as arrays of
   * property names. If `callback` is passed, it will be executed for each property
   * in the `object`, picking the properties `callback` returns truthy for. The
   * `callback` is bound to `thisArg` and invoked with three arguments; (value, key, object).
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The source object.
   * @param {Function|String} callback|[prop1, prop2, ...] The properties to pick
   *  or the function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns an object composed of the picked properties.
   * @example
   *
   * _.pick({ 'name': 'moe', 'age': 40, 'userid': 'moe1' }, 'name', 'age');
   * // => { 'name': 'moe', 'age': 40 }
   *
   * _.pick({ 'name': 'moe', '_hint': 'knucklehead', '_seed': '96c4eb' }, function(value, key) {
   *   return key.charAt(0) != '_';
   * });
   * // => { 'name': 'moe' }
   */
  function pick(object, callback, thisArg) {
    var result = {};
    if (typeof callback != 'function') {
      var index = 0,
          props = concat.apply(arrayRef, arguments),
          length = props.length;

      while (++index < length) {
        var key = props[index];
        if (key in object) {
          result[key] = object[key];
        }
      }
    } else {
      callback = createCallback(callback, thisArg);
      forIn(object, function(value, key, object) {
        if (callback(value, key, object)) {
          result[key] = value;
        }
      });
    }
    return result;
  }

  /**
   * Creates an array composed of the own enumerable property values of `object`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns a new array of property values.
   * @example
   *
   * _.values({ 'one': 1, 'two': 2, 'three': 3 });
   * // => [1, 2, 3]
   */
  function values(object) {
    var result = [];
    forOwn(object, function(value) {
      result.push(value);
    });
    return result;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Checks if a given `target` element is present in a `collection` using strict
   * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
   * as the offset from the end of the collection.
   *
   * @static
   * @memberOf _
   * @alias include
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Mixed} target The value to check for.
   * @param {Number} [fromIndex=0] The index to search from.
   * @returns {Boolean} Returns `true` if the `target` element is found, else `false`.
   * @example
   *
   * _.contains([1, 2, 3], 1);
   * // => true
   *
   * _.contains([1, 2, 3], 1, 2);
   * // => false
   *
   * _.contains({ 'name': 'moe', 'age': 40 }, 'moe');
   * // => true
   *
   * _.contains('curly', 'ur');
   * // => true
   */
  function contains(collection, target, fromIndex) {
    var index = -1,
        length = collection ? collection.length : 0,
        result = false;

    fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex) || 0;
    if (typeof length == 'number') {
      result = (isString(collection)
        ? collection.indexOf(target, fromIndex)
        : indexOf(collection, target, fromIndex)
      ) > -1;
    } else {
      each(collection, function(value) {
        if (++index >= fromIndex) {
          return !(result = value === target);
        }
      });
    }
    return result;
  }

  /**
   * Creates an object composed of keys returned from running each element of
   * `collection` through a `callback`. The corresponding value of each key is
   * the number of times the key was returned by `callback`. The `callback` is
   * bound to `thisArg` and invoked with three arguments; (value, index|key, collection).
   * The `callback` argument may also be the name of a property to count by (e.g. 'length').
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function|String} callback|property The function called per iteration
   *  or property name to count by.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns the composed aggregate object.
   * @example
   *
   * _.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });
   * // => { '4': 1, '6': 2 }
   *
   * _.countBy([4.3, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
   * // => { '4': 1, '6': 2 }
   *
   * _.countBy(['one', 'two', 'three'], 'length');
   * // => { '3': 2, '5': 1 }
   */
  function countBy(collection, callback, thisArg) {
    var result = {};
    callback = createCallback(callback, thisArg);

    forEach(collection, function(value, key, collection) {
      key = callback(value, key, collection);
      (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
    });
    return result;
  }

  /**
   * Checks if the `callback` returns a truthy value for **all** elements of a
   * `collection`. The `callback` is bound to `thisArg` and invoked with three
   * arguments; (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @alias all
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Boolean} Returns `true` if all elements pass the callback check,
   *  else `false`.
   * @example
   *
   * _.every([true, 1, null, 'yes'], Boolean);
   * // => false
   */
  function every(collection, callback, thisArg) {
    var result = true;
    callback = createCallback(callback, thisArg);

    if (isArray(collection)) {
      var index = -1,
          length = collection.length;

      while (++index < length) {
        if (!(result = !!callback(collection[index], index, collection))) {
          break;
        }
      }
    } else {
      each(collection, function(value, index, collection) {
        return (result = !!callback(value, index, collection));
      });
    }
    return result;
  }

  /**
   * Examines each element in a `collection`, returning an array of all elements
   * the `callback` returns truthy for. The `callback` is bound to `thisArg` and
   * invoked with three arguments; (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @alias select
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of elements that passed the callback check.
   * @example
   *
   * var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
   * // => [2, 4, 6]
   */
  function filter(collection, callback, thisArg) {
    var result = [];
    callback = createCallback(callback, thisArg);

    if (isArray(collection)) {
      var index = -1,
          length = collection.length;

      while (++index < length) {
        var value = collection[index];
        if (callback(value, index, collection)) {
          result.push(value);
        }
      }
    } else {
      each(collection, function(value, index, collection) {
        if (callback(value, index, collection)) {
          result.push(value);
        }
      });
    }
    return result;
  }

  /**
   * Examines each element in a `collection`, returning the first one the `callback`
   * returns truthy for. The function returns as soon as it finds an acceptable
   * element, and does not iterate over the entire `collection`. The `callback` is
   * bound to `thisArg` and invoked with three arguments; (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @alias detect
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Mixed} Returns the element that passed the callback check,
   *  else `undefined`.
   * @example
   *
   * var even = _.find([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
   * // => 2
   */
  function find(collection, callback, thisArg) {
    var result;
    callback = createCallback(callback, thisArg);

    forEach(collection, function(value, index, collection) {
      if (callback(value, index, collection)) {
        result = value;
        return false;
      }
    });
    return result;
  }

  /**
   * Iterates over a `collection`, executing the `callback` for each element in
   * the `collection`. The `callback` is bound to `thisArg` and invoked with three
   * arguments; (value, index|key, collection). Callbacks may exit iteration early
   * by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @alias each
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array|Object|String} Returns `collection`.
   * @example
   *
   * _([1, 2, 3]).forEach(alert).join(',');
   * // => alerts each number and returns '1,2,3'
   *
   * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, alert);
   * // => alerts each number value (order is not guaranteed)
   */
  function forEach(collection, callback, thisArg) {
    if (callback && typeof thisArg == 'undefined' && isArray(collection)) {
      var index = -1,
          length = collection.length;

      while (++index < length) {
        if (callback(collection[index], index, collection) === false) {
          break;
        }
      }
    } else {
      each(collection, callback, thisArg);
    }
    return collection;
  }

  /**
   * Creates an object composed of keys returned from running each element of
   * `collection` through a `callback`. The corresponding value of each key is an
   * array of elements passed to `callback` that returned the key. The `callback`
   * is bound to `thisArg` and invoked with three arguments; (value, index|key, collection).
   * The `callback` argument may also be the name of a property to group by (e.g. 'length').
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function|String} callback|property The function called per iteration
   *  or property name to group by.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns the composed aggregate object.
   * @example
   *
   * _.groupBy([4.2, 6.1, 6.4], function(num) { return Math.floor(num); });
   * // => { '4': [4.2], '6': [6.1, 6.4] }
   *
   * _.groupBy([4.2, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
   * // => { '4': [4.2], '6': [6.1, 6.4] }
   *
   * _.groupBy(['one', 'two', 'three'], 'length');
   * // => { '3': ['one', 'two'], '5': ['three'] }
   */
  function groupBy(collection, callback, thisArg) {
    var result = {};
    callback = createCallback(callback, thisArg);

    forEach(collection, function(value, key, collection) {
      key = callback(value, key, collection);
      (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
    });
    return result;
  }

  /**
   * Invokes the method named by `methodName` on each element in the `collection`,
   * returning an array of the results of each invoked method. Additional arguments
   * will be passed to each invoked method. If `methodName` is a function it will
   * be invoked for, and `this` bound to, each element in the `collection`.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function|String} methodName The name of the method to invoke or
   *  the function invoked per iteration.
   * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the method with.
   * @returns {Array} Returns a new array of the results of each invoked method.
   * @example
   *
   * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
   * // => [[1, 5, 7], [1, 2, 3]]
   *
   * _.invoke([123, 456], String.prototype.split, '');
   * // => [['1', '2', '3'], ['4', '5', '6']]
   */
  function invoke(collection, methodName) {
    var args = slice(arguments, 2),
        isFunc = typeof methodName == 'function',
        result = [];

    forEach(collection, function(value) {
      result.push((isFunc ? methodName : value[methodName]).apply(value, args));
    });
    return result;
  }

  /**
   * Creates an array of values by running each element in the `collection`
   * through a `callback`. The `callback` is bound to `thisArg` and invoked with
   * three arguments; (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @alias collect
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of the results of each `callback` execution.
   * @example
   *
   * _.map([1, 2, 3], function(num) { return num * 3; });
   * // => [3, 6, 9]
   *
   * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
   * // => [3, 6, 9] (order is not guaranteed)
   */
  function map(collection, callback, thisArg) {
    var index = -1,
        length = collection ? collection.length : 0,
        result = Array(typeof length == 'number' ? length : 0);

    callback = createCallback(callback, thisArg);
    if (isArray(collection)) {
      while (++index < length) {
        result[index] = callback(collection[index], index, collection);
      }
    } else {
      each(collection, function(value, key, collection) {
        result[++index] = callback(value, key, collection);
      });
    }
    return result;
  }

  /**
   * Retrieves the maximum value of an `array`. If `callback` is passed,
   * it will be executed for each value in the `array` to generate the
   * criterion by which the value is ranked. The `callback` is bound to
   * `thisArg` and invoked with three arguments; (value, index, collection).
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Mixed} Returns the maximum value.
   * @example
   *
   * var stooges = [
   *   { 'name': 'moe', 'age': 40 },
   *   { 'name': 'larry', 'age': 50 },
   *   { 'name': 'curly', 'age': 60 }
   * ];
   *
   * _.max(stooges, function(stooge) { return stooge.age; });
   * // => { 'name': 'curly', 'age': 60 };
   */
  function max(collection, callback, thisArg) {
    var computed = -Infinity,
        index = -1,
        length = collection ? collection.length : 0,
        result = computed;

    if (callback || !isArray(collection)) {
      callback = !callback && isString(collection)
        ? charAtCallback
        : createCallback(callback, thisArg);

      each(collection, function(value, index, collection) {
        var current = callback(value, index, collection);
        if (current > computed) {
          computed = current;
          result = value;
        }
      });
    } else {
      while (++index < length) {
        if (collection[index] > result) {
          result = collection[index];
        }
      }
    }
    return result;
  }

  /**
   * Retrieves the minimum value of an `array`. If `callback` is passed,
   * it will be executed for each value in the `array` to generate the
   * criterion by which the value is ranked. The `callback` is bound to `thisArg`
   * and invoked with three arguments; (value, index, collection).
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Mixed} Returns the minimum value.
   * @example
   *
   * _.min([10, 5, 100, 2, 1000]);
   * // => 2
   */
  function min(collection, callback, thisArg) {
    var computed = Infinity,
        index = -1,
        length = collection ? collection.length : 0,
        result = computed;

    if (callback || !isArray(collection)) {
      callback = !callback && isString(collection)
        ? charAtCallback
        : createCallback(callback, thisArg);

      each(collection, function(value, index, collection) {
        var current = callback(value, index, collection);
        if (current < computed) {
          computed = current;
          result = value;
        }
      });
    } else {
      while (++index < length) {
        if (collection[index] < result) {
          result = collection[index];
        }
      }
    }
    return result;
  }

  /**
   * Retrieves the value of a specified property from all elements in
   * the `collection`.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {String} property The property to pluck.
   * @returns {Array} Returns a new array of property values.
   * @example
   *
   * var stooges = [
   *   { 'name': 'moe', 'age': 40 },
   *   { 'name': 'larry', 'age': 50 },
   *   { 'name': 'curly', 'age': 60 }
   * ];
   *
   * _.pluck(stooges, 'name');
   * // => ['moe', 'larry', 'curly']
   */
  function pluck(collection, property) {
    return map(collection, property + '');
  }

  /**
   * Boils down a `collection` to a single value. The initial state of the
   * reduction is `accumulator` and each successive step of it should be returned
   * by the `callback`. The `callback` is bound to `thisArg` and invoked with 4
   * arguments; for arrays they are (accumulator, value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @alias foldl, inject
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [accumulator] Initial value of the accumulator.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Mixed} Returns the accumulated value.
   * @example
   *
   * var sum = _.reduce([1, 2, 3], function(memo, num) { return memo + num; });
   * // => 6
   */
  function reduce(collection, callback, accumulator, thisArg) {
    var noaccum = arguments.length < 3;
    callback = createCallback(callback, thisArg, indicatorObject);

    if (isArray(collection)) {
      var index = -1,
          length = collection.length;

      if (noaccum) {
        accumulator = collection[++index];
      }
      while (++index < length) {
        accumulator = callback(accumulator, collection[index], index, collection);
      }
    } else {
      each(collection, function(value, index, collection) {
        accumulator = noaccum
          ? (noaccum = false, value)
          : callback(accumulator, value, index, collection)
      });
    }
    return accumulator;
  }

  /**
   * The right-associative version of `_.reduce`.
   *
   * @static
   * @memberOf _
   * @alias foldr
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [accumulator] Initial value of the accumulator.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Mixed} Returns the accumulated value.
   * @example
   *
   * var list = [[0, 1], [2, 3], [4, 5]];
   * var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
   * // => [4, 5, 2, 3, 0, 1]
   */
  function reduceRight(collection, callback, accumulator, thisArg) {
    var iteratee = collection,
        length = collection ? collection.length : 0,
        noaccum = arguments.length < 3;

    if (typeof length != 'number') {
      var props = keys(collection);
      length = props.length;
    } else if (noCharByIndex && isString(collection)) {
      iteratee = collection.split('');
    }
    callback = createCallback(callback, thisArg, indicatorObject);
    forEach(collection, function(value, index, collection) {
      index = props ? props[--length] : --length;
      accumulator = noaccum
        ? (noaccum = false, iteratee[index])
        : callback(accumulator, iteratee[index], index, collection);
    });
    return accumulator;
  }

  /**
   * The opposite of `_.filter`, this method returns the values of a
   * `collection` that `callback` does **not** return truthy for.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of elements that did **not** pass the
   *  callback check.
   * @example
   *
   * var odds = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
   * // => [1, 3, 5]
   */
  function reject(collection, callback, thisArg) {
    callback = createCallback(callback, thisArg);
    return filter(collection, function(value, index, collection) {
      return !callback(value, index, collection);
    });
  }

  /**
   * Creates an array of shuffled `array` values, using a version of the
   * Fisher-Yates shuffle. See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to shuffle.
   * @returns {Array} Returns a new shuffled collection.
   * @example
   *
   * _.shuffle([1, 2, 3, 4, 5, 6]);
   * // => [4, 1, 6, 3, 5, 2]
   */
  function shuffle(collection) {
    var index = -1,
        result = Array(collection ? collection.length : 0);

    forEach(collection, function(value) {
      var rand = floor(nativeRandom() * (++index + 1));
      result[index] = result[rand];
      result[rand] = value;
    });
    return result;
  }

  /**
   * Gets the size of the `collection` by returning `collection.length` for arrays
   * and array-like objects or the number of own enumerable properties for objects.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to inspect.
   * @returns {Number} Returns `collection.length` or number of own enumerable properties.
   * @example
   *
   * _.size([1, 2]);
   * // => 2
   *
   * _.size({ 'one': 1, 'two': 2, 'three': 3 });
   * // => 3
   *
   * _.size('curly');
   * // => 5
   */
  function size(collection) {
    var length = collection ? collection.length : 0;
    return typeof length == 'number' ? length : keys(collection).length;
  }

  /**
   * Checks if the `callback` returns a truthy value for **any** element of a
   * `collection`. The function returns as soon as it finds passing value, and
   * does not iterate over the entire `collection`. The `callback` is bound to
   * `thisArg` and invoked with three arguments; (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @alias any
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Boolean} Returns `true` if any element passes the callback check,
   *  else `false`.
   * @example
   *
   * _.some([null, 0, 'yes', false], Boolean);
   * // => true
   */
  function some(collection, callback, thisArg) {
    var result;
    callback = createCallback(callback, thisArg);

    if (isArray(collection)) {
      var index = -1,
          length = collection.length;

      while (++index < length) {
        if ((result = callback(collection[index], index, collection))) {
          break;
        }
      }
    } else {
      each(collection, function(value, index, collection) {
        return !(result = callback(value, index, collection));
      });
    }
    return !!result;
  }

  /**
   * Creates an array, stable sorted in ascending order by the results of
   * running each element of `collection` through a `callback`. The `callback`
   * is bound to `thisArg` and invoked with three arguments; (value, index|key, collection).
   * The `callback` argument may also be the name of a property to sort by (e.g. 'length').
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Function|String} callback|property The function called per iteration
   *  or property name to sort by.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of sorted elements.
   * @example
   *
   * _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
   * // => [3, 1, 2]
   *
   * _.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
   * // => [3, 1, 2]
   *
   * _.sortBy(['larry', 'brendan', 'moe'], 'length');
   * // => ['moe', 'larry', 'brendan']
   */
  function sortBy(collection, callback, thisArg) {
    var result = [];
    callback = createCallback(callback, thisArg);

    forEach(collection, function(value, index, collection) {
      result.push({
        'criteria': callback(value, index, collection),
        'index': index,
        'value': value
      });
    });

    var length = result.length;
    result.sort(compareAscending);
    while (length--) {
      result[length] = result[length].value;
    }
    return result;
  }

  /**
   * Converts the `collection` to an array.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to convert.
   * @returns {Array} Returns the new converted array.
   * @example
   *
   * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
   * // => [2, 3, 4]
   */
  function toArray(collection) {
    var length = collection ? collection.length : 0;
    if (typeof length == 'number') {
      return noCharByIndex && isString(collection)
        ? collection.split('')
        : slice(collection);
    }
    return values(collection);
  }

  /**
   * Examines each element in a `collection`, returning an array of all elements
   * that contain the given `properties`.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|String} collection The collection to iterate over.
   * @param {Object} properties The object of property values to filter by.
   * @returns {Array} Returns a new array of elements that contain the given `properties`.
   * @example
   *
   * var stooges = [
   *   { 'name': 'moe', 'age': 40 },
   *   { 'name': 'larry', 'age': 50 },
   *   { 'name': 'curly', 'age': 60 }
   * ];
   *
   * _.where(stooges, { 'age': 40 });
   * // => [{ 'name': 'moe', 'age': 40 }]
   */
  function where(collection, properties) {
    var props = keys(properties);
    return filter(collection, function(object) {
      var length = props.length;
      while (length--) {
        var result = object[props[length]] === properties[props[length]];
        if (!result) {
          break;
        }
      }
      return !!result;
    });
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates an array with all falsey values of `array` removed. The values
   * `false`, `null`, `0`, `""`, `undefined` and `NaN` are all falsey.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to compact.
   * @returns {Array} Returns a new filtered array.
   * @example
   *
   * _.compact([0, 1, false, 2, '', 3]);
   * // => [1, 2, 3]
   */
  function compact(array) {
    var index = -1,
        length = array ? array.length : 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Creates an array of `array` elements not present in the other arrays
   * using strict equality for comparisons, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to process.
   * @param {Array} [array1, array2, ...] Arrays to check.
   * @returns {Array} Returns a new array of `array` elements not present in the
   *  other arrays.
   * @example
   *
   * _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
   * // => [1, 3, 4]
   */
  function difference(array) {
    var index = -1,
        length = array ? array.length : 0,
        flattened = concat.apply(arrayRef, arguments),
        contains = cachedContains(flattened, length),
        result = [];

    while (++index < length) {
      var value = array[index];
      if (!contains(value)) {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Gets the first element of the `array`. Pass `n` to return the first `n`
   * elements of the `array`.
   *
   * @static
   * @memberOf _
   * @alias head, take
   * @category Arrays
   * @param {Array} array The array to query.
   * @param {Number} [n] The number of elements to return.
   * @param- {Object} [guard] Internally used to allow this method to work with
   *  others like `_.map` without using their callback `index` argument for `n`.
   * @returns {Mixed} Returns the first element, or an array of the first `n`
   *  elements, of `array`.
   * @example
   *
   * _.first([5, 4, 3, 2, 1]);
   * // => 5
   */
  function first(array, n, guard) {
    if (array) {
      var length = array.length;
      return (n == null || guard)
        ? array[0]
        : slice(array, 0, nativeMin(nativeMax(0, n), length));
    }
  }

  /**
   * Flattens a nested array (the nesting can be to any depth). If `shallow` is
   * truthy, `array` will only be flattened a single level.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to compact.
   * @param {Boolean} shallow A flag to indicate only flattening a single level.
   * @returns {Array} Returns a new flattened array.
   * @example
   *
   * _.flatten([1, [2], [3, [[4]]]]);
   * // => [1, 2, 3, 4];
   *
   * _.flatten([1, [2], [3, [[4]]]], true);
   * // => [1, 2, 3, [[4]]];
   */
  function flatten(array, shallow) {
    var index = -1,
        length = array ? array.length : 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      // recursively flatten arrays (susceptible to call stack limits)
      if (isArray(value)) {
        push.apply(result, shallow ? value : flatten(value));
      } else {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Gets the index at which the first occurrence of `value` is found using
   * strict equality for comparisons, i.e. `===`. If the `array` is already
   * sorted, passing `true` for `fromIndex` will run a faster binary search.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to search.
   * @param {Mixed} value The value to search for.
   * @param {Boolean|Number} [fromIndex=0] The index to search from or `true` to
   *  perform a binary search on a sorted `array`.
   * @returns {Number} Returns the index of the matched value or `-1`.
   * @example
   *
   * _.indexOf([1, 2, 3, 1, 2, 3], 2);
   * // => 1
   *
   * _.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
   * // => 4
   *
   * _.indexOf([1, 1, 2, 2, 3, 3], 2, true);
   * // => 2
   */
  function indexOf(array, value, fromIndex) {
    var index = -1,
        length = array ? array.length : 0;

    if (typeof fromIndex == 'number') {
      index = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0) - 1;
    } else if (fromIndex) {
      index = sortedIndex(array, value);
      return array[index] === value ? index : -1;
    }
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Gets all but the last element of `array`. Pass `n` to exclude the last `n`
   * elements from the result.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to query.
   * @param {Number} [n=1] The number of elements to exclude.
   * @param- {Object} [guard] Internally used to allow this method to work with
   *  others like `_.map` without using their callback `index` argument for `n`.
   * @returns {Array} Returns all but the last element, or `n` elements, of `array`.
   * @example
   *
   * _.initial([3, 2, 1]);
   * // => [3, 2]
   */
  function initial(array, n, guard) {
    if (!array) {
      return [];
    }
    var length = array.length;
    n = n == null || guard ? 1 : n || 0;
    return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
  }

  /**
   * Computes the intersection of all the passed-in arrays using strict equality
   * for comparisons, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} [array1, array2, ...] Arrays to process.
   * @returns {Array} Returns a new array of unique elements that are present
   *  in **all** of the arrays.
   * @example
   *
   * _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
   * // => [1, 2]
   */
  function intersection(array) {
    var args = arguments,
        argsLength = args.length,
        cache = { '0': {} },
        index = -1,
        length = array ? array.length : 0,
        isLarge = length >= 100,
        result = [],
        seen = result;

    outer:
    while (++index < length) {
      var value = array[index];
      if (isLarge) {
        var key = value + '';
        var inited = hasOwnProperty.call(cache[0], key)
          ? !(seen = cache[0][key])
          : (seen = cache[0][key] = []);
      }
      if (inited || indexOf(seen, value) < 0) {
        if (isLarge) {
          seen.push(value);
        }
        var argsIndex = argsLength;
        while (--argsIndex) {
          if (!(cache[argsIndex] || (cache[argsIndex] = cachedContains(args[argsIndex], 0, 100)))(value)) {
            continue outer;
          }
        }
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Gets the last element of the `array`. Pass `n` to return the last `n`
   * elements of the `array`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to query.
   * @param {Number} [n] The number of elements to return.
   * @param- {Object} [guard] Internally used to allow this method to work with
   *  others like `_.map` without using their callback `index` argument for `n`.
   * @returns {Mixed} Returns the last element, or an array of the last `n`
   *  elements, of `array`.
   * @example
   *
   * _.last([3, 2, 1]);
   * // => 1
   */
  function last(array, n, guard) {
    if (array) {
      var length = array.length;
      return (n == null || guard) ? array[length - 1] : slice(array, nativeMax(0, length - n));
    }
  }

  /**
   * Gets the index at which the last occurrence of `value` is found using strict
   * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
   * as the offset from the end of the collection.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to search.
   * @param {Mixed} value The value to search for.
   * @param {Number} [fromIndex=array.length-1] The index to search from.
   * @returns {Number} Returns the index of the matched value or `-1`.
   * @example
   *
   * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
   * // => 4
   *
   * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
   * // => 1
   */
  function lastIndexOf(array, value, fromIndex) {
    var index = array ? array.length : 0;
    if (typeof fromIndex == 'number') {
      index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
    }
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Creates an object composed from arrays of `keys` and `values`. Pass either
   * a single two dimensional array, i.e. `[[key1, value1], [key2, value2]]`, or
   * two arrays, one of `keys` and one of corresponding `values`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} keys The array of keys.
   * @param {Array} [values=[]] The array of values.
   * @returns {Object} Returns an object composed of the given keys and
   *  corresponding values.
   * @example
   *
   * _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
   * // => { 'moe': 30, 'larry': 40, 'curly': 50 }
   */
  function object(keys, values) {
    var index = -1,
        length = keys ? keys.length : 0,
        result = {};

    while (++index < length) {
      var key = keys[index];
      if (values) {
        result[key] = values[index];
      } else {
        result[key[0]] = key[1];
      }
    }
    return result;
  }

  /**
   * Creates an array of numbers (positive and/or negative) progressing from
   * `start` up to but not including `stop`. This method is a port of Python's
   * `range()` function. See http://docs.python.org/library/functions.html#range.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Number} [start=0] The start of the range.
   * @param {Number} end The end of the range.
   * @param {Number} [step=1] The value to increment or descrement by.
   * @returns {Array} Returns a new range array.
   * @example
   *
   * _.range(10);
   * // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   *
   * _.range(1, 11);
   * // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   *
   * _.range(0, 30, 5);
   * // => [0, 5, 10, 15, 20, 25]
   *
   * _.range(0, -10, -1);
   * // => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
   *
   * _.range(0);
   * // => []
   */
  function range(start, end, step) {
    start = +start || 0;
    step = +step || 1;

    if (end == null) {
      end = start;
      start = 0;
    }
    // use `Array(length)` so V8 will avoid the slower "dictionary" mode
    // http://youtu.be/XAqIpGU8ZZk#t=17m25s
    var index = -1,
        length = nativeMax(0, ceil((end - start) / step)),
        result = Array(length);

    while (++index < length) {
      result[index] = start;
      start += step;
    }
    return result;
  }

  /**
   * The opposite of `_.initial`, this method gets all but the first value of
   * `array`. Pass `n` to exclude the first `n` values from the result.
   *
   * @static
   * @memberOf _
   * @alias drop, tail
   * @category Arrays
   * @param {Array} array The array to query.
   * @param {Number} [n=1] The number of elements to exclude.
   * @param- {Object} [guard] Internally used to allow this method to work with
   *  others like `_.map` without using their callback `index` argument for `n`.
   * @returns {Array} Returns all but the first element, or `n` elements, of `array`.
   * @example
   *
   * _.rest([3, 2, 1]);
   * // => [2, 1]
   */
  function rest(array, n, guard) {
    return slice(array, (n == null || guard) ? 1 : nativeMax(0, n));
  }

  /**
   * Uses a binary search to determine the smallest index at which the `value`
   * should be inserted into `array` in order to maintain the sort order of the
   * sorted `array`. If `callback` is passed, it will be executed for `value` and
   * each element in `array` to compute their sort ranking. The `callback` is
   * bound to `thisArg` and invoked with one argument; (value). The `callback`
   * argument may also be the name of a property to order by.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to iterate over.
   * @param {Mixed} value The value to evaluate.
   * @param {Function|String} [callback=identity|property] The function called
   *  per iteration or property name to order by.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Number} Returns the index at which the value should be inserted
   *  into `array`.
   * @example
   *
   * _.sortedIndex([20, 30, 50], 40);
   * // => 2
   *
   * _.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
   * // => 2
   *
   * var dict = {
   *   'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
   * };
   *
   * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
   *   return dict.wordToNumber[word];
   * });
   * // => 2
   *
   * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
   *   return this.wordToNumber[word];
   * }, dict);
   * // => 2
   */
  function sortedIndex(array, value, callback, thisArg) {
    var low = 0,
        high = array ? array.length : low;

    // explicitly reference `identity` for better inlining in Firefox
    callback = callback ? createCallback(callback, thisArg) : identity;
    value = callback(value);

    while (low < high) {
      var mid = (low + high) >>> 1;
      callback(array[mid]) < value
        ? low = mid + 1
        : high = mid;
    }
    return low;
  }

  /**
   * Computes the union of the passed-in arrays using strict equality for
   * comparisons, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} [array1, array2, ...] Arrays to process.
   * @returns {Array} Returns a new array of unique values, in order, that are
   *  present in one or more of the arrays.
   * @example
   *
   * _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
   * // => [1, 2, 3, 101, 10]
   */
  function union() {
    return uniq(concat.apply(arrayRef, arguments));
  }

  /**
   * Creates a duplicate-value-free version of the `array` using strict equality
   * for comparisons, i.e. `===`. If the `array` is already sorted, passing `true`
   * for `isSorted` will run a faster algorithm. If `callback` is passed, each
   * element of `array` is passed through a callback` before uniqueness is computed.
   * The `callback` is bound to `thisArg` and invoked with three arguments; (value, index, array).
   *
   * @static
   * @memberOf _
   * @alias unique
   * @category Arrays
   * @param {Array} array The array to process.
   * @param {Boolean} [isSorted=false] A flag to indicate that the `array` is already sorted.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a duplicate-value-free array.
   * @example
   *
   * _.uniq([1, 2, 1, 3, 1]);
   * // => [1, 2, 3]
   *
   * _.uniq([1, 1, 2, 2, 3], true);
   * // => [1, 2, 3]
   *
   * _.uniq([1, 2, 1.5, 3, 2.5], function(num) { return Math.floor(num); });
   * // => [1, 2, 3]
   *
   * _.uniq([1, 2, 1.5, 3, 2.5], function(num) { return this.floor(num); }, Math);
   * // => [1, 2, 3]
   */
  function uniq(array, isSorted, callback, thisArg) {
    var index = -1,
        length = array ? array.length : 0,
        result = [],
        seen = result;

    // juggle arguments
    if (typeof isSorted == 'function') {
      thisArg = callback;
      callback = isSorted;
      isSorted = false;
    }
    // init value cache for large arrays
    var isLarge = !isSorted && length >= 75;
    if (isLarge) {
      var cache = {};
    }
    if (callback) {
      seen = [];
      callback = createCallback(callback, thisArg);
    }
    while (++index < length) {
      var value = array[index],
          computed = callback ? callback(value, index, array) : value;

      if (isLarge) {
        var key = computed + '';
        var inited = hasOwnProperty.call(cache, key)
          ? !(seen = cache[key])
          : (seen = cache[key] = []);
      }
      if (isSorted
            ? !index || seen[seen.length - 1] !== computed
            : inited || indexOf(seen, computed) < 0
          ) {
        if (callback || isLarge) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Creates an array with all occurrences of the passed values removed using
   * strict equality for comparisons, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to filter.
   * @param {Mixed} [value1, value2, ...] Values to remove.
   * @returns {Array} Returns a new filtered array.
   * @example
   *
   * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
   * // => [2, 3, 4]
   */
  function without(array) {
    var index = -1,
        length = array ? array.length : 0,
        contains = cachedContains(arguments, 1, 20),
        result = [];

    while (++index < length) {
      var value = array[index];
      if (!contains(value)) {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Groups the elements of each array at their corresponding indexes. Useful for
   * separate data sources that are coordinated through matching array indexes.
   * For a matrix of nested arrays, `_.zip.apply(...)` can transpose the matrix
   * in a similar fashion.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} [array1, array2, ...] Arrays to process.
   * @returns {Array} Returns a new array of grouped elements.
   * @example
   *
   * _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
   * // => [['moe', 30, true], ['larry', 40, false], ['curly', 50, false]]
   */
  function zip(array) {
    var index = -1,
        length = array ? max(pluck(arguments, 'length')) : 0,
        result = Array(length);

    while (++index < length) {
      result[index] = pluck(arguments, index);
    }
    return result;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a function that is restricted to executing `func` only after it is
   * called `n` times. The `func` is executed with the `this` binding of the
   * created function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Number} n The number of times the function must be called before
   * it is executed.
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * var renderNotes = _.after(notes.length, render);
   * _.forEach(notes, function(note) {
   *   note.asyncSave({ 'success': renderNotes });
   * });
   * // `renderNotes` is run once, after all notes have saved
   */
  function after(n, func) {
    if (n < 1) {
      return func();
    }
    return function() {
      if (--n < 1) {
        return func.apply(this, arguments);
      }
    };
  }

  /**
   * Creates a function that, when called, invokes `func` with the `this`
   * binding of `thisArg` and prepends any additional `bind` arguments to those
   * passed to the bound function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to bind.
   * @param {Mixed} [thisArg] The `this` binding of `func`.
   * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   * @example
   *
   * var func = function(greeting) {
   *   return greeting + ' ' + this.name;
   * };
   *
   * func = _.bind(func, { 'name': 'moe' }, 'hi');
   * func();
   * // => 'hi moe'
   */
  function bind(func, thisArg) {
    // use `Function#bind` if it exists and is fast
    // (in V8 `Function#bind` is slower except when partially applied)
    return isBindFast || (nativeBind && arguments.length > 2)
      ? nativeBind.call.apply(nativeBind, arguments)
      : createBound(func, thisArg, slice(arguments, 2));
  }

  /**
   * Binds methods on `object` to `object`, overwriting the existing method.
   * If no method names are provided, all the function properties of `object`
   * will be bound.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Object} object The object to bind and assign the bound methods to.
   * @param {String} [methodName1, methodName2, ...] Method names on the object to bind.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var buttonView = {
   *  'label': 'lodash',
   *  'onClick': function() { alert('clicked: ' + this.label); }
   * };
   *
   * _.bindAll(buttonView);
   * jQuery('#lodash_button').on('click', buttonView.onClick);
   * // => When the button is clicked, `this.label` will have the correct value
   */
  function bindAll(object) {
    var funcs = arguments,
        index = funcs.length > 1 ? 0 : (funcs = functions(object), -1),
        length = funcs.length;

    while (++index < length) {
      var key = funcs[index];
      object[key] = bind(object[key], object);
    }
    return object;
  }

  /**
   * Creates a function that, when called, invokes the method at `object[key]`
   * and prepends any additional `bindKey` arguments to those passed to the bound
   * function. This method differs from `_.bind` by allowing bound functions to
   * reference methods that will be redefined or don't yet exist.
   * See http://michaux.ca/articles/lazy-function-definition-pattern.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Object} object The object the method belongs to.
   * @param {String} key The key of the method.
   * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   * @example
   *
   * var object = {
   *   'name': 'moe',
   *   'greet': function(greeting) {
   *     return greeting + ' ' + this.name;
   *   }
   * };
   *
   * var func = _.bindKey(object, 'greet', 'hi');
   * func();
   * // => 'hi moe'
   *
   * object.greet = function(greeting) {
   *   return greeting + ', ' + this.name + '!';
   * };
   *
   * func();
   * // => 'hi, moe!'
   */
  function bindKey(object, key) {
    return createBound(object, key, slice(arguments, 2));
  }

  /**
   * Creates a function that is the composition of the passed functions,
   * where each function consumes the return value of the function that follows.
   * In math terms, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
   * Each function is executed with the `this` binding of the composed function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} [func1, func2, ...] Functions to compose.
   * @returns {Function} Returns the new composed function.
   * @example
   *
   * var greet = function(name) { return 'hi: ' + name; };
   * var exclaim = function(statement) { return statement + '!'; };
   * var welcome = _.compose(exclaim, greet);
   * welcome('moe');
   * // => 'hi: moe!'
   */
  function compose() {
    var funcs = arguments;
    return function() {
      var args = arguments,
          length = funcs.length;

      while (length--) {
        args = [funcs[length].apply(this, args)];
      }
      return args[0];
    };
  }

  /**
   * Creates a function that will delay the execution of `func` until after
   * `wait` milliseconds have elapsed since the last time it was invoked. Pass
   * `true` for `immediate` to cause debounce to invoke `func` on the leading,
   * instead of the trailing, edge of the `wait` timeout. Subsequent calls to
   * the debounced function will return the result of the last `func` call.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to debounce.
   * @param {Number} wait The number of milliseconds to delay.
   * @param {Boolean} immediate A flag to indicate execution is on the leading
   *  edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * var lazyLayout = _.debounce(calculateLayout, 300);
   * jQuery(window).on('resize', lazyLayout);
   */
  function debounce(func, wait, immediate) {
    var args,
        result,
        thisArg,
        timeoutId;

    function delayed() {
      timeoutId = null;
      if (!immediate) {
        result = func.apply(thisArg, args);
      }
    }
    return function() {
      var isImmediate = immediate && !timeoutId;
      args = arguments;
      thisArg = this;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(delayed, wait);

      if (isImmediate) {
        result = func.apply(thisArg, args);
      }
      return result;
    };
  }

  /**
   * Executes the `func` function after `wait` milliseconds. Additional arguments
   * will be passed to `func` when it is invoked.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to delay.
   * @param {Number} wait The number of milliseconds to delay execution.
   * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the function with.
   * @returns {Number} Returns the `setTimeout` timeout id.
   * @example
   *
   * var log = _.bind(console.log, console);
   * _.delay(log, 1000, 'logged later');
   * // => 'logged later' (Appears after one second.)
   */
  function delay(func, wait) {
    var args = slice(arguments, 2);
    return setTimeout(function() { func.apply(undefined, args); }, wait);
  }

  /**
   * Defers executing the `func` function until the current call stack has cleared.
   * Additional arguments will be passed to `func` when it is invoked.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to defer.
   * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the function with.
   * @returns {Number} Returns the `setTimeout` timeout id.
   * @example
   *
   * _.defer(function() { alert('deferred'); });
   * // returns from the function before `alert` is called
   */
  function defer(func) {
    var args = slice(arguments, 1);
    return setTimeout(function() { func.apply(undefined, args); }, 1);
  }

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * passed, it will be used to determine the cache key for storing the result
   * based on the arguments passed to the memoized function. By default, the first
   * argument passed to the memoized function is used as the cache key. The `func`
   * is executed with the `this` binding of the memoized function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] A function used to resolve the cache key.
   * @returns {Function} Returns the new memoizing function.
   * @example
   *
   * var fibonacci = _.memoize(function(n) {
   *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
   * });
   */
  function memoize(func, resolver) {
    var cache = {};
    return function() {
      var key = resolver ? resolver.apply(this, arguments) : arguments[0];
      return hasOwnProperty.call(cache, key)
        ? cache[key]
        : (cache[key] = func.apply(this, arguments));
    };
  }

  /**
   * Creates a function that is restricted to execute `func` once. Repeat calls to
   * the function will return the value of the first call. The `func` is executed
   * with the `this` binding of the created function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * var initialize = _.once(createApplication);
   * initialize();
   * initialize();
   * // Application is only created once.
   */
  function once(func) {
    var result,
        ran = false;

    return function() {
      if (ran) {
        return result;
      }
      ran = true;
      result = func.apply(this, arguments);

      // clear the `func` variable so the function may be garbage collected
      func = null;
      return result;
    };
  }

  /**
   * Creates a function that, when called, invokes `func` with any additional
   * `partial` arguments prepended to those passed to the new function. This
   * method is similar to `bind`, except it does **not** alter the `this` binding.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to partially apply arguments to.
   * @param {Mixed} [arg1, arg2, ...] Arguments to be partially applied.
   * @returns {Function} Returns the new partially applied function.
   * @example
   *
   * var greet = function(greeting, name) { return greeting + ': ' + name; };
   * var hi = _.partial(greet, 'hi');
   * hi('moe');
   * // => 'hi: moe'
   */
  function partial(func) {
    return createBound(func, slice(arguments, 1));
  }

  /**
   * Creates a function that, when executed, will only call the `func`
   * function at most once per every `wait` milliseconds. If the throttled
   * function is invoked more than once during the `wait` timeout, `func` will
   * also be called on the trailing edge of the timeout. Subsequent calls to the
   * throttled function will return the result of the last `func` call.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to throttle.
   * @param {Number} wait The number of milliseconds to throttle executions to.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * var throttled = _.throttle(updatePosition, 100);
   * jQuery(window).on('scroll', throttled);
   */
  function throttle(func, wait) {
    var args,
        result,
        thisArg,
        timeoutId,
        lastCalled = 0;

    function trailingCall() {
      lastCalled = new Date;
      timeoutId = null;
      result = func.apply(thisArg, args);
    }
    return function() {
      var now = new Date,
          remaining = wait - (now - lastCalled);

      args = arguments;
      thisArg = this;

      if (remaining <= 0) {
        clearTimeout(timeoutId);
        timeoutId = null;
        lastCalled = now;
        result = func.apply(thisArg, args);
      }
      else if (!timeoutId) {
        timeoutId = setTimeout(trailingCall, remaining);
      }
      return result;
    };
  }

  /**
   * Creates a function that passes `value` to the `wrapper` function as its
   * first argument. Additional arguments passed to the function are appended
   * to those passed to the `wrapper` function. The `wrapper` is executed with
   * the `this` binding of the created function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Mixed} value The value to wrap.
   * @param {Function} wrapper The wrapper function.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var hello = function(name) { return 'hello ' + name; };
   * hello = _.wrap(hello, function(func) {
   *   return 'before, ' + func('moe') + ', after';
   * });
   * hello();
   * // => 'before, hello moe, after'
   */
  function wrap(value, wrapper) {
    return function() {
      var args = [value];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Converts the characters `&`, `<`, `>`, `"`, and `'` in `string` to their
   * corresponding HTML entities.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {String} string The string to escape.
   * @returns {String} Returns the escaped string.
   * @example
   *
   * _.escape('Moe, Larry & Curly');
   * // => 'Moe, Larry &amp; Curly'
   */
  function escape(string) {
    return string == null ? '' : (string + '').replace(reUnescapedHtml, escapeHtmlChar);
  }

  /**
   * This function returns the first argument passed to it.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Mixed} value Any value.
   * @returns {Mixed} Returns `value`.
   * @example
   *
   * var moe = { 'name': 'moe' };
   * moe === _.identity(moe);
   * // => true
   */
  function identity(value) {
    return value;
  }

  /**
   * Adds functions properties of `object` to the `lodash` function and chainable
   * wrapper.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Object} object The object of function properties to add to `lodash`.
   * @example
   *
   * _.mixin({
   *   'capitalize': function(string) {
   *     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
   *   }
   * });
   *
   * _.capitalize('larry');
   * // => 'Larry'
   *
   * _('curly').capitalize();
   * // => 'Curly'
   */
  function mixin(object) {
    forEach(functions(object), function(methodName) {
      var func = lodash[methodName] = object[methodName];

      lodash.prototype[methodName] = function() {
        var args = [this.__wrapped__];
        push.apply(args, arguments);

        var result = func.apply(lodash, args);
        return new lodash(result);
      };
    });
  }

  /**
   * Reverts the '_' variable to its previous value and returns a reference to
   * the `lodash` function.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @returns {Function} Returns the `lodash` function.
   * @example
   *
   * var lodash = _.noConflict();
   */
  function noConflict() {
    window._ = oldDash;
    return this;
  }

  /**
   * Produces a random number between `min` and `max` (inclusive). If only one
   * argument is passed, a number between `0` and the given number will be returned.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Number} [min=0] The minimum possible value.
   * @param {Number} [max=1] The maximum possible value.
   * @returns {Number} Returns a random number.
   * @example
   *
   * _.random(0, 5);
   * // => a number between 1 and 5
   *
   * _.random(5);
   * // => also a number between 1 and 5
   */
  function random(min, max) {
    if (min == null && max == null) {
      max = 1;
    }
    min = +min || 0;
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + floor(nativeRandom() * ((+max || 0) - min + 1));
  }

  /**
   * Resolves the value of `property` on `object`. If `property` is a function
   * it will be invoked and its result returned, else the property value is
   * returned. If `object` is falsey, then `null` is returned.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Object} object The object to inspect.
   * @param {String} property The property to get the value of.
   * @returns {Mixed} Returns the resolved value.
   * @example
   *
   * var object = {
   *   'cheese': 'crumpets',
   *   'stuff': function() {
   *     return 'nonsense';
   *   }
   * };
   *
   * _.result(object, 'cheese');
   * // => 'crumpets'
   *
   * _.result(object, 'stuff');
   * // => 'nonsense'
   */
  function result(object, property) {
    // based on Backbone's private `getValue` function
    // https://github.com/documentcloud/backbone/blob/0.9.2/backbone.js#L1419-1424
    var value = object ? object[property] : null;
    return isFunction(value) ? object[property]() : value;
  }

  /**
   * A micro-templating method that handles arbitrary delimiters, preserves
   * whitespace, and correctly escapes quotes within interpolated code.
   *
   * Note: In the development build `_.template` utilizes sourceURLs for easier
   * debugging. See http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
   *
   * Note: Lo-Dash may be used in Chrome extensions by either creating a `lodash csp`
   * build and avoiding `_.template` use, or loading Lo-Dash in a sandboxed page.
   * See http://developer.chrome.com/trunk/extensions/sandboxingEval.html
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {String} text The template text.
   * @param {Obect} data The data object used to populate the text.
   * @param {Object} options The options object.
   *  escape - The "escape" delimiter regexp.
   *  evaluate - The "evaluate" delimiter regexp.
   *  interpolate - The "interpolate" delimiter regexp.
   *  sourceURL - The sourceURL of the template's compiled source.
   *  variable - The data object variable name.
   *
   * @returns {Function|String} Returns a compiled function when no `data` object
   *  is given, else it returns the interpolated text.
   * @example
   *
   * // using a compiled template
   * var compiled = _.template('hello <%= name %>');
   * compiled({ 'name': 'moe' });
   * // => 'hello moe'
   *
   * var list = '<% _.forEach(people, function(name) { %><li><%= name %></li><% }); %>';
   * _.template(list, { 'people': ['moe', 'larry', 'curly'] });
   * // => '<li>moe</li><li>larry</li><li>curly</li>'
   *
   * // using the "escape" delimiter to escape HTML in data property values
   * _.template('<b><%- value %></b>', { 'value': '<script>' });
   * // => '<b>&lt;script&gt;</b>'
   *
   * // using the ES6 delimiter as an alternative to the default "interpolate" delimiter
   * _.template('hello ${ name }', { 'name': 'curly' });
   * // => 'hello curly'
   *
   * // using the internal `print` function in "evaluate" delimiters
   * _.template('<% print("hello " + epithet); %>!', { 'epithet': 'stooge' });
   * // => 'hello stooge!'
   *
   * // using custom template delimiters
   * _.templateSettings = {
   *   'interpolate': /{{([\s\S]+?)}}/g
   * };
   *
   * _.template('hello {{ name }}!', { 'name': 'mustache' });
   * // => 'hello mustache!'
   *
   * // using the `sourceURL` option to specify a custom sourceURL for the template
   * var compiled = _.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });
   * compiled(data);
   * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
   *
   * // using the `variable` option to ensure a with-statement isn't used in the compiled template
   * var compiled = _.template('hello <%= data.name %>!', null, { 'variable': 'data' });
   * compiled.source;
   * // => function(data) {
   *   var __t, __p = '', __e = _.escape;
   *   __p += 'hello ' + ((__t = ( data.name )) == null ? '' : __t) + '!';
   *   return __p;
   * }
   *
   * // using the `source` property to inline compiled templates for meaningful
   * // line numbers in error messages and a stack trace
   * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
   *   var JST = {\
   *     "main": ' + _.template(mainText).source + '\
   *   };\
   * ');
   */
  function template(text, data, options) {
    // based on John Resig's `tmpl` implementation
    // http://ejohn.org/blog/javascript-micro-templating/
    // and Laura Doktorova's doT.js
    // https://github.com/olado/doT
    text || (text = '');
    options || (options = {});

    var isEvaluating,
        result,
        settings = lodash.templateSettings,
        index = 0,
        interpolate = options.interpolate || settings.interpolate || reNoMatch,
        source = "__p += '",
        variable = options.variable || settings.variable,
        hasVariable = variable;

    // compile regexp to match each delimiter
    var reDelimiters = RegExp(
      (options.escape || settings.escape || reNoMatch).source + '|' +
      interpolate.source + '|' +
      (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
      (options.evaluate || settings.evaluate || reNoMatch).source + '|$'
    , 'g');

    text.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
      interpolateValue || (interpolateValue = esTemplateValue);

      // escape characters that cannot be included in string literals
      source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);

      // replace delimiters with snippets
      if (escapeValue) {
        source += "' +\n__e(" + escapeValue + ") +\n'";
      }
      if (evaluateValue) {
        source += "';\n" + evaluateValue + ";\n__p += '";
      }
      if (interpolateValue) {
        source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
      }
      isEvaluating || (isEvaluating = evaluateValue || reComplexDelimiter.test(escapeValue || interpolateValue));
      index = offset + match.length;

      // the JS engine embedded in Adobe products requires returning the `match`
      // string in order to produce the correct `offset` value
      return match;
    });

    source += "';\n";

    // if `variable` is not specified and the template contains "evaluate"
    // delimiters, wrap a with-statement around the generated code to add the
    // data object to the top of the scope chain
    if (!hasVariable) {
      variable = 'obj';
      if (isEvaluating) {
        source = 'with (' + variable + ') {\n' + source + '\n}\n';
      }
      else {
        // avoid a with-statement by prepending data object references to property names
        var reDoubleVariable = RegExp('(\\(\\s*)' + variable + '\\.' + variable + '\\b', 'g');
        source = source
          .replace(reInsertVariable, '$&' + variable + '.')
          .replace(reDoubleVariable, '$1__d');
      }
    }

    // cleanup code by stripping empty strings
    source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
      .replace(reEmptyStringMiddle, '$1')
      .replace(reEmptyStringTrailing, '$1;');

    // frame code as the function body
    source = 'function(' + variable + ') {\n' +
      (hasVariable ? '' : variable + ' || (' + variable + ' = {});\n') +
      "var __t, __p = '', __e = _.escape" +
      (isEvaluating
        ? ', __j = Array.prototype.join;\n' +
          "function print() { __p += __j.call(arguments, '') }\n"
        : (hasVariable ? '' : ', __d = ' + variable + '.' + variable + ' || ' + variable) + ';\n'
      ) +
      source +
      'return __p\n}';

    // use a sourceURL for easier debugging
    // http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
    var sourceURL = useSourceURL
      ? '\n//@ sourceURL=' + (options.sourceURL || '/lodash/template/source[' + (templateCounter++) + ']')
      : '';

    try {
      result = Function('_', 'return ' + source + sourceURL)(lodash);
    } catch(e) {
      e.source = source;
      throw e;
    }

    if (data) {
      return result(data);
    }
    // provide the compiled function's source via its `toString` method, in
    // supported environments, or the `source` property as a convenience for
    // inlining compiled templates during the build process
    result.source = source;
    return result;
  }

  /**
   * Executes the `callback` function `n` times, returning an array of the results
   * of each `callback` execution. The `callback` is bound to `thisArg` and invoked
   * with one argument; (index).
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Number} n The number of times to execute the callback.
   * @param {Function} callback The function called per iteration.
   * @param {Mixed} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of the results of each `callback` execution.
   * @example
   *
   * var diceRolls = _.times(3, _.partial(_.random, 1, 6));
   * // => [3, 6, 4]
   *
   * _.times(3, function(n) { mage.castSpell(n); });
   * // => calls `mage.castSpell(n)` three times, passing `n` of `0`, `1`, and `2` respectively
   *
   * _.times(3, function(n) { this.cast(n); }, mage);
   * // => also calls `mage.castSpell(n)` three times
   */
  function times(n, callback, thisArg) {
    n = +n || 0;
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = callback.call(thisArg, index);
    }
    return result;
  }

  /**
   * The opposite of `_.escape`, this method converts the HTML entities
   * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#x27;` in `string` to their
   * corresponding characters.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {String} string The string to unescape.
   * @returns {String} Returns the unescaped string.
   * @example
   *
   * _.unescape('Moe, Larry &amp; Curly');
   * // => 'Moe, Larry & Curly'
   */
  function unescape(string) {
    return string == null ? '' : (string + '').replace(reEscapedHtml, unescapeHtmlChar);
  }

  /**
   * Generates a unique ID. If `prefix` is passed, the ID will be appended to it.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {String} [prefix] The value to prefix the ID with.
   * @returns {String} Returns the unique ID.
   * @example
   *
   * _.uniqueId('contact_');
   * // => 'contact_104'
   *
   * _.uniqueId();
   * // => '105'
   */
  function uniqueId(prefix) {
    return (prefix == null ? '' : prefix + '') + (++idCounter);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Invokes `interceptor` with the `value` as the first argument, and then
   * returns `value`. The purpose of this method is to "tap into" a method chain,
   * in order to perform operations on intermediate results within the chain.
   *
   * @static
   * @memberOf _
   * @category Chaining
   * @param {Mixed} value The value to pass to `interceptor`.
   * @param {Function} interceptor The function to invoke.
   * @returns {Mixed} Returns `value`.
   * @example
   *
   * _.chain([1, 2, 3, 200])
   *  .filter(function(num) { return num % 2 == 0; })
   *  .tap(alert)
   *  .map(function(num) { return num * num; })
   *  .value();
   * // => // [2, 200] (alerted)
   * // => [4, 40000]
   */
  function tap(value, interceptor) {
    interceptor(value);
    return value;
  }

  /**
   * Produces the `toString` result of the wrapped value.
   *
   * @name toString
   * @memberOf _
   * @category Chaining
   * @returns {String} Returns the string result.
   * @example
   *
   * _([1, 2, 3]).toString();
   * // => '1,2,3'
   */
  function wrapperToString() {
    return this.__wrapped__ + '';
  }

  /**
   * Extracts the wrapped value.
   *
   * @name valueOf
   * @memberOf _
   * @alias value
   * @category Chaining
   * @returns {Mixed} Returns the wrapped value.
   * @example
   *
   * _([1, 2, 3]).valueOf();
   * // => [1, 2, 3]
   */
  function wrapperValueOf() {
    return this.__wrapped__;
  }

  /*--------------------------------------------------------------------------*/

  // add functions that return wrapped values when chaining
  lodash.after = after;
  lodash.assign = assign;
  lodash.bind = bind;
  lodash.bindAll = bindAll;
  lodash.bindKey = bindKey;
  lodash.compact = compact;
  lodash.compose = compose;
  lodash.countBy = countBy;
  lodash.debounce = debounce;
  lodash.defaults = defaults;
  lodash.defer = defer;
  lodash.delay = delay;
  lodash.difference = difference;
  lodash.filter = filter;
  lodash.flatten = flatten;
  lodash.forEach = forEach;
  lodash.forIn = forIn;
  lodash.forOwn = forOwn;
  lodash.functions = functions;
  lodash.groupBy = groupBy;
  lodash.initial = initial;
  lodash.intersection = intersection;
  lodash.invert = invert;
  lodash.invoke = invoke;
  lodash.keys = keys;
  lodash.map = map;
  lodash.max = max;
  lodash.memoize = memoize;
  lodash.merge = merge;
  lodash.min = min;
  lodash.object = object;
  lodash.omit = omit;
  lodash.once = once;
  lodash.pairs = pairs;
  lodash.partial = partial;
  lodash.pick = pick;
  lodash.pluck = pluck;
  lodash.range = range;
  lodash.reject = reject;
  lodash.rest = rest;
  lodash.shuffle = shuffle;
  lodash.sortBy = sortBy;
  lodash.tap = tap;
  lodash.throttle = throttle;
  lodash.times = times;
  lodash.toArray = toArray;
  lodash.union = union;
  lodash.uniq = uniq;
  lodash.values = values;
  lodash.where = where;
  lodash.without = without;
  lodash.wrap = wrap;
  lodash.zip = zip;

  // add aliases
  lodash.collect = map;
  lodash.drop = rest;
  lodash.each = forEach;
  lodash.extend = assign;
  lodash.methods = functions;
  lodash.select = filter;
  lodash.tail = rest;
  lodash.unique = uniq;

  // add functions to `lodash.prototype`
  mixin(lodash);

  /*--------------------------------------------------------------------------*/

  // add functions that return unwrapped values when chaining
  lodash.clone = clone;
  lodash.cloneDeep = cloneDeep;
  lodash.contains = contains;
  lodash.escape = escape;
  lodash.every = every;
  lodash.find = find;
  lodash.has = has;
  lodash.identity = identity;
  lodash.indexOf = indexOf;
  lodash.isArguments = isArguments;
  lodash.isArray = isArray;
  lodash.isBoolean = isBoolean;
  lodash.isDate = isDate;
  lodash.isElement = isElement;
  lodash.isEmpty = isEmpty;
  lodash.isEqual = isEqual;
  lodash.isFinite = isFinite;
  lodash.isFunction = isFunction;
  lodash.isNaN = isNaN;
  lodash.isNull = isNull;
  lodash.isNumber = isNumber;
  lodash.isObject = isObject;
  lodash.isPlainObject = isPlainObject;
  lodash.isRegExp = isRegExp;
  lodash.isString = isString;
  lodash.isUndefined = isUndefined;
  lodash.lastIndexOf = lastIndexOf;
  lodash.mixin = mixin;
  lodash.noConflict = noConflict;
  lodash.random = random;
  lodash.reduce = reduce;
  lodash.reduceRight = reduceRight;
  lodash.result = result;
  lodash.size = size;
  lodash.some = some;
  lodash.sortedIndex = sortedIndex;
  lodash.template = template;
  lodash.unescape = unescape;
  lodash.uniqueId = uniqueId;

  // add aliases
  lodash.all = every;
  lodash.any = some;
  lodash.detect = find;
  lodash.foldl = reduce;
  lodash.foldr = reduceRight;
  lodash.include = contains;
  lodash.inject = reduce;

  forOwn(lodash, function(func, methodName) {
    if (!lodash.prototype[methodName]) {
      lodash.prototype[methodName] = function() {
        var args = [this.__wrapped__];
        push.apply(args, arguments);
        return func.apply(lodash, args);
      };
    }
  });

  /*--------------------------------------------------------------------------*/

  // add functions capable of returning wrapped and unwrapped values when chaining
  lodash.first = first;
  lodash.last = last;

  // add aliases
  lodash.take = first;
  lodash.head = first;

  forOwn(lodash, function(func, methodName) {
    if (!lodash.prototype[methodName]) {
      lodash.prototype[methodName]= function(n, guard) {
        var result = func(this.__wrapped__, n, guard);
        return (n == null || guard) ? result : new lodash(result);
      };
    }
  });

  /*--------------------------------------------------------------------------*/

  /**
   * The semantic version number.
   *
   * @static
   * @memberOf _
   * @type String
   */
  lodash.VERSION = '1.0.0-rc.3';

  // add "Chaining" functions to the wrapper
  lodash.prototype.toString = wrapperToString;
  lodash.prototype.value = wrapperValueOf;
  lodash.prototype.valueOf = wrapperValueOf;

  // add `Array` functions that return unwrapped values
  each(['join', 'pop', 'shift'], function(methodName) {
    var func = arrayRef[methodName];
    lodash.prototype[methodName] = function() {
      return func.apply(this.__wrapped__, arguments);
    };
  });

  // add `Array` functions that return the wrapped value
  each(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
    var func = arrayRef[methodName];
    lodash.prototype[methodName] = function() {
      func.apply(this.__wrapped__, arguments);
      return this;
    };
  });

  // add `Array` functions that return new wrapped values
  each(['concat', 'slice', 'splice'], function(methodName) {
    var func = arrayRef[methodName];
    lodash.prototype[methodName] = function() {
      var result = func.apply(this.__wrapped__, arguments);
      return new lodash(result);
    };
  });

  // avoid array-like object bugs with `Array#shift` and `Array#splice`
  // in Firefox < 10 and IE < 9
  if (hasObjectSpliceBug) {
    each(['pop', 'shift', 'splice'], function(methodName) {
      var func = arrayRef[methodName],
          isSplice = methodName == 'splice';

      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            result = func.apply(value, arguments);

        if (value.length === 0) {
          delete value[0];
        }
        return isSplice ? new lodash(result) : result;
      };
    });
  }

  // add pseudo private property to be used and removed during the build process
  lodash._each = each;
  lodash._iteratorTemplate = iteratorTemplate;

  /*--------------------------------------------------------------------------*/

  // expose Lo-Dash
  // some AMD build optimizers, like r.js, check for specific condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose Lo-Dash to the global object even when an AMD loader is present in
    // case Lo-Dash was injected by a third-party script and not intended to be
    // loaded as a module. The global assignment can be reverted in the Lo-Dash
    // module via its `noConflict()` method.
    window._ = lodash;

    // define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module
    define(function() {
      return lodash;
    });
  }
  // check for `exports` after `define` in case a build optimizer adds an `exports` object
  else if (freeExports) {
    // in Node.js or RingoJS v0.8.0+
    if (typeof module == 'object' && module && module.exports == freeExports) {
      (module.exports = lodash)._ = lodash;
    }
    // in Narwhal or RingoJS v0.7.0-
    else {
      freeExports._ = lodash;
    }
  }
  else {
    // in a browser or Rhino
    window._ = lodash;
  }
}(this));
;//     Backbone.js 0.9.10

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(){

  // Initial Setup
  // -------------

  // Save a reference to the global object (`window` in the browser, `exports`
  // on the server).
  var root = this;

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to array methods.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // The top-level namespace. All public Backbone classes and modules will
  // be attached to this. Exported for both CommonJS and the browser.
  var Backbone;
  if (typeof exports !== 'undefined') {
    Backbone = exports;
  } else {
    Backbone = root.Backbone = {};
  }

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '0.9.10';

  // Require Underscore, if we're on the server, and it's not already present.
  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

  // For Backbone's purposes, jQuery, Zepto, or Ender owns the `$` variable.
  Backbone.$ = root.jQuery || root.Zepto || root.ender;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
    } else if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
    } else {
      return true;
    }
  };

  // Optimized internal dispatch function for triggering events. Tries to
  // keep the usual cases speedy (most Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length;
    switch (args.length) {
    case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx);
    return;
    case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, args[0]);
    return;
    case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, args[0], args[1]);
    return;
    case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, args[0], args[1], args[2]);
    return;
    default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
    }
  };

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind one or more space separated events, or an events map,
    // to a `callback` function. Passing `"all"` will bind the callback to
    // all events fired.
    on: function(name, callback, context) {
      if (!(eventsApi(this, 'on', name, [callback, context]) && callback)) return this;
      this._events || (this._events = {});
      var list = this._events[name] || (this._events[name] = []);
      list.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind events to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!(eventsApi(this, 'once', name, [callback, context]) && callback)) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      this.on(name, once, context);
      return this;
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var list, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = {};
        return this;
      }

      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (list = this._events[name]) {
          events = [];
          if (callback || context) {
            for (j = 0, k = list.length; j < k; j++) {
              ev = list[j];
              if ((callback && callback !== ev.callback &&
                               callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                events.push(ev);
              }
            }
          }
          this._events[name] = events;
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // An inversion-of-control version of `on`. Tell *this* object to listen to
    // an event in another object ... keeping track of what it's listening to.
    listenTo: function(obj, name, callback) {
      var listeners = this._listeners || (this._listeners = {});
      var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
      listeners[id] = obj;
      obj.on(name, typeof name === 'object' ? this : callback, this);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeners = this._listeners;
      if (!listeners) return;
      if (obj) {
        obj.off(name, typeof name === 'object' ? this : callback, this);
        if (!name && !callback) delete listeners[obj._listenerId];
      } else {
        if (typeof name === 'object') callback = this;
        for (var id in listeners) {
          listeners[id].off(name, callback, this);
        }
        this._listeners = {};
      }
      return this;
    }
  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Create a new model, with defined attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var defaults;
    var attrs = attributes || {};
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options && options.collection) this.collection = options.collection;
    if (options && options.parse) attrs = this.parse(attrs, options) || {};
    if (defaults = _.result(this, 'defaults')) {
      attrs = _.defaults({}, attrs, defaults);
    }
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // ----------------------------------------------------------------------

    // Set a hash of model attributes on the object, firing `"change"` unless
    // you choose to silence it.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = true;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"` unless you choose
    // to silence it. `unset` is a noop if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"` unless you choose
    // to silence it.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // ---------------------------------------------------------------------

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overriden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      options.success = function(model, resp, options) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
      };
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, success, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      // If we're not waiting and attributes exist, save acts as `set(attr).save(null, opts)`.
      if (attrs && (!options || !options.wait) && !this.set(attrs, options)) return false;

      options = _.extend({validate: true}, options);

      // Do not persist invalid models.
      if (!this._validate(attrs, options)) return false;

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      success = options.success;
      options.success = function(model, resp, options) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
      };

      // Finish configuring and sending the Ajax request.
      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(model, resp, options) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
      };

      if (this.isNew()) {
        options.success(this, null, options);
        return false;
      }

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
      if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) === '/' ? '' : '/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return this.id == null;
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return !this.validate || !this.validate(this.attributes, options);
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire a general
    // `"error"` event and call the error callback, if specified.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, options || {});
      return false;
    }

  });

  // Backbone.Collection
  // -------------------

  // Provides a standard collection class for our sets of models, ordered
  // or unordered. If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this.models = [];
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      models = _.isArray(models) ? models.slice() : [models];
      options || (options = {});
      var i, l, model, attrs, existing, doSort, add, at, sort, sortAttr;
      add = [];
      at = options.at;
      sort = this.comparator && (at == null) && options.sort != false;
      sortAttr = _.isString(this.comparator) ? this.comparator : null;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        if (!(model = this._prepareModel(attrs = models[i], options))) {
          this.trigger('invalid', this, attrs, options);
          continue;
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(model)) {
          if (options.merge) {
            existing.set(attrs === model ? model.attributes : attrs, options);
            if (sort && !doSort && existing.hasChanged(sortAttr)) doSort = true;
          }
          continue;
        }

        // This is a new model, push it to the `add` list.
        add.push(model);

        // Listen to added models' events, and index models for lookup by
        // `id` and by `cid`.
        model.on('all', this._onModelEvent, this);
        this._byId[model.cid] = model;
        if (model.id != null) this._byId[model.id] = model;
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (add.length) {
        if (sort) doSort = true;
        this.length += add.length;
        if (at != null) {
          splice.apply(this.models, [at, 0].concat(add));
        } else {
          push.apply(this.models, add);
        }
      }

      // Silently sort the collection if appropriate.
      if (doSort) this.sort({silent: true});

      if (options.silent) return this;

      // Trigger `add` events.
      for (i = 0, l = add.length; i < l; i++) {
        (model = add[i]).trigger('add', model, this, options);
      }

      // Trigger `sort` if the collection was sorted.
      if (doSort) this.trigger('sort', this, options);

      return this;
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      models = _.isArray(models) ? models.slice() : [models];
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model);
      }
      return this;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: this.length}, options));
      return model;
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: 0}, options));
      return model;
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function(begin, end) {
      return this.models.slice(begin, end);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      this._idAttr || (this._idAttr = this.model.prototype.idAttribute);
      return this._byId[obj.id || obj.cid || obj[this._idAttr] || obj];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of `filter`.
    where: function(attrs) {
      if (_.isEmpty(attrs)) return [];
      return this.filter(function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) {
        throw new Error('Cannot sort a set without a comparator');
      }
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Smartly update a collection with a change set of models, adding,
    // removing, and merging as necessary.
    update: function(models, options) {
      options = _.extend({add: true, merge: true, remove: true}, options);
      if (options.parse) models = this.parse(models, options);
      var model, i, l, existing;
      var add = [], remove = [], modelMap = {};

      // Allow a single model (or no argument) to be passed.
      if (!_.isArray(models)) models = models ? [models] : [];

      // Proxy to `add` for this case, no need to iterate...
      if (options.add && !options.remove) return this.add(models, options);

      // Determine which models to add and merge, and which to remove.
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i];
        existing = this.get(model);
        if (options.remove && existing) modelMap[existing.cid] = true;
        if ((options.add && !existing) || (options.merge && existing)) {
          add.push(model);
        }
      }
      if (options.remove) {
        for (i = 0, l = this.models.length; i < l; i++) {
          model = this.models[i];
          if (!modelMap[model.cid]) remove.push(model);
        }
      }

      // Remove models (if applicable) before we add and merge the rest.
      if (remove.length) this.remove(remove, options);
      if (add.length) this.add(add, options);
      return this;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any `add` or `remove` events. Fires `reset` when finished.
    reset: function(models, options) {
      options || (options = {});
      if (options.parse) models = this.parse(models, options);
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i]);
      }
      options.previousModels = this.models.slice();
      this._reset();
      if (models) this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return this;
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `update: true` is passed, the response
    // data will be passed through the `update` method instead of `reset`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      options.success = function(collection, resp, options) {
        var method = options.update ? 'update' : 'reset';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
      };
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp, options) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Reset all internal state. Called when the collection is reset.
    _reset: function() {
      this.length = 0;
      this.models.length = 0;
      this._byId  = {};
    },

    // Prepare a model or hash of attributes to be added to this collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options || (options = {});
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model._validate(attrs, options)) return false;
      return model;
    },

    // Internal method to remove a model's ties to a collection.
    _removeReference: function(model) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    },

    sortedIndex: function (model, value, context) {
      value || (value = this.comparator);
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _.sortedIndex(this.models, model, iterator, context);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'indexOf', 'shuffle', 'lastIndexOf',
    'isEmpty', 'chain'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (!callback) callback = this[name];
      Backbone.history.route(route, _.bind(function(fragment) {
        var args = this._extractParameters(route, fragment);
        callback && callback.apply(this, args);
        this.trigger.apply(this, ['route:' + name].concat(args));
        this.trigger('route', name, args);
        Backbone.history.trigger('route', this, name, args);
      }, this));
      return this;
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional){
                     return optional ? match : '([^\/]+)';
                   })
                   .replace(splatParam, '(.*?)');
      return new RegExp('^' + route + '$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted parameters.
    _extractParameters: function(route, fragment) {
      return route.exec(fragment).slice(1);
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on URL fragments. If the
  // browser does not support `onhashchange`, falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = this.location.pathname;
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.substr(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({}, {root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;
      var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

      // If we've started off with a route from a `pushState`-enabled browser,
      // but we're currently in a browser that doesn't support it...
      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
        this.fragment = this.getFragment(null, true);
        this.location.replace(this.root + this.location.search + '#' + this.fragment);
        // Return immediately as browser will do redirect to new url
        return true;

      // Or if we've started out with a hash-based route, but we're currently
      // in a browser where it could be `pushState`-based instead...
      } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
        this.fragment = this.getHash().replace(routeStripper, '');
        this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl() || this.loadUrl(this.getHash());
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragmentOverride) {
      var fragment = this.fragment = this.getFragment(fragmentOverride);
      var matched = _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
      return matched;
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: options};
      fragment = this.getFragment(fragment || '');
      if (this.fragment === fragment) return;
      this.fragment = fragment;
      var url = this.root + fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Backbone.View
  // -------------

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    this._configure(options || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be prefered to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save'
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) throw new Error('Method "' + events[key] + '" does not exist');
        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
    },

    // Performs the initial configuration of a View with a set of options.
    // Keys with special meaning *(model, collection, id, className)*, are
    // attached directly to the view.
    _configure: function(options) {
      if (this.options) options = _.extend({}, _.result(this, 'options'), options);
      _.extend(this, _.pick(options, viewOptions));
      this.options = options;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    var success = options.success;
    options.success = function(resp) {
      if (success) success(model, resp, options);
      model.trigger('sync', model, resp, options);
    };

    var error = options.error;
    options.error = function(xhr) {
      if (error) error(model, xhr, options);
      model.trigger('error', model, xhr, options);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

}).call(this);
;// lib/handlebars/base.js

/*jshint eqnull:true*/
this.Handlebars = {};

(function(Handlebars) {

Handlebars.VERSION = "1.0.rc.1";

Handlebars.helpers  = {};
Handlebars.partials = {};

Handlebars.registerHelper = function(name, fn, inverse) {
  if(inverse) { fn.not = inverse; }
  this.helpers[name] = fn;
};

Handlebars.registerPartial = function(name, str) {
  this.partials[name] = str;
};

Handlebars.registerHelper('helperMissing', function(arg) {
  if(arguments.length === 2) {
    return undefined;
  } else {
    throw new Error("Could not find property '" + arg + "'");
  }
});

var toString = Object.prototype.toString, functionType = "[object Function]";

Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  var inverse = options.inverse || function() {}, fn = options.fn;


  var ret = "";
  var type = toString.call(context);

  if(type === functionType) { context = context.call(this); }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      return Handlebars.helpers.each(context, options);
    } else {
      return inverse(this);
    }
  } else {
    return fn(context);
  }
});

Handlebars.K = function() {};

Handlebars.createFrame = Object.create || function(object) {
  Handlebars.K.prototype = object;
  var obj = new Handlebars.K();
  Handlebars.K.prototype = null;
  return obj;
};

Handlebars.registerHelper('each', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var ret = "", data;

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  if(context && context.length > 0) {
    for(var i=0, j=context.length; i<j; i++) {
      if (data) { data.index = i; }
      ret = ret + fn(context[i], { data: data });
    }
  } else {
    ret = inverse(this);
  }
  return ret;
});

Handlebars.registerHelper('if', function(context, options) {
  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if(!context || Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('unless', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  options.fn = inverse;
  options.inverse = fn;

  return Handlebars.helpers['if'].call(this, context, options);
});

Handlebars.registerHelper('with', function(context, options) {
  return options.fn(context);
});

Handlebars.registerHelper('log', function(context) {
  Handlebars.log(context);
});

}(this.Handlebars));
;
// lib/handlebars/compiler/parser.js
/* Jison generated parser */
var handlebars = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"program":4,"EOF":5,"statements":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"inMustache":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"OPEN_PARTIAL":24,"params":25,"hash":26,"DATA":27,"param":28,"STRING":29,"INTEGER":30,"BOOLEAN":31,"hashSegments":32,"hashSegment":33,"ID":34,"EQUALS":35,"pathSegments":36,"SEP":37,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",27:"DATA",29:"STRING",30:"INTEGER",31:"BOOLEAN",34:"ID",35:"EQUALS",37:"SEP"},
productions_: [0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[17,1],[25,2],[25,1],[28,1],[28,1],[28,1],[28,1],[28,1],[26,1],[32,2],[32,1],[33,3],[33,3],[33,3],[33,3],[33,3],[21,1],[36,3],[36,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: this.$ = new yy.ProgramNode($$[$0-2], $$[$0]); 
break;
case 3: this.$ = new yy.ProgramNode($$[$0]); 
break;
case 4: this.$ = new yy.ProgramNode([]); 
break;
case 5: this.$ = [$$[$0]]; 
break;
case 6: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 7: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0]); 
break;
case 8: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0]); 
break;
case 9: this.$ = $$[$0]; 
break;
case 10: this.$ = $$[$0]; 
break;
case 11: this.$ = new yy.ContentNode($$[$0]); 
break;
case 12: this.$ = new yy.CommentNode($$[$0]); 
break;
case 13: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]); 
break;
case 14: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]); 
break;
case 15: this.$ = $$[$0-1]; 
break;
case 16: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]); 
break;
case 17: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], true); 
break;
case 18: this.$ = new yy.PartialNode($$[$0-1]); 
break;
case 19: this.$ = new yy.PartialNode($$[$0-2], $$[$0-1]); 
break;
case 20: 
break;
case 21: this.$ = [[$$[$0-2]].concat($$[$0-1]), $$[$0]]; 
break;
case 22: this.$ = [[$$[$0-1]].concat($$[$0]), null]; 
break;
case 23: this.$ = [[$$[$0-1]], $$[$0]]; 
break;
case 24: this.$ = [[$$[$0]], null]; 
break;
case 25: this.$ = [[new yy.DataNode($$[$0])], null]; 
break;
case 26: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 27: this.$ = [$$[$0]]; 
break;
case 28: this.$ = $$[$0]; 
break;
case 29: this.$ = new yy.StringNode($$[$0]); 
break;
case 30: this.$ = new yy.IntegerNode($$[$0]); 
break;
case 31: this.$ = new yy.BooleanNode($$[$0]); 
break;
case 32: this.$ = new yy.DataNode($$[$0]); 
break;
case 33: this.$ = new yy.HashNode($$[$0]); 
break;
case 34: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 35: this.$ = [$$[$0]]; 
break;
case 36: this.$ = [$$[$0-2], $$[$0]]; 
break;
case 37: this.$ = [$$[$0-2], new yy.StringNode($$[$0])]; 
break;
case 38: this.$ = [$$[$0-2], new yy.IntegerNode($$[$0])]; 
break;
case 39: this.$ = [$$[$0-2], new yy.BooleanNode($$[$0])]; 
break;
case 40: this.$ = [$$[$0-2], new yy.DataNode($$[$0])]; 
break;
case 41: this.$ = new yy.IdNode($$[$0]); 
break;
case 42: $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 43: this.$ = [$$[$0]]; 
break;
}
},
table: [{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,27:[1,24],34:[1,26],36:25},{17:27,21:23,27:[1,24],34:[1,26],36:25},{17:28,21:23,27:[1,24],34:[1,26],36:25},{17:29,21:23,27:[1,24],34:[1,26],36:25},{21:30,34:[1,26],36:25},{1:[2,1]},{6:31,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,32],21:23,27:[1,24],34:[1,26],36:25},{10:33,20:[1,34]},{10:35,20:[1,34]},{18:[1,36]},{18:[2,24],21:41,25:37,26:38,27:[1,45],28:39,29:[1,42],30:[1,43],31:[1,44],32:40,33:46,34:[1,47],36:25},{18:[2,25]},{18:[2,41],27:[2,41],29:[2,41],30:[2,41],31:[2,41],34:[2,41],37:[1,48]},{18:[2,43],27:[2,43],29:[2,43],30:[2,43],31:[2,43],34:[2,43],37:[2,43]},{18:[1,49]},{18:[1,50]},{18:[1,51]},{18:[1,52],21:53,34:[1,26],36:25},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:54,34:[1,26],36:25},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:41,26:55,27:[1,45],28:56,29:[1,42],30:[1,43],31:[1,44],32:40,33:46,34:[1,47],36:25},{18:[2,23]},{18:[2,27],27:[2,27],29:[2,27],30:[2,27],31:[2,27],34:[2,27]},{18:[2,33],33:57,34:[1,58]},{18:[2,28],27:[2,28],29:[2,28],30:[2,28],31:[2,28],34:[2,28]},{18:[2,29],27:[2,29],29:[2,29],30:[2,29],31:[2,29],34:[2,29]},{18:[2,30],27:[2,30],29:[2,30],30:[2,30],31:[2,30],34:[2,30]},{18:[2,31],27:[2,31],29:[2,31],30:[2,31],31:[2,31],34:[2,31]},{18:[2,32],27:[2,32],29:[2,32],30:[2,32],31:[2,32],34:[2,32]},{18:[2,35],34:[2,35]},{18:[2,43],27:[2,43],29:[2,43],30:[2,43],31:[2,43],34:[2,43],35:[1,59],37:[2,43]},{34:[1,60]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,61]},{18:[1,62]},{18:[2,21]},{18:[2,26],27:[2,26],29:[2,26],30:[2,26],31:[2,26],34:[2,26]},{18:[2,34],34:[2,34]},{35:[1,59]},{21:63,27:[1,67],29:[1,64],30:[1,65],31:[1,66],34:[1,26],36:25},{18:[2,42],27:[2,42],29:[2,42],30:[2,42],31:[2,42],34:[2,42],37:[2,42]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,36],34:[2,36]},{18:[2,37],34:[2,37]},{18:[2,38],34:[2,38]},{18:[2,39],34:[2,39]},{18:[2,40],34:[2,40]}],
defaultActions: {16:[2,1],24:[2,25],38:[2,23],55:[2,21]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:
                                   if(yy_.yytext.slice(-1) !== "\\") this.begin("mu");
                                   if(yy_.yytext.slice(-1) === "\\") yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1), this.begin("emu");
                                   if(yy_.yytext) return 14;
                                 
break;
case 1: return 14; 
break;
case 2:
                                   if(yy_.yytext.slice(-1) !== "\\") this.popState();
                                   if(yy_.yytext.slice(-1) === "\\") yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1);
                                   return 14;
                                 
break;
case 3: return 24; 
break;
case 4: return 16; 
break;
case 5: return 20; 
break;
case 6: return 19; 
break;
case 7: return 19; 
break;
case 8: return 23; 
break;
case 9: return 23; 
break;
case 10: yy_.yytext = yy_.yytext.substr(3,yy_.yyleng-5); this.popState(); return 15; 
break;
case 11: return 22; 
break;
case 12: return 35; 
break;
case 13: return 34; 
break;
case 14: return 34; 
break;
case 15: return 37; 
break;
case 16: /*ignore whitespace*/ 
break;
case 17: this.popState(); return 18; 
break;
case 18: this.popState(); return 18; 
break;
case 19: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"'); return 29; 
break;
case 20: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"'); return 29; 
break;
case 21: yy_.yytext = yy_.yytext.substr(1); return 27; 
break;
case 22: return 31; 
break;
case 23: return 31; 
break;
case 24: return 30; 
break;
case 25: return 34; 
break;
case 26: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 34; 
break;
case 27: return 'INVALID'; 
break;
case 28: return 5; 
break;
}
};
lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[} ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@[a-zA-Z]+)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:[0-9]+(?=[}\s]))/,/^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
lexer.conditions = {"mu":{"rules":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"INITIAL":{"rules":[0,1,28],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = handlebars;
exports.Parser = handlebars.Parser;
exports.parse = function () { return handlebars.parse.apply(handlebars, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
};
;
// lib/handlebars/compiler/base.js
Handlebars.Parser = handlebars;

Handlebars.parse = function(string) {
  Handlebars.Parser.yy = Handlebars.AST;
  return Handlebars.Parser.parse(string);
};

Handlebars.print = function(ast) {
  return new Handlebars.PrintVisitor().accept(ast);
};

Handlebars.logger = {
  DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

  // override in the host environment
  log: function(level, str) {}
};

Handlebars.log = function(level, str) { Handlebars.logger.log(level, str); };
;
// lib/handlebars/compiler/ast.js
(function() {

  Handlebars.AST = {};

  Handlebars.AST.ProgramNode = function(statements, inverse) {
    this.type = "program";
    this.statements = statements;
    if(inverse) { this.inverse = new Handlebars.AST.ProgramNode(inverse); }
  };

  Handlebars.AST.MustacheNode = function(rawParams, hash, unescaped) {
    this.type = "mustache";
    this.escaped = !unescaped;
    this.hash = hash;

    var id = this.id = rawParams[0];
    var params = this.params = rawParams.slice(1);

    // a mustache is an eligible helper if:
    // * its id is simple (a single part, not `this` or `..`)
    var eligibleHelper = this.eligibleHelper = id.isSimple;

    // a mustache is definitely a helper if:
    // * it is an eligible helper, and
    // * it has at least one parameter or hash segment
    this.isHelper = eligibleHelper && (params.length || hash);

    // if a mustache is an eligible helper but not a definite
    // helper, it is ambiguous, and will be resolved in a later
    // pass or at runtime.
  };

  Handlebars.AST.PartialNode = function(id, context) {
    this.type    = "partial";

    // TODO: disallow complex IDs

    this.id      = id;
    this.context = context;
  };

  var verifyMatch = function(open, close) {
    if(open.original !== close.original) {
      throw new Handlebars.Exception(open.original + " doesn't match " + close.original);
    }
  };

  Handlebars.AST.BlockNode = function(mustache, program, inverse, close) {
    verifyMatch(mustache.id, close);
    this.type = "block";
    this.mustache = mustache;
    this.program  = program;
    this.inverse  = inverse;

    if (this.inverse && !this.program) {
      this.isInverse = true;
    }
  };

  Handlebars.AST.ContentNode = function(string) {
    this.type = "content";
    this.string = string;
  };

  Handlebars.AST.HashNode = function(pairs) {
    this.type = "hash";
    this.pairs = pairs;
  };

  Handlebars.AST.IdNode = function(parts) {
    this.type = "ID";
    this.original = parts.join(".");

    var dig = [], depth = 0;

    for(var i=0,l=parts.length; i<l; i++) {
      var part = parts[i];

      if(part === "..") { depth++; }
      else if(part === "." || part === "this") { this.isScoped = true; }
      else { dig.push(part); }
    }

    this.parts    = dig;
    this.string   = dig.join('.');
    this.depth    = depth;

    // an ID is simple if it only has one part, and that part is not
    // `..` or `this`.
    this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;
  };

  Handlebars.AST.DataNode = function(id) {
    this.type = "DATA";
    this.id = id;
  };

  Handlebars.AST.StringNode = function(string) {
    this.type = "STRING";
    this.string = string;
  };

  Handlebars.AST.IntegerNode = function(integer) {
    this.type = "INTEGER";
    this.integer = integer;
  };

  Handlebars.AST.BooleanNode = function(bool) {
    this.type = "BOOLEAN";
    this.bool = bool;
  };

  Handlebars.AST.CommentNode = function(comment) {
    this.type = "comment";
    this.comment = comment;
  };

})();;
// lib/handlebars/utils.js
Handlebars.Exception = function(message) {
  var tmp = Error.prototype.constructor.apply(this, arguments);

  for (var p in tmp) {
    if (tmp.hasOwnProperty(p)) { this[p] = tmp[p]; }
  }

  this.message = tmp.message;
};
Handlebars.Exception.prototype = new Error();

// Build out our basic SafeString type
Handlebars.SafeString = function(string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

(function() {
  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  var escapeChar = function(chr) {
    return escape[chr] || "&amp;";
  };

  Handlebars.Utils = {
    escapeExpression: function(string) {
      // don't escape SafeStrings, since they're already safe
      if (string instanceof Handlebars.SafeString) {
        return string.toString();
      } else if (string == null || string === false) {
        return "";
      }

      if(!possible.test(string)) { return string; }
      return string.replace(badChars, escapeChar);
    },

    isEmpty: function(value) {
      if (typeof value === "undefined") {
        return true;
      } else if (value === null) {
        return true;
      } else if (value === false) {
        return true;
      } else if(Object.prototype.toString.call(value) === "[object Array]" && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  };
})();;
// lib/handlebars/compiler/compiler.js

/*jshint eqnull:true*/
Handlebars.Compiler = function() {};
Handlebars.JavaScriptCompiler = function() {};

(function(Compiler, JavaScriptCompiler) {
  // the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype = {
    compiler: Compiler,

    disassemble: function() {
      var opcodes = this.opcodes, opcode, out = [], params, param;

      for (var i=0, l=opcodes.length; i<l; i++) {
        opcode = opcodes[i];

        if (opcode.opcode === 'DECLARE') {
          out.push("DECLARE " + opcode.name + "=" + opcode.value);
        } else {
          params = [];
          for (var j=0; j<opcode.args.length; j++) {
            param = opcode.args[j];
            if (typeof param === "string") {
              param = "\"" + param.replace("\n", "\\n") + "\"";
            }
            params.push(param);
          }
          out.push(opcode.opcode + " " + params.join(" "));
        }
      }

      return out.join("\n");
    },

    guid: 0,

    compile: function(program, options) {
      this.children = [];
      this.depths = {list: []};
      this.options = options;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.program(program);
    },

    accept: function(node) {
      return this[node.type](node);
    },

    program: function(program) {
      var statements = program.statements, statement;
      this.opcodes = [];

      for(var i=0, l=statements.length; i<l; i++) {
        statement = statements[i];
        this[statement.type](statement);
      }
      this.isSimple = l === 1;

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++, depth;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache,
          program = block.program,
          inverse = block.inverse;

      if (program) {
        program = this.compileProgram(program);
      }

      if (inverse) {
        inverse = this.compileProgram(inverse);
      }

      var type = this.classifyMustache(mustache);

      if (type === "helper") {
        this.helperMustache(mustache, program, inverse);
      } else if (type === "simple") {
        this.simpleMustache(mustache);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('pushLiteral', '{}');
        this.opcode('blockValue');
      } else {
        this.ambiguousMustache(mustache, program, inverse);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('pushLiteral', '{}');
        this.opcode('ambiguousBlockValue');
      }

      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, pair, val;

      this.opcode('push', '{}');

      for(var i=0, l=pairs.length; i<l; i++) {
        pair = pairs[i];
        val  = pair[1];

        this.accept(val);
        this.opcode('assignToHash', pair[0]);
      }
    },

    partial: function(partial) {
      var id = partial.id;
      this.usePartial = true;

      if(partial.context) {
        this.ID(partial.context);
      } else {
        this.opcode('push', 'depth0');
      }

      this.opcode('invokePartial', id.original);
      this.opcode('append');
    },

    content: function(content) {
      this.opcode('appendContent', content.string);
    },

    mustache: function(mustache) {
      var options = this.options;
      var type = this.classifyMustache(mustache);

      if (type === "simple") {
        this.simpleMustache(mustache);
      } else if (type === "helper") {
        this.helperMustache(mustache);
      } else {
        this.ambiguousMustache(mustache);
      }

      if(mustache.escaped && !options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ambiguousMustache: function(mustache, program, inverse) {
      var id = mustache.id, name = id.parts[0];

      this.opcode('getContext', id.depth);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      this.opcode('invokeAmbiguous', name);
    },

    simpleMustache: function(mustache, program, inverse) {
      var id = mustache.id;

      if (id.type === 'DATA') {
        this.DATA(id);
      } else if (id.parts.length) {
        this.ID(id);
      } else {
        // Simplified ID for `this`
        this.addDepth(id.depth);
        this.opcode('getContext', id.depth);
        this.opcode('pushContext');
      }

      this.opcode('resolvePossibleLambda');
    },

    helperMustache: function(mustache, program, inverse) {
      var params = this.setupFullMustacheParams(mustache, program, inverse),
          name = mustache.id.parts[0];

      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.knownHelpersOnly) {
        throw new Error("You specified knownHelpersOnly, but used the unknown helper " + name);
      } else {
        this.opcode('invokeHelper', params.length, name);
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);

      var name = id.parts[0];
      if (!name) {
        this.opcode('pushContext');
      } else {
        this.opcode('lookupOnContext', id.parts[0]);
      }

      for(var i=1, l=id.parts.length; i<l; i++) {
        this.opcode('lookup', id.parts[i]);
      }
    },

    DATA: function(data) {
      this.options.data = true;
      this.opcode('lookupData', data.id);
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    INTEGER: function(integer) {
      this.opcode('pushLiteral', integer.integer);
    },

    BOOLEAN: function(bool) {
      this.opcode('pushLiteral', bool.bool);
    },

    comment: function() {},

    // HELPERS
    opcode: function(name) {
      this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
    },

    declare: function(name, value) {
      this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
    },

    addDepth: function(depth) {
      if(isNaN(depth)) { throw new Error("EWOT"); }
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    classifyMustache: function(mustache) {
      var isHelper   = mustache.isHelper;
      var isEligible = mustache.eligibleHelper;
      var options    = this.options;

      // if ambiguous, we can possibly resolve the ambiguity now
      if (isEligible && !isHelper) {
        var name = mustache.id.parts[0];

        if (options.knownHelpers[name]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }

      if (isHelper) { return "helper"; }
      else if (isEligible) { return "ambiguous"; }
      else { return "simple"; }
    },

    pushParams: function(params) {
      var i = params.length, param;

      while(i--) {
        param = params[i];

        if(this.options.stringParams) {
          if(param.depth) {
            this.addDepth(param.depth);
          }

          this.opcode('getContext', param.depth || 0);
          this.opcode('pushStringParam', param.string);
        } else {
          this[param.type](param);
        }
      }
    },

    setupMustacheParams: function(mustache) {
      var params = mustache.params;
      this.pushParams(params);

      if(mustache.hash) {
        this.hash(mustache.hash);
      } else {
        this.opcode('pushLiteral', '{}');
      }

      return params;
    },

    // this will replace setupMustacheParams when we're done
    setupFullMustacheParams: function(mustache, program, inverse) {
      var params = mustache.params;
      this.pushParams(params);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      if(mustache.hash) {
        this.hash(mustache.hash);
      } else {
        this.opcode('pushLiteral', '{}');
      }

      return params;
    }
  };

  var Literal = function(value) {
    this.value = value;
  };

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name, type) {
      if (/^[0-9]+$/.test(name)) {
        return parent + "[" + name + "]";
      } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        return parent + "." + name;
      }
      else {
        return parent + "['" + name + "']";
      }
    },

    appendToBuffer: function(string) {
      if (this.environment.isSimple) {
        return "return " + string + ";";
      } else {
        return "buffer += " + string + ";";
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },

    namespace: "Handlebars",
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options || {};

      Handlebars.log(Handlebars.logger.DEBUG, this.environment.disassemble() + "\n\n");

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        aliases: { }
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.registers = { list: [] };
      this.compileStack = [];

      this.compileChildren(environment, options);

      var opcodes = environment.opcodes, opcode;

      this.i = 0;

      for(l=opcodes.length; this.i<l; this.i++) {
        opcode = opcodes[this.i];

        if(opcode.opcode === 'DECLARE') {
          this[opcode.name] = opcode.value;
        } else {
          this[opcode.opcode].apply(this, opcode.args);
        }
      }

      return this.createFunctionContext(asObject);
    },

    nextOpcode: function() {
      var opcodes = this.environment.opcodes, opcode = opcodes[this.i + 1];
      return opcodes[this.i + 1];
    },

    eat: function(opcode) {
      this.i = this.i + 1;
    },

    preamble: function() {
      var out = [];

      if (!this.isChild) {
        var namespace = this.namespace;
        var copies = "helpers = helpers || " + namespace + ".helpers;";
        if (this.environment.usePartial) { copies = copies + " partials = partials || " + namespace + ".partials;"; }
        if (this.options.data) { copies = copies + " data = data || {};"; }
        out.push(copies);
      } else {
        out.push('');
      }

      if (!this.environment.isSimple) {
        out.push(", buffer = " + this.initializeBuffer());
      } else {
        out.push("");
      }

      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = out;
    },

    createFunctionContext: function(asObject) {
      var locals = this.stackVars.concat(this.registers.list);

      if(locals.length > 0) {
        this.source[1] = this.source[1] + ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      if (!this.isChild) {
        var aliases = [];
        for (var alias in this.context.aliases) {
          this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
        }
      }

      if (this.source[1]) {
        this.source[1] = "var " + this.source[1].substring(2) + ";";
      }

      // Merge children
      if (!this.isChild) {
        this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
      }

      if (!this.environment.isSimple) {
        this.source.push("return buffer;");
      }

      var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

      for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
        params.push("depth" + this.environment.depths.list[i]);
      }

      if (asObject) {
        params.push(this.source.join("\n  "));

        return Function.apply(this, params);
      } else {
        var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + this.source.join("\n  ") + '}';
        Handlebars.log(Handlebars.logger.DEBUG, functionSource + "\n\n");
        return functionSource;
      }
    },

    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      this.replaceStack(function(current) {
        params.splice(1, 0, current);
        return current + " = blockHelperMissing.call(" + params.join(", ") + ")";
      });
    },

    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      var current = this.topStack();
      params.splice(1, 0, current);

      this.source.push("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
    },

    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function(content) {
      this.source.push(this.appendToBuffer(this.quotedString(content)));
    },

    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function() {
      var local = this.popStack();
      this.source.push("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
      if (this.environment.isSimple) {
        this.source.push("else { " + this.appendToBuffer("''") + " }");
      }
    },

    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function() {
      var opcode = this.nextOpcode(), extra = "";
      this.context.aliases.escapeExpression = 'this.escapeExpression';

      if(opcode && opcode.opcode === 'appendContent') {
        extra = " + " + this.quotedString(opcode.args[0]);
        this.eat(opcode);
      }

      this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + extra));
    },

    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function(depth) {
      if(this.lastContext !== depth) {
        this.lastContext = depth;
      }
    },

    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function(name) {
      this.pushStack(this.nameLookup('depth' + this.lastContext, name, 'context'));
    },

    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function() {
      this.pushStackLiteral('depth' + this.lastContext);
    },

    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function() {
      this.context.aliases.functionType = '"function"';

      this.replaceStack(function(current) {
        return "typeof " + current + " === functionType ? " + current + "() : " + current;
      });
    },

    // [lookup]
    //
    // On stack, before: value, ...
    // On stack, after: value[name], ...
    //
    // Replace the value on the stack with the result of looking
    // up `name` on `value`
    lookup: function(name) {
      this.replaceStack(function(current) {
        return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
      });
    },

    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data[id], ...
    //
    // Push the result of looking up `id` on the current data
    lookupData: function(id) {
      this.pushStack(this.nameLookup('data', id, 'data'));
    },

    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function(string) {
      this.pushStackLiteral('depth' + this.lastContext);
      this.pushString(string);
    },

    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function(string) {
      this.pushStackLiteral(this.quotedString(string));
    },

    // [push]
    //
    // On stack, before: ...
    // On stack, after: expr, ...
    //
    // Push an expression onto the stack
    push: function(expr) {
      this.pushStack(expr);
    },

    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function(value) {
      this.pushStackLiteral(value);
    },

    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },

    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function(paramSize, name) {
      this.context.aliases.helperMissing = 'helpers.helperMissing';

      var helper = this.lastHelper = this.setupHelper(paramSize, name);
      this.register('foundHelper', helper.name);

      this.pushStack("foundHelper ? foundHelper.call(" +
        helper.callParams + ") " + ": helperMissing.call(" +
        helper.helperMissingParams + ")");
    },

    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.pushStack(helper.name + ".call(" + helper.callParams + ")");
    },

    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function(name) {
      this.context.aliases.functionType = '"function"';

      this.pushStackLiteral('{}');
      var helper = this.setupHelper(0, name);

      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');
      this.register('foundHelper', helperName);

      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
      var nextStack = this.nextStack();

      this.source.push('if (foundHelper) { ' + nextStack + ' = foundHelper.call(' + helper.callParams + '); }');
      this.source.push('else { ' + nextStack + ' = ' + nonHelper + '; ' + nextStack + ' = typeof ' + nextStack + ' === functionType ? ' + nextStack + '() : ' + nextStack + '; }');
    },

    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function(name) {
      var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

      if (this.options.data) {
        params.push("data");
      }

      this.context.aliases.self = "this";
      this.pushStack("self.invokePartial(" + params.join(", ") + ");");
    },

    // [assignToHash]
    //
    // On stack, before: value, hash, ...
    // On stack, after: hash, ...
    //
    // Pops a value and hash off the stack, assigns `hash[key] = value`
    // and pushes the hash back onto the stack.
    assignToHash: function(key) {
      var value = this.popStack();
      var hash = this.topStack();

      this.source.push(hash + "['" + key + "'] = " + value + ";");
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
        var index = this.context.programs.length;
        child.index = index;
        child.name = 'program' + index;
        this.context.programs[index] = compiler.compile(child, options, this.context);
      }
    },

    programExpression: function(guid) {
      this.context.aliases.self = "this";

      if(guid == null) {
        return "self.noop";
      }

      var child = this.environment.children[guid],
          depths = child.depths.list, depth;

      var programParams = [child.index, child.name, "data"];

      for(var i=0, l = depths.length; i<l; i++) {
        depth = depths[i];

        if(depth === 1) { programParams.push("depth0"); }
        else { programParams.push("depth" + (depth - 1)); }
      }

      if(depths.length === 0) {
        return "self.program(" + programParams.join(", ") + ")";
      } else {
        programParams.shift();
        return "self.programWithDepth(" + programParams.join(", ") + ")";
      }
    },

    register: function(name, val) {
      this.useRegister(name);
      this.source.push(name + " = " + val + ";");
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    pushStackLiteral: function(item) {
      this.compileStack.push(new Literal(item));
      return item;
    },

    pushStack: function(item) {
      this.source.push(this.incrStack() + " = " + item + ";");
      this.compileStack.push("stack" + this.stackSlot);
      return "stack" + this.stackSlot;
    },

    replaceStack: function(callback) {
      var item = callback.call(this, this.topStack());

      this.source.push(this.topStack() + " = " + item + ";");
      return "stack" + this.stackSlot;
    },

    nextStack: function(skipCompileStack) {
      var name = this.incrStack();
      this.compileStack.push("stack" + this.stackSlot);
      return name;
    },

    incrStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return "stack" + this.stackSlot;
    },

    popStack: function() {
      var item = this.compileStack.pop();

      if (item instanceof Literal) {
        return item.value;
      } else {
        this.stackSlot--;
        return item;
      }
    },

    topStack: function() {
      var item = this.compileStack[this.compileStack.length - 1];

      if (item instanceof Literal) {
        return item.value;
      } else {
        return item;
      }
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r') + '"';
    },

    setupHelper: function(paramSize, name) {
      var params = [];
      this.setupParams(paramSize, params);
      var foundHelper = this.nameLookup('helpers', name, 'helper');

      return {
        params: params,
        name: foundHelper,
        callParams: ["depth0"].concat(params).join(", "),
        helperMissingParams: ["depth0", this.quotedString(name)].concat(params).join(", ")
      };
    },

    // the params and contexts arguments are passed in arrays
    // to fill in
    setupParams: function(paramSize, params) {
      var options = [], contexts = [], param, inverse, program;

      options.push("hash:" + this.popStack());

      inverse = this.popStack();
      program = this.popStack();

      // Avoid setting fn and inverse if neither are set. This allows
      // helpers to do a check for `if (options.fn)`
      if (program || inverse) {
        if (!program) {
          this.context.aliases.self = "this";
          program = "self.noop";
        }

        if (!inverse) {
         this.context.aliases.self = "this";
          inverse = "self.noop";
        }

        options.push("inverse:" + inverse);
        options.push("fn:" + program);
      }

      for(var i=0; i<paramSize; i++) {
        param = this.popStack();
        params.push(param);

        if(this.options.stringParams) {
          contexts.push(this.popStack());
        }
      }

      if (this.options.stringParams) {
        options.push("contexts:[" + contexts.join(",") + "]");
      }

      if(this.options.data) {
        options.push("data:data");
      }

      params.push("{" + options.join(",") + "}");
      return params.join(", ");
    }
  };

  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(name)) {
      return true;
    }
    return false;
  };

})(Handlebars.Compiler, Handlebars.JavaScriptCompiler);

Handlebars.precompile = function(string, options) {
  options = options || {};

  var ast = Handlebars.parse(string);
  var environment = new Handlebars.Compiler().compile(ast, options);
  return new Handlebars.JavaScriptCompiler().compile(environment, options);
};

Handlebars.compile = function(string, options) {
  options = options || {};

  var compiled;
  function compile() {
    var ast = Handlebars.parse(string);
    var environment = new Handlebars.Compiler().compile(ast, options);
    var templateSpec = new Handlebars.JavaScriptCompiler().compile(environment, options, undefined, true);
    return Handlebars.template(templateSpec);
  }

  // Template is only compiled on first use and cached after that point.
  return function(context, options) {
    if (!compiled) {
      compiled = compile();
    }
    return compiled.call(this, context, options);
  };
};
;
// lib/handlebars/runtime.js
Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    var container = {
      escapeExpression: Handlebars.Utils.escapeExpression,
      invokePartial: Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          return Handlebars.VM.program(fn, data);
        } else if(programWrapper) {
          return programWrapper;
        } else {
          programWrapper = this.programs[i] = Handlebars.VM.program(fn);
          return programWrapper;
        }
      },
      programWithDepth: Handlebars.VM.programWithDepth,
      noop: Handlebars.VM.noop
    };

    return function(context, options) {
      options = options || {};
      return templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);
    };
  },

  programWithDepth: function(fn, data, $depth) {
    var args = Array.prototype.slice.call(arguments, 2);

    return function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
  },
  program: function(fn, data) {
    return function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
  },
  noop: function() { return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    var options = { helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    } else if (!Handlebars.compile) {
      throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      partials[name] = Handlebars.compile(partial, {data: data !== undefined});
      return partials[name](context, options);
    }
  }
};

Handlebars.template = Handlebars.VM.template;
;
;(function() {

  window.KickerApp = {
    Models: {},
    Collections: {},
    Views: {},
    init: function() {
      KickerApp.router = new KickerApp.Router;
      return Backbone.history.start({
        pushState: true
      });
    }
  };

  $(document).ready(function() {
    $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + KickerApp.config.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
    return KickerApp.init();
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router'], function(Backbone, $, AppRouter) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + '';
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  KickerApp.config = {
    root: '/'
  };

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router'], function(Backbone, $, AppRouter) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + '';
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  AppConfig.config = {
    root: '/'
  };

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router'], function(Backbone, $, AppRouter) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + '';
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  AppConfig.config({
    root: '/'
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router'], function(Backbone, $, AppRouter) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + '';
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  AppConfig({
    root: '/'
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + '';
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  AppConfig({
    root: '/'
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  AppConfig({
    root: '/'
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  ({
    AppConfig: {
      root: '/'
    }
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {
  var AppConfig;

  AppConfig = {
    root: '/'
  };

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {
  var AppConfig;

  AppConfig = {
    root: '/'
  };

  modules["export"] = AppConfig;

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(modules) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return modules["export"] = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['modules'], function(modules) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return modules["export"] = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Home = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('home'));
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {

  define(['backbone', 'modules', 'views/base'], function(Backbone, modules, BaseView) {
    var HomeView;
    return HomeView = BaseView.extend({
      initialize: function() {
        return this;
      },
      render: function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      }
    });
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'modules', 'views/base'], function(Backbone, modules, BaseView) {
    var HomeView;
    return HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'modules', 'handlebars', 'views/base'], function(Backbone, modules, Handlebars, BaseView) {
    var HomeView;
    return HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module'], function(Backbone, $, module) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'modules', 'handlebars', 'views/base'], function(Backbone, modules, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home'], function(Backbone, $, module, HomeView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = KickerApp.Views.home = new KickerApp.Views.Home();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'modules', 'handlebars', 'views/base'], function(Backbone, modules, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home'], function(Backbone, $, module, HomeView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.Base = Backbone.View.extend({
    remove: function() {
      this.undelegateEvents();
      this.$el.empty();
      return this;
    }
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'modules', 'handlebars', 'views/base'], function(Backbone, modules, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home'], function(Backbone, $, module, HomeView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'modules'], function(Backbone, modules) {
    var BaseView;
    return BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'modules', 'handlebars', 'views/base'], function(Backbone, modules, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home'], function(Backbone, $, module, HomeView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'modules'], function(Backbone, modules) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return modules["export"] = BaseView;
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'modules', 'handlebars', 'views/base'], function(Backbone, modules, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home'], function(Backbone, $, module, HomeView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return modules["export"] = BaseView;
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'modules', 'handlebars', 'views/base'], function(Backbone, modules, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home'], function(Backbone, $, module, HomeView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return modules["export"] = BaseView;
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home'], function(Backbone, $, module, HomeView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home'], function(Backbone, $, module, HomeView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home'], function(Backbone, $, module, HomeView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  Handlebars.getTemplate = function(name) {
    if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
      $.ajax({
        url: '/public/templates/' + name + '.handlebars',
        success: function(data) {
          if (!(Handlebars.templates != null)) {
            Handlebars.templates = {};
          }
          return Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString("<button>I agree.</button>");
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home'], function(Backbone, $, module, HomeView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars'], function($, Handlebars) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: '/public/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home'], function(Backbone, $, module, HomeView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home'], function(Backbone, $, module, HomeView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game', 'views/user'], function(Backbone, $, module, HomeView, NewGameView, ActiveGameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game', 'views/user'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {

  KickerApp.Views.NewGame = KickerApp.Views.Base.extend({
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/new'));
      return this;
    }
  });

  KickerApp.Views.ActiveGame = KickerApp.Views.Base.extend({
    time_start: 0,
    time_end: 0,
    user_view: null,
    initialize: function() {
      this.time_start = new Date();
      return this.user_view = new KickerApp.Views.GameUser({
        model: new KickerApp.Models.User()
      });
    },
    render: function() {
      this.$el.html(Handlebars.getTemplate('game/active'));
      console.log(this.user_view.render().$el.html());
      return this;
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base'], function(Backbone, $, module, Handlebars, BaseView) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    return ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new KickerApp.Views.GameUser({
          model: new KickerApp.Models.User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        console.log(this.user_view.render().$el.html());
        return this;
      };

      return ActiveGameView;

    })(BaseView);
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base', 'views/user'], function(Backbone, $, module, Handlebars, BaseView, GameUserView) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    return ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new GameUserView({
          model: new User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        console.log(this.user_view.render().$el.html());
        return this;
      };

      return ActiveGameView;

    })(BaseView);
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {

  KickerApp.Views.GameUser = KickerApp.Views.Base.extend({
    initialize: function() {
      return this;
    },
    render: function() {
      var tpl;
      tpl = Handlebars.getTemplate('game/partials/user');
      console.log(tpl(this.options.model.toJSON()));
      this.$el.html(tpl(this.options.model));
      this.$el.html(tpl(this.options.model));
      j;

      this;

      return $(this.el).html(Handlebars.getTemplate('naam'));
    }
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base', 'views/user'], function(Backbone, $, module, Handlebars, BaseView, GameUserView) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    return ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new GameUserView({
          model: new User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        console.log(this.user_view.render().$el.html());
        return this;
      };

      return ActiveGameView;

    })(BaseView);
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base'], function(Backbone, $, module, Handlebars, BaseView) {
    var GameUserView;
    GameUserView = (function(_super) {

      __extends(GameUserView, _super);

      function GameUserView() {
        return GameUserView.__super__.constructor.apply(this, arguments);
      }

      GameUserView.prototype.initialize = function() {
        return this;
      };

      GameUserView.prototype.render = function() {
        var tpl;
        tpl = Handlebars.getTemplate('game/partials/user');
        console.log(tpl(this.options.model.toJSON()));
        this.$el.html(tpl(this.options.model));
        this.$el.html(tpl(this.options.model));
        this;

        return $(this.el).html(Handlebars.getTemplate('naam'));
      };

      return GameUserView;

    })(BaseView);
    return module.exports = GameUserView;
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base', 'views/user'], function(Backbone, $, module, Handlebars, BaseView, GameUserView) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new GameUserView({
          model: new User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        console.log(this.user_view.render().$el.html());
        return this;
      };

      return ActiveGameView;

    })(BaseView);
    return module.exports = {
      NewGameView: NewGameView,
      ActiveGameView: ActiveGameView
    };
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base'], function(Backbone, $, module, Handlebars, BaseView) {
    var GameUserView;
    GameUserView = (function(_super) {

      __extends(GameUserView, _super);

      function GameUserView() {
        return GameUserView.__super__.constructor.apply(this, arguments);
      }

      GameUserView.prototype.initialize = function() {
        return this;
      };

      GameUserView.prototype.render = function() {
        var tpl;
        tpl = Handlebars.getTemplate('game/partials/user');
        console.log(tpl(this.options.model.toJSON()));
        this.$el.html(tpl(this.options.model));
        this.$el.html(tpl(this.options.model));
        this;

        return $(this.el).html(Handlebars.getTemplate('naam'));
      };

      return GameUserView;

    })(BaseView);
    return module.exports = GameUserView;
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new GameView.NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new GameView.ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {

  KickerApp.Models.User = Backbone.Model.extend({
    defaults: {
      username: 'JeroenB',
      goals: 1
    }
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base', 'views/user'], function(Backbone, $, module, Handlebars, BaseView, GameUserView) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new GameUserView({
          model: new User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        console.log(this.user_view.render().$el.html());
        return this;
      };

      return ActiveGameView;

    })(BaseView);
    return module.exports = {
      NewGameView: NewGameView,
      ActiveGameView: ActiveGameView
    };
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base'], function(Backbone, $, module, Handlebars, BaseView) {
    var GameUserView;
    GameUserView = (function(_super) {

      __extends(GameUserView, _super);

      function GameUserView() {
        return GameUserView.__super__.constructor.apply(this, arguments);
      }

      GameUserView.prototype.initialize = function() {
        return this;
      };

      GameUserView.prototype.render = function() {
        var tpl;
        tpl = Handlebars.getTemplate('game/partials/user');
        console.log(tpl(this.options.model.toJSON()));
        this.$el.html(tpl(this.options.model));
        this.$el.html(tpl(this.options.model));
        this;

        return $(this.el).html(Handlebars.getTemplate('naam'));
      };

      return GameUserView;

    })(BaseView);
    return module.exports = GameUserView;
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new GameView.NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new GameView.ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var User;
    return User = (function(_super) {

      __extends(User, _super);

      function User() {
        return User.__super__.constructor.apply(this, arguments);
      }

      User.prototype.defaults = {
        username: 'JeroenB',
        goals: 1
      };

      return User;

    })(Backbone.Model);
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base', 'views/user'], function(Backbone, $, module, Handlebars, BaseView, GameUserView) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new GameUserView({
          model: new User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        console.log(this.user_view.render().$el.html());
        return this;
      };

      return ActiveGameView;

    })(BaseView);
    return module.exports = {
      NewGameView: NewGameView,
      ActiveGameView: ActiveGameView
    };
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base'], function(Backbone, $, module, Handlebars, BaseView) {
    var GameUserView;
    GameUserView = (function(_super) {

      __extends(GameUserView, _super);

      function GameUserView() {
        return GameUserView.__super__.constructor.apply(this, arguments);
      }

      GameUserView.prototype.initialize = function() {
        return this;
      };

      GameUserView.prototype.render = function() {
        var tpl;
        tpl = Handlebars.getTemplate('game/partials/user');
        console.log(tpl(this.options.model.toJSON()));
        this.$el.html(tpl(this.options.model));
        this.$el.html(tpl(this.options.model));
        this;

        return $(this.el).html(Handlebars.getTemplate('naam'));
      };

      return GameUserView;

    })(BaseView);
    return module.exports = GameUserView;
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new GameView.NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new GameView.ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var User;
    User = (function(_super) {

      __extends(User, _super);

      function User() {
        return User.__super__.constructor.apply(this, arguments);
      }

      User.prototype.defaults = {
        username: 'JeroenB',
        goals: 1
      };

      return User;

    })(Backbone.Model);
    return module["export"] = User;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base', 'views/user'], function(Backbone, $, module, Handlebars, BaseView, GameUserView) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new GameUserView({
          model: new User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        console.log(this.user_view.render().$el.html());
        return this;
      };

      return ActiveGameView;

    })(BaseView);
    return module.exports = {
      NewGameView: NewGameView,
      ActiveGameView: ActiveGameView
    };
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base'], function(Backbone, $, module, Handlebars, BaseView) {
    var GameUserView;
    GameUserView = (function(_super) {

      __extends(GameUserView, _super);

      function GameUserView() {
        return GameUserView.__super__.constructor.apply(this, arguments);
      }

      GameUserView.prototype.initialize = function() {
        return this;
      };

      GameUserView.prototype.render = function() {
        var tpl;
        tpl = Handlebars.getTemplate('game/partials/user');
        console.log(tpl(this.options.model.toJSON()));
        this.$el.html(tpl(this.options.model));
        this.$el.html(tpl(this.options.model));
        this;

        return $(this.el).html(Handlebars.getTemplate('naam'));
      };

      return GameUserView;

    })(BaseView);
    return module.exports = GameUserView;
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new GameView.NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new GameView.ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var User;
    User = (function(_super) {

      __extends(User, _super);

      function User() {
        return User.__super__.constructor.apply(this, arguments);
      }

      User.prototype.defaults = {
        username: 'JeroenB',
        goals: 1
      };

      return User;

    })(Backbone.Model);
    return module.exports = User;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base', 'views/user'], function(Backbone, $, module, Handlebars, BaseView, GameUserView) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new GameUserView({
          model: new User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        console.log(this.user_view.render().$el.html());
        return this;
      };

      return ActiveGameView;

    })(BaseView);
    return module.exports = {
      NewGameView: NewGameView,
      ActiveGameView: ActiveGameView
    };
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base'], function(Backbone, $, module, Handlebars, BaseView) {
    var GameUserView;
    GameUserView = (function(_super) {

      __extends(GameUserView, _super);

      function GameUserView() {
        return GameUserView.__super__.constructor.apply(this, arguments);
      }

      GameUserView.prototype.initialize = function() {
        return this;
      };

      GameUserView.prototype.render = function() {
        var tpl;
        tpl = Handlebars.getTemplate('game/partials/user');
        console.log(tpl(this.options.model.toJSON()));
        this.$el.html(tpl(this.options.model));
        this.$el.html(tpl(this.options.model));
        this;

        return $(this.el).html(Handlebars.getTemplate('naam'));
      };

      return GameUserView;

    })(BaseView);
    return module.exports = GameUserView;
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new GameView.NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new GameView.ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var User;
    User = (function(_super) {

      __extends(User, _super);

      function User() {
        return User.__super__.constructor.apply(this, arguments);
      }

      User.prototype.defaults = {
        username: 'JeroenB',
        goals: 1
      };

      return User;

    })(Backbone.Model);
    return module.exports = User;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base', 'views/user', 'model/user'], function(Backbone, $, module, Handlebars, BaseView, GameUserView, User) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new GameUserView({
          model: new User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        console.log(this.user_view.render().$el.html());
        return this;
      };

      return ActiveGameView;

    })(BaseView);
    return module.exports = {
      NewGameView: NewGameView,
      ActiveGameView: ActiveGameView
    };
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base'], function(Backbone, $, module, Handlebars, BaseView) {
    var GameUserView;
    GameUserView = (function(_super) {

      __extends(GameUserView, _super);

      function GameUserView() {
        return GameUserView.__super__.constructor.apply(this, arguments);
      }

      GameUserView.prototype.initialize = function() {
        return this;
      };

      GameUserView.prototype.render = function() {
        var tpl;
        tpl = Handlebars.getTemplate('game/partials/user');
        console.log(tpl(this.options.model.toJSON()));
        this.$el.html(tpl(this.options.model));
        this.$el.html(tpl(this.options.model));
        this;

        return $(this.el).html(Handlebars.getTemplate('naam'));
      };

      return GameUserView;

    })(BaseView);
    return module.exports = GameUserView;
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new GameView.NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new GameView.ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var User;
    User = (function(_super) {

      __extends(User, _super);

      function User() {
        return User.__super__.constructor.apply(this, arguments);
      }

      User.prototype.defaults = {
        username: 'JeroenB',
        goals: 1
      };

      return User;

    })(Backbone.Model);
    return module.exports = User;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base', 'views/user', 'models/user'], function(Backbone, $, module, Handlebars, BaseView, GameUserView, User) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new GameUserView({
          model: new User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        console.log(this.user_view.render().$el.html());
        return this;
      };

      return ActiveGameView;

    })(BaseView);
    return module.exports = {
      NewGameView: NewGameView,
      ActiveGameView: ActiveGameView
    };
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base'], function(Backbone, $, module, Handlebars, BaseView) {
    var GameUserView;
    GameUserView = (function(_super) {

      __extends(GameUserView, _super);

      function GameUserView() {
        return GameUserView.__super__.constructor.apply(this, arguments);
      }

      GameUserView.prototype.initialize = function() {
        return this;
      };

      GameUserView.prototype.render = function() {
        var tpl;
        tpl = Handlebars.getTemplate('game/partials/user');
        console.log(tpl(this.options.model.toJSON()));
        this.$el.html(tpl(this.options.model));
        this.$el.html(tpl(this.options.model));
        this;

        return $(this.el).html(Handlebars.getTemplate('naam'));
      };

      return GameUserView;

    })(BaseView);
    return module.exports = GameUserView;
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new GameView.NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new GameView.ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var User;
    User = (function(_super) {

      __extends(User, _super);

      function User() {
        return User.__super__.constructor.apply(this, arguments);
      }

      User.prototype.defaults = {
        username: 'JeroenB',
        goals: 1
      };

      return User;

    })(Backbone.Model);
    return module.exports = User;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base', 'views/user', 'models/user'], function(Backbone, $, module, Handlebars, BaseView, GameUserView, User) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new GameUserView({
          model: new User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        return this;
      };

      return ActiveGameView;

    })(BaseView);
    return module.exports = {
      NewGameView: NewGameView,
      ActiveGameView: ActiveGameView
    };
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base'], function(Backbone, $, module, Handlebars, BaseView) {
    var GameUserView;
    GameUserView = (function(_super) {

      __extends(GameUserView, _super);

      function GameUserView() {
        return GameUserView.__super__.constructor.apply(this, arguments);
      }

      GameUserView.prototype.initialize = function() {
        return this;
      };

      GameUserView.prototype.render = function() {
        var tpl;
        tpl = Handlebars.getTemplate('game/partials/user');
        console.log(tpl(this.options.model.toJSON()));
        this.$el.html(tpl(this.options.model));
        this.$el.html(tpl(this.options.model));
        this;

        return $(this.el).html(Handlebars.getTemplate('naam'));
      };

      return GameUserView;

    })(BaseView);
    return module.exports = GameUserView;
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new GameView.NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new GameView.ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var User;
    User = (function(_super) {

      __extends(User, _super);

      function User() {
        return User.__super__.constructor.apply(this, arguments);
      }

      User.prototype.defaults = {
        username: 'JeroenB',
        goals: 1
      };

      return User;

    })(Backbone.Model);
    return module.exports = User;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base', 'views/user', 'models/user'], function(Backbone, $, module, Handlebars, BaseView, GameUserView, User) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new GameUserView({
          model: new User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        return this;
      };

      return ActiveGameView;

    })(BaseView);
    return module.exports = {
      NewGameView: NewGameView,
      ActiveGameView: ActiveGameView
    };
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base'], function(Backbone, $, module, Handlebars, BaseView) {
    var GameUserView;
    GameUserView = (function(_super) {

      __extends(GameUserView, _super);

      function GameUserView() {
        return GameUserView.__super__.constructor.apply(this, arguments);
      }

      GameUserView.prototype.initialize = function() {
        return this;
      };

      GameUserView.prototype.render = function() {
        var tpl;
        tpl = Handlebars.getTemplate('game/partials/user');
        console.log(tpl(this.options.model.toJSON()));
        this.$el.html(tpl(this.options.model));
        this.$el.html(tpl(this.options.model));
        return this;
      };

      return GameUserView;

    })(BaseView);
    return module.exports = GameUserView;
  });

}).call(this);
;(function() {

  require.config({
    baseUrl: "/assets/js",
    paths: {
      jquery: 'vendor/jquery',
      lodash: 'vendor/lodash',
      backbone: 'vendor/backbone',
      handlebars: 'vendor/handlebars'
    },
    shim: {
      handlebars: {
        exports: "Handlebars"
      },
      lodash: {
        exports: "_"
      },
      backbone: {
        deps: ['lodash', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['backbone', 'jquery', 'router', 'config', 'helpers/template-loader'], function(Backbone, $, AppRouter, AppConfig) {
    new AppRouter;
    Backbone.history.start({
      pushState: true
    });
    return $(document).on("click", "a[href]:not([data-bypass])", function(e) {
      var href, root;
      href = {
        prop: $(this).prop("href"),
        attr: $(this).attr("href")
      };
      root = location.protocol + "//" + location.host + AppConfig.root;
      if (href.prop.slice(0, root.length) === root) {
        e.preventDefault();
        return Backbone.history.navigate(href.attr, true);
      }
    });
  });

}).call(this);
;(function() {

  define(['module'], function(module) {
    var AppConfig;
    AppConfig = {
      root: '/'
    };
    return module.exports = AppConfig;
  });

}).call(this);
;(function() {

  define(['backbone', 'jquery', 'module', 'views/home', 'views/game'], function(Backbone, $, module, HomeView, GameView) {
    var AppRouter;
    AppRouter = Backbone.Router.extend({
      current_view: null,
      routes: {
        '': 'home',
        'game/new': 'new_game',
        'game/active': 'active_game'
      },
      initialize: function() {
        return this.bind('all', this.on_route, this);
      },
      on_route: function(ref) {
        if (!!this.current_view) {
          this.current_view.remove();
          return this.current_view = null;
        }
      },
      home: function() {
        console.log('home');
        this.current_view = new HomeView();
        return this.show(this.current_view);
      },
      new_game: function() {
        this.current_view = new GameView.NewGameView();
        return this.show(this.current_view);
      },
      active_game: function() {
        this.current_view = new GameView.ActiveGameView();
        return this.show(this.current_view);
      },
      show: function(view) {
        return $('#app').html(view.render().$el.html());
      }
    });
    return module.exports = AppRouter;
  });

}).call(this);
;(function() {

  define(['jquery', 'handlebars', 'config'], function($, Handlebars, AppConfig) {
    Handlebars.getTemplate = function(name) {
      if (!(Handlebars.templates != null) || !(Handlebars.templates[name] != null)) {
        $.ajax({
          url: AppConfig.root + 'assets/templates/' + name + '.handlebars',
          success: function(data) {
            if (!(Handlebars.templates != null)) {
              Handlebars.templates = {};
            }
            return Handlebars.templates[name] = Handlebars.compile(data);
          },
          async: false
        });
      }
      return Handlebars.templates[name];
    };
    return Handlebars.registerHelper('agree_button', function() {
      return new Handlebars.SafeString("<button>I agree.</button>");
    });
  });

}).call(this);
;(function() {



}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var User;
    User = (function(_super) {

      __extends(User, _super);

      function User() {
        return User.__super__.constructor.apply(this, arguments);
      }

      User.prototype.defaults = {
        username: 'JeroenB',
        goals: 1
      };

      return User;

    })(Backbone.Model);
    return module.exports = User;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module'], function(Backbone, module) {
    var BaseView;
    BaseView = (function(_super) {

      __extends(BaseView, _super);

      function BaseView() {
        return BaseView.__super__.constructor.apply(this, arguments);
      }

      BaseView.prototype.remove = function() {
        this.undelegateEvents();
        this.$el.empty();
        return this;
      };

      return BaseView;

    })(Backbone.View);
    return module.exports = BaseView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base', 'views/user', 'models/user'], function(Backbone, $, module, Handlebars, BaseView, GameUserView, User) {
    var ActiveGameView, NewGameView;
    NewGameView = (function(_super) {

      __extends(NewGameView, _super);

      function NewGameView() {
        return NewGameView.__super__.constructor.apply(this, arguments);
      }

      NewGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/new'));
        return this;
      };

      return NewGameView;

    })(BaseView);
    ActiveGameView = (function(_super) {

      __extends(ActiveGameView, _super);

      function ActiveGameView() {
        return ActiveGameView.__super__.constructor.apply(this, arguments);
      }

      ActiveGameView.prototype.time_start = 0;

      ActiveGameView.prototype.time_end = 0;

      ActiveGameView.prototype.user_view = null;

      ActiveGameView.prototype.initialize = function() {
        this.time_start = new Date();
        return this.user_view = new GameUserView({
          model: new User()
        });
      };

      ActiveGameView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('game/active'));
        return this;
      };

      return ActiveGameView;

    })(BaseView);
    return module.exports = {
      NewGameView: NewGameView,
      ActiveGameView: ActiveGameView
    };
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'module', 'handlebars', 'views/base'], function(Backbone, module, Handlebars, BaseView) {
    var HomeView;
    HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        return HomeView.__super__.constructor.apply(this, arguments);
      }

      HomeView.prototype.initialize = function() {
        return this;
      };

      HomeView.prototype.render = function() {
        this.$el.html(Handlebars.getTemplate('home'));
        return this;
      };

      return HomeView;

    })(BaseView);
    return module.exports = HomeView;
  });

}).call(this);
;(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'jquery', 'module', 'handlebars', 'views/base'], function(Backbone, $, module, Handlebars, BaseView) {
    var GameUserView;
    GameUserView = (function(_super) {

      __extends(GameUserView, _super);

      function GameUserView() {
        return GameUserView.__super__.constructor.apply(this, arguments);
      }

      GameUserView.prototype.initialize = function() {
        return this;
      };

      GameUserView.prototype.render = function() {
        var tpl;
        tpl = Handlebars.getTemplate('game/partials/user');
        console.log(tpl(this.options.model.toJSON()));
        this.$el.html(tpl(this.options.model));
        this.$el.html(tpl(this.options.model));
        return this;
      };

      return GameUserView;

    })(BaseView);
    return module.exports = GameUserView;
  });

}).call(this);
