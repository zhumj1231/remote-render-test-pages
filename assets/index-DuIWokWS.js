(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ju="modulepreload",Qu=function(i,e){return new URL(i,e).href},vl={},eh=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(t.map(u=>{if(u=Qu(u,n),u in vl)return;vl[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(n)for(let m=a.length-1;m>=0;m--){const v=a[m];if(v.href===u&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Ju,h||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((m,v)=>{f.addEventListener("load",m),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="180",sr={ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},th=0,_l=1,nh=2,Xc=1,qc=2,Vn=3,di=0,Kt=1,Mn=2,Yn=0,ar=1,Xa=2,xl=3,yl=4,ih=5,Ti=100,rh=101,sh=102,ah=103,oh=104,lh=200,ch=201,uh=202,hh=203,qa=204,Ya=205,dh=206,fh=207,ph=208,mh=209,gh=210,vh=211,_h=212,xh=213,yh=214,$a=0,ja=1,Za=2,hr=3,Ka=4,Ja=5,Qa=6,eo=7,Yc=0,bh=1,Mh=2,Ln=0,Sh=1,wh=2,Eh=3,Vo=4,Th=5,Ah=6,Ho=7,$c=300,dr=301,fr=302,to=303,no=304,Xs=306,Is=1e3,Ri=1001,io=1002,St=1003,Rh=1004,Qr=1005,Ct=1006,na=1007,qn=1008,Tn=1009,jc=1010,Zc=1011,Fr=1012,Wo=1013,Kn=1014,mn=1015,An=1016,Xo=1017,qo=1018,Nr=1020,Kc=35902,Jc=35899,Qc=1021,eu=1022,kt=1023,Or=1026,zr=1027,qs=1028,Yo=1029,tu=1030,$o=1031,jo=1033,Rs=33776,Cs=33777,Ps=33778,Ds=33779,ro=35840,so=35841,ao=35842,oo=35843,lo=36196,co=37492,uo=37496,ho=37808,fo=37809,po=37810,mo=37811,go=37812,vo=37813,_o=37814,xo=37815,yo=37816,bo=37817,Mo=37818,So=37819,wo=37820,Eo=37821,To=36492,Ao=36494,Ro=36495,Co=36283,Po=36284,Do=36285,Lo=36286,Ch=3200,Ph=3201,nu=0,Dh=1,si="",ln="srgb",fi="srgb-linear",Fs="linear",lt="srgb",zi=7680,bl=519,Lh=512,Uh=513,Ih=514,iu=515,Fh=516,Nh=517,Oh=518,zh=519,Ml=35044,Sl="300 es",Sn=2e3,Ns=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wl=1234567;const or=Math.PI/180,Br=180/Math.PI;function gr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Zo(i,e){return(i%e+e)%e}function Bh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function kh(i,e,t){return i!==e?(t-i)/(e-i):0}function Ur(i,e,t){return(1-t)*i+t*e}function Gh(i,e,t,n){return Ur(i,e,1-Math.exp(-t*n))}function Vh(i,e=1){return e-Math.abs(Zo(i,e*2)-e)}function Hh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Wh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function qh(i,e){return i+Math.random()*(e-i)}function Yh(i){return i*(.5-Math.random())}function $h(i){i!==void 0&&(wl=i);let e=wl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jh(i){return i*or}function Zh(i){return i*Br}function Kh(i){return(i&i-1)===0&&i!==0}function Jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ed(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function er(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Uo={DEG2RAD:or,RAD2DEG:Br,generateUUID:gr,clamp:$e,euclideanModulo:Zo,mapLinear:Bh,inverseLerp:kh,lerp:Ur,damp:Gh,pingpong:Vh,smoothstep:Hh,smootherstep:Wh,randInt:Xh,randFloat:qh,randFloatSpread:Yh,seededRandom:$h,degToRad:jh,radToDeg:Zh,isPowerOfTwo:Kh,ceilPowerOfTwo:Jh,floorPowerOfTwo:Qh,setQuaternionFromProperEuler:ed,normalize:jt,denormalize:er};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Di{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],f=s[a+1],m=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==m){let g=1-o;const p=l*d+c*f+u*m+h*v,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const D=Math.sqrt(S),T=Math.atan2(D,p*w);g=Math.sin(g*T)/D,o=Math.sin(o*T)/D}const M=o*w;if(l=l*g+d*M,c=c*g+f*M,u=u*g+m*M,h=h*g+v*M,g===1-o){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-o*f,e[t+2]=c*m+u*f+o*d-l*h,e[t+3]=u*m-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),f=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(El.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(El.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new C,El=new Di;class Xe{constructor(e,t,n,r,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],v=r[0],g=r[3],p=r[6],w=r[1],S=r[4],M=r[7],D=r[2],T=r[5],A=r[8];return s[0]=a*v+o*w+l*D,s[3]=a*g+o*S+l*T,s[6]=a*p+o*M+l*A,s[1]=c*v+u*w+h*D,s[4]=c*g+u*S+h*T,s[7]=c*p+u*M+h*A,s[2]=d*v+f*w+m*D,s[5]=d*g+f*S+m*T,s[8]=d*p+f*M+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,m=t*h+n*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Xe;function ru(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){const i=Os("canvas");return i.style.display="block",i}const Tl={};function kr(i){i in Tl||(Tl[i]=!0,console.warn(i))}function nd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Al=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rl=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function id(){const i={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=$n(r.r),r.g=$n(r.g),r.b=$n(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?Fs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fi]:{primaries:e,whitePoint:n,transfer:Fs,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}const it=id();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bi;class rd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bi===void 0&&(Bi=Os("canvas")),Bi.width=e.width,Bi.height=e.height;const r=Bi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$n(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sd=0;class Ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(sa(r[a].image)):s.push(sa(r[a]))}else s=sa(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ad=0;const aa=new C;class Jt extends Ui{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Ri,r=Ri,s=Ct,a=qn,o=kt,l=Tn,c=Jt.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=gr(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(aa).x}get height(){return this.source.getSize(aa).y}get depth(){return this.source.getSize(aa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=$c;Jt.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,t=0,n=0,r=1){He.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(f+1)/2,D=(p+1)/2,T=(u+d)/4,A=(h+v)/4,L=(m+g)/4;return S>M&&S>D?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=T/n,s=A/n):M>D?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=T/r,s=L/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=A/s,r=L/s),this.set(n,r,s,t),this}let w=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(h-v)/w,this.z=(d-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class od extends Ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new He(0,0,e,t),this.scissorTest=!1,this.viewport=new He(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Jt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ko(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends od{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class su extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ld extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(s,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox)),es.applyMatrix4(e.matrixWorld),this.union(es)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),ts.subVectors(this.max,yr),ki.subVectors(e.a,yr),Gi.subVectors(e.b,yr),Vi.subVectors(e.c,yr),Qn.subVectors(Gi,ki),ei.subVectors(Vi,Gi),vi.subVectors(ki,Vi);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-vi.z,vi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,vi.z,0,-vi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-vi.y,vi.x,0];return!oa(t,ki,Gi,Vi,ts)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,ki,Gi,Vi,ts))?!1:(ns.crossVectors(Qn,ei),t=[ns.x,ns.y,ns.z],oa(t,ki,Gi,Vi,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new C,new C,new C,new C,new C,new C,new C,new C],_n=new C,es=new Jn,ki=new C,Gi=new C,Vi=new C,Qn=new C,ei=new C,vi=new C,yr=new C,ts=new C,ns=new C,_i=new C;function oa(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){_i.fromArray(i,s);const o=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),u=n.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const cd=new Jn,br=new C,la=new C;class Ii{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(br,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(la.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(la)),this.expandByPoint(br.copy(e.center).sub(la))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new C,ca=new C,is=new C,ti=new C,ua=new C,rs=new C,ha=new C;class Ys{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ca.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(ca);const s=e.distanceTo(t)*.5,a=-this.direction.dot(is),o=ti.dot(this.direction),l=-ti.dot(is),c=ti.lengthSq(),u=Math.abs(1-a*a);let h,d,f,m;if(u>0)if(h=a*l-o,d=a*o-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ca).addScaledVector(is,d),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),r=zn.dot(zn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,r,s){ua.subVectors(t,e),rs.subVectors(n,e),ha.crossVectors(ua,rs);let a=this.direction.dot(ha),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,e);const l=o*this.direction.dot(rs.crossVectors(ti,rs));if(l<0)return null;const c=o*this.direction.dot(ua.cross(ti));if(c<0||l+c>a)return null;const u=-o*ti.dot(ha);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,r,s,a,o,l,c,u,h,d,f,m,v,g){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,f,m,v,g)}set(e,t,n,r,s,a,o,l,c,u,h,d,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Hi.setFromMatrixColumn(e,0).length(),s=1/Hi.setFromMatrixColumn(e,1).length(),a=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,m=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,v=c*h;t[0]=d+v*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,m=o*u,v=o*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ud,e,hd)}lookAt(e,t,n){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ni.crossVectors(n,sn),ni.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ni.crossVectors(n,sn)),ni.normalize(),ss.crossVectors(sn,ni),r[0]=ni.x,r[4]=ss.x,r[8]=sn.x,r[1]=ni.y,r[5]=ss.y,r[9]=sn.y,r[2]=ni.z,r[6]=ss.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],w=n[3],S=n[7],M=n[11],D=n[15],T=r[0],A=r[4],L=r[8],y=r[12],b=r[1],P=r[5],I=r[9],z=r[13],G=r[2],W=r[6],H=r[10],Z=r[14],k=r[3],ie=r[7],oe=r[11],de=r[15];return s[0]=a*T+o*b+l*G+c*k,s[4]=a*A+o*P+l*W+c*ie,s[8]=a*L+o*I+l*H+c*oe,s[12]=a*y+o*z+l*Z+c*de,s[1]=u*T+h*b+d*G+f*k,s[5]=u*A+h*P+d*W+f*ie,s[9]=u*L+h*I+d*H+f*oe,s[13]=u*y+h*z+d*Z+f*de,s[2]=m*T+v*b+g*G+p*k,s[6]=m*A+v*P+g*W+p*ie,s[10]=m*L+v*I+g*H+p*oe,s[14]=m*y+v*z+g*Z+p*de,s[3]=w*T+S*b+M*G+D*k,s[7]=w*A+S*P+M*W+D*ie,s[11]=w*L+S*I+M*H+D*oe,s[15]=w*y+S*z+M*Z+D*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*f-n*l*f)+v*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*u-s*l*u)+g*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+p*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],w=h*g*c-v*d*c+v*l*f-o*g*f-h*l*p+o*d*p,S=m*d*c-u*g*c-m*l*f+a*g*f+u*l*p-a*d*p,M=u*v*c-m*h*c+m*o*f-a*v*f-u*o*p+a*h*p,D=m*h*l-u*v*l-m*o*d+a*v*d+u*o*g-a*h*g,T=t*w+n*S+r*M+s*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=w*A,e[1]=(v*d*s-h*g*s-v*r*f+n*g*f+h*r*p-n*d*p)*A,e[2]=(o*g*s-v*l*s+v*r*c-n*g*c-o*r*p+n*l*p)*A,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*f-n*l*f)*A,e[4]=S*A,e[5]=(u*g*s-m*d*s+m*r*f-t*g*f-u*r*p+t*d*p)*A,e[6]=(m*l*s-a*g*s-m*r*c+t*g*c+a*r*p-t*l*p)*A,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*f+t*l*f)*A,e[8]=M*A,e[9]=(m*h*s-u*v*s-m*n*f+t*v*f+u*n*p-t*h*p)*A,e[10]=(a*v*s-m*o*s+m*n*c-t*v*c-a*n*p+t*o*p)*A,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*A,e[12]=D*A,e[13]=(u*v*r-m*h*r+m*n*d-t*v*d-u*n*g+t*h*g)*A,e[14]=(m*o*r-a*v*r-m*n*l+t*v*l+a*n*g-t*o*g)*A,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,m=s*h,v=a*u,g=a*h,p=o*h,w=l*c,S=l*u,M=l*h,D=n.x,T=n.y,A=n.z;return r[0]=(1-(v+p))*D,r[1]=(f+M)*D,r[2]=(m-S)*D,r[3]=0,r[4]=(f-M)*T,r[5]=(1-(d+p))*T,r[6]=(g+w)*T,r[7]=0,r[8]=(m+S)*A,r[9]=(g-w)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Hi.set(r[0],r[1],r[2]).length();const a=Hi.set(r[4],r[5],r[6]).length(),o=Hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const c=1/s,u=1/a,h=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Sn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(l)m=s/(a-s),v=a*s/(a-s);else if(o===Sn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ns)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Sn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r);let m,v;if(l)m=1/(a-s),v=a/(a-s);else if(o===Sn)m=-2/(a-s),v=-(a+s)/(a-s);else if(o===Ns)m=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hi=new C,xn=new Je,ud=new C(0,0,0),hd=new C(1,1,1),ni=new C,ss=new C,sn=new C,Cl=new Je,Pl=new Di;class Un{constructor(e=0,t=0,n=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dd=0;const Dl=new C,Wi=new Di,Bn=new Je,as=new C,Mr=new C,fd=new C,pd=new Di,Ll=new C(1,0,0),Ul=new C(0,1,0),Il=new C(0,0,1),Fl={type:"added"},md={type:"removed"},Xi={type:"childadded",child:null},da={type:"childremoved",child:null};class wt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new C,t=new Un,n=new Di,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new Xe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Ul,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Dl.copy(e).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Ul,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Mr,as,this.up):Bn.lookAt(as,Mr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(md),da.child=e,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,fd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,pd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wt.DEFAULT_UP=new C(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new C,kn=new C,fa=new C,Gn=new C,qi=new C,Yi=new C,Nl=new C,pa=new C,ma=new C,ga=new C,va=new He,_a=new He,xa=new He;class pn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){yn.subVectors(r,t),kn.subVectors(n,t),fa.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(kn),l=yn.dot(fa),c=kn.dot(kn),u=kn.dot(fa),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,m=(a*u-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return va.setScalar(0),_a.setScalar(0),xa.setScalar(0),va.fromBufferAttribute(e,t),_a.fromBufferAttribute(e,n),xa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(va,s.x),a.addScaledVector(_a,s.y),a.addScaledVector(xa,s.z),a}static isFrontFacing(e,t,n,r){return yn.subVectors(n,t),kn.subVectors(e,t),yn.cross(kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),yn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;qi.subVectors(r,n),Yi.subVectors(s,n),pa.subVectors(e,n);const l=qi.dot(pa),c=Yi.dot(pa);if(l<=0&&c<=0)return t.copy(n);ma.subVectors(e,r);const u=qi.dot(ma),h=Yi.dot(ma);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(qi,a);ga.subVectors(e,s);const f=qi.dot(ga),m=Yi.dot(ga);if(m>=0&&f<=m)return t.copy(s);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Yi,o);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Nl.subVectors(s,r),o=(h-u)/(h-u+(f-m)),t.copy(r).addScaledVector(Nl,o);const p=1/(g+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},os={h:0,s:0,l:0};function ya(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=Zo(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ya(a,s,e+1/3),this.g=ya(a,s,e),this.b=ya(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const n=au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return it.workingToColorSpace(Xt.copy(this),e),Math.round($e(Xt.r*255,0,255))*65536+Math.round($e(Xt.g*255,0,255))*256+Math.round($e(Xt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=ln){it.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,r=Xt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(os);const n=Ur(ii.h,os.h,t),r=Ur(ii.s,os.s,t),s=Ur(ii.l,os.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new fe;fe.NAMES=au;let gd=0;class vr extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=ar,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pi extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xn=vd();function vd(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function _d(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=$e(i,-65504,65504),Xn.floatView[0]=i;const e=Xn.uint32View[0],t=e>>23&511;return Xn.baseTable[t]+((e&8388607)>>Xn.shiftTable[t])}function xd(i){const e=i>>10;return Xn.uint32View[0]=Xn.mantissaTable[Xn.offsetTable[e]+(i&1023)]+Xn.exponentTable[e],Xn.floatView[0]}class yd{static toHalfFloat(e){return _d(e)}static fromHalfFloat(e){return xd(e)}}const Et=new C,ls=new _e;let bd=0;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ml,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=er(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ml&&(e.usage=this.usage),e}}class ou extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lu extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Md=0;const fn=new Je,ba=new wt,$i=new C,an=new Jn,Sr=new Jn,Ft=new C;class Yt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ru(e)?lu:ou)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(an.min,Sr.min),an.expandByPoint(Ft),Ft.addVectors(an.max,Sr.max),an.expandByPoint(Ft)):(an.expandByPoint(Sr.min),an.expandByPoint(Sr.max))}an.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(e,c),Ft.add($i)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new C,l[L]=new C;const c=new C,u=new C,h=new C,d=new _e,f=new _e,m=new _e,v=new C,g=new C;function p(L,y,b){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,b),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,y),m.fromBufferAttribute(s,b),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(P),o[L].add(v),o[y].add(v),o[b].add(v),l[L].add(g),l[y].add(g),l[b].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,y=w.length;L<y;++L){const b=w[L],P=b.start,I=b.count;for(let z=P,G=P+I;z<G;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new C,M=new C,D=new C,T=new C;function A(L){D.fromBufferAttribute(r,L),T.copy(D);const y=o[L];S.copy(y),S.sub(D.multiplyScalar(D.dot(y))).normalize(),M.crossVectors(T,y);const P=M.dot(l[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,P)}for(let L=0,y=w.length;L<y;++L){const b=w[L],P=b.start,I=b.count;for(let z=P,G=P+I;z<G;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new gn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ol=new Je,xi=new Ys,cs=new Ii,zl=new C,us=new C,hs=new C,ds=new C,Ma=new C,fs=new C,Bl=new C,ps=new C;class ft extends wt{constructor(e=new Yt,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){fs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ma.fromBufferAttribute(h,e),a?fs.addScaledVector(Ma,u):fs.addScaledVector(Ma.sub(t),u))}t.add(fs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(cs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(cs,zl)===null||xi.origin.distanceToSquared(zl)>(e.far-e.near)**2))&&(Ol.copy(s).invert(),xi.copy(e.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=a[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=w,D=S;M<D;M+=3){const T=o.getX(M),A=o.getX(M+1),L=o.getX(M+2);r=ms(this,p,e,n,c,u,h,T,A,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const w=o.getX(g),S=o.getX(g+1),M=o.getX(g+2);r=ms(this,a,e,n,c,u,h,w,S,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=a[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=w,D=S;M<D;M+=3){const T=M,A=M+1,L=M+2;r=ms(this,p,e,n,c,u,h,T,A,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const w=g,S=g+1,M=g+2;r=ms(this,a,e,n,c,u,h,w,S,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Sd(i,e,t,n,r,s,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===di,o),l===null)return null;ps.copy(o),ps.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ps);return c<t.near||c>t.far?null:{distance:c,point:ps.clone(),object:i}}function ms(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,us),i.getVertexPosition(l,hs),i.getVertexPosition(c,ds);const u=Sd(i,e,t,n,us,hs,ds,Bl);if(u){const h=new C;pn.getBarycoord(Bl,us,hs,ds,h),r&&(u.uv=pn.getInterpolatedAttribute(r,o,l,c,h,new _e)),s&&(u.uv1=pn.getInterpolatedAttribute(s,o,l,c,h,new _e)),a&&(u.normal=pn.getInterpolatedAttribute(a,o,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};pn.getNormal(us,hs,ds,d.normal),u.face=d,u.barycoord=h}return u}class In extends Yt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(h,2));function m(v,g,p,w,S,M,D,T,A,L,y){const b=M/A,P=D/L,I=M/2,z=D/2,G=T/2,W=A+1,H=L+1;let Z=0,k=0;const ie=new C;for(let oe=0;oe<H;oe++){const de=oe*P-z;for(let Fe=0;Fe<W;Fe++){const at=Fe*b-I;ie[v]=at*w,ie[g]=de*S,ie[p]=G,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[g]=0,ie[p]=T>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Fe/A),h.push(1-oe/L),Z+=1}}for(let oe=0;oe<L;oe++)for(let de=0;de<A;de++){const Fe=d+de+W*oe,at=d+de+W*(oe+1),ht=d+(de+1)+W*(oe+1),rt=d+(de+1)+W*oe;l.push(Fe,at,rt),l.push(at,ht,rt),k+=6}o.addGroup(f,k,y),f+=k,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=pr(i[t]);for(const r in n)e[r]=n[r]}return e}function wd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Ed={clone:pr,merge:Zt};var Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uu extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new C,kl=new _e,Gl=new _e;class qt extends uu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,kl,Gl),t.subVectors(Gl,kl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(or*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Zi=1;class hu extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(ji,Zi,e,t);r.layers=this.layers,this.add(r);const s=new qt(ji,Zi,e,t);s.layers=this.layers,this.add(s);const a=new qt(ji,Zi,e,t);a.layers=this.layers,this.add(a);const o=new qt(ji,Zi,e,t);o.layers=this.layers,this.add(o);const l=new qt(ji,Zi,e,t);l.layers=this.layers,this.add(l);const c=new qt(ji,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class du extends Jt{constructor(e=[],t=dr,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qo extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new du(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new In(5,5,5),s=new Dt({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Yn});s.uniforms.tEquirect.value=t;const a=new ft(r,s),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=Ct),new hu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Ci extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rd={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ci;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class el{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(e),this.density=t}clone(){return new el(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xr extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cr extends Jt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=St,u=St,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li extends gn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ki=new Je,Vl=new Je,gs=[],Hl=new Jn,Cd=new Je,wr=new ft,Er=new Ii;class ur extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Li(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Cd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Hl.copy(e.boundingBox).applyMatrix4(Ki),this.boundingBox.union(Hl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Er.copy(e.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),e.ray.intersectsSphere(Er)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ki),Vl.multiplyMatrices(n,Ki),wr.matrixWorld=Vl,wr.raycast(e,gs);for(let a=0,o=gs.length;a<o;a++){const l=gs[a];l.instanceId=s,l.object=this,t.push(l)}gs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Li(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new cr(new Float32Array(r*this.count),r,this.count,qs,mn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wa=new C,Pd=new C,Dd=new Xe;class Hn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=wa.subVectors(n,t).cross(Pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dd.getNormalMatrix(e),r=this.coplanarPoint(wa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Ii,Ld=new _e(.5,.5),vs=new C;class qr{constructor(e=new Hn,t=new Hn,n=new Hn,r=new Hn,s=new Hn,a=new Hn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],m=s[8],v=s[9],g=s[10],p=s[11],w=s[12],S=s[13],M=s[14],D=s[15];if(r[0].setComponents(c-a,f-u,p-m,D-w).normalize(),r[1].setComponents(c+a,f+u,p+m,D+w).normalize(),r[2].setComponents(c+o,f+h,p+v,D+S).normalize(),r[3].setComponents(c-o,f-h,p-v,D-S).normalize(),n)r[4].setComponents(l,d,g,M).normalize(),r[5].setComponents(c-l,f-d,p-g,D-M).normalize();else if(r[4].setComponents(c-l,f-d,p-g,D-M).normalize(),t===Sn)r[5].setComponents(c+l,f+d,p+g,D+M).normalize();else if(t===Ns)r[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=Ld.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(vs.x=r.normal.x>0?e.max.x:e.min.x,vs.y=r.normal.y>0?e.max.y:e.min.y,vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fu extends vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zs=new C,Bs=new C,Wl=new Je,Tr=new Ys,_s=new Ii,Ea=new C,Xl=new C;class Ud extends wt{constructor(e=new Yt,t=new fu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)zs.fromBufferAttribute(t,r-1),Bs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=zs.distanceTo(Bs);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(r),_s.radius+=s,e.ray.intersectsSphere(_s)===!1)return;Wl.copy(r).invert(),Tr.copy(e.ray).applyMatrix4(Wl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){const p=u.getX(v),w=u.getX(v+1),S=xs(this,e,Tr,l,p,w,v);S&&t.push(S)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(f),p=xs(this,e,Tr,l,v,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){const p=xs(this,e,Tr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=xs(this,e,Tr,l,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xs(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(zs.fromBufferAttribute(o,r),Bs.fromBufferAttribute(o,s),t.distanceSqToSegment(zs,Bs,Ea,Xl)>n)return;Ea.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ea);if(!(c<e.near||c>e.far))return{distance:c,point:Xl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ql=new C,Yl=new C;class Id extends Ud{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)ql.fromBufferAttribute(t,r),Yl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ql.distanceTo(Yl);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $s extends Jt{constructor(e,t,n=Kn,r,s,a,o=St,l=St,c,u=Or,h=1){if(u!==Or&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pu extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class js extends Yt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let m=0;const v=[],g=n/2;let p=0;w(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(f,2));function w(){const M=new C,D=new C;let T=0;const A=(t-e)/n;for(let L=0;L<=s;L++){const y=[],b=L/s,P=b*(t-e)+e;for(let I=0;I<=r;I++){const z=I/r,G=z*l+o,W=Math.sin(G),H=Math.cos(G);D.x=P*W,D.y=-b*n+g,D.z=P*H,h.push(D.x,D.y,D.z),M.set(W,A,H).normalize(),d.push(M.x,M.y,M.z),f.push(z,1-b),y.push(m++)}v.push(y)}for(let L=0;L<r;L++)for(let y=0;y<s;y++){const b=v[y][L],P=v[y+1][L],I=v[y+1][L+1],z=v[y][L+1];(e>0||y!==0)&&(u.push(b,P,z),T+=3),(t>0||y!==s-1)&&(u.push(P,I,z),T+=3)}c.addGroup(p,T,0),p+=T}function S(M){const D=m,T=new _e,A=new C;let L=0;const y=M===!0?e:t,b=M===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),m++;const P=m;for(let I=0;I<=r;I++){const G=I/r*l+o,W=Math.cos(G),H=Math.sin(G);A.x=y*H,A.y=g*b,A.z=y*W,h.push(A.x,A.y,A.z),d.push(0,b,0),T.x=W*.5+.5,T.y=H*.5*b+.5,f.push(T.x,T.y),m++}for(let I=0;I<r;I++){const z=D+I,G=P+I;M===!0?u.push(G,G+1,z):u.push(G+1,G,z),L+=3}c.addGroup(p,L,M===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tl extends js{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new tl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ys=new C,bs=new C,Ta=new C,Ms=new pn;class Fd extends Yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(or*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:v,b:g,c:p}=Ms;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Ms.getNormal(Ta),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){const S=(w+1)%3,M=h[w],D=h[S],T=Ms[u[w]],A=Ms[u[S]],L=`${M}_${D}`,y=`${D}_${M}`;y in d&&d[y]?(Ta.dot(d[y].normal)<=s&&(f.push(T.x,T.y,T.z),f.push(A.x,A.y,A.z)),d[y]=null):L in d||(d[L]={index0:c[w],index1:c[S],normal:Ta.clone()})}}for(const m in d)if(d[m]){const{index0:v,index1:g}=d[m];ys.fromBufferAttribute(o,v),bs.fromBufferAttribute(o,g),f.push(ys.x,ys.y,ys.z),f.push(bs.x,bs.y,bs.z)}this.setAttribute("position",new Pt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Fn extends Yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const w=p*d-a;for(let S=0;S<c;S++){const M=S*h-s;m.push(M,-w,0),v.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const S=w+c*p,M=w+c*(p+1),D=w+1+c*(p+1),T=w+1+c*p;f.push(S,M,T),f.push(M,D,T)}this.setIndex(f),this.setAttribute("position",new Pt(m,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yr extends Yt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new C,d=new C,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const w=[],S=p/n;let M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let D=0;D<=t;D++){const T=D/t;h.x=-e*Math.cos(r+T*s)*Math.sin(a+S*o),h.y=e*Math.cos(a+S*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+S*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(T+M,1-S),w.push(c++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){const S=u[p][w+1],M=u[p][w],D=u[p+1][w],T=u[p+1][w+1];(p!==0||a>0)&&f.push(S,M,T),(p!==n-1||l<Math.PI)&&f.push(M,D,T)}this.setIndex(f),this.setAttribute("position",new Pt(m,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nd extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nl extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Od extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mu extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Aa=new Je,$l=new C,jl=new C;class gu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qr,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$l.setFromMatrixPosition(e.matrixWorld),t.position.copy($l),jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jl),t.updateMatrixWorld(),Aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zl=new Je,Ar=new C,Ra=new C;class zd extends gu{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ar),Ra.copy(n.position),Ra.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ra),n.updateMatrixWorld(),r.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl,n.coordinateSystem,n.reversedDepth)}}class Bd extends mu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new zd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fi extends uu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kd extends gu{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gd extends mu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new kd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vu extends Yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Vd extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Kl=new Je;class Hd{constructor(e,t,n=0,r=1/0){this.ray=new Ys(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kl),this}intersectObject(e,t=!0,n=[]){return Io(e,this,n,t),n.sort(Jl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Io(e[r],this,n,t);return n.sort(Jl),n}}function Jl(i,e){return i.distance-e.distance}function Io(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Io(s[a],e,t,!0)}}class Ql{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Wd extends Ui{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ec(i,e,t,n){const r=Xd(n);switch(t){case Qc:return i*e;case qs:return i*e/r.components*r.byteLength;case Yo:return i*e/r.components*r.byteLength;case tu:return i*e*2/r.components*r.byteLength;case $o:return i*e*2/r.components*r.byteLength;case eu:return i*e*3/r.components*r.byteLength;case kt:return i*e*4/r.components*r.byteLength;case jo:return i*e*4/r.components*r.byteLength;case Rs:case Cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case so:case oo:return Math.max(i,16)*Math.max(e,8)/4;case ro:case ao:return Math.max(i,8)*Math.max(e,8)/2;case lo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case To:case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Co:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Do:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xd(i){switch(i){case Tn:case jc:return{byteLength:1,components:1};case Fr:case Zc:case An:return{byteLength:2,components:1};case Xo:case qo:return{byteLength:2,components:4};case Kn:case Wo:case mn:return{byteLength:4,components:1};case Kc:case Jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _u(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function qd(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],v=h[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,of=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Np=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,em=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Em=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Yd,alphahash_pars_fragment:$d,alphamap_fragment:jd,alphamap_pars_fragment:Zd,alphatest_fragment:Kd,alphatest_pars_fragment:Jd,aomap_fragment:Qd,aomap_pars_fragment:ef,batching_pars_vertex:tf,batching_vertex:nf,begin_vertex:rf,beginnormal_vertex:sf,bsdfs:af,iridescence_fragment:of,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:uf,clipping_planes_pars_vertex:hf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:vf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:xf,displacementmap_pars_vertex:yf,displacementmap_vertex:bf,emissivemap_fragment:Mf,emissivemap_pars_fragment:Sf,colorspace_fragment:wf,colorspace_pars_fragment:Ef,envmap_fragment:Tf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Rf,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:kf,envmap_vertex:Pf,fog_vertex:Df,fog_pars_vertex:Lf,fog_fragment:Uf,fog_pars_fragment:If,gradientmap_pars_fragment:Ff,lightmap_pars_fragment:Nf,lights_lambert_fragment:Of,lights_lambert_pars_fragment:zf,lights_pars_begin:Bf,lights_toon_fragment:Gf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:$f,lights_fragment_end:jf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Qf,map_fragment:ep,map_pars_fragment:tp,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:rp,metalnessmap_pars_fragment:sp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:up,normal_fragment_begin:hp,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:xp,iridescence_pars_fragment:yp,opaque_fragment:bp,packing:Mp,premultiplied_alpha_fragment:Sp,project_vertex:wp,dithering_fragment:Ep,dithering_pars_fragment:Tp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Dp,shadowmask_pars_fragment:Lp,skinbase_vertex:Up,skinning_pars_vertex:Ip,skinning_vertex:Fp,skinnormal_vertex:Np,specularmap_fragment:Op,specularmap_pars_fragment:zp,tonemapping_fragment:Bp,tonemapping_pars_fragment:kp,transmission_fragment:Gp,transmission_pars_fragment:Vp,uv_pars_fragment:Hp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:$p,backgroundCube_vert:jp,backgroundCube_frag:Zp,cube_vert:Kp,cube_frag:Jp,depth_vert:Qp,depth_frag:em,distanceRGBA_vert:tm,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:rm,linedashed_vert:sm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:um,meshmatcap_vert:hm,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:vm,meshphysical_frag:_m,meshtoon_vert:xm,meshtoon_frag:ym,points_vert:bm,points_frag:Mm,shadow_vert:Sm,shadow_frag:wm,sprite_vert:Em,sprite_frag:Tm},ae={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Pn={basic:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Zt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Zt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Zt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Zt([ae.points,ae.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Zt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Zt([ae.common,ae.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Zt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Zt([ae.sprite,ae.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Zt([ae.common,ae.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Zt([ae.lights,ae.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Pn.physical={uniforms:Zt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ss={r:0,b:0,g:0},bi=new Un,Am=new Je;function Rm(i,e,t,n,r,s,a){const o=new fe(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function m(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function v(S){let M=!1;const D=m(S);D===null?p(o,l):D&&D.isColor&&(p(D,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,M){const D=m(M);D&&(D.isCubeTexture||D.mapping===Xs)?(u===void 0&&(u=new ft(new In(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:pr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),bi.copy(M.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(bi)),u.material.toneMapped=it.getTransfer(D.colorSpace)!==lt,(h!==D||d!==D.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=D,d=D.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new ft(new Fn(2,2),new Dt({name:"BackgroundMaterial",uniforms:pr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=it.getTransfer(D.colorSpace)!==lt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||d!==D.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=D,d=D.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(Ss,cu(i)),n.buffers.color.setClear(Ss.r,Ss.g,Ss.b,M,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:v,addToRenderList:g,dispose:w}}function Cm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(b,P,I,z,G){let W=!1;const H=h(z,I,P);s!==H&&(s=H,c(s.object)),W=f(b,z,I,G),W&&m(b,z,I,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(b,P,I,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,P,I){const z=I.wireframe===!0;let G=n[b.id];G===void 0&&(G={},n[b.id]=G);let W=G[P.id];W===void 0&&(W={},G[P.id]=W);let H=W[z];return H===void 0&&(H=d(l()),W[z]=H),H}function d(b){const P=[],I=[],z=[];for(let G=0;G<t;G++)P[G]=0,I[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:z,object:b,attributes:{},index:null}}function f(b,P,I,z){const G=s.attributes,W=P.attributes;let H=0;const Z=I.getAttributes();for(const k in Z)if(Z[k].location>=0){const oe=G[k];let de=W[k];if(de===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),oe===void 0||oe.attribute!==de||de&&oe.data!==de.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function m(b,P,I,z){const G={},W=P.attributes;let H=0;const Z=I.getAttributes();for(const k in Z)if(Z[k].location>=0){let oe=W[k];oe===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor));const de={};de.attribute=oe,oe&&oe.data&&(de.data=oe.data),G[k]=de,H++}s.attributes=G,s.attributesNum=H,s.index=z}function v(){const b=s.newAttributes;for(let P=0,I=b.length;P<I;P++)b[P]=0}function g(b){p(b,0)}function p(b,P){const I=s.newAttributes,z=s.enabledAttributes,G=s.attributeDivisors;I[b]=1,z[b]===0&&(i.enableVertexAttribArray(b),z[b]=1),G[b]!==P&&(i.vertexAttribDivisor(b,P),G[b]=P)}function w(){const b=s.newAttributes,P=s.enabledAttributes;for(let I=0,z=P.length;I<z;I++)P[I]!==b[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function S(b,P,I,z,G,W,H){H===!0?i.vertexAttribIPointer(b,P,I,G,W):i.vertexAttribPointer(b,P,I,z,G,W)}function M(b,P,I,z){v();const G=z.attributes,W=I.getAttributes(),H=P.defaultAttributeValues;for(const Z in W){const k=W[Z];if(k.location>=0){let ie=G[Z];if(ie===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){const oe=ie.normalized,de=ie.itemSize,Fe=e.get(ie);if(Fe===void 0)continue;const at=Fe.buffer,ht=Fe.type,rt=Fe.bytesPerElement,Y=ht===i.INT||ht===i.UNSIGNED_INT||ie.gpuType===Wo;if(ie.isInterleavedBufferAttribute){const J=ie.data,ge=J.stride,Be=ie.offset;if(J.isInstancedInterleavedBuffer){for(let Te=0;Te<k.locationSize;Te++)p(k.location+Te,J.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Te=0;Te<k.locationSize;Te++)g(k.location+Te);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Te=0;Te<k.locationSize;Te++)S(k.location+Te,de/k.locationSize,ht,oe,ge*rt,(Be+de/k.locationSize*Te)*rt,Y)}else{if(ie.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)p(k.location+J,ie.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let J=0;J<k.locationSize;J++)g(k.location+J);i.bindBuffer(i.ARRAY_BUFFER,at);for(let J=0;J<k.locationSize;J++)S(k.location+J,de/k.locationSize,ht,oe,de*rt,de/k.locationSize*J*rt,Y)}}else if(H!==void 0){const oe=H[Z];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(k.location,oe);break;case 3:i.vertexAttrib3fv(k.location,oe);break;case 4:i.vertexAttrib4fv(k.location,oe);break;default:i.vertexAttrib1fv(k.location,oe)}}}}w()}function D(){L();for(const b in n){const P=n[b];for(const I in P){const z=P[I];for(const G in z)u(z[G].object),delete z[G];delete P[I]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const I in P){const z=P[I];for(const G in z)u(z[G].object),delete z[G];delete P[I]}delete n[b.id]}function A(b){for(const P in n){const I=n[P];if(I[b.id]===void 0)continue;const z=I[b.id];for(const G in z)u(z[G].object),delete z[G];delete I[b.id]}}function L(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:w}}function Pm(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v]*d[v];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Dm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==kt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mn&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:D,maxSamples:T}}function Lm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Hn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const w=s?0:n,S=w*4;let M=p.clippingState||null;l.value=M,M=u(m,d,S,f);for(let D=0;D!==S;++D)M[D]=t[D];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,M=f;S!==v;++S,M+=4)a.copy(h[S]).applyMatrix4(w,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Um(i){let e=new WeakMap;function t(a,o){return o===to?a.mapping=dr:o===no&&(a.mapping=fr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===to||o===no)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qo(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const nr=4,tc=[.125,.215,.35,.446,.526,.582],Ai=20,Ca=new Fi,nc=new fe;let Pa=null,Da=0,La=0,Ua=!1;const Ei=(1+Math.sqrt(5))/2,Ji=1/Ei,ic=[new C(-Ei,Ji,0),new C(Ei,Ji,0),new C(-Ji,0,Ei),new C(Ji,0,Ei),new C(0,Ei,-Ji),new C(0,Ei,Ji),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Im=new C;class rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Im}=s;Pa=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,Da,La),this._renderer.xr.enabled=Ua,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:An,format:kt,colorSpace:fi,depthBuffer:!1},r=sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fm(s)),this._blurMaterial=Nm(s,e,t)}return r}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,r,s){const l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(nc),h.toneMapping=Ln,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const v=new pi({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new ft(new In,v);let p=!1;const w=e.background;w?w.isColor&&(v.color.copy(w),e.background=null,p=!0):(v.color.copy(nc),p=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const D=this._cubeSize;ws(r,M*D,S>2?D:0,D,D),h.setRenderTarget(r),p&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===dr||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ic[(r-s-1)%ic.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ft(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ai-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):Ai;g>Ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ai}`);const p=[];let w=0;for(let A=0;A<Ai;++A){const L=A/v,y=Math.exp(-L*L/2);p.push(y),A===0?w+=y:A<g&&(w+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-n;const M=this._sizeLods[r],D=3*M*(r>S-nr?r-S+nr:0),T=4*(this._cubeSize-M);ws(t,D,T,3*M,2*M),l.setRenderTarget(t),l.render(h,Ca)}}function Fm(i){const e=[],t=[],n=[];let r=i;const s=i-nr+1+tc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-nr?l=tc[a-i+nr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,v=3,g=2,p=1,w=new Float32Array(v*m*f),S=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,L=T>2?0:-1,y=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];w.set(y,v*m*T),S.set(d,g*m*T);const b=[T,T,T,T,T,T];M.set(b,p*m*T)}const D=new Yt;D.setAttribute("position",new gn(w,v)),D.setAttribute("uv",new gn(S,g)),D.setAttribute("faceIndex",new gn(M,p)),e.push(D),r>nr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sc(i,e,t){const n=new un(i,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Nm(i,e,t){const n=new Float32Array(Ai),r=new C(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ac(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function oc(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Om(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===to||l===no,u=l===dr||l===fr;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new rc(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new rc(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function zm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Bm(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,m=h.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let S=0,M=w.length;S<M;S+=3){const D=w[S+0],T=w[S+1],A=w[S+2];d.push(D,T,T,A,A,D)}}else if(m!==void 0){const w=m.array;v=m.version;for(let S=0,M=w.length/3-1;S<M;S+=3){const D=S+0,T=S+1,A=S+2;d.push(D,T,T,A,A,D)}}else return;const g=new(ru(d)?lu:ou)(d,1);g.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function km(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,d*a,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function h(d,f,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,m);let p=0;for(let w=0;w<m;w++)p+=f[w]*v[w];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Gm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Vm(i,e,t){const n=new WeakMap,r=new He;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let y=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;f===!0&&(S=1),m===!0&&(S=2),v===!0&&(S=3);let M=o.attributes.position.count*S,D=1;M>e.maxTextureSize&&(D=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*D*4*h),A=new su(T,M,D,h);A.type=mn,A.needsUpdate=!0;const L=S*4;for(let b=0;b<h;b++){const P=g[b],I=p[b],z=w[b],G=M*D*4*b;for(let W=0;W<P.count;W++){const H=W*L;f===!0&&(r.fromBufferAttribute(P,W),T[G+H+0]=r.x,T[G+H+1]=r.y,T[G+H+2]=r.z,T[G+H+3]=0),m===!0&&(r.fromBufferAttribute(I,W),T[G+H+4]=r.x,T[G+H+5]=r.y,T[G+H+6]=r.z,T[G+H+7]=0),v===!0&&(r.fromBufferAttribute(z,W),T[G+H+8]=r.x,T[G+H+9]=r.y,T[G+H+10]=r.z,T[G+H+11]=z.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new _e(M,D)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Hm(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const xu=new Jt,lc=new $s(1,1),yu=new su,bu=new ld,Mu=new du,cc=[],uc=[],hc=new Float32Array(16),dc=new Float32Array(9),fc=new Float32Array(4);function _r(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=cc[r];if(s===void 0&&(s=new Float32Array(r),cc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zs(i,e){let t=uc[e];t===void 0&&(t=new Int32Array(e),uc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function $m(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Lt(t,n))return;fc.set(n),i.uniformMatrix2fv(this.addr,!1,fc),Ut(t,n)}}function jm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Lt(t,n))return;dc.set(n),i.uniformMatrix3fv(this.addr,!1,dc),Ut(t,n)}}function Zm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Lt(t,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),Ut(t,n)}}function Km(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function tg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function sg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(lc.compareFunction=iu,s=lc):s=xu,t.setTexture2D(e||s,r)}function ag(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||bu,r)}function og(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Mu,r)}function lg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||yu,r)}function cg(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return $m;case 35675:return jm;case 35676:return Zm;case 5124:case 35670:return Km;case 35667:case 35671:return Jm;case 35668:case 35672:return Qm;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}function ug(i,e){i.uniform1fv(this.addr,e)}function hg(i,e){const t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function dg(i,e){const t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function fg(i,e){const t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function pg(i,e){const t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mg(i,e){const t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gg(i,e){const t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vg(i,e){i.uniform1iv(this.addr,e)}function _g(i,e){i.uniform2iv(this.addr,e)}function xg(i,e){i.uniform3iv(this.addr,e)}function yg(i,e){i.uniform4iv(this.addr,e)}function bg(i,e){i.uniform1uiv(this.addr,e)}function Mg(i,e){i.uniform2uiv(this.addr,e)}function Sg(i,e){i.uniform3uiv(this.addr,e)}function wg(i,e){i.uniform4uiv(this.addr,e)}function Eg(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||xu,s[a])}function Tg(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||bu,s[a])}function Ag(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Mu,s[a])}function Rg(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||yu,s[a])}function Cg(i){switch(i){case 5126:return ug;case 35664:return hg;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return vg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return yg;case 5125:return bg;case 36294:return Mg;case 36295:return Sg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}class Pg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cg(t.type)}}class Dg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cg(t.type)}}class Lg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function pc(i,e){i.seq.push(e),i.map[e.id]=e}function Ug(i,e,t){const n=i.name,r=n.length;for(Ia.lastIndex=0;;){const s=Ia.exec(n),a=Ia.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){pc(t,c===void 0?new Pg(o,i,e):new Dg(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Lg(o),pc(t,h)),t=h}}}class Ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ug(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function mc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ig=37297;let Fg=0;function Ng(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const gc=new Xe;function Og(i){it._getMatrix(gc,it.workingColorSpace,i);const e=`mat3( ${gc.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Fs:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ng(i.getShaderSource(e),o)}else return s}function zg(i,e){const t=Og(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Bg(i,e){let t;switch(e){case Sh:t="Linear";break;case wh:t="Reinhard";break;case Eh:t="Cineon";break;case Vo:t="ACESFilmic";break;case Ah:t="AgX";break;case Ho:t="Neutral";break;case Th:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Es=new C;function kg(){it.getLuminanceCoefficients(Es);const i=Es.x.toFixed(4),e=Es.y.toFixed(4),t=Es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function Vg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Pr(i){return i!==""}function _c(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(i){return i.replace(Wg,qg)}const Xg=new Map;function qg(i,e){let t=Ye[e];if(t===void 0){const n=Xg.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fo(t)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(i){return i.replace(Yg,$g)}function $g(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Zg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function Jg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yc:e="ENVMAP_BLENDING_MULTIPLY";break;case bh:e="ENVMAP_BLENDING_MIX";break;case Mh:e="ENVMAP_BLENDING_ADD";break}return e}function Qg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ev(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=jg(t),c=Zg(t),u=Kg(t),h=Jg(t),d=Qg(t),f=Gg(t),m=Vg(s),v=r.createProgram();let g,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Pr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Pr).join(`
`),p.length>0&&(p+=`
`)):(g=[bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),p=[bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Bg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,zg("linearToOutputTexel",t.outputColorSpace),kg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),a=Fo(a),a=_c(a,t),a=xc(a,t),o=Fo(o),o=_c(o,t),o=xc(o,t),a=yc(a),o=yc(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+g+a,M=w+p+o,D=mc(r,r.VERTEX_SHADER,S),T=mc(r,r.FRAGMENT_SHADER,M);r.attachShader(v,D),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(P){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(v)||"",z=r.getShaderInfoLog(D)||"",G=r.getShaderInfoLog(T)||"",W=I.trim(),H=z.trim(),Z=G.trim();let k=!0,ie=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,D,T);else{const oe=vc(r,D,"vertex"),de=vc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+oe+`
`+de)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||Z==="")&&(ie=!1);ie&&(P.diagnostics={runnable:k,programLog:W,vertexShader:{log:H,prefix:g},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(D),r.deleteShader(T),L=new Ls(r,v),y=Hg(r,v)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,Ig)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=T,this}let tv=0;class nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new iv(e),t.set(e,n)),n}}class iv{constructor(e){this.id=tv++,this.code=e,this.usedTimes=0}}function rv(i,e,t,n,r,s,a){const o=new Jo,l=new nv,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,b,P,I,z){const G=I.fog,W=z.geometry,H=y.isMeshStandardMaterial?I.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),k=Z&&Z.mapping===Xs?Z.image.height:null,ie=m[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const oe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,de=oe!==void 0?oe.length:0;let Fe=0;W.morphAttributes.position!==void 0&&(Fe=1),W.morphAttributes.normal!==void 0&&(Fe=2),W.morphAttributes.color!==void 0&&(Fe=3);let at,ht,rt,Y;if(ie){const st=Pn[ie];at=st.vertexShader,ht=st.fragmentShader}else at=y.vertexShader,ht=y.fragmentShader,l.update(y),rt=l.getVertexShaderID(y),Y=l.getFragmentShaderID(y);const J=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Be=z.isInstancedMesh===!0,Te=z.isBatchedMesh===!0,Qe=!!y.map,Ht=!!y.matcap,R=!!Z,mt=!!y.aoMap,Ve=!!y.lightMap,Ne=!!y.bumpMap,ye=!!y.normalMap,gt=!!y.displacementMap,be=!!y.emissiveMap,qe=!!y.metalnessMap,It=!!y.roughnessMap,Mt=y.anisotropy>0,E=y.clearcoat>0,_=y.dispersion>0,O=y.iridescence>0,q=y.sheen>0,K=y.transmission>0,X=Mt&&!!y.anisotropyMap,Ee=E&&!!y.clearcoatMap,re=E&&!!y.clearcoatNormalMap,Me=E&&!!y.clearcoatRoughnessMap,Se=O&&!!y.iridescenceMap,te=O&&!!y.iridescenceThicknessMap,he=q&&!!y.sheenColorMap,Ue=q&&!!y.sheenRoughnessMap,we=!!y.specularMap,le=!!y.specularColorMap,We=!!y.specularIntensityMap,U=K&&!!y.transmissionMap,ne=K&&!!y.thicknessMap,se=!!y.gradientMap,me=!!y.alphaMap,Q=y.alphaTest>0,j=!!y.alphaHash,xe=!!y.extensions;let Ge=Ln;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const dt={shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:at,fragmentShader:ht,defines:y.defines,customVertexShaderID:rt,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Te,batchingColor:Te&&z._colorsTexture!==null,instancing:Be,instancingColor:Be&&z.instanceColor!==null,instancingMorph:Be&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:fi,alphaToCoverage:!!y.alphaToCoverage,map:Qe,matcap:Ht,envMap:R,envMapMode:R&&Z.mapping,envMapCubeUVHeight:k,aoMap:mt,lightMap:Ve,bumpMap:Ne,normalMap:ye,displacementMap:d&&gt,emissiveMap:be,normalMapObjectSpace:ye&&y.normalMapType===Dh,normalMapTangentSpace:ye&&y.normalMapType===nu,metalnessMap:qe,roughnessMap:It,anisotropy:Mt,anisotropyMap:X,clearcoat:E,clearcoatMap:Ee,clearcoatNormalMap:re,clearcoatRoughnessMap:Me,dispersion:_,iridescence:O,iridescenceMap:Se,iridescenceThicknessMap:te,sheen:q,sheenColorMap:he,sheenRoughnessMap:Ue,specularMap:we,specularColorMap:le,specularIntensityMap:We,transmission:K,transmissionMap:U,thicknessMap:ne,gradientMap:se,opaque:y.transparent===!1&&y.blending===ar&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:Q,alphaHash:j,combine:y.combine,mapUv:Qe&&v(y.map.channel),aoMapUv:mt&&v(y.aoMap.channel),lightMapUv:Ve&&v(y.lightMap.channel),bumpMapUv:Ne&&v(y.bumpMap.channel),normalMapUv:ye&&v(y.normalMap.channel),displacementMapUv:gt&&v(y.displacementMap.channel),emissiveMapUv:be&&v(y.emissiveMap.channel),metalnessMapUv:qe&&v(y.metalnessMap.channel),roughnessMapUv:It&&v(y.roughnessMap.channel),anisotropyMapUv:X&&v(y.anisotropyMap.channel),clearcoatMapUv:Ee&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(y.sheenRoughnessMap.channel),specularMapUv:we&&v(y.specularMap.channel),specularColorMapUv:le&&v(y.specularColorMap.channel),specularIntensityMapUv:We&&v(y.specularIntensityMap.channel),transmissionMapUv:U&&v(y.transmissionMap.channel),thicknessMapUv:ne&&v(y.thicknessMap.channel),alphaMapUv:me&&v(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ye||Mt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Qe||me),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Fe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Qe&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===lt,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&it.getTransfer(y.emissiveMap.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mn,flipSided:y.side===Kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&y.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(w(b,y),S(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function w(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function S(y,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const b=m[y.type];let P;if(b){const I=Pn[b];P=Ed.clone(I.uniforms)}else P=y.uniforms;return P}function D(y,b){let P;for(let I=0,z=u.length;I<z;I++){const G=u[I];if(G.cacheKey===b){P=G,++P.usedTimes;break}}return P===void 0&&(P=new ev(i,b,y,s),u.push(P)),P}function T(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:D,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:L}}function sv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function av(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,f,m,v,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function o(h,d,f,m,v,g){const p=a(h,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,m,v,g){const p=a(h,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||av),n.length>1&&n.sort(d||Mc),r.length>1&&r.sort(d||Mc)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function ov(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Sc,i.set(n,[a])):r>=s.length?(a=new Sc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function lv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new fe};break;case"SpotLight":t={position:new C,direction:new C,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function cv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let uv=0;function hv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dv(i){const e=new lv,t=cv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const r=new C,s=new Je,a=new Je;function o(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,w=0,S=0,M=0,D=0,T=0,A=0;c.sort(hv);for(let y=0,b=c.length;y<b;y++){const P=c[y],I=P.color,z=P.intensity,G=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=I.r*z,h+=I.g*z,d+=I.b*z;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],z);A++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,k=t.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=P.shadow.matrix,w++}n.directional[f]=H,f++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(I).multiplyScalar(z),H.distance=G,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[v]=H;const Z=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,Z.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[v]=Z.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=W,M++}v++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(I).multiplyScalar(z),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=H,g++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Z=P.shadow,k=t.get(P);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=P.shadow.matrix,S++}n.point[m]=H,m++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(z),H.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=H,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==w||L.numPointShadows!==S||L.numSpotShadows!==M||L.numSpotMaps!==D||L.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,L.directionalLength=f,L.pointLength=m,L.spotLength=v,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=w,L.numPointShadows=S,L.numSpotShadows=M,L.numSpotMaps=D,L.numLightProbes=A,n.version=uv++)}function l(c,u){let h=0,d=0,f=0,m=0,v=0;const g=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const S=c[p];if(S.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(S.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(S.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(S.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function wc(i){const e=new dv(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function fv(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new wc(i),e.set(r,[o])):s>=a.length?(o=new wc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gv(i,e,t){let n=new qr;const r=new _e,s=new _e,a=new He,o=new nl({depthPacking:Ph}),l=new Od,c={},u=t.maxTextureSize,h={[di]:Kt,[Kt]:di,[Mn]:Mn},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:pv,fragmentShader:mv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Yt;m.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ft(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let p=this.type;this.render=function(T,A,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const y=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Yn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=p!==Vn&&this.type===Vn,G=p===Vn&&this.type!==Vn;for(let W=0,H=T.length;W<H;W++){const Z=T[W],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ie=k.getFrameExtents();if(r.multiply(ie),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,k.mapSize.y=s.y)),k.map===null||z===!0||G===!0){const de=this.type!==Vn?{minFilter:St,magFilter:St}:{};k.map!==null&&k.map.dispose(),k.map=new un(r.x,r.y,de),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const oe=k.getViewportCount();for(let de=0;de<oe;de++){const Fe=k.getViewport(de);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),I.viewport(a),k.updateMatrices(Z,de),n=k.getFrustum(),M(A,L,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===Vn&&w(k,L),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,b,P)};function w(T,A){const L=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new un(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,L,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,L,f,v,null)}function S(T,A,L,y){let b=null;const P=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=L.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=b.uuid,z=A.uuid;let G=c[I];G===void 0&&(G={},c[I]=G);let W=G[z];W===void 0&&(W=b.clone(),G[z]=W,A.addEventListener("dispose",D)),b=W}if(b.visible=A.visible,b.wireframe=A.wireframe,y===Vn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const I=i.properties.get(b);I.light=L}return b}function M(T,A,L,y,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Vn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const z=e.update(T),G=T.material;if(Array.isArray(G)){const W=z.groups;for(let H=0,Z=W.length;H<Z;H++){const k=W[H],ie=G[k.materialIndex];if(ie&&ie.visible){const oe=S(T,ie,y,b);T.onBeforeShadow(i,T,A,L,z,oe,k),i.renderBufferDirect(L,null,z,oe,T,k),T.onAfterShadow(i,T,A,L,z,oe,k)}}}else if(G.visible){const W=S(T,G,y,b);T.onBeforeShadow(i,T,A,L,z,W,null),i.renderBufferDirect(L,null,z,W,T,null),T.onAfterShadow(i,T,A,L,z,W,null)}}const I=T.children;for(let z=0,G=I.length;z<G;z++)M(I[z],A,L,y,b)}function D(T){T.target.removeEventListener("dispose",D);for(const L in c){const y=c[L],b=T.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const vv={[$a]:ja,[Za]:Qa,[Ka]:eo,[hr]:Ja,[ja]:$a,[Qa]:Za,[eo]:Ka,[Ja]:hr};function _v(i,e){function t(){let U=!1;const ne=new He;let se=null;const me=new He(0,0,0,0);return{setMask:function(Q){se!==Q&&!U&&(i.colorMask(Q,Q,Q,Q),se=Q)},setLocked:function(Q){U=Q},setClear:function(Q,j,xe,Ge,dt){dt===!0&&(Q*=Ge,j*=Ge,xe*=Ge),ne.set(Q,j,xe,Ge),me.equals(ne)===!1&&(i.clearColor(Q,j,xe,Ge),me.copy(ne))},reset:function(){U=!1,se=null,me.set(-1,0,0,0)}}}function n(){let U=!1,ne=!1,se=null,me=null,Q=null;return{setReversed:function(j){if(ne!==j){const xe=e.get("EXT_clip_control");j?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ne=j;const Ge=Q;Q=null,this.setClear(Ge)}},getReversed:function(){return ne},setTest:function(j){j?J(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(j){se!==j&&!U&&(i.depthMask(j),se=j)},setFunc:function(j){if(ne&&(j=vv[j]),me!==j){switch(j){case $a:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case Za:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case Ja:i.depthFunc(i.GEQUAL);break;case Qa:i.depthFunc(i.GREATER);break;case eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=j}},setLocked:function(j){U=j},setClear:function(j){Q!==j&&(ne&&(j=1-j),i.clearDepth(j),Q=j)},reset:function(){U=!1,se=null,me=null,Q=null,ne=!1}}}function r(){let U=!1,ne=null,se=null,me=null,Q=null,j=null,xe=null,Ge=null,dt=null;return{setTest:function(st){U||(st?J(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(st){ne!==st&&!U&&(i.stencilMask(st),ne=st)},setFunc:function(st,Nn,Rn){(se!==st||me!==Nn||Q!==Rn)&&(i.stencilFunc(st,Nn,Rn),se=st,me=Nn,Q=Rn)},setOp:function(st,Nn,Rn){(j!==st||xe!==Nn||Ge!==Rn)&&(i.stencilOp(st,Nn,Rn),j=st,xe=Nn,Ge=Rn)},setLocked:function(st){U=st},setClear:function(st){dt!==st&&(i.clearStencil(st),dt=st)},reset:function(){U=!1,ne=null,se=null,me=null,Q=null,j=null,xe=null,Ge=null,dt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,w=null,S=null,M=null,D=null,T=null,A=new fe(0,0,0),L=0,y=!1,b=null,P=null,I=null,z=null,G=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=Z>=2);let ie=null,oe={};const de=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),at=new He().fromArray(de),ht=new He().fromArray(Fe);function rt(U,ne,se,me){const Q=new Uint8Array(4),j=i.createTexture();i.bindTexture(U,j),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<se;xe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ne+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return j}const Y={};Y[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(hr),Ne(!1),ye(_l),J(i.CULL_FACE),mt(Yn);function J(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function ge(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Be(U,ne){return h[U]!==ne?(i.bindFramebuffer(U,ne),h[U]=ne,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ne),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Te(U,ne){let se=f,me=!1;if(U){se=d.get(ne),se===void 0&&(se=[],d.set(ne,se));const Q=U.textures;if(se.length!==Q.length||se[0]!==i.COLOR_ATTACHMENT0){for(let j=0,xe=Q.length;j<xe;j++)se[j]=i.COLOR_ATTACHMENT0+j;se.length=Q.length,me=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,me=!0);me&&i.drawBuffers(se)}function Qe(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const Ht={[Ti]:i.FUNC_ADD,[rh]:i.FUNC_SUBTRACT,[sh]:i.FUNC_REVERSE_SUBTRACT};Ht[ah]=i.MIN,Ht[oh]=i.MAX;const R={[lh]:i.ZERO,[ch]:i.ONE,[uh]:i.SRC_COLOR,[qa]:i.SRC_ALPHA,[gh]:i.SRC_ALPHA_SATURATE,[ph]:i.DST_COLOR,[dh]:i.DST_ALPHA,[hh]:i.ONE_MINUS_SRC_COLOR,[Ya]:i.ONE_MINUS_SRC_ALPHA,[mh]:i.ONE_MINUS_DST_COLOR,[fh]:i.ONE_MINUS_DST_ALPHA,[vh]:i.CONSTANT_COLOR,[_h]:i.ONE_MINUS_CONSTANT_COLOR,[xh]:i.CONSTANT_ALPHA,[yh]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(U,ne,se,me,Q,j,xe,Ge,dt,st){if(U===Yn){v===!0&&(ge(i.BLEND),v=!1);return}if(v===!1&&(J(i.BLEND),v=!0),U!==ih){if(U!==g||st!==y){if((p!==Ti||M!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,M=Ti),st)switch(U){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,S=null,D=null,T=null,A.set(0,0,0),L=0,g=U,y=st}return}Q=Q||ne,j=j||se,xe=xe||me,(ne!==p||Q!==M)&&(i.blendEquationSeparate(Ht[ne],Ht[Q]),p=ne,M=Q),(se!==w||me!==S||j!==D||xe!==T)&&(i.blendFuncSeparate(R[se],R[me],R[j],R[xe]),w=se,S=me,D=j,T=xe),(Ge.equals(A)===!1||dt!==L)&&(i.blendColor(Ge.r,Ge.g,Ge.b,dt),A.copy(Ge),L=dt),g=U,y=!1}function Ve(U,ne){U.side===Mn?ge(i.CULL_FACE):J(i.CULL_FACE);let se=U.side===Kt;ne&&(se=!se),Ne(se),U.blending===ar&&U.transparent===!1?mt(Yn):mt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const me=U.stencilWrite;o.setTest(me),me&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(U){b!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),b=U)}function ye(U){U!==th?(J(i.CULL_FACE),U!==P&&(U===_l?i.cullFace(i.BACK):U===nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),P=U}function gt(U){U!==I&&(H&&i.lineWidth(U),I=U)}function be(U,ne,se){U?(J(i.POLYGON_OFFSET_FILL),(z!==ne||G!==se)&&(i.polygonOffset(ne,se),z=ne,G=se)):ge(i.POLYGON_OFFSET_FILL)}function qe(U){U?J(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function It(U){U===void 0&&(U=i.TEXTURE0+W-1),ie!==U&&(i.activeTexture(U),ie=U)}function Mt(U,ne,se){se===void 0&&(ie===null?se=i.TEXTURE0+W-1:se=ie);let me=oe[se];me===void 0&&(me={type:void 0,texture:void 0},oe[se]=me),(me.type!==U||me.texture!==ne)&&(ie!==se&&(i.activeTexture(se),ie=se),i.bindTexture(U,ne||Y[U]),me.type=U,me.texture=ne)}function E(){const U=oe[ie];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(U){at.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),at.copy(U))}function Ue(U){ht.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ht.copy(U))}function we(U,ne){let se=c.get(ne);se===void 0&&(se=new WeakMap,c.set(ne,se));let me=se.get(U);me===void 0&&(me=i.getUniformBlockIndex(ne,U.name),se.set(U,me))}function le(U,ne){const me=c.get(ne).get(U);l.get(ne)!==me&&(i.uniformBlockBinding(ne,me,U.__bindingPointIndex),l.set(ne,me))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,oe={},h={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,w=null,S=null,M=null,D=null,T=null,A=new fe(0,0,0),L=0,y=!1,b=null,P=null,I=null,z=null,G=null,at.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:ge,bindFramebuffer:Be,drawBuffers:Te,useProgram:Qe,setBlending:mt,setMaterial:Ve,setFlipSided:Ne,setCullFace:ye,setLineWidth:gt,setPolygonOffset:be,setScissorTest:qe,activeTexture:It,bindTexture:Mt,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:Se,texImage3D:te,updateUBOMapping:we,uniformBlockBinding:le,texStorage2D:re,texStorage3D:Me,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:Ee,scissor:he,viewport:Ue,reset:We}}function xv(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,_){return f?new OffscreenCanvas(E,_):Os("canvas")}function v(E,_,O){let q=1;const K=Mt(E);if((K.width>O||K.height>O)&&(q=O/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(q*K.width),Ee=Math.floor(q*K.height);h===void 0&&(h=m(X,Ee));const re=_?m(X,Ee):h;return re.width=X,re.height=Ee,re.getContext("2d").drawImage(E,0,0,X,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+Ee+")."),re}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,_,O,q,K=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=_;if(_===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),_===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),_===i.RGBA){const Ee=K?Fs:it.getTransfer(q);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=Ee===lt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(E,_){let O;return E?_===null||_===Kn||_===Nr?O=i.DEPTH24_STENCIL8:_===mn?O=i.DEPTH32F_STENCIL8:_===Fr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Kn||_===Nr?O=i.DEPTH_COMPONENT24:_===mn?O=i.DEPTH_COMPONENT32F:_===Fr&&(O=i.DEPTH_COMPONENT16),O}function D(E,_){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==St&&E.minFilter!==Ct?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){const _=E.target;_.removeEventListener("dispose",T),L(_),_.isVideoTexture&&u.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),b(_)}function L(E){const _=n.get(E);if(_.__webglInit===void 0)return;const O=E.source,q=d.get(O);if(q){const K=q[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(E),Object.keys(q).length===0&&d.delete(O)}n.remove(E)}function y(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const O=E.source,q=d.get(O);delete q[_.__cacheKey],a.memory.textures--}function b(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let K=0;K<_.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[q][K]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=E.textures;for(let q=0,K=O.length;q<K;q++){const X=n.get(O[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(E)}let P=0;function I(){P=0}function z(){const E=P;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),P+=1,E}function G(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function W(E,_){const O=n.get(E);if(E.isVideoTexture&&qe(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,E,_);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function H(E,_){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){Y(O,E,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function Z(E,_){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){Y(O,E,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function k(E,_){const O=n.get(E);if(E.version>0&&O.__version!==E.version){J(O,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const ie={[Is]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},oe={[St]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},de={[Lh]:i.NEVER,[zh]:i.ALWAYS,[Uh]:i.LESS,[iu]:i.LEQUAL,[Ih]:i.EQUAL,[Oh]:i.GEQUAL,[Fh]:i.GREATER,[Nh]:i.NOTEQUAL};function Fe(E,_){if(_.type===mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ct||_.magFilter===na||_.magFilter===Qr||_.magFilter===qn||_.minFilter===Ct||_.minFilter===na||_.minFilter===Qr||_.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ie[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ie[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ie[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,oe[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,oe[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,de[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===St||_.minFilter!==Qr&&_.minFilter!==qn||_.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function at(E,_){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",T));const q=_.source;let K=d.get(q);K===void 0&&(K={},d.set(q,K));const X=G(_);if(X!==E.__cacheKey){K[X]===void 0&&(K[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[X].usedTimes++;const Ee=K[E.__cacheKey];Ee!==void 0&&(K[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(_)),E.__cacheKey=X,E.__webglTexture=K[X].texture}return O}function ht(E,_,O){return Math.floor(Math.floor(E/O)/_)}function rt(E,_,O,q){const X=E.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,q,_.data);else{X.sort((te,he)=>te.start-he.start);let Ee=0;for(let te=1;te<X.length;te++){const he=X[Ee],Ue=X[te],we=he.start+he.count,le=ht(Ue.start,_.width,4),We=ht(he.start,_.width,4);Ue.start<=we+1&&le===We&&ht(Ue.start+Ue.count-1,_.width,4)===le?he.count=Math.max(he.count,Ue.start+Ue.count-he.start):(++Ee,X[Ee]=Ue)}X.length=Ee+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let te=0,he=X.length;te<he;te++){const Ue=X[te],we=Math.floor(Ue.start/4),le=Math.ceil(Ue.count/4),We=we%_.width,U=Math.floor(we/_.width),ne=le,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,We,U,ne,se,O,q,_.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function Y(E,_,O){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const K=at(E,_),X=_.source;t.bindTexture(q,E.__webglTexture,i.TEXTURE0+O);const Ee=n.get(X);if(X.version!==Ee.__version||K===!0){t.activeTexture(i.TEXTURE0+O);const re=it.getPrimaries(it.workingColorSpace),Me=_.colorSpace===si?null:it.getPrimaries(_.colorSpace),Se=_.colorSpace===si||re===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let te=v(_.image,!1,r.maxTextureSize);te=It(_,te);const he=s.convert(_.format,_.colorSpace),Ue=s.convert(_.type);let we=S(_.internalFormat,he,Ue,_.colorSpace,_.isVideoTexture);Fe(q,_);let le;const We=_.mipmaps,U=_.isVideoTexture!==!0,ne=Ee.__version===void 0||K===!0,se=X.dataReady,me=D(_,te);if(_.isDepthTexture)we=M(_.format===zr,_.type),ne&&(U?t.texStorage2D(i.TEXTURE_2D,1,we,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,we,te.width,te.height,0,he,Ue,null));else if(_.isDataTexture)if(We.length>0){U&&ne&&t.texStorage2D(i.TEXTURE_2D,me,we,We[0].width,We[0].height);for(let Q=0,j=We.length;Q<j;Q++)le=We[Q],U?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,le.width,le.height,he,Ue,le.data):t.texImage2D(i.TEXTURE_2D,Q,we,le.width,le.height,0,he,Ue,le.data);_.generateMipmaps=!1}else U?(ne&&t.texStorage2D(i.TEXTURE_2D,me,we,te.width,te.height),se&&rt(_,te,he,Ue)):t.texImage2D(i.TEXTURE_2D,0,we,te.width,te.height,0,he,Ue,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,we,We[0].width,We[0].height,te.depth);for(let Q=0,j=We.length;Q<j;Q++)if(le=We[Q],_.format!==kt)if(he!==null)if(U){if(se)if(_.layerUpdates.size>0){const xe=ec(le.width,le.height,_.format,_.type);for(const Ge of _.layerUpdates){const dt=le.data.subarray(Ge*xe/le.data.BYTES_PER_ELEMENT,(Ge+1)*xe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ge,le.width,le.height,1,he,dt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,te.depth,he,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,we,le.width,le.height,te.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,te.depth,he,Ue,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,we,le.width,le.height,te.depth,0,he,Ue,le.data)}else{U&&ne&&t.texStorage2D(i.TEXTURE_2D,me,we,We[0].width,We[0].height);for(let Q=0,j=We.length;Q<j;Q++)le=We[Q],_.format!==kt?he!==null?U?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,le.width,le.height,he,le.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,we,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,le.width,le.height,he,Ue,le.data):t.texImage2D(i.TEXTURE_2D,Q,we,le.width,le.height,0,he,Ue,le.data)}else if(_.isDataArrayTexture)if(U){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,we,te.width,te.height,te.depth),se)if(_.layerUpdates.size>0){const Q=ec(te.width,te.height,_.format,_.type);for(const j of _.layerUpdates){const xe=te.data.subarray(j*Q/te.data.BYTES_PER_ELEMENT,(j+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,he,Ue,xe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,he,Ue,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,te.width,te.height,te.depth,0,he,Ue,te.data);else if(_.isData3DTexture)U?(ne&&t.texStorage3D(i.TEXTURE_3D,me,we,te.width,te.height,te.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,he,Ue,te.data)):t.texImage3D(i.TEXTURE_3D,0,we,te.width,te.height,te.depth,0,he,Ue,te.data);else if(_.isFramebufferTexture){if(ne)if(U)t.texStorage2D(i.TEXTURE_2D,me,we,te.width,te.height);else{let Q=te.width,j=te.height;for(let xe=0;xe<me;xe++)t.texImage2D(i.TEXTURE_2D,xe,we,Q,j,0,he,Ue,null),Q>>=1,j>>=1}}else if(We.length>0){if(U&&ne){const Q=Mt(We[0]);t.texStorage2D(i.TEXTURE_2D,me,we,Q.width,Q.height)}for(let Q=0,j=We.length;Q<j;Q++)le=We[Q],U?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he,Ue,le):t.texImage2D(i.TEXTURE_2D,Q,we,he,Ue,le);_.generateMipmaps=!1}else if(U){if(ne){const Q=Mt(te);t.texStorage2D(i.TEXTURE_2D,me,we,Q.width,Q.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ue,te)}else t.texImage2D(i.TEXTURE_2D,0,we,he,Ue,te);g(_)&&p(q),Ee.__version=X.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function J(E,_,O){if(_.image.length!==6)return;const q=at(E,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const X=n.get(K);if(K.version!==X.__version||q===!0){t.activeTexture(i.TEXTURE0+O);const Ee=it.getPrimaries(it.workingColorSpace),re=_.colorSpace===si?null:it.getPrimaries(_.colorSpace),Me=_.colorSpace===si||Ee===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Se=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,he=[];for(let j=0;j<6;j++)!Se&&!te?he[j]=v(_.image[j],!0,r.maxCubemapSize):he[j]=te?_.image[j].image:_.image[j],he[j]=It(_,he[j]);const Ue=he[0],we=s.convert(_.format,_.colorSpace),le=s.convert(_.type),We=S(_.internalFormat,we,le,_.colorSpace),U=_.isVideoTexture!==!0,ne=X.__version===void 0||q===!0,se=K.dataReady;let me=D(_,Ue);Fe(i.TEXTURE_CUBE_MAP,_);let Q;if(Se){U&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,We,Ue.width,Ue.height);for(let j=0;j<6;j++){Q=he[j].mipmaps;for(let xe=0;xe<Q.length;xe++){const Ge=Q[xe];_.format!==kt?we!==null?U?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,Ge.width,Ge.height,we,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,We,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,Ge.width,Ge.height,we,le,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,We,Ge.width,Ge.height,0,we,le,Ge.data)}}}else{if(Q=_.mipmaps,U&&ne){Q.length>0&&me++;const j=Mt(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,We,j.width,j.height)}for(let j=0;j<6;j++)if(te){U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,he[j].width,he[j].height,we,le,he[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,We,he[j].width,he[j].height,0,we,le,he[j].data);for(let xe=0;xe<Q.length;xe++){const dt=Q[xe].image[j].image;U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,dt.width,dt.height,we,le,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,We,dt.width,dt.height,0,we,le,dt.data)}}else{U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,le,he[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,We,we,le,he[j]);for(let xe=0;xe<Q.length;xe++){const Ge=Q[xe];U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,we,le,Ge.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,We,we,le,Ge.image[j])}}}g(_)&&p(i.TEXTURE_CUBE_MAP),X.__version=K.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ge(E,_,O,q,K,X){const Ee=s.convert(O.format,O.colorSpace),re=s.convert(O.type),Me=S(O.internalFormat,Ee,re,O.colorSpace),Se=n.get(_),te=n.get(O);if(te.__renderTarget=_,!Se.__hasExternalTextures){const he=Math.max(1,_.width>>X),Ue=Math.max(1,_.height>>X);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,X,Me,he,Ue,_.depth,0,Ee,re,null):t.texImage2D(K,X,Me,he,Ue,0,Ee,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,te.__webglTexture,0,gt(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,te.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(E,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const q=_.depthTexture,K=q&&q.isDepthTexture?q.type:null,X=M(_.stencilBuffer,K),Ee=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=gt(_);be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,X,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,E)}else{const q=_.textures;for(let K=0;K<q.length;K++){const X=q[K],Ee=s.convert(X.format,X.colorSpace),re=s.convert(X.type),Me=S(X.internalFormat,Ee,re,X.colorSpace),Se=gt(_);O&&be(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Me,_.width,_.height):be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,Me,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Me,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const K=q.__webglTexture,X=gt(_);if(_.depthTexture.format===Or)be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(_.depthTexture.format===zr)be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Qe(E){const _=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=q}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=E.texture.mipmaps;q&&q.length>0?Te(_.__webglFramebuffer[0],E):Te(_.__webglFramebuffer,E)}else if(O){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),Be(_.__webglDepthbuffer[q],E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Be(_.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(E,_,O){const q=n.get(E);_!==void 0&&ge(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Qe(E)}function R(E){const _=E.texture,O=n.get(E),q=n.get(_);E.addEventListener("dispose",A);const K=E.textures,X=E.isWebGLCubeRenderTarget===!0,Ee=K.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let Me=0;Me<_.mipmaps.length;Me++)O.__webglFramebuffer[re][Me]=i.createFramebuffer()}else O.__webglFramebuffer[re]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)O.__webglFramebuffer[re]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let re=0,Me=K.length;re<Me;re++){const Se=n.get(K[re]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&be(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const Me=K[re];O.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const Se=s.convert(Me.format,Me.colorSpace),te=s.convert(Me.type),he=S(Me.internalFormat,Se,te,Me.colorSpace,E.isXRRenderTarget===!0),Ue=gt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,he,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,O.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)ge(O.__webglFramebuffer[re][Me],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me);else ge(O.__webglFramebuffer[re],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);g(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let re=0,Me=K.length;re<Me;re++){const Se=K[re],te=n.get(Se);let he=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,te.__webglTexture),Fe(he,Se),ge(O.__webglFramebuffer,E,Se,i.COLOR_ATTACHMENT0+re,he,0),g(Se)&&p(he)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),Fe(re,_),_.mipmaps&&_.mipmaps.length>0)for(let Me=0;Me<_.mipmaps.length;Me++)ge(O.__webglFramebuffer[Me],E,_,i.COLOR_ATTACHMENT0,re,Me);else ge(O.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,re,0);g(_)&&p(re),t.unbindTexture()}E.depthBuffer&&Qe(E)}function mt(E){const _=E.textures;for(let O=0,q=_.length;O<q;O++){const K=_[O];if(g(K)){const X=w(E),Ee=n.get(K).__webglTexture;t.bindTexture(X,Ee),p(X),t.unbindTexture()}}}const Ve=[],Ne=[];function ye(E){if(E.samples>0){if(be(E)===!1){const _=E.textures,O=E.width,q=E.height;let K=i.COLOR_BUFFER_BIT;const X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(E),re=_.length>1;if(re)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Me=E.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);const te=n.get(_[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,K,i.NEAREST),l===!0&&(Ve.length=0,Ne.length=0,Ve.push(i.COLOR_ATTACHMENT0+Se),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ve.push(X),Ne.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);const te=n.get(_[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function gt(E){return Math.min(r.maxSamples,E.samples)}function be(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function qe(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function It(E,_){const O=E.colorSpace,q=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==fi&&O!==si&&(it.getTransfer(O)===lt?(q!==kt||K!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function Mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=Ht,this.setupRenderTarget=R,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=be}function yv(i,e){function t(n,r=si){let s;const a=it.getTransfer(r);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jc)return i.BYTE;if(n===Zc)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===Qc)return i.ALPHA;if(n===eu)return i.RGB;if(n===kt)return i.RGBA;if(n===Or)return i.DEPTH_COMPONENT;if(n===zr)return i.DEPTH_STENCIL;if(n===qs)return i.RED;if(n===Yo)return i.RED_INTEGER;if(n===tu)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===Rs||n===Cs||n===Ps||n===Ds)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===so||n===ao||n===oo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ro)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===co||n===uo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===lo||n===co)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===uo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ho||n===fo||n===po||n===mo||n===go||n===vo||n===_o||n===xo||n===yo||n===bo||n===Mo||n===So||n===wo||n===Eo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ho)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===To||n===Ao||n===Ro)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===To)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ro)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Co||n===Po||n===Do||n===Lo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Co)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new pu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dt({vertexShader:bv,fragmentShader:Mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wv extends Ui{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",g=new Sv,p={},w=t.getContextAttributes();let S=null,M=null;const D=[],T=[],A=new _e;let L=null;const y=new qt;y.viewport=new He;const b=new qt;b.viewport=new He;const P=[y,b],I=new Vd;let z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=D[Y];return J===void 0&&(J=new Sa,D[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=D[Y];return J===void 0&&(J=new Sa,D[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=D[Y];return J===void 0&&(J=new Sa,D[Y]=J),J.getHandSpace()};function W(Y){const J=T.indexOf(Y.inputSource);if(J===-1)return;const ge=D[J];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,c||a),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<D.length;Y++){const J=T[Y];J!==null&&(T[Y]=null,D[Y].disconnect(J))}z=null,G=null,g.reset();for(const Y in p)delete p[Y];e.setRenderTarget(S),f=null,d=null,h=null,r=null,M=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Z),w.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Be=null,Te=null;w.depth&&(Te=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=w.stencil?zr:Or,Be=w.stencil?Nr:Kn);const Qe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Qe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new un(d.textureWidth,d.textureHeight,{format:kt,type:Tn,depthTexture:new $s(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new un(f.framebufferWidth,f.framebufferHeight,{format:kt,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),rt.setContext(r),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(Y){for(let J=0;J<Y.removed.length;J++){const ge=Y.removed[J],Be=T.indexOf(ge);Be>=0&&(T[Be]=null,D[Be].disconnect(ge))}for(let J=0;J<Y.added.length;J++){const ge=Y.added[J];let Be=T.indexOf(ge);if(Be===-1){for(let Qe=0;Qe<D.length;Qe++)if(Qe>=T.length){T.push(ge),Be=Qe;break}else if(T[Qe]===null){T[Qe]=ge,Be=Qe;break}if(Be===-1)break}const Te=D[Be];Te&&Te.connect(ge)}}const k=new C,ie=new C;function oe(Y,J,ge){k.setFromMatrixPosition(J.matrixWorld),ie.setFromMatrixPosition(ge.matrixWorld);const Be=k.distanceTo(ie),Te=J.projectionMatrix.elements,Qe=ge.projectionMatrix.elements,Ht=Te[14]/(Te[10]-1),R=Te[14]/(Te[10]+1),mt=(Te[9]+1)/Te[5],Ve=(Te[9]-1)/Te[5],Ne=(Te[8]-1)/Te[0],ye=(Qe[8]+1)/Qe[0],gt=Ht*Ne,be=Ht*ye,qe=Be/(-Ne+ye),It=qe*-Ne;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(qe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Te[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Mt=Ht+qe,E=R+qe,_=gt-It,O=be+(Be-It),q=mt*R/E*Mt,K=Ve*R/E*Mt;Y.projectionMatrix.makePerspective(_,O,q,K,Mt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function de(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let J=Y.near,ge=Y.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),I.near=b.near=y.near=J,I.far=b.far=y.far=ge,(z!==I.near||G!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,G=I.far),I.layers.mask=Y.layers.mask|6,y.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const Be=Y.parent,Te=I.cameras;de(I,Be);for(let Qe=0;Qe<Te.length;Qe++)de(Te[Qe],Be);Te.length===2?oe(I,y,b):I.projectionMatrix.copy(y.projectionMatrix),Fe(Y,I,Be)};function Fe(Y,J,ge){ge===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Br*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(Y){return p[Y]};let at=null;function ht(Y,J){if(u=J.getViewerPose(c||a),m=J,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Be=!1;ge.length!==I.cameras.length&&(I.cameras.length=0,Be=!0);for(let R=0;R<ge.length;R++){const mt=ge[R];let Ve=null;if(f!==null)Ve=f.getViewport(mt);else{const ye=h.getViewSubImage(d,mt);Ve=ye.viewport,R===0&&(e.setRenderTargetTextures(M,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(M))}let Ne=P[R];Ne===void 0&&(Ne=new qt,Ne.layers.enable(R),Ne.viewport=new He,P[R]=Ne),Ne.matrix.fromArray(mt.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(mt.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),R===0&&(I.matrix.copy(Ne.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Be===!0&&I.cameras.push(Ne)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const R=h.getDepthInformation(ge[0]);R&&R.isValid&&R.texture&&g.init(R,r.renderState)}if(Te&&Te.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let R=0;R<ge.length;R++){const mt=ge[R].camera;if(mt){let Ve=p[mt];Ve||(Ve=new pu,p[mt]=Ve);const Ne=h.getCameraImage(mt);Ve.sourceTexture=Ne}}}}for(let ge=0;ge<D.length;ge++){const Be=T[ge],Te=D[ge];Be!==null&&Te!==void 0&&Te.update(Be,J,c||a)}at&&at(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const rt=new _u;rt.setAnimationLoop(ht),this.setAnimationLoop=function(Y){at=Y},this.dispose=function(){}}}const Mi=new Un,Ev=new Je;function Tv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,cu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,w,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,w,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Kt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Kt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=e.get(p),S=w.envMap,M=w.envMapRotation;S&&(g.envMap.value=S,Mi.copy(M),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),g.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(Mi)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,w,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const w=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Av(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){const M=S.program;n.uniformBlockBinding(w,M)}function c(w,S){let M=r[w.id];M===void 0&&(m(w),M=u(w),r[w.id]=M,w.addEventListener("dispose",g));const D=S.program;n.updateUBOMapping(w,D);const T=e.render.frame;s[w.id]!==T&&(d(w),s[w.id]=T)}function u(w){const S=h();w.__bindingPointIndex=S;const M=i.createBuffer(),D=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const S=r[w.id],M=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=M.length;T<A;T++){const L=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,b=L.length;y<b;y++){const P=L[y];if(f(P,T,y,D)===!0){const I=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let W=0;W<z.length;W++){const H=z[W],Z=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,I+G,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,S,M,D){const T=w.value,A=S+"_"+M;if(D[A]===void 0)return typeof T=="number"||typeof T=="boolean"?D[A]=T:D[A]=T.clone(),!0;{const L=D[A];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return D[A]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function m(w){const S=w.uniforms;let M=0;const D=16;for(let A=0,L=S.length;A<L;A++){const y=Array.isArray(S[A])?S[A]:[S[A]];for(let b=0,P=y.length;b<P;b++){const I=y[b],z=Array.isArray(I.value)?I.value:[I.value];for(let G=0,W=z.length;G<W;G++){const H=z[G],Z=v(H),k=M%D,ie=k%Z.boundary,oe=k+ie;M+=ie,oe!==0&&D-oe<Z.storage&&(M+=D-oe),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=Z.storage}}}const T=M%D;return T>0&&(M+=D-T),w.__size=M,w.__cache={},this}function v(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function g(w){const S=w.target;S.removeEventListener("dispose",g);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Rv{constructor(e={}){const{canvas:t=td(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let D=!1;this._outputColorSpace=ln;let T=0,A=0,L=null,y=-1,b=null;const P=new He,I=new He;let z=null;const G=new fe(0);let W=0,H=t.width,Z=t.height,k=1,ie=null,oe=null;const de=new He(0,0,H,Z),Fe=new He(0,0,H,Z);let at=!1;const ht=new qr;let rt=!1,Y=!1;const J=new Je,ge=new C,Be=new He,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Ht(){return L===null?k:1}let R=n;function mt(x,F){return t.getContext(x,F)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",Q,!1),R===null){const F="webgl2";if(R=mt(F,x),R===null)throw mt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ve,Ne,ye,gt,be,qe,It,Mt,E,_,O,q,K,X,Ee,re,Me,Se,te,he,Ue,we,le,We;function U(){Ve=new zm(R),Ve.init(),we=new yv(R,Ve),Ne=new Dm(R,Ve,e,we),ye=new _v(R,Ve),Ne.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),gt=new Gm(R),be=new sv,qe=new xv(R,Ve,ye,be,Ne,we,gt),It=new Um(M),Mt=new Om(M),E=new qd(R),le=new Cm(R,E),_=new Bm(R,E,gt,le),O=new Hm(R,_,E,gt),te=new Vm(R,Ne,qe),re=new Lm(be),q=new rv(M,It,Mt,Ve,Ne,le,re),K=new Tv(M,be),X=new ov,Ee=new fv(Ve),Se=new Rm(M,It,Mt,ye,O,f,l),Me=new gv(M,O,Ne),We=new Av(R,gt,Ne,ye),he=new Pm(R,Ve,gt),Ue=new km(R,Ve,gt),gt.programs=q.programs,M.capabilities=Ne,M.extensions=Ve,M.properties=be,M.renderLists=X,M.shadowMap=Me,M.state=ye,M.info=gt}U();const ne=new wv(M,R);this.xr=ne,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=Ve.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ve.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(x){x!==void 0&&(k=x,this.setSize(H,Z,!1))},this.getSize=function(x){return x.set(H,Z)},this.setSize=function(x,F,B=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=x,Z=F,t.width=Math.floor(x*k),t.height=Math.floor(F*k),B===!0&&(t.style.width=x+"px",t.style.height=F+"px"),this.setViewport(0,0,x,F)},this.getDrawingBufferSize=function(x){return x.set(H*k,Z*k).floor()},this.setDrawingBufferSize=function(x,F,B){H=x,Z=F,k=B,t.width=Math.floor(x*B),t.height=Math.floor(F*B),this.setViewport(0,0,x,F)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(de)},this.setViewport=function(x,F,B,V){x.isVector4?de.set(x.x,x.y,x.z,x.w):de.set(x,F,B,V),ye.viewport(P.copy(de).multiplyScalar(k).round())},this.getScissor=function(x){return x.copy(Fe)},this.setScissor=function(x,F,B,V){x.isVector4?Fe.set(x.x,x.y,x.z,x.w):Fe.set(x,F,B,V),ye.scissor(I.copy(Fe).multiplyScalar(k).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(x){ye.setScissorTest(at=x)},this.setOpaqueSort=function(x){ie=x},this.setTransparentSort=function(x){oe=x},this.getClearColor=function(x){return x.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(x=!0,F=!0,B=!0){let V=0;if(x){let N=!1;if(L!==null){const ee=L.texture.format;N=ee===jo||ee===$o||ee===Yo}if(N){const ee=L.texture.type,ue=ee===Tn||ee===Kn||ee===Fr||ee===Nr||ee===Xo||ee===qo,ve=Se.getClearColor(),pe=Se.getClearAlpha(),De=ve.r,Oe=ve.g,Re=ve.b;ue?(m[0]=De,m[1]=Oe,m[2]=Re,m[3]=pe,R.clearBufferuiv(R.COLOR,0,m)):(v[0]=De,v[1]=Oe,v[2]=Re,v[3]=pe,R.clearBufferiv(R.COLOR,0,v))}else V|=R.COLOR_BUFFER_BIT}F&&(V|=R.DEPTH_BUFFER_BIT),B&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Se.dispose(),X.dispose(),Ee.dispose(),be.dispose(),It.dispose(),Mt.dispose(),O.dispose(),le.dispose(),We.dispose(),q.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Rn),ne.removeEventListener("sessionend",hl),mi.stop()};function se(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const x=gt.autoReset,F=Me.enabled,B=Me.autoUpdate,V=Me.needsUpdate,N=Me.type;U(),gt.autoReset=x,Me.enabled=F,Me.autoUpdate=B,Me.needsUpdate=V,Me.type=N}function Q(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function j(x){const F=x.target;F.removeEventListener("dispose",j),xe(F)}function xe(x){Ge(x),be.remove(x)}function Ge(x){const F=be.get(x).programs;F!==void 0&&(F.forEach(function(B){q.releaseProgram(B)}),x.isShaderMaterial&&q.releaseShaderCache(x))}this.renderBufferDirect=function(x,F,B,V,N,ee){F===null&&(F=Te);const ue=N.isMesh&&N.matrixWorld.determinant()<0,ve=qu(x,F,B,V,N);ye.setMaterial(V,ue);let pe=B.index,De=1;if(V.wireframe===!0){if(pe=_.getWireframeAttribute(B),pe===void 0)return;De=2}const Oe=B.drawRange,Re=B.attributes.position;let Ke=Oe.start*De,ot=(Oe.start+Oe.count)*De;ee!==null&&(Ke=Math.max(Ke,ee.start*De),ot=Math.min(ot,(ee.start+ee.count)*De)),pe!==null?(Ke=Math.max(Ke,0),ot=Math.min(ot,pe.count)):Re!=null&&(Ke=Math.max(Ke,0),ot=Math.min(ot,Re.count));const bt=ot-Ke;if(bt<0||bt===1/0)return;le.setup(N,V,ve,B,pe);let pt,ut=he;if(pe!==null&&(pt=E.get(pe),ut=Ue,ut.setIndex(pt)),N.isMesh)V.wireframe===!0?(ye.setLineWidth(V.wireframeLinewidth*Ht()),ut.setMode(R.LINES)):ut.setMode(R.TRIANGLES);else if(N.isLine){let Pe=V.linewidth;Pe===void 0&&(Pe=1),ye.setLineWidth(Pe*Ht()),N.isLineSegments?ut.setMode(R.LINES):N.isLineLoop?ut.setMode(R.LINE_LOOP):ut.setMode(R.LINE_STRIP)}else N.isPoints?ut.setMode(R.POINTS):N.isSprite&&ut.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))ut.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pe=N._multiDrawStarts,xt=N._multiDrawCounts,tt=N._multiDrawCount,nn=pe?E.get(pe).bytesPerElement:1,Oi=be.get(V).currentProgram.getUniforms();for(let rn=0;rn<tt;rn++)Oi.setValue(R,"_gl_DrawID",rn),ut.render(Pe[rn]/nn,xt[rn])}else if(N.isInstancedMesh)ut.renderInstances(Ke,bt,N.count);else if(B.isInstancedBufferGeometry){const Pe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,xt=Math.min(B.instanceCount,Pe);ut.renderInstances(Ke,bt,xt)}else ut.render(Ke,bt)};function dt(x,F,B){x.transparent===!0&&x.side===Mn&&x.forceSinglePass===!1?(x.side=Kt,x.needsUpdate=!0,Jr(x,F,B),x.side=di,x.needsUpdate=!0,Jr(x,F,B),x.side=Mn):Jr(x,F,B)}this.compile=function(x,F,B=null){B===null&&(B=x),p=Ee.get(B),p.init(F),S.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==B&&x.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const V=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){const ve=ee[ue];dt(ve,B,N),V.add(ve)}else dt(ee,B,N),V.add(ee)}),p=S.pop(),V},this.compileAsync=function(x,F,B=null){const V=this.compile(x,F,B);return new Promise(N=>{function ee(){if(V.forEach(function(ue){be.get(ue).currentProgram.isReady()&&V.delete(ue)}),V.size===0){N(x);return}setTimeout(ee,10)}Ve.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let st=null;function Nn(x){st&&st(x)}function Rn(){mi.stop()}function hl(){mi.start()}const mi=new _u;mi.setAnimationLoop(Nn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(x){st=x,ne.setAnimationLoop(x),x===null?mi.stop():mi.start()},ne.addEventListener("sessionstart",Rn),ne.addEventListener("sessionend",hl),this.render=function(x,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(F),F=ne.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,F,L),p=Ee.get(x,S.length),p.init(F),S.push(p),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ht.setFromProjectionMatrix(J,Sn,F.reversedDepth),Y=this.localClippingEnabled,rt=re.init(this.clippingPlanes,Y),g=X.get(x,w.length),g.init(),w.push(g),ne.enabled===!0&&ne.isPresenting===!0){const ee=M.xr.getDepthSensingMesh();ee!==null&&ea(ee,F,-1/0,M.sortObjects)}ea(x,F,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(ie,oe),Qe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Qe&&Se.addToRenderList(g,x),this.info.render.frame++,rt===!0&&re.beginShadows();const B=p.state.shadowsArray;Me.render(B,x,F),rt===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,N=g.transmissive;if(p.setupLights(),F.isArrayCamera){const ee=F.cameras;if(N.length>0)for(let ue=0,ve=ee.length;ue<ve;ue++){const pe=ee[ue];fl(V,N,x,pe)}Qe&&Se.render(x);for(let ue=0,ve=ee.length;ue<ve;ue++){const pe=ee[ue];dl(g,x,pe,pe.viewport)}}else N.length>0&&fl(V,N,x,F),Qe&&Se.render(x),dl(g,x,F);L!==null&&A===0&&(qe.updateMultisampleRenderTarget(L),qe.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(M,x,F),le.resetDefaultState(),y=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],rt===!0&&re.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function ea(x,F,B,V){if(x.visible===!1)return;if(x.layers.test(F.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(F);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ht.intersectsSprite(x)){V&&Be.setFromMatrixPosition(x.matrixWorld).applyMatrix4(J);const ue=O.update(x),ve=x.material;ve.visible&&g.push(x,ue,ve,B,Be.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ht.intersectsObject(x))){const ue=O.update(x),ve=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Be.copy(x.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Be.copy(ue.boundingSphere.center)),Be.applyMatrix4(x.matrixWorld).applyMatrix4(J)),Array.isArray(ve)){const pe=ue.groups;for(let De=0,Oe=pe.length;De<Oe;De++){const Re=pe[De],Ke=ve[Re.materialIndex];Ke&&Ke.visible&&g.push(x,ue,Ke,B,Be.z,Re)}}else ve.visible&&g.push(x,ue,ve,B,Be.z,null)}}const ee=x.children;for(let ue=0,ve=ee.length;ue<ve;ue++)ea(ee[ue],F,B,V)}function dl(x,F,B,V){const N=x.opaque,ee=x.transmissive,ue=x.transparent;p.setupLightsView(B),rt===!0&&re.setGlobalState(M.clippingPlanes,B),V&&ye.viewport(P.copy(V)),N.length>0&&Kr(N,F,B),ee.length>0&&Kr(ee,F,B),ue.length>0&&Kr(ue,F,B),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function fl(x,F,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new un(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?An:Tn,minFilter:qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ee=p.state.transmissionRenderTarget[V.id],ue=V.viewport||P;ee.setSize(ue.z*M.transmissionResolutionScale,ue.w*M.transmissionResolutionScale);const ve=M.getRenderTarget(),pe=M.getActiveCubeFace(),De=M.getActiveMipmapLevel();M.setRenderTarget(ee),M.getClearColor(G),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),Qe&&Se.render(B);const Oe=M.toneMapping;M.toneMapping=Ln;const Re=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),rt===!0&&re.setGlobalState(M.clippingPlanes,V),Kr(x,B,V),qe.updateMultisampleRenderTarget(ee),qe.updateRenderTargetMipmap(ee),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ot=0,bt=F.length;ot<bt;ot++){const pt=F[ot],ut=pt.object,Pe=pt.geometry,xt=pt.material,tt=pt.group;if(xt.side===Mn&&ut.layers.test(V.layers)){const nn=xt.side;xt.side=Kt,xt.needsUpdate=!0,pl(ut,B,V,Pe,xt,tt),xt.side=nn,xt.needsUpdate=!0,Ke=!0}}Ke===!0&&(qe.updateMultisampleRenderTarget(ee),qe.updateRenderTargetMipmap(ee))}M.setRenderTarget(ve,pe,De),M.setClearColor(G,W),Re!==void 0&&(V.viewport=Re),M.toneMapping=Oe}function Kr(x,F,B){const V=F.isScene===!0?F.overrideMaterial:null;for(let N=0,ee=x.length;N<ee;N++){const ue=x[N],ve=ue.object,pe=ue.geometry,De=ue.group;let Oe=ue.material;Oe.allowOverride===!0&&V!==null&&(Oe=V),ve.layers.test(B.layers)&&pl(ve,F,B,pe,Oe,De)}}function pl(x,F,B,V,N,ee){x.onBeforeRender(M,F,B,V,N,ee),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(M,F,B,V,x,ee),N.transparent===!0&&N.side===Mn&&N.forceSinglePass===!1?(N.side=Kt,N.needsUpdate=!0,M.renderBufferDirect(B,F,V,N,x,ee),N.side=di,N.needsUpdate=!0,M.renderBufferDirect(B,F,V,N,x,ee),N.side=Mn):M.renderBufferDirect(B,F,V,N,x,ee),x.onAfterRender(M,F,B,V,N,ee)}function Jr(x,F,B){F.isScene!==!0&&(F=Te);const V=be.get(x),N=p.state.lights,ee=p.state.shadowsArray,ue=N.state.version,ve=q.getParameters(x,N.state,ee,F,B),pe=q.getProgramCacheKey(ve);let De=V.programs;V.environment=x.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(x.isMeshStandardMaterial?Mt:It).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?F.environmentRotation:x.envMapRotation,De===void 0&&(x.addEventListener("dispose",j),De=new Map,V.programs=De);let Oe=De.get(pe);if(Oe!==void 0){if(V.currentProgram===Oe&&V.lightsStateVersion===ue)return gl(x,ve),Oe}else ve.uniforms=q.getUniforms(x),x.onBeforeCompile(ve,M),Oe=q.acquireProgram(ve,pe),De.set(pe,Oe),V.uniforms=ve.uniforms;const Re=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=re.uniform),gl(x,ve),V.needsLights=$u(x),V.lightsStateVersion=ue,V.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Oe,V.uniformsList=null,Oe}function ml(x){if(x.uniformsList===null){const F=x.currentProgram.getUniforms();x.uniformsList=Ls.seqWithValue(F.seq,x.uniforms)}return x.uniformsList}function gl(x,F){const B=be.get(x);B.outputColorSpace=F.outputColorSpace,B.batching=F.batching,B.batchingColor=F.batchingColor,B.instancing=F.instancing,B.instancingColor=F.instancingColor,B.instancingMorph=F.instancingMorph,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function qu(x,F,B,V,N){F.isScene!==!0&&(F=Te),qe.resetTextureUnits();const ee=F.fog,ue=V.isMeshStandardMaterial?F.environment:null,ve=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:fi,pe=(V.isMeshStandardMaterial?Mt:It).get(V.envMap||ue),De=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Oe=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!B.morphAttributes.position,Ke=!!B.morphAttributes.normal,ot=!!B.morphAttributes.color;let bt=Ln;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(bt=M.toneMapping);const pt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ut=pt!==void 0?pt.length:0,Pe=be.get(V),xt=p.state.lights;if(rt===!0&&(Y===!0||x!==b)){const $t=x===b&&V.id===y;re.setState(V,x,$t)}let tt=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==xt.state.version||Pe.outputColorSpace!==ve||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==pe||V.fog===!0&&Pe.fog!==ee||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==re.numPlanes||Pe.numIntersection!==re.numIntersection)||Pe.vertexAlphas!==De||Pe.vertexTangents!==Oe||Pe.morphTargets!==Re||Pe.morphNormals!==Ke||Pe.morphColors!==ot||Pe.toneMapping!==bt||Pe.morphTargetsCount!==ut)&&(tt=!0):(tt=!0,Pe.__version=V.version);let nn=Pe.currentProgram;tt===!0&&(nn=Jr(V,F,N));let Oi=!1,rn=!1,xr=!1;const yt=nn.getUniforms(),hn=Pe.uniforms;if(ye.useProgram(nn.program)&&(Oi=!0,rn=!0,xr=!0),V.id!==y&&(y=V.id,rn=!0),Oi||b!==x){ye.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),yt.setValue(R,"projectionMatrix",x.projectionMatrix),yt.setValue(R,"viewMatrix",x.matrixWorldInverse);const Qt=yt.map.cameraPosition;Qt!==void 0&&Qt.setValue(R,ge.setFromMatrixPosition(x.matrixWorld)),Ne.logarithmicDepthBuffer&&yt.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&yt.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),b!==x&&(b=x,rn=!0,xr=!0)}if(N.isSkinnedMesh){yt.setOptional(R,N,"bindMatrix"),yt.setOptional(R,N,"bindMatrixInverse");const $t=N.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),yt.setValue(R,"boneTexture",$t.boneTexture,qe))}N.isBatchedMesh&&(yt.setOptional(R,N,"batchingTexture"),yt.setValue(R,"batchingTexture",N._matricesTexture,qe),yt.setOptional(R,N,"batchingIdTexture"),yt.setValue(R,"batchingIdTexture",N._indirectTexture,qe),yt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&yt.setValue(R,"batchingColorTexture",N._colorsTexture,qe));const dn=B.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&te.update(N,B,nn),(rn||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,yt.setValue(R,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(hn.envMap.value=pe,hn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(hn.envMapIntensity.value=F.environmentIntensity),rn&&(yt.setValue(R,"toneMappingExposure",M.toneMappingExposure),Pe.needsLights&&Yu(hn,xr),ee&&V.fog===!0&&K.refreshFogUniforms(hn,ee),K.refreshMaterialUniforms(hn,V,k,Z,p.state.transmissionRenderTarget[x.id]),Ls.upload(R,ml(Pe),hn,qe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ls.upload(R,ml(Pe),hn,qe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&yt.setValue(R,"center",N.center),yt.setValue(R,"modelViewMatrix",N.modelViewMatrix),yt.setValue(R,"normalMatrix",N.normalMatrix),yt.setValue(R,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const $t=V.uniformsGroups;for(let Qt=0,ta=$t.length;Qt<ta;Qt++){const gi=$t[Qt];We.update(gi,nn),We.bind(gi,nn)}}return nn}function Yu(x,F){x.ambientLightColor.needsUpdate=F,x.lightProbe.needsUpdate=F,x.directionalLights.needsUpdate=F,x.directionalLightShadows.needsUpdate=F,x.pointLights.needsUpdate=F,x.pointLightShadows.needsUpdate=F,x.spotLights.needsUpdate=F,x.spotLightShadows.needsUpdate=F,x.rectAreaLights.needsUpdate=F,x.hemisphereLights.needsUpdate=F}function $u(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,F,B){const V=be.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),be.get(x.texture).__webglTexture=F,be.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:B,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,F){const B=be.get(x);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0};const ju=R.createFramebuffer();this.setRenderTarget=function(x,F=0,B=0){L=x,T=F,A=B;let V=!0,N=null,ee=!1,ue=!1;if(x){const pe=be.get(x);if(pe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(pe.__webglFramebuffer===void 0)qe.setupRenderTarget(x);else if(pe.__hasExternalTextures)qe.rebindTextures(x,be.get(x.texture).__webglTexture,be.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Re=x.depthTexture;if(pe.__boundDepthTexture!==Re){if(Re!==null&&be.has(Re)&&(x.width!==Re.image.width||x.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(x)}}const De=x.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ue=!0);const Oe=be.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?N=Oe[F][B]:N=Oe[F],ee=!0):x.samples>0&&qe.useMultisampledRTT(x)===!1?N=be.get(x).__webglMultisampledFramebuffer:Array.isArray(Oe)?N=Oe[B]:N=Oe,P.copy(x.viewport),I.copy(x.scissor),z=x.scissorTest}else P.copy(de).multiplyScalar(k).floor(),I.copy(Fe).multiplyScalar(k).floor(),z=at;if(B!==0&&(N=ju),ye.bindFramebuffer(R.FRAMEBUFFER,N)&&V&&ye.drawBuffers(x,N),ye.viewport(P),ye.scissor(I),ye.setScissorTest(z),ee){const pe=be.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,B)}else if(ue){const pe=F;for(let De=0;De<x.textures.length;De++){const Oe=be.get(x.textures[De]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+De,Oe.__webglTexture,B,pe)}}else if(x!==null&&B!==0){const pe=be.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,pe.__webglTexture,B)}y=-1},this.readRenderTargetPixels=function(x,F,B,V,N,ee,ue,ve=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=be.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe){ye.bindFramebuffer(R.FRAMEBUFFER,pe);try{const De=x.textures[ve],Oe=De.format,Re=De.type;if(!Ne.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=x.width-V&&B>=0&&B<=x.height-N&&(x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ve),R.readPixels(F,B,V,N,we.convert(Oe),we.convert(Re),ee))}finally{const De=L!==null?be.get(L).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(x,F,B,V,N,ee,ue,ve=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=be.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe)if(F>=0&&F<=x.width-V&&B>=0&&B<=x.height-N){ye.bindFramebuffer(R.FRAMEBUFFER,pe);const De=x.textures[ve],Oe=De.format,Re=De.type;if(!Ne.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ke),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ve),R.readPixels(F,B,V,N,we.convert(Oe),we.convert(Re),0);const ot=L!==null?be.get(L).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,ot);const bt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await nd(R,bt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ke),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(Ke),R.deleteSync(bt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,F=null,B=0){const V=Math.pow(2,-B),N=Math.floor(x.image.width*V),ee=Math.floor(x.image.height*V),ue=F!==null?F.x:0,ve=F!==null?F.y:0;qe.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,ue,ve,N,ee),ye.unbindTexture()};const Zu=R.createFramebuffer(),Ku=R.createFramebuffer();this.copyTextureToTexture=function(x,F,B=null,V=null,N=0,ee=null){ee===null&&(N!==0?(kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=N,N=0):ee=0);let ue,ve,pe,De,Oe,Re,Ke,ot,bt;const pt=x.isCompressedTexture?x.mipmaps[ee]:x.image;if(B!==null)ue=B.max.x-B.min.x,ve=B.max.y-B.min.y,pe=B.isBox3?B.max.z-B.min.z:1,De=B.min.x,Oe=B.min.y,Re=B.isBox3?B.min.z:0;else{const dn=Math.pow(2,-N);ue=Math.floor(pt.width*dn),ve=Math.floor(pt.height*dn),x.isDataArrayTexture?pe=pt.depth:x.isData3DTexture?pe=Math.floor(pt.depth*dn):pe=1,De=0,Oe=0,Re=0}V!==null?(Ke=V.x,ot=V.y,bt=V.z):(Ke=0,ot=0,bt=0);const ut=we.convert(F.format),Pe=we.convert(F.type);let xt;F.isData3DTexture?(qe.setTexture3D(F,0),xt=R.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(qe.setTexture2DArray(F,0),xt=R.TEXTURE_2D_ARRAY):(qe.setTexture2D(F,0),xt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const tt=R.getParameter(R.UNPACK_ROW_LENGTH),nn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Oi=R.getParameter(R.UNPACK_SKIP_PIXELS),rn=R.getParameter(R.UNPACK_SKIP_ROWS),xr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,pt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,De),R.pixelStorei(R.UNPACK_SKIP_ROWS,Oe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Re);const yt=x.isDataArrayTexture||x.isData3DTexture,hn=F.isDataArrayTexture||F.isData3DTexture;if(x.isDepthTexture){const dn=be.get(x),$t=be.get(F),Qt=be.get(dn.__renderTarget),ta=be.get($t.__renderTarget);ye.bindFramebuffer(R.READ_FRAMEBUFFER,Qt.__webglFramebuffer),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let gi=0;gi<pe;gi++)yt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.get(x).__webglTexture,N,Re+gi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.get(F).__webglTexture,ee,bt+gi)),R.blitFramebuffer(De,Oe,ue,ve,Ke,ot,ue,ve,R.DEPTH_BUFFER_BIT,R.NEAREST);ye.bindFramebuffer(R.READ_FRAMEBUFFER,null),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||be.has(x)){const dn=be.get(x),$t=be.get(F);ye.bindFramebuffer(R.READ_FRAMEBUFFER,Zu),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ku);for(let Qt=0;Qt<pe;Qt++)yt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,dn.__webglTexture,N,Re+Qt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,dn.__webglTexture,N),hn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,$t.__webglTexture,ee,bt+Qt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,$t.__webglTexture,ee),N!==0?R.blitFramebuffer(De,Oe,ue,ve,Ke,ot,ue,ve,R.COLOR_BUFFER_BIT,R.NEAREST):hn?R.copyTexSubImage3D(xt,ee,Ke,ot,bt+Qt,De,Oe,ue,ve):R.copyTexSubImage2D(xt,ee,Ke,ot,De,Oe,ue,ve);ye.bindFramebuffer(R.READ_FRAMEBUFFER,null),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else hn?x.isDataTexture||x.isData3DTexture?R.texSubImage3D(xt,ee,Ke,ot,bt,ue,ve,pe,ut,Pe,pt.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(xt,ee,Ke,ot,bt,ue,ve,pe,ut,pt.data):R.texSubImage3D(xt,ee,Ke,ot,bt,ue,ve,pe,ut,Pe,pt):x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ee,Ke,ot,ue,ve,ut,Pe,pt.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ee,Ke,ot,pt.width,pt.height,ut,pt.data):R.texSubImage2D(R.TEXTURE_2D,ee,Ke,ot,ue,ve,ut,Pe,pt);R.pixelStorei(R.UNPACK_ROW_LENGTH,tt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Oi),R.pixelStorei(R.UNPACK_SKIP_ROWS,rn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,xr),ee===0&&F.generateMipmaps&&R.generateMipmap(xt),ye.unbindTexture()},this.initRenderTarget=function(x){be.get(x).__webglFramebuffer===void 0&&qe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?qe.setTextureCube(x,0):x.isData3DTexture?qe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?qe.setTexture2DArray(x,0):qe.setTexture2D(x,0),ye.unbindTexture()},this.resetState=function(){T=0,A=0,L=null,ye.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const Le={pass:{value:0},glass:{value:1},water:{value:1},cubeReady:{value:0},waterReady:{value:0},cube:{value:null},planar:{value:null},position:{value:new C},matrix:{value:new Je},maxLod:{value:6}},Cv=`
uniform float labGlassReflection,labWaterReflection,labCubeReady,labWaterReady,labReflectionMaxLod;
uniform samplerCube labReflectionCube;
uniform sampler2D labWaterMirror;
uniform vec3 labReflectionPosition;
uniform mat4 labWaterMatrix;
vec3 labGlassReflect(vec3 base,vec3 n,float mask){
 if(labReflectionPass>.5||labCapture>.5||labCubeReady<.5||labGlassReflection<.5||mask<.001)return base;
 vec3 eye=normalize(cameraPosition-labWorldPosition);
 float distanceFade=1.-smoothstep(180.,450.,distance(labWorldPosition,labReflectionPosition));
 vec3 direction=reflect(-eye,n);
 // A live local cube, not a sky-color substitute. Mip blur is an inexpensive
 // angular approximation, not a GGX-convolved PMREM or per-window planar view.
 vec3 reflected=textureCubeLodEXT(labReflectionCube,direction,min(1.6,labReflectionMaxLod)).rgb;
 float fresnel=.20+.55*pow(1.-max(dot(n,eye),0.),5.);
 return mix(base,reflected,mask*distanceFade*fresnel);
}
vec3 labWaterReflect(vec3 base,float mask){
 if(labReflectionPass>.5||labCapture>.5||labWaterReady<.5||labWaterReflection<.5||mask<.001)return base;
 vec4 projected=labWaterMatrix*vec4(labWorldPosition,1.);
 if(projected.w<=0.)return base;
 vec2 uv=projected.xy/projected.w;
 float border=min(min(uv.x,uv.y),min(1.-uv.x,1.-uv.y));
 float edge=smoothstep(0.,.025,border);
 vec3 eye=normalize(cameraPosition-labWorldPosition);
 float fresnel=.38+.5*pow(1.-max(eye.y,0.),5.);
 vec3 reflected=texture2D(labWaterMirror,clamp(uv,0.,1.)).rgb;
 return mix(base,reflected*vec3(.88,.96,.98),mask*edge*fresnel);
}
`;function Pv(){return{labReflectionPass:Le.pass,labGlassReflection:Le.glass,labWaterReflection:Le.water,labCubeReady:Le.cubeReady,labWaterReady:Le.waterReady,labReflectionCube:Le.cube,labWaterMirror:Le.planar,labReflectionPosition:Le.position,labWaterMatrix:Le.matrix,labReflectionMaxLod:Le.maxLod}}const No=2048;function wn(i,e,t=0){const n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)}function Su(i){return-520+85*Math.sin(i/850)}function Vt(i){return 105+80*Math.sin(i/550)}function ci(i){const e=i*2400-900;return{x:e,y:27,z:Vt(e)}}function Dr(i,e,t){const n=No/2**i;return{level:i,x:e,z:t,size:n,cx:(e+.5)*n,cz:(t+.5)*n,key:`${i}/${e}/${t}`}}function Dv(i){return[Dr(i.level+1,i.x*2,i.z*2),Dr(i.level+1,i.x*2+1,i.z*2),Dr(i.level+1,i.x*2,i.z*2+1),Dr(i.level+1,i.x*2+1,i.z*2+1)]}function Gr(i,e,t){return Math.hypot(Math.max(Math.abs(i-t.cx)-t.size/2,0),Math.max(Math.abs(e-t.cz)-t.size/2,0))}function Lv(i,e,t){const n=[],r=Math.floor(i/No),s=Math.floor(e/No),a=Math.min(2300,Math.max(850,t*2.5)),o=t>800?512:t>350?256:128;function l(c){return c.refine=c.size>o&&Gr(i,e,c)<c.size*.72,c.children=c.refine?Dv(c).map(l):[],c}for(let c=r-1;c<=r+1;c++)for(let u=s-1;u<=s+1;u++){const h=Dr(0,c,u);Gr(i,e,h)<a&&n.push(l(h))}return n}function Uv(i,e,t=0){const n=i*128+32+t%2*63,r=e*128+32+Math.floor(t/2)*63,s=wn(i,e,t);return{x:n,z:r,w:27+wn(i,e,t+10)*18,d:24+wn(i,e,t+20)*20,h:12+Math.pow(s,2.5)*110,color:Math.floor(wn(i,e,t+40)*6)}}function Iv(i,e){let t=i;for(const[n,r,s]of[[0,e.minX,1],[0,e.maxX,-1],[2,e.minZ,1],[2,e.maxZ,-1]]){const a=t;if(t=[],!a.length)break;for(let o=0;o<a.length;o++){const l=a[o],c=a[(o+1)%a.length],u=(l[n]-r)*s,h=(c[n]-r)*s;if(u>=-1e-7&&t.push(l),u>=0!=h>=0){const d=u/(u-h);t.push(l.map((f,m)=>f+(c[m]-f)*d))}}}return t}const rl=[{x:350,z:-100,rx:115,rz:60},{x:-260,z:280,rx:85,rz:65}];function wu(i,e,t=0){return rl.some(n=>Math.hypot((i-n.x)/(n.rx+t),(e-n.z)/(n.rz+t))<1)}const Fv=rl.map(i=>`pondDistance=min(pondDistance,(length((labWorldPosition.xz+labOrigin.xz-vec2(${i.x.toFixed(1)},${i.z.toFixed(1)}))/vec2(${i.rx.toFixed(1)},${i.rz.toFixed(1)}))-1.)*${Math.min(i.rx,i.rz).toFixed(1)});`).join(`
`),jn={panels:{value:1},variation:{value:1},occlusion:{value:1}},Nv=`
uniform float labPanelDetail,labWindowVariation,labLocalOcclusion;
varying float labRoomSeed;
varying vec3 labBoxPosition,labBoxSize,labBoxNormal;
vec3 labWindowEmission=vec3(0.);
float labFacadeGlass=0.;
float labFacadeRoughness=.52;
float labRoomHash(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
vec2 labFacadePulse(vec2 q,vec2 fw,vec2 start,vec2 duty){
 q=fract(q);
 vec2 lo=q-fw*.5-start,hi=q+fw*.5-start;
 return clamp((floor(hi)*duty+min(fract(hi),duty)-floor(lo)*duty-min(fract(lo),duty))/fw,0.,1.);
}
// Integral of a cubic ramp, used to filter both height and its analytic slope.
// No derivative of a derivative-filtered height is evaluated.
float labRampIntegral(float x,float b){
 float u=clamp(x/b,0.,1.);
 return b*(u*u*u-.5*u*u*u*u)+max(x-b,0.);
}
float labProfileIntegral(float x,float start,float duty,float bevel){
 float q=fract(x);
 return floor(x)*(duty-bevel)+labRampIntegral(q-start,bevel)-labRampIntegral(q-start-duty+bevel,bevel);
}
float labProfileValue(float x,float start,float duty,float bevel){
 float q=fract(x);
 return smoothstep(start,start+bevel,q)-smoothstep(start+duty-bevel,start+duty,q);
}
vec2 labProfile(float q,float fw,float start,float duty,float bevel){
 if(duty<=0.)return vec2(0.);
 bevel=min(bevel,duty*.5);
 q=fract(q); // Avoid cancellation from a large periodic integral offset.
 float lo=q-fw*.5,hi=q+fw*.5;
 return vec2(clamp((labProfileIntegral(hi,start,duty,bevel)-labProfileIntegral(lo,start,duty,bevel))/fw,0.,1.),
  (labProfileValue(hi,start,duty,bevel)-labProfileValue(lo,start,duty,bevel))/fw);
}
vec2 labOpeningPoint=vec2(0.),labOpeningSize=vec2(1.),labOpeningFootprint=vec2(.08);
vec3 labOpeningTangent=vec3(1.,0.,0.);
float labOpeningDepth=0.,labOpeningWeight=0.,labOpeningAmbient=1.;
// Relief is a filtered fragment impostor, not geometry or depth-buffer displacement.
vec3 labCavityNormal=vec3(0.);
float labCavityWeight=0.;
vec2 labFacadeSlope=vec2(0.);
vec3 labFacadeNormal(vec3 normal){
 // Generated building instances are axis-aligned in the current tile world.
 vec3 tangent=abs(labBoxNormal.x)>.5?vec3(0.,0.,1.):vec3(1.,0.,0.);
 vec3 slope=tangent*labFacadeSlope.x+vec3(0.,1.,0.)*labFacadeSlope.y;
 vec3 bevelNormal=normalize(normal-(viewMatrix*vec4(slope,0.)).xyz);
 return normalize(mix(bevelNormal,(viewMatrix*vec4(labCavityNormal,0.)).xyz,labCavityWeight));
}
`,Ov=`
 if(abs(labBoxNormal.y)<.5){
  bool side=abs(labBoxNormal.x)>.5;
  float width=side?labBoxSize.z:labBoxSize.x;
  vec2 face=vec2((side?labBoxPosition.z:labBoxPosition.x)+.5,labBoxPosition.y+.5)*vec2(width,labBoxSize.y);
  float seed=floor(labRoomSeed+.5),style=mod(seed,3.);
  float floorHeight=mix(5.1,style<.5?5.2:style<1.5?3.9:4.3,labWindowVariation);
  float floors=max(2.,floor(labBoxSize.y/floorHeight+.5));
  float bayWidth=mix(style<.5?12.:style<1.5?8.:18.,style<.5?11.5:style<1.5?4.2:5.4,labWindowVariation);
  float groups=max(1.,floor(width/bayWidth+.5));
  vec2 moduleSize=vec2(width/groups,labBoxSize.y/floors);
  vec2 q=face/moduleSize,fw=max(fwidth(q),vec2(.0001));
  // Regular building families and paired-floor bands, not per-window noise.
  float row=floor(q.y),bay=floor(q.x),band=mod(floor(row/2.)+floor(seed/3.),3.);
  vec2 family=style<.5?vec2(.76,.43):style<1.5?vec2(.52,.61):vec2(.90,.75);
  vec2 windowShape=family;
  if(row<.5)windowShape=vec2(.87,.68);
  else if(row>floors-1.5)windowShape=family*vec2(.88,.78);
  else if(band<.5)windowShape*=vec2(.84,1.12);
  if(style>1.5&&mod(bay,3.)<.5)windowShape.x*=.94;
  // Blend regional variation by world distance, not framebuffer footprint:
  // changing sampling density must not resize the window itself.
  float layoutResolved=1.-smoothstep(100.,220.,length(cameraPosition-labWorldPosition));
  windowShape=mix(family,windowShape,layoutResolved);
  vec2 duty=mix(vec2(.77,.43),windowShape,labWindowVariation);
  vec2 start=mix(vec2(.115,.32),vec2((1.-duty.x)*.5,(1.-duty.y)*.5-(row<.5?.035:0.)*layoutResolved),labWindowVariation);

  vec2 edgeBevel=min(vec2(style>.5&&style<1.5?.12:.08)/moduleSize,duty*.24);
  vec2 filtered=vec2(labProfile(q.x,fw.x,start.x,duty.x,edgeBevel.x).x,labProfile(q.y,fw.y,start.y,duty.y,edgeBevel.y).x);
  float pane=filtered.x*filtered.y;
  vec3 tangent=side?vec3(0.,0.,1.):vec3(1.,0.,0.);
  vec3 eye=normalize(cameraPosition-labWorldPosition);
  // Bounded grazing direction; fade the relief before an aperture is unresolved.
  vec2 ray=-vec2(dot(eye,tangent),eye.y)/max(.16,dot(eye,labBoxNormal));
  // Distance LOD is independent of framebuffer resolution; avoid changing
  // the apparent cavity depth solely because the pixel footprint changes.
  float relief=1.-smoothstep(70.,220.,length(cameraPosition-labWorldPosition));
  vec2 cavityFW=fw;
  vec2 shift=ray*.48/moduleSize*relief;
  // At the glass plane, the visible interval is the intersection of the front
  // aperture and its back-projected rectangle. Integrate coverage, not a binary hit.
  vec2 lo=max(start,start-shift),hi=min(start+duty,start+duty-shift);
  vec2 extent=max(vec2(0.),hi-lo);
  vec2 cavityBevel=max(vec2(.00001),min(edgeBevel,extent*.24));
  vec2 visibleGlass=vec2(labProfile(q.x,cavityFW.x,lo.x,extent.x,cavityBevel.x).x,labProfile(q.y,cavityFW.y,lo.y,extent.y,cavityBevel.y).x);
  float glassPane=min(pane,visibleGlass.x*visibleGlass.y);
  vec2 apertureCoverage=filtered;
  visibleGlass=min(visibleGlass,apertureCoverage);
  glassPane=min(pane,visibleGlass.x*visibleGlass.y);
  vec2 sideCoverage=max(vec2(0.),apertureCoverage-visibleGlass);
  float jamb=sideCoverage.x*(apertureCoverage.y-.5*sideCoverage.y);
  float sill=sideCoverage.y*(apertureCoverage.x-.5*sideCoverage.x);
  float sides=max(0.,pane-glassPane);
  vec3 sideNormal=-sign(ray.x)*tangent*jamb-vec3(0.,sign(ray.y),0.)*sill;
  labCavityNormal=normalize(sideNormal+labBoxNormal*max(glassPane,.0001));
  labCavityWeight=pane*relief*.65;
  vec2 glassFace=face+shift*moduleSize;
  vec2 border=(style<.5?vec2(.14,.13):style<1.5?vec2(.18,.18):vec2(.09,.13))/moduleSize;
  vec2 frameStart=start-border,frameDuty=duty+border*2.;
  vec2 frameMask=vec2(labProfile(q.x,fw.x,frameStart.x,frameDuty.x,edgeBevel.x).x,labProfile(q.y,fw.y,frameStart.y,frameDuty.y,edgeBevel.y).x);
  float frame=max(0.,frameMask.x*frameMask.y-pane);
  float resolved=1.-smoothstep(.18,.75,max(fw.x,fw.y));
  // Continuous, color-only joints with a finite 6 cm width and soft 2 cm edges.
  // They affect wall albedo, never generate unstable subpixel normal spikes.
  vec2 panelSize=vec2(3.2,moduleSize.y*.5),panelQ=face/panelSize,panelFW=max(fwidth(panelQ),vec2(.0001));
  vec2 jointDuty=vec2(.06)/panelSize,jointBevel=vec2(.02)/panelSize;
  float jx=labProfile(panelQ.x,panelFW.x,.48,jointDuty.x,jointBevel.x).x;
  float jy=labProfile(panelQ.y,panelFW.y,.48,jointDuty.y,jointBevel.y).x;
  float joint=jx+jy-jx*jy;
  diffuseColor.rgb*=1.-.045*joint*(1.-pane)*labPanelDetail*(style<.5?1.:0.);
  // Brick mortar is coverage filtered and low contrast, never a bump derivative.
  // Fade the row offset before it becomes unresolved; no stochastic pixel noise.
  if(style>.5&&style<1.5){
   vec2 brickSize=vec2(.85,.32),brickQ=face/brickSize,brickFW=max(fwidth(brickQ),vec2(.0001));
   float mortarY=labFacadePulse(brickQ,brickFW,vec2(0.),vec2(1.,.08)).y;
   brickQ.x+=mod(floor(brickQ.y),2.)*.5;
   float mortarX=labFacadePulse(brickQ,brickFW,vec2(0.),vec2(.035,1.)).x;
   float brickResolved=1.-smoothstep(.15,.55,max(brickFW.x,brickFW.y));
   float mortar=mortarY+(1.-mortarY)*mix(.035,mortarX,brickResolved);
   diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*1.12,mortar*(1.-pane)*labPanelDetail);
  }
  // Broad continuous cornices and ground-floor lintel: geometric cues stay
  // in the existing relief; these bands only change albedo, not shadow depth.
  float course=labProfile(q.y,fw.y,.91,.075,.018).x;
  float storefront=(1.-smoothstep(.8,1.,q.y))*layoutResolved;
  vec3 wallBase=diffuseColor.rgb;
  if(style>.5&&style<1.5)diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.66,.63,.54),course*.7*(1.-pane));
  if(style>1.5)diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.12,.17,.19),course*.6*(1.-pane));
  diffuseColor.rgb=mix(diffuseColor.rgb,wallBase*.58,storefront*course*(1.-pane));
  labOpeningSize=duty*moduleSize;
  labOpeningPoint=clamp((fract(q)+shift-start)*moduleSize,vec2(0.),labOpeningSize);
  labOpeningTangent=tangent;
  labOpeningDepth=.48*relief;
  labOpeningFootprint=max(fwidth(face),vec2(.12));
  labOpeningWeight=pane*relief*labLocalOcclusion;
  vec2 rim=min(labOpeningPoint,labOpeningSize-labOpeningPoint);
  vec2 horizon=rim/sqrt(rim*rim+vec2(labOpeningDepth*labOpeningDepth+.0001));
  labOpeningAmbient=mix(1.,.55+.45*horizon.x*horizon.y,labOpeningWeight);
  diffuseColor.rgb*=mix(.96,1.03,labBoxPosition.y+.5);
  // Opaque blue-gray glass: a stylized tint, not a reflection or transparency.
  float glassGradient=mix(.86,1.08,clamp((fract(q.y)+shift.y-start.y)/duty.y,0.,1.));
  glassGradient=mix(.97,glassGradient,resolved);
  vec3 glassTint=style<.5?vec3(.16,.23,.26):style<1.5?vec3(.13,.18,.20):vec3(.17,.28,.34);
  // Occasional grouped warm blinds on glass offices; fade to a stable mean.
  float blind=style>1.5?step(3.5,mod(bay+floor(row/2.)+floor(seed/3.),7.)):0.;
  glassTint=mix(glassTint,vec3(.48,.41,.29),blind*.48*layoutResolved);
  glassTint=mix(glassTint,vec3(.32,.25,.17),storefront*.72);
  vec3 glass=glassTint*glassGradient;
  vec3 frameTint=style<.5?vec3(.51,.52,.48):style<1.5?vec3(.66,.64,.56):vec3(.11,.16,.19);
  frameTint=mix(frameTint,vec3(.12,.14,.14),storefront*.7);
  labFacadeRoughness=style<.5?.52:style<1.5?.58:.44;
  // Local contact shading is applied to reflected light, not baked into albedo.
  diffuseColor.rgb=mix(diffuseColor.rgb,glass,glassPane);
  diffuseColor.rgb=mix(diffuseColor.rgb,frameTint,frame*.88);
  float paneWidth=style<.5?1.8:style<1.5?2.1:2.7;
  vec2 mullionQ=vec2(glassFace.x/paneWidth,0.),mullionFW=max(fwidth(mullionQ),vec2(.0001));
  float mullion=labFacadePulse(mullionQ,mullionFW,vec2(0.),vec2(.024,1.)).x*glassPane;
  diffuseColor.rgb*=1.-.23*mullion;
  // Bevel width is physical (18 cm), not a one-pixel finite difference.
  vec2 bevel=min(vec2(.18)/moduleSize,duty*.24);
  vec2 px=labProfile(q.x,fw.x,start.x,duty.x,bevel.x);
  vec2 py=labProfile(q.y,fw.y,start.y,duty.y,bevel.y);
  vec2 ox=labProfile(q.x,fw.x,start.x-border.x,duty.x+border.x*2.,bevel.x);
  vec2 oy=labProfile(q.y,fw.y,start.y-border.y,duty.y+border.y*2.,bevel.y);
  vec2 paneSlope=vec2(px.y*py.x,px.x*py.y)/moduleSize;
  vec2 outerSlope=vec2(ox.y*oy.x,ox.x*oy.y)/moduleSize;
  labFacadeSlope=.04*(outerSlope-paneSlope)*resolved;
  labFacadeGlass=glassPane;
  if(labNight>.5){
   diffuseColor.rgb*=mix(vec3(1.),vec3(.22,.32,.42),pane);
   float facade=labBoxNormal.x*2.+labBoxNormal.z*4.;
   float roomSeed=seed+floor(facade+.5);
   float roomQ=glassFace.x/paneWidth,roomFW=max(mullionFW.x,.0001);
   float firstRoom=floor(roomQ-roomFW*.5);
   vec3 roomRadiance=vec3(0.);
   // At most three cells overlap while this resolved branch has nonzero weight.
   // Box-integrate their fixed colors so a subpixel room boundary cannot toggle
   // the entire pixel between a bright and a dark room as the camera moves.
   for(int roomIndex=0;roomIndex<3;roomIndex++){
    float cellX=firstRoom+float(roomIndex);
    float coverage=max(0.,min(roomQ+roomFW*.5,cellX+1.)-max(roomQ-roomFW*.5,cellX))/roomFW;
    vec3 roomCell=vec3(cellX,floor(q.y),roomSeed);
    float lit=step(labRoomHash(roomCell),labWindowOccupancy);
    float temperature=labRoomHash(roomCell+vec3(0.,0.,51.));
    vec3 warm=mix(vec3(1.,.43,.15),vec3(1.,.78,.48),temperature);
    warm=mix(warm,vec3(.57,.76,1.),step(.94,temperature));
    roomRadiance+=coverage*lit*warm;
   }
   float roomResolved=1.-smoothstep(.45,1.2,max(roomFW,fw.y));
   roomRadiance=mix(vec3(.95,.64,.33)*labWindowOccupancy,roomRadiance,roomResolved);
   float interiorShade=mix(.65,mix(.48,1.,clamp((fract(q.y)+shift.y-start.y)/duty.y,0.,1.)),resolved);
   labWindowEmission=glassPane*roomRadiance*interiorShade*(1.-.85*mullion)*labWindows*labWindowPower;
  }
 }else{diffuseColor.rgb*=1.035;}
`,zv=`
float labOpeningVisibility(vec3 direction){
 vec3 worldLight=inverseTransformDirection(direction,viewMatrix);
 float facing=dot(worldLight,labBoxNormal);
 vec2 ray=vec2(dot(worldLight,labOpeningTangent),worldLight.y)/max(.16,facing);
 vec2 hit=labOpeningPoint+ray*labOpeningDepth;
 vec2 edge=min(hit,labOpeningSize-hit);
 vec2 visible=smoothstep(-labOpeningFootprint,labOpeningFootprint,edge);
 float transmission=mix(.22,1.,visible.x*visible.y)*smoothstep(-.1,.12,facing);
 return mix(1.,transmission,labOpeningWeight);
}
void labFacadeDirect(const in IncidentLight source,const in vec3 geometryPosition,const in vec3 geometryNormal,const in vec3 geometryViewDir,const in vec3 geometryClearcoatNormal,const in PhysicalMaterial material,inout ReflectedLight reflectedLight){
 IncidentLight light=source;
 light.color*=labOpeningVisibility(light.direction);
 RE_Direct_Physical(light,geometryPosition,geometryNormal,geometryViewDir,geometryClearcoatNormal,material,reflectedLight);
}
#undef RE_Direct
#define RE_Direct labFacadeDirect
`,on=[2.5,28.5,72,180],Ot=[{spacing:32,groundSpacing:16,size:24,far:160,offset:0},{spacing:128,size:16,far:512,offset:2304},{spacing:512,size:16,far:2048,offset:3328}],Fa=4352,Dn=64,Vr=68,ui=8,Pi=16,ir=(i,e)=>(i%e+e)%e,Na=(i,e,t=Ot[0].groundSpacing)=>i===0&&e===0?t:Ot[i].spacing,Bv=(i,e=32)=>e===16?i>280?32:16:i<220?16:32;function kv(i,e,t,n){return t=Math.max(.02,t),i=Math.min(Math.max(e*2,t*1.5),i+e),{credit:i,faces:Math.min(n,Math.floor((i+1e-6)/t))}}function Ec(i,e,t,n){const r=Ot[i];return r.offset+n*r.size*r.size+ir(t,r.size)*r.size+ir(e,r.size)}function Tc(i,e,t,n){const r={x:i,y:e,z:t};for(let s=0;s<8;s++){const a=n(r.x,r.z).find(l=>r.y>l.minY-.35&&r.y<l.maxY+.35&&r.x>l.minX-.7&&r.x<l.maxX+.7&&r.z>l.minZ-.7&&r.z<l.maxZ+.7);if(!a)return{...r,blocked:!1};const o=[["x",a.minX-1.2],["x",a.maxX+1.2],["z",a.minZ-1.2],["z",a.maxZ+1.2]];o.sort((l,c)=>Math.abs(r[l[0]]-l[1])-Math.abs(r[c[0]]-c[1])),r[o[0][0]]=o[0][1]}return{...r,blocked:!0}}class Ac{constructor(e=[]){this.cells=new Map;for(const t of e)for(let n=Math.floor(t.minX/128);n<=Math.floor(t.maxX/128);n++)for(let r=Math.floor(t.minZ/128);r<=Math.floor(t.maxZ/128);r++){const s=`${n}/${r}`;this.cells.has(s)||this.cells.set(s,[]),this.cells.get(s).push(t)}}query(e,t){const n=[],r=Math.floor(e/128),s=Math.floor(t/128);for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++)n.push(...this.cells.get(`${r+a}/${s+o}`)||[]);return n}}const je={enabled:{value:0},view:{value:0},strength:{value:.9},direct:{value:0},radius:{value:3},viewport:{value:new _e(1,1)},size:{value:new _e(1,1)},nearFar:{value:new _e(8,6500)},texture:{value:null},depth:{value:null}},Oo=new Set;function Gv(i){Oo.add(i),i.addEventListener("dispose",()=>Oo.delete(i))}function Vv(i){const e=i?1:0;if(je.enabled.value!==e){je.enabled.value=e;for(const t of Oo)t.needsUpdate=!0}}const Hv=`
uniform float labAOEnabled,labAOView,labAOStrength,labAODirect,labAORadius;
uniform vec2 labAOViewport,labAOSize,labAONearFar;
uniform sampler2D labAOTexture,labAODepth;
float labAOViewDepth(float d){return labAONearFar.x*labAONearFar.y/(labAONearFar.y-d*(labAONearFar.y-labAONearFar.x));}
float labReadAO(float viewDepth){
 // A linear fetch equals1 only if all contributing AO texels are unoccluded.
 // Most of an open map can skip depth-guided upsampling entirely.
 if(texture2D(labAOTexture,gl_FragCoord.xy/labAOViewport).r>.999)return 1.;
 vec2 p=gl_FragCoord.xy/labAOViewport*labAOSize-.5,cell=floor(p),f=fract(p);
 float sum=0.,weights=0.,tolerance=min(labAORadius*.5,.15+viewDepth*.01);
 for(int i=0;i<4;i++){
  vec2 corner=vec2(float(i%2),float(i/2)),uv=clamp((cell+corner+.5)/labAOSize,.5/labAOSize,1.-.5/labAOSize);
  float d=texture2D(labAODepth,uv).r;if(d>=.999999)continue;
  float difference=abs(labAOViewDepth(d)-viewDepth);
  float w=mix(1.-f.x,f.x,corner.x)*mix(1.-f.y,f.y,corner.y)*exp(-difference/max(tolerance,.05)*2.);
  sum+=texture2D(labAOTexture,uv).r*w;weights+=w;
 }
 return weights>.002?clamp(1.-labAOStrength*(1.-sum/weights),.15,1.):1.;
}
`,Ie={enabled:{value:0},windows:{value:1},occupancy:{value:.57},windowPower:{value:1.8},streets:{value:1},streetPower:{value:1},glow:{value:.65},lampColor:{value:new fe("#ffc078")},atmosphere:{value:1}},Wv=`
uniform float labNight,labWindows,labWindowOccupancy,labWindowPower;
uniform float labStreets,labStreetPower;uniform vec3 labLampColor;
vec3 labStreetSpecular=vec3(0.);float labStreetRoughness=1.;
float labRiverAt(float x){return -520.-labOrigin.z+85.*sin(x/850.+mod(labOrigin.x/850.,6.28318530718));}
float labHighwayAt(float x){return 105.-labOrigin.z+80.*sin(x/550.+mod(labOrigin.x/550.,6.28318530718));}
vec3 labLampIrradiance(vec3 p,vec3 n,vec3 source,float elevated){
 // Ground lamps do not illuminate the upper deck; deck lamps do not shine
 // through the deck onto the ground. This is a layer approximation, not a shadow map.
 if((elevated>.5&&p.y<23.5)||(elevated<.5&&p.y>16.))return vec3(0.);
 if(elevated<.5&&abs(source.z-labRiverAt(source.x))<103.)return vec3(0.);
 vec3 delta=source-p;float d2=dot(delta,delta);float range=mix(40.,46.,elevated);
 if(d2>range*range)return vec3(0.);
 vec3 L=delta*inversesqrt(max(d2,.01));float cosine=max(dot(n,L),0.);
 // Broad downward lobe, a smooth finite cutoff, inverse-square attenuation.
 float beam=smoothstep(-.12,.70,L.y);
 float cutoff=pow(max(0.,1.-pow(d2/(range*range),2.)),2.);
 vec3 irradiance=labLampColor*(mix(370.,560.,elevated)*labStreetPower*cosine*beam*cutoff/max(d2,1.));
 if(labWet>.01&&labStreetRoughness<.65&&n.y>.5&&cosine>.001){
  vec3 V=normalize(cameraPosition-p),H=normalize(L+V);float nv=max(dot(n,V),.005),nh=max(dot(n,H),0.),vh=max(dot(V,H),0.);
  float a=max(.06,labStreetRoughness*labStreetRoughness),a2=a*a,d=nh*nh*(a2-1.)+1.;float D=a2/(3.14159265*d*d);
  float k=pow(labStreetRoughness+1.,2.)*.125,G=(nv/(nv*(1.-k)+k))*(cosine/(cosine*(1.-k)+k));float F=.04+.96*pow(1.-vh,5.);
  labStreetSpecular+=irradiance*(D*G*F/max(4.*nv*cosine,.005))*labWet;
 }
 return irradiance;
}
vec3 labStreetIrradiance(vec3 p,vec3 n){
 if(labNight<.5||labStreets<.5||labStreetPower<.001)return vec3(0.);
 vec3 result=vec3(0.);vec2 phase=mod(labOrigin.xz,128.);
 float column=floor((p.x+phase.x-8.5)/128.+.5)*128.+8.5-phase.x;
 float row=floor((p.z+phase.y-8.5)/128.+.5)*128.+8.5-phase.y;
 float zi=floor((p.z+phase.y-32.)/64.),xi=floor((p.x+phase.x-32.)/64.);
 for(int i=0;i<2;i++){
  float z=(zi+float(i))*64.+32.-phase.y;
  float x=(xi+float(i))*64.+32.-phase.x;
  result+=labLampIrradiance(p,n,vec3(column,9.,z),0.);
  result+=labLampIrradiance(p,n,vec3(x,9.,row),0.);
  float hx=(xi+float(i))*64.+32.-phase.x;
  result+=labLampIrradiance(p,n,vec3(hx,34.,labHighwayAt(hx)+13.5),1.);
 }
 return result;
}
`,zt={wet:{value:0},snow:{value:0},giCompatibility:{value:1},roof:{value:null},roofMatrix:{value:new Je},roofReady:{value:0},noise:{value:null}},Eu=`
uniform sampler2D labRoofDepth;uniform mat4 labRoofMatrix;uniform float labRoofReady;
float labSkyExposure(vec3 p){
 if(labRoofReady<.5)return 1.;vec4 q=labRoofMatrix*vec4(p,1.);vec3 uv=q.xyz/q.w*.5+.5;
 if(any(lessThan(uv,vec3(0.)))||any(greaterThan(uv,vec3(1.))))return 1.;
 float top=texture2D(labRoofDepth,uv.xy).r;
 // A small depth tolerance prevents the receiving roof occluding itself.
 return uv.z<=top+.0007?1.:0.;
}
`,Xv=`
uniform float labWet,labSnow,labWeatherGI;uniform sampler2D labWeatherNoise;
${Eu}
`,ce={capture:{value:0},captureOrigin:{value:new C},captureFar:{value:160},gi:{value:.85},visibility:{value:1},gray:{value:0},view:{value:0},coverage:{value:0},debugColors:{value:0},origin:{value:new C},sky:{value:new fe("#a8cad8")},ground:{value:new fe("#848b6c")},grids:{value:Ot.map(i=>new He(0,0,i.spacing,i.size))},wraps:{value:Ot.map(()=>new _e)},groundGrid:{value:new He(0,0,Ot[0].groundSpacing,Ot[0].size)},groundWrap:{value:new _e},irrAtlas:{value:null},depthAtlas:{value:null},probeMeta:{value:null},probeCoverage:{value:null},coverageGrids:{value:Ot.map(()=>new He)}},qv=`
uniform float labReflectionPass;
uniform float labCapture, labGI, labVisibility, labGray, labView, labCaptureFar,labCoverage;
uniform float labDebugColors,labDebugColor,labDebugNeutral;
uniform vec3 labCaptureOrigin, labSky, labGround,labOrigin;
uniform vec4 labGrids[3];uniform vec2 labWraps[3];
uniform vec4 labGroundGrid;uniform vec2 labGroundWrap;
uniform vec4 labCoverageGrids[3];uniform sampler2D labProbeCoverage;
uniform sampler2D labIrrAtlas,labDepthAtlas,labProbeMeta;
varying vec3 labWorldPosition;
float labContribution=0.;
vec3 labDebugAlbedo(float tag){float color=labDebugColors>1.5?labDebugColors-1.:tag;return color<1.5?vec3(1.,0.,0.):color<2.5?vec3(0.,1.,0.):vec3(1.,0.,1.);}
vec2 labOct(vec3 n){n/=max(abs(n.x)+abs(n.y)+abs(n.z),.00001);vec2 p=n.xy;if(n.z<0.)p=(1.-abs(p.yx))*mix(vec2(-1.),vec2(1.),step(vec2(0.),p));return p*.5+.5;}
vec2 labAtlasUV(float slot,vec2 oct,float res){vec2 tile=vec2(mod(slot,${Dn}.),floor(slot/${Dn}.));return (tile*(res+2.)+1.+oct*res)/(vec2(${Dn}.,${Vr}.)*(res+2.));}
vec4 labLevel(vec3 position,vec3 normal,int level){
 float layer=0.,fy=clamp((position.y-2.5)/26.,0.,1.);
 if(position.y>28.5){layer=1.;fy=clamp((position.y-28.5)/43.5,0.,1.);}
 if(position.y>72.){layer=2.;fy=clamp((position.y-72.)/108.,0.,1.);}
 float offset=level==0?0.:level==1?2304.:3328.,range=level==0?160.:level==1?512.:2048.;
 vec4 confidenceGrid=labCoverageGrids[level];
 vec2 confidenceCell=clamp((position.xz-confidenceGrid.xy)/confidenceGrid.z,vec2(0.),vec2(confidenceGrid.w-1.));
 vec4 confidence=texture2D(labProbeCoverage,(confidenceCell+vec2(.5,float(level)*48.+.5))/vec2(48.,144.));
 float readiness=layer<.5?mix(confidence.x,confidence.y,fy):layer<1.5?mix(confidence.y,confidence.z,fy):mix(confidence.z,confidence.w,fy);
 if(readiness<.00001)return vec4(0.);
 vec3 sum=vec3(0.);float weights=0.;vec3 biased=position+normal*.45;vec2 normalOct=labOct(normal);
 // Prepare both horizontal grids once, then keep a single eight-corner loop.
 // Nested height/corner loops increased GPU cost substantially on ANGLE/D3D11.
 vec4 grid=labGrids[level];bool independent=level==0&&layer<.5&&labGroundGrid.z!=grid.z;
 vec2 g1=(position.xz-grid.xy)/grid.z,cell1=floor(g1),f1=fract(g1);
 vec2 cell0=cell1,f0=f1,lowerWrap=labWraps[level];
 float edge1=min(min(g1.x,g1.y),min(grid.w-1.-g1.x,grid.w-1.-g1.y));
 float fade1=smoothstep(0.,1.,edge1),fade0=fade1;
 if(independent){vec2 g0=(position.xz-labGroundGrid.xy)/labGroundGrid.z;cell0=floor(g0);f0=fract(g0);lowerWrap=labGroundWrap;float edge0=min(min(g0.x,g0.y),min(grid.w-1.-g0.x,grid.w-1.-g0.y));fade0=smoothstep(0.,1.,edge0);}
 float edgeCoverage=(1.-fy)*fade0+fy*fade1;if(edgeCoverage<.00001)return vec4(0.);
 for(int i=0;i<8;i++){
  float ix=float(i%2),iz=float((i/2)%2),iy=float(i/4);
  vec2 cell=cell1,f=f1,wrap=labWraps[level];if(independent&&i<4){cell=cell0;f=f0;wrap=lowerWrap;}
  float heightWeight=mix(1.-fy,fy,iy);if(heightWeight<.00001||(independent&&mix(fade0,fade1,iy)<.00001))continue;
  float weight=mix(1.-f.x,f.x,ix)*mix(1.-f.y,f.y,iz)*heightWeight;if(independent)weight*=mix(fade0,fade1,iy);
  vec2 wrapped=mod(cell+vec2(ix,iz)+wrap,grid.w);float slot=offset+(layer+iy)*grid.w*grid.w+wrapped.y*grid.w+wrapped.x;
  vec4 meta=texture2D(labProbeMeta,(vec2(mod(slot,${Dn}.),floor(slot/${Dn}.))+.5)/vec2(${Dn}.,${Vr}.));
  // Still wait for every required corner. The shared confidence field is zero
  // throughout pending cells and fades ready neighbors to zero at their shared
  // faces, including height planes and the independent 16/32 m ground grids.
  // Blocked(-1) is structural; pending(0) must not renormalize arrivals.
  if(meta.w<-.5)continue;if(meta.w<.00001)return vec4(0.);
  if(weight<.00001)continue;vec3 delta=biased-meta.xyz;float dist=max(length(delta),.001);
  vec2 moments=texture2D(labDepthAtlas,labAtlasUV(slot,labOct(delta/dist),${Pi}.)).rg;
  float mean=moments.x*range,variance=max(.25,(moments.y-moments.x*moments.x)*range*range),difference=max(0.,dist-mean-.6);
  float visibility=variance/(variance+difference*difference);visibility=pow(visibility,2.);
  weight*=mix(1.,visibility,labVisibility);
  // Retain some weight for grazing surfaces; suppress probes behind a receiver.
  weight*=pow(clamp(dot(normal,-delta/dist)*.5+.5,.1,1.),2.);
  sum+=texture2D(labIrrAtlas,labAtlasUV(slot,normalOct,${ui}.)).rgb*weight;weights+=weight;
 }
 return vec4(sum/max(weights,.00001),smoothstep(0.,.12,weights)*edgeCoverage*smoothstep(0.,1.,readiness));
}
vec3 labEnvironment(vec3 n){
 vec3 base=3.14159265*mix(labGround,labSky,clamp(n.y*.5+.5,0.,1.));
 if(labCapture>.5||labGI<.001)return base;
 vec3 gi=vec3(0.);float remaining=1.;
 for(int level=0;level<3;level++){vec4 fieldValue=labLevel(labWorldPosition,n,level);gi+=fieldValue.rgb*fieldValue.a*remaining;remaining*=1.-fieldValue.a;if(remaining<.001)break;}
 if(labGray>.5)gi=vec3(dot(gi,vec3(.2126,.7152,.0722)));
 gi+=base*remaining;
 labContribution=labGI*labWeatherGI*(1.-remaining);
 return mix(base,gi,labGI*labWeatherGI);
}
`,Yv={labLand:{value:new fe("#d1d4c5")},labRoad:{value:new fe("#6f7c77")},labCurb:{value:new fe("#c2c7b7")},labWater:{value:new fe("#718f8e")},labPark:{value:new fe("#93af85")},labMark:{value:new fe("#e4e7ce")}},$v=`
uniform vec3 labLand,labRoad,labCurb,labWater,labPark,labMark;
float labSurfaceWater=0.;
vec3 labTerrain(){
 vec2 q=mod(labWorldPosition.xz+mod(labOrigin.xz,vec2(128.)),128.);
 vec2 dist=min(q,128.-q),aa=max(fwidth(labWorldPosition.xz),vec2(.035));
 float edge=min(dist.x,dist.y),filterWidth=max(aa.x,aa.y);
 float curb=1.-smoothstep(11.5-filterWidth,11.5+filterWidth,edge);
 float road=1.-smoothstep(9.-filterWidth,9.+filterWidth,edge);
 vec3 c=mix(mix(labLand,labCurb,curb),labRoad,road);
 float mx=(1.-smoothstep(.12-aa.x,.12+aa.x,dist.x))*smoothstep(11.5,13.,dist.y);
 float mz=(1.-smoothstep(.12-aa.y,.12+aa.y,dist.y))*smoothstep(11.5,13.,dist.x);
 c=mix(c,labMark,max(mx,mz));
 float phase=mod(labOrigin.x/850.,6.28318530718);
 float river=-520.-labOrigin.z+85.*sin(labWorldPosition.x/850.+phase);
 float rd=abs(labWorldPosition.z-river),rw=max(fwidth(rd),.05);
 c=mix(c,labPark,1.-smoothstep(103.-rw,103.+rw,rd));
 float pondDistance=1e6;
 ${Fv}
 float pondAA=max(fwidth(pondDistance),.05);
 c=mix(c,labPark,1.-smoothstep(5.-pondAA,5.+pondAA,pondDistance));
 labSurfaceWater=max(1.-smoothstep(92.5-rw,92.5+rw,rd),1.-smoothstep(-pondAA,pondAA,pondDistance));c=mix(c,labWater,labSurfaceWater);
 return c;
}
`;function Nt(i,e={}){const{facade:t=!1,instanceTags:n=!1,terrain:r=!1,debugColor:s=0,debugNeutral:a=!1,...o}=e,l=t||n,c=new Nd({color:i,roughness:.88,metalness:0,...o});return c.onBeforeCompile=u=>{Object.assign(u.uniforms,{labCapture:ce.capture,labCaptureOrigin:ce.captureOrigin,labCaptureFar:ce.captureFar,labGI:ce.gi,labVisibility:ce.visibility,labGray:ce.gray,labView:ce.view,labCoverage:ce.coverage,labDebugColors:ce.debugColors,labDebugColor:{value:s},labDebugNeutral:{value:+a},labOrigin:ce.origin,labSky:ce.sky,labGround:ce.ground,labGrids:ce.grids,labWraps:ce.wraps,labGroundGrid:ce.groundGrid,labGroundWrap:ce.groundWrap,labIrrAtlas:ce.irrAtlas,labDepthAtlas:ce.depthAtlas,labProbeMeta:ce.probeMeta,labProbeCoverage:ce.probeCoverage,labCoverageGrids:ce.coverageGrids},r?Yv:{}),t&&Object.assign(u.uniforms,{labPanelDetail:jn.panels,labWindowVariation:jn.variation,labLocalOcclusion:jn.occlusion}),(t||r)&&Object.assign(u.uniforms,Pv()),u.uniforms.labReflectionPass=Le.pass;const h=je.enabled.value>.5;Object.assign(u.uniforms,{labNight:Ie.enabled,labWindows:Ie.windows,labWindowOccupancy:Ie.occupancy,labWindowPower:Ie.windowPower,labStreets:Ie.streets,labStreetPower:Ie.streetPower,labLampColor:Ie.lampColor}),Object.assign(u.uniforms,{labWet:zt.wet,labSnow:zt.snow,labWeatherGI:zt.giCompatibility,labRoofDepth:zt.roof,labRoofMatrix:zt.roofMatrix,labRoofReady:zt.roofReady,labWeatherNoise:zt.noise}),u.vertexShader=`varying vec3 labWorldPosition;
${l?"attribute float labDebugTag; varying float labColorTag;":""}${t?"attribute float labWindowSeed; varying float labRoomSeed; varying vec3 labBoxPosition; varying vec3 labBoxSize; varying vec3 labBoxNormal;":""}
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 vec4 labWP=vec4(transformed,1.);
 #ifdef USE_INSTANCING
 labWP=instanceMatrix*labWP;
 #endif
 labWorldPosition=(modelMatrix*labWP).xyz;
 ${l?"labColorTag=labDebugTag;":""}
 ${t?`labRoomSeed=labWindowSeed;labBoxPosition=position;labBoxNormal=normal;labBoxSize=vec3(1.);
 #ifdef USE_INSTANCING
 labBoxSize=vec3(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz),length(instanceMatrix[2].xyz));
 #endif`:""}`),Object.assign(u.uniforms,{labAOEnabled:je.enabled,labAOView:je.view,labAOStrength:je.strength,labAODirect:je.direct,labAORadius:je.radius,labAOViewport:je.viewport,labAOSize:je.size,labAONearFar:je.nearFar,labAOTexture:je.texture,labAODepth:je.depth}),u.fragmentShader=Xv+qv+Wv+(h?Hv:"")+(r?$v:"")+(l?`varying float labColorTag;
`:"")+(t?Nv:"")+(t||r?Cv:"")+u.fragmentShader,r&&(u.fragmentShader=u.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=labTerrain();`)),t&&(u.fragmentShader=u.fragmentShader.replace("#include <lights_physical_pars_fragment>",`#include <lights_physical_pars_fragment>
`+zv)),t&&(u.fragmentShader=u.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
`+Ov)),t&&(u.fragmentShader=u.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=labWindowEmission;`)),u.fragmentShader=u.fragmentShader.replace("#include <roughnessmap_fragment>",`float labTag=${l?"labColorTag":"labDebugColor"};
if(labDebugColors>.5){if(labTag>.5)diffuseColor.rgb=labDebugAlbedo(labTag);else if(labDebugNeutral>.5)diffuseColor.rgb=vec3(.72);}
#include <roughnessmap_fragment>
${t?"if(labDebugColors<.5||labTag<.5)roughnessFactor=mix(roughnessFactor,labFacadeRoughness,labFacadeGlass);else {labFacadeSlope=vec2(0.);labCavityWeight=0.;labOpeningWeight=0.;labOpeningAmbient=1.;}":""}`),u.fragmentShader=u.fragmentShader.replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
irradiance+=labEnvironment(inverseTransformDirection(geometryNormal,viewMatrix));`),u.fragmentShader=u.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
 ${t?"normal=labFacadeNormal(normal);":""}
 if(labWet+labSnow>.001){
  vec3 weatherNormal=inverseTransformDirection(normal,viewMatrix);
  float up=smoothstep(.25,.85,weatherNormal.y);
  ${r?"up*=1.-labSurfaceWater;":""}
  if(up>.001){float exposed=labSkyExposure(labWorldPosition+weatherNormal*.15);
  float pattern=texture2D(labWeatherNoise,(labWorldPosition.xz+mod(labOrigin.xz,512.))/512.).r;
  float snow=labSnow*up*exposed*smoothstep(.12,.65,pattern+labSnow*.5);
  float wet=labWet*up*exposed*(1.-snow);float puddle=smoothstep(.32,.68,pattern)*wet;
  diffuseColor.rgb=mix(diffuseColor.rgb*mix(1.,.62,wet),vec3(.80,.86,.93),snow);
  roughnessFactor=mix(mix(roughnessFactor,.2,puddle),.96,snow);
  }
 }`),u.fragmentShader=u.fragmentShader.replace("#include <aomap_fragment>",`labStreetRoughness=roughnessFactor;
reflectedLight.directDiffuse+=diffuseColor.rgb*RECIPROCAL_PI*labStreetIrradiance(labWorldPosition,inverseTransformDirection(geometryNormal,viewMatrix));
reflectedLight.directSpecular+=labStreetSpecular;
#include <aomap_fragment>`),t&&(u.fragmentShader=u.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
reflectedLight.indirectDiffuse*=labOpeningAmbient;reflectedLight.indirectSpecular*=labOpeningAmbient;`)),h&&(u.fragmentShader=u.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
 float labAOVisibility=1.;
 if(labCapture<.5&&labReflectionPass<.5&&labAOEnabled>.5){labAOVisibility=labReadAO(vViewPosition.z);reflectedLight.indirectDiffuse*=labAOVisibility;float directAO=mix(1.,labAOVisibility,labAODirect);reflectedLight.directDiffuse*=directAO;reflectedLight.directSpecular*=directAO;}`)),(t||r)&&(u.fragmentShader=u.fragmentShader.replace("#include <opaque_fragment>",`${t?"if(labDebugColors<.5)outgoingLight=labGlassReflect(outgoingLight,inverseTransformDirection(normal,viewMatrix),labFacadeGlass);":"outgoingLight=labWaterReflect(outgoingLight,labSurfaceWater);"}
#include <opaque_fragment>`)),u.fragmentShader=u.fragmentShader.replace("#include <opaque_fragment>",`if(labView>.5&&labCapture<.5)outgoingLight=reflectedLight.indirectDiffuse;
if(labCoverage>.5&&labCapture<.5)outgoingLight=mix(vec3(.24,.27,.28),vec3(.10,.70,.38),labContribution);
${h?"if(labAOView>.5&&labCapture<.5)outgoingLight=vec3(labAOVisibility);":""}
#include <opaque_fragment>
if(labCapture>.5)gl_FragColor.a=clamp(length(labWorldPosition-labCaptureOrigin)/labCaptureFar,0.,.999);`),h&&(u.fragmentShader=u.fragmentShader.replace("#include <tonemapping_fragment>",`if(labAOView<.5||labCapture>.5){
#include <tonemapping_fragment>
}`)),u.fragmentShader=u.fragmentShader.replace("#include <fog_fragment>",`if(${h?"(labView<.5&&labAOView<.5)":"labView<.5"}||labCapture>.5){
#include <fog_fragment>
}`)},c.userData.labKind=r?"terrain":t?"facade":n?"architecture":"surface",c.customProgramCacheKey=()=>`lab-${c.userData.labKind}-19-live-reflections-ao${je.enabled.value}`,Gv(c),c}function jv(i,e,t){i.updateMatrixWorld(),e.position.copy(i.position),e.position.y=-i.position.y;const n=new C;i.getWorldDirection(n),n.y=-n.y,e.up.set(0,1,0).applyQuaternion(i.quaternion),e.up.y=-e.up.y,e.lookAt(e.position.clone().add(n)),e.near=i.near,e.far=i.far,e.projectionMatrix.copy(i.projectionMatrix),e.updateMatrixWorld(),t.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(e.projectionMatrix).multiply(e.matrixWorldInverse);const r=new Hn(new C(0,1,0),-.025).applyMatrix4(e.matrixWorldInverse),s=new He(r.normal.x,r.normal.y,r.normal.z,r.constant),a=e.projectionMatrix.elements,o=new He((Math.sign(s.x)+a[8])/a[0],(Math.sign(s.y)+a[9])/a[5],-1,(1+a[10])/a[14]),l=s.dot(o);return Math.abs(l)<1e-6?!1:(s.multiplyScalar(2/l),a[2]=s.x,a[6]=s.y,a[10]=s.z+1-.001,a[14]=s.w,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),!0)}class Zv{constructor(e,t,{sky:n=null,cubeSize:r=64,waterSize:s=256}={}){Object.assign(this,{renderer:e,scene:t,sky:n,cubeSize:r,waterSize:s,frozen:!1,face:0,cycle:!1,lastCube:-1/0,lastWater:-1/0,cubeUpdates:0,waterUpdates:0,faces:0,lastCalls:0,lastPasses:0,lastKind:"water",lastCPUms:0});const a=()=>new Qo(r,{type:An,minFilter:qn,generateMipmaps:!0,depthBuffer:!0});this.front=a(),this.back=a(),this.cubeCamera=new hu(.5,3e3,this.back),this.cubeCamera.coordinateSystem=Sn,this.cubeCamera.updateCoordinateSystem(),this.cubeCamera.layers.set(0),this.cubeCamera.layers.enable(6),this.waterTarget=new un(s,s,{type:An,depthBuffer:!0}),this.waterCamera=new qt,this.waterCamera.layers.set(0),this.waterCamera.layers.enable(6),this.origin=new C,this.capturePosition=new C,this.publishedPosition=new C,this.lastWaterMatrix=new Je,this.lastWaterProjection=new Je,this.lastCubeKey=null,this.lastWaterKey=null,this.frustum=new qr,this.box=new Jn,Le.cube.value=this.front.texture,Le.planar.value=this.waterTarget.texture,Le.maxLod.value=Math.log2(r),Le.cubeReady.value=0,Le.waterReady.value=0}waterVisible(e,t){if(e.position.y<=.05)return!1;this.frustum.setFromProjectionMatrix(new Je().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse));const n=(r,s,a,o)=>this.frustum.intersectsBox(this.box.set(new C(r-t.origin.x,-.05,a-t.origin.z),new C(s-t.origin.x,.05,o-t.origin.z)));return rl.some(r=>n(r.x-r.rx,r.x+r.rx,r.z-r.rz,r.z+r.rz))?!0:t.active.some(r=>{const s=r.node;return n(s.cx-s.size/2,s.cx+s.size/2,-698,-342)})}render(e,t,n=0){const r=this.renderer,s={target:r.getRenderTarget(),face:r.getActiveCubeFace(),mip:r.getActiveMipmapLevel(),tone:r.toneMapping,xr:r.xr.enabled,auto:r.shadowMap.autoUpdate,needs:r.shadowMap.needsUpdate,viewport:r.getViewport(new He),scissor:r.getScissor(new He),scissorTest:r.getScissorTest(),ao:je.enabled.value,aoView:je.view.value,view:ce.view.value,coverage:ce.coverage.value,pass:Le.pass.value,cube:Le.cube.value,planar:Le.planar.value,sky:this.sky?.position.clone()};try{Le.pass.value=1,Le.cube.value=null,Le.planar.value=null,je.view.value=0,ce.view.value=0,ce.coverage.value=0,r.toneMapping=Ln,r.xr.enabled=!1,r.shadowMap.autoUpdate=!1,r.shadowMap.needsUpdate=!1,this.sky&&this.sky.position.copy(e.getWorldPosition(new C)),r.setRenderTarget(t,n),r.setScissorTest(!1),r.autoClear||r.clear(),r.render(this.scene,e)}finally{this.sky&&this.sky.position.copy(s.sky),Le.pass.value=s.pass,Le.cube.value=s.cube,Le.planar.value=s.planar,je.enabled.value=s.ao,je.view.value=s.aoView,ce.view.value=s.view,ce.coverage.value=s.coverage,r.toneMapping=s.tone,r.xr.enabled=s.xr,r.shadowMap.autoUpdate=s.auto,r.shadowMap.needsUpdate=s.needs,r.setRenderTarget(s.target,s.face,s.mip),r.setViewport(s.viewport),r.setScissor(s.scissor),r.setScissorTest(s.scissorTest)}}update(e,t,n,r=null){const s=performance.now(),a=this.renderer.info.render.calls;this.lastPasses=0,this.lastCalls=0;try{if(this.origin.equals(n.origin)||(this.origin.copy(n.origin),this.cycle=!1,Le.waterReady.value=0),Le.position.value.copy(this.publishedPosition).sub(n.origin),this.frozen||ce.capture.value>.5)return;Le.glass.value<.5&&(this.cycle=!1);const o=t.position.clone().add(n.origin);this.cycle&&o.distanceTo(this.capturePosition)>128&&(this.cycle=!1);const l=r===null||r!==this.lastCubeKey||o.distanceTo(this.publishedPosition)>8;Le.glass.value>.5&&!this.cycle&&l&&(e-this.lastCube>=2e3||o.distanceTo(this.publishedPosition)>64)&&(this.cycleKey=r,this.capturePosition.copy(o),this.cubeCamera.position.copy(t.position),this.cubeCamera.updateMatrixWorld(),this.face=0,this.cycle=!0);const c=r===null||r!==this.lastWaterKey||!this.lastWaterMatrix.equals(t.matrixWorld)||!this.lastWaterProjection.equals(t.projectionMatrix)||Le.waterReady.value<.5;Le.water.value>.5&&c&&e-this.lastWater>=150&&this.waterVisible(t,n)&&(!this.cycle||this.lastKind!=="water")?jv(t,this.waterCamera,Le.matrix.value)&&(this.render(this.waterCamera,this.waterTarget),Le.waterReady.value=1,this.waterUpdates++,this.lastWater=e,this.lastKind="water",this.lastPasses=1,this.lastWaterKey=r,this.lastWaterMatrix.copy(t.matrixWorld),this.lastWaterProjection.copy(t.projectionMatrix)):this.cycle&&Le.glass.value>.5&&(this.back.texture.generateMipmaps=this.face===5,this.render(this.cubeCamera.children[this.face],this.back,this.face),this.faces++,this.face++,this.lastPasses=1,this.lastKind="cube",this.face===6&&([this.front,this.back]=[this.back,this.front],Le.cube.value=this.front.texture,Le.cubeReady.value=1,this.publishedPosition.copy(this.capturePosition),Le.position.value.copy(this.publishedPosition).sub(n.origin),this.cycle=!1,this.lastCube=e,this.lastCubeKey=this.cycleKey,this.cubeUpdates++))}finally{this.lastCalls=this.renderer.info.render.calls-a,this.lastCPUms=performance.now()-s}}stats(){return{glass:!!Le.glass.value,water:!!Le.water.value,frozen:this.frozen,cubeReady:!!Le.cubeReady.value,waterReady:!!Le.waterReady.value,cubeSize:this.cubeSize,waterSize:this.waterSize,cubeUpdates:this.cubeUpdates,waterUpdates:this.waterUpdates,faces:this.faces,lastPasses:this.lastPasses,lastCalls:this.lastCalls,lastCPUms:this.lastCPUms,cubeIntervalMs:2e3,waterIntervalMs:150,estimatedMiB:(12*this.cubeSize**2*(32/3+4)+this.waterSize**2*12)/1048576}}dispose(){this.front.dispose(),this.back.dispose(),this.waterTarget.dispose(),Le.cube.value=null,Le.planar.value=null,Le.cubeReady.value=0,Le.waterReady.value=0}}const Rc={type:"change"},sl={type:"start"},Tu={type:"end"},Ts=new Ys,Cc=new Hn,Kv=Math.cos(70*Uo.DEG2RAD),Tt=new C,en=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oa=1e-6;class Jv extends Wd{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:sr.ROTATE,MIDDLE:sr.DOLLY,RIGHT:sr.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Di,this._lastTargetPosition=new C,this._quat=new Di().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ql,this._sphericalDelta=new Ql,this._scale=1,this._panOffset=new C,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new C,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=e_.bind(this),this._onPointerDown=Qv.bind(this),this._onPointerUp=t_.bind(this),this._onContextMenu=l_.bind(this),this._onMouseWheel=r_.bind(this),this._onKeyDown=s_.bind(this),this._onTouchStart=a_.bind(this),this._onTouchMove=o_.bind(this),this._onMouseDown=n_.bind(this),this._onMouseMove=i_.bind(this),this._interceptControlDown=c_.bind(this),this._interceptControlUp=u_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rc),this.update(),this.state=ct.NONE}update(e=null){const t=this.object.position;Tt.copy(t).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=en:n>Math.PI&&(n-=en),r<-Math.PI?r+=en:r>Math.PI&&(r-=en),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Tt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ts.origin.copy(this.object.position),Ts.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ts.direction))<Kv?this.object.lookAt(this.target):(Cc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ts.intersectPlane(Cc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Oa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oa||this._lastTargetPosition.distanceToSquared(this.target)>Oa?(this.dispatchEvent(Rc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Tt.setFromMatrixColumn(t,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,t){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(t,1):(Tt.setFromMatrixColumn(t,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Tt.copy(r).sub(this.target);let s=Tt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new _e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Qv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function e_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function t_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tu),this.state=ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function n_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case sr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ct.DOLLY;break;case sr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}break;case sr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(sl)}function i_(i){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function r_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(i.preventDefault(),this.dispatchEvent(sl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Tu))}function s_(i){this.enabled!==!1&&this._handleKeyDown(i)}function a_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ct.TOUCH_ROTATE;break;case li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ct.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(sl)}function o_(i){switch(this._trackPointer(i),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ct.NONE}}function l_(i){this.enabled!==!1&&i.preventDefault()}function c_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function u_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function h_(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new Yt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Pc(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let v=0;v<a[u].length;++v)f.push(a[u][v][d]);const m=Pc(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function Pc(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new gn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<t;m++){const v=u.getComponent(d,m);o.setComponent(d+h,m,v)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}const d_=["#dedbd0","#b76b50","#7695a2","#cdd3d0","#a77559","#657f92"];function f_(i){return 3*(1+Math.floor(wn(i.x,i.z,91)*1364))+i.color%3}function p_(i,e){if(e>512)return[];const t=[],n=.38,r=.72+wn(i.x,i.z,105)*.32,s=(a,o,l,c,u,h,d,f)=>t.push({kind:a,x:o,y:l,z:c,w:u,h,d,tint:f});for(const a of[-1,1])s("parapet",i.x,i.h+r/2,i.z+a*(i.d-n)/2,i.w,r,n,null),s("parapet",i.x+a*(i.w-n)/2,i.h+r/2,i.z,n,r,i.d-n*2,null);if(e<=256){const a=Math.min(7.2,i.w*.22),o=Math.min(6.4,i.d*.22),l=1.65+wn(i.x,i.z,106)*1.1,c=i.x-i.w*.19,u=i.z+i.d*.16;s("service-room",c,i.h+l/2,u,a,l,o,null),s("vent",i.x+i.w*.23,i.h+.4,i.z-i.d*.22,2.4,.8,1.7,"#c0c9d2"),wn(i.x,i.z,107)>.5&&s("vent",i.x+i.w*.23,i.h+.3,i.z-i.d*.22+2.7,2.4,.6,1.7,"#c0c9d2")}return t}function m_(i){return{minX:i.x-i.w/2,maxX:i.x+i.w/2,minY:i.y-i.h/2,maxY:i.y+i.h/2,minZ:i.z-i.d/2,maxZ:i.z+i.d/2}}function g_(i){const e=[],t=i.cx-i.size/2,n=t+i.size,r=i.cz-i.size/2,s=r+i.size,a=(l,c)=>l>=t&&l<n&&c>=r&&c<s,o=(l,c,u=!1,h=0)=>{a(l,c)&&(u||Math.abs(c-Su(l))>=103&&!wu(l,c,6))&&e.push({x:l,z:c,y:u?34:9,base:u?26:0,elevated:u,axis:h})};for(let l=Math.floor(t/128)*128+8.5;l<n;l+=128)for(let c=Math.floor((r-32)/64)*64+32;c<s;c+=64)o(l,c,!1,0);for(let l=Math.floor(r/128)*128+8.5;l<s;l+=128)for(let c=Math.floor((t-32)/64)*64+32;c<n;c+=64)o(c,l,!1,1);for(let l=Math.floor((t-32)/64)*64+32;l<n;l+=64)o(l,Vt(l)+13.5,!0,0);return e}const Dc=new In(1,1,1),v_=Nt("#566975",{roughness:.65}),Au=Nt("#e0d5b9",{roughness:.5,emissive:"#ffc078",emissiveIntensity:0}),Ru=new Dt({uniforms:{night:Ie.enabled,streets:Ie.streets,glow:Ie.glow,power:Ie.streetPower,atmosphere:Ie.atmosphere,color:Ie.lampColor,inspect:ce.view,aoView:je.view},transparent:!0,depthTest:!0,depthWrite:!1,blending:Xa,toneMapped:!1,vertexShader:"varying vec2 uvGlow;varying float fade;void main(){uvGlow=uv;vec4 center=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);fade=exp(-pow(length(center.xyz)*.00085,2.));center.xy+=position.xy*6.;gl_Position=projectionMatrix*center;}",fragmentShader:"uniform float night,streets,glow,power,inspect,aoView,atmosphere;uniform vec3 color;varying vec2 uvGlow;varying float fade;void main(){float r=length(uvGlow-.5)*2.;if(r>=1.||night<.5||streets<.5||glow<.001||inspect>.5||aoView>.5)discard;float core=exp(-r*r*100.);float halo=pow(1.-r,3.)*.34;gl_FragColor=vec4(color*(core+halo)*glow*atmosphere*fade*min(power,2.),1.);}"}),__=new Fn(1,1);al();function al(){Au.emissiveIntensity=Ie.enabled.value*Ie.streets.value*3.5*Ie.streetPower.value,Ru.visible=!!(Ie.enabled.value&&Ie.streets.value&&Ie.glow.value)}function x_(i,e){const t=g_(i);if(e.userData.streetFixtures=t,!t.length)return;const n=new ur(Dc.clone(),v_,t.length*2),r=new ur(Dc.clone(),Au,t.length),s=new ur(__.clone(),Ru,t.length),a=new wt;let o=0;for(let l=0;l<t.length;l++){const c=t[l],u=c.x-i.cx,h=c.z-i.cz,d=c.y-c.base;a.position.set(u+(c.axis===0?2:0),c.base+d/2,h+(c.axis===1?2:0)),a.scale.set(.22,d,.22),a.updateMatrix(),n.setMatrixAt(o++,a.matrix),a.position.set(u+(c.axis===0?1:0),c.y+.14,h+(c.axis===1?1:0)),a.scale.set(c.axis===0?2.3:.2,.18,c.axis===1?2.3:.2),a.updateMatrix(),n.setMatrixAt(o++,a.matrix),a.position.set(u,c.y+.05,h),a.scale.set(c.axis===0?1.5:.65,.23,c.axis===1?1.5:.65),a.updateMatrix(),r.setMatrixAt(l,a.matrix),a.position.y=c.y-.2,a.scale.set(1,1,1),a.updateMatrix(),s.setMatrixAt(l,a.matrix)}n.castShadow=!1,n.receiveShadow=!0,r.castShadow=!1,r.receiveShadow=!1,s.layers.set(5),s.frustumCulled=!1,s.renderOrder=5,e.add(n,r,s)}const Cu=d_.map(i=>new fe(i)),vt=new In(1,1,1),tr=new js(1,1,1,10),zo=new tl(1,1,10),nt={building:Nt("#ffffff",{facade:!0}),architecture:Nt("#ffffff",{instanceTags:!0}),ground:Nt("#ffffff",{terrain:!0}),road:Nt("#6f7c77"),curb:Nt("#c2c7b7"),white:Nt("#e4e7ce"),pier:Nt("#b7c0b2"),green:Nt("#93af85"),blue:Nt("#718f8e"),warm:Nt("#c2a177"),red:Nt("#bc755e"),stone:Nt("#e0d9c1")},Rr={red:Nt("#bc755e",{debugColor:1}),pink:Nt("#718f8e",{debugColor:3}),floor:Nt("#93af85",{debugNeutral:!0}),receiver:Nt("#e0d9c1",{debugNeutral:!0})},y_=[{x:75,z:-192,y:173,name:"海湾金融中心"},{x:-208,z:-405,y:130,name:"观景塔"},{x:430,z:Vt(430),y:43,name:"海湾收费站"},{x:-55,z:8,y:9,name:"滨河公交站"},{x:70,z:390,y:40,name:"环境染色试验区"}];function Pu(i,e,t,n,r,s,a,o,l,c=0){const u=new ft(e,t);if(u.position.set(n,r,s),u.scale.set(a,o,l),u.rotation.y=c,u.castShadow=!0,u.receiveShadow=!0,i.add(u),o>1){e.computeBoundingBox(),u.updateMatrix();const h=e.boundingBox.clone().applyMatrix4(u.matrix),d=i.userData.node;i.userData.probeObstacles.push({minX:h.min.x+d.cx,maxX:h.max.x+d.cx,minY:h.min.y,maxY:h.max.y,minZ:h.min.z+d.cz,maxZ:h.max.z+d.cz})}return u}function Du(i){const e=[],t={minX:i.cx-i.size/2,maxX:i.cx+i.size/2,minZ:i.cz-i.size/2,maxZ:i.cz+i.size/2};return{polygon(n){const r=Iv(n,t);for(let s=1;s<r.length-1;s++)for(const a of[r[0],r[s+1],r[s]])e.push(a[0]-i.cx,a[1],a[2]-i.cz)},finish(n,r){if(!e.length)return;const s=new Yt;s.setAttribute("position",new Pt(e,3)),s.computeVertexNormals();const a=new ft(s,n);a.castShadow=!0,a.receiveShadow=!0,r.add(a)}}}function Si(i,e,t,n,r,s,a=0,o=0){const l=Du(i),c=i.cx-i.size/2;i.cx+i.size/2;const u=Math.ceil(i.size/16);for(let h=0;h<u;h++){const d=c+h*i.size/u,f=c+(h+1)*i.size/u,m=t(d)+a,v=t(f)+a,g=[d,n,m-r/2],p=[f,n,v+r/2];l.polygon([g,[f,n,v-r/2],p,[d,n,m+r/2]]),o&&(l.polygon([[d,n-o,m-r/2],[f,n-o,v-r/2],[f,n,v-r/2],g]),l.polygon([[d,n,m+r/2],p,[f,n-o,v+r/2],[d,n-o,m+r/2]]),l.polygon([[d,n-o,m+r/2],[f,n-o,v+r/2],[f,n-o,v-r/2],[d,n-o,m-r/2]]))}l.finish(s,e)}function b_(i,e){const t=[],n=i.cx-i.size/2,r=i.cz-i.size/2,s=Math.max(1,i.size/512),a=Math.floor(n/128),o=Math.floor(r/128);for(let f=a;f<Math.ceil((n+i.size)/128);f+=s)for(let m=o;m<Math.ceil((r+i.size)/128);m+=s)for(let v=0;v<(s===1?4:1);v++){const g=Uv(f,m,v);g.x<n||g.x>=n+i.size||g.z<r||g.z>=r+i.size||Math.abs(g.z-Su(g.x))<115||Math.abs(g.z-Vt(g.x))<27||Math.hypot(g.x-75,g.z+192)<65||Math.hypot(g.x+208,g.z+405)<43||Math.hypot(g.x-70,g.z-390)<95||Math.hypot(g.x-430,g.z-Vt(430))<90||wu(g.x,g.z,Math.hypot(g.w,g.d)*.5+8)||t.push({...g,w:g.w*Math.sqrt(s),d:g.d*Math.sqrt(s)})}if(!t.length)return;const l=vt.clone(),c=new Float32Array(t.length),u=new Float32Array(t.length);for(let f=0;f<t.length;f++){const m=t[f];u[f]=f_(m),c[f]=wn(m.x,m.z,83)<.28?1+Math.floor(wn(m.x,m.z,84)*3):0,e.userData.probeObstacles.push({minX:m.x-m.w/2,maxX:m.x+m.w/2,minY:0,maxY:m.h,minZ:m.z-m.d/2,maxZ:m.z+m.d/2}),e.userData.buildings.push({...m,tag:c[f]})}l.setAttribute("labDebugTag",new Li(c,1)),l.setAttribute("labWindowSeed",new Li(u,1));const h=new ur(l,nt.building,t.length),d=new wt;for(let f=0;f<t.length;f++){const m=t[f];d.position.set(m.x-i.cx,m.h/2,m.z-i.cz),d.scale.set(m.w,m.h,m.d),d.updateMatrix(),h.setMatrixAt(f,d.matrix),h.setColorAt(f,Cu[m.color])}h.castShadow=!0,h.receiveShadow=!0,h.instanceMatrix.needsUpdate=!0,h.instanceColor.needsUpdate=!0,h.name="building-bodies",e.add(h),M_(i,e,t,c)}function M_(i,e,t,n){const r=[];for(let c=0;c<t.length;c++)for(const u of p_(t[c],i.size))r.push({...u,tag:n[c],color:t[c].color});if(!r.length)return;const s=vt.clone(),a=new Float32Array(r.map(c=>c.tag));s.setAttribute("labDebugTag",new Li(a,1));const o=new ur(s,nt.architecture,r.length),l=new wt;o.name="building-roofs",o.userData.parts=r;for(let c=0;c<r.length;c++){const u=r[c];l.position.set(u.x-i.cx,u.y,u.z-i.cz),l.scale.set(u.w,u.h,u.d),l.updateMatrix(),o.setMatrixAt(c,l.matrix),o.setColorAt(c,u.tint?new fe(u.tint):Cu[u.color]),e.userData.probeObstacles.push(m_(u))}o.castShadow=!0,o.receiveShadow=!0,o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0,e.add(o)}function S_(i,e){const t=(r,s)=>r>=i.cx-i.size/2&&r<i.cx+i.size/2&&s>=i.cz-i.size/2&&s<i.cz+i.size/2,n=(r,s,a,o,l,c,u,h,d=0)=>Pu(e,r,s,a-i.cx,o,l-i.cz,c,u,h,d);if(t(75,-192)){n(vt,nt.stone,75,5,-192,80,10,66),n(vt,nt.blue,75,68,-192,40,126,38),n(vt,nt.blue,75,133,-192,30,20,29),n(zo,nt.warm,75,154,-192,19,26,19),n(tr,nt.stone,75,173,-192,.7,18,.7);for(let r=18;r<128;r+=11)n(vt,nt.stone,75,r,-192,41,1,39)}if(t(-208,-405)&&(n(tr,nt.stone,-208,28,-405,5,56,5),n(tr,nt.red,-208,60,-405,17,14,17),n(tr,nt.stone,-208,82,-405,3.5,38,3.5),n(tr,nt.warm,-208,107,-405,11,11,11),n(zo,nt.stone,-208,123,-405,3,24,3)),t(430,Vt(430))){const r=Vt(430);n(vt,nt.stone,430,33,r,23,2,39),n(vt,nt.green,430,34.6,r,25,1.2,40);for(const s of[-16,-8,0,8,16])n(vt,nt.stone,432,29.5,r+s,1,8,1),n(vt,nt.blue,425,28,r+s,3,4,2.5),n(vt,nt.white,421,28,r+s,1.2,.25,5)}if(t(-55,8)){n(vt,nt.blue,-55,2,8,25,4,1),n(vt,nt.green,-55,5,9,28,.7,6);for(const r of[-65,-45])n(vt,nt.stone,r,2.5,11,.7,5,.7);n(vt,nt.warm,-55,1,9,17,.6,1.5),n(vt,nt.green,-34,3,10,1,6,1)}t(70,390)&&(n(vt,Rr.floor,70,.12,390,120,.25,95),n(vt,Rr.red,34,14,390,7,28,70),n(vt,Rr.receiver,70,14,390,6,28,70),n(vt,Rr.pink,108,14,390,7,28,70),n(vt,Rr.receiver,70,29,390,80,2,70))}function w_(i){const e=new Ci;e.userData.node=i,e.userData.probeObstacles=[],e.userData.buildings=[],b_(i,e);const t=i.cx-i.size/2,n=i.cz-i.size/2,r=t+i.size,s=n+i.size,a=Du(i);a.polygon([[t,0,n],[r,0,n],[r,0,s],[t,0,s]]),a.finish(nt.ground,e),Si(i,e,Vt,25,32,nt.pier,0,3),Si(i,e,Vt,25.13,27,nt.road),Si(i,e,Vt,26,1,nt.white,-15),Si(i,e,Vt,26,1,nt.white,15),Si(i,e,Vt,25.2,.5,nt.white),Si(i,e,u=>Vt(u)+65*Math.exp(-(((u-100)/310)**2)),22,11,nt.pier,0,2),Si(i,e,u=>Vt(u)+65*Math.exp(-(((u-100)/310)**2)),22.13,9.5,nt.road);for(let u=Math.floor(t/72)*72;u<r;u+=72){const h=Vt(u);h>=n&&h<s&&Pu(e,vt,nt.pier,u-i.cx,11,h-i.cz,5,22,11)}S_(i,e),x_(i,e);const o=new Map;for(const u of[...e.children])u.isMesh&&!u.isInstancedMesh&&!u.geometry.getAttribute("uv")&&(o.has(u.material)||o.set(u.material,[]),o.get(u.material).push(u));for(const[u,h]of o)if(h.length>1){const d=h_(h.map(m=>m.geometry),!1);for(const m of h)e.remove(m),m.geometry.dispose();const f=new ft(d,u);f.castShadow=!0,f.receiveShadow=!0,e.add(f)}const l=new In(i.size,.4,i.size),c=new Id(new Fd(l),new fu({color:[3377778,12162114,3904175,10779837,13200216][i.level]}));return l.dispose(),c.position.y=.6,c.layers.set(3),e.add(c),e}function Lc(i){i.traverse(e=>{e.geometry&&e.geometry!==vt&&e.geometry!==tr&&e.geometry!==zo&&e.geometry.dispose(),e.isInstancedMesh&&e.dispose(),e.isLineSegments&&e.material.dispose()})}class E_{constructor(e){this.scene=e,this.tiles=new Map,this.version=0,this.origin=new C,this.frame=0,this.active=[],this.loads=0,this.unloads=0,this.roots=[]}update(e,t,n,r){this.frame++,this.roots=Lv(e,t,n);const s=new Set,a=f=>{s.add(f.key);let m=this.tiles.get(f.key);m||(m={node:f,readyAt:r+80+wn(f.x,f.z,f.level)*220,group:null,last:this.frame},this.tiles.set(f.key,m)),m.last=this.frame;for(const v of f.children)a(v)};this.roots.forEach(a);const o=[...this.tiles.values()].filter(f=>!f.group&&s.has(f.node.key)&&f.readyAt<=r).sort((f,m)=>(f.node.level-m.node.level)*180+Gr(e,t,f.node)-Gr(e,t,m.node));for(const f of o.slice(0,2))f.group=w_(f.node),f.group.visible=!1,this.scene.add(f.group),this.loads++;const l=[],c=f=>{const m=this.tiles.get(f.key);if(!m?.group)return!1;if(!f.children.length)return l.push(m),!0;const v=l.length;for(const g of f.children)if(!c(g))return l.length=v,l.push(m),!0;return!0};this.roots.forEach(c);const u=new Set(l.map(f=>f.node.key));let h=!1;for(const[f,m]of this.tiles)m.group&&(m.group.visible!==u.has(f)&&(h=!0),m.group.visible=u.has(f),m.group.position.set(m.node.cx-this.origin.x,0,m.node.cz-this.origin.z)),!s.has(f)&&this.frame-m.last>150&&(m.group&&(this.scene.remove(m.group),Lc(m.group),this.unloads++),this.tiles.delete(f));const d=[...this.tiles.entries()].filter(([f])=>!s.has(f)).sort((f,m)=>f[1].last-m[1].last);for(;this.tiles.size>180&&d.length;){const[f,m]=d.shift();m.group&&(this.scene.remove(m.group),Lc(m.group),this.unloads++),this.tiles.delete(f)}return this.active=l,h&&this.version++,h}rebase(e,t){this.origin.set(Math.round(e/512)*512,0,Math.round(t/512)*512);for(const n of this.tiles.values())n.group&&n.group.position.set(n.node.cx-this.origin.x,0,n.node.cz-this.origin.z)}stats(){let e=0,t=0;for(const n of this.tiles.values())n.group?.traverse(r=>{if(r.geometry&&r.geometry!==vt)for(const s of Object.values(r.geometry.attributes))e+=s.array.byteLength;r.isInstancedMesh&&(t+=r.count,e+=r.instanceMatrix.array.byteLength+(r.instanceColor?.array.byteLength||0))});return{resident:[...this.tiles.values()].filter(n=>n.group).length,visible:this.active.length,pending:[...this.tiles.values()].filter(n=>!n.group).length,bytes:e,instances:t,loads:this.loads,unloads:this.unloads,version:this.version}}}function Hr(i,e,t=0,n=0,r=e.width,s=e.height,a=!1){e.viewport.set(t,n,r,s),e.scissor.set(t,n,r,s),e.scissorTest=a,i.setRenderTarget(e)}class Uc{constructor(e=[]){this.bounds=e,this.cache=new Map}mask(e,t,n,r,s,a){const o=Ot[e],l=o.size,c=[e,t,n,r,s,a].join("/");if(this.cache.get(e)?.key===c)return this.cache.get(e).data;const u=new Uint8Array(l*l*on.length);for(let h=0;h<on.length;h++){const d=h*l*l;if(h===0&&e>0){u.fill(1,d,d+l*l);continue}const f=h===0?t:o.spacing,m=h===0?s:n,v=h===0?a:r,g=h===0?-1/0:on[h-1],p=h===on.length-1?1/0:on[h+1],w=h===0&&e===0?32:0;for(const S of this.bounds){if(S.maxY<=g||S.minY>=p)continue;const M=Math.max(0,Math.floor((S.minX-w)/f)-m),D=Math.min(l-1,Math.floor((S.maxX+w)/f)+1-m),T=Math.max(0,Math.floor((S.minZ-w)/f)-v),A=Math.min(l-1,Math.floor((S.maxZ+w)/f)+1-v);if(!(M>D||T>A))for(let L=T;L<=A;L++)u.fill(1,d+L*l+M,d+L*l+D+1)}}return this.cache.set(e,{key:c,data:u}),u}}function T_(i,e){return i.map((t,n)=>{const{size:r,spacing:s,minX:a,minZ:o}=t,l=t.level??n,c=t.groundSpacing??s,u=t.groundMinX??a,h=t.groundMinZ??o,d=Math.min(s,c),f=s/d;if(!Number.isInteger(r)||r<2||!Number.isInteger(f)||f<1||!Number.isInteger(c/d)||d<=0)throw new Error("Probe coverage requires nested integer-ratio grids");const m=r*f,v=a*s,g=o*s,p=new Float32Array(m*m*4),w=Array(r*r*4),S=(A,L,y)=>{const b=A===0?u:a,P=A===0?h:o,I=(A*r+y-P)*r+L-b;return w[I]??(w[I]=e(l,A,L,y)??{valid:0,required:!0})},M=m+1,D=new Float32Array(M*M*3),T=new Float32Array(M*M*4);for(let A=0;A<4;A++)for(let L=-1;L<m;L++)for(let y=-1;y<m;y++){const b=A===0?c:s,P=A===0?u:a,I=A===0?h:o,z=Math.floor((v+(y+.5)*d)/b),G=Math.floor((g+(L+.5)*d)/b);let W=1;if(z>=P&&G>=I&&z<P+r-1&&G<I+r-1)for(let H=0;H<2;H++)for(let Z=0;Z<2;Z++){const k=S(A,z+Z,G+H);if(k.required===!1){W=0;continue}k.blocked||(W=Math.min(W,Number.isFinite(k.valid)?Math.max(0,Math.min(1,k.valid)):0))}T[(A*M+L+1)*M+y+1]=W}for(let A=0;A<3;A++)for(let L=-1;L<m;L++)for(let y=-1;y<m;y++){const b=v+(y+.5)*d,P=g+(L+.5)*d;let I=1,z=!1;for(let G=A;G<=A+1;G++){const W=G===0?c:s,H=G===0?u:a,Z=G===0?h:o,k=Math.floor(b/W),ie=Math.floor(P/W);if(!(k<H||ie<Z||k>=H+r-1||ie>=Z+r-1))for(let oe=0;oe<2;oe++)for(let de=0;de<2;de++){const Fe=S(G,k+de,ie+oe);if(Fe.required===!1){z=!0;continue}Fe.blocked||(I=Math.min(I,Number.isFinite(Fe.valid)?Math.max(0,Math.min(1,Fe.valid)):0))}}D[(A*M+L+1)*M+y+1]=z?1:I}for(let A=0;A<m;A++)for(let L=0;L<m;L++)for(let y=0;y<4;y++){let b=1;for(let P=Math.max(0,y-1);P<=Math.min(2,y);P++)for(let I=0;I<2;I++)for(let z=0;z<2;z++)b=Math.min(b,D[(P*M+A+I)*M+L+z]);for(let P=0;P<2;P++)for(let I=0;I<2;I++)b=Math.min(b,T[(y*M+A+P)*M+L+I]);p[(A*m+L)*4+y]=b}return{level:l,width:m,height:m,spacing:d,originX:v,originZ:g,data:p}})}const za=128,Lu=.75,A_=16,R_=8,C_="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",As=i=>new un(A_*(i+2),R_*(i+2),{type:An,format:kt,minFilter:Ct,magFilter:Ct,depthBuffer:!1,generateMipmaps:!1});class P_{constructor(e){this.renderer=e,this.active=[],this.free=Array.from({length:za},(r,s)=>za-1-s),this.duration=Lu,this.blended=0,this.oldIrr=As(ui),this.newIrr=As(ui),this.oldDepth=As(Pi),this.newDepth=As(Pi),this.copyMaterial=new Dt({vertexShader:C_,fragmentShader:"varying vec2 vUv;uniform sampler2D source;uniform vec2 sourceSize;uniform float pitch,slot;void main(){vec2 tile=vec2(mod(slot,64.),floor(slot/64.));gl_FragColor=texture2D(source,(tile*pitch+vUv*pitch)/sourceSize);}",uniforms:{source:{value:null},sourceSize:{value:new _e},pitch:{value:10},slot:{value:0}},depthTest:!1,depthWrite:!1});const t=new vu,n=new Fn(2,2);t.index=n.index,t.attributes=n.attributes,this.entries=new Float32Array(za*3),t.setAttribute("entry",new Li(this.entries,3)),t.instanceCount=0,this.material=new Dt({vertexShader:"attribute vec3 entry;uniform vec2 targetSize;uniform float pitch;varying vec2 historyUV;varying float blend;void main(){vec2 uv=position.xy*.5+.5,tile=vec2(mod(entry.x,64.),floor(entry.x/64.));gl_Position=vec4((tile*pitch+uv*pitch)/targetSize*2.-1.,0.,1.);historyUV=(vec2(mod(entry.y,16.),floor(entry.y/16.))+uv)/vec2(16.,8.);blend=entry.z;}",fragmentShader:"uniform sampler2D previous,incoming;varying vec2 historyUV;varying float blend;void main(){gl_FragColor=mix(texture2D(previous,historyUV),texture2D(incoming,historyUV),blend);}",uniforms:{targetSize:{value:new _e},pitch:{value:10},previous:{value:null},incoming:{value:null}},depthTest:!1,depthWrite:!1}),this.scene=new Xr,this.camera=new Fi(-1,1,1,-1,0,1),this.mesh=new ft(t,this.material),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}advance(e,t){for(let n=this.active.length-1;n>=0;n--){const r=this.active[n];if(t[r.probe.slot]!==r.probe||!r.probe.ready){this.release(n);continue}if(r.elapsed>=this.duration){this.release(n);continue}r.elapsed=Math.min(this.duration,r.elapsed+e)}}release(e){const t=this.active[e];t.probe.transition=null,this.free.push(t.index),this.active.splice(e,1)}clear(){for(;this.active.length;)this.release(this.active.length-1)}canStart(e){return!e.transition&&(!e.ready||this.free.length>0)}begin(e,t){const n={probe:e,index:this.free.pop(),elapsed:0};if(n.index===void 0)throw new Error("Probe transition capacity exhausted");this.active.push(n),e.transition=n;const r=this.renderer,s=this.copyMaterial.uniforms;t.quad.material=this.copyMaterial;for(const[a,o,l]of[[t.irr,this.oldIrr,ui],[t.depth,this.oldDepth,Pi]]){const c=l+2;s.source.value=a.texture,s.sourceSize.value.set(a.width,a.height),s.pitch.value=c,s.slot.value=e.slot,Hr(r,o,n.index%16*c,Math.floor(n.index/16)*c,c,c,!0),r.render(t.filterScene,t.filterCamera)}return n}render(e,t){if(!this.active.length)return 0;const n=this.renderer,r=this.mesh.geometry,s=this.material.uniforms;for(let l=0;l<this.active.length;l++){const c=this.active[l],u=c.elapsed/this.duration;this.entries.set([c.probe.slot,c.index,u*u*(3-2*u)],l*3)}r.instanceCount=this.active.length,r.getAttribute("entry").needsUpdate=!0;const a=n.getRenderTarget();n.getViewport(new He),n.getScissor(new He),n.getScissorTest();const o=n.autoClear;try{n.autoClear=!1;for(const[l,c,u,h]of[[e,this.oldIrr,this.newIrr,ui],[t,this.oldDepth,this.newDepth,Pi]])s.targetSize.value.set(l.width,l.height),s.pitch.value=h+2,s.previous.value=c.texture,s.incoming.value=u.texture,Hr(n,l),n.render(this.scene,this.camera)}finally{n.setRenderTarget(a),n.autoClear=o}return this.blended+=this.active.length,this.active.length}stats(){return{active:this.active.length,capacity:128,duration:this.duration,estimatedMiB:(this.oldIrr.width*this.oldIrr.height+this.oldDepth.width*this.oldDepth.height)*16/1048576}}}const D_="vec3 faceDir(vec2 uv,int f){vec2 p=uv*2.-1.;if(f==0)return normalize(vec3(1.,-p.y,-p.x));if(f==1)return normalize(vec3(-1.,-p.y,p.x));if(f==2)return normalize(vec3(p.x,1.,p.y));if(f==3)return normalize(vec3(p.x,-1.,-p.y));if(f==4)return normalize(vec3(p.x,-p.y,1.));return normalize(vec3(-p.x,-p.y,-1.));}",L_="vec3 octDir(vec2 uv){vec2 p=uv*2.-1.;vec3 n=vec3(p,1.-abs(p.x)-abs(p.y));float t=max(-n.z,0.);n.xy+=mix(vec2(t),vec2(-t),step(vec2(0.),n.xy));return normalize(n);}";function U_(i){let e=0,t=.5;for(;i;)e+=(i&1)*t,i>>=1,t*=.5;return e}const I_=Array.from({length:48},(i,e)=>{const t=Math.sqrt((e+.5)/48),n=2*Math.PI*U_(e);return`vec3(${(t*Math.cos(n)).toFixed(8)},${(t*Math.sin(n)).toFixed(8)},${Math.sqrt(1-t*t).toFixed(8)})`}),Ic="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",F_=`varying vec2 vUv;uniform samplerCube source;uniform float resolution,depthPass;${L_}
void main(){vec2 uv=(vUv*(resolution+2.)-1.)/resolution;vec3 n=octDir(uv),up=abs(n.y)>.98?vec3(1.,0.,0.):vec3(0.,1.,0.);vec3 t=normalize(cross(up,n)),b=cross(n,t);
if(depthPass>.5){float mean=0.,second=0.;for(int i=0;i<8;i++){float a=float(i)*2.39996323;vec3 direction=normalize(n+(t*cos(a)+b*sin(a))*.035);float d=textureCube(source,direction).a;mean+=d;second+=d*d;}gl_FragColor=vec4(mean/8.,second/8.,0.,1.);return;}
vec3 sum=vec3(0.),d;
${I_.map(i=>`d=${i};sum+=textureCube(source,normalize(t*d.x+b*d.y+n*d.z)).rgb;`).join(`
`)}
gl_FragColor=vec4(sum*(3.14159265359/48.),1.);}`;function Fc(i){return new un(Dn*(i+2),Vr*(i+2),{type:An,format:kt,colorSpace:fi,minFilter:Ct,magFilter:Ct,depthBuffer:!1,generateMipmaps:!1})}class N_{constructor(e,t){Object.assign(this,{renderer:e,scene:t,mode:"sliced",layout:"adaptive",captureEnabled:!0,preview:!1,captureFaces:0,filterRuns:0,lastVersion:-1,lastView:"",current:null,metaDirty:!0,origin:new C,probes:Array(Fa).fill(null),wanted:[],obstacles:new Ac,support:new Uc,previousTiles:new Map,gpuBudget:1,maxFaces:6,cpuBudget:2,gpuFaceMs:.5,timerSupported:!1,lastFaces:0,lastCalls:0}),this.raw=new Qo(32,{type:An,format:kt,colorSpace:fi,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),this.irr=Fc(ui),this.depth=Fc(Pi),this.metaData=new Float32Array(Dn*Vr*4),this.meta=new cr(this.metaData,Dn,Vr,kt,mn),this.meta.minFilter=this.meta.magFilter=St,this.meta.needsUpdate=!0,this.coverageData=new Uint16Array(6912*4),this.coverage=new cr(this.coverageData,48,144,kt,An),this.coverage.minFilter=this.coverage.magFilter=Ct,this.coverage.needsUpdate=!0,this.coverageLayouts=[],ce.probeCoverage.value=this.coverage,this.transitions=new P_(e),this.lastBlends=0,this.fallback=new cr(new Float32Array([0,0,0,0]),1,1,kt,mn),this.fallback.needsUpdate=!0,ce.irrAtlas.value=this.irr.texture,ce.depthAtlas.value=this.depth.texture,ce.probeMeta.value=this.meta,this.filterScene=new Xr,this.filterCamera=new Fi(-1,1,1,-1,0,1),this.filterMaterial=new Dt({vertexShader:Ic,fragmentShader:F_,uniforms:{source:{value:this.raw.texture},resolution:{value:ui},depthPass:{value:0}},depthTest:!1,depthWrite:!1}),this.quad=new ft(new Fn(2,2),this.filterMaterial),this.filterScene.add(this.quad),this.previewMaterial=new Dt({vertexShader:Ic,fragmentShader:`varying vec2 vUv;uniform samplerCube source;uniform int face;${D_}void main(){vec3 c=textureCube(source,faceDir(vUv,face)).rgb;gl_FragColor=vec4(pow(c/(1.+c),vec3(1./2.2)),1.);}`,uniforms:{source:{value:this.raw.texture},face:{value:0}},depthTest:!1,depthWrite:!1});const n=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],r=[[0,-1,0],[0,-1,0],[0,0,1],[0,0,-1],[0,-1,0],[0,-1,0]];this.cameras=n.map((l,c)=>{const u=new qt(90,1,.3,2048);return u.up.fromArray(r[c]),u.lookAt(new C(...l)),u.layers.set(0),u}),this.markers=new ur(new Yr(1,6,4),new pi({color:16777215,wireframe:!0}),Fa),this.markers.layers.set(4),this.markers.frustumCulled=!1,this.markers.count=0,t.add(this.markers);const s=e.getRenderTarget(),a=e.getClearColor(new fe),o=e.getClearAlpha();e.setClearColor(0,0);for(const l of[this.irr,this.depth])e.setRenderTarget(l),e.clear();e.setRenderTarget(s),e.setClearColor(a,o)}invalidate(e=!1){for(const t of this.probes)t&&(t.dirty=!0,t.revision++,e&&(t.ready=!1,t.valid=0));e&&(this.current=null,this.metaDirty=!0,this.transitions.clear())}setLayout(e){this.layout!==e&&(this.layout=e,this.lastView="",this.metaDirty=!0)}invalidateAround(e,t,n){for(const r of this.probes)r&&Math.hypot(r.position.x-e,r.position.z-t)<n+Ot[r.level].spacing*1.5&&!r.dirty&&(r.dirty=!0,r.revision++)}syncWorld(e){if(e.version===this.lastVersion)return;const t=new Map(e.active.map(a=>[a.node.key,a.node])),n=[];for(const[a,o]of t)this.previousTiles.has(a)||n.push(o);for(const[a,o]of this.previousTiles)t.has(a)||n.push(o);this.obstacles=new Ac(e.active.flatMap(a=>a.group.userData.probeObstacles||[]));const r=[],s=new Jn;for(const a of e.active){for(const o of a.group.userData.buildings||[])r.push({minX:o.x-o.w/2,maxX:o.x+o.w/2,minZ:o.z-o.d/2,maxZ:o.z+o.d/2,minY:0,maxY:o.h});a.group.updateWorldMatrix(!0,!0),a.group.traverse(o=>{!o.isMesh||o.isInstancedMesh||(o.geometry.boundingBox||o.geometry.computeBoundingBox(),s.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld),!(s.max.y<=.5)&&r.push({minX:s.min.x+e.origin.x,maxX:s.max.x+e.origin.x,minZ:s.min.z+e.origin.z,maxZ:s.max.z+e.origin.z,minY:s.min.y,maxY:s.max.y}))})}this.support=new Uc(r);for(const a of this.probes)if(a&&n.some(o=>Gr(a.position.x,a.position.z,o)<Ot[a.level].far)){const o=a.spacing,l=Tc(a.x*o,on[a.layer],a.z*o,(c,u)=>this.obstacles.query(c,u));a.position.distanceToSquared(new C(l.x,l.y,l.z))>.001&&(a.position.set(l.x,l.y,l.z),a.ready=!1,a.valid=0,this.metaDirty=!0),a.blocked=l.blocked,a.dirty=!0,a.revision++}this.previousTiles=t,this.lastVersion=e.version,this.lastView=""}setAnchors(e,t,n,r,s){this.syncWorld(s),r.updateMatrixWorld();const a=Bv(r.position.y,this.groundSpacing);if(a!==this.groundSpacing){for(let w=0;w<Ot[0].size**2;w++)this.probes[w]=null;this.groundSpacing=a,this.lastView="",this.metaDirty=!0}const o=[...r.matrixWorld.elements,r.aspect,r.layers.mask,s.version,n.x,n.z].join("/");if(o===this.lastView)return;const l=performance.now(),c={x:e,z:t,cx:r.position.x+n.x,cy:r.position.y,cz:r.position.z+n.z},u=this.anchorPose,h=u&&(Math.hypot(e-u.x,t-u.z)>32||Math.hypot(c.cx-u.cx,c.cy-u.cy,c.cz-u.cz)>64);if(this.lastView&&this.origin.equals(n)&&!h&&l-(this.lastViewTime||0)<100)return;this.anchorPose=c,this.anchorUpdates=(this.anchorUpdates||0)+1,h&&(this.anchorTeleports=(this.anchorTeleports||0)+1),this.lastViewTime=l,this.lastView=o,this.origin.copy(n),this.metaDirty=!0;const d=new qr().setFromProjectionMatrix(new Je().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse)),f=new Ii,m=new C,v=[],g=new wt;this.candidates=0,this.pruned=0;for(const w of this.probes)w&&(w.active=!1);for(let w=0;w<Ot.length;w++){const S=Ot[w],M=w===0?e*.65+(r.position.x+n.x)*.35:e,D=w===0?t*.65+(r.position.z+n.z)*.35:t,T=Math.floor(M/S.spacing)-S.size/2,A=Math.floor(D/S.spacing)-S.size/2;ce.grids.value[w].set(T*S.spacing-n.x,A*S.spacing-n.z,S.spacing,S.size),ce.wraps.value[w].set(ir(T,S.size),ir(A,S.size));const L=Na(w,0,this.groundSpacing),y=Math.floor(M/L)-S.size/2,b=Math.floor(D/L)-S.size/2;w===0&&(ce.groundGrid.value.set(y*L-n.x,b*L-n.z,L,S.size),ce.groundWrap.value.set(ir(y,S.size),ir(b,S.size)));const P=this.layout==="adaptive"?this.support.mask(w,L,T,A,y,b):null;this.coverageLayouts[w]={level:w,spacing:S.spacing,size:S.size,minX:T,minZ:A,groundSpacing:L,groundMinX:y,groundMinZ:b,support:P};for(let I=0;I<on.length;I++)for(let z=0;z<S.size;z++)for(let G=0;G<S.size;G++){const W=Na(w,I,this.groundSpacing),H=(I===0?y:T)+G,Z=(I===0?b:A)+z;m.set(H*W-n.x,on[I],Z*W-n.z),f.center.copy(m),f.radius=Math.hypot(S.spacing*3,on[on.length-1]);const k=Ec(w,H,Z,I),ie=`${w}/${H}/${Z}/${I}/${W}`,oe=!P||P[I*S.size*S.size+z*S.size+G];let de=this.probes[k];if(oe&&de?.key===ie&&(de.active=!0),!!d.intersectsSphere(f)){if(this.candidates++,!oe){this.pruned++;continue}if(de?.key!==ie){const Fe=Tc(H*W,on[I],Z*W,(at,ht)=>this.obstacles.query(at,ht));de={slot:k,key:ie,level:w,layer:I,spacing:W,x:H,z:Z,position:new C(Fe.x,Fe.y,Fe.z),blocked:Fe.blocked,ready:!1,valid:0,dirty:!0,revision:0,last:-1},this.probes[k]=de}de.active=!0,de.priority=Math.hypot((H*W-M)/S.spacing,(Z*W-D)/S.spacing)+w*.4+I*.12,!de.ready&&w>0&&I<2&&H>=Math.floor(e/W)&&H<=Math.floor(e/W)+1&&Z>=Math.floor(t/W)&&Z<=Math.floor(t/W)+1&&(de.priority-=20),v.push(de)}}}this.wanted=v;const p=(r.layers.mask&16)!==0;if(p){for(let w=0;w<v.length;w++){const S=v[w];g.position.copy(S.position).sub(n),g.scale.setScalar(S.level===0?1.2:S.level===1?3:7),g.updateMatrix(),this.markers.setMatrixAt(w,g.matrix),this.markers.setColorAt(w,new fe([14854480,5094043,7509727][S.level]))}this.markers.instanceMatrix.needsUpdate=!0,this.markers.instanceColor&&(this.markers.instanceColor.needsUpdate=!0)}this.markers.count=p?v.length:0}update(e,t,n,r){const s=this.captureFaces,a=this.renderer.info.render.calls;this.mode!=="frozen"&&this.transitions.advance(r,this.probes);for(const o of this.probes)this.mode!=="frozen"&&o&&o.ready&&o.valid<1&&(o.valid=Math.min(1,o.valid+r/Lu),this.metaDirty=!0);if(this.mode!=="frozen"&&this.captureEnabled){const o=this.wanted.filter(d=>d.dirty&&!d.blocked&&this.transitions.canStart(d)).sort((d,f)=>(d.ready?100:0)-(f.ready?100:0)+(d.ready&&f.ready?(d.last-f.last)*10:0)+d.priority-f.priority),l=performance.now(),c=this.mode==="full"?4:1,u=kv(this.gpuCredit||0,this.gpuBudget*c,this.gpuFaceMs,this.maxFaces*c);this.gpuCredit=u.credit;let h=Math.min(u.faces,this.timerSupported?100:c);for(;h-- >0;){let d=this.current?.probe;if(!d||!this.wanted.includes(d)||this.probes[d.slot]!==d){do d=o.shift();while(d&&!this.transitions.canStart(d));this.current=d?{probe:d,face:0,revision:d.revision}:null}if(!d)break;if(this.current.revision!==d.revision&&(this.current.face=0,this.current.revision=d.revision),this.captureFace(d,this.current.face,n),this.current.face++,this.captureFaces++,this.gpuCredit=Math.max(0,this.gpuCredit-this.gpuFaceMs),this.current.face===6){this.publish(d),d.ready=!0,d.dirty=!1,d.last=e,this.filterRuns++,this.metaDirty=!0,this.current=null;const f=o.indexOf(d);f>=0&&o.splice(f,1)}if(performance.now()-l>this.cpuBudget*c)break}}if(this.lastBlends=this.mode==="frozen"?0:this.transitions.render(this.irr,this.depth),this.metaDirty){this.metaData.fill(0);for(const o of this.probes)if(o){const l=o.slot*4;this.metaData[l]=o.position.x-n.x,this.metaData[l+1]=o.position.y,this.metaData[l+2]=o.position.z-n.z,this.metaData[l+3]=o.active?o.blocked?-1:o.valid:0}this.meta.needsUpdate=!0,this.updateCoverage(n),this.metaDirty=!1}this.lastFaces=this.captureFaces-s,this.lastCalls=this.renderer.info.render.calls-a}updateCoverage(e){if(this.coverageLayouts.length!==Ot.length)return;const t=T_(this.coverageLayouts,(n,r,s,a)=>{const o=this.coverageLayouts[n],l=r===0?o.groundSpacing:o.spacing,c=r===0?o.groundMinX:o.minX,u=r===0?o.groundMinZ:o.minZ,h=s-c,d=a-u;if(h<0||d<0||h>=o.size||d>=o.size)return{required:!1,outside:!0,valid:0};if(!(!o.support||!!o.support[r*o.size*o.size+d*o.size+h]))return{required:!1,valid:0};const m=this.probes[Ec(n,s,a,r)],v=m?.active&&m.key===`${n}/${s}/${a}/${r}/${l}`;return{required:!0,blocked:!!(v&&m.blocked),valid:v?m.valid:0}});this.coverageFields=t,this.coverageData.fill(0);for(const n of t){ce.coverageGrids.value[n.level].set(n.originX-e.x,n.originZ-e.z,n.spacing,n.width);for(let r=0;r<n.height;r++)for(let s=0;s<n.width;s++)for(let a=0;a<4;a++)this.coverageData[((n.level*48+r)*48+s)*4+a]=yd.toHalfFloat(n.data[(r*n.width+s)*4+a])}this.coverage.needsUpdate=!0}captureFace(e,t,n){const r=this.captureScope?.(),s=this.renderer,a=this.cameras[t],o=s.getRenderTarget(),l=s.toneMapping,c=this.scene.background,u=s.getClearColor(new fe),h=s.getClearAlpha();a.position.copy(e.position).sub(n),a.far=Ot[e.level].far,a.updateProjectionMatrix(),a.updateMatrixWorld(),ce.capture.value=1,ce.captureOrigin.value.copy(a.position),ce.captureFar.value=a.far,ce.irrAtlas.value=this.fallback,ce.depthAtlas.value=this.fallback,ce.probeMeta.value=this.fallback;try{s.toneMapping=Ln,this.scene.background=ce.sky.value,s.setRenderTarget(this.raw,t),s.setClearColor(ce.sky.value,1),s.clear(),s.render(this.scene,a)}finally{ce.capture.value=0,ce.irrAtlas.value=this.irr.texture,ce.depthAtlas.value=this.depth.texture,ce.probeMeta.value=this.meta,this.scene.background=c,s.toneMapping=l,s.setRenderTarget(o),s.setClearColor(u,h),r?.()}}publish(e){const t=this.renderer,n=t.getRenderTarget(),r=t.autoClear;t.autoClear=!1;try{const s=e.ready?this.transitions.begin(e,this):null,a=s?s.index:e.slot,o=s?16:Dn;this.quad.material=this.filterMaterial;for(const[l,c,u]of[[s?this.transitions.newIrr:this.irr,ui,0],[s?this.transitions.newDepth:this.depth,Pi,1]]){const h=c+2;Hr(t,l,a%o*h,Math.floor(a/o)*h,h,h,!0),this.filterMaterial.uniforms.resolution.value=c,this.filterMaterial.uniforms.depthPass.value=u,t.render(this.filterScene,this.filterCamera)}}finally{t.autoClear=r,t.setRenderTarget(n)}}drawPreview(e,t){if(!this.preview)return;const n=this.renderer,r=Math.min(94,Math.floor((e-32)/6)),s=e-6*r-24,a=80;this.quad.material=this.previewMaterial,n.autoClear=!1,n.setScissorTest(!0);for(let o=0;o<6;o++)n.setViewport(s+o*r,a,r-3,r-3),n.setScissor(s+o*r,a,r-3,r-3),this.previewMaterial.uniforms.face.value=o,n.render(this.filterScene,this.filterCamera);n.setScissorTest(!1),n.setViewport(0,0,e,t),n.autoClear=!0,this.quad.material=this.filterMaterial}inspect(e,t,n){return Ot.map((r,s)=>{const a=s===0&&t<28.5?ce.groundGrid.value:ce.grids.value[s],o=Math.floor((e-this.origin.x-a.x)/a.z),l=Math.floor((n-this.origin.z-a.y)/a.z),c=o>=0&&l>=0&&o<r.size-1&&l<r.size-1;return{level:s,spacing:a.z,inside:c,near:this.wanted.filter(u=>u.level===s&&Math.abs(u.position.x-e)<r.spacing*1.6&&Math.abs(u.position.z-n)<r.spacing*1.6&&Math.abs(u.position.y-t)<80).map(u=>({position:u.position.toArray(),ready:u.ready,blocked:u.blocked,key:u.key}))}})}stats(){const e=this.wanted.filter(t=>!t.blocked);return{anchorUpdates:this.anchorUpdates||0,anchorTeleports:this.anchorTeleports||0,layout:this.layout,candidates:this.candidates||0,pruned:this.pruned||0,receiverBounds:this.support.bounds.length,byHeight:on.map((t,n)=>({height:t,total:e.filter(r=>r.layer===n).length})),ready:e.filter(t=>t.ready).length,total:e.length,dirty:e.filter(t=>t.dirty).length,resident:this.probes.filter(Boolean).length,capacity:Fa,blocked:this.wanted.length-e.length,faces:this.captureFaces,filtered:this.filterRuns,levels:Ot.map((t,n)=>({spacing:t.spacing,groundSpacing:Na(n,0,this.groundSpacing),ready:e.filter(r=>r.level===n&&r.ready).length,total:e.filter(r=>r.level===n).length})),heights:on,transitions:{...this.transitions.stats(),warming:e.filter(t=>t.ready&&t.valid<1).length},lastBlends:this.lastBlends,coverageMB:this.coverageData.byteLength/1048576,atlasMB:(this.irr.width*this.irr.height+this.depth.width*this.depth.height)*8/1048576}}}class O_{constructor(e){this.gl=e.getContext(),this.ext=this.gl.getExtension("EXT_disjoint_timer_query_webgl2"),this.pending=[],this.active=null,this.cpu={},this.gpu={},this.frame=[],this.invalid=0,this.latest={},this.sampleCount=0,this.enabled=!0}beginFrame(){this.poll(),this.cpu={},this.start=performance.now()}cpuPass(e,t){const n=performance.now();try{return t()}finally{this.cpu[e]=(this.cpu[e]||0)+performance.now()-n}}gpuBegin(e,t={}){if(!this.ext||this.active||this.pending.length>=24)return;const n=this.gl.createQuery();this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,n),this.active={name:e,query:n,meta:t}}gpuEnd(){this.active&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.active.name==="probes"&&this.active.meta.faces===0&&!this.active.meta.blends?this.gl.deleteQuery(this.active.query):this.pending.push(this.active),this.active=null)}poll(){if(!this.ext)return;const e=this.gl.getParameter(this.ext.GPU_DISJOINT_EXT),t=[];for(const n of this.pending){const r=this.gl.getQueryParameter(n.query,this.gl.QUERY_RESULT_AVAILABLE);if(e||r){if(e)this.invalid++;else{const s=this.gl.getQueryParameter(n.query,this.gl.QUERY_RESULT)/1e6;this.gpu[n.name]??=[],this.gpu[n.name].push(s),this.gpu[n.name].length>120&&this.gpu[n.name].shift(),this.latest[n.name]={ms:s,...n.meta},this.sampleCount++}this.gl.deleteQuery(n.query)}else t.push(n)}this.pending=t}endFrame(e,t){this.cpu.total=performance.now()-this.start,this.frame.push({cpu:{...this.cpu},interval:e*1e3,counts:t}),this.frame.length>120&&this.frame.shift()}stats(){const e=r=>{if(!r.length)return null;const s=[...r].sort((a,o)=>a-o);return{mean:r.reduce((a,o)=>a+o,0)/r.length,p95:s[Math.floor((s.length-1)*.95)],last:r.at(-1)}},t=["total","environment","weather","debug","tiles","field","probes","ao","reflections","main","ui"],n=Object.fromEntries(t.map(r=>[r,e(this.frame.map(s=>s.cpu[r]||0))]));return{gpuSupported:!!this.ext,cpu:n,gpu:{reflections:e(this.gpu.reflections||[]),probes:e(this.gpu.probes||[]),ao:e(this.gpu.ao||[]),main:e(this.gpu.main||[]),weather:e(this.gpu.weather||[]),debug:e(this.gpu.debug||[])},interval:e(this.frame.map(r=>r.interval)),latestGPU:this.latest,pendingQueries:this.pending.length,invalidSamples:this.invalid,sampleCount:this.sampleCount,counts:this.frame.at(-1)?.counts}}}function z_(i,e,t,n,r){const s=2*i/e,a=Math.max(.15,Math.sin(r*Math.PI/180));return{texel:s,normalBias:Math.min(.03,s*.08)*a,bias:-Math.min(.015,s*.02)/(n-t)}}const Nc={low:{samples:8,scale:.5},medium:{samples:12,scale:.5},high:{samples:20,scale:1}};function B_(i,e,t="medium"){const n=Nc[t]||Nc.medium,r=Math.max(1,Math.ceil(i*n.scale)),s=Math.max(1,Math.ceil(e*n.scale));return{width:r,height:s,samples:n.samples,bytes:r*s*11}}const Oc="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",Uu=`
uniform sampler2D tDepth;uniform vec2 size,nearFar;uniform mat4 inverseProjection,projection;
float viewDepth(float d){return nearFar.x*nearFar.y/(nearFar.y-d*(nearFar.y-nearFar.x));}
vec3 positionAt(vec2 uv,float depth){vec4 p=inverseProjection*vec4(uv*2.-1.,depth*2.-1.,1.);return p.xyz/p.w;}
`,k_=`varying vec2 vUv;${Uu}
uniform float radius;uniform int sampleCount;
void main(){
 float depth=texture2D(tDepth,vUv).r;if(depth>=.999999){gl_FragColor=vec4(1.);return;}
 vec3 p=positionAt(vUv,depth);vec2 pixel=1./size;
 vec3 l=positionAt(vUv-vec2(pixel.x,0.),texture2D(tDepth,vUv-vec2(pixel.x,0.)).r);
 vec3 r=positionAt(vUv+vec2(pixel.x,0.),texture2D(tDepth,vUv+vec2(pixel.x,0.)).r);
 vec3 b=positionAt(vUv-vec2(0.,pixel.y),texture2D(tDepth,vUv-vec2(0.,pixel.y)).r);
 vec3 t=positionAt(vUv+vec2(0.,pixel.y),texture2D(tDepth,vUv+vec2(0.,pixel.y)).r);
 vec3 dx=abs(r.z-p.z)<abs(p.z-l.z)?r-p:p-l,dy=abs(t.z-p.z)<abs(p.z-b.z)?t-p:p-b;
 vec3 n=normalize(cross(dx,dy));if(dot(n,-p)<0.)n=-n;
 vec3 up=abs(n.z)>.95?vec3(0.,1.,0.):vec3(0.,0.,1.),tangent=normalize(cross(up,n)),bitangent=cross(n,tangent);
 // Stable screen-space rotation; no frame-dependent noise or history buffer.
 float angle=6.28318530718*fract(sin(dot(floor(gl_FragCoord.xy),vec2(12.9898,78.233)))*43758.5453);
 float occlusion=0.,count=float(sampleCount),bias=max(.06,radius*.025);
 for(int i=0;i<20;i++){
  if(i>=sampleCount)break;
  float f=(float(i)+.5)/count,phi=float(i)*2.39996323+angle;
  vec3 direction=tangent*(sqrt(f)*cos(phi))+bitangent*(sqrt(f)*sin(phi))+n*sqrt(1.-f);
  vec3 q=p+direction*radius*(.2+.8*f);vec4 clip=projection*vec4(q,1.);vec2 uv=clip.xy/clip.w*.5+.5;
  if(clip.w<=0.||any(lessThan(uv,vec2(0.)))||any(greaterThan(uv,vec2(1.))))continue;
  float d=texture2D(tDepth,uv).r;if(d>=.999999)continue;float z=-viewDepth(d),difference=z-q.z;
  float range=1.-smoothstep(radius*.5,radius*1.5,abs(p.z-z));
  occlusion+=smoothstep(bias,bias+.12,difference)*range;
 }
 float projectedRadius=radius*projection[1][1]*size.y/(2.*max(-p.z,.01));
 float visibility=1.-occlusion/count*smoothstep(.5,2.5,projectedRadius);
 gl_FragColor=vec4(vec3(clamp(visibility,0.,1.)),1.);
}`,G_=`varying vec2 vUv;${Uu}
uniform sampler2D source;uniform vec2 direction;
void main(){
 float d=texture2D(tDepth,vUv).r;if(d>=.999999){gl_FragColor=vec4(1.);return;}
 float center=viewDepth(d),sum=0.,weights=0.,tolerance=.12+center*.01;
 for(int i=-2;i<=2;i++){
  vec2 uv=clamp(vUv+direction*float(i)/size,.5/size,1.-.5/size);float sampleDepth=texture2D(tDepth,uv).r;if(sampleDepth>=.999999)continue;
  float w=exp(-float(i*i)*.5-abs(viewDepth(sampleDepth)-center)/tolerance*2.);
  sum+=texture2D(source,uv).r*w;weights+=w;
 }
 gl_FragColor=vec4(vec3(sum/max(weights,.00001)),1.);
}`;function Ba(i,e){return new un(i,e,{format:qs,type:Tn,minFilter:St,magFilter:St,depthBuffer:!1,generateMipmaps:!1})}class V_{constructor(e,t){Object.assign(this,{renderer:e,scene:t,mode:"on",quality:"medium",key:"",builds:0,lastCalls:0,lastTriangles:0,width:0,height:0}),this.depthMaterial=new nl,this.depthMaterial.colorWrite=!1,this.depthMaterial.blending=Yn,this.camera=new qt,this.filterScene=new Xr,this.filterCamera=new Fi(-1,1,1,-1,0,1),this.uniforms={tDepth:{value:null},size:{value:new _e},nearFar:{value:new _e},inverseProjection:{value:new Je},projection:{value:new Je},radius:je.radius,sampleCount:{value:12}},this.aoMaterial=new Dt({vertexShader:Oc,fragmentShader:k_,uniforms:this.uniforms,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.blurMaterial=new Dt({vertexShader:Oc,fragmentShader:G_,uniforms:{...this.uniforms,source:{value:null},direction:{value:new _e}},depthTest:!1,depthWrite:!1,toneMapped:!1}),this.quad=new ft(new Fn(2,2),this.aoMaterial),this.filterScene.add(this.quad),this.fallback=new cr(new Uint8Array([255,255,255,255]),1,1),this.fallback.needsUpdate=!0,je.texture.value=this.fallback,je.depth.value=this.fallback,this.setMode("on")}setMode(e){this.mode=e,Vv(e!=="off"),je.view.value=e==="view"?1:0}resize(e,t){je.viewport.value.set(e,t);const n=B_(e,t,this.quality);if(!(n.width===this.width&&n.height===this.height&&n.samples===this.samples)){this.depthTarget?.dispose(),this.depthTarget?.depthTexture.dispose();for(const r of this.maps||[])r.dispose();Object.assign(this,{width:n.width,height:n.height,samples:n.samples,bytes:n.bytes,key:""}),this.depthTarget=new un(n.width,n.height,{minFilter:St,magFilter:St,depthBuffer:!0,generateMipmaps:!1}),this.depthTarget.depthTexture=new $s(n.width,n.height,Kn),this.depthTarget.depthTexture.minFilter=this.depthTarget.depthTexture.magFilter=St,this.maps=[Ba(n.width,n.height),Ba(n.width,n.height),Ba(n.width,n.height)],this.maps[2].texture.minFilter=this.maps[2].texture.magFilter=Ct,this.uniforms.tDepth.value=this.depthTarget.depthTexture,this.uniforms.size.value.set(n.width,n.height),this.uniforms.sampleCount.value=n.samples,je.depth.value=this.depthTarget.depthTexture,je.texture.value=this.maps[2].texture,je.size.value.copy(this.uniforms.size.value)}}needsUpdate(e,t){const n=this.renderer.getDrawingBufferSize(new _e);return this.resize(n.x,n.y),e.updateMatrixWorld(),this.nextKey=[...e.matrixWorld.elements,...e.projectionMatrix.elements,t.version,t.origin.x,t.origin.z,this.quality,je.radius.value].join("/"),this.mode!=="off"&&this.nextKey!==this.key}update(e,t){if(this.lastCalls=0,this.lastTriangles=0,!this.needsUpdate(e,t))return!1;const n=this.renderer,r=this.scene,s=n.getRenderTarget();n.getViewport(new He);const a=n.getClearColor(new fe),o=n.getClearAlpha(),l=r.background,c=r.overrideMaterial,u=r.fog,h=n.shadowMap.enabled,d=n.autoClear,f=n.info.render.calls,m=n.info.render.triangles;try{return this.camera.copy(e),this.camera.layers.set(0),this.camera.updateMatrixWorld(),this.uniforms.nearFar.value.set(e.near,e.far),je.nearFar.value.copy(this.uniforms.nearFar.value),this.uniforms.projection.value.copy(e.projectionMatrix),this.uniforms.inverseProjection.value.copy(e.projectionMatrixInverse),n.autoClear=!0,n.shadowMap.enabled=!1,r.background=null,r.fog=null,r.overrideMaterial=this.depthMaterial,Hr(n,this.depthTarget),n.setClearColor(16777215,1),n.clear(),n.render(r,this.camera),r.overrideMaterial=c,this.quad.material=this.aoMaterial,n.setRenderTarget(this.maps[0]),n.render(this.filterScene,this.filterCamera),this.quad.material=this.blurMaterial,this.blurMaterial.uniforms.source.value=this.maps[0].texture,this.blurMaterial.uniforms.direction.value.set(1,0),n.setRenderTarget(this.maps[1]),n.render(this.filterScene,this.filterCamera),this.blurMaterial.uniforms.source.value=this.maps[1].texture,this.blurMaterial.uniforms.direction.value.set(0,1),n.setRenderTarget(this.maps[2]),n.render(this.filterScene,this.filterCamera),this.key=this.nextKey,this.builds++,!0}finally{r.background=l,r.fog=u,r.overrideMaterial=c,n.shadowMap.enabled=h,n.autoClear=d,n.setRenderTarget(s),n.setClearColor(a,o),this.lastCalls=n.info.render.calls-f,this.lastTriangles=n.info.render.triangles-m}}stats(){return{mode:this.mode,quality:this.quality,radius:je.radius.value,strength:je.strength.value,direct:je.direct.value,resolution:[this.width,this.height],samples:this.samples,builds:this.builds,lastCalls:this.lastCalls,lastTriangles:this.lastTriangles,estimatedMiB:(this.bytes||0)/1048576}}}const ka=Object.freeze({clear:{cloud:0,rain:0,flakes:0,wet:0,snow:0,transmission:1,ambient:1,haze:1,windX:1,windZ:.35},cloudy:{cloud:.76,rain:0,flakes:0,wet:0,snow:0,transmission:.32,ambient:.82,haze:1.65,windX:2.6,windZ:.8},rain:{cloud:.98,rain:1,flakes:0,wet:1,snow:0,transmission:.1,ambient:.64,haze:3.1,windX:5,windZ:1.6},snow:{cloud:.9,rain:0,flakes:1,wet:.1,snow:1,transmission:.23,ambient:.88,haze:3.4,windX:1.3,windZ:.5}}),zc=i=>Math.max(0,Math.min(1,i));class H_{constructor(){this.mode="clear",this.intensity=1,this.duration=6,this.paused=!1,this.clock=0,this.elapsed=0,this.progress=1,this.revision=0,this.current={...ka.clear},this.source={...this.current},this.start={...this.current},this.target={...this.current},this.windPhase=[0,0]}set(e,{intensity:t=this.intensity,duration:n=this.duration,instant:r=!1}={}){if(!ka[e])throw new Error("Unknown weather: "+e);if(!Number.isFinite(t)||!Number.isFinite(n))throw new Error("Invalid weather parameters");this.mode=e,this.intensity=zc(t),this.duration=Math.max(0,Math.min(30,n));const s={...ka[e]};for(const a of["rain","flakes","wet","snow"])s[a]*=this.intensity;return this.start={...this.current},this.target=s,this.elapsed=0,Object.keys(s).every(a=>Math.abs(this.current[a]-s[a])<1e-8)?(this.progress=1,!1):(this.progress=0,r||!this.duration?(this.current={...s},this.progress=1,this.commit()):!1)}commit(){const e=Object.keys(this.current).some(t=>Math.abs(this.current[t]-this.source[t])>1e-7);return e&&(this.source={...this.current},this.revision++),e}advance(e){if(this.paused)return!1;e=Math.max(0,Math.min(e,.1)),this.clock+=e;let t=!1;if(this.progress<1){this.elapsed+=e,this.progress=Math.min(1,this.elapsed/this.duration);const n=this.progress*this.progress*(3-2*this.progress);for(const r of Object.keys(this.target))this.current[r]=this.start[r]+(this.target[r]-this.start[r])*n;this.progress===1&&(this.current={...this.target},t=this.commit())}return this.windPhase[0]=(this.windPhase[0]+this.current.windX*e)%4096,this.windPhase[1]=(this.windPhase[1]+this.current.windZ*e)%4096,t}compatibility(){const e=Math.max(Math.abs(this.current.transmission-this.source.transmission),Math.abs(this.current.wet-this.source.wet)*.8,Math.abs(this.current.snow-this.source.snow));return zc(1-e*1.5)}stats(){return{mode:this.mode,intensity:this.intensity,transition:this.progress,duration:this.duration,paused:this.paused,clock:this.clock,sourceRevision:this.revision,giCompatibility:this.compatibility(),current:{...this.current},source:{...this.source}}}}function W_(){const e=new Uint8Array(65536);let t=88632881;const n=(a,o)=>{let l=Math.imul(a,374761393)^Math.imul(o,668265263);return l=Math.imul(l^l>>>13,1274126177),((l^l>>>16)>>>0)/4294967296},r=(a,o,l)=>{const c=Math.floor(a),u=Math.floor(o),h=a-c,d=o-u,f=h*h*(3-2*h),m=d*d*(3-2*d),v=(g,p)=>n(g%l,p%l);return(v(c,u)*(1-f)+v(c+1,u)*f)*(1-m)+(v(c,u+1)*(1-f)+v(c+1,u+1)*f)*m};for(let a=0;a<16384;a++){t^=t<<13,t^=t>>>17,t^=t<<5;const o=t>>>0&255,l=a%128,c=Math.floor(a/128),u=r(l/16,c/16,8)*.55+r(l/8,c/8,16)*.3+r(l/4,c/4,32)*.15;e.set([o,Math.round(u*255),o,255],a*4)}const s=new cr(e,128,128,kt);return s.wrapS=s.wrapT=Is,s.magFilter=Ct,s.minFilter=qn,s.generateMipmaps=!0,s.needsUpdate=!0,s}class X_{constructor(e,t){this.renderer=e,this.scene=t,this.size=384,this.resolution=256,this.key="",this.updates=0,this.lastCalls=0,this.camera=new Fi(-192,192,192,-192,1,1e3),this.camera.up.set(0,0,-1),this.target=new un(256,256,{minFilter:St,magFilter:St}),this.target.depthTexture=new $s(256,256,Kn),this.material=new nl,zt.roof.value=this.target.depthTexture}needed(e,t,n){if(this.enabled=n,zt.roofReady.value=n?1:0,!n)return!1;const r=e.position.x+t.origin.x,s=e.position.z+t.origin.z;return this.x=Math.round(r/32)*32-t.origin.x,this.z=Math.round(s/32)*32-t.origin.z,this.top=Math.max(320,Math.ceil((e.position.y+120)/64)*64),this.nextKey=[this.x,this.z,this.top,t.version,t.origin.x,t.origin.z].join("/"),this.nextKey!==this.key}update(){const e=this.renderer,t=this.scene,n=this.camera,r=e.getRenderTarget();e.getViewport(new He),e.getScissor(new He),e.getScissorTest();const s=t.overrideMaterial,a=t.background,o=e.autoClear,l=e.info.render.calls;n.position.set(this.x,this.top,this.z),n.far=this.top+20,n.lookAt(this.x,0,this.z),n.updateProjectionMatrix(),n.updateMatrixWorld(),zt.roofMatrix.value.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse);try{t.overrideMaterial=this.material,t.background=null,e.autoClear=!0,Hr(e,this.target),e.clear(),e.render(t,n),this.key=this.nextKey,this.updates++}finally{t.overrideMaterial=s,t.background=a,e.autoClear=o,e.setRenderTarget(r),this.lastCalls=e.info.render.calls-l}}stats(){return{updates:this.updates,lastCalls:this.lastCalls,resolution:256,span:384,estimatedMiB:256*256*8/1048576,enabled:this.enabled||!1}}}const q_="varying vec3 ray;void main(){ray=position;vec4 clip=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=clip.xyww;}",Y_=`
uniform vec3 zenith,horizon,cloudColor,sunDirection;uniform float cover,night;uniform sampler2D noiseMap;uniform vec2 windPhase;
uniform float inspect,aoView;varying vec3 ray;
void main(){
 vec3 d=normalize(ray);float h=smoothstep(-.10,.7,d.y);vec3 color=mix(horizon,zenith,h);
 if(cover>.001&&d.y>-.03){
  vec2 q=d.xz/max(d.y+.18,.12)*.18+windPhase*.0007;
  float n=texture2D(noiseMap,q).g*.55+texture2D(noiseMap,q*2.1+vec2(.23,.47)).g*.30+texture2D(noiseMap,q*4.3).g*.15;
  float cloud=smoothstep(1.-cover*.78-.20,1.-cover*.78+.05,n)*smoothstep(-.03,.12,d.y);
  color=mix(color,cloudColor*(.75+.3*n),cloud);
 }
 float sun=pow(max(dot(d,normalize(sunDirection)),0.),night>.5?1800.:900.);color+=vec3(1.,.88,.65)*sun*(night>.5?.45:2.)*(1.-cover*.85);
 if(inspect>.5)color=vec3(0.);if(aoView>.5)color=vec3(1.);gl_FragColor=vec4(color,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`,$_=`
attribute vec4 seed;uniform float time,isSnow;uniform vec3 center;uniform vec2 windPhase,windVelocity;uniform vec2 viewport;
varying vec2 shape;varying vec3 particleWorld;varying float fade;
void main(){
 float speed=mix(30.,2.4,isSnow),height=160.;
 vec3 p=center+vec3(mod(seed.x*240.+windPhase.x,240.)-120.,(fract(seed.y-time*speed/height)-.5)*height,mod(seed.z*240.+windPhase.y,240.)-120.);
 if(isSnow>.5){p.x+=sin(time*.8+seed.w*70.)*1.5;p.z+=cos(time*.65+seed.x*30.);}
 particleWorld=p;shape=uv;vec4 v=modelViewMatrix*vec4(p,1.);float radius=mix(.045,.12+seed.w*.14,isSnow);
 float minWidth=max(radius,-v.z/projectionMatrix[1][1]/viewport.y*1.);
 vec2 displacement;
 if(isSnow>.5)displacement=position.xy*max(minWidth,radius)*2.;
 else{vec2 fall=normalize((viewMatrix*vec4(windVelocity.x,-30.,windVelocity.y,0.)).xy);vec2 across=vec2(fall.y,-fall.x);displacement=across*position.x*minWidth*2.+fall*position.y*(1.8+seed.w*2.);}
 v.xy+=displacement;particleWorld+=vec3(viewMatrix[0].x,viewMatrix[1].x,viewMatrix[2].x)*displacement.x+vec3(viewMatrix[0].y,viewMatrix[1].y,viewMatrix[2].y)*displacement.y;
 float distance=length(p-center);fade=1.-smoothstep(85.,155.,distance);gl_Position=projectionMatrix*v;
}`,j_=`
${Eu}
uniform float isSnow,strength,inspect,aoView;uniform vec3 color;varying vec2 shape;varying vec3 particleWorld;varying float fade;
void main(){
 if(inspect>.5||aoView>.5||labSkyExposure(particleWorld)<.5)discard;
 vec2 q=shape-.5;float alpha;
 if(isSnow>.5)alpha=exp(-dot(q,q)*17.)*smoothstep(.5,.3,length(q));
 else alpha=(1.-smoothstep(.15,.5,abs(q.x)))*(1.-abs(q.y)*2.)*.65;
 alpha*=strength*fade;if(alpha<.015)discard;gl_FragColor=vec4(color,alpha);
 #include <colorspace_fragment>
}`,Z_=`
attribute vec4 seed;uniform float time;uniform vec3 center;uniform mat4 labRoofMatrix;uniform sampler2D labRoofDepth;uniform float roofTop,roofRange;
varying vec2 shape;varying float alpha;
void main(){
 float age=fract(time*1.5+seed.w);vec3 p=center+vec3((seed.x-.5)*150.,0.,(seed.z-.5)*150.);
 vec4 q=labRoofMatrix*vec4(p,1.);vec2 uvRoof=q.xy/q.w*.5+.5;float depth=texture2D(labRoofDepth,uvRoof).r;
 p.y=roofTop-1.-depth*(roofRange-1.)+.06;float radius=.15+age*.65;
 p.xz+=vec2(position.x,-position.y)*radius*2.;shape=uv;alpha=(1.-age)*step(depth,.9999);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
}`,K_="uniform float strength,inspect,aoView;varying vec2 shape;varying float alpha;void main(){if(inspect>.5||aoView>.5)discard;float r=length(shape-.5)*2.,a=(1.-smoothstep(.035,.14,abs(r-.72)))*alpha*strength*.18;if(a<.01)discard;gl_FragColor=vec4(.7,.8,.9,a);}";function Bc(i){const e=new Fn(1,1),t=new vu;t.index=e.index,t.attributes=e.attributes;const n=new Float32Array(i*4);let r=86416945;for(let s=0;s<n.length;s++)r=Math.imul(r,1664525)+1013904223>>>0,n[s]=r/4294967296;return t.setAttribute("seed",new Li(n,4)),t.instanceCount=i,t}class J_{constructor(e,t,n,r){this.camera=t,this.count=1800,this.windPhase={value:new _e},this.time={value:0},this.center={value:new C},this.inspection={inspect:ce.view,aoView:je.view},this.skyUniforms={zenith:{value:new fe},horizon:{value:new fe},cloudColor:{value:new fe},cover:{value:0},night:{value:0},noiseMap:{value:n},windPhase:this.windPhase,sunDirection:{value:r},...this.inspection},this.sky=new ft(new Yr(4e3,32,16),new Dt({uniforms:this.skyUniforms,vertexShader:q_,fragmentShader:Y_,side:Kt,depthWrite:!1})),this.sky.layers.set(6),this.sky.renderOrder=1e3,this.sky.frustumCulled=!1,e.add(this.sky),t.layers.enable(6),t.layers.enable(7);const s={labRoofDepth:zt.roof,labRoofMatrix:zt.roofMatrix,labRoofReady:zt.roofReady};this.particles=[];for(const a of[0,1]){const o={time:this.time,center:this.center,windPhase:this.windPhase,windVelocity:{value:new _e},viewport:{value:new _e},isSnow:{value:a},strength:{value:0},color:{value:new fe},...s,...this.inspection},l=new ft(Bc(3600),new Dt({uniforms:o,vertexShader:$_,fragmentShader:j_,transparent:!0,depthWrite:!1}));l.layers.set(7),l.frustumCulled=!1,l.renderOrder=6,e.add(l),this.particles.push(l)}this.splash=new ft(Bc(640),new Dt({uniforms:{time:this.time,center:this.center,strength:{value:0},roofTop:{value:320},roofRange:{value:340},...s,...this.inspection},vertexShader:Z_,fragmentShader:K_,transparent:!0,depthWrite:!1})),this.splash.layers.set(7),this.splash.frustumCulled=!1,this.splash.renderOrder=6,e.add(this.splash)}update(e,t,n,r,s,a=!0){const o=e.current;this.time.value=e.clock,this.windPhase.value.fromArray(e.windPhase),this.sky.position.copy(this.camera.position),this.skyUniforms.cover.value=o.cloud,this.skyUniforms.night.value=+t.night,this.skyUniforms.zenith.value.copy(t.zenith),this.skyUniforms.horizon.value.copy(t.fog),this.skyUniforms.cloudColor.value.copy(t.cloudColor);const l=new C;this.camera.getWorldDirection(l),l.y=0,l.lengthSq()>0&&l.normalize().multiplyScalar(28),this.center.value.copy(this.camera.position).add(l);for(let c=0;c<2;c++){const u=this.particles[c],h=c?o.flakes:o.rain;u.visible=a&&h>.001,u.geometry.instanceCount=Math.max(1,Math.round(this.count*h)),u.material.uniforms.strength.value=Math.min(1,h*2),u.material.uniforms.viewport.value.set(r,s),u.material.uniforms.windVelocity.value.set(o.windX,o.windZ),u.material.uniforms.color.value.set(t.night?c?"#b3c3d8":"#9eb5cc":c?"#ffffff":"#bdd2e1")}this.splash.visible=a&&o.rain>.001&&zt.roofReady.value>.5,this.splash.geometry.instanceCount=Math.round(this.count/6*o.rain),this.splash.material.uniforms.strength.value=o.rain,this.splash.material.uniforms.roofTop.value=n.top||320,this.splash.material.uniforms.roofRange.value=(n.top||320)+20}stats(){return{particles:this.particles.filter(e=>e.visible).reduce((e,t)=>e+t.geometry.instanceCount,0),splashes:this.splash.visible?this.splash.geometry.instanceCount:0,quality:this.count<=900?"low":this.count<=1800?"medium":"high",cameraVolume:[240,160,240],skyNoiseReads:3}}}function wi(i,e){const t=i.cloud,n=new fe(e?"#496a93":"#a8cad8"),r=new fe(e?"#2b3b4b":"#848b6c");e&&(n.setRGB(.045,.075,.125),r.setRGB(.022,.035,.055)),n.lerp(new fe(e?"#36516d":"#a5afb9"),t*.65).multiplyScalar(i.ambient),r.lerp(new fe(e?"#29394c":"#9ca8ae"),t*.3).multiplyScalar(i.ambient);const s=new fe(e?"#101e31":"#bfd5dd").lerp(new fe(e?"#17212d":"#778a9c"),t*.85),a=new fe(e?"#16283f":"#cbd9d7").lerp(new fe(e?"#253344":"#94a5b2"),t*.8);return{night:e,data:{...i},sky:n,ground:r,background:s,fog:a,zenith:new fe(e?"#0c172b":"#69aadd").lerp(s,t*.8),cloudColor:new fe(e?"#35475d":"#f1f3ef").lerp(new fe(e?"#293647":"#a7b3bf"),t*.7),sunColor:new fe(e?"#b4cdf4":"#fff2d4").lerp(new fe(e?"#a1b4cd":"#d8e2ef"),t*.5),sunIntensity:(e?.18:2.9)*i.transmission,fogDensity:(e?6e-4:32e-5)*i.haze,exposure:1.15}}class Q_{constructor(e,t,n,r,s,a){Object.assign(this,{renderer:e,scene:t,camera:n,sun:r,probes:a}),this.model=new H_,this.sourceVersion=0,this.invalidations=0,this.effectsEnabled=!0,this.noise=W_(),zt.noise.value=this.noise,this.roof=new X_(e,t),this.effects=new J_(t,n,this.noise,s),this.main=wi(this.model.current,!1),this.source=wi(this.model.source,!1),this.applyMain(),a.captureScope=()=>(this.apply(this.source,1),()=>this.applyMain())}apply(e,t){this.sun.color.copy(e.sunColor),this.sun.intensity=e.sunIntensity,this.scene.background.copy(e.background),this.scene.fog.color.copy(e.fog),this.scene.fog.density=e.fogDensity,this.renderer.toneMappingExposure=e.exposure,ce.sky.value.copy(e.sky),ce.ground.value.copy(e.ground),zt.wet.value=e.data.wet,zt.snow.value=e.data.snow,zt.giCompatibility.value=t}applyMain(){this.apply(this.main,this.model.compatibility())}onNightChange(){this.source=wi(this.model.source,!!Ie.enabled.value),this.sourceVersion++,this.main=wi(this.model.current,!!Ie.enabled.value),this.applyMain()}commit(){this.source=wi(this.model.source,!!Ie.enabled.value),this.sourceVersion++,this.invalidations++,this.probes.invalidate(!0)}set(e,t={}){t.paused!==void 0&&(this.model.paused=!!t.paused),t.effects!==void 0&&(this.effectsEnabled=!!t.effects),t.quality!==void 0&&(this.effects.count={low:900,medium:1800,high:3600}[t.quality]||1800),(e!==void 0||t.intensity!==void 0)&&this.model.set(e||this.model.mode,t)&&this.commit(),this.main=wi(this.model.current,!!Ie.enabled.value),this.resolvedProgress=this.model.progress,this.applyMain()}update(e,t,n,r){this.model.advance(e)&&this.commit(),(this.model.progress!==this.resolvedProgress||this.main.night!==!!Ie.enabled.value)&&(this.main=wi(this.model.current,!!Ie.enabled.value),this.resolvedProgress=this.model.progress),this.applyMain(),Ie.atmosphere.value=1+this.model.current.rain*.65+this.model.current.flakes*.25;const s=this.model.current,a=this.model.source,o=s.rain+s.flakes+s.wet+s.snow+a.wet+a.snow>.001,l=this.roof.needed(this.camera,t,o);return this.effects.update(this.model,this.main,this.roof,n,r,this.effectsEnabled),l}stats(){return{...this.model.stats(),sourceVersion:this.sourceVersion,probeInvalidations:this.invalidations,main:{sunIntensity:this.main.sunIntensity,fogDensity:this.main.fogDensity,sky:this.main.sky.toArray(),wet:this.main.data.wet,snow:this.main.data.snow},capture:{sunIntensity:this.source.sunIntensity,wet:this.source.data.wet,snow:this.source.data.snow},effects:this.effects.stats(),roof:this.roof.stats(),effectsEnabled:this.effectsEnabled}}}class e0{constructor(e,t,n,r,s){Object.assign(this,{renderer:e,probes:t,ao:n,environment:r,sun:s,lastCalls:0}),this.panel=document.getElementById("rt-panel"),this.grid=document.getElementById("rt-grid"),this.select=document.getElementById("rt-target"),this.cards=new Map;const a={source:{value:null},cube:{value:null},kind:{value:0},face:{value:0},channel:{value:-1},gain:{value:1},depthRange:{value:1e3},nearFar:{value:new _e},top:{value:320},available:{value:0},resolution:{value:new _e}};this.material=new Dt({uniforms:a,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
   #include <packing>
   varying vec2 vUv;uniform sampler2D source;uniform samplerCube cube;uniform int kind,face,channel;uniform float gain,depthRange,top,available;uniform vec2 nearFar,resolution;
   vec3 direction(vec2 uv){vec2 p=uv*2.-1.;if(face==0)return vec3(1.,-p.y,-p.x);if(face==1)return vec3(-1.,-p.y,p.x);if(face==2)return vec3(p.x,1.,p.y);if(face==3)return vec3(p.x,-1.,-p.y);if(face==4)return vec3(p.x,-p.y,1.);return vec3(-p.x,-p.y,-1.);}
   void main(){
    vec2 uv=(floor(vUv*resolution)+.5)/resolution;vec3 color=vec3(.035,.055,.07);
    if(available<.5){color+=mod(floor(vUv.x*20.)+floor(vUv.y*12.),2.)*.025;gl_FragColor=vec4(color,1.);return;}
    vec4 value;if(kind==6)value=textureCube(cube,direction(uv));else value=texture2D(source,uv);
    if(channel>=0){float c=channel==0?value.r:channel==1?value.g:channel==2?value.b:value.a;color=vec3(c*gain);}
    else if(kind==0||kind==6)color=pow(1.-exp(-max(value.rgb,0.)*gain),vec3(1./2.2));
    else if(kind==1)color=vec3(value.r);
    else if(kind==2)color=value.w<0.?vec3(.8,.16,.12):mix(vec3(.04,.06,.08),vec3(.15,.9,.4),clamp(value.w,0.,1.));
    else if(kind==3){float d=nearFar.x*nearFar.y/(nearFar.y-value.r*(nearFar.y-nearFar.x));color=vec3(clamp(log2(1.+d)/log2(1.+depthRange),0.,1.));}
    else if(kind==4){float h=top-nearFar.x-value.r*(nearFar.y-nearFar.x);color=vec3(value.r>.99999?0.:clamp(log2(1.+max(0.,h))/log2(1.+depthRange),0.,1.));}
    else if(kind==5)color=vec3(unpackRGBAToDepth(value));
    else if(kind==7)color=vec3(sqrt(max(0.,value.g-value.r*value.r))*gain*4.);
    gl_FragColor=vec4(color,1.);
   }`,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.scene=new Xr,this.camera=new Fi(-1,1,1,-1,0,1),this.scene.add(new ft(new Fn(2,2),this.material)),document.getElementById("rt-toggle").onclick=()=>this.toggle(),document.getElementById("rt-close").onclick=()=>this.toggle(!1),this.select.onchange=()=>this.syncCards(),document.getElementById("rt-gain").oninput=o=>document.getElementById("rt-gain-value").value=Number(o.target.value).toFixed(1)+"×"}get enabled(){return!this.panel.hidden}toggle(e=!this.enabled){this.panel.hidden=!e,e||(this.lastCalls=0),document.body.classList.toggle("rt-open",e),document.getElementById("rt-toggle").setAttribute("aria-expanded",String(e)),e&&this.syncCards()}targets(){const e=this.probes,t=this.ao,n=this.environment,r=e.transitions,s=(a,o,l,c,u,h=!0)=>({id:a,title:o,texture:l?.texture,width:l?.width||1,height:l?.height||1,kind:c,note:u,ready:!!l&&h});return[s("irr","探针辐照度图集",e.irr,0,"RGBA16F · HDR · 有效槽以 Meta 为准",e.filterRuns>0),s("moments","探针深度均值",e.depth,1,"RGBA16F · R=归一化距离；各级远距不同",e.filterRuns>0),s("variance","探针深度标准差",e.depth,7,"sqrt(G−R²) · 显示增益×4",e.filterRuns>0),{id:"meta",title:"探针 Meta / 有效度",texture:e.meta,width:e.meta.image.width,height:e.meta.image.height,kind:2,note:"RGBA32F · RGB=局部位置；W=有效度，红=阻塞",ready:!0},s("cube","探针原始六面",e.raw,6,"RGBA16F · RGB / A径向深度；+X −X +Y / −Y +Z −Z，共用暂存",e.captureFaces>0),s("shadow","太阳 / 月亮阴影",this.sun.shadow.map,5,"RGBA 打包深度 · 正交光空间；关闭时显示缓存"),{...s("ao-depth","AO 深度",t.depthTarget,3,"透视深度 → 对数距离显示",t.builds>0),texture:t.depthTarget?.depthTexture,near:t.camera.near,far:t.camera.far},s("ao-raw","AO 原始采样",t.maps?.[0],1,"R8 · 0遮挡 / 1无遮挡",t.builds>0),s("ao-final","AO 双向模糊后",t.maps?.[2],1,`R8 · ${t.mode==="off"?"已停用，保留缓存":"当前缓存"}`,t.builds>0),{...s("roof","天气顶部遮挡",n.roof.target,4,`顶部深度 → 高度显示 · 384m足迹 · ${n.roof.enabled?"使用中":"停用/缓存"}`,n.roof.updates>0),texture:n.roof.target.depthTexture,near:n.roof.camera.near,far:n.roof.camera.far,top:n.roof.top||320},s("old-irr","GI 过渡 · 旧辐照度",r.oldIrr,0,`128个历史槽 · ${r.active.length} 个正在过渡`,r.blended>0),s("new-irr","GI 过渡 · 新辐照度",r.newIrr,0,"局部暂存 · 不是第二套世界图集",r.blended>0),s("new-depth","GI 过渡 · 新深度矩",r.newDepth,1,"局部暂存 · 与辐照度同步渐变",r.blended>0)]}syncCards(){if(this.select.options.length<2)for(const t of this.targets()){const n=document.createElement("option");n.value=t.id,n.textContent=t.title,this.select.append(n)}this.grid.replaceChildren(),this.cards.clear();const e=this.select.value;for(const t of this.targets())if(e==="grid"||e===t.id){const n=document.createElement("article");n.className="rt-card",n.innerHTML=`<header>${t.title}<span class="rt-size"></span></header><div class="rt-image" aria-label="${t.title}"></div><p></p>`,n.onclick=()=>{this.select.value==="grid"&&(this.select.value=t.id,this.syncCards())},this.grid.append(n),this.cards.set(t.id,n)}this.grid.classList.toggle("single",e!=="grid")}render(e,t){if(this.lastCalls=0,!this.enabled)return;const n=this.renderer,r=this.material.uniforms,s=n.getViewport(new He),a=n.getScissor(new He),o=n.getScissorTest(),l=n.autoClear,c=n.getRenderTarget(),u=n.info.render.calls,h=this.grid.getBoundingClientRect();r.gain.value=Number(document.getElementById("rt-gain").value),r.depthRange.value=Math.max(1,Number(document.getElementById("rt-range").value)||1e3),r.channel.value=Number(document.getElementById("rt-channel").value);try{n.autoClear=!1,n.setRenderTarget(null),n.setScissorTest(!0),n.setScissor(Math.max(0,h.left),Math.max(0,t-h.bottom),Math.min(e,h.width),Math.min(t,h.height)),n.setViewport(h.left,t-h.bottom,h.width,h.height),r.available.value=0,n.render(this.scene,this.camera);for(const d of this.targets()){const f=this.cards.get(d.id);if(!f)continue;f.querySelector(".rt-size").textContent=`${d.width}×${d.height}${d.kind===6?" ×6":""}`,f.querySelector("p").textContent=d.ready?d.note:"尚未生成 · "+d.note;const m=f.querySelector(".rt-image").getBoundingClientRect(),v=Math.max(0,m.left,h.left),g=Math.min(e,m.right,h.right),p=Math.max(0,m.top,h.top),w=Math.min(t,m.bottom,h.bottom);if(!(g<=v||w<=p))if(n.setScissor(v,t-w,g-v,w-p),r.available.value=+d.ready,r.kind.value=d.kind,r.resolution.value.set(d.width,d.height),r.nearFar.value.set(d.near||1,d.far||1e3),r.top.value=d.top||320,d.kind===6){r.cube.value=d.texture;for(let S=0;S<6;S++)r.face.value=S,n.setViewport(m.left+S%3*m.width/3,t-m.bottom+(1-Math.floor(S/3))*m.height/2,m.width/3,m.height/2),n.render(this.scene,this.camera)}else r.source.value=d.texture||null,n.setViewport(m.left,t-m.bottom,m.width,m.height),n.render(this.scene,this.camera)}}finally{n.setRenderTarget(c),n.setViewport(s),n.setScissor(a),n.setScissorTest(o),n.autoClear=l,this.lastCalls=n.info.render.calls-u}}stats(){return{enabled:this.enabled,lastCalls:this.lastCalls,targets:this.targets().map(({texture:e,...t})=>t)}}}function t0(i){const e=document.createElement("details");e.id="runtime-diagnostics",e.open=!window.matchMedia("(max-width: 800px), (pointer: coarse)").matches,e.setAttribute("aria-label","运行诊断 Preview v3"),e.style.cssText="position:fixed;z-index:100;right:16px;bottom:140px;width:min(330px,calc(100vw - 32px));max-height:45vh;overflow:auto;padding:10px;border:1px solid #78938b;border-radius:8px;background:#f2f8f4;color:#163b30;font:12px/1.5 system-ui;box-sizing:border-box";const t=document.createElement("summary");t.textContent="运行诊断 · Preview v3（可折叠）",t.style.cursor="pointer";const n=document.createElement("pre");n.style.cssText="white-space:pre-wrap;overflow-wrap:anywhere;margin:8px 0 0;font:inherit",e.append(t,n),document.body.append(e);let r="待检测",s=null,a=0,o=0,l=-1/0;const c=[];function u(){try{const d=i.getExtension("WEBGL_debug_renderer_info");r=d?String(i.getParameter(d.UNMASKED_RENDERER_WEBGL)):"详细 renderer 扩展不可用；基础值："+String(i.getParameter(i.RENDERER))}catch{r="renderer 读取不可用"}}function h(){const d=c.length?c.reduce((m,v)=>m+v,0)/c.length:null,f=m=>m==null?"待采样":m.toFixed(2)+" ms";n.textContent=["仅在本机显示，不上传设备信息","renderer: "+r,"context lost: "+i.isContextLost(),"visibilityState: "+document.visibilityState+" · hasFocus: "+document.hasFocus(),"采样时刻: "+(performance.now()/1e3).toFixed(1)+" s（页面计时）","RAF 回调累计: "+a+" · 完成帧累计: "+o,"RAF 间隔（限帧前）最近: "+f(c.at(-1)),"RAF 间隔均值: "+f(d)+" · 窗口: "+c.length+"/60","完成帧指帧循环执行完毕，不等于 GPU 呈现；后台可能停止更新。"].join(`
`)}return u(),h(),document.addEventListener("visibilitychange",h),window.addEventListener("focus",h),window.addEventListener("blur",h),i.canvas.addEventListener("webglcontextlost",h),i.canvas.addEventListener("webglcontextrestored",()=>{u(),h()}),{raf(d){s!==null&&(c.push(d-s),c.length>60&&c.shift()),s=d,a++,d-l>=500&&(l=d,h())},completed(){o++}}}const $=i=>document.getElementById(i),ks=[],ke=new Rv({canvas:$("view"),antialias:!0,powerPreference:"high-performance"}),kc=t0(ke.getContext());ke.setPixelRatio(Math.min(devicePixelRatio,1.5));ke.outputColorSpace=ln;ke.toneMapping=Ho;ke.toneMappingExposure=1.15;ke.shadowMap.enabled=!0;ke.shadowMap.type=qc;ke.shadowMap.autoUpdate=!1;ke.info.autoReset=!1;ke.debug.onShaderError=(i,e,t,n)=>{const r=[i.getProgramInfoLog(e),i.getShaderInfoLog(t),i.getShaderInfoLog(n)].join(`
`);ks.push(r),console.error(r),$("error").hidden=!1,$("error").textContent="着色器编译失败："+r};const tn=new Xr;tn.background=new fe("#bfd5dd");tn.fog=new el("#cbd9d7",32e-5);const Ze=new qt(46,innerWidth/innerHeight,8,6500);Ze.layers.enable(2);Ze.layers.enable(5);Ze.position.set(560,720,840);const et=new Jv(Ze,ke.domElement);et.target.set(0,0,-50);et.enableDamping=!0;et.dampingFactor=.085;et.minDistance=55;et.maxDistance=2300;et.maxPolarAngle=Math.PI*.475;et.minPolarAngle=.12;et.screenSpacePanning=!1;et.update();let Gs=!0;et.addEventListener("start",()=>{Gs=!0});et.addEventListener("change",()=>{Gs=!0});const ze=new E_(tn),Ce=new N_(ke,tn),Rt=new V_(ke,tn),Ae=new O_(ke);Ce.timerSupported=!!Ae.ext;let Gc=null,ai=30,Vc=-1/0;const _t=new Gd("#fff2d4",2.9);_t.castShadow=!0;_t.shadow.mapSize.set(2048,2048);_t.shadow.camera.near=1;_t.shadow.camera.far=3200;_t.shadow.radius=2;tn.add(_t,_t.target);const Vs=new Bd("#ff9f56",0,95,2);tn.add(Vs);const $r=new ft(new Yr(2.5,12,8),new pi({color:"#ffb158",toneMapped:!1}));tn.add($r);$r.visible=!1;$r.layers.set(2);let cn=innerWidth,En=innerHeight,Us=0,rr=0,Lr=performance.now(),Hc=0,Ga=0,Va=Lr,Bo=0,Ir=!1,vn=!1,Qi=.26,ol="on",hi=145,Zn=42,At=null,ko=!1;const Wn=new Set,Cn=new C,oi=new C,Gt=new C,bn=new C;function Ks(){const i=Uo.degToRad(hi),e=Uo.degToRad(Zn);oi.set(Math.sin(i)*Math.cos(e),Math.sin(e),Math.cos(i)*Math.cos(e)),_t.position.copy(_t.target.position).addScaledVector(oi,1500),_t.updateMatrixWorld(),_t.target.updateMatrixWorld(),$("sun").value=hi,$("sun-value").value=`${hi}°`,$("elevation").value=Zn,$("elevation-value").value=`${Zn}°`,Ce.invalidate()}Ks();const Bt=new Q_(ke,tn,Ze,_t,oi,Ce),Wr=new Zv(ke,tn,{sky:Bt.effects.sky}),Hs=new e0(ke,Ce,Rt,Bt,_t);function n0(){const i=[];for(let n=0;n<150;n++){const r=ci(n/150),s=ci((n+1)/150),a=s.x-r.x,o=s.z-r.z,l=Math.hypot(a,o),c=-o/l*2.1,u=a/l*2.1;for(const h of[[r.x+c,25.31,r.z+u],[s.x+c,25.31,s.z+u],[s.x-c,25.31,s.z-u],[r.x+c,25.31,r.z+u],[s.x-c,25.31,s.z-u],[r.x-c,25.31,r.z-u]])i.push(...h)}const t=new Yt;return t.setAttribute("position",new Pt(i,3)),t.computeVertexNormals(),t}const jr=new Ci;tn.add(jr);const Iu=new ft(n0(),new pi({color:"#209f77",side:Mn,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));Iu.layers.set(2);jr.add(Iu);const mr=new Ci,Fu=new ft(new In(5,2,9),new pi({color:"#f7faf0",toneMapped:!1}));Fu.position.y=1.5;mr.add(Fu);const Nu=new ft(new In(4.2,1.8,4.5),new pi({color:"#317a64",toneMapped:!1}));Nu.position.y=3;mr.add(Nu);mr.traverse(i=>i.layers.set(2));jr.add(mr);const Ou=new Yt;Ou.setAttribute("position",new Pt([0,0,4,-1.3,0,-2,1.3,0,-2],3));const i0=new pi({color:"#edffe7",side:Mn,toneMapped:!1});for(let i=0;i<28;i++){const e=.025+i*.034,t=ci(e),n=ci(e+.001),r=new ft(Ou,i0);r.position.set(t.x,25.36,t.z),r.rotation.y=Math.atan2(n.x-t.x,n.z-t.z),r.layers.set(2),jr.add(r)}const r0=y_.map(i=>{const e=document.createElement("div");return e.className="map-label",e.innerHTML=`<b>${i.name}</b>`,$("landmarks").append(e),{...i,el:e}});function s0(){for(const i of r0){Gt.set(i.x-ze.origin.x,i.y,i.z-ze.origin.z);const e=Gt.distanceTo(Ze.position);Gt.project(Ze);const t=Gt.z>-1&&Gt.z<1&&e<2e3&&Math.abs(Gt.x)<.98&&Math.abs(Gt.y)<.9;i.el.style.display=t?"flex":"none",t&&(i.el.style.left=`${(Gt.x*.5+.5)*cn}px`,i.el.style.top=`${(-Gt.y*.5+.5)*En}px`,i.el.style.opacity=Math.max(.35,1-e/2600))}}const a0={water:{target:[350,0,-100],offset:[35,38,65]},river:{target:[0,0,-520],offset:[20,35,65]},architecture:{target:[0,18,318],offset:[100,78,150]},overview:{target:[0,0,-50],offset:[560,720,840]},bridge:{target:[70,25,Vt(70)],offset:[150,150,235]},toll:{target:[430,25,Vt(430)],offset:[80,150,-115]},bounce:{target:[70,9,390],offset:[120,92,118]},foot:{target:[627.0850731542669,0,479],offset:[12,80,12]},redfoot:{target:[-33,0,657.1399443494956],offset:[12,85,-12]},aofoot:{target:[265.03389707726456,0,288],offset:[-12,85,12]},night:{target:[0,8,320],offset:[0,34,200]}};function Js(i,e=!1){const t=a0[i];if(!t)return;i==="night"&&ll(!0),vn=!1,Zr();const n=new C(...t.target).sub(ze.origin),r=n.clone().add(new C(...t.offset));e?(et.target.copy(n),Ze.position.copy(r),et.update(),At=null):At={start:performance.now(),target0:et.target.clone(),pos0:Ze.position.clone(),target:n,position:r},document.querySelectorAll("[data-preset]").forEach(s=>s.classList.toggle("active",s.dataset.preset===i))}function Zr(){$("drive").classList.toggle("driving",vn),$("drive").textContent=vn?"Ⅱ 暂停漫游":"▷ 沿路漫游",$("drive-status").textContent=vn?"自动漫游 · 72 km/h":"自由观察"}function zu(i){ol=i,ce.gi.value=i==="off"?0:Number($("strength").value),ce.gray.value=i==="gray"?1:0,Ce.captureEnabled=i!=="off",document.querySelectorAll("#gi-mode button").forEach(e=>e.classList.toggle("active",e.dataset.value===i))}let Wc=0;function ll(i){!!Ie.enabled.value!=!!i&&(i?(Wc=ce.debugColors.value,ce.debugColors.value=0):ce.debugColors.value=Wc,$("debug-colors").value=String(ce.debugColors.value),Ie.enabled.value=+i,Bt.onNightChange(),document.body.classList.toggle("night-mode",i),al(),document.querySelectorAll("#time-mode button").forEach(e=>e.classList.toggle("active",e.dataset.value==="night"==!!i)),Ce.invalidate(!0),cl())}function Qs(i={}){i.enabled!==void 0&&ll(i.enabled);for(const e of["windows","occupancy","windowPower","streets","streetPower","glow"])if(i[e]!==void 0){const t=Number(i[e]),n=Ie[e];if(!Number.isFinite(t)||t===n.value)continue;n.value=Math.max(0,Math.min(e==="windowPower"?6:e==="streetPower"?2.5:e==="glow"?1.5:1,t)),e!=="glow"&&Ie.enabled.value&&Ce.invalidate()}al(),$("night-windows").checked=!!Ie.windows.value,$("street-lights").checked=!!Ie.streets.value;for(const[e,t,n]of[["window-occupancy","occupancy","%"],["window-power","windowPower","×"],["street-power","streetPower","%"],["lamp-glow","glow","%"]])$(e).value=String(Ie[t].value),$(e+"-value").value=n==="%"?`${Math.round(Ie[t].value*100)}%`:`${Ie[t].value.toFixed(1)}×`;cl()}function Bu(){return{enabled:!!Ie.enabled.value,windows:!!Ie.windows.value,occupancy:Ie.occupancy.value,windowPower:Ie.windowPower.value,streets:!!Ie.streets.value,streetPower:Ie.streetPower.value,glow:Ie.glow.value,visibleFixtures:ze.active.reduce((i,e)=>i+(e.group.userData.streetFixtures?.length||0),0),maxCandidatesPerFragment:6,streetShadowMaps:0}}function cl(){const i=Bu();$("night-status").textContent=i.enabled?`冷色月光 · 暖色窗光与路灯；当前瓦片 ${i.visibleFixtures} 盏，每片元最多 6 个候选。路灯无逐灯阴影；光晕是显示效果，非体积散射。${Ce.mode==="frozen"?"探针已冻结，光源改动需恢复更新。":""}`:"日间模式；点底部“夜景街区”体验窗光与暖色路灯。"}document.querySelectorAll("#time-mode button").forEach(i=>i.onclick=()=>ll(i.dataset.value==="night"));$("night-windows").onchange=i=>Qs({windows:i.target.checked});$("street-lights").onchange=i=>Qs({streets:i.target.checked});for(const[i,e]of[["window-occupancy","occupancy"],["window-power","windowPower"],["street-power","streetPower"],["lamp-glow","glow"]])$(i).oninput=t=>Qs({[e]:Number(t.target.value)});function Ni(i,e={}){Bt.set(i,e),$("weather-mode").value=Bt.model.mode,$("weather-intensity").value=String(Bt.model.intensity),$("weather-intensity-value").value=`${Math.round(Bt.model.intensity*100)}%`,$("weather-pause").checked=Bt.model.paused,$("weather-effects").checked=Bt.effectsEnabled,ku()}function ku(){const i=Bt.stats(),e=i.current;$("weather-status").textContent=`${{clear:"晴天",cloudy:"多云",rain:"下雨",snow:"下雪"}[i.mode]} · ${i.transition<1?`过渡 ${Math.round(i.transition*100)}%`:"已稳定"} · 粒子 ${i.effects.particles} / 水花 ${i.effects.splashes} · 顶部遮挡图 ${i.roof.updates} 次`,$("environment-values").innerHTML=[["天空 / 云量",`${Math.round(e.cloud*100)}%`],["日月直射",`${i.main.sunIntensity.toFixed(2)}×`],["远景雾密度",`${i.main.fogDensity.toFixed(5)} m⁻¹`],["地表湿润 / 积雪",`${Math.round(e.wet*100)}% / ${Math.round(e.snow*100)}%`],["风速 X / Z",`${e.windX.toFixed(1)} / ${e.windZ.toFixed(1)} m/s`],["GI 源版本",`#${i.sourceVersion} · 天气重捕 ${i.probeInvalidations} 次`],["GI 源兼容权重",`${Math.round(i.giCompatibility*100)}%`]].map(([t,n])=>`<dt>${t}</dt><dd>${n}</dd>`).join("")}$("weather-mode").onchange=i=>Ni(i.target.value);$("weather-intensity").oninput=i=>Ni(void 0,{intensity:Number(i.target.value)});$("weather-duration").onchange=i=>Bt.model.duration=Number(i.target.value);$("weather-pause").onchange=i=>Ni(void 0,{paused:i.target.checked});$("weather-effects").onchange=i=>Ni(void 0,{effects:i.target.checked});$("weather-quality").onchange=i=>Ni(void 0,{quality:i.target.value});let Ha="",Cr=0;function o0(){if(!_t.castShadow){Ha="";return}const i=Math.min(1300,Math.max(220,Ze.position.distanceTo(et.target)*.72));(!Cr||i>Cr||i<Cr-64)&&(Cr=Math.ceil(i/32)*32);const e=Cr,t=2*e/2048,n=new C().crossVectors(oi,new C(0,1,0)).normalize(),r=new C().crossVectors(n,oi).normalize(),s=et.target.clone().add(ze.origin),a=Math.round(s.dot(n)/t),o=Math.round(s.dot(r)/t),l=Math.round(s.dot(oi)/t),c=[e,a,o,l,hi,Zn,ze.version,ze.origin.x,ze.origin.z].join("/");if(c===Ha)return;Ha=c;const u=_t.shadow.camera;u.left=-e,u.right=e,u.top=e,u.bottom=-e,u.updateProjectionMatrix();const h=z_(e,2048,u.near,u.far,Zn);_t.shadow.bias=h.bias,_t.shadow.normalBias=h.normalBias;const d=n.multiplyScalar(a*t).addScaledVector(r,o*t).addScaledVector(oi,l*t).sub(ze.origin);_t.target.position.copy(d),_t.position.copy(d).addScaledVector(oi,1500),_t.target.updateMatrixWorld(),_t.shadow.needsUpdate=!0,ke.shadowMap.needsUpdate=!0}function Gu(){cn=innerWidth,En=innerHeight,ke.setSize(cn,En,!1),Ze.aspect=cn/En,Ze.updateProjectionMatrix()}addEventListener("resize",Gu);Gu();cn<550&&document.body.classList.add("panel-closed");function ul(i){document.body.classList.toggle("panel-closed",!i),$("panel-toggle").setAttribute("aria-expanded",String(i))}ul(!document.body.classList.contains("panel-closed"));$("panel-toggle").onclick=()=>ul(document.body.classList.contains("panel-closed"));$("sun-toggle").onclick=()=>{ul(!0),$("sun-controls").scrollIntoView({block:"start"}),$("sun").focus({preventScroll:!0})};for(const i of document.querySelectorAll("[data-touch-mode]"))i.onclick=()=>{const e=i.dataset.touchMode==="pan";et.touches.ONE=e?li.PAN:li.ROTATE,document.querySelectorAll("[data-touch-mode]").forEach(t=>t.setAttribute("aria-pressed",String(t===i))),$("touch-hint").textContent=e?"单指平移 · 双指缩放 / 平移":"单指旋转 · 双指缩放 / 平移"};document.querySelectorAll("[data-preset]").forEach(i=>i.onclick=()=>Js(i.dataset.preset));document.querySelectorAll("#gi-mode button").forEach(i=>i.onclick=()=>zu(i.dataset.value));$("strength").oninput=i=>{$("strength-value").value=`${Math.round(i.target.value*100)}%`,ol!=="off"&&(ce.gi.value=Number(i.target.value))};$("update-mode").onchange=i=>{Ce.mode=i.target.value};$("visibility").onchange=i=>ce.visibility.value=+i.target.checked;$("lighting-view").onchange=i=>{const e=Number(i.target.value);if(e===2){Ws("view");return}Rt.mode==="view"&&Ws(Hu),ce.view.value=e,$("lighting-view").value=String(e),$("view-key").hidden=!e};$("tone-mapping").onchange=i=>{ke.toneMapping=i.target.value==="aces"?Vo:Ho};function Vu(i={}){let e=!1;for(const t of["panels","variation","occlusion"])if(i[t]!==void 0){const n=+!!i[t];jn[t].value!==n&&(jn[t].value=n,e=!0),$("facade-"+t).checked=!!n}e&&Ce.invalidate()}for(const i of["panels","variation","occlusion"])$("facade-"+i).onchange=e=>Vu({[i]:e.target.checked});$("debug-colors").onchange=i=>{ce.debugColors.value=Number(i.target.value),Ce.invalidate()};$("sun").oninput=i=>{hi=Number(i.target.value),$("sun-value").value=`${hi}°`,Ks()};$("elevation").oninput=i=>{Zn=Number(i.target.value),$("elevation-value").value=`${Zn}°`,Ks()};$("shadows").onchange=i=>{_t.castShadow=i.target.checked;for(const e of ze.tiles.values())e.group?.traverse(t=>{t.isMesh&&(t.receiveShadow=i.target.checked)});Ce.invalidate()};$("tiles").onchange=i=>i.target.checked?Ze.layers.enable(3):Ze.layers.disable(3);$("probes").onchange=i=>i.target.checked?Ze.layers.enable(4):Ze.layers.disable(4);$("cube").onchange=i=>{Ce.preview=i.target.checked,$("cube-label").hidden=!i.target.checked};$("coverage").onchange=i=>{ce.coverage.value=+i.target.checked,$("coverage-key").hidden=!i.target.checked};$("gpu-budget").onchange=i=>{Ce.gpuBudget=Number(i.target.value)};$("face-budget").onchange=i=>{Ce.maxFaces=Number(i.target.value)};$("target-fps").onchange=i=>{ai=Number(i.target.value)};let Hu="on";function Ws(i){i==="view"?(Rt.mode!=="view"&&(Hu=Rt.mode),ce.view.value=0,$("lighting-view").value="2",$("view-key").hidden=!0):Rt.mode==="view"&&(ce.view.value=0,$("lighting-view").value="0",$("view-key").hidden=!0),Rt.setMode(i),document.querySelectorAll("#ao-mode button").forEach(e=>e.classList.toggle("active",e.dataset.value===i))}document.querySelectorAll("#ao-mode button").forEach(i=>i.onclick=()=>Ws(i.dataset.value));$("probe-layout").onchange=i=>Ce.setLayout(i.target.value);$("ao-quality").onchange=i=>{Rt.quality=i.target.value};$("ao-radius").oninput=i=>{je.radius.value=Number(i.target.value),$("ao-radius-value").value=`${Number(i.target.value).toFixed(1)} m`};$("ao-strength").oninput=i=>{je.strength.value=Number(i.target.value),$("ao-strength-value").value=`${Math.round(Number(i.target.value)*100)}%`};$("ao-direct").oninput=i=>{je.direct.value=Number(i.target.value),$("ao-direct-value").value=`${Math.round(Number(i.target.value)*100)}%`};function Wu(i){$("perf-panel").hidden=!i,$("perf-toggle").setAttribute("aria-expanded",String(i)),document.body.classList.toggle("perf-open",i)}$("perf-toggle").onclick=()=>Wu($("perf-panel").hidden);Wu(cn>=1e3);function l0(){const i=Ae.stats(),e=u=>u?`${u.mean.toFixed(2)} / ${u.p95.toFixed(2)}`:"— / —",t=[["CPU 帧回调",i.cpu.total],["　环境状态",i.cpu.environment],["　天气遮挡提交",i.cpu.weather],["　瓦片处理",i.cpu.tiles],["　探针场调度",i.cpu.field],["　探针提交",i.cpu.probes],["　AO 提交",i.cpu.ao],["　主画面提交",i.cpu.main],["GPU 探针更新",i.gpuSupported?i.gpu.probes:null],["GPU AO 重建",i.gpuSupported?i.gpu.ao:null],["GPU RT 调试",i.gpuSupported?i.gpu.debug:null],["GPU 天气遮挡",i.gpuSupported?i.gpu.weather:null],["GPU 场景反射",i.gpuSupported?i.gpu.reflections:null],["GPU 主画面",i.gpuSupported?i.gpu.main:null]];$("perf-rows").innerHTML=t.map(([u,h])=>{const[d,f]=e(h).split(" / ");return`<tr><td>${u}</td><td>${d}</td><td>${f}</td></tr>`}).join(""),$("gpu-status").textContent=i.gpuSupported?`GPU 异步计时 · ${i.sampleCount} 个有效样本 · ${i.invalidSamples} 个无效样本已丢弃`:"GPU 计时扩展不可用；显示 CPU 实测，捕获按面数与 CPU 限流";const n=Ce.stats(),r=Rt.stats(),s=Bt.stats();$("perf-counts").textContent=`本帧 ${Ce.lastFaces} 面 · Draw ${ke.info.render.calls}（探针 ${Ce.lastCalls} / AO ${r.lastCalls}） · 三角形 ${(ke.info.render.triangles/1e3).toFixed(1)}k · 探针 ${n.ready}/${n.total} · 图集 ${n.atlasMB.toFixed(1)} MiB + 过渡 ${n.transitions.estimatedMiB.toFixed(2)} MiB · AO ${r.estimatedMiB.toFixed(2)} MiB · 天气 ${s.roof.estimatedMiB.toFixed(2)} MiB / ${s.effects.particles} 粒子 · 夜灯最多 6 候选/片元`,$("frame-reference").textContent=`${ai} FPS · ${(1e3/ai).toFixed(2)} ms / 帧`;const a=$("perf-chart"),o=a.getContext("2d"),l=100/Math.max(50,2e3/ai);o.clearRect(0,0,600,100),o.strokeStyle="#b9c8b9",o.beginPath(),o.moveTo(0,100-1e3/ai*l),o.lineTo(600,100-1e3/ai*l),o.stroke(),[Ae.frame.map(u=>u.cpu.total),Ae.gpu.main||[],Ae.gpu.probes||[],Ae.gpu.ao||[],Ae.gpu.weather||[]].forEach((u,h)=>{o.strokeStyle=["#4b81b1","#34876d","#c18b42","#9275b5","#4ba7b2"][h],o.beginPath(),u.forEach((d,f)=>{const m=f*600/119,v=100-Math.min(100,d*l);f?o.lineTo(m,v):o.moveTo(m,v)}),o.stroke()})}function c0(){const i=Rt.stats(),e=Ae.latest.ao,t=Ce.stats();$("ao-status").textContent=`${i.mode==="off"?"已关闭 · ":""}${i.resolution.join(" × ")} · ${i.samples} 采样/像素 · ${i.estimatedMiB.toFixed(2)} MiB · 最近重建 ${e?`${e.ms.toFixed(2)} ms`:"—"}；静止时复用`,$("probe-layout-status").textContent=`${t.layout==="adaptive"?"几何自适应":"完整网格"}：需求 ${t.total} / 候选 ${t.candidates}，裁剪 ${t.pruned} 个；固定图集 ${t.atlasMB.toFixed(1)} MiB。`}$("glass-reflection").onchange=i=>Le.glass.value=+i.target.checked;$("water-reflection").onchange=i=>Le.water.value=+i.target.checked;$("reflection-freeze").onchange=i=>Wr.frozen=i.target.checked;$("moving-light").onchange=i=>{Ir=i.target.checked,Vs.intensity=Ir?2400:0,$r.visible=Ir,Ce.invalidateAround(70,390,180)};$("drive").onclick=()=>{At=null,vn=!vn,Zr()};$("reset").onclick=()=>Js("overview");ke.domElement.addEventListener("pointerdown",()=>{At=null,vn&&(vn=!1,Zr())});addEventListener("keydown",i=>{i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement||Wn.add(i.code)});addEventListener("keyup",i=>Wn.delete(i.code));addEventListener("blur",()=>Wn.clear());const u0=performance.now();function Xu(i){if(requestAnimationFrame(Xu),kc.raf(i),!(i-Lr<1e3/ai-1))try{Ae.beginFrame();const e=Math.min(.05,(i-Lr)/1e3),t=(i-Lr)/1e3;if(Lr=i,rr=(i-u0)/1e3,Us++,ke.info.reset(),et.dampingFactor=1-Math.pow(.915,e*60),At){const h=Math.min(1,(i-At.start)/900),d=h*h*(3-2*h);et.target.lerpVectors(At.target0,At.target,d),Ze.position.lerpVectors(At.pos0,At.position,d),h===1&&(At=null)}if(vn){Qi=(Qi+e*20/2400)%1;const h=ci(Qi),d=ci(Math.min(1,Qi+.025));bn.set(h.x-ze.origin.x,27,h.z-ze.origin.z);const f=new C(h.x-d.x,0,h.z-d.z).normalize().multiplyScalar(135);f.y=95,Ze.position.lerp(bn.clone().add(f),Math.min(1,e*2)),et.target.lerp(bn,Math.min(1,e*3))}if(Wn.size){const h=e*Math.max(30,Ze.position.distanceTo(et.target)*.5);Ze.getWorldDirection(Gt),Gt.y=0,Gt.normalize(),bn.set(0,0,0),Wn.has("KeyW")&&bn.add(Gt),Wn.has("KeyS")&&bn.sub(Gt),Gt.cross(new C(0,1,0)),Wn.has("KeyD")&&bn.add(Gt),Wn.has("KeyA")&&bn.sub(Gt),bn.multiplyScalar(h),et.target.add(bn),Ze.position.add(bn)}(Gs||At||vn||Wn.size)&&(Gs=et.update()),Cn.copy(et.target).add(ze.origin);const n=Math.max(40,Ze.position.y-et.target.y);if(Math.abs(Cn.x-ze.origin.x)>760||Math.abs(Cn.z-ze.origin.z)>760){const h=ze.origin.clone();ze.rebase(Cn.x,Cn.z);const d=ze.origin.clone().sub(h);Ze.position.sub(d),et.target.sub(d),At&&(At.target.sub(d),At.position.sub(d),At.target0.sub(d),At.pos0.sub(d))}Ae.cpuPass("tiles",()=>ze.update(Cn.x,Cn.z,n,i)),ce.origin.value.copy(ze.origin),jr.position.copy(ze.origin).multiplyScalar(-1);const r=ci(Qi),s=ci(Qi+.001);mr.position.set(r.x,25.5,r.z),mr.rotation.y=Math.atan2(s.x-r.x,s.z-r.z),Vs.position.set(70+Math.sin(rr*.7)*55-ze.origin.x,10,390+Math.cos(rr*.7)*20-ze.origin.z),$r.position.copy(Vs.position),Ir&&Us%10===0&&Ce.invalidateAround(70,390,180);const a=Ae.cpuPass("environment",()=>Bt.update(e,ze,cn,En));Bt.roof.lastCalls=0,Ae.cpuPass("field",()=>{Ce.setAnchors(Cn.x,Cn.z,ze.origin,Ze,ze),o0()}),a?(Ae.gpuBegin("weather"),Ae.cpuPass("weather",()=>Bt.roof.update()),Ae.gpuEnd()):Ae.ext&&(Ae.gpu.weather??=[],Ae.gpu.weather.push(0),Ae.gpu.weather.length>120&&Ae.gpu.weather.shift());const o=Ae.latest.probes;o&&o!==Gc&&o.faces>0&&(Ce.gpuFaceMs=Ce.gpuFaceMs*.7+o.ms/o.faces*.3,Gc=o);const l={faces:0,blends:0};Ce.mode!=="frozen"&&(Ce.transitions.active.length||Ce.captureEnabled&&Ce.wanted.some(h=>h.dirty&&!h.blocked))&&Ae.gpuBegin("probes",l),Ae.cpuPass("probes",()=>Ce.update(rr,ze.version,ze.origin,e)),l.faces=Ce.lastFaces,l.blends=Ce.lastBlends,Ae.gpuEnd(),!l.faces&&!l.blends&&Ae.ext&&(Ae.gpu.probes??=[],Ae.gpu.probes.push(0),Ae.gpu.probes.length>120&&Ae.gpu.probes.shift());const c=Rt.needsUpdate(Ze,ze);Rt.lastCalls=0,Rt.lastTriangles=0,c?(Ae.gpuBegin("ao"),Ae.cpuPass("ao",()=>Rt.update(Ze,ze)),Ae.gpuEnd()):Ae.ext&&(Ae.gpu.ao??=[],Ae.gpu.ao.push(0),Ae.gpu.ao.length>120&&Ae.gpu.ao.shift()),(Ce.lastFaces||Ce.lastBlends)&&(Vc=i);const u=JSON.stringify([ze.version,_t.castShadow,hi,Zn,Ie.enabled.value,Ie.windows.value,Ie.windowPower.value,Ie.occupancy.value,Ie.streets.value,Ie.streetPower.value,ce.gi.value,ce.gray.value,ce.debugColors.value,jn.panels.value,jn.variation.value,jn.occlusion.value,Bt.model.current,Ce.captureFaces,Ir||Bt.model.current.cloud>.001||i-Vc<1500?Math.floor(i/250):0]);if(Ae.gpuBegin("reflections"),Ae.cpuPass("reflections",()=>Wr.update(i,Ze,ze,u)),Ae.gpuEnd(),Ae.gpuBegin("main"),Ae.cpuPass("main",()=>{ke.setRenderTarget(null),ke.setViewport(0,0,cn,En),ke.render(tn,Ze),Ce.drawPreview(cn,En)}),Ae.gpuEnd(),Hs.enabled?(Ae.gpuBegin("debug"),Ae.cpuPass("debug",()=>Hs.render(cn,En)),Ae.gpuEnd()):Ae.ext&&(Ae.gpu.debug??=[],Ae.gpu.debug.push(0),Ae.gpu.debug.length>120&&Ae.gpu.debug.shift()),Ae.cpuPass("ui",()=>{s0(),$("compass").style.transform=`rotate(${et.getAzimuthalAngle()}rad)`}),Us%20===0&&ze.active.length&&!ko&&(ko=!0,$("loading").classList.add("hidden")),Ga++,i-Va>700&&(Bo=Math.round(Ga*1e3/(i-Va)),Ga=0,Va=i),i-Hc>350){Hc=i;const h=ze.stats(),d=Ce.stats();$("fps").textContent=`${Bo||"--"} FPS`,$("tile-stats").textContent=`瓦片 ${h.visible} 可见 / ${h.resident} 常驻 · ${(h.bytes/1048576).toFixed(1)} MB 几何估算`,$("probe-stats").textContent=`探针 ${d.ready}/${d.total} 就绪 · ${Ce.mode==="frozen"?"已冻结":`待更新 ${d.dirty}`} · ${d.atlasMB.toFixed(1)} MB 图集`,$("probe-progress").textContent=Ce.mode==="frozen"?"探针已冻结":d.dirty?`正在分帧捕获，${d.dirty} 个待更新`:d.transitions.active+d.transitions.warming?`捕获完成 · ${d.transitions.active+d.transitions.warming} 个结果平滑发布`:"当前视野捕获完成",c0(),cl(),ku();const f=Wr.stats();$("reflection-status").textContent=`玻璃 ${f.cubeSize}² × 6面 · 已发布 ${f.cubeUpdates} 轮；水面 ${f.waterSize}² · ${f.waterUpdates} 次；本帧 ${f.lastPasses} 遍 / ${f.lastCalls} draw · ${f.estimatedMiB.toFixed(2)} MiB估算`,$("perf-panel").hidden||l0()}Ae.endFrame(t,{calls:ke.info.render.calls,triangles:ke.info.render.triangles,probeFaces:Ce.lastFaces,probeCalls:Ce.lastCalls,aoCalls:Rt.lastCalls,aoTriangles:Rt.lastTriangles}),kc.completed()}catch(e){Ae.gpuEnd(),console.error(e),ks.includes(e.message)||ks.push(e.message),$("error").hidden=!1,$("error").textContent=e.message}}requestAnimationFrame(Xu);function h0(i,e,t){Rt.update(Ze,ze),ke.setRenderTarget(null),ke.setViewport(0,0,cn,En),ke.render(tn,Ze);const n=new C(i-ze.origin.x,e,t-ze.origin.z).project(Ze),r=ke.getContext(),s=Math.round((n.x*.5+.5)*r.drawingBufferWidth),a=Math.round((n.y*.5+.5)*r.drawingBufferHeight),o=new Uint8Array(4);if(s<0||a<0||s>=r.drawingBufferWidth||a>=r.drawingBufferHeight||n.z<-1||n.z>1)return{visible:!1};const l=new C(i-ze.origin.x,e,t-ze.origin.z),c=l.clone().sub(Ze.position),u=c.length(),h=new Hd(Ze.position,c.normalize()),d=h.intersectObjects(ze.active.map(f=>f.group),!0)[0];return d&&Math.abs(d.distance-u)>.6?{visible:!1,occluded:!0}:(r.readPixels(s,a,1,1,r.RGBA,r.UNSIGNED_BYTE,o),{visible:!0,rgb:[...o].slice(0,3),screen:[(n.x*.5+.5)*cn,(-n.y*.5+.5)*En]})}window.lab={get ready(){return ko},state:()=>({frame:Us,time:rr,fps:Bo,errors:[...ks],giMode:ol,shadow:_t.castShadow,updateMode:Ce.mode,origin:ze.origin.toArray(),focus:Cn.toArray(),tiles:ze.stats(),probes:Ce.stats(rr),calls:ke.info.render.calls,triangles:ke.info.render.triangles,webglMemory:{...ke.info.memory}}),preset:i=>Js(i,!0),setGI:zu,setUpdate:i=>{Ce.mode=i,$("update-mode").value=i},jump:(i,e)=>{At=null;const t=Ze.position.clone().sub(et.target);et.target.set(i-ze.origin.x,0,e-ze.origin.z),Ze.position.copy(et.target).add(t),et.update()},setSun:(i,e)=>{hi=i,Zn=e,Ks()},setDrive:i=>{vn=i,Zr()},setProbeCapture:i=>{Ce.captureEnabled=i},pixels:()=>{ke.setRenderTarget(null),ke.setViewport(0,0,cn,En),ke.render(tn,Ze);const i=ke.getContext(),e=i.drawingBufferWidth,t=i.drawingBufferHeight,n=new Uint8Array(e*t*4);i.readPixels(0,0,e,t,i.RGBA,i.UNSIGNED_BYTE,n);const r=[];for(let s=0;s<80;s++)for(let a=0;a<120;a++){const o=(Math.floor((s+.5)*t/80)*e+Math.floor((a+.5)*e/120))*4;r.push(n[o],n[o+1],n[o+2])}return r},renderer:ke};Object.assign(window.lab,{readPoint:h0,inspectProbes:(i,e,t)=>Ce.inspect(i,e,t),buildings:()=>ze.active.flatMap(i=>i.group.userData.buildings||[]),aim:(i,e)=>{At=null,vn=!1,Zr(),et.target.fromArray(i).sub(ze.origin),Ze.position.copy(et.target).add(new C(...e)),et.update()}});Object.assign(window.lab,{performance:()=>({...Ae.stats(),targetFPS:ai,resolution:ke.getDrawingBufferSize(new _e).toArray()}),captureBudget:()=>({gpuTargetMs:Ce.gpuBudget,maxFaces:Ce.maxFaces,cpuTargetMs:Ce.cpuBudget,estimatedGPUFaceMs:Ce.gpuFaceMs,lastFaces:Ce.lastFaces})});Object.assign(window.lab,{display:()=>({view:Rt.mode==="view"?"ao":ce.view.value?"indirect":"combined",toneMapping:ke.toneMapping===Vo?"aces":"neutral",exposure:ke.toneMappingExposure})});Object.assign(window.lab,{diagnosePoint:async(i,e=[0,1,0],t=!0)=>{const{diagnoseProbePoint:n}=await eh(async()=>{const{diagnoseProbePoint:r}=await import("./probe-diagnostics-BmTiOMfD.js");return{diagnoseProbePoint:r}},[],import.meta.url);return n(Ce,i,e,t)}});Object.assign(window.lab,{ao:()=>Rt.stats(),setAO:Ws,forceAORefresh:()=>{Rt.key=""}});Object.assign(window.lab,{setProbeLayout:i=>{Ce.setLayout(i),$("probe-layout").value=i}});Object.assign(window.lab,{night:Bu,setNight:Qs,fixtures:()=>ze.active.flatMap(i=>i.group.userData.streetFixtures||[])});Object.assign(window.lab,{weather:()=>Bt.stats(),setWeather:Ni,renderTargets:()=>Hs.stats(),setRenderTargets:i=>Hs.toggle(i)});new URLSearchParams(location.search).get("scene")==="night"&&Js("night",!0);const Wa=new URLSearchParams(location.search).get("weather");Wa&&["clear","cloudy","rain","snow"].includes(Wa)&&Ni(Wa,{instant:!0});Object.assign(window.lab,{facade:()=>Object.fromEntries(Object.entries(jn).map(([i,e])=>[i,!!e.value])),setFacade:Vu});Object.assign(window.lab,{reflections:()=>Wr.stats(),setReflections:i=>{i.glass!==void 0&&(Le.glass.value=+i.glass,$("glass-reflection").checked=i.glass),i.water!==void 0&&(Le.water.value=+i.water,$("water-reflection").checked=i.water),i.frozen!==void 0&&(Wr.frozen=i.frozen,$("reflection-freeze").checked=i.frozen)}});export{Dn as C,Pi as D,mn as F,on as H,ui as I,ft as M,Fi as O,Fn as P,kt as R,Xr as S,He as V,un as W,Dt as a,_e as b,C as c,Ot as d,Uo as e,Vr as f,ce as l,Ec as p,Hr as t};
