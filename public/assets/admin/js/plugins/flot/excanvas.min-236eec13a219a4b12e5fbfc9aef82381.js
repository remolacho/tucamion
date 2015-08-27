document.createElement("canvas").getContext||!function(){function t(){return this.context_||(this.context_=new E(this))}function e(t,e){var i=X.call(arguments,2);return function(){return t.apply(e,i.concat(X.call(arguments)))}}function i(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function r(t){if(t.namespaces.g_vml_||t.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),t.namespaces.g_o_||t.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML"),!t.styleSheets.ex_canvas_){var e=t.createStyleSheet();e.owningElement.id="ex_canvas_",e.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"}}function n(t){var e=t.srcElement;switch(t.propertyName){case"width":e.getContext().clearRect(),e.style.width=e.attributes.width.nodeValue+"px",e.firstChild.style.width=e.clientWidth+"px";break;case"height":e.getContext().clearRect(),e.style.height=e.attributes.height.nodeValue+"px",e.firstChild.style.height=e.clientHeight+"px"}}function a(t){var e=t.srcElement;e.firstChild&&(e.firstChild.style.width=e.clientWidth+"px",e.firstChild.style.height=e.clientHeight+"px")}function o(){return[[1,0,0],[0,1,0],[0,0,1]]}function c(t,e){for(var i=o(),r=0;3>r;r++)for(var n=0;3>n;n++){for(var a=0,s=0;3>s;s++)a+=t[r][s]*e[s][n];i[r][n]=a}return i}function u(t,e){e.fillStyle=t.fillStyle,e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.shadowBlur=t.shadowBlur,e.shadowColor=t.shadowColor,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY,e.strokeStyle=t.strokeStyle,e.globalAlpha=t.globalAlpha,e.font=t.font,e.textAlign=t.textAlign,e.textBaseline=t.textBaseline,e.arcScaleX_=t.arcScaleX_,e.arcScaleY_=t.arcScaleY_,e.lineScale_=t.lineScale_}function d(t){var e=t.indexOf("(",3),i=t.indexOf(")",e+1),r=t.substring(e+1,i).split(",");return 4==r.length&&"a"==t.substr(3,1)?alpha=Number(r[3]):r[3]=1,r}function _(t){return parseFloat(t)/100}function g(t,e,i){return Math.min(i,Math.max(e,t))}function f(t){var e,i,r;if(h=parseFloat(t[0])/360%360,0>h&&h++,s=g(_(t[1]),0,1),l=g(_(t[2]),0,1),0==s)e=i=r=l;else{var n=.5>l?l*(1+s):l+s-l*s,a=2*l-n;e=p(a,n,h+1/3),i=p(a,n,h),r=p(a,n,h-1/3)}return"#"+q[Math.floor(255*e)]+q[Math.floor(255*i)]+q[Math.floor(255*r)]}function p(t,e,i){return 0>i&&i++,i>1&&i--,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+(e-t)*(2/3-i)*6:t}function m(t){var e,i=1;if(t=String(t),"#"==t.charAt(0))e=t;else if(/^rgb/.test(t)){for(var r,n=d(t),e="#",a=0;3>a;a++)r=-1!=n[a].indexOf("%")?Math.floor(255*_(n[a])):Number(n[a]),e+=q[g(r,0,255)];i=n[3]}else if(/^hsl/.test(t)){var n=d(t);e=f(n),i=n[3]}else e=j[t]||t;return{color:e,alpha:i}}function y(t){if(U[t])return U[t];var e=document.createElement("div"),i=e.style;try{i.font=t}catch(r){}return U[t]={style:i.fontStyle||G.style,variant:i.fontVariant||G.variant,weight:i.fontWeight||G.weight,size:i.fontSize||G.size,family:i.fontFamily||G.family}}function F(t,e){var i={};for(var r in t)i[r]=t[r];var n=parseFloat(e.currentStyle.fontSize),a=parseFloat(t.size);return i.size="number"==typeof t.size?t.size:-1!=t.size.indexOf("px")?a:-1!=t.size.indexOf("em")?n*a:-1!=t.size.indexOf("%")?n/100*a:-1!=t.size.indexOf("pt")?a/.75:n,i.size*=.981,i}function x(t){return t.style+" "+t.variant+" "+t.weight+" "+t.size+"px "+t.family}function v(t){switch(t){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function E(t){this.m_=o(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=1*L,this.globalAlpha=1,this.font="10px sans-serif",this.textAlign="left",this.textBaseline="alphabetic",this.canvas=t;var e=t.ownerDocument.createElement("div");e.style.width=t.clientWidth+"px",e.style.height=t.clientHeight+"px",e.style.overflow="hidden",e.style.position="absolute",t.appendChild(e),this.element_=e,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1}function C(t,e,i,r){t.currentPath_.push({type:"bezierCurveTo",cp1x:e.x,cp1y:e.y,cp2x:i.x,cp2y:i.y,x:r.x,y:r.y}),t.currentX_=r.x,t.currentY_=r.y}function A(t,e){var i=m(t.strokeStyle),r=i.color,n=i.alpha*t.globalAlpha,a=t.lineScale_*t.lineWidth;1>a&&(n*=a),e.push("<g_vml_:stroke",' opacity="',n,'"',' joinstyle="',t.lineJoin,'"',' miterlimit="',t.miterLimit,'"',' endcap="',v(t.lineCap),'"',' weight="',a,'px"',' color="',r,'" />')}function w(t,e,i,r){var n=t.fillStyle,a=t.arcScaleX_,s=t.arcScaleY_,o=r.x-i.x,l=r.y-i.y;if(n instanceof S){var h=0,c={x:0,y:0},u=0,d=1;if("gradient"==n.type_){var _=n.x0_/a,g=n.y0_/s,f=n.x1_/a,p=n.y1_/s,y=t.getCoords_(_,g),F=t.getCoords_(f,p),x=F.x-y.x,v=F.y-y.y;h=180*Math.atan2(x,v)/Math.PI,0>h&&(h+=360),1e-6>h&&(h=0)}else{var y=t.getCoords_(n.x0_,n.y0_);c={x:(y.x-i.x)/o,y:(y.y-i.y)/l},o/=a*L,l/=s*L;var E=M.max(o,l);u=2*n.r0_/E,d=2*n.r1_/E-u}var C=n.colors_;C.sort(function(t,e){return t.offset-e.offset});for(var A=C.length,w=C[0].color,b=C[A-1].color,D=C[0].alpha*t.globalAlpha,T=C[A-1].alpha*t.globalAlpha,R=[],B=0;A>B;B++){var I=C[B];R.push(I.offset*d+u+" "+I.color)}e.push('<g_vml_:fill type="',n.type_,'"',' method="none" focus="100%"',' color="',w,'"',' color2="',b,'"',' colors="',R.join(","),'"',' opacity="',T,'"',' g_o_:opacity2="',D,'"',' angle="',h,'"',' focusposition="',c.x,",",c.y,'" />')}else if(n instanceof k){if(o&&l){var P=-i.x,O=-i.y;e.push("<g_vml_:fill",' position="',P/o*a*a,",",O/l*s*s,'"',' type="tile"',' src="',n.src_,'" />')}}else{var N=m(t.fillStyle),z=N.color,Y=N.alpha*t.globalAlpha;e.push('<g_vml_:fill color="',z,'" opacity="',Y,'" />')}}function b(t){return isFinite(t[0][0])&&isFinite(t[0][1])&&isFinite(t[1][0])&&isFinite(t[1][1])&&isFinite(t[2][0])&&isFinite(t[2][1])}function D(t,e,i){if(b(e)&&(t.m_=e,i)){var r=e[0][0]*e[1][1]-e[0][1]*e[1][0];t.lineScale_=z(N(r))}}function S(t){this.type_=t,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function k(t,e){switch(R(t),e){case"repeat":case null:case"":this.repetition_="repeat";break;case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=e;break;default:T("SYNTAX_ERR")}this.src_=t.src,this.width_=t.width,this.height_=t.height}function T(t){throw new B(t)}function R(t){t&&1==t.nodeType&&"IMG"==t.tagName||T("TYPE_MISMATCH_ERR"),"complete"!=t.readyState&&T("INVALID_STATE_ERR")}function B(t){this.code=this[t],this.message=t+": DOM Exception "+this.code}var M=Math,I=M.round,P=M.sin,O=M.cos,N=M.abs,z=M.sqrt,L=10,Y=L/2,X=Array.prototype.slice;r(document);var H={init:function(t){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var i=t||document;i.createElement("canvas"),i.attachEvent("onreadystatechange",e(this.init_,this,i))}},init_:function(t){for(var e=t.getElementsByTagName("canvas"),i=0;i<e.length;i++)this.initElement(e[i])},initElement:function(e){if(!e.getContext){e.getContext=t,r(e.ownerDocument),e.innerHTML="",e.attachEvent("onpropertychange",n),e.attachEvent("onresize",a);var i=e.attributes;i.width&&i.width.specified?e.style.width=i.width.nodeValue+"px":e.width=e.clientWidth,i.height&&i.height.specified?e.style.height=i.height.nodeValue+"px":e.height=e.clientHeight}return e}};H.init();for(var q=[],V=0;16>V;V++)for(var W=0;16>W;W++)q[16*V+W]=V.toString(16)+W.toString(16);var j={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},G={style:"normal",variant:"normal",weight:"normal",size:10,family:"sans-serif"},U={},J=E.prototype;J.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null),this.element_.innerHTML=""},J.beginPath=function(){this.currentPath_=[]},J.moveTo=function(t,e){var i=this.getCoords_(t,e);this.currentPath_.push({type:"moveTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},J.lineTo=function(t,e){var i=this.getCoords_(t,e);this.currentPath_.push({type:"lineTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},J.bezierCurveTo=function(t,e,i,r,n,a){var s=this.getCoords_(n,a),o=this.getCoords_(t,e),l=this.getCoords_(i,r);C(this,o,l,s)},J.quadraticCurveTo=function(t,e,i,r){var n=this.getCoords_(t,e),a=this.getCoords_(i,r),s={x:this.currentX_+2/3*(n.x-this.currentX_),y:this.currentY_+2/3*(n.y-this.currentY_)},o={x:s.x+(a.x-this.currentX_)/3,y:s.y+(a.y-this.currentY_)/3};C(this,s,o,a)},J.arc=function(t,e,i,r,n,a){i*=L;var s=a?"at":"wa",o=t+O(r)*i-Y,l=e+P(r)*i-Y,h=t+O(n)*i-Y,c=e+P(n)*i-Y;o!=h||a||(o+=.125);var u=this.getCoords_(t,e),d=this.getCoords_(o,l),_=this.getCoords_(h,c);this.currentPath_.push({type:s,x:u.x,y:u.y,radius:i,xStart:d.x,yStart:d.y,xEnd:_.x,yEnd:_.y})},J.rect=function(t,e,i,r){this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath()},J.strokeRect=function(t,e,i,r){var n=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.stroke(),this.currentPath_=n},J.fillRect=function(t,e,i,r){var n=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.fill(),this.currentPath_=n},J.createLinearGradient=function(t,e,i,r){var n=new S("gradient");return n.x0_=t,n.y0_=e,n.x1_=i,n.y1_=r,n},J.createRadialGradient=function(t,e,i,r,n,a){var s=new S("gradientradial");return s.x0_=t,s.y0_=e,s.r0_=i,s.x1_=r,s.y1_=n,s.r1_=a,s},J.drawImage=function(t){var e,i,r,n,a,s,o,l,h=t.runtimeStyle.width,c=t.runtimeStyle.height;t.runtimeStyle.width="auto",t.runtimeStyle.height="auto";var u=t.width,d=t.height;if(t.runtimeStyle.width=h,t.runtimeStyle.height=c,3==arguments.length)e=arguments[1],i=arguments[2],a=s=0,o=r=u,l=n=d;else if(5==arguments.length)e=arguments[1],i=arguments[2],r=arguments[3],n=arguments[4],a=s=0,o=u,l=d;else{if(9!=arguments.length)throw Error("Invalid number of arguments");a=arguments[1],s=arguments[2],o=arguments[3],l=arguments[4],e=arguments[5],i=arguments[6],r=arguments[7],n=arguments[8]}var _=this.getCoords_(e,i),g=[],f=10,p=10;if(g.push(" <g_vml_:group",' coordsize="',L*f,",",L*p,'"',' coordorigin="0,0"',' style="width:',f,"px;height:",p,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var m=[];m.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",I(_.x/L),",","Dy=",I(_.y/L),"");var y=_,F=this.getCoords_(e+r,i),x=this.getCoords_(e,i+n),v=this.getCoords_(e+r,i+n);y.x=M.max(y.x,F.x,x.x,v.x),y.y=M.max(y.y,F.y,x.y,v.y),g.push("padding:0 ",I(y.x/L),"px ",I(y.y/L),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",m.join(""),", sizingmethod='clip');")}else g.push("top:",I(_.y/L),"px;left:",I(_.x/L),"px;");g.push(' ">','<g_vml_:image src="',t.src,'"',' style="width:',L*r,"px;"," height:",L*n,'px"',' cropleft="',a/u,'"',' croptop="',s/d,'"',' cropright="',(u-a-o)/u,'"',' cropbottom="',(d-s-l)/d,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",g.join(""))},J.stroke=function(t){for(var e=10,i=10,r=5e3,n={x:null,y:null},a={x:null,y:null},s=0;s<this.currentPath_.length;s+=r){var o=[];o.push("<g_vml_:shape",' filled="',!!t,'"',' style="position:absolute;width:',e,"px;height:",i,'px;"',' coordorigin="0,0"',' coordsize="',L*e,",",L*i,'"',' stroked="',!t,'"',' path="');for(var l=s;l<Math.min(s+r,this.currentPath_.length);l++){l%r==0&&l>0&&o.push(" m ",I(this.currentPath_[l-1].x),",",I(this.currentPath_[l-1].y));var h,c=this.currentPath_[l];switch(c.type){case"moveTo":h=c,o.push(" m ",I(c.x),",",I(c.y));break;case"lineTo":o.push(" l ",I(c.x),",",I(c.y));break;case"close":o.push(" x "),c=null;break;case"bezierCurveTo":o.push(" c ",I(c.cp1x),",",I(c.cp1y),",",I(c.cp2x),",",I(c.cp2y),",",I(c.x),",",I(c.y));break;case"at":case"wa":o.push(" ",c.type," ",I(c.x-this.arcScaleX_*c.radius),",",I(c.y-this.arcScaleY_*c.radius)," ",I(c.x+this.arcScaleX_*c.radius),",",I(c.y+this.arcScaleY_*c.radius)," ",I(c.xStart),",",I(c.yStart)," ",I(c.xEnd),",",I(c.yEnd))}c&&((null==n.x||c.x<n.x)&&(n.x=c.x),(null==a.x||c.x>a.x)&&(a.x=c.x),(null==n.y||c.y<n.y)&&(n.y=c.y),(null==a.y||c.y>a.y)&&(a.y=c.y))}o.push(' ">'),t?w(this,o,n,a):A(this,o),o.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",o.join(""))}},J.fill=function(){this.stroke(!0)},J.closePath=function(){this.currentPath_.push({type:"close"})},J.getCoords_=function(t,e){var i=this.m_;return{x:L*(t*i[0][0]+e*i[1][0]+i[2][0])-Y,y:L*(t*i[0][1]+e*i[1][1]+i[2][1])-Y}},J.save=function(){var t={};u(this,t),this.aStack_.push(t),this.mStack_.push(this.m_),this.m_=c(o(),this.m_)},J.restore=function(){this.aStack_.length&&(u(this.aStack_.pop(),this),this.m_=this.mStack_.pop())},J.translate=function(t,e){var i=[[1,0,0],[0,1,0],[t,e,1]];D(this,c(i,this.m_),!1)},J.rotate=function(t){var e=O(t),i=P(t),r=[[e,i,0],[-i,e,0],[0,0,1]];D(this,c(r,this.m_),!1)},J.scale=function(t,e){this.arcScaleX_*=t,this.arcScaleY_*=e;var i=[[t,0,0],[0,e,0],[0,0,1]];D(this,c(i,this.m_),!0)},J.transform=function(t,e,i,r,n,a){var s=[[t,e,0],[i,r,0],[n,a,1]];D(this,c(s,this.m_),!0)},J.setTransform=function(t,e,i,r,n,a){var s=[[t,e,0],[i,r,0],[n,a,1]];D(this,s,!0)},J.drawText_=function(t,e,r,n,a){var s=this.m_,o=1e3,l=0,h=o,c={x:0,y:0},u=[],d=F(y(this.font),this.element_),_=x(d),g=this.element_.currentStyle,f=this.textAlign.toLowerCase();switch(f){case"left":case"center":case"right":break;case"end":f="ltr"==g.direction?"right":"left";break;case"start":f="rtl"==g.direction?"right":"left";break;default:f="left"}switch(this.textBaseline){case"hanging":case"top":c.y=d.size/1.75;break;case"middle":break;default:case null:case"alphabetic":case"ideographic":case"bottom":c.y=-d.size/2.25}switch(f){case"right":l=o,h=.05;break;case"center":l=h=o/2}var p=this.getCoords_(e+c.x,r+c.y);u.push('<g_vml_:line from="',-l,' 0" to="',h,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!a,'" stroked="',!!a,'" style="position:absolute;width:1px;height:1px;">'),a?A(this,u):w(this,u,{x:-l,y:0},{x:h,y:d.size});var m=s[0][0].toFixed(3)+","+s[1][0].toFixed(3)+","+s[0][1].toFixed(3)+","+s[1][1].toFixed(3)+",0,0",v=I(p.x/L)+","+I(p.y/L);u.push('<g_vml_:skew on="t" matrix="',m,'" ',' offset="',v,'" origin="',l,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',i(t),'" style="v-text-align:',f,";font:",i(_),'" /></g_vml_:line>'),this.element_.insertAdjacentHTML("beforeEnd",u.join(""))},J.fillText=function(t,e,i,r){this.drawText_(t,e,i,r,!1)},J.strokeText=function(t,e,i,r){this.drawText_(t,e,i,r,!0)},J.measureText=function(t){if(!this.textMeasureEl_){var e='<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';this.element_.insertAdjacentHTML("beforeEnd",e),this.textMeasureEl_=this.element_.lastChild}var i=this.element_.ownerDocument;return this.textMeasureEl_.innerHTML="",this.textMeasureEl_.style.font=this.font,this.textMeasureEl_.appendChild(i.createTextNode(t)),{width:this.textMeasureEl_.offsetWidth}},J.clip=function(){},J.arcTo=function(){},J.createPattern=function(t,e){return new k(t,e)},S.prototype.addColorStop=function(t,e){e=m(e),this.colors_.push({offset:t,color:e.color,alpha:e.alpha})};var Z=B.prototype=new Error;Z.INDEX_SIZE_ERR=1,Z.DOMSTRING_SIZE_ERR=2,Z.HIERARCHY_REQUEST_ERR=3,Z.WRONG_DOCUMENT_ERR=4,Z.INVALID_CHARACTER_ERR=5,Z.NO_DATA_ALLOWED_ERR=6,Z.NO_MODIFICATION_ALLOWED_ERR=7,Z.NOT_FOUND_ERR=8,Z.NOT_SUPPORTED_ERR=9,Z.INUSE_ATTRIBUTE_ERR=10,Z.INVALID_STATE_ERR=11,Z.SYNTAX_ERR=12,Z.INVALID_MODIFICATION_ERR=13,Z.NAMESPACE_ERR=14,Z.INVALID_ACCESS_ERR=15,Z.VALIDATION_ERR=16,Z.TYPE_MISMATCH_ERR=17,G_vmlCanvasManager=H,CanvasRenderingContext2D=E,CanvasGradient=S,CanvasPattern=k,DOMException=B}();