(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Hu="modulepreload",Wu=function(i,e){return new URL(i,e).href},hl={},Xu=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(t.map(u=>{if(u=Wu(u,n),u in hl)return;hl[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(n)for(let m=a.length-1;m>=0;m--){const _=a[m];if(_.href===u&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Hu,h||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zo="180",tr={ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qu=0,dl=1,Yu=2,zc=1,Bc=2,Bn=3,si=0,Zt=1,yn=2,Vn=0,nr=1,Va=2,fl=3,pl=4,$u=5,Mi=100,ju=101,Zu=102,Ku=103,Ju=104,Qu=200,eh=201,th=202,nh=203,Ha=204,Wa=205,ih=206,rh=207,sh=208,ah=209,oh=210,lh=211,ch=212,uh=213,hh=214,Xa=0,qa=1,Ya=2,or=3,$a=4,ja=5,Za=6,Ka=7,kc=0,dh=1,fh=2,Hn=0,ph=1,mh=2,gh=3,Bo=4,_h=5,vh=6,ko=7,Gc=300,lr=301,cr=302,Ja=303,Qa=304,Gs=306,Ps=1e3,Si=1001,eo=1002,yt=1003,xh=1004,$r=1005,Rt=1006,Qs=1007,ni=1008,En=1009,Vc=1010,Hc=1011,Dr=1012,Go=1013,Xn=1014,fn=1015,qn=1016,Vo=1017,Ho=1018,Lr=1020,Wc=35902,Xc=35899,qc=1021,Yc=1022,zt=1023,Ur=1026,Ir=1027,Vs=1028,Wo=1029,$c=1030,Xo=1031,qo=1033,Ss=33776,Es=33777,ws=33778,Ts=33779,to=35840,no=35841,io=35842,ro=35843,so=36196,ao=37492,oo=37496,lo=37808,co=37809,uo=37810,ho=37811,fo=37812,po=37813,mo=37814,go=37815,_o=37816,vo=37817,xo=37818,Mo=37819,yo=37820,bo=37821,So=36492,Eo=36494,wo=36495,To=36283,Ao=36284,Ro=36285,Co=36286,Mh=3200,yh=3201,jc=0,bh=1,ei="",an="srgb",ai="srgb-linear",Ds="linear",ot="srgb",Ui=7680,ml=519,Sh=512,Eh=513,wh=514,Zc=515,Th=516,Ah=517,Rh=518,Ch=519,gl=35044,_l="300 es",Cn=2e3,Ls=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vl=1234567;const ir=Math.PI/180,Fr=180/Math.PI;function fr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Yo(i,e){return(i%e+e)%e}function Ph(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Dh(i,e,t){return i!==e?(t-i)/(e-i):0}function Pr(i,e,t){return(1-t)*i+t*e}function Lh(i,e,t,n){return Pr(i,e,1-Math.exp(-t*n))}function Uh(i,e=1){return e-Math.abs(Yo(i,e*2)-e)}function Ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Nh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Oh(i,e){return i+Math.random()*(e-i)}function zh(i){return i*(.5-Math.random())}function Bh(i){i!==void 0&&(vl=i);let e=vl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kh(i){return i*ir}function Gh(i){return i*Fr}function Vh(i){return(i&i-1)===0&&i!==0}function Hh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xh(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Po={DEG2RAD:ir,RAD2DEG:Fr,generateUUID:fr,clamp:qe,euclideanModulo:Yo,mapLinear:Ph,inverseLerp:Dh,lerp:Pr,damp:Lh,pingpong:Uh,smoothstep:Ih,smootherstep:Fh,randInt:Nh,randFloat:Oh,randFloatSpread:zh,seededRandom:Bh,degToRad:kh,radToDeg:Gh,isPowerOfTwo:Vh,ceilPowerOfTwo:Hh,floorPowerOfTwo:Wh,setQuaternionFromProperEuler:Xh,normalize:qt,denormalize:ji};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ti{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],f=s[a+1],m=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==m){let g=1-o;const p=l*d+c*f+u*m+h*_,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const P=Math.sqrt(S),T=Math.atan2(P,p*E);g=Math.sin(g*T)/P,o=Math.sin(o*T)/P}const b=o*E;if(l=l*g+d*b,c=c*g+f*b,u=u*g+m*b,h=h*g+_*b,g===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-o*f,e[t+2]=c*m+u*f+o*d-l*h,e[t+3]=u*m-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),f=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new D,xl=new Ti;class He{constructor(e,t,n,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=r[0],g=r[3],p=r[6],E=r[1],S=r[4],b=r[7],P=r[2],T=r[5],A=r[8];return s[0]=a*_+o*E+l*P,s[3]=a*g+o*S+l*T,s[6]=a*p+o*b+l*A,s[1]=c*_+u*E+h*P,s[4]=c*g+u*S+h*T,s[7]=c*p+u*b+h*A,s[2]=d*_+f*E+m*P,s[5]=d*g+f*S+m*T,s[8]=d*p+f*b+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,m=t*h+n*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new He;function Kc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qh(){const i=Us("canvas");return i.style.display="block",i}const Ml={};function Nr(i){i in Ml||(Ml[i]=!0,console.warn(i))}function Yh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const yl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $h(){const i={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=rr(r.r),r.g=rr(r.g),r.b=rr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ei?Ds:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ai]:{primaries:e,whitePoint:n,transfer:Ds,toXYZ:yl,fromXYZ:bl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:yl,fromXYZ:bl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}const tt=$h();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ii;class jh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ii===void 0&&(Ii=Us("canvas")),Ii.width=e.width,Ii.height=e.height;const r=Ii.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ii}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zh=0;class $o{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(na(r[a].image)):s.push(na(r[a]))}else s=na(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kh=0;const ia=new D;class Kt extends Ri{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Si,r=Si,s=Rt,a=ni,o=zt,l=En,c=Kt.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=fr(),this.name="",this.source=new $o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Gc;Kt.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,r=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(f+1)/2,P=(p+1)/2,T=(u+d)/4,A=(h+_)/4,L=(m+g)/4;return S>b&&S>P?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=T/n,s=A/n):b>P?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=T/r,s=L/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=A/s,r=L/s),this.set(n,r,s,t),this}let E=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jh extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Kt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new $o(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends Jh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jc extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qh extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(s,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),Zr.subVectors(this.max,_r),Fi.subVectors(e.a,_r),Ni.subVectors(e.b,_r),Oi.subVectors(e.c,_r),Yn.subVectors(Ni,Fi),$n.subVectors(Oi,Ni),hi.subVectors(Fi,Oi);let t=[0,-Yn.z,Yn.y,0,-$n.z,$n.y,0,-hi.z,hi.y,Yn.z,0,-Yn.x,$n.z,0,-$n.x,hi.z,0,-hi.x,-Yn.y,Yn.x,0,-$n.y,$n.x,0,-hi.y,hi.x,0];return!ra(t,Fi,Ni,Oi,Zr)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,Fi,Ni,Oi,Zr))?!1:(Kr.crossVectors(Yn,$n),t=[Kr.x,Kr.y,Kr.z],ra(t,Fi,Ni,Oi,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const In=[new D,new D,new D,new D,new D,new D,new D,new D],_n=new D,jr=new oi,Fi=new D,Ni=new D,Oi=new D,Yn=new D,$n=new D,hi=new D,_r=new D,Zr=new D,Kr=new D,di=new D;function ra(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){di.fromArray(i,s);const o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),u=n.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ed=new oi,vr=new D,sa=new D;class Ci{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ed.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(sa)),this.expandByPoint(vr.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fn=new D,aa=new D,Jr=new D,jn=new D,oa=new D,Qr=new D,la=new D;class Hs{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){aa.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(aa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Jr),o=jn.dot(this.direction),l=-jn.dot(Jr),c=jn.lengthSq(),u=Math.abs(1-a*a);let h,d,f,m;if(u>0)if(h=a*l-o,d=a*o-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(aa).addScaledVector(Jr,d),f}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,r,s){oa.subVectors(t,e),Qr.subVectors(n,e),la.crossVectors(oa,Qr);let a=this.direction.dot(la),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,e);const l=o*this.direction.dot(Qr.crossVectors(jn,Qr));if(l<0)return null;const c=o*this.direction.dot(oa.cross(jn));if(c<0||l+c>a)return null;const u=-o*jn.dot(la);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,r,s,a,o,l,c,u,h,d,f,m,_,g){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,f,m,_,g)}set(e,t,n,r,s,a,o,l,c,u,h,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/zi.setFromMatrixColumn(e,0).length(),s=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(td,e,nd)}lookAt(e,t,n){const r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Zn.crossVectors(n,nn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Zn.crossVectors(n,nn)),Zn.normalize(),es.crossVectors(nn,Zn),r[0]=Zn.x,r[4]=es.x,r[8]=nn.x,r[1]=Zn.y,r[5]=es.y,r[9]=nn.y,r[2]=Zn.z,r[6]=es.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],E=n[3],S=n[7],b=n[11],P=n[15],T=r[0],A=r[4],L=r[8],M=r[12],y=r[1],C=r[5],I=r[9],z=r[13],G=r[2],W=r[6],H=r[10],j=r[14],k=r[3],ie=r[7],oe=r[11],he=r[15];return s[0]=a*T+o*y+l*G+c*k,s[4]=a*A+o*C+l*W+c*ie,s[8]=a*L+o*I+l*H+c*oe,s[12]=a*M+o*z+l*j+c*he,s[1]=u*T+h*y+d*G+f*k,s[5]=u*A+h*C+d*W+f*ie,s[9]=u*L+h*I+d*H+f*oe,s[13]=u*M+h*z+d*j+f*he,s[2]=m*T+_*y+g*G+p*k,s[6]=m*A+_*C+g*W+p*ie,s[10]=m*L+_*I+g*H+p*oe,s[14]=m*M+_*z+g*j+p*he,s[3]=E*T+S*y+b*G+P*k,s[7]=E*A+S*C+b*W+P*ie,s[11]=E*L+S*I+b*H+P*oe,s[15]=E*M+S*z+b*j+P*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*f-n*l*f)+_*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*u-s*l*u)+g*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+p*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],E=h*g*c-_*d*c+_*l*f-o*g*f-h*l*p+o*d*p,S=m*d*c-u*g*c-m*l*f+a*g*f+u*l*p-a*d*p,b=u*_*c-m*h*c+m*o*f-a*_*f-u*o*p+a*h*p,P=m*h*l-u*_*l-m*o*d+a*_*d+u*o*g-a*h*g,T=t*E+n*S+r*b+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=E*A,e[1]=(_*d*s-h*g*s-_*r*f+n*g*f+h*r*p-n*d*p)*A,e[2]=(o*g*s-_*l*s+_*r*c-n*g*c-o*r*p+n*l*p)*A,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*f-n*l*f)*A,e[4]=S*A,e[5]=(u*g*s-m*d*s+m*r*f-t*g*f-u*r*p+t*d*p)*A,e[6]=(m*l*s-a*g*s-m*r*c+t*g*c+a*r*p-t*l*p)*A,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*f+t*l*f)*A,e[8]=b*A,e[9]=(m*h*s-u*_*s-m*n*f+t*_*f+u*n*p-t*h*p)*A,e[10]=(a*_*s-m*o*s+m*n*c-t*_*c-a*n*p+t*o*p)*A,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*A,e[12]=P*A,e[13]=(u*_*r-m*h*r+m*n*d-t*_*d-u*n*g+t*h*g)*A,e[14]=(m*o*r-a*_*r-m*n*l+t*_*l+a*n*g-t*o*g)*A,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,m=s*h,_=a*u,g=a*h,p=o*h,E=l*c,S=l*u,b=l*h,P=n.x,T=n.y,A=n.z;return r[0]=(1-(_+p))*P,r[1]=(f+b)*P,r[2]=(m-S)*P,r[3]=0,r[4]=(f-b)*T,r[5]=(1-(d+p))*T,r[6]=(g+E)*T,r[7]=0,r[8]=(m+S)*A,r[9]=(g-E)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=zi.set(r[0],r[1],r[2]).length();const a=zi.set(r[4],r[5],r[6]).length(),o=zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const c=1/s,u=1/a,h=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,t.setFromRotationMatrix(vn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Cn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===Cn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ls)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Cn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r);let m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===Cn)m=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ls)m=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zi=new D,vn=new nt,td=new D(0,0,0),nd=new D(1,1,1),Zn=new D,es=new D,nn=new D,Sl=new nt,El=new Ti;class Pn{constructor(e=0,t=0,n=0,r=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return El.setFromEuler(this),this.setFromQuaternion(El,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let id=0;const wl=new D,Bi=new Ti,Nn=new nt,ts=new D,xr=new D,rd=new D,sd=new Ti,Tl=new D(1,0,0),Al=new D(0,1,0),Rl=new D(0,0,1),Cl={type:"added"},ad={type:"removed"},ki={type:"childadded",child:null},ca={type:"childremoved",child:null};class bt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new D,t=new Pn,n=new Ti,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nt},normalMatrix:{value:new He}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Tl,e)}rotateY(e){return this.rotateOnAxis(Al,e)}rotateZ(e){return this.rotateOnAxis(Rl,e)}translateOnAxis(e,t){return wl.copy(e).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tl,e)}translateY(e){return this.translateOnAxis(Al,e)}translateZ(e){return this.translateOnAxis(Rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ts.copy(e):ts.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(xr,ts,this.up):Nn.lookAt(ts,xr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Bi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cl),ki.child=e,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ad),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cl),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,rd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,sd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}bt.DEFAULT_UP=new D(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new D,On=new D,ua=new D,zn=new D,Gi=new D,Vi=new D,Pl=new D,ha=new D,da=new D,fa=new D,pa=new Ye,ma=new Ye,ga=new Ye;class dn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){xn.subVectors(r,t),On.subVectors(n,t),ua.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(On),l=xn.dot(ua),c=On.dot(On),u=On.dot(ua),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,m=(a*u-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(e,t),ma.fromBufferAttribute(e,n),ga.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pa,s.x),a.addScaledVector(ma,s.y),a.addScaledVector(ga,s.z),a}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),On.subVectors(e,t),xn.cross(On).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),xn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Gi.subVectors(r,n),Vi.subVectors(s,n),ha.subVectors(e,n);const l=Gi.dot(ha),c=Vi.dot(ha);if(l<=0&&c<=0)return t.copy(n);da.subVectors(e,r);const u=Gi.dot(da),h=Vi.dot(da);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Gi,a);fa.subVectors(e,s);const f=Gi.dot(fa),m=Vi.dot(fa);if(m>=0&&f<=m)return t.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Vi,o);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Pl.subVectors(s,r),o=(h-u)/(h-u+(f-m)),t.copy(r).addScaledVector(Pl,o);const p=1/(g+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Gi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},ns={h:0,s:0,l:0};function _a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class de{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=Yo(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=_a(a,s,e+1/3),this.g=_a(a,s,e),this.b=_a(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=an){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const n=Qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return tt.workingToColorSpace(Ht.copy(this),e),Math.round(qe(Ht.r*255,0,255))*65536+Math.round(qe(Ht.g*255,0,255))*256+Math.round(qe(Ht.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=an){tt.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,r=Ht.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(ns);const n=Pr(Kn.h,ns.h,t),r=Pr(Kn.s,ns.s,t),s=Pr(Kn.l,ns.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new de;de.NAMES=Qc;let od=0;class pr extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=nr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Wa,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class li extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gn=ld();function ld(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function cd(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=qe(i,-65504,65504),Gn.floatView[0]=i;const e=Gn.uint32View[0],t=e>>23&511;return Gn.baseTable[t]+((e&8388607)>>Gn.shiftTable[t])}function ud(i){const e=i>>10;return Gn.uint32View[0]=Gn.mantissaTable[Gn.offsetTable[e]+(i&1023)]+Gn.exponentTable[e],Gn.floatView[0]}class hd{static toHalfFloat(e){return cd(e)}static fromHalfFloat(e){return ud(e)}}const St=new D,is=new ve;let dd=0;class pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gl,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gl&&(e.usage=this.usage),e}}class eu extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tu extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fd=0;const hn=new nt,va=new bt,Hi=new D,rn=new oi,Mr=new oi,It=new D;class Wt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kc(e)?tu:eu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(rn.min,Mr.min),rn.expandByPoint(It),It.addVectors(rn.max,Mr.max),rn.expandByPoint(It)):(rn.expandByPoint(Mr.min),rn.expandByPoint(Mr.max))}rn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(It));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(e,c),It.add(Hi)),r=Math.max(r,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new D,l[L]=new D;const c=new D,u=new D,h=new D,d=new ve,f=new ve,m=new ve,_=new D,g=new D;function p(L,M,y){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,M),m.fromBufferAttribute(s,y),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(C),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(C),o[L].add(_),o[M].add(_),o[y].add(_),l[L].add(g),l[M].add(g),l[y].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,M=E.length;L<M;++L){const y=E[L],C=y.start,I=y.count;for(let z=C,G=C+I;z<G;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new D,b=new D,P=new D,T=new D;function A(L){P.fromBufferAttribute(r,L),T.copy(P);const M=o[L];S.copy(M),S.sub(P.multiplyScalar(P.dot(M))).normalize(),b.crossVectors(T,M);const C=b.dot(l[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,C)}for(let L=0,M=E.length;L<M;++L){const y=E[L],C=y.start,I=y.count;for(let z=C,G=C+I;z<G;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new pn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dl=new nt,fi=new Hs,rs=new Ci,Ll=new D,ss=new D,as=new D,os=new D,xa=new D,ls=new D,Ul=new D,cs=new D;class dt extends bt{constructor(e=new Wt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ls.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(xa.fromBufferAttribute(h,e),a?ls.addScaledVector(xa,u):ls.addScaledVector(xa.sub(t),u))}t.add(ls)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(rs.containsPoint(fi.origin)===!1&&(fi.intersectSphere(rs,Ll)===null||fi.origin.distanceToSquared(Ll)>(e.far-e.near)**2))&&(Dl.copy(s).invert(),fi.copy(e.ray).applyMatrix4(Dl),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],E=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=E,P=S;b<P;b+=3){const T=o.getX(b),A=o.getX(b+1),L=o.getX(b+2);r=us(this,p,e,n,c,u,h,T,A,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=o.getX(g),S=o.getX(g+1),b=o.getX(g+2);r=us(this,a,e,n,c,u,h,E,S,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],E=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=E,P=S;b<P;b+=3){const T=b,A=b+1,L=b+2;r=us(this,p,e,n,c,u,h,T,A,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=g,S=g+1,b=g+2;r=us(this,a,e,n,c,u,h,E,S,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function pd(i,e,t,n,r,s,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===si,o),l===null)return null;cs.copy(o),cs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(cs);return c<t.near||c>t.far?null:{distance:c,point:cs.clone(),object:i}}function us(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,ss),i.getVertexPosition(l,as),i.getVertexPosition(c,os);const u=pd(i,e,t,n,ss,as,os,Ul);if(u){const h=new D;dn.getBarycoord(Ul,ss,as,os,h),r&&(u.uv=dn.getInterpolatedAttribute(r,o,l,c,h,new ve)),s&&(u.uv1=dn.getInterpolatedAttribute(s,o,l,c,h,new ve)),a&&(u.normal=dn.getInterpolatedAttribute(a,o,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};dn.getNormal(ss,as,os,d.normal),u.face=d,u.barycoord=h}return u}class Dn extends Wt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(h,2));function m(_,g,p,E,S,b,P,T,A,L,M){const y=b/A,C=P/L,I=b/2,z=P/2,G=T/2,W=A+1,H=L+1;let j=0,k=0;const ie=new D;for(let oe=0;oe<H;oe++){const he=oe*C-z;for(let Ue=0;Ue<W;Ue++){const st=Ue*y-I;ie[_]=st*E,ie[g]=he*S,ie[p]=G,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[g]=0,ie[p]=T>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Ue/A),h.push(1-oe/L),j+=1}}for(let oe=0;oe<L;oe++)for(let he=0;he<A;he++){const Ue=d+he+W*oe,st=d+he+W*(oe+1),ut=d+(he+1)+W*(oe+1),it=d+(he+1)+W*oe;l.push(Ue,st,it),l.push(st,ut,it),k+=6}o.addGroup(f,k,M),f+=k,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=ur(i[t]);for(const r in n)e[r]=n[r]}return e}function md(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const gd={clone:ur,merge:Yt};var _d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pt extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=md(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class iu extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new D,Il=new ve,Fl=new ve;class $t extends iu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Il,Fl),t.subVectors(Fl,Il)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,Xi=1;class xd extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(Wi,Xi,e,t);r.layers=this.layers,this.add(r);const s=new $t(Wi,Xi,e,t);s.layers=this.layers,this.add(s);const a=new $t(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const o=new $t(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const l=new $t(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new $t(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ru extends Kt{constructor(e=[],t=lr,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class su extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ru(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Dn(5,5,5),s=new Pt({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Vn});s.uniforms.tEquirect.value=t;const a=new dt(r,s),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=Rt),new xd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Ei extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Md={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new Zo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Gr extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sr extends Kt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=yt,u=yt,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai extends pn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qi=new nt,Nl=new nt,hs=[],Ol=new oi,yd=new nt,yr=new dt,br=new Ci;class ar extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,yd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Ol.copy(e.boundingBox).applyMatrix4(qi),this.boundingBox.union(Ol)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),br.copy(e.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,qi),Nl.multiplyMatrices(n,qi),yr.matrixWorld=Nl,yr.raycast(e,hs);for(let a=0,o=hs.length;a<o;a++){const l=hs[a];l.instanceId=s,l.object=this,t.push(l)}hs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new sr(new Float32Array(r*this.count),r,this.count,Vs,fn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ya=new D,bd=new D,Sd=new He;class Qn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ya.subVectors(n,t).cross(bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ya),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sd.getNormalMatrix(e),r=this.coplanarPoint(ya).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Ci,Ed=new ve(.5,.5),ds=new D;class Ws{constructor(e=new Qn,t=new Qn,n=new Qn,r=new Qn,s=new Qn,a=new Qn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],E=s[12],S=s[13],b=s[14],P=s[15];if(r[0].setComponents(c-a,f-u,p-m,P-E).normalize(),r[1].setComponents(c+a,f+u,p+m,P+E).normalize(),r[2].setComponents(c+o,f+h,p+_,P+S).normalize(),r[3].setComponents(c-o,f-h,p-_,P-S).normalize(),n)r[4].setComponents(l,d,g,b).normalize(),r[5].setComponents(c-l,f-d,p-g,P-b).normalize();else if(r[4].setComponents(c-l,f-d,p-g,P-b).normalize(),t===Cn)r[5].setComponents(c+l,f+d,p+g,P+b).normalize();else if(t===Ls)r[5].setComponents(l,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=Ed.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ds.x=r.normal.x>0?e.max.x:e.min.x,ds.y=r.normal.y>0?e.max.y:e.min.y,ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class au extends pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Is=new D,Fs=new D,zl=new nt,Sr=new Hs,fs=new Ci,ba=new D,Bl=new D;class wd extends bt{constructor(e=new Wt,t=new au){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Is.fromBufferAttribute(t,r-1),Fs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Is.distanceTo(Fs);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(r),fs.radius+=s,e.ray.intersectsSphere(fs)===!1)return;zl.copy(r).invert(),Sr.copy(e.ray).applyMatrix4(zl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=u.getX(_),E=u.getX(_+1),S=ps(this,e,Sr,l,p,E,_);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(f),p=ps(this,e,Sr,l,_,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=ps(this,e,Sr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ps(this,e,Sr,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ps(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Is.fromBufferAttribute(o,r),Fs.fromBufferAttribute(o,s),t.distanceSqToSegment(Is,Fs,ba,Bl)>n)return;ba.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ba);if(!(c<e.near||c>e.far))return{distance:c,point:Bl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const kl=new D,Gl=new D;class Td extends wd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)kl.fromBufferAttribute(t,r),Gl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+kl.distanceTo(Gl);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xs extends Kt{constructor(e,t,n=Xn,r,s,a,o=yt,l=yt,c,u=Ur,h=1){if(u!==Ur&&u!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $o(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ou extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qs extends Wt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;E(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(f,2));function E(){const b=new D,P=new D;let T=0;const A=(t-e)/n;for(let L=0;L<=s;L++){const M=[],y=L/s,C=y*(t-e)+e;for(let I=0;I<=r;I++){const z=I/r,G=z*l+o,W=Math.sin(G),H=Math.cos(G);P.x=C*W,P.y=-y*n+g,P.z=C*H,h.push(P.x,P.y,P.z),b.set(W,A,H).normalize(),d.push(b.x,b.y,b.z),f.push(z,1-y),M.push(m++)}_.push(M)}for(let L=0;L<r;L++)for(let M=0;M<s;M++){const y=_[M][L],C=_[M+1][L],I=_[M+1][L+1],z=_[M][L+1];(e>0||M!==0)&&(u.push(y,C,z),T+=3),(t>0||M!==s-1)&&(u.push(C,I,z),T+=3)}c.addGroup(p,T,0),p+=T}function S(b){const P=m,T=new ve,A=new D;let L=0;const M=b===!0?e:t,y=b===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),m++;const C=m;for(let I=0;I<=r;I++){const G=I/r*l+o,W=Math.cos(G),H=Math.sin(G);A.x=M*H,A.y=g*y,A.z=M*W,h.push(A.x,A.y,A.z),d.push(0,y,0),T.x=W*.5+.5,T.y=H*.5*y+.5,f.push(T.x,T.y),m++}for(let I=0;I<r;I++){const z=P+I,G=C+I;b===!0?u.push(G,G+1,z):u.push(G+1,G,z),L+=3}c.addGroup(p,L,b===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ko extends qs{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ko(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ms=new D,gs=new D,Sa=new D,_s=new dn;class Ad extends Wt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(ir*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:_,b:g,c:p}=_s;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),_s.getNormal(Sa),h[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let E=0;E<3;E++){const S=(E+1)%3,b=h[E],P=h[S],T=_s[u[E]],A=_s[u[S]],L=`${b}_${P}`,M=`${P}_${b}`;M in d&&d[M]?(Sa.dot(d[M].normal)<=s&&(f.push(T.x,T.y,T.z),f.push(A.x,A.y,A.z)),d[M]=null):L in d||(d[L]={index0:c[E],index1:c[S],normal:Sa.clone()})}}for(const m in d)if(d[m]){const{index0:_,index1:g}=d[m];ms.fromBufferAttribute(o,_),gs.fromBufferAttribute(o,g),f.push(ms.x,ms.y,ms.z),f.push(gs.x,gs.y,gs.z)}this.setAttribute("position",new Ct(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ln extends Wt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const E=p*d-a;for(let S=0;S<c;S++){const b=S*h-s;m.push(b,-E,0),_.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const S=E+c*p,b=E+c*(p+1),P=E+1+c*(p+1),T=E+1+c*p;f.push(S,b,T),f.push(b,P,T)}this.setIndex(f),this.setAttribute("position",new Ct(m,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vr extends Wt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new D,d=new D,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const E=[],S=p/n;let b=0;p===0&&a===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){const T=P/t;h.x=-e*Math.cos(r+T*s)*Math.sin(a+S*o),h.y=e*Math.cos(a+S*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+S*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(T+b,1-S),E.push(c++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){const S=u[p][E+1],b=u[p][E],P=u[p+1][E],T=u[p+1][E+1];(p!==0||a>0)&&f.push(S,b,T),(p!==n-1||l<Math.PI)&&f.push(b,P,T)}this.setIndex(f),this.setAttribute("position",new Ct(m,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rd extends pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jo extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cd extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class lu extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ea=new nt,Vl=new D,Hl=new D;class cu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vl),Hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hl),t.updateMatrixWorld(),Ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wl=new nt,Er=new D,wa=new D;class Pd extends cu{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Er.setFromMatrixPosition(e.matrixWorld),n.position.copy(Er),wa.copy(n.position),wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wa),n.updateMatrixWorld(),r.makeTranslation(-Er.x,-Er.y,-Er.z),Wl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl,n.coordinateSystem,n.reversedDepth)}}class Dd extends lu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Pd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Pi extends iu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ld extends cu{constructor(){super(new Pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ud extends lu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Ld}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uu extends Wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Id extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xl=new nt;class Fd{constructor(e,t,n=0,r=1/0){this.ray=new Hs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xl),this}intersectObject(e,t=!0,n=[]){return Do(e,this,n,t),n.sort(ql),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Do(e[r],this,n,t);return n.sort(ql),n}}function ql(i,e){return i.distance-e.distance}function Do(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Do(s[a],e,t,!0)}}class Yl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Nd extends Ri{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function $l(i,e,t,n){const r=Od(n);switch(t){case qc:return i*e;case Vs:return i*e/r.components*r.byteLength;case Wo:return i*e/r.components*r.byteLength;case $c:return i*e*2/r.components*r.byteLength;case Xo:return i*e*2/r.components*r.byteLength;case Yc:return i*e*3/r.components*r.byteLength;case zt:return i*e*4/r.components*r.byteLength;case qo:return i*e*4/r.components*r.byteLength;case Ss:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ws:case Ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:case ro:return Math.max(i,16)*Math.max(e,8)/4;case to:case io:return Math.max(i,8)*Math.max(e,8)/2;case so:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case So:case Eo:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case To:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ro:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Od(i){switch(i){case En:case Vc:return{byteLength:1,components:1};case Dr:case Hc:case qn:return{byteLength:2,components:1};case Vo:case Ho:return{byteLength:2,components:4};case Xn:case Go:case fn:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function zd(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
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
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
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
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
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
#endif`,$d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cf=`#define PI 3.141592653589793
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
} // validated`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hf=`vec3 transformedNormal = objectNormal;
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
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",_f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Af=`#ifdef USE_GRADIENTMAP
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
}`,Rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Df=`uniform bool receiveShadow;
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
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
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
#endif`,zf=`struct PhysicalMaterial {
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
}`,Bf=`
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jf=`#if defined( USE_POINTS_UV )
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
#endif`,Zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
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
#endif`,np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
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
#endif`,cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ep=`float getShadowMask() {
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
}`,wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`#include <common>
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
}`,qp=`#if DEPTH_PACKING == 3200
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
}`,Yp=`#define DISTANCE
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
}`,$p=`#define DISTANCE
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`uniform float scale;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Qp=`#include <common>
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
}`,em=`uniform vec3 diffuse;
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
}`,tm=`#define LAMBERT
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
}`,nm=`#define LAMBERT
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
}`,im=`#define MATCAP
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
}`,rm=`#define MATCAP
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
}`,sm=`#define NORMAL
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
}`,am=`#define NORMAL
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
}`,om=`#define PHONG
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
}`,lm=`#define PHONG
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
}`,cm=`#define STANDARD
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
}`,um=`#define STANDARD
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
}`,hm=`#define TOON
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
}`,dm=`#define TOON
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
}`,fm=`uniform float size;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 color;
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
}`,_m=`uniform float rotation;
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
}`,vm=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Bd,alphahash_pars_fragment:kd,alphamap_fragment:Gd,alphamap_pars_fragment:Vd,alphatest_fragment:Hd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:qd,batching_pars_vertex:Yd,batching_vertex:$d,begin_vertex:jd,beginnormal_vertex:Zd,bsdfs:Kd,iridescence_fragment:Jd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:ef,clipping_planes_pars_fragment:tf,clipping_planes_pars_vertex:nf,clipping_planes_vertex:rf,color_fragment:sf,color_pars_fragment:af,color_pars_vertex:of,color_vertex:lf,common:cf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:hf,displacementmap_pars_vertex:df,displacementmap_vertex:ff,emissivemap_fragment:pf,emissivemap_pars_fragment:mf,colorspace_fragment:gf,colorspace_pars_fragment:_f,envmap_fragment:vf,envmap_common_pars_fragment:xf,envmap_pars_fragment:Mf,envmap_pars_vertex:yf,envmap_physical_pars_fragment:Lf,envmap_vertex:bf,fog_vertex:Sf,fog_pars_vertex:Ef,fog_fragment:wf,fog_pars_fragment:Tf,gradientmap_pars_fragment:Af,lightmap_pars_fragment:Rf,lights_lambert_fragment:Cf,lights_lambert_pars_fragment:Pf,lights_pars_begin:Df,lights_toon_fragment:Uf,lights_toon_pars_fragment:If,lights_phong_fragment:Ff,lights_phong_pars_fragment:Nf,lights_physical_fragment:Of,lights_physical_pars_fragment:zf,lights_fragment_begin:Bf,lights_fragment_maps:kf,lights_fragment_end:Gf,logdepthbuf_fragment:Vf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:Xf,map_fragment:qf,map_pars_fragment:Yf,map_particle_fragment:$f,map_particle_pars_fragment:jf,metalnessmap_fragment:Zf,metalnessmap_pars_fragment:Kf,morphinstance_vertex:Jf,morphcolor_vertex:Qf,morphnormal_vertex:ep,morphtarget_pars_vertex:tp,morphtarget_vertex:np,normal_fragment_begin:ip,normal_fragment_maps:rp,normal_pars_fragment:sp,normal_pars_vertex:ap,normal_vertex:op,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:cp,clearcoat_normal_fragment_maps:up,clearcoat_pars_fragment:hp,iridescence_pars_fragment:dp,opaque_fragment:fp,packing:pp,premultiplied_alpha_fragment:mp,project_vertex:gp,dithering_fragment:_p,dithering_pars_fragment:vp,roughnessmap_fragment:xp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:yp,shadowmap_pars_vertex:bp,shadowmap_vertex:Sp,shadowmask_pars_fragment:Ep,skinbase_vertex:wp,skinning_pars_vertex:Tp,skinning_vertex:Ap,skinnormal_vertex:Rp,specularmap_fragment:Cp,specularmap_pars_fragment:Pp,tonemapping_fragment:Dp,tonemapping_pars_fragment:Lp,transmission_fragment:Up,transmission_pars_fragment:Ip,uv_pars_fragment:Fp,uv_pars_vertex:Np,uv_vertex:Op,worldpos_vertex:zp,background_vert:Bp,background_frag:kp,backgroundCube_vert:Gp,backgroundCube_frag:Vp,cube_vert:Hp,cube_frag:Wp,depth_vert:Xp,depth_frag:qp,distanceRGBA_vert:Yp,distanceRGBA_frag:$p,equirect_vert:jp,equirect_frag:Zp,linedashed_vert:Kp,linedashed_frag:Jp,meshbasic_vert:Qp,meshbasic_frag:em,meshlambert_vert:tm,meshlambert_frag:nm,meshmatcap_vert:im,meshmatcap_frag:rm,meshnormal_vert:sm,meshnormal_frag:am,meshphong_vert:om,meshphong_frag:lm,meshphysical_vert:cm,meshphysical_frag:um,meshtoon_vert:hm,meshtoon_frag:dm,points_vert:fm,points_frag:pm,shadow_vert:mm,shadow_frag:gm,sprite_vert:_m,sprite_frag:vm},ae={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},An={basic:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new de(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Yt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Yt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new de(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Yt([ae.points,ae.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Yt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Yt([ae.common,ae.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Yt([ae.sprite,ae.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Yt([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Yt([ae.lights,ae.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};An.physical={uniforms:Yt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const vs={r:0,b:0,g:0},mi=new Pn,xm=new nt;function Mm(i,e,t,n,r,s,a){const o=new de(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function m(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?t:e).get(b)),b}function _(S){let b=!1;const P=m(S);P===null?p(o,l):P&&P.isColor&&(p(P,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,b){const P=m(b);P&&(P.isCubeTexture||P.mapping===Gs)?(u===void 0&&(u=new dt(new Dn(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:ur(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),mi.copy(b.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xm.makeRotationFromEuler(mi)),u.material.toneMapped=tt.getTransfer(P.colorSpace)!==ot,(h!==P||d!==P.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,d=P.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new dt(new Ln(2,2),new Pt({name:"BackgroundMaterial",uniforms:ur(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=tt.getTransfer(P.colorSpace)!==ot,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||d!==P.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=P,d=P.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,b){S.getRGB(vs,nu(i)),n.buffers.color.setClear(vs.r,vs.g,vs.b,b,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:_,addToRenderList:g,dispose:E}}function ym(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(y,C,I,z,G){let W=!1;const H=h(z,I,C);s!==H&&(s=H,c(s.object)),W=f(y,z,I,G),W&&m(y,z,I,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,b(y,C,I,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,C,I){const z=I.wireframe===!0;let G=n[y.id];G===void 0&&(G={},n[y.id]=G);let W=G[C.id];W===void 0&&(W={},G[C.id]=W);let H=W[z];return H===void 0&&(H=d(l()),W[z]=H),H}function d(y){const C=[],I=[],z=[];for(let G=0;G<t;G++)C[G]=0,I[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:z,object:y,attributes:{},index:null}}function f(y,C,I,z){const G=s.attributes,W=C.attributes;let H=0;const j=I.getAttributes();for(const k in j)if(j[k].location>=0){const oe=G[k];let he=W[k];if(he===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function m(y,C,I,z){const G={},W=C.attributes;let H=0;const j=I.getAttributes();for(const k in j)if(j[k].location>=0){let oe=W[k];oe===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),G[k]=he,H++}s.attributes=G,s.attributesNum=H,s.index=z}function _(){const y=s.newAttributes;for(let C=0,I=y.length;C<I;C++)y[C]=0}function g(y){p(y,0)}function p(y,C){const I=s.newAttributes,z=s.enabledAttributes,G=s.attributeDivisors;I[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),G[y]!==C&&(i.vertexAttribDivisor(y,C),G[y]=C)}function E(){const y=s.newAttributes,C=s.enabledAttributes;for(let I=0,z=C.length;I<z;I++)C[I]!==y[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function S(y,C,I,z,G,W,H){H===!0?i.vertexAttribIPointer(y,C,I,G,W):i.vertexAttribPointer(y,C,I,z,G,W)}function b(y,C,I,z){_();const G=z.attributes,W=I.getAttributes(),H=C.defaultAttributeValues;for(const j in W){const k=W[j];if(k.location>=0){let ie=G[j];if(ie===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ie!==void 0){const oe=ie.normalized,he=ie.itemSize,Ue=e.get(ie);if(Ue===void 0)continue;const st=Ue.buffer,ut=Ue.type,it=Ue.bytesPerElement,Y=ut===i.INT||ut===i.UNSIGNED_INT||ie.gpuType===Go;if(ie.isInterleavedBufferAttribute){const K=ie.data,ge=K.stride,Ne=ie.offset;if(K.isInstancedInterleavedBuffer){for(let Te=0;Te<k.locationSize;Te++)p(k.location+Te,K.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Te=0;Te<k.locationSize;Te++)g(k.location+Te);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Te=0;Te<k.locationSize;Te++)S(k.location+Te,he/k.locationSize,ut,oe,ge*it,(Ne+he/k.locationSize*Te)*it,Y)}else{if(ie.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)p(k.location+K,ie.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let K=0;K<k.locationSize;K++)g(k.location+K);i.bindBuffer(i.ARRAY_BUFFER,st);for(let K=0;K<k.locationSize;K++)S(k.location+K,he/k.locationSize,ut,oe,he*it,he/k.locationSize*K*it,Y)}}else if(H!==void 0){const oe=H[j];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(k.location,oe);break;case 3:i.vertexAttrib3fv(k.location,oe);break;case 4:i.vertexAttrib4fv(k.location,oe);break;default:i.vertexAttrib1fv(k.location,oe)}}}}E()}function P(){L();for(const y in n){const C=n[y];for(const I in C){const z=C[I];for(const G in z)u(z[G].object),delete z[G];delete C[I]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const I in C){const z=C[I];for(const G in z)u(z[G].object),delete z[G];delete C[I]}delete n[y.id]}function A(y){for(const C in n){const I=n[C];if(I[y.id]===void 0)continue;const z=I[y.id];for(const G in z)u(z[G].object),delete z[G];delete I[y.id]}}function L(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function bm(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Sm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==zt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==En&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fn&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:P,maxSamples:T}}function Em(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Qn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const E=s?0:n,S=E*4;let b=p.clippingState||null;l.value=b,b=u(m,d,S,f);for(let P=0;P!==S;++P)b[P]=t[P];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,b=f;S!==_;++S,b+=4)a.copy(h[S]).applyMatrix4(E,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function wm(i){let e=new WeakMap;function t(a,o){return o===Ja?a.mapping=lr:o===Qa&&(a.mapping=cr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ja||o===Qa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new su(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ji=4,jl=[.125,.215,.35,.446,.526,.582],yi=20,Ta=new Pi,Zl=new de;let Aa=null,Ra=0,Ca=0,Pa=!1;const xi=(1+Math.sqrt(5))/2,Yi=1/xi,Kl=[new D(-xi,Yi,0),new D(xi,Yi,0),new D(-Yi,0,xi),new D(Yi,0,xi),new D(0,xi,-Yi),new D(0,xi,Yi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Tm=new D;class Jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Tm}=s;Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=Pa,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:qn,format:zt,colorSpace:ai,depthBuffer:!1},r=Ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Am(s)),this._blurMaterial=Rm(s,e,t)}return r}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,r,s){const l=new $t(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Zl),h.toneMapping=Hn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const _=new li({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new dt(new Dn,_);let p=!1;const E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,p=!0):(_.color.copy(Zl),p=!0);for(let S=0;S<6;S++){const b=S%3;b===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):b===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const P=this._cubeSize;xs(r,b*P,S>2?P:0,P,P),h.setRenderTarget(r),p&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===lr||e.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kl[(r-s-1)%Kl.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new dt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*yi-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):yi;g>yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yi}`);const p=[];let E=0;for(let A=0;A<yi;++A){const L=A/_,M=Math.exp(-L*L/2);p.push(M),A===0?E+=M:A<g&&(E+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-n;const b=this._sizeLods[r],P=3*b*(r>S-Ji?r-S+Ji:0),T=4*(this._cubeSize-b);xs(t,P,T,3*b,2*b),l.setRenderTarget(t),l.render(h,Ta)}}function Am(i){const e=[],t=[],n=[];let r=i;const s=i-Ji+1+jl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Ji?l=jl[a-i+Ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,E=new Float32Array(_*m*f),S=new Float32Array(g*m*f),b=new Float32Array(p*m*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,L=T>2?0:-1,M=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];E.set(M,_*m*T),S.set(d,g*m*T);const y=[T,T,T,T,T,T];b.set(y,p*m*T)}const P=new Wt;P.setAttribute("position",new pn(E,_)),P.setAttribute("uv",new pn(S,g)),P.setAttribute("faceIndex",new pn(b,p)),e.push(P),r>Ji&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ql(i,e,t){const n=new gn(i,e,t);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Rm(i,e,t){const n=new Float32Array(yi),r=new D(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ec(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function tc(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}function Cm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ja||l===Qa,u=l===lr||l===cr;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Jl(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Jl(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Pm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Nr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Dm(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let S=0,b=E.length;S<b;S+=3){const P=E[S+0],T=E[S+1],A=E[S+2];d.push(P,T,T,A,A,P)}}else if(m!==void 0){const E=m.array;_=m.version;for(let S=0,b=E.length/3-1;S<b;S+=3){const P=S+0,T=S+1,A=S+2;d.push(P,T,T,A,A,P)}}else return;const g=new(Kc(d)?tu:eu)(d,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Lm(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,d*a,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function h(d,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,m);let p=0;for(let E=0;E<m;E++)p+=f[E]*_[E];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Um(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Im(i,e,t){const n=new WeakMap,r=new Ye;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;f===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let b=o.attributes.position.count*S,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*P*4*h),A=new Jc(T,b,P,h);A.type=fn,A.needsUpdate=!0;const L=S*4;for(let y=0;y<h;y++){const C=g[y],I=p[y],z=E[y],G=b*P*4*y;for(let W=0;W<C.count;W++){const H=W*L;f===!0&&(r.fromBufferAttribute(C,W),T[G+H+0]=r.x,T[G+H+1]=r.y,T[G+H+2]=r.z,T[G+H+3]=0),m===!0&&(r.fromBufferAttribute(I,W),T[G+H+4]=r.x,T[G+H+5]=r.y,T[G+H+6]=r.z,T[G+H+7]=0),_===!0&&(r.fromBufferAttribute(z,W),T[G+H+8]=r.x,T[G+H+9]=r.y,T[G+H+10]=r.z,T[G+H+11]=z.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new ve(b,P)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Fm(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const du=new Kt,nc=new Xs(1,1),fu=new Jc,pu=new Qh,mu=new ru,ic=[],rc=[],sc=new Float32Array(16),ac=new Float32Array(9),oc=new Float32Array(4);function mr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ic[r];if(s===void 0&&(s=new Float32Array(r),ic[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ys(i,e){let t=rc[e];t===void 0&&(t=new Int32Array(e),rc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;oc.set(n),i.uniformMatrix2fv(this.addr,!1,oc),Lt(t,n)}}function Gm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;ac.set(n),i.uniformMatrix3fv(this.addr,!1,ac),Lt(t,n)}}function Vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,n))return;sc.set(n),i.uniformMatrix4fv(this.addr,!1,sc),Lt(t,n)}}function Hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function Km(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(nc.compareFunction=Zc,s=nc):s=du,t.setTexture2D(e||s,r)}function Jm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||pu,r)}function Qm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||mu,r)}function eg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||fu,r)}function tg(i){switch(i){case 5126:return Nm;case 35664:return Om;case 35665:return zm;case 35666:return Bm;case 35674:return km;case 35675:return Gm;case 35676:return Vm;case 5124:case 35670:return Hm;case 35667:case 35671:return Wm;case 35668:case 35672:return Xm;case 35669:case 35673:return qm;case 5125:return Ym;case 36294:return $m;case 36295:return jm;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return eg}}function ng(i,e){i.uniform1fv(this.addr,e)}function ig(i,e){const t=mr(e,this.size,2);i.uniform2fv(this.addr,t)}function rg(i,e){const t=mr(e,this.size,3);i.uniform3fv(this.addr,t)}function sg(i,e){const t=mr(e,this.size,4);i.uniform4fv(this.addr,t)}function ag(i,e){const t=mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function og(i,e){const t=mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lg(i,e){const t=mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cg(i,e){i.uniform1iv(this.addr,e)}function ug(i,e){i.uniform2iv(this.addr,e)}function hg(i,e){i.uniform3iv(this.addr,e)}function dg(i,e){i.uniform4iv(this.addr,e)}function fg(i,e){i.uniform1uiv(this.addr,e)}function pg(i,e){i.uniform2uiv(this.addr,e)}function mg(i,e){i.uniform3uiv(this.addr,e)}function gg(i,e){i.uniform4uiv(this.addr,e)}function _g(i,e,t){const n=this.cache,r=e.length,s=Ys(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||du,s[a])}function vg(i,e,t){const n=this.cache,r=e.length,s=Ys(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||pu,s[a])}function xg(i,e,t){const n=this.cache,r=e.length,s=Ys(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||mu,s[a])}function Mg(i,e,t){const n=this.cache,r=e.length,s=Ys(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||fu,s[a])}function yg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return rg;case 35666:return sg;case 35674:return ag;case 35675:return og;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return ug;case 35668:case 35672:return hg;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return Mg}}class bg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tg(t.type)}}class Sg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yg(t.type)}}class Eg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function lc(i,e){i.seq.push(e),i.map[e.id]=e}function wg(i,e,t){const n=i.name,r=n.length;for(Da.lastIndex=0;;){const s=Da.exec(n),a=Da.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){lc(t,c===void 0?new bg(o,i,e):new Sg(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Eg(o),lc(t,h)),t=h}}}class As{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);wg(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function cc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tg=37297;let Ag=0;function Rg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const uc=new He;function Cg(i){tt._getMatrix(uc,tt.workingColorSpace,i);const e=`mat3( ${uc.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Ds:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Rg(i.getShaderSource(e),o)}else return s}function Pg(i,e){const t=Cg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dg(i,e){let t;switch(e){case ph:t="Linear";break;case mh:t="Reinhard";break;case gh:t="Cineon";break;case Bo:t="ACESFilmic";break;case vh:t="AgX";break;case ko:t="Neutral";break;case _h:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ms=new D;function Lg(){tt.getLuminanceCoefficients(Ms);const i=Ms.x.toFixed(4),e=Ms.y.toFixed(4),t=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function Ig(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ar(i){return i!==""}function dc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(i){return i.replace(Ng,zg)}const Og=new Map;function zg(i,e){let t=Xe[e];if(t===void 0){const n=Og.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lo(t)}const Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(i){return i.replace(Bg,kg)}function kg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Gg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case Gs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function Wg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kc:e="ENVMAP_BLENDING_MULTIPLY";break;case dh:e="ENVMAP_BLENDING_MIX";break;case fh:e="ENVMAP_BLENDING_ADD";break}return e}function Xg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Gg(t),c=Vg(t),u=Hg(t),h=Wg(t),d=Xg(t),f=Ug(t),m=Ig(s),_=r.createProgram();let g,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ar).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(g=[mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Hn?Dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Pg("linearToOutputTexel",t.outputColorSpace),Lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),a=Lo(a),a=dc(a,t),a=fc(a,t),o=Lo(o),o=dc(o,t),o=fc(o,t),a=pc(a),o=pc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+g+a,b=E+p+o,P=cc(r,r.VERTEX_SHADER,S),T=cc(r,r.FRAGMENT_SHADER,b);r.attachShader(_,P),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(P)||"",G=r.getShaderInfoLog(T)||"",W=I.trim(),H=z.trim(),j=G.trim();let k=!0,ie=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,P,T);else{const oe=hc(r,P,"vertex"),he=hc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+oe+`
`+he)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||j==="")&&(ie=!1);ie&&(C.diagnostics={runnable:k,programLog:W,vertexShader:{log:H,prefix:g},fragmentShader:{log:j,prefix:p}})}r.deleteShader(P),r.deleteShader(T),L=new As(r,_),M=Fg(r,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,Tg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ag++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}let Yg=0;class $g{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jg(e),t.set(e,n)),n}}class jg{constructor(e){this.id=Yg++,this.code=e,this.usedTimes=0}}function Zg(i,e,t,n,r,s,a){const o=new jo,l=new $g,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,y,C,I,z){const G=I.fog,W=z.geometry,H=M.isMeshStandardMaterial?I.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),k=j&&j.mapping===Gs?j.image.height:null,ie=m[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const oe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,he=oe!==void 0?oe.length:0;let Ue=0;W.morphAttributes.position!==void 0&&(Ue=1),W.morphAttributes.normal!==void 0&&(Ue=2),W.morphAttributes.color!==void 0&&(Ue=3);let st,ut,it,Y;if(ie){const rt=An[ie];st=rt.vertexShader,ut=rt.fragmentShader}else st=M.vertexShader,ut=M.fragmentShader,l.update(M),it=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);const K=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Ne=z.isInstancedMesh===!0,Te=z.isBatchedMesh===!0,Ze=!!M.map,Gt=!!M.matcap,R=!!j,pt=!!M.aoMap,ke=!!M.lightMap,Ie=!!M.bumpMap,Me=!!M.normalMap,mt=!!M.displacementMap,ye=!!M.emissiveMap,We=!!M.metalnessMap,Ut=!!M.roughnessMap,Mt=M.anisotropy>0,w=M.clearcoat>0,v=M.dispersion>0,O=M.iridescence>0,q=M.sheen>0,Z=M.transmission>0,X=Mt&&!!M.anisotropyMap,we=w&&!!M.clearcoatMap,re=w&&!!M.clearcoatNormalMap,be=w&&!!M.clearcoatRoughnessMap,Se=O&&!!M.iridescenceMap,te=O&&!!M.iridescenceThicknessMap,ue=q&&!!M.sheenColorMap,Le=q&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,le=!!M.specularColorMap,Ve=!!M.specularIntensityMap,U=Z&&!!M.transmissionMap,ne=Z&&!!M.thicknessMap,se=!!M.gradientMap,pe=!!M.alphaMap,J=M.alphaTest>0,$=!!M.alphaHash,xe=!!M.extensions;let ze=Hn;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ze=i.toneMapping);const ht={shaderID:ie,shaderType:M.type,shaderName:M.name,vertexShader:st,fragmentShader:ut,defines:M.defines,customVertexShaderID:it,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Te,batchingColor:Te&&z._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&z.instanceColor!==null,instancingMorph:Ne&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ai,alphaToCoverage:!!M.alphaToCoverage,map:Ze,matcap:Gt,envMap:R,envMapMode:R&&j.mapping,envMapCubeUVHeight:k,aoMap:pt,lightMap:ke,bumpMap:Ie,normalMap:Me,displacementMap:d&&mt,emissiveMap:ye,normalMapObjectSpace:Me&&M.normalMapType===bh,normalMapTangentSpace:Me&&M.normalMapType===jc,metalnessMap:We,roughnessMap:Ut,anisotropy:Mt,anisotropyMap:X,clearcoat:w,clearcoatMap:we,clearcoatNormalMap:re,clearcoatRoughnessMap:be,dispersion:v,iridescence:O,iridescenceMap:Se,iridescenceThicknessMap:te,sheen:q,sheenColorMap:ue,sheenRoughnessMap:Le,specularMap:Ee,specularColorMap:le,specularIntensityMap:Ve,transmission:Z,transmissionMap:U,thicknessMap:ne,gradientMap:se,opaque:M.transparent===!1&&M.blending===nr&&M.alphaToCoverage===!1,alphaMap:pe,alphaTest:J,alphaHash:$,combine:M.combine,mapUv:Ze&&_(M.map.channel),aoMapUv:pt&&_(M.aoMap.channel),lightMapUv:ke&&_(M.lightMap.channel),bumpMapUv:Ie&&_(M.bumpMap.channel),normalMapUv:Me&&_(M.normalMap.channel),displacementMapUv:mt&&_(M.displacementMap.channel),emissiveMapUv:ye&&_(M.emissiveMap.channel),metalnessMapUv:We&&_(M.metalnessMap.channel),roughnessMapUv:Ut&&_(M.roughnessMap.channel),anisotropyMapUv:X&&_(M.anisotropyMap.channel),clearcoatMapUv:we&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(M.sheenRoughnessMap.channel),specularMapUv:Ee&&_(M.specularMap.channel),specularColorMapUv:le&&_(M.specularColorMap.channel),specularIntensityMapUv:Ve&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:ne&&_(M.thicknessMap.channel),alphaMapUv:pe&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Me||Mt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Ze||pe),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ze&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===ot,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&tt.getTransfer(M.emissiveMap.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===yn,flipSided:M.side===Zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:xe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&M.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(E(y,M),S(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function S(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){const y=m[M.type];let C;if(y){const I=An[y];C=gd.clone(I.uniforms)}else C=M.uniforms;return C}function P(M,y){let C;for(let I=0,z=u.length;I<z;I++){const G=u[I];if(G.cacheKey===y){C=G,++C.usedTimes;break}}return C===void 0&&(C=new qg(i,y,M,s),u.push(C)),C}function T(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:P,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:L}}function Kg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Jg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _c(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,f,m,_,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function o(h,d,f,m,_,g){const p=a(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,m,_,g){const p=a(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Jg),n.length>1&&n.sort(d||gc),r.length>1&&r.sort(d||gc)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Qg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new _c,i.set(n,[a])):r>=s.length?(a=new _c,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function e_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new de};break;case"SpotLight":t={position:new D,direction:new D,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function t_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let n_=0;function i_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function r_(i){const e=new e_,t=t_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const r=new D,s=new nt,a=new nt;function o(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,E=0,S=0,b=0,P=0,T=0,A=0;c.sort(i_);for(let M=0,y=c.length;M<y;M++){const C=c[M],I=C.color,z=C.intensity,G=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=I.r*z,h+=I.g*z,d+=I.b*z;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],z);A++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,k=t.get(C);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=C.shadow.matrix,E++}n.directional[f]=H,f++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(I).multiplyScalar(z),H.distance=G,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[_]=H;const j=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,j.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=j.matrix,C.castShadow){const k=t.get(C);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=W,b++}_++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(I).multiplyScalar(z),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=H,g++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const j=C.shadow,k=t.get(C);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=C.shadow.matrix,S++}n.point[m]=H,m++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(z),H.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[p]=H,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==E||L.numPointShadows!==S||L.numSpotShadows!==b||L.numSpotMaps!==P||L.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,L.directionalLength=f,L.pointLength=m,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=E,L.numPointShadows=S,L.numSpotShadows=b,L.numSpotMaps=P,L.numLightProbes=A,n.version=n_++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const S=c[p];if(S.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),h++}else if(S.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),f++}else if(S.isRectAreaLight){const b=n.rectArea[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(S.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function vc(i){const e=new r_(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function s_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vc(i),e.set(r,[o])):s>=a.length?(o=new vc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
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
}`;function l_(i,e,t){let n=new Ws;const r=new ve,s=new ve,a=new Ye,o=new Jo({depthPacking:yh}),l=new Cd,c={},u=t.maxTextureSize,h={[si]:Zt,[Zt]:si,[yn]:yn},d=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:a_,fragmentShader:o_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Wt;m.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let p=this.type;this.render=function(T,A,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Vn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=p!==Bn&&this.type===Bn,G=p===Bn&&this.type!==Bn;for(let W=0,H=T.length;W<H;W++){const j=T[W],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ie=k.getFrameExtents();if(r.multiply(ie),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,k.mapSize.y=s.y)),k.map===null||z===!0||G===!0){const he=this.type!==Bn?{minFilter:yt,magFilter:yt}:{};k.map!==null&&k.map.dispose(),k.map=new gn(r.x,r.y,he),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const oe=k.getViewportCount();for(let he=0;he<oe;he++){const Ue=k.getViewport(he);a.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),I.viewport(a),k.updateMatrices(j,he),n=k.getFrustum(),b(A,L,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===Bn&&E(k,L),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,y,C)};function E(T,A){const L=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gn(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,L,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,L,f,_,null)}function S(T,A,L,M){let y=null;const C=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)y=C;else if(y=L.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=y.uuid,z=A.uuid;let G=c[I];G===void 0&&(G={},c[I]=G);let W=G[z];W===void 0&&(W=y.clone(),G[z]=W,A.addEventListener("dispose",P)),y=W}if(y.visible=A.visible,y.wireframe=A.wireframe,M===Bn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=i.properties.get(y);I.light=L}return y}function b(T,A,L,M,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Bn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const z=e.update(T),G=T.material;if(Array.isArray(G)){const W=z.groups;for(let H=0,j=W.length;H<j;H++){const k=W[H],ie=G[k.materialIndex];if(ie&&ie.visible){const oe=S(T,ie,M,y);T.onBeforeShadow(i,T,A,L,z,oe,k),i.renderBufferDirect(L,null,z,oe,T,k),T.onAfterShadow(i,T,A,L,z,oe,k)}}}else if(G.visible){const W=S(T,G,M,y);T.onBeforeShadow(i,T,A,L,z,W,null),i.renderBufferDirect(L,null,z,W,T,null),T.onAfterShadow(i,T,A,L,z,W,null)}}const I=T.children;for(let z=0,G=I.length;z<G;z++)b(I[z],A,L,M,y)}function P(T){T.target.removeEventListener("dispose",P);for(const L in c){const M=c[L],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const c_={[Xa]:qa,[Ya]:Za,[$a]:Ka,[or]:ja,[qa]:Xa,[Za]:Ya,[Ka]:$a,[ja]:or};function u_(i,e){function t(){let U=!1;const ne=new Ye;let se=null;const pe=new Ye(0,0,0,0);return{setMask:function(J){se!==J&&!U&&(i.colorMask(J,J,J,J),se=J)},setLocked:function(J){U=J},setClear:function(J,$,xe,ze,ht){ht===!0&&(J*=ze,$*=ze,xe*=ze),ne.set(J,$,xe,ze),pe.equals(ne)===!1&&(i.clearColor(J,$,xe,ze),pe.copy(ne))},reset:function(){U=!1,se=null,pe.set(-1,0,0,0)}}}function n(){let U=!1,ne=!1,se=null,pe=null,J=null;return{setReversed:function($){if(ne!==$){const xe=e.get("EXT_clip_control");$?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ne=$;const ze=J;J=null,this.setClear(ze)}},getReversed:function(){return ne},setTest:function($){$?K(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function($){se!==$&&!U&&(i.depthMask($),se=$)},setFunc:function($){if(ne&&($=c_[$]),pe!==$){switch($){case Xa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=$}},setLocked:function($){U=$},setClear:function($){J!==$&&(ne&&($=1-$),i.clearDepth($),J=$)},reset:function(){U=!1,se=null,pe=null,J=null,ne=!1}}}function r(){let U=!1,ne=null,se=null,pe=null,J=null,$=null,xe=null,ze=null,ht=null;return{setTest:function(rt){U||(rt?K(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(rt){ne!==rt&&!U&&(i.stencilMask(rt),ne=rt)},setFunc:function(rt,Un,wn){(se!==rt||pe!==Un||J!==wn)&&(i.stencilFunc(rt,Un,wn),se=rt,pe=Un,J=wn)},setOp:function(rt,Un,wn){($!==rt||xe!==Un||ze!==wn)&&(i.stencilOp(rt,Un,wn),$=rt,xe=Un,ze=wn)},setLocked:function(rt){U=rt},setClear:function(rt){ht!==rt&&(i.clearStencil(rt),ht=rt)},reset:function(){U=!1,ne=null,se=null,pe=null,J=null,$=null,xe=null,ze=null,ht=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,S=null,b=null,P=null,T=null,A=new de(0,0,0),L=0,M=!1,y=null,C=null,I=null,z=null,G=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=j>=2);let ie=null,oe={};const he=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),st=new Ye().fromArray(he),ut=new Ye().fromArray(Ue);function it(U,ne,se,pe){const J=new Uint8Array(4),$=i.createTexture();i.bindTexture(U,$),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<se;xe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(ne+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return $}const Y={};Y[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(or),Ie(!1),Me(dl),K(i.CULL_FACE),pt(Vn);function K(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function ge(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ne(U,ne){return h[U]!==ne?(i.bindFramebuffer(U,ne),h[U]=ne,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ne),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Te(U,ne){let se=f,pe=!1;if(U){se=d.get(ne),se===void 0&&(se=[],d.set(ne,se));const J=U.textures;if(se.length!==J.length||se[0]!==i.COLOR_ATTACHMENT0){for(let $=0,xe=J.length;$<xe;$++)se[$]=i.COLOR_ATTACHMENT0+$;se.length=J.length,pe=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,pe=!0);pe&&i.drawBuffers(se)}function Ze(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const Gt={[Mi]:i.FUNC_ADD,[ju]:i.FUNC_SUBTRACT,[Zu]:i.FUNC_REVERSE_SUBTRACT};Gt[Ku]=i.MIN,Gt[Ju]=i.MAX;const R={[Qu]:i.ZERO,[eh]:i.ONE,[th]:i.SRC_COLOR,[Ha]:i.SRC_ALPHA,[oh]:i.SRC_ALPHA_SATURATE,[sh]:i.DST_COLOR,[ih]:i.DST_ALPHA,[nh]:i.ONE_MINUS_SRC_COLOR,[Wa]:i.ONE_MINUS_SRC_ALPHA,[ah]:i.ONE_MINUS_DST_COLOR,[rh]:i.ONE_MINUS_DST_ALPHA,[lh]:i.CONSTANT_COLOR,[ch]:i.ONE_MINUS_CONSTANT_COLOR,[uh]:i.CONSTANT_ALPHA,[hh]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(U,ne,se,pe,J,$,xe,ze,ht,rt){if(U===Vn){_===!0&&(ge(i.BLEND),_=!1);return}if(_===!1&&(K(i.BLEND),_=!0),U!==$u){if(U!==g||rt!==M){if((p!==Mi||b!==Mi)&&(i.blendEquation(i.FUNC_ADD),p=Mi,b=Mi),rt)switch(U){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.ONE,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,S=null,P=null,T=null,A.set(0,0,0),L=0,g=U,M=rt}return}J=J||ne,$=$||se,xe=xe||pe,(ne!==p||J!==b)&&(i.blendEquationSeparate(Gt[ne],Gt[J]),p=ne,b=J),(se!==E||pe!==S||$!==P||xe!==T)&&(i.blendFuncSeparate(R[se],R[pe],R[$],R[xe]),E=se,S=pe,P=$,T=xe),(ze.equals(A)===!1||ht!==L)&&(i.blendColor(ze.r,ze.g,ze.b,ht),A.copy(ze),L=ht),g=U,M=!1}function ke(U,ne){U.side===yn?ge(i.CULL_FACE):K(i.CULL_FACE);let se=U.side===Zt;ne&&(se=!se),Ie(se),U.blending===nr&&U.transparent===!1?pt(Vn):pt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const pe=U.stencilWrite;o.setTest(pe),pe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function Me(U){U!==qu?(K(i.CULL_FACE),U!==C&&(U===dl?i.cullFace(i.BACK):U===Yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),C=U}function mt(U){U!==I&&(H&&i.lineWidth(U),I=U)}function ye(U,ne,se){U?(K(i.POLYGON_OFFSET_FILL),(z!==ne||G!==se)&&(i.polygonOffset(ne,se),z=ne,G=se)):ge(i.POLYGON_OFFSET_FILL)}function We(U){U?K(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function Ut(U){U===void 0&&(U=i.TEXTURE0+W-1),ie!==U&&(i.activeTexture(U),ie=U)}function Mt(U,ne,se){se===void 0&&(ie===null?se=i.TEXTURE0+W-1:se=ie);let pe=oe[se];pe===void 0&&(pe={type:void 0,texture:void 0},oe[se]=pe),(pe.type!==U||pe.texture!==ne)&&(ie!==se&&(i.activeTexture(se),ie=se),i.bindTexture(U,ne||Y[U]),pe.type=U,pe.texture=ne)}function w(){const U=oe[ie];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(U){st.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),st.copy(U))}function Le(U){ut.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ut.copy(U))}function Ee(U,ne){let se=c.get(ne);se===void 0&&(se=new WeakMap,c.set(ne,se));let pe=se.get(U);pe===void 0&&(pe=i.getUniformBlockIndex(ne,U.name),se.set(U,pe))}function le(U,ne){const pe=c.get(ne).get(U);l.get(ne)!==pe&&(i.uniformBlockBinding(ne,pe,U.__bindingPointIndex),l.set(ne,pe))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,oe={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,S=null,b=null,P=null,T=null,A=new de(0,0,0),L=0,M=!1,y=null,C=null,I=null,z=null,G=null,st.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:ge,bindFramebuffer:Ne,drawBuffers:Te,useProgram:Ze,setBlending:pt,setMaterial:ke,setFlipSided:Ie,setCullFace:Me,setLineWidth:mt,setPolygonOffset:ye,setScissorTest:We,activeTexture:Ut,bindTexture:Mt,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Se,texImage3D:te,updateUBOMapping:Ee,uniformBlockBinding:le,texStorage2D:re,texStorage3D:be,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:we,scissor:ue,viewport:Le,reset:Ve}}function h_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,v){return f?new OffscreenCanvas(w,v):Us("canvas")}function _(w,v,O){let q=1;const Z=Mt(w);if((Z.width>O||Z.height>O)&&(q=O/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(q*Z.width),we=Math.floor(q*Z.height);h===void 0&&(h=m(X,we));const re=v?m(X,we):h;return re.width=X,re.height=we,re.getContext("2d").drawImage(w,0,0,X,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+we+")."),re}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,v,O,q,Z=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=v;if(v===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),v===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){const we=Z?Ds:tt.getTransfer(q);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=we===ot?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function b(w,v){let O;return w?v===null||v===Xn||v===Lr?O=i.DEPTH24_STENCIL8:v===fn?O=i.DEPTH32F_STENCIL8:v===Dr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xn||v===Lr?O=i.DEPTH_COMPONENT24:v===fn?O=i.DEPTH_COMPONENT32F:v===Dr&&(O=i.DEPTH_COMPONENT16),O}function P(w,v){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==yt&&w.minFilter!==Rt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function T(w){const v=w.target;v.removeEventListener("dispose",T),L(v),v.isVideoTexture&&u.delete(v)}function A(w){const v=w.target;v.removeEventListener("dispose",A),y(v)}function L(w){const v=n.get(w);if(v.__webglInit===void 0)return;const O=w.source,q=d.get(O);if(q){const Z=q[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(w),Object.keys(q).length===0&&d.delete(O)}n.remove(w)}function M(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const O=w.source,q=d.get(O);delete q[v.__cacheKey],a.memory.textures--}function y(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let Z=0;Z<v.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)i.deleteFramebuffer(v.__webglFramebuffer[q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=w.textures;for(let q=0,Z=O.length;q<Z;q++){const X=n.get(O[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(w)}let C=0;function I(){C=0}function z(){const w=C;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),C+=1,w}function G(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function W(w,v){const O=n.get(w);if(w.isVideoTexture&&We(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,w,v);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function H(w,v){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Y(O,w,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function j(w,v){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Y(O,w,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function k(w,v){const O=n.get(w);if(w.version>0&&O.__version!==w.version){K(O,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const ie={[Ps]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},oe={[yt]:i.NEAREST,[xh]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[Qs]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},he={[Sh]:i.NEVER,[Ch]:i.ALWAYS,[Eh]:i.LESS,[Zc]:i.LEQUAL,[wh]:i.EQUAL,[Rh]:i.GEQUAL,[Th]:i.GREATER,[Ah]:i.NOTEQUAL};function Ue(w,v){if(v.type===fn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Rt||v.magFilter===Qs||v.magFilter===$r||v.magFilter===ni||v.minFilter===Rt||v.minFilter===Qs||v.minFilter===$r||v.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ie[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ie[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ie[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,oe[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,oe[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,he[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===yt||v.minFilter!==$r&&v.minFilter!==ni||v.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function st(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",T));const q=v.source;let Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));const X=G(v);if(X!==w.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[X].usedTimes++;const we=Z[w.__cacheKey];we!==void 0&&(Z[w.__cacheKey].usedTimes--,we.usedTimes===0&&M(v)),w.__cacheKey=X,w.__webglTexture=Z[X].texture}return O}function ut(w,v,O){return Math.floor(Math.floor(w/O)/v)}function it(w,v,O,q){const X=w.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,q,v.data);else{X.sort((te,ue)=>te.start-ue.start);let we=0;for(let te=1;te<X.length;te++){const ue=X[we],Le=X[te],Ee=ue.start+ue.count,le=ut(Le.start,v.width,4),Ve=ut(ue.start,v.width,4);Le.start<=Ee+1&&le===Ve&&ut(Le.start+Le.count-1,v.width,4)===le?ue.count=Math.max(ue.count,Le.start+Le.count-ue.start):(++we,X[we]=Le)}X.length=we+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let te=0,ue=X.length;te<ue;te++){const Le=X[te],Ee=Math.floor(Le.start/4),le=Math.ceil(Le.count/4),Ve=Ee%v.width,U=Math.floor(Ee/v.width),ne=le,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ve,U,ne,se,O,q,v.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function Y(w,v,O){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);const Z=st(w,v),X=v.source;t.bindTexture(q,w.__webglTexture,i.TEXTURE0+O);const we=n.get(X);if(X.version!==we.__version||Z===!0){t.activeTexture(i.TEXTURE0+O);const re=tt.getPrimaries(tt.workingColorSpace),be=v.colorSpace===ei?null:tt.getPrimaries(v.colorSpace),Se=v.colorSpace===ei||re===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let te=_(v.image,!1,r.maxTextureSize);te=Ut(v,te);const ue=s.convert(v.format,v.colorSpace),Le=s.convert(v.type);let Ee=S(v.internalFormat,ue,Le,v.colorSpace,v.isVideoTexture);Ue(q,v);let le;const Ve=v.mipmaps,U=v.isVideoTexture!==!0,ne=we.__version===void 0||Z===!0,se=X.dataReady,pe=P(v,te);if(v.isDepthTexture)Ee=b(v.format===Ir,v.type),ne&&(U?t.texStorage2D(i.TEXTURE_2D,1,Ee,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ee,te.width,te.height,0,ue,Le,null));else if(v.isDataTexture)if(Ve.length>0){U&&ne&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,Ve[0].width,Ve[0].height);for(let J=0,$=Ve.length;J<$;J++)le=Ve[J],U?se&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,le.width,le.height,ue,Le,le.data):t.texImage2D(i.TEXTURE_2D,J,Ee,le.width,le.height,0,ue,Le,le.data);v.generateMipmaps=!1}else U?(ne&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,te.width,te.height),se&&it(v,te,ue,Le)):t.texImage2D(i.TEXTURE_2D,0,Ee,te.width,te.height,0,ue,Le,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ee,Ve[0].width,Ve[0].height,te.depth);for(let J=0,$=Ve.length;J<$;J++)if(le=Ve[J],v.format!==zt)if(ue!==null)if(U){if(se)if(v.layerUpdates.size>0){const xe=$l(le.width,le.height,v.format,v.type);for(const ze of v.layerUpdates){const ht=le.data.subarray(ze*xe/le.data.BYTES_PER_ELEMENT,(ze+1)*xe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ze,le.width,le.height,1,ue,ht)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,te.depth,ue,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ee,le.width,le.height,te.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,le.width,le.height,te.depth,ue,Le,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Ee,le.width,le.height,te.depth,0,ue,Le,le.data)}else{U&&ne&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,Ve[0].width,Ve[0].height);for(let J=0,$=Ve.length;J<$;J++)le=Ve[J],v.format!==zt?ue!==null?U?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,le.width,le.height,ue,le.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Ee,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?se&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,le.width,le.height,ue,Le,le.data):t.texImage2D(i.TEXTURE_2D,J,Ee,le.width,le.height,0,ue,Le,le.data)}else if(v.isDataArrayTexture)if(U){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ee,te.width,te.height,te.depth),se)if(v.layerUpdates.size>0){const J=$l(te.width,te.height,v.format,v.type);for(const $ of v.layerUpdates){const xe=te.data.subarray($*J/te.data.BYTES_PER_ELEMENT,($+1)*J/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,ue,Le,xe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,Le,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,te.width,te.height,te.depth,0,ue,Le,te.data);else if(v.isData3DTexture)U?(ne&&t.texStorage3D(i.TEXTURE_3D,pe,Ee,te.width,te.height,te.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,Le,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,te.width,te.height,te.depth,0,ue,Le,te.data);else if(v.isFramebufferTexture){if(ne)if(U)t.texStorage2D(i.TEXTURE_2D,pe,Ee,te.width,te.height);else{let J=te.width,$=te.height;for(let xe=0;xe<pe;xe++)t.texImage2D(i.TEXTURE_2D,xe,Ee,J,$,0,ue,Le,null),J>>=1,$>>=1}}else if(Ve.length>0){if(U&&ne){const J=Mt(Ve[0]);t.texStorage2D(i.TEXTURE_2D,pe,Ee,J.width,J.height)}for(let J=0,$=Ve.length;J<$;J++)le=Ve[J],U?se&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ue,Le,le):t.texImage2D(i.TEXTURE_2D,J,Ee,ue,Le,le);v.generateMipmaps=!1}else if(U){if(ne){const J=Mt(te);t.texStorage2D(i.TEXTURE_2D,pe,Ee,J.width,J.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Le,te)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ue,Le,te);g(v)&&p(q),we.__version=X.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function K(w,v,O){if(v.image.length!==6)return;const q=st(w,v),Z=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const X=n.get(Z);if(Z.version!==X.__version||q===!0){t.activeTexture(i.TEXTURE0+O);const we=tt.getPrimaries(tt.workingColorSpace),re=v.colorSpace===ei?null:tt.getPrimaries(v.colorSpace),be=v.colorSpace===ei||we===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,ue=[];for(let $=0;$<6;$++)!Se&&!te?ue[$]=_(v.image[$],!0,r.maxCubemapSize):ue[$]=te?v.image[$].image:v.image[$],ue[$]=Ut(v,ue[$]);const Le=ue[0],Ee=s.convert(v.format,v.colorSpace),le=s.convert(v.type),Ve=S(v.internalFormat,Ee,le,v.colorSpace),U=v.isVideoTexture!==!0,ne=X.__version===void 0||q===!0,se=Z.dataReady;let pe=P(v,Le);Ue(i.TEXTURE_CUBE_MAP,v);let J;if(Se){U&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ve,Le.width,Le.height);for(let $=0;$<6;$++){J=ue[$].mipmaps;for(let xe=0;xe<J.length;xe++){const ze=J[xe];v.format!==zt?Ee!==null?U?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,0,0,ze.width,ze.height,Ee,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,Ve,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,0,0,ze.width,ze.height,Ee,le,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,Ve,ze.width,ze.height,0,Ee,le,ze.data)}}}else{if(J=v.mipmaps,U&&ne){J.length>0&&pe++;const $=Mt(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ve,$.width,$.height)}for(let $=0;$<6;$++)if(te){U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ue[$].width,ue[$].height,Ee,le,ue[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,ue[$].width,ue[$].height,0,Ee,le,ue[$].data);for(let xe=0;xe<J.length;xe++){const ht=J[xe].image[$].image;U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,0,0,ht.width,ht.height,Ee,le,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,Ve,ht.width,ht.height,0,Ee,le,ht.data)}}else{U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ee,le,ue[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ve,Ee,le,ue[$]);for(let xe=0;xe<J.length;xe++){const ze=J[xe];U?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,0,0,Ee,le,ze.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,Ve,Ee,le,ze.image[$])}}}g(v)&&p(i.TEXTURE_CUBE_MAP),X.__version=Z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ge(w,v,O,q,Z,X){const we=s.convert(O.format,O.colorSpace),re=s.convert(O.type),be=S(O.internalFormat,we,re,O.colorSpace),Se=n.get(v),te=n.get(O);if(te.__renderTarget=v,!Se.__hasExternalTextures){const ue=Math.max(1,v.width>>X),Le=Math.max(1,v.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,be,ue,Le,v.depth,0,we,re,null):t.texImage2D(Z,X,be,ue,Le,0,we,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ye(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,te.__webglTexture,0,mt(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,te.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(w,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const q=v.depthTexture,Z=q&&q.isDepthTexture?q.type:null,X=b(v.stencilBuffer,Z),we=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=mt(v);ye(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,X,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,w)}else{const q=v.textures;for(let Z=0;Z<q.length;Z++){const X=q[Z],we=s.convert(X.format,X.colorSpace),re=s.convert(X.type),be=S(X.internalFormat,we,re,X.colorSpace),Se=mt(v);O&&ye(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,be,v.width,v.height):ye(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,be,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,be,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const Z=q.__webglTexture,X=mt(v);if(v.depthTexture.format===Ur)ye(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Ir)ye(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ze(w){const v=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=q}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=w.texture.mipmaps;q&&q.length>0?Te(v.__webglFramebuffer[0],w):Te(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=i.createRenderbuffer(),Ne(v.__webglDepthbuffer[q],w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ne(v.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(w,v,O){const q=n.get(w);v!==void 0&&ge(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ze(w)}function R(w){const v=w.texture,O=n.get(w),q=n.get(v);w.addEventListener("dispose",A);const Z=w.textures,X=w.isWebGLCubeRenderTarget===!0,we=Z.length>1;if(we||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let be=0;be<v.mipmaps.length;be++)O.__webglFramebuffer[re][be]=i.createFramebuffer()}else O.__webglFramebuffer[re]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)O.__webglFramebuffer[re]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(we)for(let re=0,be=Z.length;re<be;re++){const Se=n.get(Z[re]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ye(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const be=Z[re];O.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const Se=s.convert(be.format,be.colorSpace),te=s.convert(be.type),ue=S(be.internalFormat,Se,te,be.colorSpace,w.isXRRenderTarget===!0),Le=mt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ue,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,O.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)ge(O.__webglFramebuffer[re][be],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,be);else ge(O.__webglFramebuffer[re],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);g(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let re=0,be=Z.length;re<be;re++){const Se=Z[re],te=n.get(Se);let ue=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,te.__webglTexture),Ue(ue,Se),ge(O.__webglFramebuffer,w,Se,i.COLOR_ATTACHMENT0+re,ue,0),g(Se)&&p(ue)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(re=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),Ue(re,v),v.mipmaps&&v.mipmaps.length>0)for(let be=0;be<v.mipmaps.length;be++)ge(O.__webglFramebuffer[be],w,v,i.COLOR_ATTACHMENT0,re,be);else ge(O.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,re,0);g(v)&&p(re),t.unbindTexture()}w.depthBuffer&&Ze(w)}function pt(w){const v=w.textures;for(let O=0,q=v.length;O<q;O++){const Z=v[O];if(g(Z)){const X=E(w),we=n.get(Z).__webglTexture;t.bindTexture(X,we),p(X),t.unbindTexture()}}}const ke=[],Ie=[];function Me(w){if(w.samples>0){if(ye(w)===!1){const v=w.textures,O=w.width,q=w.height;let Z=i.COLOR_BUFFER_BIT;const X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(w),re=v.length>1;if(re)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const be=w.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Se]);const te=n.get(v[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,Z,i.NEAREST),l===!0&&(ke.length=0,Ie.length=0,ke.push(i.COLOR_ATTACHMENT0+Se),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ke.push(X),Ie.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,we.__webglColorRenderbuffer[Se]);const te=n.get(v[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function mt(w){return Math.min(r.maxSamples,w.samples)}function ye(w){const v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function We(w){const v=a.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function Ut(w,v){const O=w.colorSpace,q=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==ai&&O!==ei&&(tt.getTransfer(O)===ot?(q!==zt||Z!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=k,this.rebindTextures=Gt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ye}function d_(i,e){function t(n,r=ei){let s;const a=tt.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===Vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vc)return i.BYTE;if(n===Hc)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===qc)return i.ALPHA;if(n===Yc)return i.RGB;if(n===zt)return i.RGBA;if(n===Ur)return i.DEPTH_COMPONENT;if(n===Ir)return i.DEPTH_STENCIL;if(n===Vs)return i.RED;if(n===Wo)return i.RED_INTEGER;if(n===$c)return i.RG;if(n===Xo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===Ss||n===Es||n===ws||n===Ts)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ts)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===to||n===no||n===io||n===ro)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===to)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===no)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ao||n===oo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===so||n===ao)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lo||n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===Mo||n===yo||n===bo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===lo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===co)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===po)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===go)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_o)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===So||n===Eo||n===wo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===So)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===To||n===Ao||n===Ro||n===Co)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===To)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ao)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Co)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const f_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
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

}`;class m_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ou(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pt({vertexShader:f_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g_ extends Ri{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new m_,p={},E=t.getContextAttributes();let S=null,b=null;const P=[],T=[],A=new ve;let L=null;const M=new $t;M.viewport=new Ye;const y=new $t;y.viewport=new Ye;const C=[M,y],I=new Id;let z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=P[Y];return K===void 0&&(K=new Ma,P[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=P[Y];return K===void 0&&(K=new Ma,P[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=P[Y];return K===void 0&&(K=new Ma,P[Y]=K),K.getHandSpace()};function W(Y){const K=T.indexOf(Y.inputSource);if(K===-1)return;const ge=P[K];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,c||a),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",j);for(let Y=0;Y<P.length;Y++){const K=T[Y];K!==null&&(T[Y]=null,P[Y].disconnect(K))}z=null,G=null,g.reset();for(const Y in p)delete p[Y];e.setRenderTarget(S),f=null,d=null,h=null,r=null,b=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",H),r.addEventListener("inputsourceschange",j),E.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ne=null,Te=null;E.depth&&(Te=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=E.stencil?Ir:Ur,Ne=E.stencil?Lr:Xn);const Ze={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ze),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new gn(d.textureWidth,d.textureHeight,{format:zt,type:En,depthTexture:new Xs(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new gn(f.framebufferWidth,f.framebufferHeight,{format:zt,type:En,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(Y){for(let K=0;K<Y.removed.length;K++){const ge=Y.removed[K],Ne=T.indexOf(ge);Ne>=0&&(T[Ne]=null,P[Ne].disconnect(ge))}for(let K=0;K<Y.added.length;K++){const ge=Y.added[K];let Ne=T.indexOf(ge);if(Ne===-1){for(let Ze=0;Ze<P.length;Ze++)if(Ze>=T.length){T.push(ge),Ne=Ze;break}else if(T[Ze]===null){T[Ze]=ge,Ne=Ze;break}if(Ne===-1)break}const Te=P[Ne];Te&&Te.connect(ge)}}const k=new D,ie=new D;function oe(Y,K,ge){k.setFromMatrixPosition(K.matrixWorld),ie.setFromMatrixPosition(ge.matrixWorld);const Ne=k.distanceTo(ie),Te=K.projectionMatrix.elements,Ze=ge.projectionMatrix.elements,Gt=Te[14]/(Te[10]-1),R=Te[14]/(Te[10]+1),pt=(Te[9]+1)/Te[5],ke=(Te[9]-1)/Te[5],Ie=(Te[8]-1)/Te[0],Me=(Ze[8]+1)/Ze[0],mt=Gt*Ie,ye=Gt*Me,We=Ne/(-Ie+Me),Ut=We*-Ie;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ut),Y.translateZ(We),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Te[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Mt=Gt+We,w=R+We,v=mt-Ut,O=ye+(Ne-Ut),q=pt*R/w*Mt,Z=ke*R/w*Mt;Y.projectionMatrix.makePerspective(v,O,q,Z,Mt,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function he(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let K=Y.near,ge=Y.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),I.near=y.near=M.near=K,I.far=y.far=M.far=ge,(z!==I.near||G!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,G=I.far),I.layers.mask=Y.layers.mask|6,M.layers.mask=I.layers.mask&3,y.layers.mask=I.layers.mask&5;const Ne=Y.parent,Te=I.cameras;he(I,Ne);for(let Ze=0;Ze<Te.length;Ze++)he(Te[Ze],Ne);Te.length===2?oe(I,M,y):I.projectionMatrix.copy(M.projectionMatrix),Ue(Y,I,Ne)};function Ue(Y,K,ge){ge===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(Y){return p[Y]};let st=null;function ut(Y,K){if(u=K.getViewerPose(c||a),m=K,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ne=!1;ge.length!==I.cameras.length&&(I.cameras.length=0,Ne=!0);for(let R=0;R<ge.length;R++){const pt=ge[R];let ke=null;if(f!==null)ke=f.getViewport(pt);else{const Me=h.getViewSubImage(d,pt);ke=Me.viewport,R===0&&(e.setRenderTargetTextures(b,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(b))}let Ie=C[R];Ie===void 0&&(Ie=new $t,Ie.layers.enable(R),Ie.viewport=new Ye,C[R]=Ie),Ie.matrix.fromArray(pt.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(pt.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(ke.x,ke.y,ke.width,ke.height),R===0&&(I.matrix.copy(Ie.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ne===!0&&I.cameras.push(Ie)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const R=h.getDepthInformation(ge[0]);R&&R.isValid&&R.texture&&g.init(R,r.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let R=0;R<ge.length;R++){const pt=ge[R].camera;if(pt){let ke=p[pt];ke||(ke=new ou,p[pt]=ke);const Ie=h.getCameraImage(pt);ke.sourceTexture=Ie}}}}for(let ge=0;ge<P.length;ge++){const Ne=T[ge],Te=P[ge];Ne!==null&&Te!==void 0&&Te.update(Ne,K,c||a)}st&&st(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}const it=new hu;it.setAnimationLoop(ut),this.setAnimationLoop=function(Y){st=Y},this.dispose=function(){}}}const gi=new Pn,__=new nt;function v_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,nu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,E,S,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,b)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,E,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Zt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Zt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const E=e.get(p),S=E.envMap,b=E.envMapRotation;S&&(g.envMap.value=S,gi.copy(b),gi.x*=-1,gi.y*=-1,gi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),g.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(gi)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,E,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const E=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function x_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const b=S.program;n.uniformBlockBinding(E,b)}function c(E,S){let b=r[E.id];b===void 0&&(m(E),b=u(E),r[E.id]=b,E.addEventListener("dispose",g));const P=S.program;n.updateUBOMapping(E,P);const T=e.render.frame;s[E.id]!==T&&(d(E),s[E.id]=T)}function u(E){const S=h();E.__bindingPointIndex=S;const b=i.createBuffer(),P=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=r[E.id],b=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=b.length;T<A;T++){const L=Array.isArray(b[T])?b[T]:[b[T]];for(let M=0,y=L.length;M<y;M++){const C=L[M];if(f(C,T,M,P)===!0){const I=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let G=0;for(let W=0;W<z.length;W++){const H=z[W],j=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,I+G,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,S,b,P){const T=E.value,A=S+"_"+b;if(P[A]===void 0)return typeof T=="number"||typeof T=="boolean"?P[A]=T:P[A]=T.clone(),!0;{const L=P[A];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return P[A]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function m(E){const S=E.uniforms;let b=0;const P=16;for(let A=0,L=S.length;A<L;A++){const M=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,C=M.length;y<C;y++){const I=M[y],z=Array.isArray(I.value)?I.value:[I.value];for(let G=0,W=z.length;G<W;G++){const H=z[G],j=_(H),k=b%P,ie=k%j.boundary,oe=k+ie;b+=ie,oe!==0&&P-oe<j.storage&&(b+=P-oe),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=j.storage}}}const T=b%P;return T>0&&(b+=P-T),E.__size=b,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function g(E){const S=E.target;S.removeEventListener("dispose",g);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class M_{constructor(e={}){const{canvas:t=qh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1;this._outputColorSpace=an;let T=0,A=0,L=null,M=-1,y=null;const C=new Ye,I=new Ye;let z=null;const G=new de(0);let W=0,H=t.width,j=t.height,k=1,ie=null,oe=null;const he=new Ye(0,0,H,j),Ue=new Ye(0,0,H,j);let st=!1;const ut=new Ws;let it=!1,Y=!1;const K=new nt,ge=new D,Ne=new Ye,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Gt(){return L===null?k:1}let R=n;function pt(x,F){return t.getContext(x,F)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zo}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",J,!1),R===null){const F="webgl2";if(R=pt(F,x),R===null)throw pt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ke,Ie,Me,mt,ye,We,Ut,Mt,w,v,O,q,Z,X,we,re,be,Se,te,ue,Le,Ee,le,Ve;function U(){ke=new Pm(R),ke.init(),Ee=new d_(R,ke),Ie=new Sm(R,ke,e,Ee),Me=new u_(R,ke),Ie.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),mt=new Um(R),ye=new Kg,We=new h_(R,ke,Me,ye,Ie,Ee,mt),Ut=new wm(b),Mt=new Cm(b),w=new zd(R),le=new ym(R,w),v=new Dm(R,w,mt,le),O=new Fm(R,v,w,mt),te=new Im(R,Ie,We),re=new Em(ye),q=new Zg(b,Ut,Mt,ke,Ie,le,re),Z=new v_(b,ye),X=new Qg,we=new s_(ke),Se=new Mm(b,Ut,Mt,Me,O,f,l),be=new l_(b,O,Ie),Ve=new x_(R,mt,Ie,Me),ue=new bm(R,ke,mt),Le=new Lm(R,ke,mt),mt.programs=q.programs,b.capabilities=Ie,b.extensions=ke,b.properties=ye,b.renderLists=X,b.shadowMap=be,b.state=Me,b.info=mt}U();const ne=new g_(b,R);this.xr=ne,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=ke.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ke.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(x){x!==void 0&&(k=x,this.setSize(H,j,!1))},this.getSize=function(x){return x.set(H,j)},this.setSize=function(x,F,B=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=x,j=F,t.width=Math.floor(x*k),t.height=Math.floor(F*k),B===!0&&(t.style.width=x+"px",t.style.height=F+"px"),this.setViewport(0,0,x,F)},this.getDrawingBufferSize=function(x){return x.set(H*k,j*k).floor()},this.setDrawingBufferSize=function(x,F,B){H=x,j=F,k=B,t.width=Math.floor(x*B),t.height=Math.floor(F*B),this.setViewport(0,0,x,F)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(he)},this.setViewport=function(x,F,B,V){x.isVector4?he.set(x.x,x.y,x.z,x.w):he.set(x,F,B,V),Me.viewport(C.copy(he).multiplyScalar(k).round())},this.getScissor=function(x){return x.copy(Ue)},this.setScissor=function(x,F,B,V){x.isVector4?Ue.set(x.x,x.y,x.z,x.w):Ue.set(x,F,B,V),Me.scissor(I.copy(Ue).multiplyScalar(k).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(x){Me.setScissorTest(st=x)},this.setOpaqueSort=function(x){ie=x},this.setTransparentSort=function(x){oe=x},this.getClearColor=function(x){return x.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(x=!0,F=!0,B=!0){let V=0;if(x){let N=!1;if(L!==null){const ee=L.texture.format;N=ee===qo||ee===Xo||ee===Wo}if(N){const ee=L.texture.type,ce=ee===En||ee===Xn||ee===Dr||ee===Lr||ee===Vo||ee===Ho,_e=Se.getClearColor(),fe=Se.getClearAlpha(),Pe=_e.r,Fe=_e.g,Ae=_e.b;ce?(m[0]=Pe,m[1]=Fe,m[2]=Ae,m[3]=fe,R.clearBufferuiv(R.COLOR,0,m)):(_[0]=Pe,_[1]=Fe,_[2]=Ae,_[3]=fe,R.clearBufferiv(R.COLOR,0,_))}else V|=R.COLOR_BUFFER_BIT}F&&(V|=R.DEPTH_BUFFER_BIT),B&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Se.dispose(),X.dispose(),we.dispose(),ye.dispose(),Ut.dispose(),Mt.dispose(),O.dispose(),le.dispose(),Ve.dispose(),q.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",wn),ne.removeEventListener("sessionend",sl),ci.stop()};function se(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const x=mt.autoReset,F=be.enabled,B=be.autoUpdate,V=be.needsUpdate,N=be.type;U(),mt.autoReset=x,be.enabled=F,be.autoUpdate=B,be.needsUpdate=V,be.type=N}function J(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $(x){const F=x.target;F.removeEventListener("dispose",$),xe(F)}function xe(x){ze(x),ye.remove(x)}function ze(x){const F=ye.get(x).programs;F!==void 0&&(F.forEach(function(B){q.releaseProgram(B)}),x.isShaderMaterial&&q.releaseShaderCache(x))}this.renderBufferDirect=function(x,F,B,V,N,ee){F===null&&(F=Te);const ce=N.isMesh&&N.matrixWorld.determinant()<0,_e=Ou(x,F,B,V,N);Me.setMaterial(V,ce);let fe=B.index,Pe=1;if(V.wireframe===!0){if(fe=v.getWireframeAttribute(B),fe===void 0)return;Pe=2}const Fe=B.drawRange,Ae=B.attributes.position;let $e=Fe.start*Pe,at=(Fe.start+Fe.count)*Pe;ee!==null&&($e=Math.max($e,ee.start*Pe),at=Math.min(at,(ee.start+ee.count)*Pe)),fe!==null?($e=Math.max($e,0),at=Math.min(at,fe.count)):Ae!=null&&($e=Math.max($e,0),at=Math.min(at,Ae.count));const xt=at-$e;if(xt<0||xt===1/0)return;le.setup(N,V,_e,B,fe);let ft,ct=ue;if(fe!==null&&(ft=w.get(fe),ct=Le,ct.setIndex(ft)),N.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*Gt()),ct.setMode(R.LINES)):ct.setMode(R.TRIANGLES);else if(N.isLine){let Ce=V.linewidth;Ce===void 0&&(Ce=1),Me.setLineWidth(Ce*Gt()),N.isLineSegments?ct.setMode(R.LINES):N.isLineLoop?ct.setMode(R.LINE_LOOP):ct.setMode(R.LINE_STRIP)}else N.isPoints?ct.setMode(R.POINTS):N.isSprite&&ct.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))ct.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ce=N._multiDrawStarts,_t=N._multiDrawCounts,Je=N._multiDrawCount,en=fe?w.get(fe).bytesPerElement:1,Li=ye.get(V).currentProgram.getUniforms();for(let tn=0;tn<Je;tn++)Li.setValue(R,"_gl_DrawID",tn),ct.render(Ce[tn]/en,_t[tn])}else if(N.isInstancedMesh)ct.renderInstances($e,xt,N.count);else if(B.isInstancedBufferGeometry){const Ce=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,_t=Math.min(B.instanceCount,Ce);ct.renderInstances($e,xt,_t)}else ct.render($e,xt)};function ht(x,F,B){x.transparent===!0&&x.side===yn&&x.forceSinglePass===!1?(x.side=Zt,x.needsUpdate=!0,Yr(x,F,B),x.side=si,x.needsUpdate=!0,Yr(x,F,B),x.side=yn):Yr(x,F,B)}this.compile=function(x,F,B=null){B===null&&(B=x),p=we.get(B),p.init(F),S.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==B&&x.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const V=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let ce=0;ce<ee.length;ce++){const _e=ee[ce];ht(_e,B,N),V.add(_e)}else ht(ee,B,N),V.add(ee)}),p=S.pop(),V},this.compileAsync=function(x,F,B=null){const V=this.compile(x,F,B);return new Promise(N=>{function ee(){if(V.forEach(function(ce){ye.get(ce).currentProgram.isReady()&&V.delete(ce)}),V.size===0){N(x);return}setTimeout(ee,10)}ke.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let rt=null;function Un(x){rt&&rt(x)}function wn(){ci.stop()}function sl(){ci.start()}const ci=new hu;ci.setAnimationLoop(Un),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(x){rt=x,ne.setAnimationLoop(x),x===null?ci.stop():ci.start()},ne.addEventListener("sessionstart",wn),ne.addEventListener("sessionend",sl),this.render=function(x,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(F),F=ne.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,F,L),p=we.get(x,S.length),p.init(F),S.push(p),K.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ut.setFromProjectionMatrix(K,Cn,F.reversedDepth),Y=this.localClippingEnabled,it=re.init(this.clippingPlanes,Y),g=X.get(x,E.length),g.init(),E.push(g),ne.enabled===!0&&ne.isPresenting===!0){const ee=b.xr.getDepthSensingMesh();ee!==null&&Ks(ee,F,-1/0,b.sortObjects)}Ks(x,F,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(ie,oe),Ze=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ze&&Se.addToRenderList(g,x),this.info.render.frame++,it===!0&&re.beginShadows();const B=p.state.shadowsArray;be.render(B,x,F),it===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,N=g.transmissive;if(p.setupLights(),F.isArrayCamera){const ee=F.cameras;if(N.length>0)for(let ce=0,_e=ee.length;ce<_e;ce++){const fe=ee[ce];ol(V,N,x,fe)}Ze&&Se.render(x);for(let ce=0,_e=ee.length;ce<_e;ce++){const fe=ee[ce];al(g,x,fe,fe.viewport)}}else N.length>0&&ol(V,N,x,F),Ze&&Se.render(x),al(g,x,F);L!==null&&A===0&&(We.updateMultisampleRenderTarget(L),We.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(b,x,F),le.resetDefaultState(),M=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],it===!0&&re.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function Ks(x,F,B,V){if(x.visible===!1)return;if(x.layers.test(F.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(F);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ut.intersectsSprite(x)){V&&Ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(K);const ce=O.update(x),_e=x.material;_e.visible&&g.push(x,ce,_e,B,Ne.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ut.intersectsObject(x))){const ce=O.update(x),_e=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ne.copy(x.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ne.copy(ce.boundingSphere.center)),Ne.applyMatrix4(x.matrixWorld).applyMatrix4(K)),Array.isArray(_e)){const fe=ce.groups;for(let Pe=0,Fe=fe.length;Pe<Fe;Pe++){const Ae=fe[Pe],$e=_e[Ae.materialIndex];$e&&$e.visible&&g.push(x,ce,$e,B,Ne.z,Ae)}}else _e.visible&&g.push(x,ce,_e,B,Ne.z,null)}}const ee=x.children;for(let ce=0,_e=ee.length;ce<_e;ce++)Ks(ee[ce],F,B,V)}function al(x,F,B,V){const N=x.opaque,ee=x.transmissive,ce=x.transparent;p.setupLightsView(B),it===!0&&re.setGlobalState(b.clippingPlanes,B),V&&Me.viewport(C.copy(V)),N.length>0&&qr(N,F,B),ee.length>0&&qr(ee,F,B),ce.length>0&&qr(ce,F,B),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function ol(x,F,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new gn(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?qn:En,minFilter:ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ee=p.state.transmissionRenderTarget[V.id],ce=V.viewport||C;ee.setSize(ce.z*b.transmissionResolutionScale,ce.w*b.transmissionResolutionScale);const _e=b.getRenderTarget(),fe=b.getActiveCubeFace(),Pe=b.getActiveMipmapLevel();b.setRenderTarget(ee),b.getClearColor(G),W=b.getClearAlpha(),W<1&&b.setClearColor(16777215,.5),b.clear(),Ze&&Se.render(B);const Fe=b.toneMapping;b.toneMapping=Hn;const Ae=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),it===!0&&re.setGlobalState(b.clippingPlanes,V),qr(x,B,V),We.updateMultisampleRenderTarget(ee),We.updateRenderTargetMipmap(ee),ke.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let at=0,xt=F.length;at<xt;at++){const ft=F[at],ct=ft.object,Ce=ft.geometry,_t=ft.material,Je=ft.group;if(_t.side===yn&&ct.layers.test(V.layers)){const en=_t.side;_t.side=Zt,_t.needsUpdate=!0,ll(ct,B,V,Ce,_t,Je),_t.side=en,_t.needsUpdate=!0,$e=!0}}$e===!0&&(We.updateMultisampleRenderTarget(ee),We.updateRenderTargetMipmap(ee))}b.setRenderTarget(_e,fe,Pe),b.setClearColor(G,W),Ae!==void 0&&(V.viewport=Ae),b.toneMapping=Fe}function qr(x,F,B){const V=F.isScene===!0?F.overrideMaterial:null;for(let N=0,ee=x.length;N<ee;N++){const ce=x[N],_e=ce.object,fe=ce.geometry,Pe=ce.group;let Fe=ce.material;Fe.allowOverride===!0&&V!==null&&(Fe=V),_e.layers.test(B.layers)&&ll(_e,F,B,fe,Fe,Pe)}}function ll(x,F,B,V,N,ee){x.onBeforeRender(b,F,B,V,N,ee),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(b,F,B,V,x,ee),N.transparent===!0&&N.side===yn&&N.forceSinglePass===!1?(N.side=Zt,N.needsUpdate=!0,b.renderBufferDirect(B,F,V,N,x,ee),N.side=si,N.needsUpdate=!0,b.renderBufferDirect(B,F,V,N,x,ee),N.side=yn):b.renderBufferDirect(B,F,V,N,x,ee),x.onAfterRender(b,F,B,V,N,ee)}function Yr(x,F,B){F.isScene!==!0&&(F=Te);const V=ye.get(x),N=p.state.lights,ee=p.state.shadowsArray,ce=N.state.version,_e=q.getParameters(x,N.state,ee,F,B),fe=q.getProgramCacheKey(_e);let Pe=V.programs;V.environment=x.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(x.isMeshStandardMaterial?Mt:Ut).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?F.environmentRotation:x.envMapRotation,Pe===void 0&&(x.addEventListener("dispose",$),Pe=new Map,V.programs=Pe);let Fe=Pe.get(fe);if(Fe!==void 0){if(V.currentProgram===Fe&&V.lightsStateVersion===ce)return ul(x,_e),Fe}else _e.uniforms=q.getUniforms(x),x.onBeforeCompile(_e,b),Fe=q.acquireProgram(_e,fe),Pe.set(fe,Fe),V.uniforms=_e.uniforms;const Ae=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ae.clippingPlanes=re.uniform),ul(x,_e),V.needsLights=Bu(x),V.lightsStateVersion=ce,V.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Fe,V.uniformsList=null,Fe}function cl(x){if(x.uniformsList===null){const F=x.currentProgram.getUniforms();x.uniformsList=As.seqWithValue(F.seq,x.uniforms)}return x.uniformsList}function ul(x,F){const B=ye.get(x);B.outputColorSpace=F.outputColorSpace,B.batching=F.batching,B.batchingColor=F.batchingColor,B.instancing=F.instancing,B.instancingColor=F.instancingColor,B.instancingMorph=F.instancingMorph,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function Ou(x,F,B,V,N){F.isScene!==!0&&(F=Te),We.resetTextureUnits();const ee=F.fog,ce=V.isMeshStandardMaterial?F.environment:null,_e=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ai,fe=(V.isMeshStandardMaterial?Mt:Ut).get(V.envMap||ce),Pe=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Fe=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!B.morphAttributes.position,$e=!!B.morphAttributes.normal,at=!!B.morphAttributes.color;let xt=Hn;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xt=b.toneMapping);const ft=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ct=ft!==void 0?ft.length:0,Ce=ye.get(V),_t=p.state.lights;if(it===!0&&(Y===!0||x!==y)){const Xt=x===y&&V.id===M;re.setState(V,x,Xt)}let Je=!1;V.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==_t.state.version||Ce.outputColorSpace!==_e||N.isBatchedMesh&&Ce.batching===!1||!N.isBatchedMesh&&Ce.batching===!0||N.isBatchedMesh&&Ce.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ce.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ce.instancing===!1||!N.isInstancedMesh&&Ce.instancing===!0||N.isSkinnedMesh&&Ce.skinning===!1||!N.isSkinnedMesh&&Ce.skinning===!0||N.isInstancedMesh&&Ce.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ce.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ce.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ce.instancingMorph===!1&&N.morphTexture!==null||Ce.envMap!==fe||V.fog===!0&&Ce.fog!==ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==re.numPlanes||Ce.numIntersection!==re.numIntersection)||Ce.vertexAlphas!==Pe||Ce.vertexTangents!==Fe||Ce.morphTargets!==Ae||Ce.morphNormals!==$e||Ce.morphColors!==at||Ce.toneMapping!==xt||Ce.morphTargetsCount!==ct)&&(Je=!0):(Je=!0,Ce.__version=V.version);let en=Ce.currentProgram;Je===!0&&(en=Yr(V,F,N));let Li=!1,tn=!1,gr=!1;const vt=en.getUniforms(),cn=Ce.uniforms;if(Me.useProgram(en.program)&&(Li=!0,tn=!0,gr=!0),V.id!==M&&(M=V.id,tn=!0),Li||y!==x){Me.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),vt.setValue(R,"projectionMatrix",x.projectionMatrix),vt.setValue(R,"viewMatrix",x.matrixWorldInverse);const Jt=vt.map.cameraPosition;Jt!==void 0&&Jt.setValue(R,ge.setFromMatrixPosition(x.matrixWorld)),Ie.logarithmicDepthBuffer&&vt.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&vt.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,tn=!0,gr=!0)}if(N.isSkinnedMesh){vt.setOptional(R,N,"bindMatrix"),vt.setOptional(R,N,"bindMatrixInverse");const Xt=N.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),vt.setValue(R,"boneTexture",Xt.boneTexture,We))}N.isBatchedMesh&&(vt.setOptional(R,N,"batchingTexture"),vt.setValue(R,"batchingTexture",N._matricesTexture,We),vt.setOptional(R,N,"batchingIdTexture"),vt.setValue(R,"batchingIdTexture",N._indirectTexture,We),vt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&vt.setValue(R,"batchingColorTexture",N._colorsTexture,We));const un=B.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&te.update(N,B,en),(tn||Ce.receiveShadow!==N.receiveShadow)&&(Ce.receiveShadow=N.receiveShadow,vt.setValue(R,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(cn.envMap.value=fe,cn.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(cn.envMapIntensity.value=F.environmentIntensity),tn&&(vt.setValue(R,"toneMappingExposure",b.toneMappingExposure),Ce.needsLights&&zu(cn,gr),ee&&V.fog===!0&&Z.refreshFogUniforms(cn,ee),Z.refreshMaterialUniforms(cn,V,k,j,p.state.transmissionRenderTarget[x.id]),As.upload(R,cl(Ce),cn,We)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(As.upload(R,cl(Ce),cn,We),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&vt.setValue(R,"center",N.center),vt.setValue(R,"modelViewMatrix",N.modelViewMatrix),vt.setValue(R,"normalMatrix",N.normalMatrix),vt.setValue(R,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Xt=V.uniformsGroups;for(let Jt=0,Js=Xt.length;Jt<Js;Jt++){const ui=Xt[Jt];Ve.update(ui,en),Ve.bind(ui,en)}}return en}function zu(x,F){x.ambientLightColor.needsUpdate=F,x.lightProbe.needsUpdate=F,x.directionalLights.needsUpdate=F,x.directionalLightShadows.needsUpdate=F,x.pointLights.needsUpdate=F,x.pointLightShadows.needsUpdate=F,x.spotLights.needsUpdate=F,x.spotLightShadows.needsUpdate=F,x.rectAreaLights.needsUpdate=F,x.hemisphereLights.needsUpdate=F}function Bu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,F,B){const V=ye.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ye.get(x.texture).__webglTexture=F,ye.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:B,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,F){const B=ye.get(x);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0};const ku=R.createFramebuffer();this.setRenderTarget=function(x,F=0,B=0){L=x,T=F,A=B;let V=!0,N=null,ee=!1,ce=!1;if(x){const fe=ye.get(x);if(fe.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(fe.__webglFramebuffer===void 0)We.setupRenderTarget(x);else if(fe.__hasExternalTextures)We.rebindTextures(x,ye.get(x.texture).__webglTexture,ye.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ae=x.depthTexture;if(fe.__boundDepthTexture!==Ae){if(Ae!==null&&ye.has(Ae)&&(x.width!==Ae.image.width||x.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(x)}}const Pe=x.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ce=!0);const Fe=ye.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?N=Fe[F][B]:N=Fe[F],ee=!0):x.samples>0&&We.useMultisampledRTT(x)===!1?N=ye.get(x).__webglMultisampledFramebuffer:Array.isArray(Fe)?N=Fe[B]:N=Fe,C.copy(x.viewport),I.copy(x.scissor),z=x.scissorTest}else C.copy(he).multiplyScalar(k).floor(),I.copy(Ue).multiplyScalar(k).floor(),z=st;if(B!==0&&(N=ku),Me.bindFramebuffer(R.FRAMEBUFFER,N)&&V&&Me.drawBuffers(x,N),Me.viewport(C),Me.scissor(I),Me.setScissorTest(z),ee){const fe=ye.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,fe.__webglTexture,B)}else if(ce){const fe=F;for(let Pe=0;Pe<x.textures.length;Pe++){const Fe=ye.get(x.textures[Pe]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Pe,Fe.__webglTexture,B,fe)}}else if(x!==null&&B!==0){const fe=ye.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,fe.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(x,F,B,V,N,ee,ce,_e=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ye.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){Me.bindFramebuffer(R.FRAMEBUFFER,fe);try{const Pe=x.textures[_e],Fe=Pe.format,Ae=Pe.type;if(!Ie.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=x.width-V&&B>=0&&B<=x.height-N&&(x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(F,B,V,N,Ee.convert(Fe),Ee.convert(Ae),ee))}finally{const Pe=L!==null?ye.get(L).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(x,F,B,V,N,ee,ce,_e=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ye.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe)if(F>=0&&F<=x.width-V&&B>=0&&B<=x.height-N){Me.bindFramebuffer(R.FRAMEBUFFER,fe);const Pe=x.textures[_e],Fe=Pe.format,Ae=Pe.type;if(!Ie.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,$e),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(F,B,V,N,Ee.convert(Fe),Ee.convert(Ae),0);const at=L!==null?ye.get(L).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,at);const xt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Yh(R,xt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,$e),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer($e),R.deleteSync(xt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,F=null,B=0){const V=Math.pow(2,-B),N=Math.floor(x.image.width*V),ee=Math.floor(x.image.height*V),ce=F!==null?F.x:0,_e=F!==null?F.y:0;We.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,ce,_e,N,ee),Me.unbindTexture()};const Gu=R.createFramebuffer(),Vu=R.createFramebuffer();this.copyTextureToTexture=function(x,F,B=null,V=null,N=0,ee=null){ee===null&&(N!==0?(Nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=N,N=0):ee=0);let ce,_e,fe,Pe,Fe,Ae,$e,at,xt;const ft=x.isCompressedTexture?x.mipmaps[ee]:x.image;if(B!==null)ce=B.max.x-B.min.x,_e=B.max.y-B.min.y,fe=B.isBox3?B.max.z-B.min.z:1,Pe=B.min.x,Fe=B.min.y,Ae=B.isBox3?B.min.z:0;else{const un=Math.pow(2,-N);ce=Math.floor(ft.width*un),_e=Math.floor(ft.height*un),x.isDataArrayTexture?fe=ft.depth:x.isData3DTexture?fe=Math.floor(ft.depth*un):fe=1,Pe=0,Fe=0,Ae=0}V!==null?($e=V.x,at=V.y,xt=V.z):($e=0,at=0,xt=0);const ct=Ee.convert(F.format),Ce=Ee.convert(F.type);let _t;F.isData3DTexture?(We.setTexture3D(F,0),_t=R.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(We.setTexture2DArray(F,0),_t=R.TEXTURE_2D_ARRAY):(We.setTexture2D(F,0),_t=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const Je=R.getParameter(R.UNPACK_ROW_LENGTH),en=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Li=R.getParameter(R.UNPACK_SKIP_PIXELS),tn=R.getParameter(R.UNPACK_SKIP_ROWS),gr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ft.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ft.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Pe),R.pixelStorei(R.UNPACK_SKIP_ROWS,Fe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ae);const vt=x.isDataArrayTexture||x.isData3DTexture,cn=F.isDataArrayTexture||F.isData3DTexture;if(x.isDepthTexture){const un=ye.get(x),Xt=ye.get(F),Jt=ye.get(un.__renderTarget),Js=ye.get(Xt.__renderTarget);Me.bindFramebuffer(R.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,Js.__webglFramebuffer);for(let ui=0;ui<fe;ui++)vt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(x).__webglTexture,N,Ae+ui),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(F).__webglTexture,ee,xt+ui)),R.blitFramebuffer(Pe,Fe,ce,_e,$e,at,ce,_e,R.DEPTH_BUFFER_BIT,R.NEAREST);Me.bindFramebuffer(R.READ_FRAMEBUFFER,null),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||ye.has(x)){const un=ye.get(x),Xt=ye.get(F);Me.bindFramebuffer(R.READ_FRAMEBUFFER,Gu),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,Vu);for(let Jt=0;Jt<fe;Jt++)vt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,un.__webglTexture,N,Ae+Jt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,un.__webglTexture,N),cn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Xt.__webglTexture,ee,xt+Jt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Xt.__webglTexture,ee),N!==0?R.blitFramebuffer(Pe,Fe,ce,_e,$e,at,ce,_e,R.COLOR_BUFFER_BIT,R.NEAREST):cn?R.copyTexSubImage3D(_t,ee,$e,at,xt+Jt,Pe,Fe,ce,_e):R.copyTexSubImage2D(_t,ee,$e,at,Pe,Fe,ce,_e);Me.bindFramebuffer(R.READ_FRAMEBUFFER,null),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else cn?x.isDataTexture||x.isData3DTexture?R.texSubImage3D(_t,ee,$e,at,xt,ce,_e,fe,ct,Ce,ft.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(_t,ee,$e,at,xt,ce,_e,fe,ct,ft.data):R.texSubImage3D(_t,ee,$e,at,xt,ce,_e,fe,ct,Ce,ft):x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ee,$e,at,ce,_e,ct,Ce,ft.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ee,$e,at,ft.width,ft.height,ct,ft.data):R.texSubImage2D(R.TEXTURE_2D,ee,$e,at,ce,_e,ct,Ce,ft);R.pixelStorei(R.UNPACK_ROW_LENGTH,Je),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,en),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Li),R.pixelStorei(R.UNPACK_SKIP_ROWS,tn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,gr),ee===0&&F.generateMipmaps&&R.generateMipmap(_t),Me.unbindTexture()},this.initRenderTarget=function(x){ye.get(x).__webglFramebuffer===void 0&&We.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?We.setTextureCube(x,0):x.isData3DTexture?We.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?We.setTexture2DArray(x,0):We.setTexture2D(x,0),Me.unbindTexture()},this.resetState=function(){T=0,A=0,L=null,Me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const xc={type:"change"},el={type:"start"},gu={type:"end"},ys=new Hs,Mc=new Qn,y_=Math.cos(70*Po.DEG2RAD),Et=new D,Qt=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},La=1e-6;class b_ extends Nd{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Ti,this._lastTargetPosition=new D,this._quat=new Ti().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yl,this._sphericalDelta=new Yl,this._scale=1,this._panOffset=new D,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new D,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=E_.bind(this),this._onPointerDown=S_.bind(this),this._onPointerUp=w_.bind(this),this._onContextMenu=L_.bind(this),this._onMouseWheel=R_.bind(this),this._onKeyDown=C_.bind(this),this._onTouchStart=P_.bind(this),this._onTouchMove=D_.bind(this),this._onMouseDown=T_.bind(this),this._onMouseMove=A_.bind(this),this._interceptControlDown=U_.bind(this),this._interceptControlUp=I_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xc),this.update(),this.state=lt.NONE}update(e=null){const t=this.object.position;Et.copy(t).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Qt:n>Math.PI&&(n-=Qt),r<-Math.PI?r+=Qt:r>Math.PI&&(r-=Qt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),t.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Et.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ys.origin.copy(this.object.position),ys.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ys.direction))<y_?this.object.lookAt(this.target):(Mc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ys.intersectPlane(Mc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>La||8*(1-this._lastQuaternion.dot(this.object.quaternion))>La||this._lastTargetPosition.distanceToSquared(this.target)>La?(this.dispatchEvent(xc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qt/60*this.autoRotateSpeed*e:Qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Et.setFromMatrixColumn(t,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,t){this.screenSpacePanning===!0?Et.setFromMatrixColumn(t,1):(Et.setFromMatrixColumn(t,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Et.copy(r).sub(this.target);let s=Et.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function S_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function E_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function w_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gu),this.state=lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function T_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=lt.DOLLY;break;case tr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}break;case tr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(el)}function A_(i){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function R_(i){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(i.preventDefault(),this.dispatchEvent(el),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gu))}function C_(i){this.enabled!==!1&&this._handleKeyDown(i)}function P_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=lt.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=lt.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(el)}function D_(i){switch(this._trackPointer(i),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=lt.NONE}}function L_(i){this.enabled!==!1&&i.preventDefault()}function U_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function I_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function F_(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new Wt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=yc(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][d]);const m=yc(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function yc(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new pn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<t;m++){const _=u.getComponent(d,m);o.setComponent(d+h,m,_)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}const N_=`
varying float labRoomSeed;
varying vec3 labBoxPosition,labBoxSize,labBoxNormal;
vec3 labWindowEmission=vec3(0.);
float labFacadeHeight=0.;
float labFacadeGlass=0.;
float labRoomHash(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
vec2 labFacadePulse(vec2 q,vec2 fw,vec2 start,vec2 duty){
 vec2 lo=q-fw*.5-start,hi=q+fw*.5-start;
 return clamp((floor(hi)*duty+min(fract(hi),duty)-floor(lo)*duty-min(fract(lo),duty))/fw,0.,1.);
}
vec3 labFacadeNormal(vec3 normal,vec3 position,float height){
 vec3 dx=dFdx(position),dy=dFdy(position);
 vec3 r1=cross(dy,normal),r2=cross(normal,dx);
 float determinant=dot(dx,r1);
 vec3 gradient=sign(determinant)*(dFdx(height)*r1+dFdy(height)*r2);
 return normalize(max(abs(determinant),1e-8)*normal-gradient);
}
`,O_=`
 if(abs(labBoxNormal.y)<.5){
  bool side=abs(labBoxNormal.x)>.5;
  float width=side?labBoxSize.z:labBoxSize.x;
  vec2 face=vec2((side?labBoxPosition.z:labBoxPosition.x)+.5,labBoxPosition.y+.5)*vec2(width,labBoxSize.y);
  float seed=floor(labRoomSeed+.5),style=mod(seed,3.);
  float floors=max(2.,floor(labBoxSize.y/5.1+.5));
  float groups=max(1.,floor(width/(style<.5?12.:style<1.5?8.:18.)+.5));
  vec2 moduleSize=vec2(width/groups,labBoxSize.y/floors);
  vec2 q=face/moduleSize,fw=max(fwidth(q),vec2(.0001));
  vec2 start=vec2(.115,.32),duty=vec2(.77,.43);
  vec2 filtered=labFacadePulse(q,fw,start,duty);
  float pane=filtered.x*filtered.y;
  vec2 border=vec2(.095,.09)/moduleSize;
  vec2 frameMask=labFacadePulse(q,fw,start-border,duty+border*2.);
  float frame=max(0.,frameMask.x*frameMask.y-pane);
  vec2 inner=labFacadePulse(q,fw,start+vec2(.13,.16)/moduleSize,duty-vec2(.26,.24)/moduleSize);
  float reveal=clamp(pane-inner.x*inner.y,0.,1.);
  float resolved=1.-smoothstep(.18,.75,max(fw.x,fw.y));
  vec2 panelQ=face/2.4,panelFW=max(fwidth(panelQ),vec2(.0001));
  vec2 joints=labFacadePulse(panelQ,panelFW,vec2(0.),vec2(.008));
  float seam=clamp(joints.x+joints.y-joints.x*joints.y,0.,1.)*(1.-pane);
  diffuseColor.rgb*=1.-.12*seam;
  diffuseColor.rgb*=mix(.96,1.03,labBoxPosition.y+.5);
  // Opaque blue-gray glass: a stylized tint, not a reflection or transparency.
  float glassGradient=mix(.86,1.08,clamp((fract(q.y)-start.y)/duty.y,0.,1.));
  glassGradient=mix(.97,glassGradient,resolved);
  vec3 glass=vec3(.205,.305,.365)*glassGradient;
  diffuseColor.rgb=mix(diffuseColor.rgb,glass,pane);
  diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.34,.39,.42),frame*.82);
  diffuseColor.rgb*=1.-reveal*.3;
  vec2 mullionQ=vec2(face.x/1.65,0.),mullionFW=max(fwidth(mullionQ),vec2(.0001));
  float mullion=labFacadePulse(mullionQ,mullionFW,vec2(0.),vec2(.024,1.)).x*pane;
  diffuseColor.rgb*=1.-.23*mullion;
  labFacadeHeight=(-.1*pane+.025*frame-.014*seam)*resolved;
  labFacadeGlass=pane;
  if(labNight>.5){
   diffuseColor.rgb*=mix(vec3(1.),vec3(.22,.32,.42),pane);
   float facade=labBoxNormal.x*2.+labBoxNormal.z*4.;
   vec2 cell=vec2(floor(face.x/1.65),floor(q.y));
   float room=labRoomHash(vec3(cell,seed+floor(facade+.5)));
   float roomResolved=1.-smoothstep(.45,1.2,max(mullionFW.x,fw.y));
   float lit=mix(labWindowOccupancy,step(room,labWindowOccupancy),roomResolved);
   float temperature=labRoomHash(vec3(cell,seed+floor(facade+.5)+51.));
   vec3 warm=mix(vec3(1.,.43,.15),vec3(1.,.78,.48),temperature);
   warm=mix(warm,vec3(.57,.76,1.),step(.94,temperature));
   warm=mix(vec3(.95,.64,.33),warm,roomResolved);
   float interiorShade=mix(.65,mix(.48,1.,clamp((fract(q.y)-start.y)/duty.y,0.,1.)),resolved);
   labWindowEmission=pane*lit*warm*interiorShade*(1.-.85*mullion)*labWindows*labWindowPower;
  }
 }else{diffuseColor.rgb*=1.035;}
`,sn=[2.5,28.5,72,180],Nt=[{spacing:32,groundSpacing:16,size:24,far:160,offset:0},{spacing:128,size:16,far:512,offset:2304},{spacing:512,size:16,far:2048,offset:3328}],Ua=4352,Rn=64,Or=68,ii=8,wi=16,Qi=(i,e)=>(i%e+e)%e,Ia=(i,e,t=Nt[0].groundSpacing)=>i===0&&e===0?t:Nt[i].spacing,z_=(i,e=32)=>e===16?i>280?32:16:i<220?16:32;function B_(i,e,t,n){return t=Math.max(.02,t),i=Math.min(Math.max(e*2,t*1.5),i+e),{credit:i,faces:Math.min(n,Math.floor((i+1e-6)/t))}}function bc(i,e,t,n){const r=Nt[i];return r.offset+n*r.size*r.size+Qi(t,r.size)*r.size+Qi(e,r.size)}function Sc(i,e,t,n){const r={x:i,y:e,z:t};for(let s=0;s<8;s++){const a=n(r.x,r.z).find(l=>r.y>l.minY-.35&&r.y<l.maxY+.35&&r.x>l.minX-.7&&r.x<l.maxX+.7&&r.z>l.minZ-.7&&r.z<l.maxZ+.7);if(!a)return{...r,blocked:!1};const o=[["x",a.minX-1.2],["x",a.maxX+1.2],["z",a.minZ-1.2],["z",a.maxZ+1.2]];o.sort((l,c)=>Math.abs(r[l[0]]-l[1])-Math.abs(r[c[0]]-c[1])),r[o[0][0]]=o[0][1]}return{...r,blocked:!0}}class Ec{constructor(e=[]){this.cells=new Map;for(const t of e)for(let n=Math.floor(t.minX/128);n<=Math.floor(t.maxX/128);n++)for(let r=Math.floor(t.minZ/128);r<=Math.floor(t.maxZ/128);r++){const s=`${n}/${r}`;this.cells.has(s)||this.cells.set(s,[]),this.cells.get(s).push(t)}}query(e,t){const n=[],r=Math.floor(e/128),s=Math.floor(t/128);for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++)n.push(...this.cells.get(`${r+a}/${s+o}`)||[]);return n}}const et={enabled:{value:0},view:{value:0},strength:{value:.9},direct:{value:0},radius:{value:3},viewport:{value:new ve(1,1)},size:{value:new ve(1,1)},nearFar:{value:new ve(8,6500)},texture:{value:null},depth:{value:null}},Uo=new Set;function k_(i){Uo.add(i),i.addEventListener("dispose",()=>Uo.delete(i))}function G_(i){const e=i?1:0;if(et.enabled.value!==e){et.enabled.value=e;for(const t of Uo)t.needsUpdate=!0}}const V_=`
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
`,Ge={enabled:{value:0},windows:{value:1},occupancy:{value:.57},windowPower:{value:1.8},streets:{value:1},streetPower:{value:1},glow:{value:.65},lampColor:{value:new de("#ffc078")},atmosphere:{value:1}},H_=`
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
`,Ot={wet:{value:0},snow:{value:0},giCompatibility:{value:1},roof:{value:null},roofMatrix:{value:new nt},roofReady:{value:0},noise:{value:null}},_u=`
uniform sampler2D labRoofDepth;uniform mat4 labRoofMatrix;uniform float labRoofReady;
float labSkyExposure(vec3 p){
 if(labRoofReady<.5)return 1.;vec4 q=labRoofMatrix*vec4(p,1.);vec3 uv=q.xyz/q.w*.5+.5;
 if(any(lessThan(uv,vec3(0.)))||any(greaterThan(uv,vec3(1.))))return 1.;
 float top=texture2D(labRoofDepth,uv.xy).r;
 // A small depth tolerance prevents the receiving roof occluding itself.
 return uv.z<=top+.0007?1.:0.;
}
`,W_=`
uniform float labWet,labSnow,labWeatherGI;uniform sampler2D labWeatherNoise;
${_u}
`,me={capture:{value:0},captureOrigin:{value:new D},captureFar:{value:160},gi:{value:.85},visibility:{value:1},gray:{value:0},view:{value:0},coverage:{value:0},debugColors:{value:0},origin:{value:new D},sky:{value:new de("#a8cad8")},ground:{value:new de("#848b6c")},grids:{value:Nt.map(i=>new Ye(0,0,i.spacing,i.size))},wraps:{value:Nt.map(()=>new ve)},groundGrid:{value:new Ye(0,0,Nt[0].groundSpacing,Nt[0].size)},groundWrap:{value:new ve},irrAtlas:{value:null},depthAtlas:{value:null},probeMeta:{value:null},probeCoverage:{value:null},coverageGrids:{value:Nt.map(()=>new Ye)}},X_=`
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
vec2 labAtlasUV(float slot,vec2 oct,float res){vec2 tile=vec2(mod(slot,${Rn}.),floor(slot/${Rn}.));return (tile*(res+2.)+1.+oct*res)/(vec2(${Rn}.,${Or}.)*(res+2.));}
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
  vec4 meta=texture2D(labProbeMeta,(vec2(mod(slot,${Rn}.),floor(slot/${Rn}.))+.5)/vec2(${Rn}.,${Or}.));
  // Still wait for every required corner. The shared confidence field is zero
  // throughout pending cells and fades ready neighbors to zero at their shared
  // faces, including height planes and the independent 16/32 m ground grids.
  // Blocked(-1) is structural; pending(0) must not renormalize arrivals.
  if(meta.w<-.5)continue;if(meta.w<.00001)return vec4(0.);
  if(weight<.00001)continue;vec3 delta=biased-meta.xyz;float dist=max(length(delta),.001);
  vec2 moments=texture2D(labDepthAtlas,labAtlasUV(slot,labOct(delta/dist),${wi}.)).rg;
  float mean=moments.x*range,variance=max(.25,(moments.y-moments.x*moments.x)*range*range),difference=max(0.,dist-mean-.6);
  float visibility=variance/(variance+difference*difference);visibility=pow(visibility,2.);
  weight*=mix(1.,visibility,labVisibility);
  // Retain some weight for grazing surfaces; suppress probes behind a receiver.
  weight*=pow(clamp(dot(normal,-delta/dist)*.5+.5,.1,1.),2.);
  sum+=texture2D(labIrrAtlas,labAtlasUV(slot,normalOct,${ii}.)).rgb*weight;weights+=weight;
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
`,q_={labLand:{value:new de("#d1d4c5")},labRoad:{value:new de("#6f7c77")},labCurb:{value:new de("#c2c7b7")},labWater:{value:new de("#718f8e")},labPark:{value:new de("#93af85")},labMark:{value:new de("#e4e7ce")}},Y_=`
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
 labSurfaceWater=1.-smoothstep(92.5-rw,92.5+rw,rd);c=mix(c,labWater,labSurfaceWater);
 return c;
}
`;function Ft(i,e={}){const{facade:t=!1,instanceTags:n=!1,terrain:r=!1,debugColor:s=0,debugNeutral:a=!1,...o}=e,l=t||n,c=new Rd({color:i,roughness:.88,metalness:0,...o});return c.onBeforeCompile=u=>{Object.assign(u.uniforms,{labCapture:me.capture,labCaptureOrigin:me.captureOrigin,labCaptureFar:me.captureFar,labGI:me.gi,labVisibility:me.visibility,labGray:me.gray,labView:me.view,labCoverage:me.coverage,labDebugColors:me.debugColors,labDebugColor:{value:s},labDebugNeutral:{value:+a},labOrigin:me.origin,labSky:me.sky,labGround:me.ground,labGrids:me.grids,labWraps:me.wraps,labGroundGrid:me.groundGrid,labGroundWrap:me.groundWrap,labIrrAtlas:me.irrAtlas,labDepthAtlas:me.depthAtlas,labProbeMeta:me.probeMeta,labProbeCoverage:me.probeCoverage,labCoverageGrids:me.coverageGrids},r?q_:{});const h=et.enabled.value>.5;Object.assign(u.uniforms,{labNight:Ge.enabled,labWindows:Ge.windows,labWindowOccupancy:Ge.occupancy,labWindowPower:Ge.windowPower,labStreets:Ge.streets,labStreetPower:Ge.streetPower,labLampColor:Ge.lampColor}),Object.assign(u.uniforms,{labWet:Ot.wet,labSnow:Ot.snow,labWeatherGI:Ot.giCompatibility,labRoofDepth:Ot.roof,labRoofMatrix:Ot.roofMatrix,labRoofReady:Ot.roofReady,labWeatherNoise:Ot.noise}),u.vertexShader=`varying vec3 labWorldPosition;
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
 #endif`:""}`),Object.assign(u.uniforms,{labAOEnabled:et.enabled,labAOView:et.view,labAOStrength:et.strength,labAODirect:et.direct,labAORadius:et.radius,labAOViewport:et.viewport,labAOSize:et.size,labAONearFar:et.nearFar,labAOTexture:et.texture,labAODepth:et.depth}),u.fragmentShader=W_+X_+H_+(h?V_:"")+(r?Y_:"")+(l?`varying float labColorTag;
`:"")+(t?N_:"")+u.fragmentShader,r&&(u.fragmentShader=u.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=labTerrain();`)),t&&(u.fragmentShader=u.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
`+O_)),t&&(u.fragmentShader=u.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=labWindowEmission;`)),u.fragmentShader=u.fragmentShader.replace("#include <roughnessmap_fragment>",`float labTag=${l?"labColorTag":"labDebugColor"};
if(labDebugColors>.5){if(labTag>.5)diffuseColor.rgb=labDebugAlbedo(labTag);else if(labDebugNeutral>.5)diffuseColor.rgb=vec3(.72);}
#include <roughnessmap_fragment>
${t?"if(labDebugColors<.5||labTag<.5)roughnessFactor=mix(roughnessFactor,.36,labFacadeGlass);else labFacadeHeight=0.;":""}`),u.fragmentShader=u.fragmentShader.replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
irradiance+=labEnvironment(inverseTransformDirection(geometryNormal,viewMatrix));`),u.fragmentShader=u.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
 ${t?"normal=labFacadeNormal(normal,-vViewPosition,labFacadeHeight);":""}
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
#include <aomap_fragment>`),h&&(u.fragmentShader=u.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
 float labAOVisibility=1.;
 if(labCapture<.5&&labAOEnabled>.5){labAOVisibility=labReadAO(vViewPosition.z);reflectedLight.indirectDiffuse*=labAOVisibility;float directAO=mix(1.,labAOVisibility,labAODirect);reflectedLight.directDiffuse*=directAO;reflectedLight.directSpecular*=directAO;}`)),u.fragmentShader=u.fragmentShader.replace("#include <opaque_fragment>",`if(labView>.5&&labCapture<.5)outgoingLight=reflectedLight.indirectDiffuse;
if(labCoverage>.5&&labCapture<.5)outgoingLight=mix(vec3(.24,.27,.28),vec3(.10,.70,.38),labContribution);
${h?"if(labAOView>.5&&labCapture<.5)outgoingLight=vec3(labAOVisibility);":""}
#include <opaque_fragment>
if(labCapture>.5)gl_FragColor.a=clamp(length(labWorldPosition-labCaptureOrigin)/labCaptureFar,0.,.999);`),h&&(u.fragmentShader=u.fragmentShader.replace("#include <tonemapping_fragment>",`if(labAOView<.5||labCapture>.5){
#include <tonemapping_fragment>
}`)),u.fragmentShader=u.fragmentShader.replace("#include <fog_fragment>",`if(${h?"(labView<.5&&labAOView<.5)":"labView<.5"}||labCapture>.5){
#include <fog_fragment>
}`)},c.userData.labKind=r?"terrain":t?"facade":n?"architecture":"surface",c.customProgramCacheKey=()=>`lab-${c.userData.labKind}-13-architecture-ao${et.enabled.value}`,k_(c),c}const Io=2048;function bn(i,e,t=0){const n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)}function vu(i){return-520+85*Math.sin(i/850)}function kt(i){return 105+80*Math.sin(i/550)}function ri(i){const e=i*2400-900;return{x:e,y:27,z:kt(e)}}function Rr(i,e,t){const n=Io/2**i;return{level:i,x:e,z:t,size:n,cx:(e+.5)*n,cz:(t+.5)*n,key:`${i}/${e}/${t}`}}function $_(i){return[Rr(i.level+1,i.x*2,i.z*2),Rr(i.level+1,i.x*2+1,i.z*2),Rr(i.level+1,i.x*2,i.z*2+1),Rr(i.level+1,i.x*2+1,i.z*2+1)]}function zr(i,e,t){return Math.hypot(Math.max(Math.abs(i-t.cx)-t.size/2,0),Math.max(Math.abs(e-t.cz)-t.size/2,0))}function j_(i,e,t){const n=[],r=Math.floor(i/Io),s=Math.floor(e/Io),a=Math.min(2300,Math.max(850,t*2.5)),o=t>800?512:t>350?256:128;function l(c){return c.refine=c.size>o&&zr(i,e,c)<c.size*.72,c.children=c.refine?$_(c).map(l):[],c}for(let c=r-1;c<=r+1;c++)for(let u=s-1;u<=s+1;u++){const h=Rr(0,c,u);zr(i,e,h)<a&&n.push(l(h))}return n}function Z_(i,e,t=0){const n=i*128+32+t%2*63,r=e*128+32+Math.floor(t/2)*63,s=bn(i,e,t);return{x:n,z:r,w:27+bn(i,e,t+10)*18,d:24+bn(i,e,t+20)*20,h:12+Math.pow(s,2.5)*110,color:Math.floor(bn(i,e,t+40)*6)}}function K_(i,e){let t=i;for(const[n,r,s]of[[0,e.minX,1],[0,e.maxX,-1],[2,e.minZ,1],[2,e.maxZ,-1]]){const a=t;if(t=[],!a.length)break;for(let o=0;o<a.length;o++){const l=a[o],c=a[(o+1)%a.length],u=(l[n]-r)*s,h=(c[n]-r)*s;if(u>=-1e-7&&t.push(l),u>=0!=h>=0){const d=u/(u-h);t.push(l.map((f,m)=>f+(c[m]-f)*d))}}}return t}const J_=["#d8dede","#e2e5e4","#dddcd5","#d5c7b5","#cccbd7","#c1cfd8"];function Q_(i,e){if(e>512)return[];const t=[],n=.38,r=.72+bn(i.x,i.z,105)*.32,s=(a,o,l,c,u,h,d,f)=>t.push({kind:a,x:o,y:l,z:c,w:u,h,d,tint:f});for(const a of[-1,1])s("parapet",i.x,i.h+r/2,i.z+a*(i.d-n)/2,i.w,r,n,null),s("parapet",i.x+a*(i.w-n)/2,i.h+r/2,i.z,n,r,i.d-n*2,null);if(e<=256){const a=Math.min(7.2,i.w*.22),o=Math.min(6.4,i.d*.22),l=1.65+bn(i.x,i.z,106)*1.1,c=i.x-i.w*.19,u=i.z+i.d*.16;s("service-room",c,i.h+l/2,u,a,l,o,null),s("vent",i.x+i.w*.23,i.h+.4,i.z-i.d*.22,2.4,.8,1.7,"#c0c9d2"),bn(i.x,i.z,107)>.5&&s("vent",i.x+i.w*.23,i.h+.3,i.z-i.d*.22+2.7,2.4,.6,1.7,"#c0c9d2")}return t}function ev(i){return{minX:i.x-i.w/2,maxX:i.x+i.w/2,minY:i.y-i.h/2,maxY:i.y+i.h/2,minZ:i.z-i.d/2,maxZ:i.z+i.d/2}}function tv(i){const e=[],t=i.cx-i.size/2,n=t+i.size,r=i.cz-i.size/2,s=r+i.size,a=(l,c)=>l>=t&&l<n&&c>=r&&c<s,o=(l,c,u=!1,h=0)=>{a(l,c)&&(u||Math.abs(c-vu(l))>=103)&&e.push({x:l,z:c,y:u?34:9,base:u?26:0,elevated:u,axis:h})};for(let l=Math.floor(t/128)*128+8.5;l<n;l+=128)for(let c=Math.floor((r-32)/64)*64+32;c<s;c+=64)o(l,c,!1,0);for(let l=Math.floor(r/128)*128+8.5;l<s;l+=128)for(let c=Math.floor((t-32)/64)*64+32;c<n;c+=64)o(c,l,!1,1);for(let l=Math.floor((t-32)/64)*64+32;l<n;l+=64)o(l,kt(l)+13.5,!0,0);return e}const wc=new Dn(1,1,1),nv=Ft("#566975",{roughness:.65}),xu=Ft("#e0d5b9",{roughness:.5,emissive:"#ffc078",emissiveIntensity:0}),Mu=new Pt({uniforms:{night:Ge.enabled,streets:Ge.streets,glow:Ge.glow,power:Ge.streetPower,atmosphere:Ge.atmosphere,color:Ge.lampColor,inspect:me.view,aoView:et.view},transparent:!0,depthTest:!0,depthWrite:!1,blending:Va,toneMapped:!1,vertexShader:"varying vec2 uvGlow;varying float fade;void main(){uvGlow=uv;vec4 center=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);fade=exp(-pow(length(center.xyz)*.00085,2.));center.xy+=position.xy*6.;gl_Position=projectionMatrix*center;}",fragmentShader:"uniform float night,streets,glow,power,inspect,aoView,atmosphere;uniform vec3 color;varying vec2 uvGlow;varying float fade;void main(){float r=length(uvGlow-.5)*2.;if(r>=1.||night<.5||streets<.5||glow<.001||inspect>.5||aoView>.5)discard;float core=exp(-r*r*100.);float halo=pow(1.-r,3.)*.34;gl_FragColor=vec4(color*(core+halo)*glow*atmosphere*fade*min(power,2.),1.);}"}),iv=new Ln(1,1);tl();function tl(){xu.emissiveIntensity=Ge.enabled.value*Ge.streets.value*3.5*Ge.streetPower.value,Mu.visible=!!(Ge.enabled.value&&Ge.streets.value&&Ge.glow.value)}function rv(i,e){const t=tv(i);if(e.userData.streetFixtures=t,!t.length)return;const n=new ar(wc.clone(),nv,t.length*2),r=new ar(wc.clone(),xu,t.length),s=new ar(iv.clone(),Mu,t.length),a=new bt;let o=0;for(let l=0;l<t.length;l++){const c=t[l],u=c.x-i.cx,h=c.z-i.cz,d=c.y-c.base;a.position.set(u+(c.axis===0?2:0),c.base+d/2,h+(c.axis===1?2:0)),a.scale.set(.22,d,.22),a.updateMatrix(),n.setMatrixAt(o++,a.matrix),a.position.set(u+(c.axis===0?1:0),c.y+.14,h+(c.axis===1?1:0)),a.scale.set(c.axis===0?2.3:.2,.18,c.axis===1?2.3:.2),a.updateMatrix(),n.setMatrixAt(o++,a.matrix),a.position.set(u,c.y+.05,h),a.scale.set(c.axis===0?1.5:.65,.23,c.axis===1?1.5:.65),a.updateMatrix(),r.setMatrixAt(l,a.matrix),a.position.y=c.y-.2,a.scale.set(1,1,1),a.updateMatrix(),s.setMatrixAt(l,a.matrix)}n.castShadow=!1,n.receiveShadow=!0,r.castShadow=!1,r.receiveShadow=!1,s.layers.set(5),s.frustumCulled=!1,s.renderOrder=5,e.add(n,r,s)}const yu=J_.map(i=>new de(i)),gt=new Dn(1,1,1),Zi=new qs(1,1,1,10),Fo=new Ko(1,1,10),Qe={building:Ft("#ffffff",{facade:!0}),architecture:Ft("#ffffff",{instanceTags:!0}),ground:Ft("#ffffff",{terrain:!0}),road:Ft("#6f7c77"),curb:Ft("#c2c7b7"),white:Ft("#e4e7ce"),pier:Ft("#b7c0b2"),green:Ft("#93af85"),blue:Ft("#718f8e"),warm:Ft("#c2a177"),red:Ft("#bc755e"),stone:Ft("#e0d9c1")},wr={red:Ft("#bc755e",{debugColor:1}),pink:Ft("#718f8e",{debugColor:3}),floor:Ft("#93af85",{debugNeutral:!0}),receiver:Ft("#e0d9c1",{debugNeutral:!0})},sv=[{x:75,z:-192,y:173,name:"海湾金融中心"},{x:-208,z:-405,y:130,name:"观景塔"},{x:430,z:kt(430),y:43,name:"海湾收费站"},{x:-55,z:8,y:9,name:"滨河公交站"},{x:70,z:390,y:40,name:"环境染色试验区"}];function bu(i,e,t,n,r,s,a,o,l,c=0){const u=new dt(e,t);if(u.position.set(n,r,s),u.scale.set(a,o,l),u.rotation.y=c,u.castShadow=!0,u.receiveShadow=!0,i.add(u),o>1){e.computeBoundingBox(),u.updateMatrix();const h=e.boundingBox.clone().applyMatrix4(u.matrix),d=i.userData.node;i.userData.probeObstacles.push({minX:h.min.x+d.cx,maxX:h.max.x+d.cx,minY:h.min.y,maxY:h.max.y,minZ:h.min.z+d.cz,maxZ:h.max.z+d.cz})}return u}function Su(i){const e=[],t={minX:i.cx-i.size/2,maxX:i.cx+i.size/2,minZ:i.cz-i.size/2,maxZ:i.cz+i.size/2};return{polygon(n){const r=K_(n,t);for(let s=1;s<r.length-1;s++)for(const a of[r[0],r[s+1],r[s]])e.push(a[0]-i.cx,a[1],a[2]-i.cz)},finish(n,r){if(!e.length)return;const s=new Wt;s.setAttribute("position",new Ct(e,3)),s.computeVertexNormals();const a=new dt(s,n);a.castShadow=!0,a.receiveShadow=!0,r.add(a)}}}function _i(i,e,t,n,r,s,a=0,o=0){const l=Su(i),c=i.cx-i.size/2;i.cx+i.size/2;const u=Math.ceil(i.size/16);for(let h=0;h<u;h++){const d=c+h*i.size/u,f=c+(h+1)*i.size/u,m=t(d)+a,_=t(f)+a,g=[d,n,m-r/2],p=[f,n,_+r/2];l.polygon([g,[f,n,_-r/2],p,[d,n,m+r/2]]),o&&(l.polygon([[d,n-o,m-r/2],[f,n-o,_-r/2],[f,n,_-r/2],g]),l.polygon([[d,n,m+r/2],p,[f,n-o,_+r/2],[d,n-o,m+r/2]]),l.polygon([[d,n-o,m+r/2],[f,n-o,_+r/2],[f,n-o,_-r/2],[d,n-o,m-r/2]]))}l.finish(s,e)}function av(i,e){const t=[],n=i.cx-i.size/2,r=i.cz-i.size/2,s=Math.max(1,i.size/512),a=Math.floor(n/128),o=Math.floor(r/128);for(let f=a;f<Math.ceil((n+i.size)/128);f+=s)for(let m=o;m<Math.ceil((r+i.size)/128);m+=s)for(let _=0;_<(s===1?4:1);_++){const g=Z_(f,m,_);g.x<n||g.x>=n+i.size||g.z<r||g.z>=r+i.size||Math.abs(g.z-vu(g.x))<115||Math.abs(g.z-kt(g.x))<27||Math.hypot(g.x-75,g.z+192)<65||Math.hypot(g.x+208,g.z+405)<43||Math.hypot(g.x-70,g.z-390)<95||Math.hypot(g.x-430,g.z-kt(430))<90||t.push({...g,w:g.w*Math.sqrt(s),d:g.d*Math.sqrt(s)})}if(!t.length)return;const l=gt.clone(),c=new Float32Array(t.length),u=new Float32Array(t.length);for(let f=0;f<t.length;f++){const m=t[f];u[f]=Math.floor(bn(m.x,m.z,91)*4095)+1,c[f]=bn(m.x,m.z,83)<.28?1+Math.floor(bn(m.x,m.z,84)*3):0,e.userData.probeObstacles.push({minX:m.x-m.w/2,maxX:m.x+m.w/2,minY:0,maxY:m.h,minZ:m.z-m.d/2,maxZ:m.z+m.d/2}),e.userData.buildings.push({...m,tag:c[f]})}l.setAttribute("labDebugTag",new Ai(c,1)),l.setAttribute("labWindowSeed",new Ai(u,1));const h=new ar(l,Qe.building,t.length),d=new bt;for(let f=0;f<t.length;f++){const m=t[f];d.position.set(m.x-i.cx,m.h/2,m.z-i.cz),d.scale.set(m.w,m.h,m.d),d.updateMatrix(),h.setMatrixAt(f,d.matrix),h.setColorAt(f,yu[m.color])}h.castShadow=!0,h.receiveShadow=!0,h.instanceMatrix.needsUpdate=!0,h.instanceColor.needsUpdate=!0,h.name="building-bodies",e.add(h),ov(i,e,t,c)}function ov(i,e,t,n){const r=[];for(let c=0;c<t.length;c++)for(const u of Q_(t[c],i.size))r.push({...u,tag:n[c],color:t[c].color});if(!r.length)return;const s=gt.clone(),a=new Float32Array(r.map(c=>c.tag));s.setAttribute("labDebugTag",new Ai(a,1));const o=new ar(s,Qe.architecture,r.length),l=new bt;o.name="building-roofs",o.userData.parts=r;for(let c=0;c<r.length;c++){const u=r[c];l.position.set(u.x-i.cx,u.y,u.z-i.cz),l.scale.set(u.w,u.h,u.d),l.updateMatrix(),o.setMatrixAt(c,l.matrix),o.setColorAt(c,u.tint?new de(u.tint):yu[u.color]),e.userData.probeObstacles.push(ev(u))}o.castShadow=!0,o.receiveShadow=!0,o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0,e.add(o)}function lv(i,e){const t=(r,s)=>r>=i.cx-i.size/2&&r<i.cx+i.size/2&&s>=i.cz-i.size/2&&s<i.cz+i.size/2,n=(r,s,a,o,l,c,u,h,d=0)=>bu(e,r,s,a-i.cx,o,l-i.cz,c,u,h,d);if(t(75,-192)){n(gt,Qe.stone,75,5,-192,80,10,66),n(gt,Qe.blue,75,68,-192,40,126,38),n(gt,Qe.blue,75,133,-192,30,20,29),n(Fo,Qe.warm,75,154,-192,19,26,19),n(Zi,Qe.stone,75,173,-192,.7,18,.7);for(let r=18;r<128;r+=11)n(gt,Qe.stone,75,r,-192,41,1,39)}if(t(-208,-405)&&(n(Zi,Qe.stone,-208,28,-405,5,56,5),n(Zi,Qe.red,-208,60,-405,17,14,17),n(Zi,Qe.stone,-208,82,-405,3.5,38,3.5),n(Zi,Qe.warm,-208,107,-405,11,11,11),n(Fo,Qe.stone,-208,123,-405,3,24,3)),t(430,kt(430))){const r=kt(430);n(gt,Qe.stone,430,33,r,23,2,39),n(gt,Qe.green,430,34.6,r,25,1.2,40);for(const s of[-16,-8,0,8,16])n(gt,Qe.stone,432,29.5,r+s,1,8,1),n(gt,Qe.blue,425,28,r+s,3,4,2.5),n(gt,Qe.white,421,28,r+s,1.2,.25,5)}if(t(-55,8)){n(gt,Qe.blue,-55,2,8,25,4,1),n(gt,Qe.green,-55,5,9,28,.7,6);for(const r of[-65,-45])n(gt,Qe.stone,r,2.5,11,.7,5,.7);n(gt,Qe.warm,-55,1,9,17,.6,1.5),n(gt,Qe.green,-34,3,10,1,6,1)}t(70,390)&&(n(gt,wr.floor,70,.12,390,120,.25,95),n(gt,wr.red,34,14,390,7,28,70),n(gt,wr.receiver,70,14,390,6,28,70),n(gt,wr.pink,108,14,390,7,28,70),n(gt,wr.receiver,70,29,390,80,2,70))}function cv(i){const e=new Ei;e.userData.node=i,e.userData.probeObstacles=[],e.userData.buildings=[],av(i,e);const t=i.cx-i.size/2,n=i.cz-i.size/2,r=t+i.size,s=n+i.size,a=Su(i);a.polygon([[t,0,n],[r,0,n],[r,0,s],[t,0,s]]),a.finish(Qe.ground,e),_i(i,e,kt,25,32,Qe.pier,0,3),_i(i,e,kt,25.13,27,Qe.road),_i(i,e,kt,26,1,Qe.white,-15),_i(i,e,kt,26,1,Qe.white,15),_i(i,e,kt,25.2,.5,Qe.white),_i(i,e,u=>kt(u)+65*Math.exp(-(((u-100)/310)**2)),22,11,Qe.pier,0,2),_i(i,e,u=>kt(u)+65*Math.exp(-(((u-100)/310)**2)),22.13,9.5,Qe.road);for(let u=Math.floor(t/72)*72;u<r;u+=72){const h=kt(u);h>=n&&h<s&&bu(e,gt,Qe.pier,u-i.cx,11,h-i.cz,5,22,11)}lv(i,e),rv(i,e);const o=new Map;for(const u of[...e.children])u.isMesh&&!u.isInstancedMesh&&!u.geometry.getAttribute("uv")&&(o.has(u.material)||o.set(u.material,[]),o.get(u.material).push(u));for(const[u,h]of o)if(h.length>1){const d=F_(h.map(m=>m.geometry),!1);for(const m of h)e.remove(m),m.geometry.dispose();const f=new dt(d,u);f.castShadow=!0,f.receiveShadow=!0,e.add(f)}const l=new Dn(i.size,.4,i.size),c=new Td(new Ad(l),new au({color:[3377778,12162114,3904175,10779837,13200216][i.level]}));return l.dispose(),c.position.y=.6,c.layers.set(3),e.add(c),e}function Tc(i){i.traverse(e=>{e.geometry&&e.geometry!==gt&&e.geometry!==Zi&&e.geometry!==Fo&&e.geometry.dispose(),e.isInstancedMesh&&e.dispose(),e.isLineSegments&&e.material.dispose()})}class uv{constructor(e){this.scene=e,this.tiles=new Map,this.version=0,this.origin=new D,this.frame=0,this.active=[],this.loads=0,this.unloads=0,this.roots=[]}update(e,t,n,r){this.frame++,this.roots=j_(e,t,n);const s=new Set,a=f=>{s.add(f.key);let m=this.tiles.get(f.key);m||(m={node:f,readyAt:r+80+bn(f.x,f.z,f.level)*220,group:null,last:this.frame},this.tiles.set(f.key,m)),m.last=this.frame;for(const _ of f.children)a(_)};this.roots.forEach(a);const o=[...this.tiles.values()].filter(f=>!f.group&&s.has(f.node.key)&&f.readyAt<=r).sort((f,m)=>(f.node.level-m.node.level)*180+zr(e,t,f.node)-zr(e,t,m.node));for(const f of o.slice(0,2))f.group=cv(f.node),f.group.visible=!1,this.scene.add(f.group),this.loads++;const l=[],c=f=>{const m=this.tiles.get(f.key);if(!m?.group)return!1;if(!f.children.length)return l.push(m),!0;const _=l.length;for(const g of f.children)if(!c(g))return l.length=_,l.push(m),!0;return!0};this.roots.forEach(c);const u=new Set(l.map(f=>f.node.key));let h=!1;for(const[f,m]of this.tiles)m.group&&(m.group.visible!==u.has(f)&&(h=!0),m.group.visible=u.has(f),m.group.position.set(m.node.cx-this.origin.x,0,m.node.cz-this.origin.z)),!s.has(f)&&this.frame-m.last>150&&(m.group&&(this.scene.remove(m.group),Tc(m.group),this.unloads++),this.tiles.delete(f));const d=[...this.tiles.entries()].filter(([f])=>!s.has(f)).sort((f,m)=>f[1].last-m[1].last);for(;this.tiles.size>180&&d.length;){const[f,m]=d.shift();m.group&&(this.scene.remove(m.group),Tc(m.group),this.unloads++),this.tiles.delete(f)}return this.active=l,h&&this.version++,h}rebase(e,t){this.origin.set(Math.round(e/512)*512,0,Math.round(t/512)*512);for(const n of this.tiles.values())n.group&&n.group.position.set(n.node.cx-this.origin.x,0,n.node.cz-this.origin.z)}stats(){let e=0,t=0;for(const n of this.tiles.values())n.group?.traverse(r=>{if(r.geometry&&r.geometry!==gt)for(const s of Object.values(r.geometry.attributes))e+=s.array.byteLength;r.isInstancedMesh&&(t+=r.count,e+=r.instanceMatrix.array.byteLength+(r.instanceColor?.array.byteLength||0))});return{resident:[...this.tiles.values()].filter(n=>n.group).length,visible:this.active.length,pending:[...this.tiles.values()].filter(n=>!n.group).length,bytes:e,instances:t,loads:this.loads,unloads:this.unloads,version:this.version}}}function Br(i,e,t=0,n=0,r=e.width,s=e.height,a=!1){e.viewport.set(t,n,r,s),e.scissor.set(t,n,r,s),e.scissorTest=a,i.setRenderTarget(e)}class Ac{constructor(e=[]){this.bounds=e,this.cache=new Map}mask(e,t,n,r,s,a){const o=Nt[e],l=o.size,c=[e,t,n,r,s,a].join("/");if(this.cache.get(e)?.key===c)return this.cache.get(e).data;const u=new Uint8Array(l*l*sn.length);for(let h=0;h<sn.length;h++){const d=h*l*l;if(h===0&&e>0){u.fill(1,d,d+l*l);continue}const f=h===0?t:o.spacing,m=h===0?s:n,_=h===0?a:r,g=h===0?-1/0:sn[h-1],p=h===sn.length-1?1/0:sn[h+1],E=h===0&&e===0?32:0;for(const S of this.bounds){if(S.maxY<=g||S.minY>=p)continue;const b=Math.max(0,Math.floor((S.minX-E)/f)-m),P=Math.min(l-1,Math.floor((S.maxX+E)/f)+1-m),T=Math.max(0,Math.floor((S.minZ-E)/f)-_),A=Math.min(l-1,Math.floor((S.maxZ+E)/f)+1-_);if(!(b>P||T>A))for(let L=T;L<=A;L++)u.fill(1,d+L*l+b,d+L*l+P+1)}}return this.cache.set(e,{key:c,data:u}),u}}function hv(i,e){return i.map((t,n)=>{const{size:r,spacing:s,minX:a,minZ:o}=t,l=t.level??n,c=t.groundSpacing??s,u=t.groundMinX??a,h=t.groundMinZ??o,d=Math.min(s,c),f=s/d;if(!Number.isInteger(r)||r<2||!Number.isInteger(f)||f<1||!Number.isInteger(c/d)||d<=0)throw new Error("Probe coverage requires nested integer-ratio grids");const m=r*f,_=a*s,g=o*s,p=new Float32Array(m*m*4),E=Array(r*r*4),S=(A,L,M)=>{const y=A===0?u:a,C=A===0?h:o,I=(A*r+M-C)*r+L-y;return E[I]??(E[I]=e(l,A,L,M)??{valid:0,required:!0})},b=m+1,P=new Float32Array(b*b*3),T=new Float32Array(b*b*4);for(let A=0;A<4;A++)for(let L=-1;L<m;L++)for(let M=-1;M<m;M++){const y=A===0?c:s,C=A===0?u:a,I=A===0?h:o,z=Math.floor((_+(M+.5)*d)/y),G=Math.floor((g+(L+.5)*d)/y);let W=1;if(z>=C&&G>=I&&z<C+r-1&&G<I+r-1)for(let H=0;H<2;H++)for(let j=0;j<2;j++){const k=S(A,z+j,G+H);if(k.required===!1){W=0;continue}k.blocked||(W=Math.min(W,Number.isFinite(k.valid)?Math.max(0,Math.min(1,k.valid)):0))}T[(A*b+L+1)*b+M+1]=W}for(let A=0;A<3;A++)for(let L=-1;L<m;L++)for(let M=-1;M<m;M++){const y=_+(M+.5)*d,C=g+(L+.5)*d;let I=1,z=!1;for(let G=A;G<=A+1;G++){const W=G===0?c:s,H=G===0?u:a,j=G===0?h:o,k=Math.floor(y/W),ie=Math.floor(C/W);if(!(k<H||ie<j||k>=H+r-1||ie>=j+r-1))for(let oe=0;oe<2;oe++)for(let he=0;he<2;he++){const Ue=S(G,k+he,ie+oe);if(Ue.required===!1){z=!0;continue}Ue.blocked||(I=Math.min(I,Number.isFinite(Ue.valid)?Math.max(0,Math.min(1,Ue.valid)):0))}}P[(A*b+L+1)*b+M+1]=z?1:I}for(let A=0;A<m;A++)for(let L=0;L<m;L++)for(let M=0;M<4;M++){let y=1;for(let C=Math.max(0,M-1);C<=Math.min(2,M);C++)for(let I=0;I<2;I++)for(let z=0;z<2;z++)y=Math.min(y,P[(C*b+A+I)*b+L+z]);for(let C=0;C<2;C++)for(let I=0;I<2;I++)y=Math.min(y,T[(M*b+A+C)*b+L+I]);p[(A*m+L)*4+M]=y}return{level:l,width:m,height:m,spacing:d,originX:_,originZ:g,data:p}})}const Fa=128,Eu=.75,dv=16,fv=8,pv="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",bs=i=>new gn(dv*(i+2),fv*(i+2),{type:qn,format:zt,minFilter:Rt,magFilter:Rt,depthBuffer:!1,generateMipmaps:!1});class mv{constructor(e){this.renderer=e,this.active=[],this.free=Array.from({length:Fa},(r,s)=>Fa-1-s),this.duration=Eu,this.blended=0,this.oldIrr=bs(ii),this.newIrr=bs(ii),this.oldDepth=bs(wi),this.newDepth=bs(wi),this.copyMaterial=new Pt({vertexShader:pv,fragmentShader:"varying vec2 vUv;uniform sampler2D source;uniform vec2 sourceSize;uniform float pitch,slot;void main(){vec2 tile=vec2(mod(slot,64.),floor(slot/64.));gl_FragColor=texture2D(source,(tile*pitch+vUv*pitch)/sourceSize);}",uniforms:{source:{value:null},sourceSize:{value:new ve},pitch:{value:10},slot:{value:0}},depthTest:!1,depthWrite:!1});const t=new uu,n=new Ln(2,2);t.index=n.index,t.attributes=n.attributes,this.entries=new Float32Array(Fa*3),t.setAttribute("entry",new Ai(this.entries,3)),t.instanceCount=0,this.material=new Pt({vertexShader:"attribute vec3 entry;uniform vec2 targetSize;uniform float pitch;varying vec2 historyUV;varying float blend;void main(){vec2 uv=position.xy*.5+.5,tile=vec2(mod(entry.x,64.),floor(entry.x/64.));gl_Position=vec4((tile*pitch+uv*pitch)/targetSize*2.-1.,0.,1.);historyUV=(vec2(mod(entry.y,16.),floor(entry.y/16.))+uv)/vec2(16.,8.);blend=entry.z;}",fragmentShader:"uniform sampler2D previous,incoming;varying vec2 historyUV;varying float blend;void main(){gl_FragColor=mix(texture2D(previous,historyUV),texture2D(incoming,historyUV),blend);}",uniforms:{targetSize:{value:new ve},pitch:{value:10},previous:{value:null},incoming:{value:null}},depthTest:!1,depthWrite:!1}),this.scene=new Gr,this.camera=new Pi(-1,1,1,-1,0,1),this.mesh=new dt(t,this.material),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}advance(e,t){for(let n=this.active.length-1;n>=0;n--){const r=this.active[n];if(t[r.probe.slot]!==r.probe||!r.probe.ready){this.release(n);continue}if(r.elapsed>=this.duration){this.release(n);continue}r.elapsed=Math.min(this.duration,r.elapsed+e)}}release(e){const t=this.active[e];t.probe.transition=null,this.free.push(t.index),this.active.splice(e,1)}clear(){for(;this.active.length;)this.release(this.active.length-1)}canStart(e){return!e.transition&&(!e.ready||this.free.length>0)}begin(e,t){const n={probe:e,index:this.free.pop(),elapsed:0};if(n.index===void 0)throw new Error("Probe transition capacity exhausted");this.active.push(n),e.transition=n;const r=this.renderer,s=this.copyMaterial.uniforms;t.quad.material=this.copyMaterial;for(const[a,o,l]of[[t.irr,this.oldIrr,ii],[t.depth,this.oldDepth,wi]]){const c=l+2;s.source.value=a.texture,s.sourceSize.value.set(a.width,a.height),s.pitch.value=c,s.slot.value=e.slot,Br(r,o,n.index%16*c,Math.floor(n.index/16)*c,c,c,!0),r.render(t.filterScene,t.filterCamera)}return n}render(e,t){if(!this.active.length)return 0;const n=this.renderer,r=this.mesh.geometry,s=this.material.uniforms;for(let l=0;l<this.active.length;l++){const c=this.active[l],u=c.elapsed/this.duration;this.entries.set([c.probe.slot,c.index,u*u*(3-2*u)],l*3)}r.instanceCount=this.active.length,r.getAttribute("entry").needsUpdate=!0;const a=n.getRenderTarget();n.getViewport(new Ye),n.getScissor(new Ye),n.getScissorTest();const o=n.autoClear;try{n.autoClear=!1;for(const[l,c,u,h]of[[e,this.oldIrr,this.newIrr,ii],[t,this.oldDepth,this.newDepth,wi]])s.targetSize.value.set(l.width,l.height),s.pitch.value=h+2,s.previous.value=c.texture,s.incoming.value=u.texture,Br(n,l),n.render(this.scene,this.camera)}finally{n.setRenderTarget(a),n.autoClear=o}return this.blended+=this.active.length,this.active.length}stats(){return{active:this.active.length,capacity:128,duration:this.duration,estimatedMiB:(this.oldIrr.width*this.oldIrr.height+this.oldDepth.width*this.oldDepth.height)*16/1048576}}}const gv="vec3 faceDir(vec2 uv,int f){vec2 p=uv*2.-1.;if(f==0)return normalize(vec3(1.,-p.y,-p.x));if(f==1)return normalize(vec3(-1.,-p.y,p.x));if(f==2)return normalize(vec3(p.x,1.,p.y));if(f==3)return normalize(vec3(p.x,-1.,-p.y));if(f==4)return normalize(vec3(p.x,-p.y,1.));return normalize(vec3(-p.x,-p.y,-1.));}",_v="vec3 octDir(vec2 uv){vec2 p=uv*2.-1.;vec3 n=vec3(p,1.-abs(p.x)-abs(p.y));float t=max(-n.z,0.);n.xy+=mix(vec2(t),vec2(-t),step(vec2(0.),n.xy));return normalize(n);}";function vv(i){let e=0,t=.5;for(;i;)e+=(i&1)*t,i>>=1,t*=.5;return e}const xv=Array.from({length:48},(i,e)=>{const t=Math.sqrt((e+.5)/48),n=2*Math.PI*vv(e);return`vec3(${(t*Math.cos(n)).toFixed(8)},${(t*Math.sin(n)).toFixed(8)},${Math.sqrt(1-t*t).toFixed(8)})`}),Rc="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",Mv=`varying vec2 vUv;uniform samplerCube source;uniform float resolution,depthPass;${_v}
void main(){vec2 uv=(vUv*(resolution+2.)-1.)/resolution;vec3 n=octDir(uv),up=abs(n.y)>.98?vec3(1.,0.,0.):vec3(0.,1.,0.);vec3 t=normalize(cross(up,n)),b=cross(n,t);
if(depthPass>.5){float mean=0.,second=0.;for(int i=0;i<8;i++){float a=float(i)*2.39996323;vec3 direction=normalize(n+(t*cos(a)+b*sin(a))*.035);float d=textureCube(source,direction).a;mean+=d;second+=d*d;}gl_FragColor=vec4(mean/8.,second/8.,0.,1.);return;}
vec3 sum=vec3(0.),d;
${xv.map(i=>`d=${i};sum+=textureCube(source,normalize(t*d.x+b*d.y+n*d.z)).rgb;`).join(`
`)}
gl_FragColor=vec4(sum*(3.14159265359/48.),1.);}`;function Cc(i){return new gn(Rn*(i+2),Or*(i+2),{type:qn,format:zt,colorSpace:ai,minFilter:Rt,magFilter:Rt,depthBuffer:!1,generateMipmaps:!1})}class yv{constructor(e,t){Object.assign(this,{renderer:e,scene:t,mode:"sliced",layout:"adaptive",captureEnabled:!0,preview:!1,captureFaces:0,filterRuns:0,lastVersion:-1,lastView:"",current:null,metaDirty:!0,origin:new D,probes:Array(Ua).fill(null),wanted:[],obstacles:new Ec,support:new Ac,previousTiles:new Map,gpuBudget:1,maxFaces:6,cpuBudget:2,gpuFaceMs:.5,timerSupported:!1,lastFaces:0,lastCalls:0}),this.raw=new su(32,{type:qn,format:zt,colorSpace:ai,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),this.irr=Cc(ii),this.depth=Cc(wi),this.metaData=new Float32Array(Rn*Or*4),this.meta=new sr(this.metaData,Rn,Or,zt,fn),this.meta.minFilter=this.meta.magFilter=yt,this.meta.needsUpdate=!0,this.coverageData=new Uint16Array(6912*4),this.coverage=new sr(this.coverageData,48,144,zt,qn),this.coverage.minFilter=this.coverage.magFilter=Rt,this.coverage.needsUpdate=!0,this.coverageLayouts=[],me.probeCoverage.value=this.coverage,this.transitions=new mv(e),this.lastBlends=0,this.fallback=new sr(new Float32Array([0,0,0,0]),1,1,zt,fn),this.fallback.needsUpdate=!0,me.irrAtlas.value=this.irr.texture,me.depthAtlas.value=this.depth.texture,me.probeMeta.value=this.meta,this.filterScene=new Gr,this.filterCamera=new Pi(-1,1,1,-1,0,1),this.filterMaterial=new Pt({vertexShader:Rc,fragmentShader:Mv,uniforms:{source:{value:this.raw.texture},resolution:{value:ii},depthPass:{value:0}},depthTest:!1,depthWrite:!1}),this.quad=new dt(new Ln(2,2),this.filterMaterial),this.filterScene.add(this.quad),this.previewMaterial=new Pt({vertexShader:Rc,fragmentShader:`varying vec2 vUv;uniform samplerCube source;uniform int face;${gv}void main(){vec3 c=textureCube(source,faceDir(vUv,face)).rgb;gl_FragColor=vec4(pow(c/(1.+c),vec3(1./2.2)),1.);}`,uniforms:{source:{value:this.raw.texture},face:{value:0}},depthTest:!1,depthWrite:!1});const n=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],r=[[0,-1,0],[0,-1,0],[0,0,1],[0,0,-1],[0,-1,0],[0,-1,0]];this.cameras=n.map((l,c)=>{const u=new $t(90,1,.3,2048);return u.up.fromArray(r[c]),u.lookAt(new D(...l)),u.layers.set(0),u}),this.markers=new ar(new Vr(1,6,4),new li({color:16777215,wireframe:!0}),Ua),this.markers.layers.set(4),this.markers.frustumCulled=!1,this.markers.count=0,t.add(this.markers);const s=e.getRenderTarget(),a=e.getClearColor(new de),o=e.getClearAlpha();e.setClearColor(0,0);for(const l of[this.irr,this.depth])e.setRenderTarget(l),e.clear();e.setRenderTarget(s),e.setClearColor(a,o)}invalidate(e=!1){for(const t of this.probes)t&&(t.dirty=!0,t.revision++,e&&(t.ready=!1,t.valid=0));e&&(this.current=null,this.metaDirty=!0,this.transitions.clear())}setLayout(e){this.layout!==e&&(this.layout=e,this.lastView="",this.metaDirty=!0)}invalidateAround(e,t,n){for(const r of this.probes)r&&Math.hypot(r.position.x-e,r.position.z-t)<n+Nt[r.level].spacing*1.5&&!r.dirty&&(r.dirty=!0,r.revision++)}syncWorld(e){if(e.version===this.lastVersion)return;const t=new Map(e.active.map(a=>[a.node.key,a.node])),n=[];for(const[a,o]of t)this.previousTiles.has(a)||n.push(o);for(const[a,o]of this.previousTiles)t.has(a)||n.push(o);this.obstacles=new Ec(e.active.flatMap(a=>a.group.userData.probeObstacles||[]));const r=[],s=new oi;for(const a of e.active){for(const o of a.group.userData.buildings||[])r.push({minX:o.x-o.w/2,maxX:o.x+o.w/2,minZ:o.z-o.d/2,maxZ:o.z+o.d/2,minY:0,maxY:o.h});a.group.updateWorldMatrix(!0,!0),a.group.traverse(o=>{!o.isMesh||o.isInstancedMesh||(o.geometry.boundingBox||o.geometry.computeBoundingBox(),s.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld),!(s.max.y<=.5)&&r.push({minX:s.min.x+e.origin.x,maxX:s.max.x+e.origin.x,minZ:s.min.z+e.origin.z,maxZ:s.max.z+e.origin.z,minY:s.min.y,maxY:s.max.y}))})}this.support=new Ac(r);for(const a of this.probes)if(a&&n.some(o=>zr(a.position.x,a.position.z,o)<Nt[a.level].far)){const o=a.spacing,l=Sc(a.x*o,sn[a.layer],a.z*o,(c,u)=>this.obstacles.query(c,u));a.position.distanceToSquared(new D(l.x,l.y,l.z))>.001&&(a.position.set(l.x,l.y,l.z),a.ready=!1,a.valid=0,this.metaDirty=!0),a.blocked=l.blocked,a.dirty=!0,a.revision++}this.previousTiles=t,this.lastVersion=e.version,this.lastView=""}setAnchors(e,t,n,r,s){this.syncWorld(s),r.updateMatrixWorld();const a=z_(r.position.y,this.groundSpacing);if(a!==this.groundSpacing){for(let E=0;E<Nt[0].size**2;E++)this.probes[E]=null;this.groundSpacing=a,this.lastView="",this.metaDirty=!0}const o=[...r.matrixWorld.elements,r.aspect,r.layers.mask,s.version,n.x,n.z].join("/");if(o===this.lastView)return;const l=performance.now(),c={x:e,z:t,cx:r.position.x+n.x,cy:r.position.y,cz:r.position.z+n.z},u=this.anchorPose,h=u&&(Math.hypot(e-u.x,t-u.z)>32||Math.hypot(c.cx-u.cx,c.cy-u.cy,c.cz-u.cz)>64);if(this.lastView&&this.origin.equals(n)&&!h&&l-(this.lastViewTime||0)<100)return;this.anchorPose=c,this.anchorUpdates=(this.anchorUpdates||0)+1,h&&(this.anchorTeleports=(this.anchorTeleports||0)+1),this.lastViewTime=l,this.lastView=o,this.origin.copy(n),this.metaDirty=!0;const d=new Ws().setFromProjectionMatrix(new nt().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse)),f=new Ci,m=new D,_=[],g=new bt;this.candidates=0,this.pruned=0;for(const E of this.probes)E&&(E.active=!1);for(let E=0;E<Nt.length;E++){const S=Nt[E],b=E===0?e*.65+(r.position.x+n.x)*.35:e,P=E===0?t*.65+(r.position.z+n.z)*.35:t,T=Math.floor(b/S.spacing)-S.size/2,A=Math.floor(P/S.spacing)-S.size/2;me.grids.value[E].set(T*S.spacing-n.x,A*S.spacing-n.z,S.spacing,S.size),me.wraps.value[E].set(Qi(T,S.size),Qi(A,S.size));const L=Ia(E,0,this.groundSpacing),M=Math.floor(b/L)-S.size/2,y=Math.floor(P/L)-S.size/2;E===0&&(me.groundGrid.value.set(M*L-n.x,y*L-n.z,L,S.size),me.groundWrap.value.set(Qi(M,S.size),Qi(y,S.size)));const C=this.layout==="adaptive"?this.support.mask(E,L,T,A,M,y):null;this.coverageLayouts[E]={level:E,spacing:S.spacing,size:S.size,minX:T,minZ:A,groundSpacing:L,groundMinX:M,groundMinZ:y,support:C};for(let I=0;I<sn.length;I++)for(let z=0;z<S.size;z++)for(let G=0;G<S.size;G++){const W=Ia(E,I,this.groundSpacing),H=(I===0?M:T)+G,j=(I===0?y:A)+z;m.set(H*W-n.x,sn[I],j*W-n.z),f.center.copy(m),f.radius=Math.hypot(S.spacing*3,sn[sn.length-1]);const k=bc(E,H,j,I),ie=`${E}/${H}/${j}/${I}/${W}`,oe=!C||C[I*S.size*S.size+z*S.size+G];let he=this.probes[k];if(oe&&he?.key===ie&&(he.active=!0),!!d.intersectsSphere(f)){if(this.candidates++,!oe){this.pruned++;continue}if(he?.key!==ie){const Ue=Sc(H*W,sn[I],j*W,(st,ut)=>this.obstacles.query(st,ut));he={slot:k,key:ie,level:E,layer:I,spacing:W,x:H,z:j,position:new D(Ue.x,Ue.y,Ue.z),blocked:Ue.blocked,ready:!1,valid:0,dirty:!0,revision:0,last:-1},this.probes[k]=he}he.active=!0,he.priority=Math.hypot((H*W-b)/S.spacing,(j*W-P)/S.spacing)+E*.4+I*.12,!he.ready&&E>0&&I<2&&H>=Math.floor(e/W)&&H<=Math.floor(e/W)+1&&j>=Math.floor(t/W)&&j<=Math.floor(t/W)+1&&(he.priority-=20),_.push(he)}}}this.wanted=_;const p=(r.layers.mask&16)!==0;if(p){for(let E=0;E<_.length;E++){const S=_[E];g.position.copy(S.position).sub(n),g.scale.setScalar(S.level===0?1.2:S.level===1?3:7),g.updateMatrix(),this.markers.setMatrixAt(E,g.matrix),this.markers.setColorAt(E,new de([14854480,5094043,7509727][S.level]))}this.markers.instanceMatrix.needsUpdate=!0,this.markers.instanceColor&&(this.markers.instanceColor.needsUpdate=!0)}this.markers.count=p?_.length:0}update(e,t,n,r){const s=this.captureFaces,a=this.renderer.info.render.calls;this.mode!=="frozen"&&this.transitions.advance(r,this.probes);for(const o of this.probes)this.mode!=="frozen"&&o&&o.ready&&o.valid<1&&(o.valid=Math.min(1,o.valid+r/Eu),this.metaDirty=!0);if(this.mode!=="frozen"&&this.captureEnabled){const o=this.wanted.filter(d=>d.dirty&&!d.blocked&&this.transitions.canStart(d)).sort((d,f)=>(d.ready?100:0)-(f.ready?100:0)+(d.ready&&f.ready?(d.last-f.last)*10:0)+d.priority-f.priority),l=performance.now(),c=this.mode==="full"?4:1,u=B_(this.gpuCredit||0,this.gpuBudget*c,this.gpuFaceMs,this.maxFaces*c);this.gpuCredit=u.credit;let h=Math.min(u.faces,this.timerSupported?100:c);for(;h-- >0;){let d=this.current?.probe;if(!d||!this.wanted.includes(d)||this.probes[d.slot]!==d){do d=o.shift();while(d&&!this.transitions.canStart(d));this.current=d?{probe:d,face:0,revision:d.revision}:null}if(!d)break;if(this.current.revision!==d.revision&&(this.current.face=0,this.current.revision=d.revision),this.captureFace(d,this.current.face,n),this.current.face++,this.captureFaces++,this.gpuCredit=Math.max(0,this.gpuCredit-this.gpuFaceMs),this.current.face===6){this.publish(d),d.ready=!0,d.dirty=!1,d.last=e,this.filterRuns++,this.metaDirty=!0,this.current=null;const f=o.indexOf(d);f>=0&&o.splice(f,1)}if(performance.now()-l>this.cpuBudget*c)break}}if(this.lastBlends=this.mode==="frozen"?0:this.transitions.render(this.irr,this.depth),this.metaDirty){this.metaData.fill(0);for(const o of this.probes)if(o){const l=o.slot*4;this.metaData[l]=o.position.x-n.x,this.metaData[l+1]=o.position.y,this.metaData[l+2]=o.position.z-n.z,this.metaData[l+3]=o.active?o.blocked?-1:o.valid:0}this.meta.needsUpdate=!0,this.updateCoverage(n),this.metaDirty=!1}this.lastFaces=this.captureFaces-s,this.lastCalls=this.renderer.info.render.calls-a}updateCoverage(e){if(this.coverageLayouts.length!==Nt.length)return;const t=hv(this.coverageLayouts,(n,r,s,a)=>{const o=this.coverageLayouts[n],l=r===0?o.groundSpacing:o.spacing,c=r===0?o.groundMinX:o.minX,u=r===0?o.groundMinZ:o.minZ,h=s-c,d=a-u;if(h<0||d<0||h>=o.size||d>=o.size)return{required:!1,outside:!0,valid:0};if(!(!o.support||!!o.support[r*o.size*o.size+d*o.size+h]))return{required:!1,valid:0};const m=this.probes[bc(n,s,a,r)],_=m?.active&&m.key===`${n}/${s}/${a}/${r}/${l}`;return{required:!0,blocked:!!(_&&m.blocked),valid:_?m.valid:0}});this.coverageFields=t,this.coverageData.fill(0);for(const n of t){me.coverageGrids.value[n.level].set(n.originX-e.x,n.originZ-e.z,n.spacing,n.width);for(let r=0;r<n.height;r++)for(let s=0;s<n.width;s++)for(let a=0;a<4;a++)this.coverageData[((n.level*48+r)*48+s)*4+a]=hd.toHalfFloat(n.data[(r*n.width+s)*4+a])}this.coverage.needsUpdate=!0}captureFace(e,t,n){const r=this.captureScope?.(),s=this.renderer,a=this.cameras[t],o=s.getRenderTarget(),l=s.toneMapping,c=this.scene.background,u=s.getClearColor(new de),h=s.getClearAlpha();a.position.copy(e.position).sub(n),a.far=Nt[e.level].far,a.updateProjectionMatrix(),a.updateMatrixWorld(),me.capture.value=1,me.captureOrigin.value.copy(a.position),me.captureFar.value=a.far,me.irrAtlas.value=this.fallback,me.depthAtlas.value=this.fallback,me.probeMeta.value=this.fallback;try{s.toneMapping=Hn,this.scene.background=me.sky.value,s.setRenderTarget(this.raw,t),s.setClearColor(me.sky.value,1),s.clear(),s.render(this.scene,a)}finally{me.capture.value=0,me.irrAtlas.value=this.irr.texture,me.depthAtlas.value=this.depth.texture,me.probeMeta.value=this.meta,this.scene.background=c,s.toneMapping=l,s.setRenderTarget(o),s.setClearColor(u,h),r?.()}}publish(e){const t=this.renderer,n=t.getRenderTarget(),r=t.autoClear;t.autoClear=!1;try{const s=e.ready?this.transitions.begin(e,this):null,a=s?s.index:e.slot,o=s?16:Rn;this.quad.material=this.filterMaterial;for(const[l,c,u]of[[s?this.transitions.newIrr:this.irr,ii,0],[s?this.transitions.newDepth:this.depth,wi,1]]){const h=c+2;Br(t,l,a%o*h,Math.floor(a/o)*h,h,h,!0),this.filterMaterial.uniforms.resolution.value=c,this.filterMaterial.uniforms.depthPass.value=u,t.render(this.filterScene,this.filterCamera)}}finally{t.autoClear=r,t.setRenderTarget(n)}}drawPreview(e,t){if(!this.preview)return;const n=this.renderer,r=Math.min(94,Math.floor((e-32)/6)),s=e-6*r-24,a=80;this.quad.material=this.previewMaterial,n.autoClear=!1,n.setScissorTest(!0);for(let o=0;o<6;o++)n.setViewport(s+o*r,a,r-3,r-3),n.setScissor(s+o*r,a,r-3,r-3),this.previewMaterial.uniforms.face.value=o,n.render(this.filterScene,this.filterCamera);n.setScissorTest(!1),n.setViewport(0,0,e,t),n.autoClear=!0,this.quad.material=this.filterMaterial}inspect(e,t,n){return Nt.map((r,s)=>{const a=s===0&&t<28.5?me.groundGrid.value:me.grids.value[s],o=Math.floor((e-this.origin.x-a.x)/a.z),l=Math.floor((n-this.origin.z-a.y)/a.z),c=o>=0&&l>=0&&o<r.size-1&&l<r.size-1;return{level:s,spacing:a.z,inside:c,near:this.wanted.filter(u=>u.level===s&&Math.abs(u.position.x-e)<r.spacing*1.6&&Math.abs(u.position.z-n)<r.spacing*1.6&&Math.abs(u.position.y-t)<80).map(u=>({position:u.position.toArray(),ready:u.ready,blocked:u.blocked,key:u.key}))}})}stats(){const e=this.wanted.filter(t=>!t.blocked);return{anchorUpdates:this.anchorUpdates||0,anchorTeleports:this.anchorTeleports||0,layout:this.layout,candidates:this.candidates||0,pruned:this.pruned||0,receiverBounds:this.support.bounds.length,byHeight:sn.map((t,n)=>({height:t,total:e.filter(r=>r.layer===n).length})),ready:e.filter(t=>t.ready).length,total:e.length,dirty:e.filter(t=>t.dirty).length,resident:this.probes.filter(Boolean).length,capacity:Ua,blocked:this.wanted.length-e.length,faces:this.captureFaces,filtered:this.filterRuns,levels:Nt.map((t,n)=>({spacing:t.spacing,groundSpacing:Ia(n,0,this.groundSpacing),ready:e.filter(r=>r.level===n&&r.ready).length,total:e.filter(r=>r.level===n).length})),heights:sn,transitions:{...this.transitions.stats(),warming:e.filter(t=>t.ready&&t.valid<1).length},lastBlends:this.lastBlends,coverageMB:this.coverageData.byteLength/1048576,atlasMB:(this.irr.width*this.irr.height+this.depth.width*this.depth.height)*8/1048576}}}class bv{constructor(e){this.gl=e.getContext(),this.ext=this.gl.getExtension("EXT_disjoint_timer_query_webgl2"),this.pending=[],this.active=null,this.cpu={},this.gpu={},this.frame=[],this.invalid=0,this.latest={},this.sampleCount=0,this.enabled=!0}beginFrame(){this.poll(),this.cpu={},this.start=performance.now()}cpuPass(e,t){const n=performance.now();try{return t()}finally{this.cpu[e]=(this.cpu[e]||0)+performance.now()-n}}gpuBegin(e,t={}){if(!this.ext||this.active||this.pending.length>=24)return;const n=this.gl.createQuery();this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,n),this.active={name:e,query:n,meta:t}}gpuEnd(){this.active&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.active.name==="probes"&&this.active.meta.faces===0&&!this.active.meta.blends?this.gl.deleteQuery(this.active.query):this.pending.push(this.active),this.active=null)}poll(){if(!this.ext)return;const e=this.gl.getParameter(this.ext.GPU_DISJOINT_EXT),t=[];for(const n of this.pending){const r=this.gl.getQueryParameter(n.query,this.gl.QUERY_RESULT_AVAILABLE);if(e||r){if(e)this.invalid++;else{const s=this.gl.getQueryParameter(n.query,this.gl.QUERY_RESULT)/1e6;this.gpu[n.name]??=[],this.gpu[n.name].push(s),this.gpu[n.name].length>120&&this.gpu[n.name].shift(),this.latest[n.name]={ms:s,...n.meta},this.sampleCount++}this.gl.deleteQuery(n.query)}else t.push(n)}this.pending=t}endFrame(e,t){this.cpu.total=performance.now()-this.start,this.frame.push({cpu:{...this.cpu},interval:e*1e3,counts:t}),this.frame.length>120&&this.frame.shift()}stats(){const e=r=>{if(!r.length)return null;const s=[...r].sort((a,o)=>a-o);return{mean:r.reduce((a,o)=>a+o,0)/r.length,p95:s[Math.floor((s.length-1)*.95)],last:r.at(-1)}},t=["total","environment","weather","debug","tiles","field","probes","ao","main","ui"],n=Object.fromEntries(t.map(r=>[r,e(this.frame.map(s=>s.cpu[r]||0))]));return{gpuSupported:!!this.ext,cpu:n,gpu:{probes:e(this.gpu.probes||[]),ao:e(this.gpu.ao||[]),main:e(this.gpu.main||[]),weather:e(this.gpu.weather||[]),debug:e(this.gpu.debug||[])},interval:e(this.frame.map(r=>r.interval)),latestGPU:this.latest,pendingQueries:this.pending.length,invalidSamples:this.invalid,sampleCount:this.sampleCount,counts:this.frame.at(-1)?.counts}}}function Sv(i,e,t,n,r){const s=2*i/e,a=Math.max(.15,Math.sin(r*Math.PI/180));return{texel:s,normalBias:Math.min(.03,s*.08)*a,bias:-Math.min(.015,s*.02)/(n-t)}}const Pc={low:{samples:8,scale:.5},medium:{samples:12,scale:.5},high:{samples:20,scale:1}};function Ev(i,e,t="medium"){const n=Pc[t]||Pc.medium,r=Math.max(1,Math.ceil(i*n.scale)),s=Math.max(1,Math.ceil(e*n.scale));return{width:r,height:s,samples:n.samples,bytes:r*s*11}}const Dc="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",wu=`
uniform sampler2D tDepth;uniform vec2 size,nearFar;uniform mat4 inverseProjection,projection;
float viewDepth(float d){return nearFar.x*nearFar.y/(nearFar.y-d*(nearFar.y-nearFar.x));}
vec3 positionAt(vec2 uv,float depth){vec4 p=inverseProjection*vec4(uv*2.-1.,depth*2.-1.,1.);return p.xyz/p.w;}
`,wv=`varying vec2 vUv;${wu}
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
}`,Tv=`varying vec2 vUv;${wu}
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
}`;function Na(i,e){return new gn(i,e,{format:Vs,type:En,minFilter:yt,magFilter:yt,depthBuffer:!1,generateMipmaps:!1})}class Av{constructor(e,t){Object.assign(this,{renderer:e,scene:t,mode:"on",quality:"medium",key:"",builds:0,lastCalls:0,lastTriangles:0,width:0,height:0}),this.depthMaterial=new Jo,this.depthMaterial.colorWrite=!1,this.depthMaterial.blending=Vn,this.camera=new $t,this.filterScene=new Gr,this.filterCamera=new Pi(-1,1,1,-1,0,1),this.uniforms={tDepth:{value:null},size:{value:new ve},nearFar:{value:new ve},inverseProjection:{value:new nt},projection:{value:new nt},radius:et.radius,sampleCount:{value:12}},this.aoMaterial=new Pt({vertexShader:Dc,fragmentShader:wv,uniforms:this.uniforms,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.blurMaterial=new Pt({vertexShader:Dc,fragmentShader:Tv,uniforms:{...this.uniforms,source:{value:null},direction:{value:new ve}},depthTest:!1,depthWrite:!1,toneMapped:!1}),this.quad=new dt(new Ln(2,2),this.aoMaterial),this.filterScene.add(this.quad),this.fallback=new sr(new Uint8Array([255,255,255,255]),1,1),this.fallback.needsUpdate=!0,et.texture.value=this.fallback,et.depth.value=this.fallback,this.setMode("on")}setMode(e){this.mode=e,G_(e!=="off"),et.view.value=e==="view"?1:0}resize(e,t){et.viewport.value.set(e,t);const n=Ev(e,t,this.quality);if(!(n.width===this.width&&n.height===this.height&&n.samples===this.samples)){this.depthTarget?.dispose(),this.depthTarget?.depthTexture.dispose();for(const r of this.maps||[])r.dispose();Object.assign(this,{width:n.width,height:n.height,samples:n.samples,bytes:n.bytes,key:""}),this.depthTarget=new gn(n.width,n.height,{minFilter:yt,magFilter:yt,depthBuffer:!0,generateMipmaps:!1}),this.depthTarget.depthTexture=new Xs(n.width,n.height,Xn),this.depthTarget.depthTexture.minFilter=this.depthTarget.depthTexture.magFilter=yt,this.maps=[Na(n.width,n.height),Na(n.width,n.height),Na(n.width,n.height)],this.maps[2].texture.minFilter=this.maps[2].texture.magFilter=Rt,this.uniforms.tDepth.value=this.depthTarget.depthTexture,this.uniforms.size.value.set(n.width,n.height),this.uniforms.sampleCount.value=n.samples,et.depth.value=this.depthTarget.depthTexture,et.texture.value=this.maps[2].texture,et.size.value.copy(this.uniforms.size.value)}}needsUpdate(e,t){const n=this.renderer.getDrawingBufferSize(new ve);return this.resize(n.x,n.y),e.updateMatrixWorld(),this.nextKey=[...e.matrixWorld.elements,...e.projectionMatrix.elements,t.version,t.origin.x,t.origin.z,this.quality,et.radius.value].join("/"),this.mode!=="off"&&this.nextKey!==this.key}update(e,t){if(this.lastCalls=0,this.lastTriangles=0,!this.needsUpdate(e,t))return!1;const n=this.renderer,r=this.scene,s=n.getRenderTarget();n.getViewport(new Ye);const a=n.getClearColor(new de),o=n.getClearAlpha(),l=r.background,c=r.overrideMaterial,u=r.fog,h=n.shadowMap.enabled,d=n.autoClear,f=n.info.render.calls,m=n.info.render.triangles;try{return this.camera.copy(e),this.camera.layers.set(0),this.camera.updateMatrixWorld(),this.uniforms.nearFar.value.set(e.near,e.far),et.nearFar.value.copy(this.uniforms.nearFar.value),this.uniforms.projection.value.copy(e.projectionMatrix),this.uniforms.inverseProjection.value.copy(e.projectionMatrixInverse),n.autoClear=!0,n.shadowMap.enabled=!1,r.background=null,r.fog=null,r.overrideMaterial=this.depthMaterial,Br(n,this.depthTarget),n.setClearColor(16777215,1),n.clear(),n.render(r,this.camera),r.overrideMaterial=c,this.quad.material=this.aoMaterial,n.setRenderTarget(this.maps[0]),n.render(this.filterScene,this.filterCamera),this.quad.material=this.blurMaterial,this.blurMaterial.uniforms.source.value=this.maps[0].texture,this.blurMaterial.uniforms.direction.value.set(1,0),n.setRenderTarget(this.maps[1]),n.render(this.filterScene,this.filterCamera),this.blurMaterial.uniforms.source.value=this.maps[1].texture,this.blurMaterial.uniforms.direction.value.set(0,1),n.setRenderTarget(this.maps[2]),n.render(this.filterScene,this.filterCamera),this.key=this.nextKey,this.builds++,!0}finally{r.background=l,r.fog=u,r.overrideMaterial=c,n.shadowMap.enabled=h,n.autoClear=d,n.setRenderTarget(s),n.setClearColor(a,o),this.lastCalls=n.info.render.calls-f,this.lastTriangles=n.info.render.triangles-m}}stats(){return{mode:this.mode,quality:this.quality,radius:et.radius.value,strength:et.strength.value,direct:et.direct.value,resolution:[this.width,this.height],samples:this.samples,builds:this.builds,lastCalls:this.lastCalls,lastTriangles:this.lastTriangles,estimatedMiB:(this.bytes||0)/1048576}}}const Oa=Object.freeze({clear:{cloud:0,rain:0,flakes:0,wet:0,snow:0,transmission:1,ambient:1,haze:1,windX:1,windZ:.35},cloudy:{cloud:.76,rain:0,flakes:0,wet:0,snow:0,transmission:.32,ambient:.82,haze:1.65,windX:2.6,windZ:.8},rain:{cloud:.98,rain:1,flakes:0,wet:1,snow:0,transmission:.1,ambient:.64,haze:3.1,windX:5,windZ:1.6},snow:{cloud:.9,rain:0,flakes:1,wet:.1,snow:1,transmission:.23,ambient:.88,haze:3.4,windX:1.3,windZ:.5}}),Lc=i=>Math.max(0,Math.min(1,i));class Rv{constructor(){this.mode="clear",this.intensity=1,this.duration=6,this.paused=!1,this.clock=0,this.elapsed=0,this.progress=1,this.revision=0,this.current={...Oa.clear},this.source={...this.current},this.start={...this.current},this.target={...this.current},this.windPhase=[0,0]}set(e,{intensity:t=this.intensity,duration:n=this.duration,instant:r=!1}={}){if(!Oa[e])throw new Error("Unknown weather: "+e);if(!Number.isFinite(t)||!Number.isFinite(n))throw new Error("Invalid weather parameters");this.mode=e,this.intensity=Lc(t),this.duration=Math.max(0,Math.min(30,n));const s={...Oa[e]};for(const a of["rain","flakes","wet","snow"])s[a]*=this.intensity;return this.start={...this.current},this.target=s,this.elapsed=0,Object.keys(s).every(a=>Math.abs(this.current[a]-s[a])<1e-8)?(this.progress=1,!1):(this.progress=0,r||!this.duration?(this.current={...s},this.progress=1,this.commit()):!1)}commit(){const e=Object.keys(this.current).some(t=>Math.abs(this.current[t]-this.source[t])>1e-7);return e&&(this.source={...this.current},this.revision++),e}advance(e){if(this.paused)return!1;e=Math.max(0,Math.min(e,.1)),this.clock+=e;let t=!1;if(this.progress<1){this.elapsed+=e,this.progress=Math.min(1,this.elapsed/this.duration);const n=this.progress*this.progress*(3-2*this.progress);for(const r of Object.keys(this.target))this.current[r]=this.start[r]+(this.target[r]-this.start[r])*n;this.progress===1&&(this.current={...this.target},t=this.commit())}return this.windPhase[0]=(this.windPhase[0]+this.current.windX*e)%4096,this.windPhase[1]=(this.windPhase[1]+this.current.windZ*e)%4096,t}compatibility(){const e=Math.max(Math.abs(this.current.transmission-this.source.transmission),Math.abs(this.current.wet-this.source.wet)*.8,Math.abs(this.current.snow-this.source.snow));return Lc(1-e*1.5)}stats(){return{mode:this.mode,intensity:this.intensity,transition:this.progress,duration:this.duration,paused:this.paused,clock:this.clock,sourceRevision:this.revision,giCompatibility:this.compatibility(),current:{...this.current},source:{...this.source}}}}function Cv(){const e=new Uint8Array(65536);let t=88632881;const n=(a,o)=>{let l=Math.imul(a,374761393)^Math.imul(o,668265263);return l=Math.imul(l^l>>>13,1274126177),((l^l>>>16)>>>0)/4294967296},r=(a,o,l)=>{const c=Math.floor(a),u=Math.floor(o),h=a-c,d=o-u,f=h*h*(3-2*h),m=d*d*(3-2*d),_=(g,p)=>n(g%l,p%l);return(_(c,u)*(1-f)+_(c+1,u)*f)*(1-m)+(_(c,u+1)*(1-f)+_(c+1,u+1)*f)*m};for(let a=0;a<16384;a++){t^=t<<13,t^=t>>>17,t^=t<<5;const o=t>>>0&255,l=a%128,c=Math.floor(a/128),u=r(l/16,c/16,8)*.55+r(l/8,c/8,16)*.3+r(l/4,c/4,32)*.15;e.set([o,Math.round(u*255),o,255],a*4)}const s=new sr(e,128,128,zt);return s.wrapS=s.wrapT=Ps,s.magFilter=Rt,s.minFilter=ni,s.generateMipmaps=!0,s.needsUpdate=!0,s}class Pv{constructor(e,t){this.renderer=e,this.scene=t,this.size=384,this.resolution=256,this.key="",this.updates=0,this.lastCalls=0,this.camera=new Pi(-192,192,192,-192,1,1e3),this.camera.up.set(0,0,-1),this.target=new gn(256,256,{minFilter:yt,magFilter:yt}),this.target.depthTexture=new Xs(256,256,Xn),this.material=new Jo,Ot.roof.value=this.target.depthTexture}needed(e,t,n){if(this.enabled=n,Ot.roofReady.value=n?1:0,!n)return!1;const r=e.position.x+t.origin.x,s=e.position.z+t.origin.z;return this.x=Math.round(r/32)*32-t.origin.x,this.z=Math.round(s/32)*32-t.origin.z,this.top=Math.max(320,Math.ceil((e.position.y+120)/64)*64),this.nextKey=[this.x,this.z,this.top,t.version,t.origin.x,t.origin.z].join("/"),this.nextKey!==this.key}update(){const e=this.renderer,t=this.scene,n=this.camera,r=e.getRenderTarget();e.getViewport(new Ye),e.getScissor(new Ye),e.getScissorTest();const s=t.overrideMaterial,a=t.background,o=e.autoClear,l=e.info.render.calls;n.position.set(this.x,this.top,this.z),n.far=this.top+20,n.lookAt(this.x,0,this.z),n.updateProjectionMatrix(),n.updateMatrixWorld(),Ot.roofMatrix.value.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse);try{t.overrideMaterial=this.material,t.background=null,e.autoClear=!0,Br(e,this.target),e.clear(),e.render(t,n),this.key=this.nextKey,this.updates++}finally{t.overrideMaterial=s,t.background=a,e.autoClear=o,e.setRenderTarget(r),this.lastCalls=e.info.render.calls-l}}stats(){return{updates:this.updates,lastCalls:this.lastCalls,resolution:256,span:384,estimatedMiB:256*256*8/1048576,enabled:this.enabled||!1}}}const Dv="varying vec3 ray;void main(){ray=position;vec4 clip=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=clip.xyww;}",Lv=`
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
}`,Uv=`
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
}`,Iv=`
${_u}
uniform float isSnow,strength,inspect,aoView;uniform vec3 color;varying vec2 shape;varying vec3 particleWorld;varying float fade;
void main(){
 if(inspect>.5||aoView>.5||labSkyExposure(particleWorld)<.5)discard;
 vec2 q=shape-.5;float alpha;
 if(isSnow>.5)alpha=exp(-dot(q,q)*17.)*smoothstep(.5,.3,length(q));
 else alpha=(1.-smoothstep(.15,.5,abs(q.x)))*(1.-abs(q.y)*2.)*.65;
 alpha*=strength*fade;if(alpha<.015)discard;gl_FragColor=vec4(color,alpha);
 #include <colorspace_fragment>
}`,Fv=`
attribute vec4 seed;uniform float time;uniform vec3 center;uniform mat4 labRoofMatrix;uniform sampler2D labRoofDepth;uniform float roofTop,roofRange;
varying vec2 shape;varying float alpha;
void main(){
 float age=fract(time*1.5+seed.w);vec3 p=center+vec3((seed.x-.5)*150.,0.,(seed.z-.5)*150.);
 vec4 q=labRoofMatrix*vec4(p,1.);vec2 uvRoof=q.xy/q.w*.5+.5;float depth=texture2D(labRoofDepth,uvRoof).r;
 p.y=roofTop-1.-depth*(roofRange-1.)+.06;float radius=.15+age*.65;
 p.xz+=vec2(position.x,-position.y)*radius*2.;shape=uv;alpha=(1.-age)*step(depth,.9999);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
}`,Nv="uniform float strength,inspect,aoView;varying vec2 shape;varying float alpha;void main(){if(inspect>.5||aoView>.5)discard;float r=length(shape-.5)*2.,a=(1.-smoothstep(.035,.14,abs(r-.72)))*alpha*strength*.18;if(a<.01)discard;gl_FragColor=vec4(.7,.8,.9,a);}";function Uc(i){const e=new Ln(1,1),t=new uu;t.index=e.index,t.attributes=e.attributes;const n=new Float32Array(i*4);let r=86416945;for(let s=0;s<n.length;s++)r=Math.imul(r,1664525)+1013904223>>>0,n[s]=r/4294967296;return t.setAttribute("seed",new Ai(n,4)),t.instanceCount=i,t}class Ov{constructor(e,t,n,r){this.camera=t,this.count=1800,this.windPhase={value:new ve},this.time={value:0},this.center={value:new D},this.inspection={inspect:me.view,aoView:et.view},this.skyUniforms={zenith:{value:new de},horizon:{value:new de},cloudColor:{value:new de},cover:{value:0},night:{value:0},noiseMap:{value:n},windPhase:this.windPhase,sunDirection:{value:r},...this.inspection},this.sky=new dt(new Vr(4e3,32,16),new Pt({uniforms:this.skyUniforms,vertexShader:Dv,fragmentShader:Lv,side:Zt,depthWrite:!1})),this.sky.layers.set(6),this.sky.renderOrder=1e3,this.sky.frustumCulled=!1,e.add(this.sky),t.layers.enable(6),t.layers.enable(7);const s={labRoofDepth:Ot.roof,labRoofMatrix:Ot.roofMatrix,labRoofReady:Ot.roofReady};this.particles=[];for(const a of[0,1]){const o={time:this.time,center:this.center,windPhase:this.windPhase,windVelocity:{value:new ve},viewport:{value:new ve},isSnow:{value:a},strength:{value:0},color:{value:new de},...s,...this.inspection},l=new dt(Uc(3600),new Pt({uniforms:o,vertexShader:Uv,fragmentShader:Iv,transparent:!0,depthWrite:!1}));l.layers.set(7),l.frustumCulled=!1,l.renderOrder=6,e.add(l),this.particles.push(l)}this.splash=new dt(Uc(640),new Pt({uniforms:{time:this.time,center:this.center,strength:{value:0},roofTop:{value:320},roofRange:{value:340},...s,...this.inspection},vertexShader:Fv,fragmentShader:Nv,transparent:!0,depthWrite:!1})),this.splash.layers.set(7),this.splash.frustumCulled=!1,this.splash.renderOrder=6,e.add(this.splash)}update(e,t,n,r,s,a=!0){const o=e.current;this.time.value=e.clock,this.windPhase.value.fromArray(e.windPhase),this.sky.position.copy(this.camera.position),this.skyUniforms.cover.value=o.cloud,this.skyUniforms.night.value=+t.night,this.skyUniforms.zenith.value.copy(t.zenith),this.skyUniforms.horizon.value.copy(t.fog),this.skyUniforms.cloudColor.value.copy(t.cloudColor);const l=new D;this.camera.getWorldDirection(l),l.y=0,l.lengthSq()>0&&l.normalize().multiplyScalar(28),this.center.value.copy(this.camera.position).add(l);for(let c=0;c<2;c++){const u=this.particles[c],h=c?o.flakes:o.rain;u.visible=a&&h>.001,u.geometry.instanceCount=Math.max(1,Math.round(this.count*h)),u.material.uniforms.strength.value=Math.min(1,h*2),u.material.uniforms.viewport.value.set(r,s),u.material.uniforms.windVelocity.value.set(o.windX,o.windZ),u.material.uniforms.color.value.set(t.night?c?"#b3c3d8":"#9eb5cc":c?"#ffffff":"#bdd2e1")}this.splash.visible=a&&o.rain>.001&&Ot.roofReady.value>.5,this.splash.geometry.instanceCount=Math.round(this.count/6*o.rain),this.splash.material.uniforms.strength.value=o.rain,this.splash.material.uniforms.roofTop.value=n.top||320,this.splash.material.uniforms.roofRange.value=(n.top||320)+20}stats(){return{particles:this.particles.filter(e=>e.visible).reduce((e,t)=>e+t.geometry.instanceCount,0),splashes:this.splash.visible?this.splash.geometry.instanceCount:0,quality:this.count<=900?"low":this.count<=1800?"medium":"high",cameraVolume:[240,160,240],skyNoiseReads:3}}}function vi(i,e){const t=i.cloud,n=new de(e?"#496a93":"#a8cad8"),r=new de(e?"#2b3b4b":"#848b6c");e&&(n.setRGB(.045,.075,.125),r.setRGB(.022,.035,.055)),n.lerp(new de(e?"#36516d":"#a5afb9"),t*.65).multiplyScalar(i.ambient),r.lerp(new de(e?"#29394c":"#9ca8ae"),t*.3).multiplyScalar(i.ambient);const s=new de(e?"#101e31":"#bfd5dd").lerp(new de(e?"#17212d":"#778a9c"),t*.85),a=new de(e?"#16283f":"#cbd9d7").lerp(new de(e?"#253344":"#94a5b2"),t*.8);return{night:e,data:{...i},sky:n,ground:r,background:s,fog:a,zenith:new de(e?"#0c172b":"#69aadd").lerp(s,t*.8),cloudColor:new de(e?"#35475d":"#f1f3ef").lerp(new de(e?"#293647":"#a7b3bf"),t*.7),sunColor:new de(e?"#b4cdf4":"#fff2d4").lerp(new de(e?"#a1b4cd":"#d8e2ef"),t*.5),sunIntensity:(e?.18:2.9)*i.transmission,fogDensity:(e?6e-4:32e-5)*i.haze,exposure:1.15}}class zv{constructor(e,t,n,r,s,a){Object.assign(this,{renderer:e,scene:t,camera:n,sun:r,probes:a}),this.model=new Rv,this.sourceVersion=0,this.invalidations=0,this.effectsEnabled=!0,this.noise=Cv(),Ot.noise.value=this.noise,this.roof=new Pv(e,t),this.effects=new Ov(t,n,this.noise,s),this.main=vi(this.model.current,!1),this.source=vi(this.model.source,!1),this.applyMain(),a.captureScope=()=>(this.apply(this.source,1),()=>this.applyMain())}apply(e,t){this.sun.color.copy(e.sunColor),this.sun.intensity=e.sunIntensity,this.scene.background.copy(e.background),this.scene.fog.color.copy(e.fog),this.scene.fog.density=e.fogDensity,this.renderer.toneMappingExposure=e.exposure,me.sky.value.copy(e.sky),me.ground.value.copy(e.ground),Ot.wet.value=e.data.wet,Ot.snow.value=e.data.snow,Ot.giCompatibility.value=t}applyMain(){this.apply(this.main,this.model.compatibility())}onNightChange(){this.source=vi(this.model.source,!!Ge.enabled.value),this.sourceVersion++,this.main=vi(this.model.current,!!Ge.enabled.value),this.applyMain()}commit(){this.source=vi(this.model.source,!!Ge.enabled.value),this.sourceVersion++,this.invalidations++,this.probes.invalidate(!0)}set(e,t={}){t.paused!==void 0&&(this.model.paused=!!t.paused),t.effects!==void 0&&(this.effectsEnabled=!!t.effects),t.quality!==void 0&&(this.effects.count={low:900,medium:1800,high:3600}[t.quality]||1800),(e!==void 0||t.intensity!==void 0)&&this.model.set(e||this.model.mode,t)&&this.commit(),this.main=vi(this.model.current,!!Ge.enabled.value),this.resolvedProgress=this.model.progress,this.applyMain()}update(e,t,n,r){this.model.advance(e)&&this.commit(),(this.model.progress!==this.resolvedProgress||this.main.night!==!!Ge.enabled.value)&&(this.main=vi(this.model.current,!!Ge.enabled.value),this.resolvedProgress=this.model.progress),this.applyMain(),Ge.atmosphere.value=1+this.model.current.rain*.65+this.model.current.flakes*.25;const s=this.model.current,a=this.model.source,o=s.rain+s.flakes+s.wet+s.snow+a.wet+a.snow>.001,l=this.roof.needed(this.camera,t,o);return this.effects.update(this.model,this.main,this.roof,n,r,this.effectsEnabled),l}stats(){return{...this.model.stats(),sourceVersion:this.sourceVersion,probeInvalidations:this.invalidations,main:{sunIntensity:this.main.sunIntensity,fogDensity:this.main.fogDensity,sky:this.main.sky.toArray(),wet:this.main.data.wet,snow:this.main.data.snow},capture:{sunIntensity:this.source.sunIntensity,wet:this.source.data.wet,snow:this.source.data.snow},effects:this.effects.stats(),roof:this.roof.stats(),effectsEnabled:this.effectsEnabled}}}class Bv{constructor(e,t,n,r,s){Object.assign(this,{renderer:e,probes:t,ao:n,environment:r,sun:s,lastCalls:0}),this.panel=document.getElementById("rt-panel"),this.grid=document.getElementById("rt-grid"),this.select=document.getElementById("rt-target"),this.cards=new Map;const a={source:{value:null},cube:{value:null},kind:{value:0},face:{value:0},channel:{value:-1},gain:{value:1},depthRange:{value:1e3},nearFar:{value:new ve},top:{value:320},available:{value:0},resolution:{value:new ve}};this.material=new Pt({uniforms:a,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
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
   }`,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.scene=new Gr,this.camera=new Pi(-1,1,1,-1,0,1),this.scene.add(new dt(new Ln(2,2),this.material)),document.getElementById("rt-toggle").onclick=()=>this.toggle(),document.getElementById("rt-close").onclick=()=>this.toggle(!1),this.select.onchange=()=>this.syncCards(),document.getElementById("rt-gain").oninput=o=>document.getElementById("rt-gain-value").value=Number(o.target.value).toFixed(1)+"×"}get enabled(){return!this.panel.hidden}toggle(e=!this.enabled){this.panel.hidden=!e,e||(this.lastCalls=0),document.body.classList.toggle("rt-open",e),document.getElementById("rt-toggle").setAttribute("aria-expanded",String(e)),e&&this.syncCards()}targets(){const e=this.probes,t=this.ao,n=this.environment,r=e.transitions,s=(a,o,l,c,u,h=!0)=>({id:a,title:o,texture:l?.texture,width:l?.width||1,height:l?.height||1,kind:c,note:u,ready:!!l&&h});return[s("irr","探针辐照度图集",e.irr,0,"RGBA16F · HDR · 有效槽以 Meta 为准",e.filterRuns>0),s("moments","探针深度均值",e.depth,1,"RGBA16F · R=归一化距离；各级远距不同",e.filterRuns>0),s("variance","探针深度标准差",e.depth,7,"sqrt(G−R²) · 显示增益×4",e.filterRuns>0),{id:"meta",title:"探针 Meta / 有效度",texture:e.meta,width:e.meta.image.width,height:e.meta.image.height,kind:2,note:"RGBA32F · RGB=局部位置；W=有效度，红=阻塞",ready:!0},s("cube","探针原始六面",e.raw,6,"RGBA16F · RGB / A径向深度；+X −X +Y / −Y +Z −Z，共用暂存",e.captureFaces>0),s("shadow","太阳 / 月亮阴影",this.sun.shadow.map,5,"RGBA 打包深度 · 正交光空间；关闭时显示缓存"),{...s("ao-depth","AO 深度",t.depthTarget,3,"透视深度 → 对数距离显示",t.builds>0),texture:t.depthTarget?.depthTexture,near:t.camera.near,far:t.camera.far},s("ao-raw","AO 原始采样",t.maps?.[0],1,"R8 · 0遮挡 / 1无遮挡",t.builds>0),s("ao-final","AO 双向模糊后",t.maps?.[2],1,`R8 · ${t.mode==="off"?"已停用，保留缓存":"当前缓存"}`,t.builds>0),{...s("roof","天气顶部遮挡",n.roof.target,4,`顶部深度 → 高度显示 · 384m足迹 · ${n.roof.enabled?"使用中":"停用/缓存"}`,n.roof.updates>0),texture:n.roof.target.depthTexture,near:n.roof.camera.near,far:n.roof.camera.far,top:n.roof.top||320},s("old-irr","GI 过渡 · 旧辐照度",r.oldIrr,0,`128个历史槽 · ${r.active.length} 个正在过渡`,r.blended>0),s("new-irr","GI 过渡 · 新辐照度",r.newIrr,0,"局部暂存 · 不是第二套世界图集",r.blended>0),s("new-depth","GI 过渡 · 新深度矩",r.newDepth,1,"局部暂存 · 与辐照度同步渐变",r.blended>0)]}syncCards(){if(this.select.options.length<2)for(const t of this.targets()){const n=document.createElement("option");n.value=t.id,n.textContent=t.title,this.select.append(n)}this.grid.replaceChildren(),this.cards.clear();const e=this.select.value;for(const t of this.targets())if(e==="grid"||e===t.id){const n=document.createElement("article");n.className="rt-card",n.innerHTML=`<header>${t.title}<span class="rt-size"></span></header><div class="rt-image" aria-label="${t.title}"></div><p></p>`,n.onclick=()=>{this.select.value==="grid"&&(this.select.value=t.id,this.syncCards())},this.grid.append(n),this.cards.set(t.id,n)}this.grid.classList.toggle("single",e!=="grid")}render(e,t){if(this.lastCalls=0,!this.enabled)return;const n=this.renderer,r=this.material.uniforms,s=n.getViewport(new Ye),a=n.getScissor(new Ye),o=n.getScissorTest(),l=n.autoClear,c=n.getRenderTarget(),u=n.info.render.calls,h=this.grid.getBoundingClientRect();r.gain.value=Number(document.getElementById("rt-gain").value),r.depthRange.value=Math.max(1,Number(document.getElementById("rt-range").value)||1e3),r.channel.value=Number(document.getElementById("rt-channel").value);try{n.autoClear=!1,n.setRenderTarget(null),n.setScissorTest(!0),n.setScissor(Math.max(0,h.left),Math.max(0,t-h.bottom),Math.min(e,h.width),Math.min(t,h.height)),n.setViewport(h.left,t-h.bottom,h.width,h.height),r.available.value=0,n.render(this.scene,this.camera);for(const d of this.targets()){const f=this.cards.get(d.id);if(!f)continue;f.querySelector(".rt-size").textContent=`${d.width}×${d.height}${d.kind===6?" ×6":""}`,f.querySelector("p").textContent=d.ready?d.note:"尚未生成 · "+d.note;const m=f.querySelector(".rt-image").getBoundingClientRect(),_=Math.max(0,m.left,h.left),g=Math.min(e,m.right,h.right),p=Math.max(0,m.top,h.top),E=Math.min(t,m.bottom,h.bottom);if(!(g<=_||E<=p))if(n.setScissor(_,t-E,g-_,E-p),r.available.value=+d.ready,r.kind.value=d.kind,r.resolution.value.set(d.width,d.height),r.nearFar.value.set(d.near||1,d.far||1e3),r.top.value=d.top||320,d.kind===6){r.cube.value=d.texture;for(let S=0;S<6;S++)r.face.value=S,n.setViewport(m.left+S%3*m.width/3,t-m.bottom+(1-Math.floor(S/3))*m.height/2,m.width/3,m.height/2),n.render(this.scene,this.camera)}else r.source.value=d.texture||null,n.setViewport(m.left,t-m.bottom,m.width,m.height),n.render(this.scene,this.camera)}}finally{n.setRenderTarget(c),n.setViewport(s),n.setScissor(a),n.setScissorTest(o),n.autoClear=l,this.lastCalls=n.info.render.calls-u}}stats(){return{enabled:this.enabled,lastCalls:this.lastCalls,targets:this.targets().map(({texture:e,...t})=>t)}}}function kv(i){const e=document.createElement("details");e.id="runtime-diagnostics",e.open=!0,e.setAttribute("aria-label","运行诊断 Preview v3"),e.style.cssText="position:fixed;z-index:100;right:16px;bottom:140px;width:min(330px,calc(100vw - 32px));max-height:45vh;overflow:auto;padding:10px;border:1px solid #78938b;border-radius:8px;background:#f2f8f4;color:#163b30;font:12px/1.5 system-ui;box-sizing:border-box";const t=document.createElement("summary");t.textContent="运行诊断 · Preview v3（可折叠）",t.style.cursor="pointer";const n=document.createElement("pre");n.style.cssText="white-space:pre-wrap;overflow-wrap:anywhere;margin:8px 0 0;font:inherit",e.append(t,n),document.body.append(e);let r="待检测",s=null,a=0,o=0,l=-1/0;const c=[];function u(){try{const d=i.getExtension("WEBGL_debug_renderer_info");r=d?String(i.getParameter(d.UNMASKED_RENDERER_WEBGL)):"详细 renderer 扩展不可用；基础值："+String(i.getParameter(i.RENDERER))}catch{r="renderer 读取不可用"}}function h(){const d=c.length?c.reduce((m,_)=>m+_,0)/c.length:null,f=m=>m==null?"待采样":m.toFixed(2)+" ms";n.textContent=["仅在本机显示，不上传设备信息","renderer: "+r,"context lost: "+i.isContextLost(),"visibilityState: "+document.visibilityState+" · hasFocus: "+document.hasFocus(),"采样时刻: "+(performance.now()/1e3).toFixed(1)+" s（页面计时）","RAF 回调累计: "+a+" · 完成帧累计: "+o,"RAF 间隔（限帧前）最近: "+f(c.at(-1)),"RAF 间隔均值: "+f(d)+" · 窗口: "+c.length+"/60","完成帧指帧循环执行完毕，不等于 GPU 呈现；后台可能停止更新。"].join(`
`)}return u(),h(),document.addEventListener("visibilitychange",h),window.addEventListener("focus",h),window.addEventListener("blur",h),i.canvas.addEventListener("webglcontextlost",h),i.canvas.addEventListener("webglcontextrestored",()=>{u(),h()}),{raf(d){s!==null&&(c.push(d-s),c.length>60&&c.shift()),s=d,a++,d-l>=500&&(l=d,h())},completed(){o++}}}const Q=i=>document.getElementById(i),Ns=[],Be=new M_({canvas:Q("view"),antialias:!0,powerPreference:"high-performance"}),Ic=kv(Be.getContext());Be.setPixelRatio(Math.min(devicePixelRatio,1.5));Be.outputColorSpace=an;Be.toneMapping=ko;Be.toneMappingExposure=1.15;Be.shadowMap.enabled=!0;Be.shadowMap.type=Bc;Be.shadowMap.autoUpdate=!1;Be.info.autoReset=!1;Be.debug.onShaderError=(i,e,t,n)=>{const r=[i.getProgramInfoLog(e),i.getShaderInfoLog(t),i.getShaderInfoLog(n)].join(`
`);Ns.push(r),console.error(r),Q("error").hidden=!1,Q("error").textContent="着色器编译失败："+r};const ln=new Gr;ln.background=new de("#bfd5dd");ln.fog=new Zo("#cbd9d7",32e-5);const je=new $t(46,innerWidth/innerHeight,8,6500);je.layers.enable(2);je.layers.enable(5);je.position.set(560,720,840);const Ke=new b_(je,Be.domElement);Ke.target.set(0,0,-50);Ke.enableDamping=!0;Ke.dampingFactor=.085;Ke.minDistance=55;Ke.maxDistance=2300;Ke.maxPolarAngle=Math.PI*.475;Ke.minPolarAngle=.12;Ke.screenSpacePanning=!1;Ke.update();let Os=!0;Ke.addEventListener("start",()=>{Os=!0});Ke.addEventListener("change",()=>{Os=!0});const Oe=new uv(ln),De=new yv(Be,ln),At=new Av(Be,ln),Re=new bv(Be);De.timerSupported=!!Re.ext;let Fc=null,ti=30;const Tt=new Ud("#fff2d4",2.9);Tt.castShadow=!0;Tt.shadow.mapSize.set(2048,2048);Tt.shadow.camera.near=1;Tt.shadow.camera.far=3200;Tt.shadow.radius=2;ln.add(Tt,Tt.target);const zs=new Dd("#ff9f56",0,95,2);ln.add(zs);const Hr=new dt(new Vr(2.5,12,8),new li({color:"#ffb158",toneMapped:!1}));ln.add(Hr);Hr.visible=!1;Hr.layers.set(2);let on=innerWidth,Sn=innerHeight,Rs=0,er=0,Cr=performance.now(),Nc=0,za=0,Ba=Cr,No=0,Cs=!1,mn=!1,$i=.26,nl="on",kr=145,hr=42,wt=null,Oo=!1;const kn=new Set,Tn=new D,bi=new D,Bt=new D,Mn=new D;function $s(){const i=Po.degToRad(kr),e=Po.degToRad(hr);bi.set(Math.sin(i)*Math.cos(e),Math.sin(e),Math.cos(i)*Math.cos(e)),De.invalidate()}$s();const jt=new zv(Be,ln,je,Tt,bi,De),Bs=new Bv(Be,De,At,jt,Tt);function Gv(){const i=[];for(let n=0;n<150;n++){const r=ri(n/150),s=ri((n+1)/150),a=s.x-r.x,o=s.z-r.z,l=Math.hypot(a,o),c=-o/l*2.1,u=a/l*2.1;for(const h of[[r.x+c,25.31,r.z+u],[s.x+c,25.31,s.z+u],[s.x-c,25.31,s.z-u],[r.x+c,25.31,r.z+u],[s.x-c,25.31,s.z-u],[r.x-c,25.31,r.z-u]])i.push(...h)}const t=new Wt;return t.setAttribute("position",new Ct(i,3)),t.computeVertexNormals(),t}const Wr=new Ei;ln.add(Wr);const Tu=new dt(Gv(),new li({color:"#209f77",side:yn,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));Tu.layers.set(2);Wr.add(Tu);const dr=new Ei,Au=new dt(new Dn(5,2,9),new li({color:"#f7faf0",toneMapped:!1}));Au.position.y=1.5;dr.add(Au);const Ru=new dt(new Dn(4.2,1.8,4.5),new li({color:"#317a64",toneMapped:!1}));Ru.position.y=3;dr.add(Ru);dr.traverse(i=>i.layers.set(2));Wr.add(dr);const Cu=new Wt;Cu.setAttribute("position",new Ct([0,0,4,-1.3,0,-2,1.3,0,-2],3));const Vv=new li({color:"#edffe7",side:yn,toneMapped:!1});for(let i=0;i<28;i++){const e=.025+i*.034,t=ri(e),n=ri(e+.001),r=new dt(Cu,Vv);r.position.set(t.x,25.36,t.z),r.rotation.y=Math.atan2(n.x-t.x,n.z-t.z),r.layers.set(2),Wr.add(r)}const Hv=sv.map(i=>{const e=document.createElement("div");return e.className="map-label",e.innerHTML=`<b>${i.name}</b>`,Q("landmarks").append(e),{...i,el:e}});function Wv(){for(const i of Hv){Bt.set(i.x-Oe.origin.x,i.y,i.z-Oe.origin.z);const e=Bt.distanceTo(je.position);Bt.project(je);const t=Bt.z>-1&&Bt.z<1&&e<2e3&&Math.abs(Bt.x)<.98&&Math.abs(Bt.y)<.9;i.el.style.display=t?"flex":"none",t&&(i.el.style.left=`${(Bt.x*.5+.5)*on}px`,i.el.style.top=`${(-Bt.y*.5+.5)*Sn}px`,i.el.style.opacity=Math.max(.35,1-e/2600))}}const Xv={architecture:{target:[0,18,318],offset:[100,78,150]},overview:{target:[0,0,-50],offset:[560,720,840]},bridge:{target:[70,25,kt(70)],offset:[150,150,235]},toll:{target:[430,25,kt(430)],offset:[80,150,-115]},bounce:{target:[70,9,390],offset:[120,92,118]},foot:{target:[627.0850731542669,0,479],offset:[12,80,12]},redfoot:{target:[-33,0,657.1399443494956],offset:[12,85,-12]},aofoot:{target:[265.03389707726456,0,288],offset:[-12,85,12]},night:{target:[0,8,320],offset:[0,34,200]}};function js(i,e=!1){const t=Xv[i];if(!t)return;i==="night"&&il(!0),mn=!1,Xr();const n=new D(...t.target).sub(Oe.origin),r=n.clone().add(new D(...t.offset));e?(Ke.target.copy(n),je.position.copy(r),Ke.update(),wt=null):wt={start:performance.now(),target0:Ke.target.clone(),pos0:je.position.clone(),target:n,position:r},document.querySelectorAll("[data-preset]").forEach(s=>s.classList.toggle("active",s.dataset.preset===i))}function Xr(){Q("drive").classList.toggle("driving",mn),Q("drive").textContent=mn?"Ⅱ 暂停漫游":"▷ 沿路漫游",Q("drive-status").textContent=mn?"自动漫游 · 72 km/h":"自由观察"}function Pu(i){nl=i,me.gi.value=i==="off"?0:Number(Q("strength").value),me.gray.value=i==="gray"?1:0,De.captureEnabled=i!=="off",document.querySelectorAll("#gi-mode button").forEach(e=>e.classList.toggle("active",e.dataset.value===i))}let Oc=0;function il(i){!!Ge.enabled.value!=!!i&&(i?(Oc=me.debugColors.value,me.debugColors.value=0):me.debugColors.value=Oc,Q("debug-colors").value=String(me.debugColors.value),Ge.enabled.value=+i,jt.onNightChange(),document.body.classList.toggle("night-mode",i),tl(),document.querySelectorAll("#time-mode button").forEach(e=>e.classList.toggle("active",e.dataset.value==="night"==!!i)),De.invalidate(!0),rl())}function Zs(i={}){i.enabled!==void 0&&il(i.enabled);for(const e of["windows","occupancy","windowPower","streets","streetPower","glow"])if(i[e]!==void 0){const t=Number(i[e]),n=Ge[e];if(!Number.isFinite(t)||t===n.value)continue;n.value=Math.max(0,Math.min(e==="windowPower"?6:e==="streetPower"?2.5:e==="glow"?1.5:1,t)),e!=="glow"&&Ge.enabled.value&&De.invalidate()}tl(),Q("night-windows").checked=!!Ge.windows.value,Q("street-lights").checked=!!Ge.streets.value;for(const[e,t,n]of[["window-occupancy","occupancy","%"],["window-power","windowPower","×"],["street-power","streetPower","%"],["lamp-glow","glow","%"]])Q(e).value=String(Ge[t].value),Q(e+"-value").value=n==="%"?`${Math.round(Ge[t].value*100)}%`:`${Ge[t].value.toFixed(1)}×`;rl()}function Du(){return{enabled:!!Ge.enabled.value,windows:!!Ge.windows.value,occupancy:Ge.occupancy.value,windowPower:Ge.windowPower.value,streets:!!Ge.streets.value,streetPower:Ge.streetPower.value,glow:Ge.glow.value,visibleFixtures:Oe.active.reduce((i,e)=>i+(e.group.userData.streetFixtures?.length||0),0),maxCandidatesPerFragment:6,streetShadowMaps:0}}function rl(){const i=Du();Q("night-status").textContent=i.enabled?`冷色月光 · 暖色窗光与路灯；当前瓦片 ${i.visibleFixtures} 盏，每片元最多 6 个候选。路灯无逐灯阴影；光晕是显示效果，非体积散射。${De.mode==="frozen"?"探针已冻结，光源改动需恢复更新。":""}`:"日间模式；点底部“夜景街区”体验窗光与暖色路灯。"}document.querySelectorAll("#time-mode button").forEach(i=>i.onclick=()=>il(i.dataset.value==="night"));Q("night-windows").onchange=i=>Zs({windows:i.target.checked});Q("street-lights").onchange=i=>Zs({streets:i.target.checked});for(const[i,e]of[["window-occupancy","occupancy"],["window-power","windowPower"],["street-power","streetPower"],["lamp-glow","glow"]])Q(i).oninput=t=>Zs({[e]:Number(t.target.value)});function Di(i,e={}){jt.set(i,e),Q("weather-mode").value=jt.model.mode,Q("weather-intensity").value=String(jt.model.intensity),Q("weather-intensity-value").value=`${Math.round(jt.model.intensity*100)}%`,Q("weather-pause").checked=jt.model.paused,Q("weather-effects").checked=jt.effectsEnabled,Lu()}function Lu(){const i=jt.stats(),e=i.current;Q("weather-status").textContent=`${{clear:"晴天",cloudy:"多云",rain:"下雨",snow:"下雪"}[i.mode]} · ${i.transition<1?`过渡 ${Math.round(i.transition*100)}%`:"已稳定"} · 粒子 ${i.effects.particles} / 水花 ${i.effects.splashes} · 顶部遮挡图 ${i.roof.updates} 次`,Q("environment-values").innerHTML=[["天空 / 云量",`${Math.round(e.cloud*100)}%`],["日月直射",`${i.main.sunIntensity.toFixed(2)}×`],["远景雾密度",`${i.main.fogDensity.toFixed(5)} m⁻¹`],["地表湿润 / 积雪",`${Math.round(e.wet*100)}% / ${Math.round(e.snow*100)}%`],["风速 X / Z",`${e.windX.toFixed(1)} / ${e.windZ.toFixed(1)} m/s`],["GI 源版本",`#${i.sourceVersion} · 天气重捕 ${i.probeInvalidations} 次`],["GI 源兼容权重",`${Math.round(i.giCompatibility*100)}%`]].map(([t,n])=>`<dt>${t}</dt><dd>${n}</dd>`).join("")}Q("weather-mode").onchange=i=>Di(i.target.value);Q("weather-intensity").oninput=i=>Di(void 0,{intensity:Number(i.target.value)});Q("weather-duration").onchange=i=>jt.model.duration=Number(i.target.value);Q("weather-pause").onchange=i=>Di(void 0,{paused:i.target.checked});Q("weather-effects").onchange=i=>Di(void 0,{effects:i.target.checked});Q("weather-quality").onchange=i=>Di(void 0,{quality:i.target.value});let ka="",Tr=0;function qv(){if(!Tt.castShadow){ka="";return}const i=Math.min(1300,Math.max(220,je.position.distanceTo(Ke.target)*.72));(!Tr||i>Tr||i<Tr-64)&&(Tr=Math.ceil(i/32)*32);const e=Tr,t=2*e/2048,n=new D().crossVectors(bi,new D(0,1,0)).normalize(),r=new D().crossVectors(n,bi).normalize(),s=Ke.target.clone().add(Oe.origin),a=Math.round(s.dot(n)/t),o=Math.round(s.dot(r)/t),l=Math.round(s.dot(bi)/t),c=[e,a,o,l,kr,hr,Oe.version,Oe.origin.x,Oe.origin.z].join("/");if(c===ka)return;ka=c;const u=Tt.shadow.camera;u.left=-e,u.right=e,u.top=e,u.bottom=-e,u.updateProjectionMatrix();const h=Sv(e,2048,u.near,u.far,hr);Tt.shadow.bias=h.bias,Tt.shadow.normalBias=h.normalBias;const d=n.multiplyScalar(a*t).addScaledVector(r,o*t).addScaledVector(bi,l*t).sub(Oe.origin);Tt.target.position.copy(d),Tt.position.copy(d).addScaledVector(bi,1500),Tt.target.updateMatrixWorld(),Tt.shadow.needsUpdate=!0,Be.shadowMap.needsUpdate=!0}function Uu(){on=innerWidth,Sn=innerHeight,Be.setSize(on,Sn,!1),je.aspect=on/Sn,je.updateProjectionMatrix(),on<550&&document.body.classList.add("panel-closed")}addEventListener("resize",Uu);Uu();Q("panel-toggle").onclick=()=>document.body.classList.toggle("panel-closed");document.querySelectorAll("[data-preset]").forEach(i=>i.onclick=()=>js(i.dataset.preset));document.querySelectorAll("#gi-mode button").forEach(i=>i.onclick=()=>Pu(i.dataset.value));Q("strength").oninput=i=>{Q("strength-value").value=`${Math.round(i.target.value*100)}%`,nl!=="off"&&(me.gi.value=Number(i.target.value))};Q("update-mode").onchange=i=>{De.mode=i.target.value};Q("visibility").onchange=i=>me.visibility.value=+i.target.checked;Q("lighting-view").onchange=i=>{const e=Number(i.target.value);if(e===2){ks("view");return}At.mode==="view"&&ks(Iu),me.view.value=e,Q("lighting-view").value=String(e),Q("view-key").hidden=!e};Q("tone-mapping").onchange=i=>{Be.toneMapping=i.target.value==="aces"?Bo:ko};Q("debug-colors").onchange=i=>{me.debugColors.value=Number(i.target.value),De.invalidate()};Q("sun").oninput=i=>{kr=Number(i.target.value),Q("sun-value").value=`${kr}°`,$s()};Q("elevation").oninput=i=>{hr=Number(i.target.value),Q("elevation-value").value=`${hr}°`,$s()};Q("shadows").onchange=i=>{Tt.castShadow=i.target.checked;for(const e of Oe.tiles.values())e.group?.traverse(t=>{t.isMesh&&(t.receiveShadow=i.target.checked)});De.invalidate()};Q("tiles").onchange=i=>i.target.checked?je.layers.enable(3):je.layers.disable(3);Q("probes").onchange=i=>i.target.checked?je.layers.enable(4):je.layers.disable(4);Q("cube").onchange=i=>{De.preview=i.target.checked,Q("cube-label").hidden=!i.target.checked};Q("coverage").onchange=i=>{me.coverage.value=+i.target.checked,Q("coverage-key").hidden=!i.target.checked};Q("gpu-budget").onchange=i=>{De.gpuBudget=Number(i.target.value)};Q("face-budget").onchange=i=>{De.maxFaces=Number(i.target.value)};Q("target-fps").onchange=i=>{ti=Number(i.target.value)};let Iu="on";function ks(i){i==="view"?(At.mode!=="view"&&(Iu=At.mode),me.view.value=0,Q("lighting-view").value="2",Q("view-key").hidden=!0):At.mode==="view"&&(me.view.value=0,Q("lighting-view").value="0",Q("view-key").hidden=!0),At.setMode(i),document.querySelectorAll("#ao-mode button").forEach(e=>e.classList.toggle("active",e.dataset.value===i))}document.querySelectorAll("#ao-mode button").forEach(i=>i.onclick=()=>ks(i.dataset.value));Q("probe-layout").onchange=i=>De.setLayout(i.target.value);Q("ao-quality").onchange=i=>{At.quality=i.target.value};Q("ao-radius").oninput=i=>{et.radius.value=Number(i.target.value),Q("ao-radius-value").value=`${Number(i.target.value).toFixed(1)} m`};Q("ao-strength").oninput=i=>{et.strength.value=Number(i.target.value),Q("ao-strength-value").value=`${Math.round(Number(i.target.value)*100)}%`};Q("ao-direct").oninput=i=>{et.direct.value=Number(i.target.value),Q("ao-direct-value").value=`${Math.round(Number(i.target.value)*100)}%`};function Fu(i){Q("perf-panel").hidden=!i,Q("perf-toggle").setAttribute("aria-expanded",String(i)),document.body.classList.toggle("perf-open",i)}Q("perf-toggle").onclick=()=>Fu(Q("perf-panel").hidden);Fu(on>=1e3);function Yv(){const i=Re.stats(),e=u=>u?`${u.mean.toFixed(2)} / ${u.p95.toFixed(2)}`:"— / —",t=[["CPU 帧回调",i.cpu.total],["　环境状态",i.cpu.environment],["　天气遮挡提交",i.cpu.weather],["　瓦片处理",i.cpu.tiles],["　探针场调度",i.cpu.field],["　探针提交",i.cpu.probes],["　AO 提交",i.cpu.ao],["　主画面提交",i.cpu.main],["GPU 探针更新",i.gpuSupported?i.gpu.probes:null],["GPU AO 重建",i.gpuSupported?i.gpu.ao:null],["GPU RT 调试",i.gpuSupported?i.gpu.debug:null],["GPU 天气遮挡",i.gpuSupported?i.gpu.weather:null],["GPU 主画面",i.gpuSupported?i.gpu.main:null]];Q("perf-rows").innerHTML=t.map(([u,h])=>{const[d,f]=e(h).split(" / ");return`<tr><td>${u}</td><td>${d}</td><td>${f}</td></tr>`}).join(""),Q("gpu-status").textContent=i.gpuSupported?`GPU 异步计时 · ${i.sampleCount} 个有效样本 · ${i.invalidSamples} 个无效样本已丢弃`:"GPU 计时扩展不可用；显示 CPU 实测，捕获按面数与 CPU 限流";const n=De.stats(),r=At.stats(),s=jt.stats();Q("perf-counts").textContent=`本帧 ${De.lastFaces} 面 · Draw ${Be.info.render.calls}（探针 ${De.lastCalls} / AO ${r.lastCalls}） · 三角形 ${(Be.info.render.triangles/1e3).toFixed(1)}k · 探针 ${n.ready}/${n.total} · 图集 ${n.atlasMB.toFixed(1)} MiB + 过渡 ${n.transitions.estimatedMiB.toFixed(2)} MiB · AO ${r.estimatedMiB.toFixed(2)} MiB · 天气 ${s.roof.estimatedMiB.toFixed(2)} MiB / ${s.effects.particles} 粒子 · 夜灯最多 6 候选/片元`,Q("frame-reference").textContent=`${ti} FPS · ${(1e3/ti).toFixed(2)} ms / 帧`;const a=Q("perf-chart"),o=a.getContext("2d"),l=100/Math.max(50,2e3/ti);o.clearRect(0,0,600,100),o.strokeStyle="#b9c8b9",o.beginPath(),o.moveTo(0,100-1e3/ti*l),o.lineTo(600,100-1e3/ti*l),o.stroke(),[Re.frame.map(u=>u.cpu.total),Re.gpu.main||[],Re.gpu.probes||[],Re.gpu.ao||[],Re.gpu.weather||[]].forEach((u,h)=>{o.strokeStyle=["#4b81b1","#34876d","#c18b42","#9275b5","#4ba7b2"][h],o.beginPath(),u.forEach((d,f)=>{const m=f*600/119,_=100-Math.min(100,d*l);f?o.lineTo(m,_):o.moveTo(m,_)}),o.stroke()})}function $v(){const i=At.stats(),e=Re.latest.ao,t=De.stats();Q("ao-status").textContent=`${i.mode==="off"?"已关闭 · ":""}${i.resolution.join(" × ")} · ${i.samples} 采样/像素 · ${i.estimatedMiB.toFixed(2)} MiB · 最近重建 ${e?`${e.ms.toFixed(2)} ms`:"—"}；静止时复用`,Q("probe-layout-status").textContent=`${t.layout==="adaptive"?"几何自适应":"完整网格"}：需求 ${t.total} / 候选 ${t.candidates}，裁剪 ${t.pruned} 个；固定图集 ${t.atlasMB.toFixed(1)} MiB。`}Q("moving-light").onchange=i=>{Cs=i.target.checked,zs.intensity=Cs?2400:0,Hr.visible=Cs,De.invalidateAround(70,390,180)};Q("drive").onclick=()=>{wt=null,mn=!mn,Xr()};Q("reset").onclick=()=>js("overview");Be.domElement.addEventListener("pointerdown",()=>{wt=null,mn&&(mn=!1,Xr())});addEventListener("keydown",i=>{i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement||kn.add(i.code)});addEventListener("keyup",i=>kn.delete(i.code));addEventListener("blur",()=>kn.clear());const jv=performance.now();function Nu(i){if(requestAnimationFrame(Nu),Ic.raf(i),!(i-Cr<1e3/ti-1))try{Re.beginFrame();const e=Math.min(.05,(i-Cr)/1e3),t=(i-Cr)/1e3;if(Cr=i,er=(i-jv)/1e3,Rs++,Be.info.reset(),Ke.dampingFactor=1-Math.pow(.915,e*60),wt){const u=Math.min(1,(i-wt.start)/900),h=u*u*(3-2*u);Ke.target.lerpVectors(wt.target0,wt.target,h),je.position.lerpVectors(wt.pos0,wt.position,h),u===1&&(wt=null)}if(mn){$i=($i+e*20/2400)%1;const u=ri($i),h=ri(Math.min(1,$i+.025));Mn.set(u.x-Oe.origin.x,27,u.z-Oe.origin.z);const d=new D(u.x-h.x,0,u.z-h.z).normalize().multiplyScalar(135);d.y=95,je.position.lerp(Mn.clone().add(d),Math.min(1,e*2)),Ke.target.lerp(Mn,Math.min(1,e*3))}if(kn.size){const u=e*Math.max(30,je.position.distanceTo(Ke.target)*.5);je.getWorldDirection(Bt),Bt.y=0,Bt.normalize(),Mn.set(0,0,0),kn.has("KeyW")&&Mn.add(Bt),kn.has("KeyS")&&Mn.sub(Bt),Bt.cross(new D(0,1,0)),kn.has("KeyD")&&Mn.add(Bt),kn.has("KeyA")&&Mn.sub(Bt),Mn.multiplyScalar(u),Ke.target.add(Mn),je.position.add(Mn)}(Os||wt||mn||kn.size)&&(Os=Ke.update()),Tn.copy(Ke.target).add(Oe.origin);const n=Math.max(40,je.position.y-Ke.target.y);if(Math.abs(Tn.x-Oe.origin.x)>760||Math.abs(Tn.z-Oe.origin.z)>760){const u=Oe.origin.clone();Oe.rebase(Tn.x,Tn.z);const h=Oe.origin.clone().sub(u);je.position.sub(h),Ke.target.sub(h),wt&&(wt.target.sub(h),wt.position.sub(h),wt.target0.sub(h),wt.pos0.sub(h))}Re.cpuPass("tiles",()=>Oe.update(Tn.x,Tn.z,n,i)),me.origin.value.copy(Oe.origin),Wr.position.copy(Oe.origin).multiplyScalar(-1);const r=ri($i),s=ri($i+.001);dr.position.set(r.x,25.5,r.z),dr.rotation.y=Math.atan2(s.x-r.x,s.z-r.z),zs.position.set(70+Math.sin(er*.7)*55-Oe.origin.x,10,390+Math.cos(er*.7)*20-Oe.origin.z),Hr.position.copy(zs.position),Cs&&Rs%10===0&&De.invalidateAround(70,390,180);const a=Re.cpuPass("environment",()=>jt.update(e,Oe,on,Sn));jt.roof.lastCalls=0,Re.cpuPass("field",()=>{De.setAnchors(Tn.x,Tn.z,Oe.origin,je,Oe),qv()}),a?(Re.gpuBegin("weather"),Re.cpuPass("weather",()=>jt.roof.update()),Re.gpuEnd()):Re.ext&&(Re.gpu.weather??=[],Re.gpu.weather.push(0),Re.gpu.weather.length>120&&Re.gpu.weather.shift());const o=Re.latest.probes;o&&o!==Fc&&o.faces>0&&(De.gpuFaceMs=De.gpuFaceMs*.7+o.ms/o.faces*.3,Fc=o);const l={faces:0,blends:0};De.mode!=="frozen"&&(De.transitions.active.length||De.captureEnabled&&De.wanted.some(u=>u.dirty&&!u.blocked))&&Re.gpuBegin("probes",l),Re.cpuPass("probes",()=>De.update(er,Oe.version,Oe.origin,e)),l.faces=De.lastFaces,l.blends=De.lastBlends,Re.gpuEnd(),!l.faces&&!l.blends&&Re.ext&&(Re.gpu.probes??=[],Re.gpu.probes.push(0),Re.gpu.probes.length>120&&Re.gpu.probes.shift());const c=At.needsUpdate(je,Oe);if(At.lastCalls=0,At.lastTriangles=0,c?(Re.gpuBegin("ao"),Re.cpuPass("ao",()=>At.update(je,Oe)),Re.gpuEnd()):Re.ext&&(Re.gpu.ao??=[],Re.gpu.ao.push(0),Re.gpu.ao.length>120&&Re.gpu.ao.shift()),Re.gpuBegin("main"),Re.cpuPass("main",()=>{Be.setRenderTarget(null),Be.setViewport(0,0,on,Sn),Be.render(ln,je),De.drawPreview(on,Sn)}),Re.gpuEnd(),Bs.enabled?(Re.gpuBegin("debug"),Re.cpuPass("debug",()=>Bs.render(on,Sn)),Re.gpuEnd()):Re.ext&&(Re.gpu.debug??=[],Re.gpu.debug.push(0),Re.gpu.debug.length>120&&Re.gpu.debug.shift()),Re.cpuPass("ui",()=>{Wv(),Q("compass").style.transform=`rotate(${Ke.getAzimuthalAngle()}rad)`}),Rs%20===0&&Oe.active.length&&!Oo&&(Oo=!0,Q("loading").classList.add("hidden")),za++,i-Ba>700&&(No=Math.round(za*1e3/(i-Ba)),za=0,Ba=i),i-Nc>350){Nc=i;const u=Oe.stats(),h=De.stats();Q("fps").textContent=`${No||"--"} FPS`,Q("tile-stats").textContent=`瓦片 ${u.visible} 可见 / ${u.resident} 常驻 · ${(u.bytes/1048576).toFixed(1)} MB 几何估算`,Q("probe-stats").textContent=`探针 ${h.ready}/${h.total} 就绪 · ${De.mode==="frozen"?"已冻结":`待更新 ${h.dirty}`} · ${h.atlasMB.toFixed(1)} MB 图集`,Q("probe-progress").textContent=De.mode==="frozen"?"探针已冻结":h.dirty?`正在分帧捕获，${h.dirty} 个待更新`:h.transitions.active+h.transitions.warming?`捕获完成 · ${h.transitions.active+h.transitions.warming} 个结果平滑发布`:"当前视野捕获完成",$v(),rl(),Lu(),Q("perf-panel").hidden||Yv()}Re.endFrame(t,{calls:Be.info.render.calls,triangles:Be.info.render.triangles,probeFaces:De.lastFaces,probeCalls:De.lastCalls,aoCalls:At.lastCalls,aoTriangles:At.lastTriangles}),Ic.completed()}catch(e){Re.gpuEnd(),console.error(e),Ns.includes(e.message)||Ns.push(e.message),Q("error").hidden=!1,Q("error").textContent=e.message}}requestAnimationFrame(Nu);function Zv(i,e,t){At.update(je,Oe),Be.setRenderTarget(null),Be.setViewport(0,0,on,Sn),Be.render(ln,je);const n=new D(i-Oe.origin.x,e,t-Oe.origin.z).project(je),r=Be.getContext(),s=Math.round((n.x*.5+.5)*r.drawingBufferWidth),a=Math.round((n.y*.5+.5)*r.drawingBufferHeight),o=new Uint8Array(4);if(s<0||a<0||s>=r.drawingBufferWidth||a>=r.drawingBufferHeight||n.z<-1||n.z>1)return{visible:!1};const l=new D(i-Oe.origin.x,e,t-Oe.origin.z),c=l.clone().sub(je.position),u=c.length(),h=new Fd(je.position,c.normalize()),d=h.intersectObjects(Oe.active.map(f=>f.group),!0)[0];return d&&Math.abs(d.distance-u)>.6?{visible:!1,occluded:!0}:(r.readPixels(s,a,1,1,r.RGBA,r.UNSIGNED_BYTE,o),{visible:!0,rgb:[...o].slice(0,3),screen:[(n.x*.5+.5)*on,(-n.y*.5+.5)*Sn]})}window.lab={get ready(){return Oo},state:()=>({frame:Rs,time:er,fps:No,errors:[...Ns],giMode:nl,shadow:Tt.castShadow,updateMode:De.mode,origin:Oe.origin.toArray(),focus:Tn.toArray(),tiles:Oe.stats(),probes:De.stats(er),calls:Be.info.render.calls,triangles:Be.info.render.triangles,webglMemory:{...Be.info.memory}}),preset:i=>js(i,!0),setGI:Pu,setUpdate:i=>{De.mode=i,Q("update-mode").value=i},jump:(i,e)=>{wt=null;const t=je.position.clone().sub(Ke.target);Ke.target.set(i-Oe.origin.x,0,e-Oe.origin.z),je.position.copy(Ke.target).add(t),Ke.update()},setSun:(i,e)=>{kr=i,hr=e,$s()},setDrive:i=>{mn=i,Xr()},setProbeCapture:i=>{De.captureEnabled=i},pixels:()=>{Be.setRenderTarget(null),Be.setViewport(0,0,on,Sn),Be.render(ln,je);const i=Be.getContext(),e=i.drawingBufferWidth,t=i.drawingBufferHeight,n=new Uint8Array(e*t*4);i.readPixels(0,0,e,t,i.RGBA,i.UNSIGNED_BYTE,n);const r=[];for(let s=0;s<80;s++)for(let a=0;a<120;a++){const o=(Math.floor((s+.5)*t/80)*e+Math.floor((a+.5)*e/120))*4;r.push(n[o],n[o+1],n[o+2])}return r},renderer:Be};Object.assign(window.lab,{readPoint:Zv,inspectProbes:(i,e,t)=>De.inspect(i,e,t),buildings:()=>Oe.active.flatMap(i=>i.group.userData.buildings||[]),aim:(i,e)=>{wt=null,mn=!1,Xr(),Ke.target.fromArray(i).sub(Oe.origin),je.position.copy(Ke.target).add(new D(...e)),Ke.update()}});Object.assign(window.lab,{performance:()=>({...Re.stats(),targetFPS:ti,resolution:Be.getDrawingBufferSize(new ve).toArray()}),captureBudget:()=>({gpuTargetMs:De.gpuBudget,maxFaces:De.maxFaces,cpuTargetMs:De.cpuBudget,estimatedGPUFaceMs:De.gpuFaceMs,lastFaces:De.lastFaces})});Object.assign(window.lab,{display:()=>({view:At.mode==="view"?"ao":me.view.value?"indirect":"combined",toneMapping:Be.toneMapping===Bo?"aces":"neutral",exposure:Be.toneMappingExposure})});Object.assign(window.lab,{diagnosePoint:async(i,e=[0,1,0],t=!0)=>{const{diagnoseProbePoint:n}=await Xu(async()=>{const{diagnoseProbePoint:r}=await import("./probe-diagnostics-CqzamcR5.js");return{diagnoseProbePoint:r}},[],import.meta.url);return n(De,i,e,t)}});Object.assign(window.lab,{ao:()=>At.stats(),setAO:ks,forceAORefresh:()=>{At.key=""}});Object.assign(window.lab,{setProbeLayout:i=>{De.setLayout(i),Q("probe-layout").value=i}});Object.assign(window.lab,{night:Du,setNight:Zs,fixtures:()=>Oe.active.flatMap(i=>i.group.userData.streetFixtures||[])});Object.assign(window.lab,{weather:()=>jt.stats(),setWeather:Di,renderTargets:()=>Bs.stats(),setRenderTargets:i=>Bs.toggle(i)});new URLSearchParams(location.search).get("scene")==="night"&&js("night",!0);const Ga=new URLSearchParams(location.search).get("weather");Ga&&["clear","cloudy","rain","snow"].includes(Ga)&&Di(Ga,{instant:!0});export{Rn as C,wi as D,fn as F,sn as H,ii as I,dt as M,Pi as O,Ln as P,zt as R,Gr as S,Ye as V,gn as W,Pt as a,ve as b,D as c,Nt as d,Po as e,Or as f,me as l,bc as p,Br as t};
