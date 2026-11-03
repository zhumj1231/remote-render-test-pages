(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Bh="modulepreload",kh=function(i,e){return new URL(i,e).href},hl={},Vh=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(t.map(h=>{if(h=kh(h,n),h in hl)return;hl[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===h&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Bh,u||(f.as="script"),f.crossOrigin="",f.href=h,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="180",Qi={ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gh=0,ul=1,Hh=2,Nc=1,Fc=2,zn=3,ii=0,Zt=1,yn=2,kn=0,er=1,Va=2,dl=3,fl=4,Wh=5,xi=100,Xh=101,qh=102,Yh=103,$h=104,jh=200,Zh=201,Kh=202,Jh=203,Ga=204,Ha=205,Qh=206,eu=207,tu=208,nu=209,iu=210,ru=211,su=212,au=213,ou=214,Wa=0,Xa=1,qa=2,ir=3,Ya=4,$a=5,ja=6,Za=7,Oc=0,lu=1,cu=2,Vn=0,hu=1,uu=2,du=3,zo=4,fu=5,pu=6,Bo=7,zc=300,rr=301,sr=302,Ka=303,Ja=304,ks=306,Cs=1e3,Si=1001,Qa=1002,yt=1003,mu=1004,Yr=1005,Nt=1006,Js=1007,Qn=1008,bn=1009,Bc=1010,kc=1011,Cr=1012,ko=1013,Hn=1014,dn=1015,si=1016,Vo=1017,Go=1018,Pr=1020,Vc=35902,Gc=35899,Hc=1021,Wc=1022,Bt=1023,Dr=1026,Lr=1027,Vs=1028,Ho=1029,Xc=1030,Wo=1031,Xo=1033,Ss=33776,bs=33777,Es=33778,ws=33779,eo=35840,to=35841,no=35842,io=35843,ro=36196,so=37492,ao=37496,oo=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,_o=37817,vo=37818,xo=37819,Mo=37820,yo=37821,So=36492,bo=36494,Eo=36495,wo=36283,To=36284,Ao=36285,Ro=36286,gu=3200,_u=3201,qc=0,vu=1,Kn="",sn="srgb",ri="srgb-linear",Ps="linear",ot="srgb",Di=7680,pl=519,xu=512,Mu=513,yu=514,Yc=515,Su=516,bu=517,Eu=518,wu=519,ml=35044,gl="300 es",Rn=2e3,Ds=2001;class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _l=1234567;const tr=Math.PI/180,Ur=180/Math.PI;function hr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function qo(i,e){return(i%e+e)%e}function Tu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Au(i,e,t){return i!==e?(t-i)/(e-i):0}function Ar(i,e,t){return(1-t)*i+t*e}function Ru(i,e,t,n){return Ar(i,e,1-Math.exp(-t*n))}function Cu(i,e=1){return e-Math.abs(qo(i,e*2)-e)}function Pu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Du(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Uu(i,e){return i+Math.random()*(e-i)}function Iu(i){return i*(.5-Math.random())}function Nu(i){i!==void 0&&(_l=i);let e=_l+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fu(i){return i*tr}function Ou(i){return i*Ur}function zu(i){return(i&i-1)===0&&i!==0}function Bu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Co={DEG2RAD:tr,RAD2DEG:Ur,generateUUID:hr,clamp:qe,euclideanModulo:qo,mapLinear:Tu,inverseLerp:Au,lerp:Ar,damp:Ru,pingpong:Cu,smoothstep:Pu,smootherstep:Du,randInt:Lu,randFloat:Uu,randFloatSpread:Iu,seededRandom:Nu,degToRad:Fu,radToDeg:Ou,isPowerOfTwo:zu,ceilPowerOfTwo:Bu,floorPowerOfTwo:ku,setQuaternionFromProperEuler:Vu,normalize:qt,denormalize:Yi};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const R=Math.sqrt(b),T=Math.atan2(R,p*w);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const S=o*w;if(l=l*m+d*S,c=c*m+f*S,h=h*m+g*S,u=u*m+_*S,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qs.copy(this).projectOnVector(e),this.sub(Qs)}reflect(e){return this.sub(Qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new C,vl=new wi;class He{constructor(e,t,n,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=r[0],m=r[3],p=r[6],w=r[1],b=r[4],S=r[7],R=r[2],T=r[5],P=r[8];return s[0]=a*_+o*w+l*R,s[3]=a*m+o*b+l*T,s[6]=a*p+o*S+l*P,s[1]=c*_+h*w+u*R,s[4]=c*m+h*b+u*T,s[7]=c*p+h*S+u*P,s[2]=d*_+f*w+g*R,s[5]=d*m+f*b+g*T,s[8]=d*p+f*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=t*u+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ea.makeScale(e,t)),this}rotate(e){return this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new He;function $c(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gu(){const i=Ls("canvas");return i.style.display="block",i}const xl={};function Ir(i){i in xl||(xl[i]=!0,console.warn(i))}function Hu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ml=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wu(){const i={enabled:!0,workingColorSpace:ri,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=Gn(r.r),r.g=Gn(r.g),r.b=Gn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kn?Ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ir("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ir("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ri]:{primaries:e,whitePoint:n,transfer:Ps,toXYZ:Ml,fromXYZ:yl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Ml,fromXYZ:yl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}const et=Wu();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Li;class Xu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Li===void 0&&(Li=Ls("canvas")),Li.width=e.width,Li.height=e.height;const r=Li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Li}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Gn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qu=0;class Yo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ta(r[a].image)):s.push(ta(r[a]))}else s=ta(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yu=0;const na=new C;class Kt extends Ti{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Si,r=Si,s=Nt,a=Qn,o=Bt,l=bn,c=Kt.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=hr(),this.name="",this.source=new Yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(na).x}get height(){return this.source.getSize(na).y}get depth(){return this.source.getSize(na).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=zc;Kt.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,r=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(f+1)/2,R=(p+1)/2,T=(h+d)/4,P=(u+_)/4,U=(g+m)/4;return b>S&&b>R?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=T/n,s=P/n):S>R?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=T/r,s=U/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=P/s,r=U/s),this.set(n,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $u extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Kt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Yo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends $u{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jc extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ju extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),jr.subVectors(this.max,pr),Ui.subVectors(e.a,pr),Ii.subVectors(e.b,pr),Ni.subVectors(e.c,pr),Wn.subVectors(Ii,Ui),Xn.subVectors(Ni,Ii),hi.subVectors(Ui,Ni);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-hi.z,hi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,hi.z,0,-hi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-hi.y,hi.x,0];return!ia(t,Ui,Ii,Ni,jr)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,Ui,Ii,Ni,jr))?!1:(Zr.crossVectors(Wn,Xn),t=[Zr.x,Zr.y,Zr.z],ia(t,Ui,Ii,Ni,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new C,new C,new C,new C,new C,new C,new C,new C],gn=new C,$r=new ai,Ui=new C,Ii=new C,Ni=new C,Wn=new C,Xn=new C,hi=new C,pr=new C,jr=new C,Zr=new C,ui=new C;function ia(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ui.fromArray(i,s);const o=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Zu=new ai,mr=new C,ra=new C;class Ai{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(mr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(ra)),this.expandByPoint(mr.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const In=new C,sa=new C,Kr=new C,qn=new C,aa=new C,Jr=new C,oa=new C;class Gs{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){sa.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(sa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Kr),o=qn.dot(this.direction),l=-qn.dot(Kr),c=qn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(sa).addScaledVector(Kr,d),f}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),r=In.dot(In)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,r,s){aa.subVectors(t,e),Jr.subVectors(n,e),oa.crossVectors(aa,Jr);let a=this.direction.dot(oa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);const l=o*this.direction.dot(Jr.crossVectors(qn,Jr));if(l<0)return null;const c=o*this.direction.dot(aa.cross(qn));if(c<0||l+c>a)return null;const h=-o*qn.dot(oa);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,r,s,a,o,l,c,h,u,d,f,g,_,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,r,s,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Fi.setFromMatrixColumn(e,0).length(),s=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ku,e,Ju)}lookAt(e,t,n){const r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Yn.crossVectors(n,nn),Yn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Yn.crossVectors(n,nn)),Yn.normalize(),Qr.crossVectors(nn,Yn),r[0]=Yn.x,r[4]=Qr.x,r[8]=nn.x,r[1]=Yn.y,r[5]=Qr.y,r[9]=nn.y,r[2]=Yn.z,r[6]=Qr.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],b=n[7],S=n[11],R=n[15],T=r[0],P=r[4],U=r[8],y=r[12],M=r[1],D=r[5],F=r[9],k=r[13],H=r[2],W=r[6],G=r[10],K=r[14],V=r[3],se=r[7],he=r[11],ue=r[15];return s[0]=a*T+o*M+l*H+c*V,s[4]=a*P+o*D+l*W+c*se,s[8]=a*U+o*F+l*G+c*he,s[12]=a*y+o*k+l*K+c*ue,s[1]=h*T+u*M+d*H+f*V,s[5]=h*P+u*D+d*W+f*se,s[9]=h*U+u*F+d*G+f*he,s[13]=h*y+u*k+d*K+f*ue,s[2]=g*T+_*M+m*H+p*V,s[6]=g*P+_*D+m*W+p*se,s[10]=g*U+_*F+m*G+p*he,s[14]=g*y+_*k+m*K+p*ue,s[3]=w*T+b*M+S*H+R*V,s[7]=w*P+b*D+S*W+R*se,s[11]=w*U+b*F+S*G+R*he,s[15]=w*y+b*k+S*K+R*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*f-n*l*f)+_*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*h-s*l*h)+m*(+t*c*u-t*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+p*(-r*o*h-t*l*u+t*o*d+r*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,b=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,S=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,R=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=t*w+n*b+r*S+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=w*P,e[1]=(_*d*s-u*m*s-_*r*f+n*m*f+u*r*p-n*d*p)*P,e[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*p+n*l*p)*P,e[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*f-n*l*f)*P,e[4]=b*P,e[5]=(h*m*s-g*d*s+g*r*f-t*m*f-h*r*p+t*d*p)*P,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*P,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*f+t*l*f)*P,e[8]=S*P,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*P,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*P,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*f-t*o*f)*P,e[12]=R*P,e[13]=(h*_*r-g*u*r+g*n*d-t*_*d-h*n*m+t*u*m)*P,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*m-t*o*m)*P,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,_=a*h,m=a*u,p=o*u,w=l*c,b=l*h,S=l*u,R=n.x,T=n.y,P=n.z;return r[0]=(1-(_+p))*R,r[1]=(f+S)*R,r[2]=(g-b)*R,r[3]=0,r[4]=(f-S)*T,r[5]=(1-(d+p))*T,r[6]=(m+w)*T,r[7]=0,r[8]=(g+b)*P,r[9]=(m-w)*P,r[10]=(1-(d+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Fi.set(r[0],r[1],r[2]).length();const a=Fi.set(r[4],r[5],r[6]).length(),o=Fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const c=1/s,h=1/a,u=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Rn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Rn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ds)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Rn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Rn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ds)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fi=new C,_n=new nt,Ku=new C(0,0,0),Ju=new C(1,1,1),Yn=new C,Qr=new C,nn=new C,Sl=new nt,bl=new wi;class Cn{constructor(e=0,t=0,n=0,r=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bl.setFromEuler(this),this.setFromQuaternion(bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qu=0;const El=new C,Oi=new wi,Nn=new nt,es=new C,gr=new C,ed=new C,td=new wi,wl=new C(1,0,0),Tl=new C(0,1,0),Al=new C(0,0,1),Rl={type:"added"},nd={type:"removed"},zi={type:"childadded",child:null},la={type:"childremoved",child:null};class bt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new C,t=new Cn,n=new wi,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nt},normalMatrix:{value:new He}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(wl,e)}rotateY(e){return this.rotateOnAxis(Tl,e)}rotateZ(e){return this.rotateOnAxis(Al,e)}translateOnAxis(e,t){return El.copy(e).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wl,e)}translateY(e){return this.translateOnAxis(Tl,e)}translateZ(e){return this.translateOnAxis(Al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?es.copy(e):es.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(gr,es,this.up):Nn.lookAt(es,gr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rl),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nd),la.child=e,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rl),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}bt.DEFAULT_UP=new C(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new C,Fn=new C,ca=new C,On=new C,Bi=new C,ki=new C,Cl=new C,ha=new C,ua=new C,da=new C,fa=new Ye,pa=new Ye,ma=new Ye;class un{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){vn.subVectors(r,t),Fn.subVectors(n,t),ca.subVectors(e,t);const a=vn.dot(vn),o=vn.dot(Fn),l=vn.dot(ca),c=Fn.dot(Fn),h=Fn.dot(ca),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(e,t),pa.fromBufferAttribute(e,n),ma.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(fa,s.x),a.addScaledVector(pa,s.y),a.addScaledVector(ma,s.z),a}static isFrontFacing(e,t,n,r){return vn.subVectors(n,t),Fn.subVectors(e,t),vn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),vn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Bi.subVectors(r,n),ki.subVectors(s,n),ha.subVectors(e,n);const l=Bi.dot(ha),c=ki.dot(ha);if(l<=0&&c<=0)return t.copy(n);ua.subVectors(e,r);const h=Bi.dot(ua),u=ki.dot(ua);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Bi,a);da.subVectors(e,s);const f=Bi.dot(da),g=ki.dot(da);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ki,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Cl.subVectors(s,r),o=(u-h)/(u-h+(f-g)),t.copy(r).addScaledVector(Cl,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Bi,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ts={h:0,s:0,l:0};function ga(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=et.workingColorSpace){if(e=qo(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ga(a,s,e+1/3),this.g=ga(a,s,e),this.b=ga(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const n=Zc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return et.workingToColorSpace(Gt.copy(this),e),Math.round(qe(Gt.r*255,0,255))*65536+Math.round(qe(Gt.g*255,0,255))*256+Math.round(qe(Gt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=sn){et.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,r=Gt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(ts);const n=Ar($n.h,ts.h,t),r=Ar($n.s,ts.s,t),s=Ar($n.l,ts.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new fe;fe.NAMES=Zc;let id=0;class ur extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=er,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Ha,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Ha&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class oi extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new C,ns=new _e;let rd=0;class fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ml,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),e}}class Kc extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jc extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sd=0;const hn=new nt,_a=new bt,Vi=new C,rn=new ai,_r=new ai,Ut=new C;class Wt extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($c(e)?Jc:Kc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(rn.min,_r.min),rn.expandByPoint(Ut),Ut.addVectors(rn.max,_r.max),rn.expandByPoint(Ut)):(rn.expandByPoint(_r.min),rn.expandByPoint(_r.max))}rn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ut.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),Ut.add(Vi)),r=Math.max(r,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new C,l[U]=new C;const c=new C,h=new C,u=new C,d=new _e,f=new _e,g=new _e,_=new C,m=new C;function p(U,y,M){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,U),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[U].add(_),o[y].add(_),o[M].add(_),l[U].add(m),l[y].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,y=w.length;U<y;++U){const M=w[U],D=M.start,F=M.count;for(let k=D,H=D+F;k<H;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new C,S=new C,R=new C,T=new C;function P(U){R.fromBufferAttribute(r,U),T.copy(R);const y=o[U];b.copy(y),b.sub(R.multiplyScalar(R.dot(y))).normalize(),S.crossVectors(T,y);const D=S.dot(l[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,D)}for(let U=0,y=w.length;U<y;++U){const M=w[U],D=M.start,F=M.count;for(let k=D,H=D+F;k<H;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new fn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pl=new nt,di=new Gs,is=new Ai,Dl=new C,rs=new C,ss=new C,as=new C,va=new C,os=new C,Ll=new C,ls=new C;class dt extends bt{constructor(e=new Wt,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(va.fromBufferAttribute(u,e),a?os.addScaledVector(va,h):os.addScaledVector(va.sub(t),h))}t.add(os)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(is.containsPoint(di.origin)===!1&&(di.intersectSphere(is,Dl)===null||di.origin.distanceToSquared(Dl)>(e.far-e.near)**2))&&(Pl.copy(s).invert(),di.copy(e.ray).applyMatrix4(Pl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,R=b;S<R;S+=3){const T=o.getX(S),P=o.getX(S+1),U=o.getX(S+2);r=cs(this,p,e,n,c,h,u,T,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);r=cs(this,a,e,n,c,h,u,w,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,R=b;S<R;S+=3){const T=S,P=S+1,U=S+2;r=cs(this,p,e,n,c,h,u,T,P,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,b=m+1,S=m+2;r=cs(this,a,e,n,c,h,u,w,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ad(i,e,t,n,r,s,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===ii,o),l===null)return null;ls.copy(o),ls.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ls);return c<t.near||c>t.far?null:{distance:c,point:ls.clone(),object:i}}function cs(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,rs),i.getVertexPosition(l,ss),i.getVertexPosition(c,as);const h=ad(i,e,t,n,rs,ss,as,Ll);if(h){const u=new C;un.getBarycoord(Ll,rs,ss,as,u),r&&(h.uv=un.getInterpolatedAttribute(r,o,l,c,u,new _e)),s&&(h.uv1=un.getInterpolatedAttribute(s,o,l,c,u,new _e)),a&&(h.normal=un.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new C,materialIndex:0};un.getNormal(rs,ss,as,d.normal),h.face=d,h.barycoord=u}return h}class Pn extends Wt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(u,2));function g(_,m,p,w,b,S,R,T,P,U,y){const M=S/P,D=R/U,F=S/2,k=R/2,H=T/2,W=P+1,G=U+1;let K=0,V=0;const se=new C;for(let he=0;he<G;he++){const ue=he*D-k;for(let ze=0;ze<W;ze++){const st=ze*M-F;se[_]=st*w,se[m]=ue*b,se[p]=H,c.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[p]=T>0?1:-1,h.push(se.x,se.y,se.z),u.push(ze/P),u.push(1-he/U),K+=1}}for(let he=0;he<U;he++)for(let ue=0;ue<P;ue++){const ze=d+ue+W*he,st=d+ue+W*(he+1),ht=d+(ue+1)+W*(he+1),it=d+(ue+1)+W*he;l.push(ze,st,it),l.push(st,ht,it),V+=6}o.addGroup(f,V,y),f+=V,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ar(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=ar(i[t]);for(const r in n)e[r]=n[r]}return e}function od(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const ld={clone:ar,merge:Yt};var cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class eh extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new C,Ul=new _e,Il=new _e;class $t extends eh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Il),t.subVectors(Il,Ul)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Hi=1;class ud extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(Gi,Hi,e,t);r.layers=this.layers,this.add(r);const s=new $t(Gi,Hi,e,t);s.layers=this.layers,this.add(s);const a=new $t(Gi,Hi,e,t);a.layers=this.layers,this.add(a);const o=new $t(Gi,Hi,e,t);o.layers=this.layers,this.add(o);const l=new $t(Gi,Hi,e,t);l.layers=this.layers,this.add(l);const c=new $t(Gi,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class th extends Kt{constructor(e=[],t=rr,n,r,s,a,o,l,c,h){super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nh extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new th(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pn(5,5,5),s=new Ct({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:kn});s.uniforms.tEquirect.value=t;const a=new dt(r,s),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Nt),new ud(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class bi extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dd={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(e),this.density=t}clone(){return new jo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kr extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Nr extends Kt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=yt,h=yt,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or extends fn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new nt,Nl=new nt,hs=[],Fl=new ai,fd=new nt,vr=new dt,xr=new Ai;class Rr extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new or(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,fd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Fl.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Fl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),xr.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),e.ray.intersectsSphere(xr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Wi),Nl.multiplyMatrices(n,Wi),vr.matrixWorld=Nl,vr.raycast(e,hs);for(let a=0,o=hs.length;a<o;a++){const l=hs[a];l.instanceId=s,l.object=this,t.push(l)}hs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new or(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nr(new Float32Array(r*this.count),r,this.count,Vs,dn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ma=new C,pd=new C,md=new He;class Zn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ma.subVectors(n,t).cross(pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ma),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||md.getNormalMatrix(e),r=this.coplanarPoint(Ma).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Ai,gd=new _e(.5,.5),us=new C;class Hs{constructor(e=new Zn,t=new Zn,n=new Zn,r=new Zn,s=new Zn,a=new Zn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],w=s[12],b=s[13],S=s[14],R=s[15];if(r[0].setComponents(c-a,f-h,p-g,R-w).normalize(),r[1].setComponents(c+a,f+h,p+g,R+w).normalize(),r[2].setComponents(c+o,f+u,p+_,R+b).normalize(),r[3].setComponents(c-o,f-u,p-_,R-b).normalize(),n)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,f-d,p-m,R-S).normalize();else if(r[4].setComponents(c-l,f-d,p-m,R-S).normalize(),t===Rn)r[5].setComponents(c+l,f+d,p+m,R+S).normalize();else if(t===Ds)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);const t=gd.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(us.x=r.normal.x>0?e.max.x:e.min.x,us.y=r.normal.y>0?e.max.y:e.min.y,us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ih extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Us=new C,Is=new C,Ol=new nt,Mr=new Gs,ds=new Ai,ya=new C,zl=new C;class _d extends bt{constructor(e=new Wt,t=new ih){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Us.fromBufferAttribute(t,r-1),Is.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Us.distanceTo(Is);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(r),ds.radius+=s,e.ray.intersectsSphere(ds)===!1)return;Ol.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(Ol);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),w=h.getX(_+1),b=fs(this,e,Mr,l,p,w,_);b&&t.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=fs(this,e,Mr,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=fs(this,e,Mr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=fs(this,e,Mr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fs(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Us.fromBufferAttribute(o,r),Is.fromBufferAttribute(o,s),t.distanceSqToSegment(Us,Is,ya,zl)>n)return;ya.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ya);if(!(c<e.near||c>e.far))return{distance:c,point:zl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Bl=new C,kl=new C;class vd extends _d{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Bl.fromBufferAttribute(t,r),kl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Bl.distanceTo(kl);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ws extends Kt{constructor(e,t,n=Hn,r,s,a,o=yt,l=yt,c,h=Dr,u=1){if(h!==Dr&&h!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rh extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xs extends Wt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;w(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(f,2));function w(){const S=new C,R=new C;let T=0;const P=(t-e)/n;for(let U=0;U<=s;U++){const y=[],M=U/s,D=M*(t-e)+e;for(let F=0;F<=r;F++){const k=F/r,H=k*l+o,W=Math.sin(H),G=Math.cos(H);R.x=D*W,R.y=-M*n+m,R.z=D*G,u.push(R.x,R.y,R.z),S.set(W,P,G).normalize(),d.push(S.x,S.y,S.z),f.push(k,1-M),y.push(g++)}_.push(y)}for(let U=0;U<r;U++)for(let y=0;y<s;y++){const M=_[y][U],D=_[y+1][U],F=_[y+1][U+1],k=_[y][U+1];(e>0||y!==0)&&(h.push(M,D,k),T+=3),(t>0||y!==s-1)&&(h.push(D,F,k),T+=3)}c.addGroup(p,T,0),p+=T}function b(S){const R=g,T=new _e,P=new C;let U=0;const y=S===!0?e:t,M=S===!0?1:-1;for(let F=1;F<=r;F++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const D=g;for(let F=0;F<=r;F++){const H=F/r*l+o,W=Math.cos(H),G=Math.sin(H);P.x=y*G,P.y=m*M,P.z=y*W,u.push(P.x,P.y,P.z),d.push(0,M,0),T.x=W*.5+.5,T.y=G*.5*M+.5,f.push(T.x,T.y),g++}for(let F=0;F<r;F++){const k=R+F,H=D+F;S===!0?h.push(H,H+1,k):h.push(H+1,H,k),U+=3}c.addGroup(p,U,S===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zo extends Xs{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Zo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ps=new C,ms=new C,Sa=new C,gs=new un;class xd extends Wt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(tr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=gs;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),gs.getNormal(Sa),u[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let w=0;w<3;w++){const b=(w+1)%3,S=u[w],R=u[b],T=gs[h[w]],P=gs[h[b]],U=`${S}_${R}`,y=`${R}_${S}`;y in d&&d[y]?(Sa.dot(d[y].normal)<=s&&(f.push(T.x,T.y,T.z),f.push(P.x,P.y,P.z)),d[y]=null):U in d||(d[U]={index0:c[w],index1:c[b],normal:Sa.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];ps.fromBufferAttribute(o,_),ms.fromBufferAttribute(o,m),f.push(ps.x,ps.y,ps.z),f.push(ms.x,ms.y,ms.z)}this.setAttribute("position",new Rt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Dn extends Wt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const w=p*d-a;for(let b=0;b<c;b++){const S=b*u-s;g.push(S,-w,0),_.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const b=w+c*p,S=w+c*(p+1),R=w+1+c*(p+1),T=w+1+c*p;f.push(b,S,T),f.push(S,R,T)}this.setIndex(f),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vr extends Wt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const w=[],b=p/n;let S=0;p===0&&a===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const T=R/t;u.x=-e*Math.cos(r+T*s)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(r+T*s)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+S,1-b),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){const b=h[p][w+1],S=h[p][w],R=h[p+1][w],T=h[p+1][w+1];(p!==0||a>0)&&f.push(b,S,T),(p!==n-1||l<Math.PI)&&f.push(S,R,T)}this.setIndex(f),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Md extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ko extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yd extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sh extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ba=new nt,Vl=new C,Gl=new C;class ah{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hl=new nt,yr=new C,Ea=new C;class Sd extends ah{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),yr.setFromMatrixPosition(e.matrixWorld),n.position.copy(yr),Ea.copy(n.position),Ea.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ea),n.updateMatrixWorld(),r.makeTranslation(-yr.x,-yr.y,-yr.z),Hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl,n.coordinateSystem,n.reversedDepth)}}class bd extends sh{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Sd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ri extends eh{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ed extends ah{constructor(){super(new Ri(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wd extends sh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Ed}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oh extends Wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Td extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wl=new nt;class Ad{constructor(e,t,n=0,r=1/0){this.ray=new Gs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new $o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wl),this}intersectObject(e,t=!0,n=[]){return Po(e,this,n,t),n.sort(Xl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Po(e[r],this,n,t);return n.sort(Xl),n}}function Xl(i,e){return i.distance-e.distance}function Po(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Po(s[a],e,t,!0)}}class ql{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rd extends Ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Yl(i,e,t,n){const r=Cd(n);switch(t){case Hc:return i*e;case Vs:return i*e/r.components*r.byteLength;case Ho:return i*e/r.components*r.byteLength;case Xc:return i*e*2/r.components*r.byteLength;case Wo:return i*e*2/r.components*r.byteLength;case Wc:return i*e*3/r.components*r.byteLength;case Bt:return i*e*4/r.components*r.byteLength;case Xo:return i*e*4/r.components*r.byteLength;case Ss:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Es:case ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:case io:return Math.max(i,16)*Math.max(e,8)/4;case eo:case no:return Math.max(i,8)*Math.max(e,8)/2;case ro:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case So:case bo:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wo:case To:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cd(i){switch(i){case bn:case Bc:return{byteLength:1,components:1};case Cr:case kc:case si:return{byteLength:2,components:1};case Vo:case Go:return{byteLength:2,components:4};case Hn:case ko:case dn:return{byteLength:4,components:1};case Vc:case Gc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Pd(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ld=`#ifdef USE_ALPHAHASH
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
#endif`,Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
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
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wd=`#ifdef USE_IRIDESCENCE
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
#endif`,Xd=`#ifdef USE_BUMPMAP
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
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ef=`#define PI 3.141592653589793
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
} // validated`,tf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nf=`vec3 transformedNormal = objectNormal;
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
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xf=`#ifdef USE_GRADIENTMAP
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
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
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
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cf=`PhysicalMaterial material;
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
#endif`,Pf=`struct PhysicalMaterial {
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
}`,Df=`
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,If=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vf=`#if defined( USE_POINTS_UV )
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
#endif`,Gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
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
#endif`,$f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gp=`float getShadowMask() {
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
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
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
}`,zp=`#if DEPTH_PACKING == 3200
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
}`,Bp=`#define DISTANCE
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
}`,kp=`#define DISTANCE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#define LAMBERT
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
}`,$p=`#define LAMBERT
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
}`,jp=`#define MATCAP
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
}`,Zp=`#define MATCAP
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
}`,Kp=`#define NORMAL
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
}`,Jp=`#define NORMAL
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
}`,Qp=`#define PHONG
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
}`,em=`#define PHONG
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
}`,tm=`#define STANDARD
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
}`,nm=`#define STANDARD
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
}`,im=`#define TOON
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
}`,rm=`#define TOON
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
}`,sm=`uniform float size;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,lm=`uniform vec3 color;
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
}`,cm=`uniform float rotation;
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
}`,hm=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Dd,alphahash_pars_fragment:Ld,alphamap_fragment:Ud,alphamap_pars_fragment:Id,alphatest_fragment:Nd,alphatest_pars_fragment:Fd,aomap_fragment:Od,aomap_pars_fragment:zd,batching_pars_vertex:Bd,batching_vertex:kd,begin_vertex:Vd,beginnormal_vertex:Gd,bsdfs:Hd,iridescence_fragment:Wd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:qd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:$d,clipping_planes_vertex:jd,color_fragment:Zd,color_pars_fragment:Kd,color_pars_vertex:Jd,color_vertex:Qd,common:ef,cube_uv_reflection_fragment:tf,defaultnormal_vertex:nf,displacementmap_pars_vertex:rf,displacementmap_vertex:sf,emissivemap_fragment:af,emissivemap_pars_fragment:of,colorspace_fragment:lf,colorspace_pars_fragment:cf,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:Ef,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:_f,fog_pars_fragment:vf,gradientmap_pars_fragment:xf,lightmap_pars_fragment:Mf,lights_lambert_fragment:yf,lights_lambert_pars_fragment:Sf,lights_pars_begin:bf,lights_toon_fragment:wf,lights_toon_pars_fragment:Tf,lights_phong_fragment:Af,lights_phong_pars_fragment:Rf,lights_physical_fragment:Cf,lights_physical_pars_fragment:Pf,lights_fragment_begin:Df,lights_fragment_maps:Lf,lights_fragment_end:Uf,logdepthbuf_fragment:If,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Of,map_fragment:zf,map_pars_fragment:Bf,map_particle_fragment:kf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Gf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:Wf,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:Yf,morphtarget_vertex:$f,normal_fragment_begin:jf,normal_fragment_maps:Zf,normal_pars_fragment:Kf,normal_pars_vertex:Jf,normal_vertex:Qf,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:rp,opaque_fragment:sp,packing:ap,premultiplied_alpha_fragment:op,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:_p,skinning_pars_vertex:vp,skinning_vertex:xp,skinnormal_vertex:Mp,specularmap_fragment:yp,specularmap_pars_fragment:Sp,tonemapping_fragment:bp,tonemapping_pars_fragment:Ep,transmission_fragment:wp,transmission_pars_fragment:Tp,uv_pars_fragment:Ap,uv_pars_vertex:Rp,uv_vertex:Cp,worldpos_vertex:Pp,background_vert:Dp,background_frag:Lp,backgroundCube_vert:Up,backgroundCube_frag:Ip,cube_vert:Np,cube_frag:Fp,depth_vert:Op,depth_frag:zp,distanceRGBA_vert:Bp,distanceRGBA_frag:kp,equirect_vert:Vp,equirect_frag:Gp,linedashed_vert:Hp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:$p,meshmatcap_vert:jp,meshmatcap_frag:Zp,meshnormal_vert:Kp,meshnormal_frag:Jp,meshphong_vert:Qp,meshphong_frag:em,meshphysical_vert:tm,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:rm,points_vert:sm,points_frag:am,shadow_vert:om,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},ae={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Tn={basic:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new fe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Yt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Yt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new fe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Yt([ae.points,ae.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Yt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Yt([ae.common,ae.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Yt([ae.sprite,ae.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Yt([ae.common,ae.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Yt([ae.lights,ae.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Tn.physical={uniforms:Yt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const _s={r:0,b:0,g:0},pi=new Cn,um=new nt;function dm(i,e,t,n,r,s,a){const o=new fe(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1;const R=g(b);R===null?p(o,l):R&&R.isColor&&(p(R,1),S=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){const R=g(S);R&&(R.isCubeTexture||R.mapping===ks)?(h===void 0&&(h=new dt(new Pn(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:ar(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),pi.copy(S.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(pi)),h.material.toneMapped=et.getTransfer(R.colorSpace)!==ot,(u!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new dt(new Dn(2,2),new Ct({name:"BackgroundMaterial",uniforms:ar(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=et.getTransfer(R.colorSpace)!==ot,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(_s,Qc(i)),n.buffers.color.setClear(_s.r,_s.g,_s.b,S,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m,dispose:w}}function fm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(M,D,F,k,H){let W=!1;const G=u(k,F,D);s!==G&&(s=G,c(s.object)),W=f(M,k,F,H),W&&g(M,k,F,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(M,D,F,k),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,D,F){const k=F.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let W=H[D.id];W===void 0&&(W={},H[D.id]=W);let G=W[k];return G===void 0&&(G=d(l()),W[k]=G),G}function d(M){const D=[],F=[],k=[];for(let H=0;H<t;H++)D[H]=0,F[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,D,F,k){const H=s.attributes,W=D.attributes;let G=0;const K=F.getAttributes();for(const V in K)if(K[V].location>=0){const he=H[V];let ue=W[V];if(ue===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),he===void 0||he.attribute!==ue||ue&&he.data!==ue.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function g(M,D,F,k){const H={},W=D.attributes;let G=0;const K=F.getAttributes();for(const V in K)if(K[V].location>=0){let he=W[V];he===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const ue={};ue.attribute=he,he&&he.data&&(ue.data=he.data),H[V]=ue,G++}s.attributes=H,s.attributesNum=G,s.index=k}function _(){const M=s.newAttributes;for(let D=0,F=M.length;D<F;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const F=s.newAttributes,k=s.enabledAttributes,H=s.attributeDivisors;F[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),H[M]!==D&&(i.vertexAttribDivisor(M,D),H[M]=D)}function w(){const M=s.newAttributes,D=s.enabledAttributes;for(let F=0,k=D.length;F<k;F++)D[F]!==M[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function b(M,D,F,k,H,W,G){G===!0?i.vertexAttribIPointer(M,D,F,H,W):i.vertexAttribPointer(M,D,F,k,H,W)}function S(M,D,F,k){_();const H=k.attributes,W=F.getAttributes(),G=D.defaultAttributeValues;for(const K in W){const V=W[K];if(V.location>=0){let se=H[K];if(se===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){const he=se.normalized,ue=se.itemSize,ze=e.get(se);if(ze===void 0)continue;const st=ze.buffer,ht=ze.type,it=ze.bytesPerElement,Y=ht===i.INT||ht===i.UNSIGNED_INT||se.gpuType===ko;if(se.isInterleavedBufferAttribute){const Z=se.data,me=Z.stride,Ne=se.offset;if(Z.isInstancedInterleavedBuffer){for(let Te=0;Te<V.locationSize;Te++)p(V.location+Te,Z.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Te=0;Te<V.locationSize;Te++)m(V.location+Te);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Te=0;Te<V.locationSize;Te++)b(V.location+Te,ue/V.locationSize,ht,he,me*it,(Ne+ue/V.locationSize*Te)*it,Y)}else{if(se.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)p(V.location+Z,se.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Z=0;Z<V.locationSize;Z++)m(V.location+Z);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Z=0;Z<V.locationSize;Z++)b(V.location+Z,ue/V.locationSize,ht,he,ue*it,ue/V.locationSize*Z*it,Y)}}else if(G!==void 0){const he=G[K];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(V.location,he);break;case 3:i.vertexAttrib3fv(V.location,he);break;case 4:i.vertexAttrib4fv(V.location,he);break;default:i.vertexAttrib1fv(V.location,he)}}}}w()}function R(){U();for(const M in n){const D=n[M];for(const F in D){const k=D[F];for(const H in k)h(k[H].object),delete k[H];delete D[F]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const F in D){const k=D[F];for(const H in k)h(k[H].object),delete k[H];delete D[F]}delete n[M.id]}function P(M){for(const D in n){const F=n[D];if(F[M.id]===void 0)continue;const k=F[M.id];for(const H in k)h(k[H].object),delete k[H];delete F[M.id]}}function U(){y(),a=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function pm(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Bt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const U=P===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==bn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==dn&&!U)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:R,maxSamples:T}}function gm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Zn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||r;return r=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const w=s?0:n,b=w*4;let S=p.clippingState||null;l.value=S,S=h(g,d,b,f);for(let R=0;R!==b;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=f;b!==_;++b,S+=4)a.copy(u[b]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function _m(i){let e=new WeakMap;function t(a,o){return o===Ka?a.mapping=rr:o===Ja&&(a.mapping=sr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ka||o===Ja)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new nh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Zi=4,$l=[.125,.215,.35,.446,.526,.582],Mi=20,wa=new Ri,jl=new fe;let Ta=null,Aa=0,Ra=0,Ca=!1;const vi=(1+Math.sqrt(5))/2,Xi=1/vi,Zl=[new C(-vi,Xi,0),new C(vi,Xi,0),new C(-Xi,0,vi),new C(Xi,0,vi),new C(0,vi,-Xi),new C(0,vi,Xi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],vm=new C;class Kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=vm}=s;Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,Aa,Ra),this._renderer.xr.enabled=Ca,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:si,format:Bt,colorSpace:ri,depthBuffer:!1},r=Jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xm(s)),this._blurMaterial=Mm(s,e,t)}return r}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,r,s){const l=new $t(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(jl),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const _=new oi({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),m=new dt(new Pn,_);let p=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,p=!0):(_.color.copy(jl),p=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));const R=this._cubeSize;vs(r,S*R,b>2?R:0,R,R),u.setRenderTarget(r),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===rr||e.mapping===sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Zl[(r-s-1)%Zl.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Mi;m>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let w=0;for(let P=0;P<Mi;++P){const U=P/_,y=Math.exp(-U*U/2);p.push(y),P===0?w+=y:P<m&&(w+=2*y)}for(let P=0;P<p.length;P++)p[P]=p[P]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const S=this._sizeLods[r],R=3*S*(r>b-Zi?r-b+Zi:0),T=4*(this._cubeSize-S);vs(t,R,T,3*S,2*S),l.setRenderTarget(t),l.render(u,wa)}}function xm(i){const e=[],t=[],n=[];let r=i;const s=i-Zi+1+$l.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Zi?l=$l[a-i+Zi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),b=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let T=0;T<f;T++){const P=T%3*2/3-1,U=T>2?0:-1,y=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];w.set(y,_*g*T),b.set(d,m*g*T);const M=[T,T,T,T,T,T];S.set(M,p*g*T)}const R=new Wt;R.setAttribute("position",new fn(w,_)),R.setAttribute("uv",new fn(b,m)),R.setAttribute("faceIndex",new fn(S,p)),e.push(R),r>Zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jl(i,e,t){const n=new mn(i,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Mm(i,e,t){const n=new Float32Array(Mi),r=new C(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ql(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ec(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}function ym(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ka||l===Ja,h=l===rr||l===sr;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Kl(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new Kl(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Sm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ir("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bm(i,e,t,n){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let b=0,S=w.length;b<S;b+=3){const R=w[b+0],T=w[b+1],P=w[b+2];d.push(R,T,T,P,P,R)}}else if(g!==void 0){const w=g.array;_=g.version;for(let b=0,S=w.length/3-1;b<S;b+=3){const R=b+0,T=b+1,P=b+2;d.push(R,T,T,P,P,R)}}else return;const m=new($c(d)?Jc:Kc)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Em(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function wm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Tm(i,e,t){const n=new WeakMap,r=new Ye;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let S=o.attributes.position.count*b,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*R*4*u),P=new jc(T,S,R,u);P.type=dn,P.needsUpdate=!0;const U=b*4;for(let M=0;M<u;M++){const D=m[M],F=p[M],k=w[M],H=S*R*4*M;for(let W=0;W<D.count;W++){const G=W*U;f===!0&&(r.fromBufferAttribute(D,W),T[H+G+0]=r.x,T[H+G+1]=r.y,T[H+G+2]=r.z,T[H+G+3]=0),g===!0&&(r.fromBufferAttribute(F,W),T[H+G+4]=r.x,T[H+G+5]=r.y,T[H+G+6]=r.z,T[H+G+7]=0),_===!0&&(r.fromBufferAttribute(k,W),T[H+G+8]=r.x,T[H+G+9]=r.y,T[H+G+10]=r.z,T[H+G+11]=k.itemSize===4?r.w:1)}}d={count:u,texture:P,size:new _e(S,R)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Am(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const ch=new Kt,tc=new Ws(1,1),hh=new jc,uh=new ju,dh=new th,nc=[],ic=[],rc=new Float32Array(16),sc=new Float32Array(9),ac=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=nc[r];if(s===void 0&&(s=new Float32Array(r),nc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qs(i,e){let t=ic[e];t===void 0&&(t=new Int32Array(e),ic[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),Dt(t,n)}}function Um(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;sc.set(n),i.uniformMatrix3fv(this.addr,!1,sc),Dt(t,n)}}function Im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;rc.set(n),i.uniformMatrix4fv(this.addr,!1,rc),Dt(t,n)}}function Nm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Hm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(tc.compareFunction=Yc,s=tc):s=ch,t.setTexture2D(e||s,r)}function Wm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||uh,r)}function Xm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||dh,r)}function qm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||hh,r)}function Ym(i){switch(i){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Dm;case 35674:return Lm;case 35675:return Um;case 35676:return Im;case 5124:case 35670:return Nm;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return zm;case 5125:return Bm;case 36294:return km;case 36295:return Vm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}function $m(i,e){i.uniform1fv(this.addr,e)}function jm(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function Zm(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function Km(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function Jm(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qm(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function eg(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tg(i,e){i.uniform1iv(this.addr,e)}function ng(i,e){i.uniform2iv(this.addr,e)}function ig(i,e){i.uniform3iv(this.addr,e)}function rg(i,e){i.uniform4iv(this.addr,e)}function sg(i,e){i.uniform1uiv(this.addr,e)}function ag(i,e){i.uniform2uiv(this.addr,e)}function og(i,e){i.uniform3uiv(this.addr,e)}function lg(i,e){i.uniform4uiv(this.addr,e)}function cg(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ch,s[a])}function hg(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||uh,s[a])}function ug(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||dh,s[a])}function dg(i,e,t){const n=this.cache,r=e.length,s=qs(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||hh,s[a])}function fg(i){switch(i){case 5126:return $m;case 35664:return jm;case 35665:return Zm;case 35666:return Km;case 35674:return Jm;case 35675:return Qm;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return rg;case 5125:return sg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}class pg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ym(t.type)}}class mg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fg(t.type)}}class gg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function oc(i,e){i.seq.push(e),i.map[e.id]=e}function _g(i,e,t){const n=i.name,r=n.length;for(Pa.lastIndex=0;;){const s=Pa.exec(n),a=Pa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){oc(t,c===void 0?new pg(o,i,e):new mg(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new gg(o),oc(t,u)),t=u}}}class Ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);_g(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function lc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vg=37297;let xg=0;function Mg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const cc=new He;function yg(i){et._getMatrix(cc,et.workingColorSpace,i);const e=`mat3( ${cc.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Ps:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Mg(i.getShaderSource(e),o)}else return s}function Sg(i,e){const t=yg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bg(i,e){let t;switch(e){case hu:t="Linear";break;case uu:t="Reinhard";break;case du:t="Cineon";break;case zo:t="ACESFilmic";break;case pu:t="AgX";break;case Bo:t="Neutral";break;case fu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xs=new C;function Eg(){et.getLuminanceCoefficients(xs);const i=xs.x.toFixed(4),e=xs.y.toFixed(4),t=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function Tg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ag(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Er(i){return i!==""}function uc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(Rg,Pg)}const Cg=new Map;function Pg(i,e){let t=Xe[e];if(t===void 0){const n=Cg.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(i){return i.replace(Dg,Lg)}function Lg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Ug(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ig(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case sr:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ng(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Fg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oc:e="ENVMAP_BLENDING_MULTIPLY";break;case lu:e="ENVMAP_BLENDING_MIX";break;case cu:e="ENVMAP_BLENDING_ADD";break}return e}function Og(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ug(t),c=Ig(t),h=Ng(t),u=Fg(t),d=Og(t),f=wg(t),g=Tg(s),_=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Er).join(`
`),p.length>0&&(p+=`
`)):(m=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),p=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Vn?bg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Sg("linearToOutputTexel",t.outputColorSpace),Eg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),a=Do(a),a=uc(a,t),a=dc(a,t),o=Do(o),o=uc(o,t),o=dc(o,t),a=fc(a),o=fc(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+m+a,S=w+p+o,R=lc(r,r.VERTEX_SHADER,b),T=lc(r,r.FRAGMENT_SHADER,S);r.attachShader(_,R),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(D){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(R)||"",H=r.getShaderInfoLog(T)||"",W=F.trim(),G=k.trim(),K=H.trim();let V=!0,se=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,T);else{const he=hc(r,R,"vertex"),ue=hc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+he+`
`+ue)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||K==="")&&(se=!1);se&&(D.diagnostics={runnable:V,programLog:W,vertexShader:{log:G,prefix:m},fragmentShader:{log:K,prefix:p}})}r.deleteShader(R),r.deleteShader(T),U=new Ts(r,_),y=Ag(r,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,vg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let Bg=0;class kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vg(e),t.set(e,n)),n}}class Vg{constructor(e){this.id=Bg++,this.code=e,this.usedTimes=0}}function Gg(i,e,t,n,r,s,a){const o=new $o,l=new kg,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,D,F,k){const H=F.fog,W=k.geometry,G=y.isMeshStandardMaterial?F.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),V=K&&K.mapping===ks?K.image.height:null,se=g[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=he!==void 0?he.length:0;let ze=0;W.morphAttributes.position!==void 0&&(ze=1),W.morphAttributes.normal!==void 0&&(ze=2),W.morphAttributes.color!==void 0&&(ze=3);let st,ht,it,Y;if(se){const rt=Tn[se];st=rt.vertexShader,ht=rt.fragmentShader}else st=y.vertexShader,ht=y.fragmentShader,l.update(y),it=l.getVertexShaderID(y),Y=l.getFragmentShaderID(y);const Z=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ne=k.isInstancedMesh===!0,Te=k.isBatchedMesh===!0,Ze=!!y.map,kt=!!y.matcap,A=!!K,pt=!!y.aoMap,Be=!!y.lightMap,Ue=!!y.bumpMap,xe=!!y.normalMap,mt=!!y.displacementMap,Me=!!y.emissiveMap,We=!!y.metalnessMap,Lt=!!y.roughnessMap,Mt=y.anisotropy>0,E=y.clearcoat>0,v=y.dispersion>0,O=y.iridescence>0,q=y.sheen>0,j=y.transmission>0,X=Mt&&!!y.anisotropyMap,we=E&&!!y.clearcoatMap,ie=E&&!!y.clearcoatNormalMap,Se=E&&!!y.clearcoatRoughnessMap,be=O&&!!y.iridescenceMap,te=O&&!!y.iridescenceThicknessMap,ce=q&&!!y.sheenColorMap,Le=q&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,oe=!!y.specularColorMap,Ge=!!y.specularIntensityMap,L=j&&!!y.transmissionMap,ne=j&&!!y.thicknessMap,re=!!y.gradientMap,pe=!!y.alphaMap,J=y.alphaTest>0,$=!!y.alphaHash,ve=!!y.extensions;let Oe=Vn;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const ut={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:st,fragmentShader:ht,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Te,batchingColor:Te&&k._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&k.instanceColor!==null,instancingMorph:Ne&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ri,alphaToCoverage:!!y.alphaToCoverage,map:Ze,matcap:kt,envMap:A,envMapMode:A&&K.mapping,envMapCubeUVHeight:V,aoMap:pt,lightMap:Be,bumpMap:Ue,normalMap:xe,displacementMap:d&&mt,emissiveMap:Me,normalMapObjectSpace:xe&&y.normalMapType===vu,normalMapTangentSpace:xe&&y.normalMapType===qc,metalnessMap:We,roughnessMap:Lt,anisotropy:Mt,anisotropyMap:X,clearcoat:E,clearcoatMap:we,clearcoatNormalMap:ie,clearcoatRoughnessMap:Se,dispersion:v,iridescence:O,iridescenceMap:be,iridescenceThicknessMap:te,sheen:q,sheenColorMap:ce,sheenRoughnessMap:Le,specularMap:Ee,specularColorMap:oe,specularIntensityMap:Ge,transmission:j,transmissionMap:L,thicknessMap:ne,gradientMap:re,opaque:y.transparent===!1&&y.blending===er&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:J,alphaHash:$,combine:y.combine,mapUv:Ze&&_(y.map.channel),aoMapUv:pt&&_(y.aoMap.channel),lightMapUv:Be&&_(y.lightMap.channel),bumpMapUv:Ue&&_(y.bumpMap.channel),normalMapUv:xe&&_(y.normalMap.channel),displacementMapUv:mt&&_(y.displacementMap.channel),emissiveMapUv:Me&&_(y.emissiveMap.channel),metalnessMapUv:We&&_(y.metalnessMap.channel),roughnessMapUv:Lt&&_(y.roughnessMap.channel),anisotropyMapUv:X&&_(y.anisotropyMap.channel),clearcoatMapUv:we&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(y.sheenRoughnessMap.channel),specularMapUv:Ee&&_(y.specularMap.channel),specularColorMapUv:oe&&_(y.specularColorMap.channel),specularIntensityMapUv:Ge&&_(y.specularIntensityMap.channel),transmissionMapUv:L&&_(y.transmissionMap.channel),thicknessMapUv:ne&&_(y.thicknessMap.channel),alphaMapUv:pe&&_(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(xe||Mt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Ze||pe),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ze&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===ot,decodeVideoTextureEmissive:Me&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yn,flipSided:y.side===Zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ve&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&y.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(w(M,y),b(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function w(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const M=g[y.type];let D;if(M){const F=Tn[M];D=ld.clone(F.uniforms)}else D=y.uniforms;return D}function R(y,M){let D;for(let F=0,k=h.length;F<k;F++){const H=h[F];if(H.cacheKey===M){D=H,++D.usedTimes;break}}return D===void 0&&(D=new zg(i,M,y,s),h.push(D)),D}function T(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function P(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:U}}function Hg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Wg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Wg),n.length>1&&n.sort(d||mc),r.length>1&&r.sort(d||mc)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function Xg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new gc,i.set(n,[a])):r>=s.length?(a=new gc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function qg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new fe};break;case"SpotLight":t={position:new C,direction:new C,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Yg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $g=0;function jg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zg(i){const e=new qg,t=Yg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const r=new C,s=new nt,a=new nt;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,b=0,S=0,R=0,T=0,P=0;c.sort(jg);for(let y=0,M=c.length;y<M;y++){const D=c[y],F=D.color,k=D.intensity,H=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*k,u+=F.g*k,d+=F.b*k;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],k);P++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,V=t.get(D);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=D.shadow.matrix,w++}n.directional[f]=G,f++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(F).multiplyScalar(k),G.distance=H,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[_]=G;const K=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,K.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=K.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=W,S++}_++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(F).multiplyScalar(k),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=G,m++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const K=D.shadow,V=t.get(D);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=G,g++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(k),G.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==w||U.numPointShadows!==b||U.numSpotShadows!==S||U.numSpotMaps!==R||U.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,U.directionalLength=f,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=w,U.numPointShadows=b,U.numSpotShadows=S,U.numSpotMaps=R,U.numLightProbes=P,n.version=$g++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const b=c[p];if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(b.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function _c(i){const e=new Zg(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Kg(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _c(i),e.set(r,[o])):s>=a.length?(o=new _c(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qg=`uniform sampler2D shadow_pass;
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
}`;function e_(i,e,t){let n=new Hs;const r=new _e,s=new _e,a=new Ye,o=new Ko({depthPacking:_u}),l=new yd,c={},h=t.maxTextureSize,u={[ii]:Zt,[Zt]:ii,[yn]:yn},d=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Jg,fragmentShader:Qg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let p=this.type;this.render=function(T,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(kn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=p!==zn&&this.type===zn,H=p===zn&&this.type!==zn;for(let W=0,G=T.length;W<G;W++){const K=T[W],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const se=V.getFrameExtents();if(r.multiply(se),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/se.x),r.x=s.x*se.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/se.y),r.y=s.y*se.y,V.mapSize.y=s.y)),V.map===null||k===!0||H===!0){const ue=this.type!==zn?{minFilter:yt,magFilter:yt}:{};V.map!==null&&V.map.dispose(),V.map=new mn(r.x,r.y,ue),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const he=V.getViewportCount();for(let ue=0;ue<he;ue++){const ze=V.getViewport(ue);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),F.viewport(a),V.updateMatrices(K,ue),n=V.getFrustum(),S(P,U,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===zn&&w(V,U),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,D)};function w(T,P){const U=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new mn(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,U,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,U,f,_,null)}function b(T,P,U,y){let M=null;const D=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=U.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=M.uuid,k=P.uuid;let H=c[F];H===void 0&&(H={},c[F]=H);let W=H[k];W===void 0&&(W=M.clone(),H[k]=W,P.addEventListener("dispose",R)),M=W}if(M.visible=P.visible,M.wireframe=P.wireframe,y===zn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=i.properties.get(M);F.light=U}return M}function S(T,P,U,y,M){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);const k=e.update(T),H=T.material;if(Array.isArray(H)){const W=k.groups;for(let G=0,K=W.length;G<K;G++){const V=W[G],se=H[V.materialIndex];if(se&&se.visible){const he=b(T,se,y,M);T.onBeforeShadow(i,T,P,U,k,he,V),i.renderBufferDirect(U,null,k,he,T,V),T.onAfterShadow(i,T,P,U,k,he,V)}}}else if(H.visible){const W=b(T,H,y,M);T.onBeforeShadow(i,T,P,U,k,W,null),i.renderBufferDirect(U,null,k,W,T,null),T.onAfterShadow(i,T,P,U,k,W,null)}}const F=T.children;for(let k=0,H=F.length;k<H;k++)S(F[k],P,U,y,M)}function R(T){T.target.removeEventListener("dispose",R);for(const U in c){const y=c[U],M=T.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const t_={[Wa]:Xa,[qa]:ja,[Ya]:Za,[ir]:$a,[Xa]:Wa,[ja]:qa,[Za]:Ya,[$a]:ir};function n_(i,e){function t(){let L=!1;const ne=new Ye;let re=null;const pe=new Ye(0,0,0,0);return{setMask:function(J){re!==J&&!L&&(i.colorMask(J,J,J,J),re=J)},setLocked:function(J){L=J},setClear:function(J,$,ve,Oe,ut){ut===!0&&(J*=Oe,$*=Oe,ve*=Oe),ne.set(J,$,ve,Oe),pe.equals(ne)===!1&&(i.clearColor(J,$,ve,Oe),pe.copy(ne))},reset:function(){L=!1,re=null,pe.set(-1,0,0,0)}}}function n(){let L=!1,ne=!1,re=null,pe=null,J=null;return{setReversed:function($){if(ne!==$){const ve=e.get("EXT_clip_control");$?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ne=$;const Oe=J;J=null,this.setClear(Oe)}},getReversed:function(){return ne},setTest:function($){$?Z(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function($){re!==$&&!L&&(i.depthMask($),re=$)},setFunc:function($){if(ne&&($=t_[$]),pe!==$){switch($){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case ja:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=$}},setLocked:function($){L=$},setClear:function($){J!==$&&(ne&&($=1-$),i.clearDepth($),J=$)},reset:function(){L=!1,re=null,pe=null,J=null,ne=!1}}}function r(){let L=!1,ne=null,re=null,pe=null,J=null,$=null,ve=null,Oe=null,ut=null;return{setTest:function(rt){L||(rt?Z(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(rt){ne!==rt&&!L&&(i.stencilMask(rt),ne=rt)},setFunc:function(rt,Ln,En){(re!==rt||pe!==Ln||J!==En)&&(i.stencilFunc(rt,Ln,En),re=rt,pe=Ln,J=En)},setOp:function(rt,Ln,En){($!==rt||ve!==Ln||Oe!==En)&&(i.stencilOp(rt,Ln,En),$=rt,ve=Ln,Oe=En)},setLocked:function(rt){L=rt},setClear:function(rt){ut!==rt&&(i.clearStencil(rt),ut=rt)},reset:function(){L=!1,ne=null,re=null,pe=null,J=null,$=null,ve=null,Oe=null,ut=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,b=null,S=null,R=null,T=null,P=new fe(0,0,0),U=0,y=!1,M=null,D=null,F=null,k=null,H=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=K>=2);let se=null,he={};const ue=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),st=new Ye().fromArray(ue),ht=new Ye().fromArray(ze);function it(L,ne,re,pe){const J=new Uint8Array(4),$=i.createTexture();i.bindTexture(L,$),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<re;ve++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(ne+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return $}const Y={};Y[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(ir),Ue(!1),xe(ul),Z(i.CULL_FACE),pt(kn);function Z(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function me(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ne(L,ne){return u[L]!==ne?(i.bindFramebuffer(L,ne),u[L]=ne,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ne),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Te(L,ne){let re=f,pe=!1;if(L){re=d.get(ne),re===void 0&&(re=[],d.set(ne,re));const J=L.textures;if(re.length!==J.length||re[0]!==i.COLOR_ATTACHMENT0){for(let $=0,ve=J.length;$<ve;$++)re[$]=i.COLOR_ATTACHMENT0+$;re.length=J.length,pe=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,pe=!0);pe&&i.drawBuffers(re)}function Ze(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const kt={[xi]:i.FUNC_ADD,[Xh]:i.FUNC_SUBTRACT,[qh]:i.FUNC_REVERSE_SUBTRACT};kt[Yh]=i.MIN,kt[$h]=i.MAX;const A={[jh]:i.ZERO,[Zh]:i.ONE,[Kh]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[iu]:i.SRC_ALPHA_SATURATE,[tu]:i.DST_COLOR,[Qh]:i.DST_ALPHA,[Jh]:i.ONE_MINUS_SRC_COLOR,[Ha]:i.ONE_MINUS_SRC_ALPHA,[nu]:i.ONE_MINUS_DST_COLOR,[eu]:i.ONE_MINUS_DST_ALPHA,[ru]:i.CONSTANT_COLOR,[su]:i.ONE_MINUS_CONSTANT_COLOR,[au]:i.CONSTANT_ALPHA,[ou]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(L,ne,re,pe,J,$,ve,Oe,ut,rt){if(L===kn){_===!0&&(me(i.BLEND),_=!1);return}if(_===!1&&(Z(i.BLEND),_=!0),L!==Wh){if(L!==m||rt!==y){if((p!==xi||S!==xi)&&(i.blendEquation(i.FUNC_ADD),p=xi,S=xi),rt)switch(L){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,b=null,R=null,T=null,P.set(0,0,0),U=0,m=L,y=rt}return}J=J||ne,$=$||re,ve=ve||pe,(ne!==p||J!==S)&&(i.blendEquationSeparate(kt[ne],kt[J]),p=ne,S=J),(re!==w||pe!==b||$!==R||ve!==T)&&(i.blendFuncSeparate(A[re],A[pe],A[$],A[ve]),w=re,b=pe,R=$,T=ve),(Oe.equals(P)===!1||ut!==U)&&(i.blendColor(Oe.r,Oe.g,Oe.b,ut),P.copy(Oe),U=ut),m=L,y=!1}function Be(L,ne){L.side===yn?me(i.CULL_FACE):Z(i.CULL_FACE);let re=L.side===Zt;ne&&(re=!re),Ue(re),L.blending===er&&L.transparent===!1?pt(kn):pt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function xe(L){L!==Gh?(Z(i.CULL_FACE),L!==D&&(L===ul?i.cullFace(i.BACK):L===Hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),D=L}function mt(L){L!==F&&(G&&i.lineWidth(L),F=L)}function Me(L,ne,re){L?(Z(i.POLYGON_OFFSET_FILL),(k!==ne||H!==re)&&(i.polygonOffset(ne,re),k=ne,H=re)):me(i.POLYGON_OFFSET_FILL)}function We(L){L?Z(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function Lt(L){L===void 0&&(L=i.TEXTURE0+W-1),se!==L&&(i.activeTexture(L),se=L)}function Mt(L,ne,re){re===void 0&&(se===null?re=i.TEXTURE0+W-1:re=se);let pe=he[re];pe===void 0&&(pe={type:void 0,texture:void 0},he[re]=pe),(pe.type!==L||pe.texture!==ne)&&(se!==re&&(i.activeTexture(re),se=re),i.bindTexture(L,ne||Y[L]),pe.type=L,pe.texture=ne)}function E(){const L=he[se];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(L){st.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),st.copy(L))}function Le(L){ht.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ht.copy(L))}function Ee(L,ne){let re=c.get(ne);re===void 0&&(re=new WeakMap,c.set(ne,re));let pe=re.get(L);pe===void 0&&(pe=i.getUniformBlockIndex(ne,L.name),re.set(L,pe))}function oe(L,ne){const pe=c.get(ne).get(L);l.get(ne)!==pe&&(i.uniformBlockBinding(ne,pe,L.__bindingPointIndex),l.set(ne,pe))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},se=null,he={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,b=null,S=null,R=null,T=null,P=new fe(0,0,0),U=0,y=!1,M=null,D=null,F=null,k=null,H=null,st.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:me,bindFramebuffer:Ne,drawBuffers:Te,useProgram:Ze,setBlending:pt,setMaterial:Be,setFlipSided:Ue,setCullFace:xe,setLineWidth:mt,setPolygonOffset:Me,setScissorTest:We,activeTexture:Lt,bindTexture:Mt,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:be,texImage3D:te,updateUBOMapping:Ee,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:Se,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:we,scissor:ce,viewport:Le,reset:Ge}}function i_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):Ls("canvas")}function _(E,v,O){let q=1;const j=Mt(E);if((j.width>O||j.height>O)&&(q=O/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(q*j.width),we=Math.floor(q*j.height);u===void 0&&(u=g(X,we));const ie=v?g(X,we):u;return ie.width=X,ie.height=we,ie.getContext("2d").drawImage(E,0,0,X,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+we+")."),ie}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,v,O,q,j=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=v;if(v===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),v===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){const we=j?Ps:et.getTransfer(q);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=we===ot?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(E,v){let O;return E?v===null||v===Hn||v===Pr?O=i.DEPTH24_STENCIL8:v===dn?O=i.DEPTH32F_STENCIL8:v===Cr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hn||v===Pr?O=i.DEPTH_COMPONENT24:v===dn?O=i.DEPTH_COMPONENT32F:v===Cr&&(O=i.DEPTH_COMPONENT16),O}function R(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==yt&&E.minFilter!==Nt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function T(E){const v=E.target;v.removeEventListener("dispose",T),U(v),v.isVideoTexture&&h.delete(v)}function P(E){const v=E.target;v.removeEventListener("dispose",P),M(v)}function U(E){const v=n.get(E);if(v.__webglInit===void 0)return;const O=E.source,q=d.get(O);if(q){const j=q[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(E),Object.keys(q).length===0&&d.delete(O)}n.remove(E)}function y(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const O=E.source,q=d.get(O);delete q[v.__cacheKey],a.memory.textures--}function M(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let j=0;j<v.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[q][j]);else i.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)i.deleteFramebuffer(v.__webglFramebuffer[q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=E.textures;for(let q=0,j=O.length;q<j;q++){const X=n.get(O[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(E)}let D=0;function F(){D=0}function k(){const E=D;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),D+=1,E}function H(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function W(E,v){const O=n.get(E);if(E.isVideoTexture&&We(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,E,v);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function G(E,v){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){Y(O,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function K(E,v){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){Y(O,E,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function V(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Z(O,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const se={[Cs]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},he={[yt]:i.NEAREST,[mu]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[Js]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},ue={[xu]:i.NEVER,[wu]:i.ALWAYS,[Mu]:i.LESS,[Yc]:i.LEQUAL,[yu]:i.EQUAL,[Eu]:i.GEQUAL,[Su]:i.GREATER,[bu]:i.NOTEQUAL};function ze(E,v){if(v.type===dn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Nt||v.magFilter===Js||v.magFilter===Yr||v.magFilter===Qn||v.minFilter===Nt||v.minFilter===Js||v.minFilter===Yr||v.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,se[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,se[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,se[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,he[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,he[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===yt||v.minFilter!==Yr&&v.minFilter!==Qn||v.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function st(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",T));const q=v.source;let j=d.get(q);j===void 0&&(j={},d.set(q,j));const X=H(v);if(X!==E.__cacheKey){j[X]===void 0&&(j[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[X].usedTimes++;const we=j[E.__cacheKey];we!==void 0&&(j[E.__cacheKey].usedTimes--,we.usedTimes===0&&y(v)),E.__cacheKey=X,E.__webglTexture=j[X].texture}return O}function ht(E,v,O){return Math.floor(Math.floor(E/O)/v)}function it(E,v,O,q){const X=E.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,q,v.data);else{X.sort((te,ce)=>te.start-ce.start);let we=0;for(let te=1;te<X.length;te++){const ce=X[we],Le=X[te],Ee=ce.start+ce.count,oe=ht(Le.start,v.width,4),Ge=ht(ce.start,v.width,4);Le.start<=Ee+1&&oe===Ge&&ht(Le.start+Le.count-1,v.width,4)===oe?ce.count=Math.max(ce.count,Le.start+Le.count-ce.start):(++we,X[we]=Le)}X.length=we+1;const ie=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let te=0,ce=X.length;te<ce;te++){const Le=X[te],Ee=Math.floor(Le.start/4),oe=Math.ceil(Le.count/4),Ge=Ee%v.width,L=Math.floor(Ee/v.width),ne=oe,re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ge,L,ne,re,O,q,v.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function Y(E,v,O){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);const j=st(E,v),X=v.source;t.bindTexture(q,E.__webglTexture,i.TEXTURE0+O);const we=n.get(X);if(X.version!==we.__version||j===!0){t.activeTexture(i.TEXTURE0+O);const ie=et.getPrimaries(et.workingColorSpace),Se=v.colorSpace===Kn?null:et.getPrimaries(v.colorSpace),be=v.colorSpace===Kn||ie===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let te=_(v.image,!1,r.maxTextureSize);te=Lt(v,te);const ce=s.convert(v.format,v.colorSpace),Le=s.convert(v.type);let Ee=b(v.internalFormat,ce,Le,v.colorSpace,v.isVideoTexture);ze(q,v);let oe;const Ge=v.mipmaps,L=v.isVideoTexture!==!0,ne=we.__version===void 0||j===!0,re=X.dataReady,pe=R(v,te);if(v.isDepthTexture)Ee=S(v.format===Lr,v.type),ne&&(L?t.texStorage2D(i.TEXTURE_2D,1,Ee,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ee,te.width,te.height,0,ce,Le,null));else if(v.isDataTexture)if(Ge.length>0){L&&ne&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,Ge[0].width,Ge[0].height);for(let J=0,$=Ge.length;J<$;J++)oe=Ge[J],L?re&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Le,oe.data):t.texImage2D(i.TEXTURE_2D,J,Ee,oe.width,oe.height,0,ce,Le,oe.data);v.generateMipmaps=!1}else L?(ne&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,te.width,te.height),re&&it(v,te,ce,Le)):t.texImage2D(i.TEXTURE_2D,0,Ee,te.width,te.height,0,ce,Le,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ee,Ge[0].width,Ge[0].height,te.depth);for(let J=0,$=Ge.length;J<$;J++)if(oe=Ge[J],v.format!==Bt)if(ce!==null)if(L){if(re)if(v.layerUpdates.size>0){const ve=Yl(oe.width,oe.height,v.format,v.type);for(const Oe of v.layerUpdates){const ut=oe.data.subarray(Oe*ve/oe.data.BYTES_PER_ELEMENT,(Oe+1)*ve/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Oe,oe.width,oe.height,1,ce,ut)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,te.depth,ce,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ee,oe.width,oe.height,te.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,te.depth,ce,Le,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Ee,oe.width,oe.height,te.depth,0,ce,Le,oe.data)}else{L&&ne&&t.texStorage2D(i.TEXTURE_2D,pe,Ee,Ge[0].width,Ge[0].height);for(let J=0,$=Ge.length;J<$;J++)oe=Ge[J],v.format!==Bt?ce!==null?L?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Ee,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?re&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Le,oe.data):t.texImage2D(i.TEXTURE_2D,J,Ee,oe.width,oe.height,0,ce,Le,oe.data)}else if(v.isDataArrayTexture)if(L){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ee,te.width,te.height,te.depth),re)if(v.layerUpdates.size>0){const J=Yl(te.width,te.height,v.format,v.type);for(const $ of v.layerUpdates){const ve=te.data.subarray($*J/te.data.BYTES_PER_ELEMENT,($+1)*J/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,ce,Le,ve)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,Le,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,te.width,te.height,te.depth,0,ce,Le,te.data);else if(v.isData3DTexture)L?(ne&&t.texStorage3D(i.TEXTURE_3D,pe,Ee,te.width,te.height,te.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,Le,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,te.width,te.height,te.depth,0,ce,Le,te.data);else if(v.isFramebufferTexture){if(ne)if(L)t.texStorage2D(i.TEXTURE_2D,pe,Ee,te.width,te.height);else{let J=te.width,$=te.height;for(let ve=0;ve<pe;ve++)t.texImage2D(i.TEXTURE_2D,ve,Ee,J,$,0,ce,Le,null),J>>=1,$>>=1}}else if(Ge.length>0){if(L&&ne){const J=Mt(Ge[0]);t.texStorage2D(i.TEXTURE_2D,pe,Ee,J.width,J.height)}for(let J=0,$=Ge.length;J<$;J++)oe=Ge[J],L?re&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ce,Le,oe):t.texImage2D(i.TEXTURE_2D,J,Ee,ce,Le,oe);v.generateMipmaps=!1}else if(L){if(ne){const J=Mt(te);t.texStorage2D(i.TEXTURE_2D,pe,Ee,J.width,J.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Le,te)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ce,Le,te);m(v)&&p(q),we.__version=X.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Z(E,v,O){if(v.image.length!==6)return;const q=st(E,v),j=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const X=n.get(j);if(j.version!==X.__version||q===!0){t.activeTexture(i.TEXTURE0+O);const we=et.getPrimaries(et.workingColorSpace),ie=v.colorSpace===Kn?null:et.getPrimaries(v.colorSpace),Se=v.colorSpace===Kn||we===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,ce=[];for(let $=0;$<6;$++)!be&&!te?ce[$]=_(v.image[$],!0,r.maxCubemapSize):ce[$]=te?v.image[$].image:v.image[$],ce[$]=Lt(v,ce[$]);const Le=ce[0],Ee=s.convert(v.format,v.colorSpace),oe=s.convert(v.type),Ge=b(v.internalFormat,Ee,oe,v.colorSpace),L=v.isVideoTexture!==!0,ne=X.__version===void 0||q===!0,re=j.dataReady;let pe=R(v,Le);ze(i.TEXTURE_CUBE_MAP,v);let J;if(be){L&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ge,Le.width,Le.height);for(let $=0;$<6;$++){J=ce[$].mipmaps;for(let ve=0;ve<J.length;ve++){const Oe=J[ve];v.format!==Bt?Ee!==null?L?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,Oe.width,Oe.height,Ee,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,Ge,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,Oe.width,Oe.height,Ee,oe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,Ge,Oe.width,Oe.height,0,Ee,oe,Oe.data)}}}else{if(J=v.mipmaps,L&&ne){J.length>0&&pe++;const $=Mt(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(te){L?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ce[$].width,ce[$].height,Ee,oe,ce[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,ce[$].width,ce[$].height,0,Ee,oe,ce[$].data);for(let ve=0;ve<J.length;ve++){const ut=J[ve].image[$].image;L?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,ut.width,ut.height,Ee,oe,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,Ge,ut.width,ut.height,0,Ee,oe,ut.data)}}else{L?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ee,oe,ce[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,Ee,oe,ce[$]);for(let ve=0;ve<J.length;ve++){const Oe=J[ve];L?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,Ee,oe,Oe.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,Ge,Ee,oe,Oe.image[$])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),X.__version=j.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function me(E,v,O,q,j,X){const we=s.convert(O.format,O.colorSpace),ie=s.convert(O.type),Se=b(O.internalFormat,we,ie,O.colorSpace),be=n.get(v),te=n.get(O);if(te.__renderTarget=v,!be.__hasExternalTextures){const ce=Math.max(1,v.width>>X),Le=Math.max(1,v.height>>X);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,X,Se,ce,Le,v.depth,0,we,ie,null):t.texImage2D(j,X,Se,ce,Le,0,we,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,te.__webglTexture,0,mt(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,te.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(E,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const q=v.depthTexture,j=q&&q.isDepthTexture?q.type:null,X=S(v.stencilBuffer,j),we=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=mt(v);Me(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,X,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,E)}else{const q=v.textures;for(let j=0;j<q.length;j++){const X=q[j],we=s.convert(X.format,X.colorSpace),ie=s.convert(X.type),Se=b(X.internalFormat,we,ie,X.colorSpace),be=mt(v);O&&Me(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Se,v.width,v.height):Me(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,Se,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Se,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const j=q.__webglTexture,X=mt(v);if(v.depthTexture.format===Dr)Me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(v.depthTexture.format===Lr)Me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ze(E){const v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=q}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=E.texture.mipmaps;q&&q.length>0?Te(v.__webglFramebuffer[0],E):Te(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=i.createRenderbuffer(),Ne(v.__webglDepthbuffer[q],E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ne(v.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(E,v,O){const q=n.get(E);v!==void 0&&me(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ze(E)}function A(E){const v=E.texture,O=n.get(E),q=n.get(v);E.addEventListener("dispose",P);const j=E.textures,X=E.isWebGLCubeRenderTarget===!0,we=j.length>1;if(we||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ie]=[];for(let Se=0;Se<v.mipmaps.length;Se++)O.__webglFramebuffer[ie][Se]=i.createFramebuffer()}else O.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ie=0;ie<v.mipmaps.length;ie++)O.__webglFramebuffer[ie]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(we)for(let ie=0,Se=j.length;ie<Se;ie++){const be=n.get(j[ie]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Me(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){const Se=j[ie];O.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ie]);const be=s.convert(Se.format,Se.colorSpace),te=s.convert(Se.type),ce=b(Se.internalFormat,be,te,Se.colorSpace,E.isXRRenderTarget===!0),Le=mt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ce,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,O.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ze(i.TEXTURE_CUBE_MAP,v);for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)me(O.__webglFramebuffer[ie][Se],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se);else me(O.__webglFramebuffer[ie],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ie=0,Se=j.length;ie<Se;ie++){const be=j[ie],te=n.get(be);let ce=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,te.__webglTexture),ze(ce,be),me(O.__webglFramebuffer,E,be,i.COLOR_ATTACHMENT0+ie,ce,0),m(be)&&p(ce)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ie=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),ze(ie,v),v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)me(O.__webglFramebuffer[Se],E,v,i.COLOR_ATTACHMENT0,ie,Se);else me(O.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,ie,0);m(v)&&p(ie),t.unbindTexture()}E.depthBuffer&&Ze(E)}function pt(E){const v=E.textures;for(let O=0,q=v.length;O<q;O++){const j=v[O];if(m(j)){const X=w(E),we=n.get(j).__webglTexture;t.bindTexture(X,we),p(X),t.unbindTexture()}}}const Be=[],Ue=[];function xe(E){if(E.samples>0){if(Me(E)===!1){const v=E.textures,O=E.width,q=E.height;let j=i.COLOR_BUFFER_BIT;const X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(E),ie=v.length>1;if(ie)for(let be=0;be<v.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Se=E.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let be=0;be<v.length;be++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[be]);const te=n.get(v[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,j,i.NEAREST),l===!0&&(Be.length=0,Ue.length=0,Be.push(i.COLOR_ATTACHMENT0+be),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Be.push(X),Ue.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let be=0;be<v.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,we.__webglColorRenderbuffer[be]);const te=n.get(v[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function mt(E){return Math.min(r.maxSamples,E.samples)}function Me(E){const v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function We(E){const v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function Lt(E,v){const O=E.colorSpace,q=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==ri&&O!==Kn&&(et.getTransfer(O)===ot?(q!==Bt||j!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=kt,this.setupRenderTarget=A,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Me}function r_(i,e){function t(n,r=Kn){let s;const a=et.getTransfer(r);if(n===bn)return i.UNSIGNED_BYTE;if(n===Vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bc)return i.BYTE;if(n===kc)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===Hc)return i.ALPHA;if(n===Wc)return i.RGB;if(n===Bt)return i.RGBA;if(n===Dr)return i.DEPTH_COMPONENT;if(n===Lr)return i.DEPTH_STENCIL;if(n===Vs)return i.RED;if(n===Ho)return i.RED_INTEGER;if(n===Xc)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===Xo)return i.RGBA_INTEGER;if(n===Ss||n===bs||n===Es||n===ws)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===to||n===no||n===io)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro||n===so||n===ao)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ro||n===so)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ao)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===Mo||n===yo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===oo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_o)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yo)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===So||n===bo||n===Eo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===So)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wo||n===To||n===Ao||n===Ro)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===wo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===To)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a_=`
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

}`;class o_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new rh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ct({vertexShader:s_,fragmentShader:a_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l_ extends Ti{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new o_,p={},w=t.getContextAttributes();let b=null,S=null;const R=[],T=[],P=new _e;let U=null;const y=new $t;y.viewport=new Ye;const M=new $t;M.viewport=new Ye;const D=[y,M],F=new Td;let k=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=R[Y];return Z===void 0&&(Z=new xa,R[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=R[Y];return Z===void 0&&(Z=new xa,R[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=R[Y];return Z===void 0&&(Z=new xa,R[Y]=Z),Z.getHandSpace()};function W(Y){const Z=T.indexOf(Y.inputSource);if(Z===-1)return;const me=R[Z];me!==void 0&&(me.update(Y.inputSource,Y.frame,c||a),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",K);for(let Y=0;Y<R.length;Y++){const Z=T[Y];Z!==null&&(T[Y]=null,R[Y].disconnect(Z))}k=null,H=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(b),f=null,d=null,u=null,r=null,S=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",G),r.addEventListener("inputsourceschange",K),w.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ne=null,Te=null;w.depth&&(Te=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=w.stencil?Lr:Dr,Ne=w.stencil?Pr:Hn);const Ze={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ze),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new mn(d.textureWidth,d.textureHeight,{format:Bt,type:bn,depthTexture:new Ws(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new mn(f.framebufferWidth,f.framebufferHeight,{format:Bt,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Y){for(let Z=0;Z<Y.removed.length;Z++){const me=Y.removed[Z],Ne=T.indexOf(me);Ne>=0&&(T[Ne]=null,R[Ne].disconnect(me))}for(let Z=0;Z<Y.added.length;Z++){const me=Y.added[Z];let Ne=T.indexOf(me);if(Ne===-1){for(let Ze=0;Ze<R.length;Ze++)if(Ze>=T.length){T.push(me),Ne=Ze;break}else if(T[Ze]===null){T[Ze]=me,Ne=Ze;break}if(Ne===-1)break}const Te=R[Ne];Te&&Te.connect(me)}}const V=new C,se=new C;function he(Y,Z,me){V.setFromMatrixPosition(Z.matrixWorld),se.setFromMatrixPosition(me.matrixWorld);const Ne=V.distanceTo(se),Te=Z.projectionMatrix.elements,Ze=me.projectionMatrix.elements,kt=Te[14]/(Te[10]-1),A=Te[14]/(Te[10]+1),pt=(Te[9]+1)/Te[5],Be=(Te[9]-1)/Te[5],Ue=(Te[8]-1)/Te[0],xe=(Ze[8]+1)/Ze[0],mt=kt*Ue,Me=kt*xe,We=Ne/(-Ue+xe),Lt=We*-Ue;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Lt),Y.translateZ(We),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Te[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Mt=kt+We,E=A+We,v=mt-Lt,O=Me+(Ne-Lt),q=pt*A/E*Mt,j=Be*A/E*Mt;Y.projectionMatrix.makePerspective(v,O,q,j,Mt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ue(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Z=Y.near,me=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(me=m.depthFar)),F.near=M.near=y.near=Z,F.far=M.far=y.far=me,(k!==F.near||H!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,H=F.far),F.layers.mask=Y.layers.mask|6,y.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const Ne=Y.parent,Te=F.cameras;ue(F,Ne);for(let Ze=0;Ze<Te.length;Ze++)ue(Te[Ze],Ne);Te.length===2?he(F,y,M):F.projectionMatrix.copy(y.projectionMatrix),ze(Y,F,Ne)};function ze(Y,Z,me){me===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ur*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let st=null;function ht(Y,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const me=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ne=!1;me.length!==F.cameras.length&&(F.cameras.length=0,Ne=!0);for(let A=0;A<me.length;A++){const pt=me[A];let Be=null;if(f!==null)Be=f.getViewport(pt);else{const xe=u.getViewSubImage(d,pt);Be=xe.viewport,A===0&&(e.setRenderTargetTextures(S,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(S))}let Ue=D[A];Ue===void 0&&(Ue=new $t,Ue.layers.enable(A),Ue.viewport=new Ye,D[A]=Ue),Ue.matrix.fromArray(pt.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(pt.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Be.x,Be.y,Be.width,Be.height),A===0&&(F.matrix.copy(Ue.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ne===!0&&F.cameras.push(Ue)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const A=u.getDepthInformation(me[0]);A&&A.isValid&&A.texture&&m.init(A,r.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let A=0;A<me.length;A++){const pt=me[A].camera;if(pt){let Be=p[pt];Be||(Be=new rh,p[pt]=Be);const Ue=u.getCameraImage(pt);Be.sourceTexture=Ue}}}}for(let me=0;me<R.length;me++){const Ne=T[me],Te=R[me];Ne!==null&&Te!==void 0&&Te.update(Ne,Z,c||a)}st&&st(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const it=new lh;it.setAnimationLoop(ht),this.setAnimationLoop=function(Y){st=Y},this.dispose=function(){}}}const mi=new Cn,c_=new nt;function h_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),b=w.envMap,S=w.envMapRotation;b&&(m.envMap.value=b,mi.copy(S),mi.x*=-1,mi.y*=-1,mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(mi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function u_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const S=b.program;n.uniformBlockBinding(w,S)}function c(w,b){let S=r[w.id];S===void 0&&(g(w),S=h(w),r[w.id]=S,w.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(w,R);const T=e.render.frame;s[w.id]!==T&&(d(w),s[w.id]=T)}function h(w){const b=u();w.__bindingPointIndex=b;const S=i.createBuffer(),R=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const b=r[w.id],S=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,P=S.length;T<P;T++){const U=Array.isArray(S[T])?S[T]:[S[T]];for(let y=0,M=U.length;y<M;y++){const D=U[y];if(f(D,T,y,R)===!0){const F=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let H=0;for(let W=0;W<k.length;W++){const G=k[W],K=_(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+H,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,b,S,R){const T=w.value,P=b+"_"+S;if(R[P]===void 0)return typeof T=="number"||typeof T=="boolean"?R[P]=T:R[P]=T.clone(),!0;{const U=R[P];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return R[P]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function g(w){const b=w.uniforms;let S=0;const R=16;for(let P=0,U=b.length;P<U;P++){const y=Array.isArray(b[P])?b[P]:[b[P]];for(let M=0,D=y.length;M<D;M++){const F=y[M],k=Array.isArray(F.value)?F.value:[F.value];for(let H=0,W=k.length;H<W;H++){const G=k[H],K=_(G),V=S%R,se=V%K.boundary,he=V+se;S+=se,he!==0&&R-he<K.storage&&(S+=R-he),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=K.storage}}}const T=S%R;return T>0&&(S+=R-T),w.__size=S,w.__cache={},this}function _(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class d_{constructor(e={}){const{canvas:t=Gu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=sn;let T=0,P=0,U=null,y=-1,M=null;const D=new Ye,F=new Ye;let k=null;const H=new fe(0);let W=0,G=t.width,K=t.height,V=1,se=null,he=null;const ue=new Ye(0,0,G,K),ze=new Ye(0,0,G,K);let st=!1;const ht=new Hs;let it=!1,Y=!1;const Z=new nt,me=new C,Ne=new Ye,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function kt(){return U===null?V:1}let A=n;function pt(x,I){return t.getContext(x,I)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oo}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",J,!1),A===null){const I="webgl2";if(A=pt(I,x),A===null)throw pt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Be,Ue,xe,mt,Me,We,Lt,Mt,E,v,O,q,j,X,we,ie,Se,be,te,ce,Le,Ee,oe,Ge;function L(){Be=new Sm(A),Be.init(),Ee=new r_(A,Be),Ue=new mm(A,Be,e,Ee),xe=new n_(A,Be),Ue.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),mt=new wm(A),Me=new Hg,We=new i_(A,Be,xe,Me,Ue,Ee,mt),Lt=new _m(S),Mt=new ym(S),E=new Pd(A),oe=new fm(A,E),v=new bm(A,E,mt,oe),O=new Am(A,v,E,mt),te=new Tm(A,Ue,We),ie=new gm(Me),q=new Gg(S,Lt,Mt,Be,Ue,oe,ie),j=new h_(S,Me),X=new Xg,we=new Kg(Be),be=new dm(S,Lt,Mt,xe,O,f,l),Se=new e_(S,O,Ue),Ge=new u_(A,mt,Ue,xe),ce=new pm(A,Be,mt),Le=new Em(A,Be,mt),mt.programs=q.programs,S.capabilities=Ue,S.extensions=Be,S.properties=Me,S.renderLists=X,S.shadowMap=Se,S.state=xe,S.info=mt}L();const ne=new l_(S,A);this.xr=ne,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const x=Be.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Be.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(G,K,!1))},this.getSize=function(x){return x.set(G,K)},this.setSize=function(x,I,z=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,K=I,t.width=Math.floor(x*V),t.height=Math.floor(I*V),z===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(G*V,K*V).floor()},this.setDrawingBufferSize=function(x,I,z){G=x,K=I,V=z,t.width=Math.floor(x*z),t.height=Math.floor(I*z),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(ue)},this.setViewport=function(x,I,z,B){x.isVector4?ue.set(x.x,x.y,x.z,x.w):ue.set(x,I,z,B),xe.viewport(D.copy(ue).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(ze)},this.setScissor=function(x,I,z,B){x.isVector4?ze.set(x.x,x.y,x.z,x.w):ze.set(x,I,z,B),xe.scissor(F.copy(ze).multiplyScalar(V).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(x){xe.setScissorTest(st=x)},this.setOpaqueSort=function(x){se=x},this.setTransparentSort=function(x){he=x},this.getClearColor=function(x){return x.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,z=!0){let B=0;if(x){let N=!1;if(U!==null){const ee=U.texture.format;N=ee===Xo||ee===Wo||ee===Ho}if(N){const ee=U.texture.type,le=ee===bn||ee===Hn||ee===Cr||ee===Pr||ee===Vo||ee===Go,ge=be.getClearColor(),de=be.getClearAlpha(),Pe=ge.r,Ie=ge.g,Ae=ge.b;le?(g[0]=Pe,g[1]=Ie,g[2]=Ae,g[3]=de,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=Pe,_[1]=Ie,_[2]=Ae,_[3]=de,A.clearBufferiv(A.COLOR,0,_))}else B|=A.COLOR_BUFFER_BIT}I&&(B|=A.DEPTH_BUFFER_BIT),z&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",J,!1),be.dispose(),X.dispose(),we.dispose(),Me.dispose(),Lt.dispose(),Mt.dispose(),O.dispose(),oe.dispose(),Ge.dispose(),q.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",En),ne.removeEventListener("sessionend",rl),li.stop()};function re(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const x=mt.autoReset,I=Se.enabled,z=Se.autoUpdate,B=Se.needsUpdate,N=Se.type;L(),mt.autoReset=x,Se.enabled=I,Se.autoUpdate=z,Se.needsUpdate=B,Se.type=N}function J(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $(x){const I=x.target;I.removeEventListener("dispose",$),ve(I)}function ve(x){Oe(x),Me.remove(x)}function Oe(x){const I=Me.get(x).programs;I!==void 0&&(I.forEach(function(z){q.releaseProgram(z)}),x.isShaderMaterial&&q.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,z,B,N,ee){I===null&&(I=Te);const le=N.isMesh&&N.matrixWorld.determinant()<0,ge=Uh(x,I,z,B,N);xe.setMaterial(B,le);let de=z.index,Pe=1;if(B.wireframe===!0){if(de=v.getWireframeAttribute(z),de===void 0)return;Pe=2}const Ie=z.drawRange,Ae=z.attributes.position;let $e=Ie.start*Pe,at=(Ie.start+Ie.count)*Pe;ee!==null&&($e=Math.max($e,ee.start*Pe),at=Math.min(at,(ee.start+ee.count)*Pe)),de!==null?($e=Math.max($e,0),at=Math.min(at,de.count)):Ae!=null&&($e=Math.max($e,0),at=Math.min(at,Ae.count));const xt=at-$e;if(xt<0||xt===1/0)return;oe.setup(N,B,ge,z,de);let ft,ct=ce;if(de!==null&&(ft=E.get(de),ct=Le,ct.setIndex(ft)),N.isMesh)B.wireframe===!0?(xe.setLineWidth(B.wireframeLinewidth*kt()),ct.setMode(A.LINES)):ct.setMode(A.TRIANGLES);else if(N.isLine){let Ce=B.linewidth;Ce===void 0&&(Ce=1),xe.setLineWidth(Ce*kt()),N.isLineSegments?ct.setMode(A.LINES):N.isLineLoop?ct.setMode(A.LINE_LOOP):ct.setMode(A.LINE_STRIP)}else N.isPoints?ct.setMode(A.POINTS):N.isSprite&&ct.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ir("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))ct.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ce=N._multiDrawStarts,gt=N._multiDrawCounts,Je=N._multiDrawCount,en=de?E.get(de).bytesPerElement:1,Pi=Me.get(B).currentProgram.getUniforms();for(let tn=0;tn<Je;tn++)Pi.setValue(A,"_gl_DrawID",tn),ct.render(Ce[tn]/en,gt[tn])}else if(N.isInstancedMesh)ct.renderInstances($e,xt,N.count);else if(z.isInstancedBufferGeometry){const Ce=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gt=Math.min(z.instanceCount,Ce);ct.renderInstances($e,xt,gt)}else ct.render($e,xt)};function ut(x,I,z){x.transparent===!0&&x.side===yn&&x.forceSinglePass===!1?(x.side=Zt,x.needsUpdate=!0,qr(x,I,z),x.side=ii,x.needsUpdate=!0,qr(x,I,z),x.side=yn):qr(x,I,z)}this.compile=function(x,I,z=null){z===null&&(z=x),p=we.get(z),p.init(I),b.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==z&&x.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const ge=ee[le];ut(ge,z,N),B.add(ge)}else ut(ee,z,N),B.add(ee)}),p=b.pop(),B},this.compileAsync=function(x,I,z=null){const B=this.compile(x,I,z);return new Promise(N=>{function ee(){if(B.forEach(function(le){Me.get(le).currentProgram.isReady()&&B.delete(le)}),B.size===0){N(x);return}setTimeout(ee,10)}Be.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let rt=null;function Ln(x){rt&&rt(x)}function En(){li.stop()}function rl(){li.start()}const li=new lh;li.setAnimationLoop(Ln),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(x){rt=x,ne.setAnimationLoop(x),x===null?li.stop():li.start()},ne.addEventListener("sessionstart",En),ne.addEventListener("sessionend",rl),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(I),I=ne.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,I,U),p=we.get(x,b.length),p.init(I),b.push(p),Z.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ht.setFromProjectionMatrix(Z,Rn,I.reversedDepth),Y=this.localClippingEnabled,it=ie.init(this.clippingPlanes,Y),m=X.get(x,w.length),m.init(),w.push(m),ne.enabled===!0&&ne.isPresenting===!0){const ee=S.xr.getDepthSensingMesh();ee!==null&&Zs(ee,I,-1/0,S.sortObjects)}Zs(x,I,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(se,he),Ze=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ze&&be.addToRenderList(m,x),this.info.render.frame++,it===!0&&ie.beginShadows();const z=p.state.shadowsArray;Se.render(z,x,I),it===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(p.setupLights(),I.isArrayCamera){const ee=I.cameras;if(N.length>0)for(let le=0,ge=ee.length;le<ge;le++){const de=ee[le];al(B,N,x,de)}Ze&&be.render(x);for(let le=0,ge=ee.length;le<ge;le++){const de=ee[le];sl(m,x,de,de.viewport)}}else N.length>0&&al(B,N,x,I),Ze&&be.render(x),sl(m,x,I);U!==null&&P===0&&(We.updateMultisampleRenderTarget(U),We.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(S,x,I),oe.resetDefaultState(),y=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],it===!0&&ie.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Zs(x,I,z,B){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ht.intersectsSprite(x)){B&&Ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Z);const le=O.update(x),ge=x.material;ge.visible&&m.push(x,le,ge,z,Ne.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ht.intersectsObject(x))){const le=O.update(x),ge=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ne.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ne.copy(le.boundingSphere.center)),Ne.applyMatrix4(x.matrixWorld).applyMatrix4(Z)),Array.isArray(ge)){const de=le.groups;for(let Pe=0,Ie=de.length;Pe<Ie;Pe++){const Ae=de[Pe],$e=ge[Ae.materialIndex];$e&&$e.visible&&m.push(x,le,$e,z,Ne.z,Ae)}}else ge.visible&&m.push(x,le,ge,z,Ne.z,null)}}const ee=x.children;for(let le=0,ge=ee.length;le<ge;le++)Zs(ee[le],I,z,B)}function sl(x,I,z,B){const N=x.opaque,ee=x.transmissive,le=x.transparent;p.setupLightsView(z),it===!0&&ie.setGlobalState(S.clippingPlanes,z),B&&xe.viewport(D.copy(B)),N.length>0&&Xr(N,I,z),ee.length>0&&Xr(ee,I,z),le.length>0&&Xr(le,I,z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function al(x,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new mn(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?si:bn,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ee=p.state.transmissionRenderTarget[B.id],le=B.viewport||D;ee.setSize(le.z*S.transmissionResolutionScale,le.w*S.transmissionResolutionScale);const ge=S.getRenderTarget(),de=S.getActiveCubeFace(),Pe=S.getActiveMipmapLevel();S.setRenderTarget(ee),S.getClearColor(H),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),Ze&&be.render(z);const Ie=S.toneMapping;S.toneMapping=Vn;const Ae=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),it===!0&&ie.setGlobalState(S.clippingPlanes,B),Xr(x,z,B),We.updateMultisampleRenderTarget(ee),We.updateRenderTargetMipmap(ee),Be.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let at=0,xt=I.length;at<xt;at++){const ft=I[at],ct=ft.object,Ce=ft.geometry,gt=ft.material,Je=ft.group;if(gt.side===yn&&ct.layers.test(B.layers)){const en=gt.side;gt.side=Zt,gt.needsUpdate=!0,ol(ct,z,B,Ce,gt,Je),gt.side=en,gt.needsUpdate=!0,$e=!0}}$e===!0&&(We.updateMultisampleRenderTarget(ee),We.updateRenderTargetMipmap(ee))}S.setRenderTarget(ge,de,Pe),S.setClearColor(H,W),Ae!==void 0&&(B.viewport=Ae),S.toneMapping=Ie}function Xr(x,I,z){const B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ee=x.length;N<ee;N++){const le=x[N],ge=le.object,de=le.geometry,Pe=le.group;let Ie=le.material;Ie.allowOverride===!0&&B!==null&&(Ie=B),ge.layers.test(z.layers)&&ol(ge,I,z,de,Ie,Pe)}}function ol(x,I,z,B,N,ee){x.onBeforeRender(S,I,z,B,N,ee),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,I,z,B,x,ee),N.transparent===!0&&N.side===yn&&N.forceSinglePass===!1?(N.side=Zt,N.needsUpdate=!0,S.renderBufferDirect(z,I,B,N,x,ee),N.side=ii,N.needsUpdate=!0,S.renderBufferDirect(z,I,B,N,x,ee),N.side=yn):S.renderBufferDirect(z,I,B,N,x,ee),x.onAfterRender(S,I,z,B,N,ee)}function qr(x,I,z){I.isScene!==!0&&(I=Te);const B=Me.get(x),N=p.state.lights,ee=p.state.shadowsArray,le=N.state.version,ge=q.getParameters(x,N.state,ee,I,z),de=q.getProgramCacheKey(ge);let Pe=B.programs;B.environment=x.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(x.isMeshStandardMaterial?Mt:Lt).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Pe===void 0&&(x.addEventListener("dispose",$),Pe=new Map,B.programs=Pe);let Ie=Pe.get(de);if(Ie!==void 0){if(B.currentProgram===Ie&&B.lightsStateVersion===le)return cl(x,ge),Ie}else ge.uniforms=q.getUniforms(x),x.onBeforeCompile(ge,S),Ie=q.acquireProgram(ge,de),Pe.set(de,Ie),B.uniforms=ge.uniforms;const Ae=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ae.clippingPlanes=ie.uniform),cl(x,ge),B.needsLights=Nh(x),B.lightsStateVersion=le,B.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Ie,B.uniformsList=null,Ie}function ll(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=Ts.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function cl(x,I){const z=Me.get(x);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Uh(x,I,z,B,N){I.isScene!==!0&&(I=Te),We.resetTextureUnits();const ee=I.fog,le=B.isMeshStandardMaterial?I.environment:null,ge=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ri,de=(B.isMeshStandardMaterial?Mt:Lt).get(B.envMap||le),Pe=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ie=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!z.morphAttributes.position,$e=!!z.morphAttributes.normal,at=!!z.morphAttributes.color;let xt=Vn;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(xt=S.toneMapping);const ft=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ct=ft!==void 0?ft.length:0,Ce=Me.get(B),gt=p.state.lights;if(it===!0&&(Y===!0||x!==M)){const Xt=x===M&&B.id===y;ie.setState(B,x,Xt)}let Je=!1;B.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==gt.state.version||Ce.outputColorSpace!==ge||N.isBatchedMesh&&Ce.batching===!1||!N.isBatchedMesh&&Ce.batching===!0||N.isBatchedMesh&&Ce.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ce.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ce.instancing===!1||!N.isInstancedMesh&&Ce.instancing===!0||N.isSkinnedMesh&&Ce.skinning===!1||!N.isSkinnedMesh&&Ce.skinning===!0||N.isInstancedMesh&&Ce.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ce.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ce.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ce.instancingMorph===!1&&N.morphTexture!==null||Ce.envMap!==de||B.fog===!0&&Ce.fog!==ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ie.numPlanes||Ce.numIntersection!==ie.numIntersection)||Ce.vertexAlphas!==Pe||Ce.vertexTangents!==Ie||Ce.morphTargets!==Ae||Ce.morphNormals!==$e||Ce.morphColors!==at||Ce.toneMapping!==xt||Ce.morphTargetsCount!==ct)&&(Je=!0):(Je=!0,Ce.__version=B.version);let en=Ce.currentProgram;Je===!0&&(en=qr(B,I,N));let Pi=!1,tn=!1,fr=!1;const _t=en.getUniforms(),ln=Ce.uniforms;if(xe.useProgram(en.program)&&(Pi=!0,tn=!0,fr=!0),B.id!==y&&(y=B.id,tn=!0),Pi||M!==x){xe.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),_t.setValue(A,"projectionMatrix",x.projectionMatrix),_t.setValue(A,"viewMatrix",x.matrixWorldInverse);const Jt=_t.map.cameraPosition;Jt!==void 0&&Jt.setValue(A,me.setFromMatrixPosition(x.matrixWorld)),Ue.logarithmicDepthBuffer&&_t.setValue(A,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&_t.setValue(A,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,tn=!0,fr=!0)}if(N.isSkinnedMesh){_t.setOptional(A,N,"bindMatrix"),_t.setOptional(A,N,"bindMatrixInverse");const Xt=N.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),_t.setValue(A,"boneTexture",Xt.boneTexture,We))}N.isBatchedMesh&&(_t.setOptional(A,N,"batchingTexture"),_t.setValue(A,"batchingTexture",N._matricesTexture,We),_t.setOptional(A,N,"batchingIdTexture"),_t.setValue(A,"batchingIdTexture",N._indirectTexture,We),_t.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&_t.setValue(A,"batchingColorTexture",N._colorsTexture,We));const cn=z.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&te.update(N,z,en),(tn||Ce.receiveShadow!==N.receiveShadow)&&(Ce.receiveShadow=N.receiveShadow,_t.setValue(A,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ln.envMap.value=de,ln.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(ln.envMapIntensity.value=I.environmentIntensity),tn&&(_t.setValue(A,"toneMappingExposure",S.toneMappingExposure),Ce.needsLights&&Ih(ln,fr),ee&&B.fog===!0&&j.refreshFogUniforms(ln,ee),j.refreshMaterialUniforms(ln,B,V,K,p.state.transmissionRenderTarget[x.id]),Ts.upload(A,ll(Ce),ln,We)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ts.upload(A,ll(Ce),ln,We),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&_t.setValue(A,"center",N.center),_t.setValue(A,"modelViewMatrix",N.modelViewMatrix),_t.setValue(A,"normalMatrix",N.normalMatrix),_t.setValue(A,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Xt=B.uniformsGroups;for(let Jt=0,Ks=Xt.length;Jt<Ks;Jt++){const ci=Xt[Jt];Ge.update(ci,en),Ge.bind(ci,en)}}return en}function Ih(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Nh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,I,z){const B=Me.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Me.get(x.texture).__webglTexture=I,Me.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const z=Me.get(x);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0};const Fh=A.createFramebuffer();this.setRenderTarget=function(x,I=0,z=0){U=x,T=I,P=z;let B=!0,N=null,ee=!1,le=!1;if(x){const de=Me.get(x);if(de.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(A.FRAMEBUFFER,null),B=!1;else if(de.__webglFramebuffer===void 0)We.setupRenderTarget(x);else if(de.__hasExternalTextures)We.rebindTextures(x,Me.get(x.texture).__webglTexture,Me.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ae=x.depthTexture;if(de.__boundDepthTexture!==Ae){if(Ae!==null&&Me.has(Ae)&&(x.width!==Ae.image.width||x.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(x)}}const Pe=x.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(le=!0);const Ie=Me.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?N=Ie[I][z]:N=Ie[I],ee=!0):x.samples>0&&We.useMultisampledRTT(x)===!1?N=Me.get(x).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[z]:N=Ie,D.copy(x.viewport),F.copy(x.scissor),k=x.scissorTest}else D.copy(ue).multiplyScalar(V).floor(),F.copy(ze).multiplyScalar(V).floor(),k=st;if(z!==0&&(N=Fh),xe.bindFramebuffer(A.FRAMEBUFFER,N)&&B&&xe.drawBuffers(x,N),xe.viewport(D),xe.scissor(F),xe.setScissorTest(k),ee){const de=Me.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,z)}else if(le){const de=I;for(let Pe=0;Pe<x.textures.length;Pe++){const Ie=Me.get(x.textures[Pe]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Pe,Ie.__webglTexture,z,de)}}else if(x!==null&&z!==0){const de=Me.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,de.__webglTexture,z)}y=-1},this.readRenderTargetPixels=function(x,I,z,B,N,ee,le,ge=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de){xe.bindFramebuffer(A.FRAMEBUFFER,de);try{const Pe=x.textures[ge],Ie=Pe.format,Ae=Pe.type;if(!Ue.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-B&&z>=0&&z<=x.height-N&&(x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ge),A.readPixels(I,z,B,N,Ee.convert(Ie),Ee.convert(Ae),ee))}finally{const Pe=U!==null?Me.get(U).__webglFramebuffer:null;xe.bindFramebuffer(A.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(x,I,z,B,N,ee,le,ge=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de)if(I>=0&&I<=x.width-B&&z>=0&&z<=x.height-N){xe.bindFramebuffer(A.FRAMEBUFFER,de);const Pe=x.textures[ge],Ie=Pe.format,Ae=Pe.type;if(!Ue.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,$e),A.bufferData(A.PIXEL_PACK_BUFFER,ee.byteLength,A.STREAM_READ),x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ge),A.readPixels(I,z,B,N,Ee.convert(Ie),Ee.convert(Ae),0);const at=U!==null?Me.get(U).__webglFramebuffer:null;xe.bindFramebuffer(A.FRAMEBUFFER,at);const xt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Hu(A,xt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,$e),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ee),A.deleteBuffer($e),A.deleteSync(xt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,z=0){const B=Math.pow(2,-z),N=Math.floor(x.image.width*B),ee=Math.floor(x.image.height*B),le=I!==null?I.x:0,ge=I!==null?I.y:0;We.setTexture2D(x,0),A.copyTexSubImage2D(A.TEXTURE_2D,z,0,0,le,ge,N,ee),xe.unbindTexture()};const Oh=A.createFramebuffer(),zh=A.createFramebuffer();this.copyTextureToTexture=function(x,I,z=null,B=null,N=0,ee=null){ee===null&&(N!==0?(Ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=N,N=0):ee=0);let le,ge,de,Pe,Ie,Ae,$e,at,xt;const ft=x.isCompressedTexture?x.mipmaps[ee]:x.image;if(z!==null)le=z.max.x-z.min.x,ge=z.max.y-z.min.y,de=z.isBox3?z.max.z-z.min.z:1,Pe=z.min.x,Ie=z.min.y,Ae=z.isBox3?z.min.z:0;else{const cn=Math.pow(2,-N);le=Math.floor(ft.width*cn),ge=Math.floor(ft.height*cn),x.isDataArrayTexture?de=ft.depth:x.isData3DTexture?de=Math.floor(ft.depth*cn):de=1,Pe=0,Ie=0,Ae=0}B!==null?($e=B.x,at=B.y,xt=B.z):($e=0,at=0,xt=0);const ct=Ee.convert(I.format),Ce=Ee.convert(I.type);let gt;I.isData3DTexture?(We.setTexture3D(I,0),gt=A.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(We.setTexture2DArray(I,0),gt=A.TEXTURE_2D_ARRAY):(We.setTexture2D(I,0),gt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,I.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,I.unpackAlignment);const Je=A.getParameter(A.UNPACK_ROW_LENGTH),en=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Pi=A.getParameter(A.UNPACK_SKIP_PIXELS),tn=A.getParameter(A.UNPACK_SKIP_ROWS),fr=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ft.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ft.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pe),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ie),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ae);const _t=x.isDataArrayTexture||x.isData3DTexture,ln=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const cn=Me.get(x),Xt=Me.get(I),Jt=Me.get(cn.__renderTarget),Ks=Me.get(Xt.__renderTarget);xe.bindFramebuffer(A.READ_FRAMEBUFFER,Jt.__webglFramebuffer),xe.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let ci=0;ci<de;ci++)_t&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Me.get(x).__webglTexture,N,Ae+ci),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Me.get(I).__webglTexture,ee,xt+ci)),A.blitFramebuffer(Pe,Ie,le,ge,$e,at,le,ge,A.DEPTH_BUFFER_BIT,A.NEAREST);xe.bindFramebuffer(A.READ_FRAMEBUFFER,null),xe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||Me.has(x)){const cn=Me.get(x),Xt=Me.get(I);xe.bindFramebuffer(A.READ_FRAMEBUFFER,Oh),xe.bindFramebuffer(A.DRAW_FRAMEBUFFER,zh);for(let Jt=0;Jt<de;Jt++)_t?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,cn.__webglTexture,N,Ae+Jt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,cn.__webglTexture,N),ln?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Xt.__webglTexture,ee,xt+Jt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Xt.__webglTexture,ee),N!==0?A.blitFramebuffer(Pe,Ie,le,ge,$e,at,le,ge,A.COLOR_BUFFER_BIT,A.NEAREST):ln?A.copyTexSubImage3D(gt,ee,$e,at,xt+Jt,Pe,Ie,le,ge):A.copyTexSubImage2D(gt,ee,$e,at,Pe,Ie,le,ge);xe.bindFramebuffer(A.READ_FRAMEBUFFER,null),xe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else ln?x.isDataTexture||x.isData3DTexture?A.texSubImage3D(gt,ee,$e,at,xt,le,ge,de,ct,Ce,ft.data):I.isCompressedArrayTexture?A.compressedTexSubImage3D(gt,ee,$e,at,xt,le,ge,de,ct,ft.data):A.texSubImage3D(gt,ee,$e,at,xt,le,ge,de,ct,Ce,ft):x.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ee,$e,at,le,ge,ct,Ce,ft.data):x.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ee,$e,at,ft.width,ft.height,ct,ft.data):A.texSubImage2D(A.TEXTURE_2D,ee,$e,at,le,ge,ct,Ce,ft);A.pixelStorei(A.UNPACK_ROW_LENGTH,Je),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,en),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pi),A.pixelStorei(A.UNPACK_SKIP_ROWS,tn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,fr),ee===0&&I.generateMipmaps&&A.generateMipmap(gt),xe.unbindTexture()},this.initRenderTarget=function(x){Me.get(x).__webglFramebuffer===void 0&&We.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?We.setTextureCube(x,0):x.isData3DTexture?We.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?We.setTexture2DArray(x,0):We.setTexture2D(x,0),xe.unbindTexture()},this.resetState=function(){T=0,P=0,U=null,xe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const vc={type:"change"},Qo={type:"start"},fh={type:"end"},Ms=new Gs,xc=new Zn,f_=Math.cos(70*Co.DEG2RAD),Et=new C,Qt=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Da=1e-6;class p_ extends Rd{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new wi,this._lastTargetPosition=new C,this._quat=new wi().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ql,this._sphericalDelta=new ql,this._scale=1,this._panOffset=new C,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new C,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=g_.bind(this),this._onPointerDown=m_.bind(this),this._onPointerUp=__.bind(this),this._onContextMenu=E_.bind(this),this._onMouseWheel=M_.bind(this),this._onKeyDown=y_.bind(this),this._onTouchStart=S_.bind(this),this._onTouchMove=b_.bind(this),this._onMouseDown=v_.bind(this),this._onMouseMove=x_.bind(this),this._interceptControlDown=w_.bind(this),this._interceptControlUp=T_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vc),this.update(),this.state=lt.NONE}update(e=null){const t=this.object.position;Et.copy(t).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Qt:n>Math.PI&&(n-=Qt),r<-Math.PI?r+=Qt:r>Math.PI&&(r-=Qt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),t.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Et.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ms.origin.copy(this.object.position),Ms.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ms.direction))<f_?this.object.lookAt(this.target):(xc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ms.intersectPlane(xc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Da||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Da||this._lastTargetPosition.distanceToSquared(this.target)>Da?(this.dispatchEvent(vc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qt/60*this.autoRotateSpeed*e:Qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Et.setFromMatrixColumn(t,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,t){this.screenSpacePanning===!0?Et.setFromMatrixColumn(t,1):(Et.setFromMatrixColumn(t,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Et.copy(r).sub(this.target);let s=Et.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new _e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function m_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function g_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function __(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fh),this.state=lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function v_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=lt.DOLLY;break;case Qi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}break;case Qi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Qo)}function x_(i){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function M_(i){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(i.preventDefault(),this.dispatchEvent(Qo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(fh))}function y_(i){this.enabled!==!1&&this._handleKeyDown(i)}function S_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=lt.TOUCH_ROTATE;break;case ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=lt.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Qo)}function b_(i){switch(this._trackPointer(i),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=lt.NONE}}function E_(i){this.enabled!==!1&&i.preventDefault()}function w_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function T_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function A_(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new Wt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=Mc(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const g=Mc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Mc(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new fn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,l);l+=h.count*t}return r!==void 0&&(o.gpuType=r),o}const Mn=[2.5,28.5,72,180],Ht=[{spacing:32,groundSpacing:16,size:24,far:160,offset:0},{spacing:128,size:16,far:512,offset:2304},{spacing:512,size:16,far:2048,offset:3328}],La=4352,An=64,Fr=68,ei=8,Ei=16,Ki=(i,e)=>(i%e+e)%e,Ua=(i,e,t=Ht[0].groundSpacing)=>i===0&&e===0?t:Ht[i].spacing,R_=(i,e=32)=>e===16?i>280?32:16:i<220?16:32;function C_(i,e,t,n){return t=Math.max(.02,t),i=Math.min(Math.max(e*2,t*1.5),i+e),{credit:i,faces:Math.min(n,Math.floor((i+1e-6)/t))}}function P_(i,e,t,n){const r=Ht[i];return r.offset+n*r.size*r.size+Ki(t,r.size)*r.size+Ki(e,r.size)}function yc(i,e,t,n){const r={x:i,y:e,z:t};for(let s=0;s<8;s++){const a=n(r.x,r.z).find(l=>r.y>l.minY-.35&&r.y<l.maxY+.35&&r.x>l.minX-.7&&r.x<l.maxX+.7&&r.z>l.minZ-.7&&r.z<l.maxZ+.7);if(!a)return{...r,blocked:!1};const o=[["x",a.minX-1.2],["x",a.maxX+1.2],["z",a.minZ-1.2],["z",a.maxZ+1.2]];o.sort((l,c)=>Math.abs(r[l[0]]-l[1])-Math.abs(r[c[0]]-c[1])),r[o[0][0]]=o[0][1]}return{...r,blocked:!0}}class Sc{constructor(e=[]){this.cells=new Map;for(const t of e)for(let n=Math.floor(t.minX/128);n<=Math.floor(t.maxX/128);n++)for(let r=Math.floor(t.minZ/128);r<=Math.floor(t.maxZ/128);r++){const s=`${n}/${r}`;this.cells.has(s)||this.cells.set(s,[]),this.cells.get(s).push(t)}}query(e,t){const n=[],r=Math.floor(e/128),s=Math.floor(t/128);for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++)n.push(...this.cells.get(`${r+a}/${s+o}`)||[]);return n}}const Qe={enabled:{value:0},view:{value:0},strength:{value:.9},direct:{value:0},radius:{value:3},viewport:{value:new _e(1,1)},size:{value:new _e(1,1)},nearFar:{value:new _e(8,6500)},texture:{value:null},depth:{value:null}},Lo=new Set;function D_(i){Lo.add(i),i.addEventListener("dispose",()=>Lo.delete(i))}function L_(i){const e=i?1:0;if(Qe.enabled.value!==e){Qe.enabled.value=e;for(const t of Lo)t.needsUpdate=!0}}const U_=`
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
`,Ve={enabled:{value:0},windows:{value:1},occupancy:{value:.57},windowPower:{value:1.8},streets:{value:1},streetPower:{value:1},glow:{value:.65},lampColor:{value:new fe("#ffc078")},atmosphere:{value:1}},I_=`
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
`,It={wet:{value:0},snow:{value:0},giCompatibility:{value:1},roof:{value:null},roofMatrix:{value:new nt},roofReady:{value:0},noise:{value:null}},ph=`
uniform sampler2D labRoofDepth;uniform mat4 labRoofMatrix;uniform float labRoofReady;
float labSkyExposure(vec3 p){
 if(labRoofReady<.5)return 1.;vec4 q=labRoofMatrix*vec4(p,1.);vec3 uv=q.xyz/q.w*.5+.5;
 if(any(lessThan(uv,vec3(0.)))||any(greaterThan(uv,vec3(1.))))return 1.;
 float top=texture2D(labRoofDepth,uv.xy).r;
 // A small depth tolerance prevents the receiving roof occluding itself.
 return uv.z<=top+.0007?1.:0.;
}
`,N_=`
uniform float labWet,labSnow,labWeatherGI;uniform sampler2D labWeatherNoise;
${ph}
`,ye={capture:{value:0},captureOrigin:{value:new C},captureFar:{value:160},gi:{value:.85},visibility:{value:1},gray:{value:0},view:{value:0},coverage:{value:0},debugColors:{value:1},origin:{value:new C},sky:{value:new fe("#a8cad8")},ground:{value:new fe("#848b6c")},grids:{value:Ht.map(i=>new Ye(0,0,i.spacing,i.size))},wraps:{value:Ht.map(()=>new _e)},groundGrid:{value:new Ye(0,0,Ht[0].groundSpacing,Ht[0].size)},groundWrap:{value:new _e},irrAtlas:{value:null},depthAtlas:{value:null},probeMeta:{value:null}},F_=`
uniform float labCapture, labGI, labVisibility, labGray, labView, labCaptureFar,labCoverage;
uniform float labDebugColors,labDebugColor,labDebugNeutral;
uniform vec3 labCaptureOrigin, labSky, labGround,labOrigin;
uniform vec4 labGrids[3];uniform vec2 labWraps[3];
uniform vec4 labGroundGrid;uniform vec2 labGroundWrap;
uniform sampler2D labIrrAtlas,labDepthAtlas,labProbeMeta;
varying vec3 labWorldPosition;
float labContribution=0.;
vec3 labDebugAlbedo(float tag){float color=labDebugColors>1.5?labDebugColors-1.:tag;return color<1.5?vec3(1.,0.,0.):color<2.5?vec3(0.,1.,0.):vec3(1.,0.,1.);}
vec2 labOct(vec3 n){n/=max(abs(n.x)+abs(n.y)+abs(n.z),.00001);vec2 p=n.xy;if(n.z<0.)p=(1.-abs(p.yx))*mix(vec2(-1.),vec2(1.),step(vec2(0.),p));return p*.5+.5;}
vec2 labAtlasUV(float slot,vec2 oct,float res){vec2 tile=vec2(mod(slot,${An}.),floor(slot/${An}.));return (tile*(res+2.)+1.+oct*res)/(vec2(${An}.,${Fr}.)*(res+2.));}
vec4 labLevel(vec3 position,vec3 normal,int level){
 float layer=0.,fy=clamp((position.y-2.5)/26.,0.,1.);
 if(position.y>28.5){layer=1.;fy=clamp((position.y-28.5)/43.5,0.,1.);}
 if(position.y>72.){layer=2.;fy=clamp((position.y-72.)/108.,0.,1.);}
 float offset=level==0?0.:level==1?2304.:3328.,range=level==0?160.:level==1?512.:2048.;
 vec3 sum=vec3(0.);float weights=0.,readiness=1.;vec3 biased=position+normal*.45;vec2 normalOct=labOct(normal);
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
  vec4 meta=texture2D(labProbeMeta,(vec2(mod(slot,${An}.),floor(slot/${An}.))+.5)/vec2(${An}.,${Fr}.));
  // Missing neighbors reject the whole interpolation cell. Blocked(-1) is a
  // structural exclusion; pending(0) must not renormalize just the arrivals.
  if(meta.w<-.5)continue;readiness=min(readiness,meta.w);if(readiness<.00001)return vec4(0.);
  if(weight<.00001)continue;vec3 delta=biased-meta.xyz;float dist=max(length(delta),.001);
  vec2 moments=texture2D(labDepthAtlas,labAtlasUV(slot,labOct(delta/dist),${Ei}.)).rg;
  float mean=moments.x*range,variance=max(.25,(moments.y-moments.x*moments.x)*range*range),difference=max(0.,dist-mean-.6);
  float visibility=variance/(variance+difference*difference);visibility=pow(visibility,2.);
  weight*=mix(1.,visibility,labVisibility);
  // Retain some weight for grazing surfaces; suppress probes behind a receiver.
  weight*=pow(clamp(dot(normal,-delta/dist)*.5+.5,.1,1.),2.);
  sum+=texture2D(labIrrAtlas,labAtlasUV(slot,normalOct,${ei}.)).rgb*weight;weights+=weight;
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
`,O_={labLand:{value:new fe("#d1d4c5")},labRoad:{value:new fe("#6f7c77")},labCurb:{value:new fe("#c2c7b7")},labWater:{value:new fe("#718f8e")},labPark:{value:new fe("#93af85")},labMark:{value:new fe("#e4e7ce")}},z_=`
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
`;function Ft(i,e={}){const{facade:t=!1,terrain:n=!1,debugColor:r=0,debugNeutral:s=!1,...a}=e,o=new Md({color:i,roughness:.88,metalness:0,...a});return o.onBeforeCompile=l=>{Object.assign(l.uniforms,{labCapture:ye.capture,labCaptureOrigin:ye.captureOrigin,labCaptureFar:ye.captureFar,labGI:ye.gi,labVisibility:ye.visibility,labGray:ye.gray,labView:ye.view,labCoverage:ye.coverage,labDebugColors:ye.debugColors,labDebugColor:{value:r},labDebugNeutral:{value:+s},labOrigin:ye.origin,labSky:ye.sky,labGround:ye.ground,labGrids:ye.grids,labWraps:ye.wraps,labGroundGrid:ye.groundGrid,labGroundWrap:ye.groundWrap,labIrrAtlas:ye.irrAtlas,labDepthAtlas:ye.depthAtlas,labProbeMeta:ye.probeMeta},n?O_:{});const c=Qe.enabled.value>.5;Object.assign(l.uniforms,{labNight:Ve.enabled,labWindows:Ve.windows,labWindowOccupancy:Ve.occupancy,labWindowPower:Ve.windowPower,labStreets:Ve.streets,labStreetPower:Ve.streetPower,labLampColor:Ve.lampColor}),Object.assign(l.uniforms,{labWet:It.wet,labSnow:It.snow,labWeatherGI:It.giCompatibility,labRoofDepth:It.roof,labRoofMatrix:It.roofMatrix,labRoofReady:It.roofReady,labWeatherNoise:It.noise}),l.vertexShader=`varying vec3 labWorldPosition;
${t?"attribute float labDebugTag; attribute float labWindowSeed; varying float labRoomSeed; varying float labColorTag; varying vec3 labBoxPosition; varying vec3 labBoxSize; varying vec3 labBoxNormal;":""}
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 vec4 labWP=vec4(transformed,1.);
 #ifdef USE_INSTANCING
 labWP=instanceMatrix*labWP;
 #endif
 labWorldPosition=(modelMatrix*labWP).xyz;
 ${t?`labRoomSeed=labWindowSeed;labColorTag=labDebugTag;labBoxPosition=position;labBoxNormal=normal;labBoxSize=vec3(1.);
 #ifdef USE_INSTANCING
 labBoxSize=vec3(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz),length(instanceMatrix[2].xyz));
 #endif`:""}`),Object.assign(l.uniforms,{labAOEnabled:Qe.enabled,labAOView:Qe.view,labAOStrength:Qe.strength,labAODirect:Qe.direct,labAORadius:Qe.radius,labAOViewport:Qe.viewport,labAOSize:Qe.size,labAONearFar:Qe.nearFar,labAOTexture:Qe.texture,labAODepth:Qe.depth}),l.fragmentShader=N_+F_+I_+(c?U_:"")+(n?z_:"")+(t?`varying float labRoomSeed; varying float labColorTag; varying vec3 labBoxPosition; varying vec3 labBoxSize; varying vec3 labBoxNormal;
vec3 labWindowEmission=vec3(0.);
float labRoomHash(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
`:"")+l.fragmentShader,n&&(l.fragmentShader=l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=labTerrain();`)),t&&(l.fragmentShader=l.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 if(abs(labBoxNormal.y)<.5){
 vec2 faceUV=abs(labBoxNormal.x)>.5?vec2(labBoxPosition.z*labBoxSize.z,labBoxPosition.y*labBoxSize.y):vec2(labBoxPosition.x*labBoxSize.x,labBoxPosition.y*labBoxSize.y);
 // Integrate a periodic window pulse over its pixel footprint, rather than
 // point-sampling repeated windows that alias under tiny camera movements.
 vec2 q=faceUV/vec2(3.7,3.25),fw=max(fwidth(q),vec2(.0001));
 vec2 lo=q-fw*.5-vec2(.14,.16),hi=q+fw*.5-vec2(.14,.16),duty=vec2(.72,.68);
 vec2 integralLo=floor(lo)*duty+min(fract(lo),duty);
 vec2 integralHi=floor(hi)*duty+min(fract(hi),duty);
 vec2 filtered=clamp((integralHi-integralLo)/fw,0.,1.);
 float pane=filtered.x*filtered.y;
 diffuseColor.rgb*=mix(.86,1.07,pane);
 diffuseColor.rgb*=mix(.92,1.04,labBoxPosition.y+.5);
 if(labNight>.5){
  diffuseColor.rgb*=mix(vec3(1.),vec3(.22,.32,.42),pane);
  float side=labBoxNormal.x*2.+labBoxNormal.z*4.;
  vec2 cell=floor(q);float seed=floor(labRoomSeed+.5)+floor(side+.5);float room=labRoomHash(vec3(cell,seed));
  float resolved=1.-smoothstep(.45,1.2,max(fw.x,fw.y));
  // Subpixel windows converge to mean occupancy instead of sparkling on orbit.
  float lit=mix(labWindowOccupancy,step(room,labWindowOccupancy),resolved);
  float temperature=labRoomHash(vec3(cell,seed+51.));
  vec3 warm=mix(vec3(1.,.43,.15),vec3(1.,.78,.48),temperature);
  warm=mix(warm,vec3(.57,.76,1.),step(.94,temperature));
  warm=mix(vec3(.95,.64,.33),warm,resolved);
  vec2 interior=fract(q-vec2(.14,.16));
  float interiorShade=mix(.48,1.,clamp(interior.y/.68,0.,1.));
  interiorShade*=mix(1.,.72,smoothstep(.34-fw.x,.38+fw.x,interior.x));
  interiorShade=mix(.65,interiorShade,resolved);
  float mullion=(1.-smoothstep(max(0.,.017-fw.x),.017+fw.x,abs(interior.x-.36)))*resolved;
  labWindowEmission=pane*lit*warm*interiorShade*(1.-.65*mullion)*labWindows*labWindowPower;
 }
 }else{diffuseColor.rgb*=1.06;}`)),t&&(l.fragmentShader=l.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance+=labWindowEmission;`)),l.fragmentShader=l.fragmentShader.replace("#include <roughnessmap_fragment>",`float labTag=${t?"labColorTag":"labDebugColor"};
if(labDebugColors>.5){if(labTag>.5)diffuseColor.rgb=labDebugAlbedo(labTag);else if(labDebugNeutral>.5)diffuseColor.rgb=vec3(.72);}
#include <roughnessmap_fragment>`),l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
irradiance+=labEnvironment(inverseTransformDirection(geometryNormal,viewMatrix));`),l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
 if(labWet+labSnow>.001){
  vec3 weatherNormal=inverseTransformDirection(normal,viewMatrix);
  float up=smoothstep(.25,.85,weatherNormal.y);
  ${n?"up*=1.-labSurfaceWater;":""}
  if(up>.001){float exposed=labSkyExposure(labWorldPosition+weatherNormal*.15);
  float pattern=texture2D(labWeatherNoise,(labWorldPosition.xz+mod(labOrigin.xz,512.))/512.).r;
  float snow=labSnow*up*exposed*smoothstep(.12,.65,pattern+labSnow*.5);
  float wet=labWet*up*exposed*(1.-snow);float puddle=smoothstep(.32,.68,pattern)*wet;
  diffuseColor.rgb=mix(diffuseColor.rgb*mix(1.,.62,wet),vec3(.80,.86,.93),snow);
  roughnessFactor=mix(mix(roughnessFactor,.2,puddle),.96,snow);
  }
 }`),l.fragmentShader=l.fragmentShader.replace("#include <aomap_fragment>",`labStreetRoughness=roughnessFactor;
reflectedLight.directDiffuse+=diffuseColor.rgb*RECIPROCAL_PI*labStreetIrradiance(labWorldPosition,inverseTransformDirection(geometryNormal,viewMatrix));
reflectedLight.directSpecular+=labStreetSpecular;
#include <aomap_fragment>`),c&&(l.fragmentShader=l.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
 float labAOVisibility=1.;
 if(labCapture<.5&&labAOEnabled>.5){labAOVisibility=labReadAO(vViewPosition.z);reflectedLight.indirectDiffuse*=labAOVisibility;float directAO=mix(1.,labAOVisibility,labAODirect);reflectedLight.directDiffuse*=directAO;reflectedLight.directSpecular*=directAO;}`)),l.fragmentShader=l.fragmentShader.replace("#include <opaque_fragment>",`if(labView>.5&&labCapture<.5)outgoingLight=reflectedLight.indirectDiffuse;
if(labCoverage>.5&&labCapture<.5)outgoingLight=mix(vec3(.24,.27,.28),vec3(.10,.70,.38),labContribution);
${c?"if(labAOView>.5&&labCapture<.5)outgoingLight=vec3(labAOVisibility);":""}
#include <opaque_fragment>
if(labCapture>.5)gl_FragColor.a=clamp(length(labWorldPosition-labCaptureOrigin)/labCaptureFar,0.,.999);`),c&&(l.fragmentShader=l.fragmentShader.replace("#include <tonemapping_fragment>",`if(labAOView<.5||labCapture>.5){
#include <tonemapping_fragment>
}`)),l.fragmentShader=l.fragmentShader.replace("#include <fog_fragment>",`if(${c?"(labView<.5&&labAOView<.5)":"labView<.5"}||labCapture>.5){
#include <fog_fragment>
}`)},o.userData.labKind=n?"terrain":t?"facade":"surface",o.customProgramCacheKey=()=>`lab-${o.userData.labKind}-11-coherent-ao${Qe.enabled.value}`,D_(o),o}const Uo=2048;function ti(i,e,t=0){const n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)}function mh(i){return-520+85*Math.sin(i/850)}function zt(i){return 105+80*Math.sin(i/550)}function ni(i){const e=i*2400-900;return{x:e,y:27,z:zt(e)}}function wr(i,e,t){const n=Uo/2**i;return{level:i,x:e,z:t,size:n,cx:(e+.5)*n,cz:(t+.5)*n,key:`${i}/${e}/${t}`}}function B_(i){return[wr(i.level+1,i.x*2,i.z*2),wr(i.level+1,i.x*2+1,i.z*2),wr(i.level+1,i.x*2,i.z*2+1),wr(i.level+1,i.x*2+1,i.z*2+1)]}function Or(i,e,t){return Math.hypot(Math.max(Math.abs(i-t.cx)-t.size/2,0),Math.max(Math.abs(e-t.cz)-t.size/2,0))}function k_(i,e,t){const n=[],r=Math.floor(i/Uo),s=Math.floor(e/Uo),a=Math.min(2300,Math.max(850,t*2.5)),o=t>800?512:t>350?256:128;function l(c){return c.refine=c.size>o&&Or(i,e,c)<c.size*.72,c.children=c.refine?B_(c).map(l):[],c}for(let c=r-1;c<=r+1;c++)for(let h=s-1;h<=s+1;h++){const u=wr(0,c,h);Or(i,e,u)<a&&n.push(l(u))}return n}function V_(i,e,t=0){const n=i*128+32+t%2*63,r=e*128+32+Math.floor(t/2)*63,s=ti(i,e,t);return{x:n,z:r,w:27+ti(i,e,t+10)*18,d:24+ti(i,e,t+20)*20,h:12+Math.pow(s,2.5)*110,color:Math.floor(ti(i,e,t+40)*6)}}function G_(i,e){let t=i;for(const[n,r,s]of[[0,e.minX,1],[0,e.maxX,-1],[2,e.minZ,1],[2,e.maxZ,-1]]){const a=t;if(t=[],!a.length)break;for(let o=0;o<a.length;o++){const l=a[o],c=a[(o+1)%a.length],h=(l[n]-r)*s,u=(c[n]-r)*s;if(h>=-1e-7&&t.push(l),h>=0!=u>=0){const d=h/(h-u);t.push(l.map((f,g)=>f+(c[g]-f)*d))}}}return t}function H_(i){const e=[],t=i.cx-i.size/2,n=t+i.size,r=i.cz-i.size/2,s=r+i.size,a=(l,c)=>l>=t&&l<n&&c>=r&&c<s,o=(l,c,h=!1,u=0)=>{a(l,c)&&(h||Math.abs(c-mh(l))>=103)&&e.push({x:l,z:c,y:h?34:9,base:h?26:0,elevated:h,axis:u})};for(let l=Math.floor(t/128)*128+8.5;l<n;l+=128)for(let c=Math.floor((r-32)/64)*64+32;c<s;c+=64)o(l,c,!1,0);for(let l=Math.floor(r/128)*128+8.5;l<s;l+=128)for(let c=Math.floor((t-32)/64)*64+32;c<n;c+=64)o(c,l,!1,1);for(let l=Math.floor((t-32)/64)*64+32;l<n;l+=64)o(l,zt(l)+13.5,!0,0);return e}const bc=new Pn(1,1,1),W_=Ft("#566975",{roughness:.65}),gh=Ft("#e0d5b9",{roughness:.5,emissive:"#ffc078",emissiveIntensity:0}),_h=new Ct({uniforms:{night:Ve.enabled,streets:Ve.streets,glow:Ve.glow,power:Ve.streetPower,atmosphere:Ve.atmosphere,color:Ve.lampColor,inspect:ye.view,aoView:Qe.view},transparent:!0,depthTest:!0,depthWrite:!1,blending:Va,toneMapped:!1,vertexShader:"varying vec2 uvGlow;varying float fade;void main(){uvGlow=uv;vec4 center=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);fade=exp(-pow(length(center.xyz)*.00085,2.));center.xy+=position.xy*6.;gl_Position=projectionMatrix*center;}",fragmentShader:"uniform float night,streets,glow,power,inspect,aoView,atmosphere;uniform vec3 color;varying vec2 uvGlow;varying float fade;void main(){float r=length(uvGlow-.5)*2.;if(r>=1.||night<.5||streets<.5||glow<.001||inspect>.5||aoView>.5)discard;float core=exp(-r*r*100.);float halo=pow(1.-r,3.)*.34;gl_FragColor=vec4(color*(core+halo)*glow*atmosphere*fade*min(power,2.),1.);}"}),X_=new Dn(1,1);el();function el(){gh.emissiveIntensity=Ve.enabled.value*Ve.streets.value*3.5*Ve.streetPower.value,_h.visible=!!(Ve.enabled.value&&Ve.streets.value&&Ve.glow.value)}function q_(i,e){const t=H_(i);if(e.userData.streetFixtures=t,!t.length)return;const n=new Rr(bc.clone(),W_,t.length*2),r=new Rr(bc.clone(),gh,t.length),s=new Rr(X_.clone(),_h,t.length),a=new bt;let o=0;for(let l=0;l<t.length;l++){const c=t[l],h=c.x-i.cx,u=c.z-i.cz,d=c.y-c.base;a.position.set(h+(c.axis===0?2:0),c.base+d/2,u+(c.axis===1?2:0)),a.scale.set(.22,d,.22),a.updateMatrix(),n.setMatrixAt(o++,a.matrix),a.position.set(h+(c.axis===0?1:0),c.y+.14,u+(c.axis===1?1:0)),a.scale.set(c.axis===0?2.3:.2,.18,c.axis===1?2.3:.2),a.updateMatrix(),n.setMatrixAt(o++,a.matrix),a.position.set(h,c.y+.05,u),a.scale.set(c.axis===0?1.5:.65,.23,c.axis===1?1.5:.65),a.updateMatrix(),r.setMatrixAt(l,a.matrix),a.position.y=c.y-.2,a.scale.set(1,1,1),a.updateMatrix(),s.setMatrixAt(l,a.matrix)}n.castShadow=!1,n.receiveShadow=!0,r.castShadow=!1,r.receiveShadow=!1,s.layers.set(5),s.frustumCulled=!1,s.renderOrder=5,e.add(n,r,s)}const Y_=["#aec5c4","#b9cac7","#c7cbbf","#d2c5b2","#c3bab2","#9eb6c0"].map(i=>new fe(i)),vt=new Pn(1,1,1),$i=new Xs(1,1,1,10),Io=new Zo(1,1,10),tt={building:Ft("#ffffff",{facade:!0}),ground:Ft("#ffffff",{terrain:!0}),road:Ft("#6f7c77"),curb:Ft("#c2c7b7"),white:Ft("#e4e7ce"),pier:Ft("#b7c0b2"),green:Ft("#93af85"),blue:Ft("#718f8e"),warm:Ft("#c2a177"),red:Ft("#bc755e"),stone:Ft("#e0d9c1")},Sr={red:Ft("#bc755e",{debugColor:1}),pink:Ft("#718f8e",{debugColor:3}),floor:Ft("#93af85",{debugNeutral:!0}),receiver:Ft("#e0d9c1",{debugNeutral:!0})},$_=[{x:75,z:-192,y:173,name:"海湾金融中心"},{x:-208,z:-405,y:130,name:"观景塔"},{x:430,z:zt(430),y:43,name:"海湾收费站"},{x:-55,z:8,y:9,name:"滨河公交站"},{x:70,z:390,y:40,name:"环境染色试验区"}];function vh(i,e,t,n,r,s,a,o,l,c=0){const h=new dt(e,t);if(h.position.set(n,r,s),h.scale.set(a,o,l),h.rotation.y=c,h.castShadow=!0,h.receiveShadow=!0,i.add(h),o>1){e.computeBoundingBox(),h.updateMatrix();const u=e.boundingBox.clone().applyMatrix4(h.matrix),d=i.userData.node;i.userData.probeObstacles.push({minX:u.min.x+d.cx,maxX:u.max.x+d.cx,minY:u.min.y,maxY:u.max.y,minZ:u.min.z+d.cz,maxZ:u.max.z+d.cz})}return h}function xh(i){const e=[],t={minX:i.cx-i.size/2,maxX:i.cx+i.size/2,minZ:i.cz-i.size/2,maxZ:i.cz+i.size/2};return{polygon(n){const r=G_(n,t);for(let s=1;s<r.length-1;s++)for(const a of[r[0],r[s+1],r[s]])e.push(a[0]-i.cx,a[1],a[2]-i.cz)},finish(n,r){if(!e.length)return;const s=new Wt;s.setAttribute("position",new Rt(e,3)),s.computeVertexNormals();const a=new dt(s,n);a.castShadow=!0,a.receiveShadow=!0,r.add(a)}}}function gi(i,e,t,n,r,s,a=0,o=0){const l=xh(i),c=i.cx-i.size/2;i.cx+i.size/2;const h=Math.ceil(i.size/16);for(let u=0;u<h;u++){const d=c+u*i.size/h,f=c+(u+1)*i.size/h,g=t(d)+a,_=t(f)+a,m=[d,n,g-r/2],p=[f,n,_+r/2];l.polygon([m,[f,n,_-r/2],p,[d,n,g+r/2]]),o&&(l.polygon([[d,n-o,g-r/2],[f,n-o,_-r/2],[f,n,_-r/2],m]),l.polygon([[d,n,g+r/2],p,[f,n-o,_+r/2],[d,n-o,g+r/2]]),l.polygon([[d,n-o,g+r/2],[f,n-o,_+r/2],[f,n-o,_-r/2],[d,n-o,g-r/2]]))}l.finish(s,e)}function j_(i,e){const t=[],n=i.cx-i.size/2,r=i.cz-i.size/2,s=Math.max(1,i.size/512),a=Math.floor(n/128),o=Math.floor(r/128);for(let f=a;f<Math.ceil((n+i.size)/128);f+=s)for(let g=o;g<Math.ceil((r+i.size)/128);g+=s)for(let _=0;_<(s===1?4:1);_++){const m=V_(f,g,_);m.x<n||m.x>=n+i.size||m.z<r||m.z>=r+i.size||Math.abs(m.z-mh(m.x))<115||Math.abs(m.z-zt(m.x))<27||Math.hypot(m.x-75,m.z+192)<65||Math.hypot(m.x+208,m.z+405)<43||Math.hypot(m.x-70,m.z-390)<95||Math.hypot(m.x-430,m.z-zt(430))<90||t.push({...m,w:m.w*Math.sqrt(s),d:m.d*Math.sqrt(s)})}if(!t.length)return;const l=vt.clone(),c=new Float32Array(t.length),h=new Float32Array(t.length);for(let f=0;f<t.length;f++){const g=t[f];h[f]=Math.floor(ti(g.x,g.z,91)*4095)+1,c[f]=ti(g.x,g.z,83)<.28?1+Math.floor(ti(g.x,g.z,84)*3):0,e.userData.probeObstacles.push({minX:g.x-g.w/2,maxX:g.x+g.w/2,minY:0,maxY:g.h,minZ:g.z-g.d/2,maxZ:g.z+g.d/2}),e.userData.buildings.push({...g,tag:c[f]})}l.setAttribute("labDebugTag",new or(c,1)),l.setAttribute("labWindowSeed",new or(h,1));const u=new Rr(l,tt.building,t.length),d=new bt;for(let f=0;f<t.length;f++){const g=t[f];d.position.set(g.x-i.cx,g.h/2,g.z-i.cz),d.scale.set(g.w,g.h,g.d),d.updateMatrix(),u.setMatrixAt(f,d.matrix),u.setColorAt(f,Y_[g.color])}u.castShadow=!0,u.receiveShadow=!0,u.instanceMatrix.needsUpdate=!0,u.instanceColor.needsUpdate=!0,e.add(u)}function Z_(i,e){const t=(r,s)=>r>=i.cx-i.size/2&&r<i.cx+i.size/2&&s>=i.cz-i.size/2&&s<i.cz+i.size/2,n=(r,s,a,o,l,c,h,u,d=0)=>vh(e,r,s,a-i.cx,o,l-i.cz,c,h,u,d);if(t(75,-192)){n(vt,tt.stone,75,5,-192,80,10,66),n(vt,tt.blue,75,68,-192,40,126,38),n(vt,tt.blue,75,133,-192,30,20,29),n(Io,tt.warm,75,154,-192,19,26,19),n($i,tt.stone,75,173,-192,.7,18,.7);for(let r=18;r<128;r+=11)n(vt,tt.stone,75,r,-192,41,1,39)}if(t(-208,-405)&&(n($i,tt.stone,-208,28,-405,5,56,5),n($i,tt.red,-208,60,-405,17,14,17),n($i,tt.stone,-208,82,-405,3.5,38,3.5),n($i,tt.warm,-208,107,-405,11,11,11),n(Io,tt.stone,-208,123,-405,3,24,3)),t(430,zt(430))){const r=zt(430);n(vt,tt.stone,430,33,r,23,2,39),n(vt,tt.green,430,34.6,r,25,1.2,40);for(const s of[-16,-8,0,8,16])n(vt,tt.stone,432,29.5,r+s,1,8,1),n(vt,tt.blue,425,28,r+s,3,4,2.5),n(vt,tt.white,421,28,r+s,1.2,.25,5)}if(t(-55,8)){n(vt,tt.blue,-55,2,8,25,4,1),n(vt,tt.green,-55,5,9,28,.7,6);for(const r of[-65,-45])n(vt,tt.stone,r,2.5,11,.7,5,.7);n(vt,tt.warm,-55,1,9,17,.6,1.5),n(vt,tt.green,-34,3,10,1,6,1)}t(70,390)&&(n(vt,Sr.floor,70,.12,390,120,.25,95),n(vt,Sr.red,34,14,390,7,28,70),n(vt,Sr.receiver,70,14,390,6,28,70),n(vt,Sr.pink,108,14,390,7,28,70),n(vt,Sr.receiver,70,29,390,80,2,70))}function K_(i){const e=new bi;e.userData.node=i,e.userData.probeObstacles=[],e.userData.buildings=[],j_(i,e);const t=i.cx-i.size/2,n=i.cz-i.size/2,r=t+i.size,s=n+i.size,a=xh(i);a.polygon([[t,0,n],[r,0,n],[r,0,s],[t,0,s]]),a.finish(tt.ground,e),gi(i,e,zt,25,32,tt.pier,0,3),gi(i,e,zt,25.13,27,tt.road),gi(i,e,zt,26,1,tt.white,-15),gi(i,e,zt,26,1,tt.white,15),gi(i,e,zt,25.2,.5,tt.white),gi(i,e,h=>zt(h)+65*Math.exp(-(((h-100)/310)**2)),22,11,tt.pier,0,2),gi(i,e,h=>zt(h)+65*Math.exp(-(((h-100)/310)**2)),22.13,9.5,tt.road);for(let h=Math.floor(t/72)*72;h<r;h+=72){const u=zt(h);u>=n&&u<s&&vh(e,vt,tt.pier,h-i.cx,11,u-i.cz,5,22,11)}Z_(i,e),q_(i,e);const o=new Map;for(const h of[...e.children])h.isMesh&&!h.isInstancedMesh&&!h.geometry.getAttribute("uv")&&(o.has(h.material)||o.set(h.material,[]),o.get(h.material).push(h));for(const[h,u]of o)if(u.length>1){const d=A_(u.map(g=>g.geometry),!1);for(const g of u)e.remove(g),g.geometry.dispose();const f=new dt(d,h);f.castShadow=!0,f.receiveShadow=!0,e.add(f)}const l=new Pn(i.size,.4,i.size),c=new vd(new xd(l),new ih({color:[3377778,12162114,3904175,10779837,13200216][i.level]}));return l.dispose(),c.position.y=.6,c.layers.set(3),e.add(c),e}function Ec(i){i.traverse(e=>{e.geometry&&e.geometry!==vt&&e.geometry!==$i&&e.geometry!==Io&&e.geometry.dispose(),e.isInstancedMesh&&e.dispose(),e.isLineSegments&&e.material.dispose()})}class J_{constructor(e){this.scene=e,this.tiles=new Map,this.version=0,this.origin=new C,this.frame=0,this.active=[],this.loads=0,this.unloads=0,this.roots=[]}update(e,t,n,r){this.frame++,this.roots=k_(e,t,n);const s=new Set,a=f=>{s.add(f.key);let g=this.tiles.get(f.key);g||(g={node:f,readyAt:r+80+ti(f.x,f.z,f.level)*220,group:null,last:this.frame},this.tiles.set(f.key,g)),g.last=this.frame;for(const _ of f.children)a(_)};this.roots.forEach(a);const o=[...this.tiles.values()].filter(f=>!f.group&&s.has(f.node.key)&&f.readyAt<=r).sort((f,g)=>(f.node.level-g.node.level)*180+Or(e,t,f.node)-Or(e,t,g.node));for(const f of o.slice(0,2))f.group=K_(f.node),f.group.visible=!1,this.scene.add(f.group),this.loads++;const l=[],c=f=>{const g=this.tiles.get(f.key);if(!g?.group)return!1;if(!f.children.length)return l.push(g),!0;const _=l.length;for(const m of f.children)if(!c(m))return l.length=_,l.push(g),!0;return!0};this.roots.forEach(c);const h=new Set(l.map(f=>f.node.key));let u=!1;for(const[f,g]of this.tiles)g.group&&(g.group.visible!==h.has(f)&&(u=!0),g.group.visible=h.has(f),g.group.position.set(g.node.cx-this.origin.x,0,g.node.cz-this.origin.z)),!s.has(f)&&this.frame-g.last>150&&(g.group&&(this.scene.remove(g.group),Ec(g.group),this.unloads++),this.tiles.delete(f));const d=[...this.tiles.entries()].filter(([f])=>!s.has(f)).sort((f,g)=>f[1].last-g[1].last);for(;this.tiles.size>180&&d.length;){const[f,g]=d.shift();g.group&&(this.scene.remove(g.group),Ec(g.group),this.unloads++),this.tiles.delete(f)}return this.active=l,u&&this.version++,u}rebase(e,t){this.origin.set(Math.round(e/512)*512,0,Math.round(t/512)*512);for(const n of this.tiles.values())n.group&&n.group.position.set(n.node.cx-this.origin.x,0,n.node.cz-this.origin.z)}stats(){let e=0,t=0;for(const n of this.tiles.values())n.group?.traverse(r=>{if(r.geometry&&r.geometry!==vt)for(const s of Object.values(r.geometry.attributes))e+=s.array.byteLength;r.isInstancedMesh&&(t+=r.count,e+=r.instanceMatrix.array.byteLength+(r.instanceColor?.array.byteLength||0))});return{resident:[...this.tiles.values()].filter(n=>n.group).length,visible:this.active.length,pending:[...this.tiles.values()].filter(n=>!n.group).length,bytes:e,instances:t,loads:this.loads,unloads:this.unloads,version:this.version}}}function zr(i,e,t=0,n=0,r=e.width,s=e.height,a=!1){e.viewport.set(t,n,r,s),e.scissor.set(t,n,r,s),e.scissorTest=a,i.setRenderTarget(e)}class wc{constructor(e=[]){this.bounds=e,this.cache=new Map}mask(e,t,n,r,s,a){const o=Ht[e],l=o.size,c=[e,t,n,r,s,a].join("/");if(this.cache.get(e)?.key===c)return this.cache.get(e).data;const h=new Uint8Array(l*l*Mn.length);for(let u=0;u<Mn.length;u++){const d=u*l*l;if(u===0&&e>0){h.fill(1,d,d+l*l);continue}const f=u===0?t:o.spacing,g=u===0?s:n,_=u===0?a:r,m=u===0?-1/0:Mn[u-1],p=u===Mn.length-1?1/0:Mn[u+1],w=u===0&&e===0?32:0;for(const b of this.bounds){if(b.maxY<=m||b.minY>=p)continue;const S=Math.max(0,Math.floor((b.minX-w)/f)-g),R=Math.min(l-1,Math.floor((b.maxX+w)/f)+1-g),T=Math.max(0,Math.floor((b.minZ-w)/f)-_),P=Math.min(l-1,Math.floor((b.maxZ+w)/f)+1-_);if(!(S>R||T>P))for(let U=T;U<=P;U++)h.fill(1,d+U*l+S,d+U*l+R+1)}}return this.cache.set(e,{key:c,data:h}),h}}const Ia=128,Mh=.75,Q_=16,ev=8,tv="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",ys=i=>new mn(Q_*(i+2),ev*(i+2),{type:si,format:Bt,minFilter:Nt,magFilter:Nt,depthBuffer:!1,generateMipmaps:!1});class nv{constructor(e){this.renderer=e,this.active=[],this.free=Array.from({length:Ia},(r,s)=>Ia-1-s),this.duration=Mh,this.blended=0,this.oldIrr=ys(ei),this.newIrr=ys(ei),this.oldDepth=ys(Ei),this.newDepth=ys(Ei),this.copyMaterial=new Ct({vertexShader:tv,fragmentShader:"varying vec2 vUv;uniform sampler2D source;uniform vec2 sourceSize;uniform float pitch,slot;void main(){vec2 tile=vec2(mod(slot,64.),floor(slot/64.));gl_FragColor=texture2D(source,(tile*pitch+vUv*pitch)/sourceSize);}",uniforms:{source:{value:null},sourceSize:{value:new _e},pitch:{value:10},slot:{value:0}},depthTest:!1,depthWrite:!1});const t=new oh,n=new Dn(2,2);t.index=n.index,t.attributes=n.attributes,this.entries=new Float32Array(Ia*3),t.setAttribute("entry",new or(this.entries,3)),t.instanceCount=0,this.material=new Ct({vertexShader:"attribute vec3 entry;uniform vec2 targetSize;uniform float pitch;varying vec2 historyUV;varying float blend;void main(){vec2 uv=position.xy*.5+.5,tile=vec2(mod(entry.x,64.),floor(entry.x/64.));gl_Position=vec4((tile*pitch+uv*pitch)/targetSize*2.-1.,0.,1.);historyUV=(vec2(mod(entry.y,16.),floor(entry.y/16.))+uv)/vec2(16.,8.);blend=entry.z;}",fragmentShader:"uniform sampler2D previous,incoming;varying vec2 historyUV;varying float blend;void main(){gl_FragColor=mix(texture2D(previous,historyUV),texture2D(incoming,historyUV),blend);}",uniforms:{targetSize:{value:new _e},pitch:{value:10},previous:{value:null},incoming:{value:null}},depthTest:!1,depthWrite:!1}),this.scene=new kr,this.camera=new Ri(-1,1,1,-1,0,1),this.mesh=new dt(t,this.material),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}advance(e,t){for(let n=this.active.length-1;n>=0;n--){const r=this.active[n];if(t[r.probe.slot]!==r.probe||!r.probe.ready){this.release(n);continue}if(r.elapsed>=this.duration){this.release(n);continue}r.elapsed=Math.min(this.duration,r.elapsed+e)}}release(e){const t=this.active[e];t.probe.transition=null,this.free.push(t.index),this.active.splice(e,1)}clear(){for(;this.active.length;)this.release(this.active.length-1)}canStart(e){return!e.transition&&(!e.ready||this.free.length>0)}begin(e,t){const n={probe:e,index:this.free.pop(),elapsed:0};if(n.index===void 0)throw new Error("Probe transition capacity exhausted");this.active.push(n),e.transition=n;const r=this.renderer,s=this.copyMaterial.uniforms;t.quad.material=this.copyMaterial;for(const[a,o,l]of[[t.irr,this.oldIrr,ei],[t.depth,this.oldDepth,Ei]]){const c=l+2;s.source.value=a.texture,s.sourceSize.value.set(a.width,a.height),s.pitch.value=c,s.slot.value=e.slot,zr(r,o,n.index%16*c,Math.floor(n.index/16)*c,c,c,!0),r.render(t.filterScene,t.filterCamera)}return n}render(e,t){if(!this.active.length)return 0;const n=this.renderer,r=this.mesh.geometry,s=this.material.uniforms;for(let l=0;l<this.active.length;l++){const c=this.active[l],h=c.elapsed/this.duration;this.entries.set([c.probe.slot,c.index,h*h*(3-2*h)],l*3)}r.instanceCount=this.active.length,r.getAttribute("entry").needsUpdate=!0;const a=n.getRenderTarget();n.getViewport(new Ye),n.getScissor(new Ye),n.getScissorTest();const o=n.autoClear;try{n.autoClear=!1;for(const[l,c,h,u]of[[e,this.oldIrr,this.newIrr,ei],[t,this.oldDepth,this.newDepth,Ei]])s.targetSize.value.set(l.width,l.height),s.pitch.value=u+2,s.previous.value=c.texture,s.incoming.value=h.texture,zr(n,l),n.render(this.scene,this.camera)}finally{n.setRenderTarget(a),n.autoClear=o}return this.blended+=this.active.length,this.active.length}stats(){return{active:this.active.length,capacity:128,duration:this.duration,estimatedMiB:(this.oldIrr.width*this.oldIrr.height+this.oldDepth.width*this.oldDepth.height)*16/1048576}}}const iv="vec3 faceDir(vec2 uv,int f){vec2 p=uv*2.-1.;if(f==0)return normalize(vec3(1.,-p.y,-p.x));if(f==1)return normalize(vec3(-1.,-p.y,p.x));if(f==2)return normalize(vec3(p.x,1.,p.y));if(f==3)return normalize(vec3(p.x,-1.,-p.y));if(f==4)return normalize(vec3(p.x,-p.y,1.));return normalize(vec3(-p.x,-p.y,-1.));}",rv="vec3 octDir(vec2 uv){vec2 p=uv*2.-1.;vec3 n=vec3(p,1.-abs(p.x)-abs(p.y));float t=max(-n.z,0.);n.xy+=mix(vec2(t),vec2(-t),step(vec2(0.),n.xy));return normalize(n);}";function sv(i){let e=0,t=.5;for(;i;)e+=(i&1)*t,i>>=1,t*=.5;return e}const av=Array.from({length:48},(i,e)=>{const t=Math.sqrt((e+.5)/48),n=2*Math.PI*sv(e);return`vec3(${(t*Math.cos(n)).toFixed(8)},${(t*Math.sin(n)).toFixed(8)},${Math.sqrt(1-t*t).toFixed(8)})`}),Tc="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",ov=`varying vec2 vUv;uniform samplerCube source;uniform float resolution,depthPass;${rv}
void main(){vec2 uv=(vUv*(resolution+2.)-1.)/resolution;vec3 n=octDir(uv),up=abs(n.y)>.98?vec3(1.,0.,0.):vec3(0.,1.,0.);vec3 t=normalize(cross(up,n)),b=cross(n,t);
if(depthPass>.5){float mean=0.,second=0.;for(int i=0;i<8;i++){float a=float(i)*2.39996323;vec3 direction=normalize(n+(t*cos(a)+b*sin(a))*.035);float d=textureCube(source,direction).a;mean+=d;second+=d*d;}gl_FragColor=vec4(mean/8.,second/8.,0.,1.);return;}
vec3 sum=vec3(0.),d;
${av.map(i=>`d=${i};sum+=textureCube(source,normalize(t*d.x+b*d.y+n*d.z)).rgb;`).join(`
`)}
gl_FragColor=vec4(sum*(3.14159265359/48.),1.);}`;function Ac(i){return new mn(An*(i+2),Fr*(i+2),{type:si,format:Bt,colorSpace:ri,minFilter:Nt,magFilter:Nt,depthBuffer:!1,generateMipmaps:!1})}class lv{constructor(e,t){Object.assign(this,{renderer:e,scene:t,mode:"sliced",layout:"adaptive",captureEnabled:!0,preview:!1,captureFaces:0,filterRuns:0,lastVersion:-1,lastView:"",current:null,metaDirty:!0,origin:new C,probes:Array(La).fill(null),wanted:[],obstacles:new Sc,support:new wc,previousTiles:new Map,gpuBudget:1,maxFaces:6,cpuBudget:2,gpuFaceMs:.5,timerSupported:!1,lastFaces:0,lastCalls:0}),this.raw=new nh(32,{type:si,format:Bt,colorSpace:ri,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),this.irr=Ac(ei),this.depth=Ac(Ei),this.metaData=new Float32Array(An*Fr*4),this.meta=new Nr(this.metaData,An,Fr,Bt,dn),this.meta.minFilter=this.meta.magFilter=yt,this.meta.needsUpdate=!0,this.transitions=new nv(e),this.lastBlends=0,this.fallback=new Nr(new Float32Array([0,0,0,0]),1,1,Bt,dn),this.fallback.needsUpdate=!0,ye.irrAtlas.value=this.irr.texture,ye.depthAtlas.value=this.depth.texture,ye.probeMeta.value=this.meta,this.filterScene=new kr,this.filterCamera=new Ri(-1,1,1,-1,0,1),this.filterMaterial=new Ct({vertexShader:Tc,fragmentShader:ov,uniforms:{source:{value:this.raw.texture},resolution:{value:ei},depthPass:{value:0}},depthTest:!1,depthWrite:!1}),this.quad=new dt(new Dn(2,2),this.filterMaterial),this.filterScene.add(this.quad),this.previewMaterial=new Ct({vertexShader:Tc,fragmentShader:`varying vec2 vUv;uniform samplerCube source;uniform int face;${iv}void main(){vec3 c=textureCube(source,faceDir(vUv,face)).rgb;gl_FragColor=vec4(pow(c/(1.+c),vec3(1./2.2)),1.);}`,uniforms:{source:{value:this.raw.texture},face:{value:0}},depthTest:!1,depthWrite:!1});const n=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],r=[[0,-1,0],[0,-1,0],[0,0,1],[0,0,-1],[0,-1,0],[0,-1,0]];this.cameras=n.map((l,c)=>{const h=new $t(90,1,.3,2048);return h.up.fromArray(r[c]),h.lookAt(new C(...l)),h.layers.set(0),h}),this.markers=new Rr(new Vr(1,6,4),new oi({color:16777215,wireframe:!0}),La),this.markers.layers.set(4),this.markers.frustumCulled=!1,this.markers.count=0,t.add(this.markers);const s=e.getRenderTarget(),a=e.getClearColor(new fe),o=e.getClearAlpha();e.setClearColor(0,0);for(const l of[this.irr,this.depth])e.setRenderTarget(l),e.clear();e.setRenderTarget(s),e.setClearColor(a,o)}invalidate(e=!1){for(const t of this.probes)t&&(t.dirty=!0,t.revision++,e&&(t.ready=!1,t.valid=0));e&&(this.current=null,this.metaDirty=!0,this.transitions.clear())}setLayout(e){this.layout!==e&&(this.layout=e,this.lastView="",this.metaDirty=!0)}invalidateAround(e,t,n){for(const r of this.probes)r&&Math.hypot(r.position.x-e,r.position.z-t)<n+Ht[r.level].spacing*1.5&&!r.dirty&&(r.dirty=!0,r.revision++)}syncWorld(e){if(e.version===this.lastVersion)return;const t=new Map(e.active.map(a=>[a.node.key,a.node])),n=[];for(const[a,o]of t)this.previousTiles.has(a)||n.push(o);for(const[a,o]of this.previousTiles)t.has(a)||n.push(o);this.obstacles=new Sc(e.active.flatMap(a=>a.group.userData.probeObstacles||[]));const r=[],s=new ai;for(const a of e.active){for(const o of a.group.userData.buildings||[])r.push({minX:o.x-o.w/2,maxX:o.x+o.w/2,minZ:o.z-o.d/2,maxZ:o.z+o.d/2,minY:0,maxY:o.h});a.group.updateWorldMatrix(!0,!0),a.group.traverse(o=>{!o.isMesh||o.isInstancedMesh||(o.geometry.boundingBox||o.geometry.computeBoundingBox(),s.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld),!(s.max.y<=.5)&&r.push({minX:s.min.x+e.origin.x,maxX:s.max.x+e.origin.x,minZ:s.min.z+e.origin.z,maxZ:s.max.z+e.origin.z,minY:s.min.y,maxY:s.max.y}))})}this.support=new wc(r);for(const a of this.probes)if(a&&n.some(o=>Or(a.position.x,a.position.z,o)<Ht[a.level].far)){const o=a.spacing,l=yc(a.x*o,Mn[a.layer],a.z*o,(c,h)=>this.obstacles.query(c,h));a.position.distanceToSquared(new C(l.x,l.y,l.z))>.001&&(a.position.set(l.x,l.y,l.z),a.ready=!1,a.valid=0,this.metaDirty=!0),a.blocked=l.blocked,a.dirty=!0,a.revision++}this.previousTiles=t,this.lastVersion=e.version,this.lastView=""}setAnchors(e,t,n,r,s){this.syncWorld(s),r.updateMatrixWorld();const a=R_(r.position.y,this.groundSpacing);if(a!==this.groundSpacing){for(let w=0;w<Ht[0].size**2;w++)this.probes[w]=null;this.groundSpacing=a,this.lastView="",this.metaDirty=!0}const o=[...r.matrixWorld.elements,r.aspect,r.layers.mask,s.version,n.x,n.z].join("/");if(o===this.lastView)return;const l=performance.now(),c={x:e,z:t,cx:r.position.x+n.x,cy:r.position.y,cz:r.position.z+n.z},h=this.anchorPose,u=h&&(Math.hypot(e-h.x,t-h.z)>32||Math.hypot(c.cx-h.cx,c.cy-h.cy,c.cz-h.cz)>64);if(this.lastView&&this.origin.equals(n)&&!u&&l-(this.lastViewTime||0)<100)return;this.anchorPose=c,this.anchorUpdates=(this.anchorUpdates||0)+1,u&&(this.anchorTeleports=(this.anchorTeleports||0)+1),this.lastViewTime=l,this.lastView=o,this.origin.copy(n),this.metaDirty=!0;const d=new Hs().setFromProjectionMatrix(new nt().multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse)),f=new Ai,g=new C,_=[],m=new bt;this.candidates=0,this.pruned=0;for(const w of this.probes)w&&(w.active=!1);for(let w=0;w<Ht.length;w++){const b=Ht[w],S=w===0?e*.65+(r.position.x+n.x)*.35:e,R=w===0?t*.65+(r.position.z+n.z)*.35:t,T=Math.floor(S/b.spacing)-b.size/2,P=Math.floor(R/b.spacing)-b.size/2;ye.grids.value[w].set(T*b.spacing-n.x,P*b.spacing-n.z,b.spacing,b.size),ye.wraps.value[w].set(Ki(T,b.size),Ki(P,b.size));const U=Ua(w,0,this.groundSpacing),y=Math.floor(S/U)-b.size/2,M=Math.floor(R/U)-b.size/2;w===0&&(ye.groundGrid.value.set(y*U-n.x,M*U-n.z,U,b.size),ye.groundWrap.value.set(Ki(y,b.size),Ki(M,b.size)));const D=this.layout==="adaptive"?this.support.mask(w,U,T,P,y,M):null;for(let F=0;F<Mn.length;F++)for(let k=0;k<b.size;k++)for(let H=0;H<b.size;H++){const W=Ua(w,F,this.groundSpacing),G=(F===0?y:T)+H,K=(F===0?M:P)+k;g.set(G*W-n.x,Mn[F],K*W-n.z),f.center.copy(g),f.radius=Math.hypot(W*1.5,110);const V=P_(w,G,K,F),se=`${w}/${G}/${K}/${F}/${W}`,he=!D||D[F*b.size*b.size+k*b.size+H];let ue=this.probes[V];if(he&&ue?.key===se&&(ue.active=!0),!!d.intersectsSphere(f)){if(this.candidates++,!he){this.pruned++;continue}if(ue?.key!==se){const ze=yc(G*W,Mn[F],K*W,(st,ht)=>this.obstacles.query(st,ht));ue={slot:V,key:se,level:w,layer:F,spacing:W,x:G,z:K,position:new C(ze.x,ze.y,ze.z),blocked:ze.blocked,ready:!1,valid:0,dirty:!0,revision:0,last:-1},this.probes[V]=ue}ue.active=!0,ue.priority=Math.hypot((G*W-S)/b.spacing,(K*W-R)/b.spacing)+w*.4+F*.12,!ue.ready&&w>0&&F<2&&G>=Math.floor(e/W)&&G<=Math.floor(e/W)+1&&K>=Math.floor(t/W)&&K<=Math.floor(t/W)+1&&(ue.priority-=20),_.push(ue)}}}this.wanted=_;const p=(r.layers.mask&16)!==0;if(p){for(let w=0;w<_.length;w++){const b=_[w];m.position.copy(b.position).sub(n),m.scale.setScalar(b.level===0?1.2:b.level===1?3:7),m.updateMatrix(),this.markers.setMatrixAt(w,m.matrix),this.markers.setColorAt(w,new fe([14854480,5094043,7509727][b.level]))}this.markers.instanceMatrix.needsUpdate=!0,this.markers.instanceColor&&(this.markers.instanceColor.needsUpdate=!0)}this.markers.count=p?_.length:0}update(e,t,n,r){const s=this.captureFaces,a=this.renderer.info.render.calls;this.mode!=="frozen"&&this.transitions.advance(r,this.probes);for(const o of this.probes)this.mode!=="frozen"&&o&&o.ready&&o.valid<1&&(o.valid=Math.min(1,o.valid+r/Mh),this.metaDirty=!0);if(this.mode!=="frozen"&&this.captureEnabled){const o=this.wanted.filter(d=>d.dirty&&!d.blocked&&this.transitions.canStart(d)).sort((d,f)=>(d.ready?100:0)-(f.ready?100:0)+(d.ready&&f.ready?(d.last-f.last)*10:0)+d.priority-f.priority),l=performance.now(),c=this.mode==="full"?4:1,h=C_(this.gpuCredit||0,this.gpuBudget*c,this.gpuFaceMs,this.maxFaces*c);this.gpuCredit=h.credit;let u=Math.min(h.faces,this.timerSupported?100:c);for(;u-- >0;){let d=this.current?.probe;if(!d||!this.wanted.includes(d)||this.probes[d.slot]!==d){do d=o.shift();while(d&&!this.transitions.canStart(d));this.current=d?{probe:d,face:0,revision:d.revision}:null}if(!d)break;if(this.current.revision!==d.revision&&(this.current.face=0,this.current.revision=d.revision),this.captureFace(d,this.current.face,n),this.current.face++,this.captureFaces++,this.gpuCredit=Math.max(0,this.gpuCredit-this.gpuFaceMs),this.current.face===6){this.publish(d),d.ready=!0,d.dirty=!1,d.last=e,this.filterRuns++,this.metaDirty=!0,this.current=null;const f=o.indexOf(d);f>=0&&o.splice(f,1)}if(performance.now()-l>this.cpuBudget*c)break}}if(this.lastBlends=this.mode==="frozen"?0:this.transitions.render(this.irr,this.depth),this.metaDirty){this.metaData.fill(0);for(const o of this.probes)if(o){const l=o.slot*4;this.metaData[l]=o.position.x-n.x,this.metaData[l+1]=o.position.y,this.metaData[l+2]=o.position.z-n.z,this.metaData[l+3]=o.blocked?-1:o.active?o.valid:0}this.meta.needsUpdate=!0,this.metaDirty=!1}this.lastFaces=this.captureFaces-s,this.lastCalls=this.renderer.info.render.calls-a}captureFace(e,t,n){const r=this.captureScope?.(),s=this.renderer,a=this.cameras[t],o=s.getRenderTarget(),l=s.toneMapping,c=this.scene.background,h=s.getClearColor(new fe),u=s.getClearAlpha();a.position.copy(e.position).sub(n),a.far=Ht[e.level].far,a.updateProjectionMatrix(),a.updateMatrixWorld(),ye.capture.value=1,ye.captureOrigin.value.copy(a.position),ye.captureFar.value=a.far,ye.irrAtlas.value=this.fallback,ye.depthAtlas.value=this.fallback,ye.probeMeta.value=this.fallback;try{s.toneMapping=Vn,this.scene.background=ye.sky.value,s.setRenderTarget(this.raw,t),s.setClearColor(ye.sky.value,1),s.clear(),s.render(this.scene,a)}finally{ye.capture.value=0,ye.irrAtlas.value=this.irr.texture,ye.depthAtlas.value=this.depth.texture,ye.probeMeta.value=this.meta,this.scene.background=c,s.toneMapping=l,s.setRenderTarget(o),s.setClearColor(h,u),r?.()}}publish(e){const t=this.renderer,n=t.getRenderTarget(),r=t.autoClear;t.autoClear=!1;try{const s=e.ready?this.transitions.begin(e,this):null,a=s?s.index:e.slot,o=s?16:An;this.quad.material=this.filterMaterial;for(const[l,c,h]of[[s?this.transitions.newIrr:this.irr,ei,0],[s?this.transitions.newDepth:this.depth,Ei,1]]){const u=c+2;zr(t,l,a%o*u,Math.floor(a/o)*u,u,u,!0),this.filterMaterial.uniforms.resolution.value=c,this.filterMaterial.uniforms.depthPass.value=h,t.render(this.filterScene,this.filterCamera)}}finally{t.autoClear=r,t.setRenderTarget(n)}}drawPreview(e,t){if(!this.preview)return;const n=this.renderer,r=Math.min(94,Math.floor((e-32)/6)),s=e-6*r-24,a=80;this.quad.material=this.previewMaterial,n.autoClear=!1,n.setScissorTest(!0);for(let o=0;o<6;o++)n.setViewport(s+o*r,a,r-3,r-3),n.setScissor(s+o*r,a,r-3,r-3),this.previewMaterial.uniforms.face.value=o,n.render(this.filterScene,this.filterCamera);n.setScissorTest(!1),n.setViewport(0,0,e,t),n.autoClear=!0,this.quad.material=this.filterMaterial}inspect(e,t,n){return Ht.map((r,s)=>{const a=s===0&&t<28.5?ye.groundGrid.value:ye.grids.value[s],o=Math.floor((e-this.origin.x-a.x)/a.z),l=Math.floor((n-this.origin.z-a.y)/a.z),c=o>=0&&l>=0&&o<r.size-1&&l<r.size-1;return{level:s,spacing:a.z,inside:c,near:this.wanted.filter(h=>h.level===s&&Math.abs(h.position.x-e)<r.spacing*1.6&&Math.abs(h.position.z-n)<r.spacing*1.6&&Math.abs(h.position.y-t)<80).map(h=>({position:h.position.toArray(),ready:h.ready,blocked:h.blocked,key:h.key}))}})}stats(){const e=this.wanted.filter(t=>!t.blocked);return{anchorUpdates:this.anchorUpdates||0,anchorTeleports:this.anchorTeleports||0,layout:this.layout,candidates:this.candidates||0,pruned:this.pruned||0,receiverBounds:this.support.bounds.length,byHeight:Mn.map((t,n)=>({height:t,total:e.filter(r=>r.layer===n).length})),ready:e.filter(t=>t.ready).length,total:e.length,dirty:e.filter(t=>t.dirty).length,resident:this.probes.filter(Boolean).length,capacity:La,blocked:this.wanted.length-e.length,faces:this.captureFaces,filtered:this.filterRuns,levels:Ht.map((t,n)=>({spacing:t.spacing,groundSpacing:Ua(n,0,this.groundSpacing),ready:e.filter(r=>r.level===n&&r.ready).length,total:e.filter(r=>r.level===n).length})),heights:Mn,transitions:{...this.transitions.stats(),warming:e.filter(t=>t.ready&&t.valid<1).length},lastBlends:this.lastBlends,atlasMB:(this.irr.width*this.irr.height+this.depth.width*this.depth.height)*8/1048576}}}class cv{constructor(e){this.gl=e.getContext(),this.ext=this.gl.getExtension("EXT_disjoint_timer_query_webgl2"),this.pending=[],this.active=null,this.cpu={},this.gpu={},this.frame=[],this.invalid=0,this.latest={},this.sampleCount=0,this.enabled=!0}beginFrame(){this.poll(),this.cpu={},this.start=performance.now()}cpuPass(e,t){const n=performance.now();try{return t()}finally{this.cpu[e]=(this.cpu[e]||0)+performance.now()-n}}gpuBegin(e,t={}){if(!this.ext||this.active||this.pending.length>=24)return;const n=this.gl.createQuery();this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,n),this.active={name:e,query:n,meta:t}}gpuEnd(){this.active&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.active.name==="probes"&&this.active.meta.faces===0&&!this.active.meta.blends?this.gl.deleteQuery(this.active.query):this.pending.push(this.active),this.active=null)}poll(){if(!this.ext)return;const e=this.gl.getParameter(this.ext.GPU_DISJOINT_EXT),t=[];for(const n of this.pending){const r=this.gl.getQueryParameter(n.query,this.gl.QUERY_RESULT_AVAILABLE);if(e||r){if(e)this.invalid++;else{const s=this.gl.getQueryParameter(n.query,this.gl.QUERY_RESULT)/1e6;this.gpu[n.name]??=[],this.gpu[n.name].push(s),this.gpu[n.name].length>120&&this.gpu[n.name].shift(),this.latest[n.name]={ms:s,...n.meta},this.sampleCount++}this.gl.deleteQuery(n.query)}else t.push(n)}this.pending=t}endFrame(e,t){this.cpu.total=performance.now()-this.start,this.frame.push({cpu:{...this.cpu},interval:e*1e3,counts:t}),this.frame.length>120&&this.frame.shift()}stats(){const e=r=>{if(!r.length)return null;const s=[...r].sort((a,o)=>a-o);return{mean:r.reduce((a,o)=>a+o,0)/r.length,p95:s[Math.floor((s.length-1)*.95)],last:r.at(-1)}},t=["total","environment","weather","debug","tiles","field","probes","ao","main","ui"],n=Object.fromEntries(t.map(r=>[r,e(this.frame.map(s=>s.cpu[r]||0))]));return{gpuSupported:!!this.ext,cpu:n,gpu:{probes:e(this.gpu.probes||[]),ao:e(this.gpu.ao||[]),main:e(this.gpu.main||[]),weather:e(this.gpu.weather||[]),debug:e(this.gpu.debug||[])},interval:e(this.frame.map(r=>r.interval)),latestGPU:this.latest,pendingQueries:this.pending.length,invalidSamples:this.invalid,sampleCount:this.sampleCount,counts:this.frame.at(-1)?.counts}}}function hv(i,e,t,n,r){const s=2*i/e,a=Math.max(.15,Math.sin(r*Math.PI/180));return{texel:s,normalBias:Math.min(.03,s*.08)*a,bias:-Math.min(.015,s*.02)/(n-t)}}const Rc={low:{samples:8,scale:.5},medium:{samples:12,scale:.5},high:{samples:20,scale:1}};function uv(i,e,t="medium"){const n=Rc[t]||Rc.medium,r=Math.max(1,Math.ceil(i*n.scale)),s=Math.max(1,Math.ceil(e*n.scale));return{width:r,height:s,samples:n.samples,bytes:r*s*11}}const Cc="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",yh=`
uniform sampler2D tDepth;uniform vec2 size,nearFar;uniform mat4 inverseProjection,projection;
float viewDepth(float d){return nearFar.x*nearFar.y/(nearFar.y-d*(nearFar.y-nearFar.x));}
vec3 positionAt(vec2 uv,float depth){vec4 p=inverseProjection*vec4(uv*2.-1.,depth*2.-1.,1.);return p.xyz/p.w;}
`,dv=`varying vec2 vUv;${yh}
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
}`,fv=`varying vec2 vUv;${yh}
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
}`;function Na(i,e){return new mn(i,e,{format:Vs,type:bn,minFilter:yt,magFilter:yt,depthBuffer:!1,generateMipmaps:!1})}class pv{constructor(e,t){Object.assign(this,{renderer:e,scene:t,mode:"on",quality:"medium",key:"",builds:0,lastCalls:0,lastTriangles:0,width:0,height:0}),this.depthMaterial=new Ko,this.depthMaterial.colorWrite=!1,this.depthMaterial.blending=kn,this.camera=new $t,this.filterScene=new kr,this.filterCamera=new Ri(-1,1,1,-1,0,1),this.uniforms={tDepth:{value:null},size:{value:new _e},nearFar:{value:new _e},inverseProjection:{value:new nt},projection:{value:new nt},radius:Qe.radius,sampleCount:{value:12}},this.aoMaterial=new Ct({vertexShader:Cc,fragmentShader:dv,uniforms:this.uniforms,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.blurMaterial=new Ct({vertexShader:Cc,fragmentShader:fv,uniforms:{...this.uniforms,source:{value:null},direction:{value:new _e}},depthTest:!1,depthWrite:!1,toneMapped:!1}),this.quad=new dt(new Dn(2,2),this.aoMaterial),this.filterScene.add(this.quad),this.fallback=new Nr(new Uint8Array([255,255,255,255]),1,1),this.fallback.needsUpdate=!0,Qe.texture.value=this.fallback,Qe.depth.value=this.fallback,this.setMode("on")}setMode(e){this.mode=e,L_(e!=="off"),Qe.view.value=e==="view"?1:0}resize(e,t){Qe.viewport.value.set(e,t);const n=uv(e,t,this.quality);if(!(n.width===this.width&&n.height===this.height&&n.samples===this.samples)){this.depthTarget?.dispose(),this.depthTarget?.depthTexture.dispose();for(const r of this.maps||[])r.dispose();Object.assign(this,{width:n.width,height:n.height,samples:n.samples,bytes:n.bytes,key:""}),this.depthTarget=new mn(n.width,n.height,{minFilter:yt,magFilter:yt,depthBuffer:!0,generateMipmaps:!1}),this.depthTarget.depthTexture=new Ws(n.width,n.height,Hn),this.depthTarget.depthTexture.minFilter=this.depthTarget.depthTexture.magFilter=yt,this.maps=[Na(n.width,n.height),Na(n.width,n.height),Na(n.width,n.height)],this.maps[2].texture.minFilter=this.maps[2].texture.magFilter=Nt,this.uniforms.tDepth.value=this.depthTarget.depthTexture,this.uniforms.size.value.set(n.width,n.height),this.uniforms.sampleCount.value=n.samples,Qe.depth.value=this.depthTarget.depthTexture,Qe.texture.value=this.maps[2].texture,Qe.size.value.copy(this.uniforms.size.value)}}needsUpdate(e,t){const n=this.renderer.getDrawingBufferSize(new _e);return this.resize(n.x,n.y),e.updateMatrixWorld(),this.nextKey=[...e.matrixWorld.elements,...e.projectionMatrix.elements,t.version,t.origin.x,t.origin.z,this.quality,Qe.radius.value].join("/"),this.mode!=="off"&&this.nextKey!==this.key}update(e,t){if(this.lastCalls=0,this.lastTriangles=0,!this.needsUpdate(e,t))return!1;const n=this.renderer,r=this.scene,s=n.getRenderTarget();n.getViewport(new Ye);const a=n.getClearColor(new fe),o=n.getClearAlpha(),l=r.background,c=r.overrideMaterial,h=r.fog,u=n.shadowMap.enabled,d=n.autoClear,f=n.info.render.calls,g=n.info.render.triangles;try{return this.camera.copy(e),this.camera.layers.set(0),this.camera.updateMatrixWorld(),this.uniforms.nearFar.value.set(e.near,e.far),Qe.nearFar.value.copy(this.uniforms.nearFar.value),this.uniforms.projection.value.copy(e.projectionMatrix),this.uniforms.inverseProjection.value.copy(e.projectionMatrixInverse),n.autoClear=!0,n.shadowMap.enabled=!1,r.background=null,r.fog=null,r.overrideMaterial=this.depthMaterial,zr(n,this.depthTarget),n.setClearColor(16777215,1),n.clear(),n.render(r,this.camera),r.overrideMaterial=c,this.quad.material=this.aoMaterial,n.setRenderTarget(this.maps[0]),n.render(this.filterScene,this.filterCamera),this.quad.material=this.blurMaterial,this.blurMaterial.uniforms.source.value=this.maps[0].texture,this.blurMaterial.uniforms.direction.value.set(1,0),n.setRenderTarget(this.maps[1]),n.render(this.filterScene,this.filterCamera),this.blurMaterial.uniforms.source.value=this.maps[1].texture,this.blurMaterial.uniforms.direction.value.set(0,1),n.setRenderTarget(this.maps[2]),n.render(this.filterScene,this.filterCamera),this.key=this.nextKey,this.builds++,!0}finally{r.background=l,r.fog=h,r.overrideMaterial=c,n.shadowMap.enabled=u,n.autoClear=d,n.setRenderTarget(s),n.setClearColor(a,o),this.lastCalls=n.info.render.calls-f,this.lastTriangles=n.info.render.triangles-g}}stats(){return{mode:this.mode,quality:this.quality,radius:Qe.radius.value,strength:Qe.strength.value,direct:Qe.direct.value,resolution:[this.width,this.height],samples:this.samples,builds:this.builds,lastCalls:this.lastCalls,lastTriangles:this.lastTriangles,estimatedMiB:(this.bytes||0)/1048576}}}const Fa=Object.freeze({clear:{cloud:0,rain:0,flakes:0,wet:0,snow:0,transmission:1,ambient:1,haze:1,windX:1,windZ:.35},cloudy:{cloud:.76,rain:0,flakes:0,wet:0,snow:0,transmission:.32,ambient:.82,haze:1.65,windX:2.6,windZ:.8},rain:{cloud:.98,rain:1,flakes:0,wet:1,snow:0,transmission:.1,ambient:.64,haze:3.1,windX:5,windZ:1.6},snow:{cloud:.9,rain:0,flakes:1,wet:.1,snow:1,transmission:.23,ambient:.88,haze:3.4,windX:1.3,windZ:.5}}),Pc=i=>Math.max(0,Math.min(1,i));class mv{constructor(){this.mode="clear",this.intensity=1,this.duration=6,this.paused=!1,this.clock=0,this.elapsed=0,this.progress=1,this.revision=0,this.current={...Fa.clear},this.source={...this.current},this.start={...this.current},this.target={...this.current},this.windPhase=[0,0]}set(e,{intensity:t=this.intensity,duration:n=this.duration,instant:r=!1}={}){if(!Fa[e])throw new Error("Unknown weather: "+e);if(!Number.isFinite(t)||!Number.isFinite(n))throw new Error("Invalid weather parameters");this.mode=e,this.intensity=Pc(t),this.duration=Math.max(0,Math.min(30,n));const s={...Fa[e]};for(const a of["rain","flakes","wet","snow"])s[a]*=this.intensity;return this.start={...this.current},this.target=s,this.elapsed=0,Object.keys(s).every(a=>Math.abs(this.current[a]-s[a])<1e-8)?(this.progress=1,!1):(this.progress=0,r||!this.duration?(this.current={...s},this.progress=1,this.commit()):!1)}commit(){const e=Object.keys(this.current).some(t=>Math.abs(this.current[t]-this.source[t])>1e-7);return e&&(this.source={...this.current},this.revision++),e}advance(e){if(this.paused)return!1;e=Math.max(0,Math.min(e,.1)),this.clock+=e;let t=!1;if(this.progress<1){this.elapsed+=e,this.progress=Math.min(1,this.elapsed/this.duration);const n=this.progress*this.progress*(3-2*this.progress);for(const r of Object.keys(this.target))this.current[r]=this.start[r]+(this.target[r]-this.start[r])*n;this.progress===1&&(this.current={...this.target},t=this.commit())}return this.windPhase[0]=(this.windPhase[0]+this.current.windX*e)%4096,this.windPhase[1]=(this.windPhase[1]+this.current.windZ*e)%4096,t}compatibility(){const e=Math.max(Math.abs(this.current.transmission-this.source.transmission),Math.abs(this.current.wet-this.source.wet)*.8,Math.abs(this.current.snow-this.source.snow));return Pc(1-e*1.5)}stats(){return{mode:this.mode,intensity:this.intensity,transition:this.progress,duration:this.duration,paused:this.paused,clock:this.clock,sourceRevision:this.revision,giCompatibility:this.compatibility(),current:{...this.current},source:{...this.source}}}}function gv(){const e=new Uint8Array(65536);let t=88632881;const n=(a,o)=>{let l=Math.imul(a,374761393)^Math.imul(o,668265263);return l=Math.imul(l^l>>>13,1274126177),((l^l>>>16)>>>0)/4294967296},r=(a,o,l)=>{const c=Math.floor(a),h=Math.floor(o),u=a-c,d=o-h,f=u*u*(3-2*u),g=d*d*(3-2*d),_=(m,p)=>n(m%l,p%l);return(_(c,h)*(1-f)+_(c+1,h)*f)*(1-g)+(_(c,h+1)*(1-f)+_(c+1,h+1)*f)*g};for(let a=0;a<16384;a++){t^=t<<13,t^=t>>>17,t^=t<<5;const o=t>>>0&255,l=a%128,c=Math.floor(a/128),h=r(l/16,c/16,8)*.55+r(l/8,c/8,16)*.3+r(l/4,c/4,32)*.15;e.set([o,Math.round(h*255),o,255],a*4)}const s=new Nr(e,128,128,Bt);return s.wrapS=s.wrapT=Cs,s.magFilter=Nt,s.minFilter=Qn,s.generateMipmaps=!0,s.needsUpdate=!0,s}class _v{constructor(e,t){this.renderer=e,this.scene=t,this.size=384,this.resolution=256,this.key="",this.updates=0,this.lastCalls=0,this.camera=new Ri(-192,192,192,-192,1,1e3),this.camera.up.set(0,0,-1),this.target=new mn(256,256,{minFilter:yt,magFilter:yt}),this.target.depthTexture=new Ws(256,256,Hn),this.material=new Ko,It.roof.value=this.target.depthTexture}needed(e,t,n){if(this.enabled=n,It.roofReady.value=n?1:0,!n)return!1;const r=e.position.x+t.origin.x,s=e.position.z+t.origin.z;return this.x=Math.round(r/32)*32-t.origin.x,this.z=Math.round(s/32)*32-t.origin.z,this.top=Math.max(320,Math.ceil((e.position.y+120)/64)*64),this.nextKey=[this.x,this.z,this.top,t.version,t.origin.x,t.origin.z].join("/"),this.nextKey!==this.key}update(){const e=this.renderer,t=this.scene,n=this.camera,r=e.getRenderTarget();e.getViewport(new Ye),e.getScissor(new Ye),e.getScissorTest();const s=t.overrideMaterial,a=t.background,o=e.autoClear,l=e.info.render.calls;n.position.set(this.x,this.top,this.z),n.far=this.top+20,n.lookAt(this.x,0,this.z),n.updateProjectionMatrix(),n.updateMatrixWorld(),It.roofMatrix.value.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse);try{t.overrideMaterial=this.material,t.background=null,e.autoClear=!0,zr(e,this.target),e.clear(),e.render(t,n),this.key=this.nextKey,this.updates++}finally{t.overrideMaterial=s,t.background=a,e.autoClear=o,e.setRenderTarget(r),this.lastCalls=e.info.render.calls-l}}stats(){return{updates:this.updates,lastCalls:this.lastCalls,resolution:256,span:384,estimatedMiB:256*256*8/1048576,enabled:this.enabled||!1}}}const vv="varying vec3 ray;void main(){ray=position;vec4 clip=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=clip.xyww;}",xv=`
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
}`,Mv=`
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
}`,yv=`
${ph}
uniform float isSnow,strength,inspect,aoView;uniform vec3 color;varying vec2 shape;varying vec3 particleWorld;varying float fade;
void main(){
 if(inspect>.5||aoView>.5||labSkyExposure(particleWorld)<.5)discard;
 vec2 q=shape-.5;float alpha;
 if(isSnow>.5)alpha=exp(-dot(q,q)*17.)*smoothstep(.5,.3,length(q));
 else alpha=(1.-smoothstep(.15,.5,abs(q.x)))*(1.-abs(q.y)*2.)*.65;
 alpha*=strength*fade;if(alpha<.015)discard;gl_FragColor=vec4(color,alpha);
 #include <colorspace_fragment>
}`,Sv=`
attribute vec4 seed;uniform float time;uniform vec3 center;uniform mat4 labRoofMatrix;uniform sampler2D labRoofDepth;uniform float roofTop,roofRange;
varying vec2 shape;varying float alpha;
void main(){
 float age=fract(time*1.5+seed.w);vec3 p=center+vec3((seed.x-.5)*150.,0.,(seed.z-.5)*150.);
 vec4 q=labRoofMatrix*vec4(p,1.);vec2 uvRoof=q.xy/q.w*.5+.5;float depth=texture2D(labRoofDepth,uvRoof).r;
 p.y=roofTop-1.-depth*(roofRange-1.)+.06;float radius=.15+age*.65;
 p.xz+=vec2(position.x,-position.y)*radius*2.;shape=uv;alpha=(1.-age)*step(depth,.9999);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
}`,bv="uniform float strength,inspect,aoView;varying vec2 shape;varying float alpha;void main(){if(inspect>.5||aoView>.5)discard;float r=length(shape-.5)*2.,a=(1.-smoothstep(.035,.14,abs(r-.72)))*alpha*strength*.18;if(a<.01)discard;gl_FragColor=vec4(.7,.8,.9,a);}";function Dc(i){const e=new Dn(1,1),t=new oh;t.index=e.index,t.attributes=e.attributes;const n=new Float32Array(i*4);let r=86416945;for(let s=0;s<n.length;s++)r=Math.imul(r,1664525)+1013904223>>>0,n[s]=r/4294967296;return t.setAttribute("seed",new or(n,4)),t.instanceCount=i,t}class Ev{constructor(e,t,n,r){this.camera=t,this.count=1800,this.windPhase={value:new _e},this.time={value:0},this.center={value:new C},this.inspection={inspect:ye.view,aoView:Qe.view},this.skyUniforms={zenith:{value:new fe},horizon:{value:new fe},cloudColor:{value:new fe},cover:{value:0},night:{value:0},noiseMap:{value:n},windPhase:this.windPhase,sunDirection:{value:r},...this.inspection},this.sky=new dt(new Vr(4e3,32,16),new Ct({uniforms:this.skyUniforms,vertexShader:vv,fragmentShader:xv,side:Zt,depthWrite:!1})),this.sky.layers.set(6),this.sky.renderOrder=1e3,this.sky.frustumCulled=!1,e.add(this.sky),t.layers.enable(6),t.layers.enable(7);const s={labRoofDepth:It.roof,labRoofMatrix:It.roofMatrix,labRoofReady:It.roofReady};this.particles=[];for(const a of[0,1]){const o={time:this.time,center:this.center,windPhase:this.windPhase,windVelocity:{value:new _e},viewport:{value:new _e},isSnow:{value:a},strength:{value:0},color:{value:new fe},...s,...this.inspection},l=new dt(Dc(3600),new Ct({uniforms:o,vertexShader:Mv,fragmentShader:yv,transparent:!0,depthWrite:!1}));l.layers.set(7),l.frustumCulled=!1,l.renderOrder=6,e.add(l),this.particles.push(l)}this.splash=new dt(Dc(640),new Ct({uniforms:{time:this.time,center:this.center,strength:{value:0},roofTop:{value:320},roofRange:{value:340},...s,...this.inspection},vertexShader:Sv,fragmentShader:bv,transparent:!0,depthWrite:!1})),this.splash.layers.set(7),this.splash.frustumCulled=!1,this.splash.renderOrder=6,e.add(this.splash)}update(e,t,n,r,s,a=!0){const o=e.current;this.time.value=e.clock,this.windPhase.value.fromArray(e.windPhase),this.sky.position.copy(this.camera.position),this.skyUniforms.cover.value=o.cloud,this.skyUniforms.night.value=+t.night,this.skyUniforms.zenith.value.copy(t.zenith),this.skyUniforms.horizon.value.copy(t.fog),this.skyUniforms.cloudColor.value.copy(t.cloudColor);const l=new C;this.camera.getWorldDirection(l),l.y=0,l.lengthSq()>0&&l.normalize().multiplyScalar(28),this.center.value.copy(this.camera.position).add(l);for(let c=0;c<2;c++){const h=this.particles[c],u=c?o.flakes:o.rain;h.visible=a&&u>.001,h.geometry.instanceCount=Math.max(1,Math.round(this.count*u)),h.material.uniforms.strength.value=Math.min(1,u*2),h.material.uniforms.viewport.value.set(r,s),h.material.uniforms.windVelocity.value.set(o.windX,o.windZ),h.material.uniforms.color.value.set(t.night?c?"#b3c3d8":"#9eb5cc":c?"#ffffff":"#bdd2e1")}this.splash.visible=a&&o.rain>.001&&It.roofReady.value>.5,this.splash.geometry.instanceCount=Math.round(this.count/6*o.rain),this.splash.material.uniforms.strength.value=o.rain,this.splash.material.uniforms.roofTop.value=n.top||320,this.splash.material.uniforms.roofRange.value=(n.top||320)+20}stats(){return{particles:this.particles.filter(e=>e.visible).reduce((e,t)=>e+t.geometry.instanceCount,0),splashes:this.splash.visible?this.splash.geometry.instanceCount:0,quality:this.count<=900?"low":this.count<=1800?"medium":"high",cameraVolume:[240,160,240],skyNoiseReads:3}}}function _i(i,e){const t=i.cloud,n=new fe(e?"#496a93":"#a8cad8"),r=new fe(e?"#2b3b4b":"#848b6c");e&&(n.setRGB(.045,.075,.125),r.setRGB(.022,.035,.055)),n.lerp(new fe(e?"#36516d":"#a5afb9"),t*.65).multiplyScalar(i.ambient),r.lerp(new fe(e?"#29394c":"#9ca8ae"),t*.3).multiplyScalar(i.ambient);const s=new fe(e?"#101e31":"#bfd5dd").lerp(new fe(e?"#17212d":"#778a9c"),t*.85),a=new fe(e?"#16283f":"#cbd9d7").lerp(new fe(e?"#253344":"#94a5b2"),t*.8);return{night:e,data:{...i},sky:n,ground:r,background:s,fog:a,zenith:new fe(e?"#0c172b":"#69aadd").lerp(s,t*.8),cloudColor:new fe(e?"#35475d":"#f1f3ef").lerp(new fe(e?"#293647":"#a7b3bf"),t*.7),sunColor:new fe(e?"#b4cdf4":"#fff2d4").lerp(new fe(e?"#a1b4cd":"#d8e2ef"),t*.5),sunIntensity:(e?.18:2.9)*i.transmission,fogDensity:(e?6e-4:32e-5)*i.haze,exposure:1.15}}class wv{constructor(e,t,n,r,s,a){Object.assign(this,{renderer:e,scene:t,camera:n,sun:r,probes:a}),this.model=new mv,this.sourceVersion=0,this.invalidations=0,this.effectsEnabled=!0,this.noise=gv(),It.noise.value=this.noise,this.roof=new _v(e,t),this.effects=new Ev(t,n,this.noise,s),this.main=_i(this.model.current,!1),this.source=_i(this.model.source,!1),this.applyMain(),a.captureScope=()=>(this.apply(this.source,1),()=>this.applyMain())}apply(e,t){this.sun.color.copy(e.sunColor),this.sun.intensity=e.sunIntensity,this.scene.background.copy(e.background),this.scene.fog.color.copy(e.fog),this.scene.fog.density=e.fogDensity,this.renderer.toneMappingExposure=e.exposure,ye.sky.value.copy(e.sky),ye.ground.value.copy(e.ground),It.wet.value=e.data.wet,It.snow.value=e.data.snow,It.giCompatibility.value=t}applyMain(){this.apply(this.main,this.model.compatibility())}onNightChange(){this.source=_i(this.model.source,!!Ve.enabled.value),this.sourceVersion++,this.main=_i(this.model.current,!!Ve.enabled.value),this.applyMain()}commit(){this.source=_i(this.model.source,!!Ve.enabled.value),this.sourceVersion++,this.invalidations++,this.probes.invalidate(!0)}set(e,t={}){t.paused!==void 0&&(this.model.paused=!!t.paused),t.effects!==void 0&&(this.effectsEnabled=!!t.effects),t.quality!==void 0&&(this.effects.count={low:900,medium:1800,high:3600}[t.quality]||1800),(e!==void 0||t.intensity!==void 0)&&this.model.set(e||this.model.mode,t)&&this.commit(),this.main=_i(this.model.current,!!Ve.enabled.value),this.resolvedProgress=this.model.progress,this.applyMain()}update(e,t,n,r){this.model.advance(e)&&this.commit(),(this.model.progress!==this.resolvedProgress||this.main.night!==!!Ve.enabled.value)&&(this.main=_i(this.model.current,!!Ve.enabled.value),this.resolvedProgress=this.model.progress),this.applyMain(),Ve.atmosphere.value=1+this.model.current.rain*.65+this.model.current.flakes*.25;const s=this.model.current,a=this.model.source,o=s.rain+s.flakes+s.wet+s.snow+a.wet+a.snow>.001,l=this.roof.needed(this.camera,t,o);return this.effects.update(this.model,this.main,this.roof,n,r,this.effectsEnabled),l}stats(){return{...this.model.stats(),sourceVersion:this.sourceVersion,probeInvalidations:this.invalidations,main:{sunIntensity:this.main.sunIntensity,fogDensity:this.main.fogDensity,sky:this.main.sky.toArray(),wet:this.main.data.wet,snow:this.main.data.snow},capture:{sunIntensity:this.source.sunIntensity,wet:this.source.data.wet,snow:this.source.data.snow},effects:this.effects.stats(),roof:this.roof.stats(),effectsEnabled:this.effectsEnabled}}}class Tv{constructor(e,t,n,r,s){Object.assign(this,{renderer:e,probes:t,ao:n,environment:r,sun:s,lastCalls:0}),this.panel=document.getElementById("rt-panel"),this.grid=document.getElementById("rt-grid"),this.select=document.getElementById("rt-target"),this.cards=new Map;const a={source:{value:null},cube:{value:null},kind:{value:0},face:{value:0},channel:{value:-1},gain:{value:1},depthRange:{value:1e3},nearFar:{value:new _e},top:{value:320},available:{value:0},resolution:{value:new _e}};this.material=new Ct({uniforms:a,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
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
   }`,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.scene=new kr,this.camera=new Ri(-1,1,1,-1,0,1),this.scene.add(new dt(new Dn(2,2),this.material)),document.getElementById("rt-toggle").onclick=()=>this.toggle(),document.getElementById("rt-close").onclick=()=>this.toggle(!1),this.select.onchange=()=>this.syncCards(),document.getElementById("rt-gain").oninput=o=>document.getElementById("rt-gain-value").value=Number(o.target.value).toFixed(1)+"×"}get enabled(){return!this.panel.hidden}toggle(e=!this.enabled){this.panel.hidden=!e,e||(this.lastCalls=0),document.body.classList.toggle("rt-open",e),document.getElementById("rt-toggle").setAttribute("aria-expanded",String(e)),e&&this.syncCards()}targets(){const e=this.probes,t=this.ao,n=this.environment,r=e.transitions,s=(a,o,l,c,h,u=!0)=>({id:a,title:o,texture:l?.texture,width:l?.width||1,height:l?.height||1,kind:c,note:h,ready:!!l&&u});return[s("irr","探针辐照度图集",e.irr,0,"RGBA16F · HDR · 有效槽以 Meta 为准",e.filterRuns>0),s("moments","探针深度均值",e.depth,1,"RGBA16F · R=归一化距离；各级远距不同",e.filterRuns>0),s("variance","探针深度标准差",e.depth,7,"sqrt(G−R²) · 显示增益×4",e.filterRuns>0),{id:"meta",title:"探针 Meta / 有效度",texture:e.meta,width:e.meta.image.width,height:e.meta.image.height,kind:2,note:"RGBA32F · RGB=局部位置；W=有效度，红=阻塞",ready:!0},s("cube","探针原始六面",e.raw,6,"RGBA16F · RGB / A径向深度；+X −X +Y / −Y +Z −Z，共用暂存",e.captureFaces>0),s("shadow","太阳 / 月亮阴影",this.sun.shadow.map,5,"RGBA 打包深度 · 正交光空间；关闭时显示缓存"),{...s("ao-depth","AO 深度",t.depthTarget,3,"透视深度 → 对数距离显示",t.builds>0),texture:t.depthTarget?.depthTexture,near:t.camera.near,far:t.camera.far},s("ao-raw","AO 原始采样",t.maps?.[0],1,"R8 · 0遮挡 / 1无遮挡",t.builds>0),s("ao-final","AO 双向模糊后",t.maps?.[2],1,`R8 · ${t.mode==="off"?"已停用，保留缓存":"当前缓存"}`,t.builds>0),{...s("roof","天气顶部遮挡",n.roof.target,4,`顶部深度 → 高度显示 · 384m足迹 · ${n.roof.enabled?"使用中":"停用/缓存"}`,n.roof.updates>0),texture:n.roof.target.depthTexture,near:n.roof.camera.near,far:n.roof.camera.far,top:n.roof.top||320},s("old-irr","GI 过渡 · 旧辐照度",r.oldIrr,0,`128个历史槽 · ${r.active.length} 个正在过渡`,r.blended>0),s("new-irr","GI 过渡 · 新辐照度",r.newIrr,0,"局部暂存 · 不是第二套世界图集",r.blended>0),s("new-depth","GI 过渡 · 新深度矩",r.newDepth,1,"局部暂存 · 与辐照度同步渐变",r.blended>0)]}syncCards(){if(this.select.options.length<2)for(const t of this.targets()){const n=document.createElement("option");n.value=t.id,n.textContent=t.title,this.select.append(n)}this.grid.replaceChildren(),this.cards.clear();const e=this.select.value;for(const t of this.targets())if(e==="grid"||e===t.id){const n=document.createElement("article");n.className="rt-card",n.innerHTML=`<header>${t.title}<span class="rt-size"></span></header><div class="rt-image" aria-label="${t.title}"></div><p></p>`,n.onclick=()=>{this.select.value==="grid"&&(this.select.value=t.id,this.syncCards())},this.grid.append(n),this.cards.set(t.id,n)}this.grid.classList.toggle("single",e!=="grid")}render(e,t){if(this.lastCalls=0,!this.enabled)return;const n=this.renderer,r=this.material.uniforms,s=n.getViewport(new Ye),a=n.getScissor(new Ye),o=n.getScissorTest(),l=n.autoClear,c=n.getRenderTarget(),h=n.info.render.calls,u=this.grid.getBoundingClientRect();r.gain.value=Number(document.getElementById("rt-gain").value),r.depthRange.value=Math.max(1,Number(document.getElementById("rt-range").value)||1e3),r.channel.value=Number(document.getElementById("rt-channel").value);try{n.autoClear=!1,n.setRenderTarget(null),n.setScissorTest(!0),n.setScissor(Math.max(0,u.left),Math.max(0,t-u.bottom),Math.min(e,u.width),Math.min(t,u.height)),n.setViewport(u.left,t-u.bottom,u.width,u.height),r.available.value=0,n.render(this.scene,this.camera);for(const d of this.targets()){const f=this.cards.get(d.id);if(!f)continue;f.querySelector(".rt-size").textContent=`${d.width}×${d.height}${d.kind===6?" ×6":""}`,f.querySelector("p").textContent=d.ready?d.note:"尚未生成 · "+d.note;const g=f.querySelector(".rt-image").getBoundingClientRect(),_=Math.max(0,g.left,u.left),m=Math.min(e,g.right,u.right),p=Math.max(0,g.top,u.top),w=Math.min(t,g.bottom,u.bottom);if(!(m<=_||w<=p))if(n.setScissor(_,t-w,m-_,w-p),r.available.value=+d.ready,r.kind.value=d.kind,r.resolution.value.set(d.width,d.height),r.nearFar.value.set(d.near||1,d.far||1e3),r.top.value=d.top||320,d.kind===6){r.cube.value=d.texture;for(let b=0;b<6;b++)r.face.value=b,n.setViewport(g.left+b%3*g.width/3,t-g.bottom+(1-Math.floor(b/3))*g.height/2,g.width/3,g.height/2),n.render(this.scene,this.camera)}else r.source.value=d.texture||null,n.setViewport(g.left,t-g.bottom,g.width,g.height),n.render(this.scene,this.camera)}}finally{n.setRenderTarget(c),n.setViewport(s),n.setScissor(a),n.setScissorTest(o),n.autoClear=l,this.lastCalls=n.info.render.calls-h}}stats(){return{enabled:this.enabled,lastCalls:this.lastCalls,targets:this.targets().map(({texture:e,...t})=>t)}}}const Q=i=>document.getElementById(i),Ns=[],ke=new d_({canvas:Q("view"),antialias:!0,powerPreference:"high-performance"});ke.setPixelRatio(Math.min(devicePixelRatio,1.5));ke.outputColorSpace=sn;ke.toneMapping=Bo;ke.toneMappingExposure=1.15;ke.shadowMap.enabled=!0;ke.shadowMap.type=Fc;ke.shadowMap.autoUpdate=!1;ke.info.autoReset=!1;ke.debug.onShaderError=(i,e,t,n)=>{const r=[i.getProgramInfoLog(e),i.getShaderInfoLog(t),i.getShaderInfoLog(n)].join(`
`);Ns.push(r),console.error(r),Q("error").hidden=!1,Q("error").textContent="着色器编译失败："+r};const on=new kr;on.background=new fe("#bfd5dd");on.fog=new jo("#cbd9d7",32e-5);const je=new $t(46,innerWidth/innerHeight,8,6500);je.layers.enable(2);je.layers.enable(5);je.position.set(560,720,840);const Ke=new p_(je,ke.domElement);Ke.target.set(0,0,-50);Ke.enableDamping=!0;Ke.dampingFactor=.085;Ke.minDistance=55;Ke.maxDistance=2300;Ke.maxPolarAngle=Math.PI*.475;Ke.minPolarAngle=.12;Ke.screenSpacePanning=!1;Ke.update();let Fs=!0;Ke.addEventListener("start",()=>{Fs=!0});Ke.addEventListener("change",()=>{Fs=!0});const Fe=new J_(on),De=new lv(ke,on),At=new pv(ke,on),Re=new cv(ke);De.timerSupported=!!Re.ext;let Lc=null,Jn=30;const Tt=new wd("#fff2d4",2.9);Tt.castShadow=!0;Tt.shadow.mapSize.set(2048,2048);Tt.shadow.camera.near=1;Tt.shadow.camera.far=3200;Tt.shadow.radius=2;on.add(Tt,Tt.target);const Os=new bd("#ff9f56",0,95,2);on.add(Os);const Gr=new dt(new Vr(2.5,12,8),new oi({color:"#ffb158",toneMapped:!1}));on.add(Gr);Gr.visible=!1;Gr.layers.set(2);let an=innerWidth,Sn=innerHeight,As=0,Ji=0,Tr=performance.now(),Uc=0,Oa=0,za=Tr,No=0,Rs=!1,pn=!1,qi=.26,tl="on",Br=145,lr=42,wt=null,Fo=!1;const Bn=new Set,wn=new C,yi=new C,Ot=new C,xn=new C;function Ys(){const i=Co.degToRad(Br),e=Co.degToRad(lr);yi.set(Math.sin(i)*Math.cos(e),Math.sin(e),Math.cos(i)*Math.cos(e)),De.invalidate()}Ys();const jt=new wv(ke,on,je,Tt,yi,De),zs=new Tv(ke,De,At,jt,Tt);function Av(){const i=[];for(let n=0;n<150;n++){const r=ni(n/150),s=ni((n+1)/150),a=s.x-r.x,o=s.z-r.z,l=Math.hypot(a,o),c=-o/l*2.1,h=a/l*2.1;for(const u of[[r.x+c,25.31,r.z+h],[s.x+c,25.31,s.z+h],[s.x-c,25.31,s.z-h],[r.x+c,25.31,r.z+h],[s.x-c,25.31,s.z-h],[r.x-c,25.31,r.z-h]])i.push(...u)}const t=new Wt;return t.setAttribute("position",new Rt(i,3)),t.computeVertexNormals(),t}const Hr=new bi;on.add(Hr);const Sh=new dt(Av(),new oi({color:"#209f77",side:yn,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));Sh.layers.set(2);Hr.add(Sh);const cr=new bi,bh=new dt(new Pn(5,2,9),new oi({color:"#f7faf0",toneMapped:!1}));bh.position.y=1.5;cr.add(bh);const Eh=new dt(new Pn(4.2,1.8,4.5),new oi({color:"#317a64",toneMapped:!1}));Eh.position.y=3;cr.add(Eh);cr.traverse(i=>i.layers.set(2));Hr.add(cr);const wh=new Wt;wh.setAttribute("position",new Rt([0,0,4,-1.3,0,-2,1.3,0,-2],3));const Rv=new oi({color:"#edffe7",side:yn,toneMapped:!1});for(let i=0;i<28;i++){const e=.025+i*.034,t=ni(e),n=ni(e+.001),r=new dt(wh,Rv);r.position.set(t.x,25.36,t.z),r.rotation.y=Math.atan2(n.x-t.x,n.z-t.z),r.layers.set(2),Hr.add(r)}const Cv=$_.map(i=>{const e=document.createElement("div");return e.className="map-label",e.innerHTML=`<b>${i.name}</b>`,Q("landmarks").append(e),{...i,el:e}});function Pv(){for(const i of Cv){Ot.set(i.x-Fe.origin.x,i.y,i.z-Fe.origin.z);const e=Ot.distanceTo(je.position);Ot.project(je);const t=Ot.z>-1&&Ot.z<1&&e<2e3&&Math.abs(Ot.x)<.98&&Math.abs(Ot.y)<.9;i.el.style.display=t?"flex":"none",t&&(i.el.style.left=`${(Ot.x*.5+.5)*an}px`,i.el.style.top=`${(-Ot.y*.5+.5)*Sn}px`,i.el.style.opacity=Math.max(.35,1-e/2600))}}const Dv={overview:{target:[0,0,-50],offset:[560,720,840]},bridge:{target:[70,25,zt(70)],offset:[150,150,235]},toll:{target:[430,25,zt(430)],offset:[80,150,-115]},bounce:{target:[70,9,390],offset:[120,92,118]},foot:{target:[627.0850731542669,0,479],offset:[12,80,12]},redfoot:{target:[-33,0,657.1399443494956],offset:[12,85,-12]},aofoot:{target:[265.03389707726456,0,288],offset:[-12,85,12]},night:{target:[0,8,320],offset:[0,34,200]}};function $s(i,e=!1){const t=Dv[i];if(!t)return;i==="night"&&nl(!0),pn=!1,Wr();const n=new C(...t.target).sub(Fe.origin),r=n.clone().add(new C(...t.offset));e?(Ke.target.copy(n),je.position.copy(r),Ke.update(),wt=null):wt={start:performance.now(),target0:Ke.target.clone(),pos0:je.position.clone(),target:n,position:r},document.querySelectorAll("[data-preset]").forEach(s=>s.classList.toggle("active",s.dataset.preset===i))}function Wr(){Q("drive").classList.toggle("driving",pn),Q("drive").textContent=pn?"Ⅱ 暂停漫游":"▷ 沿路漫游",Q("drive-status").textContent=pn?"自动漫游 · 72 km/h":"自由观察"}function Th(i){tl=i,ye.gi.value=i==="off"?0:Number(Q("strength").value),ye.gray.value=i==="gray"?1:0,De.captureEnabled=i!=="off",document.querySelectorAll("#gi-mode button").forEach(e=>e.classList.toggle("active",e.dataset.value===i))}let Ic=1;function nl(i){!!Ve.enabled.value!=!!i&&(i?(Ic=ye.debugColors.value,ye.debugColors.value=0):ye.debugColors.value=Ic,Q("debug-colors").value=String(ye.debugColors.value),Ve.enabled.value=+i,jt.onNightChange(),document.body.classList.toggle("night-mode",i),el(),document.querySelectorAll("#time-mode button").forEach(e=>e.classList.toggle("active",e.dataset.value==="night"==!!i)),De.invalidate(!0),il())}function js(i={}){i.enabled!==void 0&&nl(i.enabled);for(const e of["windows","occupancy","windowPower","streets","streetPower","glow"])if(i[e]!==void 0){const t=Number(i[e]),n=Ve[e];if(!Number.isFinite(t)||t===n.value)continue;n.value=Math.max(0,Math.min(e==="windowPower"?6:e==="streetPower"?2.5:e==="glow"?1.5:1,t)),e!=="glow"&&Ve.enabled.value&&De.invalidate()}el(),Q("night-windows").checked=!!Ve.windows.value,Q("street-lights").checked=!!Ve.streets.value;for(const[e,t,n]of[["window-occupancy","occupancy","%"],["window-power","windowPower","×"],["street-power","streetPower","%"],["lamp-glow","glow","%"]])Q(e).value=String(Ve[t].value),Q(e+"-value").value=n==="%"?`${Math.round(Ve[t].value*100)}%`:`${Ve[t].value.toFixed(1)}×`;il()}function Ah(){return{enabled:!!Ve.enabled.value,windows:!!Ve.windows.value,occupancy:Ve.occupancy.value,windowPower:Ve.windowPower.value,streets:!!Ve.streets.value,streetPower:Ve.streetPower.value,glow:Ve.glow.value,visibleFixtures:Fe.active.reduce((i,e)=>i+(e.group.userData.streetFixtures?.length||0),0),maxCandidatesPerFragment:6,streetShadowMaps:0}}function il(){const i=Ah();Q("night-status").textContent=i.enabled?`冷色月光 · 暖色窗光与路灯；当前瓦片 ${i.visibleFixtures} 盏，每片元最多 6 个候选。路灯无逐灯阴影；光晕是显示效果，非体积散射。${De.mode==="frozen"?"探针已冻结，光源改动需恢复更新。":""}`:"日间模式；点底部“夜景街区”体验窗光与暖色路灯。"}document.querySelectorAll("#time-mode button").forEach(i=>i.onclick=()=>nl(i.dataset.value==="night"));Q("night-windows").onchange=i=>js({windows:i.target.checked});Q("street-lights").onchange=i=>js({streets:i.target.checked});for(const[i,e]of[["window-occupancy","occupancy"],["window-power","windowPower"],["street-power","streetPower"],["lamp-glow","glow"]])Q(i).oninput=t=>js({[e]:Number(t.target.value)});function Ci(i,e={}){jt.set(i,e),Q("weather-mode").value=jt.model.mode,Q("weather-intensity").value=String(jt.model.intensity),Q("weather-intensity-value").value=`${Math.round(jt.model.intensity*100)}%`,Q("weather-pause").checked=jt.model.paused,Q("weather-effects").checked=jt.effectsEnabled,Rh()}function Rh(){const i=jt.stats(),e=i.current;Q("weather-status").textContent=`${{clear:"晴天",cloudy:"多云",rain:"下雨",snow:"下雪"}[i.mode]} · ${i.transition<1?`过渡 ${Math.round(i.transition*100)}%`:"已稳定"} · 粒子 ${i.effects.particles} / 水花 ${i.effects.splashes} · 顶部遮挡图 ${i.roof.updates} 次`,Q("environment-values").innerHTML=[["天空 / 云量",`${Math.round(e.cloud*100)}%`],["日月直射",`${i.main.sunIntensity.toFixed(2)}×`],["远景雾密度",`${i.main.fogDensity.toFixed(5)} m⁻¹`],["地表湿润 / 积雪",`${Math.round(e.wet*100)}% / ${Math.round(e.snow*100)}%`],["风速 X / Z",`${e.windX.toFixed(1)} / ${e.windZ.toFixed(1)} m/s`],["GI 源版本",`#${i.sourceVersion} · 天气重捕 ${i.probeInvalidations} 次`],["GI 源兼容权重",`${Math.round(i.giCompatibility*100)}%`]].map(([t,n])=>`<dt>${t}</dt><dd>${n}</dd>`).join("")}Q("weather-mode").onchange=i=>Ci(i.target.value);Q("weather-intensity").oninput=i=>Ci(void 0,{intensity:Number(i.target.value)});Q("weather-duration").onchange=i=>jt.model.duration=Number(i.target.value);Q("weather-pause").onchange=i=>Ci(void 0,{paused:i.target.checked});Q("weather-effects").onchange=i=>Ci(void 0,{effects:i.target.checked});Q("weather-quality").onchange=i=>Ci(void 0,{quality:i.target.value});let Ba="",br=0;function Lv(){if(!Tt.castShadow){Ba="";return}const i=Math.min(1300,Math.max(220,je.position.distanceTo(Ke.target)*.72));(!br||i>br||i<br-64)&&(br=Math.ceil(i/32)*32);const e=br,t=2*e/2048,n=new C().crossVectors(yi,new C(0,1,0)).normalize(),r=new C().crossVectors(n,yi).normalize(),s=Ke.target.clone().add(Fe.origin),a=Math.round(s.dot(n)/t),o=Math.round(s.dot(r)/t),l=Math.round(s.dot(yi)/t),c=[e,a,o,l,Br,lr,Fe.version,Fe.origin.x,Fe.origin.z].join("/");if(c===Ba)return;Ba=c;const h=Tt.shadow.camera;h.left=-e,h.right=e,h.top=e,h.bottom=-e,h.updateProjectionMatrix();const u=hv(e,2048,h.near,h.far,lr);Tt.shadow.bias=u.bias,Tt.shadow.normalBias=u.normalBias;const d=n.multiplyScalar(a*t).addScaledVector(r,o*t).addScaledVector(yi,l*t).sub(Fe.origin);Tt.target.position.copy(d),Tt.position.copy(d).addScaledVector(yi,1500),Tt.target.updateMatrixWorld(),Tt.shadow.needsUpdate=!0,ke.shadowMap.needsUpdate=!0}function Ch(){an=innerWidth,Sn=innerHeight,ke.setSize(an,Sn,!1),je.aspect=an/Sn,je.updateProjectionMatrix(),an<550&&document.body.classList.add("panel-closed")}addEventListener("resize",Ch);Ch();Q("panel-toggle").onclick=()=>document.body.classList.toggle("panel-closed");document.querySelectorAll("[data-preset]").forEach(i=>i.onclick=()=>$s(i.dataset.preset));document.querySelectorAll("#gi-mode button").forEach(i=>i.onclick=()=>Th(i.dataset.value));Q("strength").oninput=i=>{Q("strength-value").value=`${Math.round(i.target.value*100)}%`,tl!=="off"&&(ye.gi.value=Number(i.target.value))};Q("update-mode").onchange=i=>{De.mode=i.target.value};Q("visibility").onchange=i=>ye.visibility.value=+i.target.checked;Q("lighting-view").onchange=i=>{const e=Number(i.target.value);if(e===2){Bs("view");return}At.mode==="view"&&Bs(Ph),ye.view.value=e,Q("lighting-view").value=String(e),Q("view-key").hidden=!e};Q("tone-mapping").onchange=i=>{ke.toneMapping=i.target.value==="aces"?zo:Bo};Q("debug-colors").onchange=i=>{ye.debugColors.value=Number(i.target.value),De.invalidate()};Q("sun").oninput=i=>{Br=Number(i.target.value),Q("sun-value").value=`${Br}°`,Ys()};Q("elevation").oninput=i=>{lr=Number(i.target.value),Q("elevation-value").value=`${lr}°`,Ys()};Q("shadows").onchange=i=>{Tt.castShadow=i.target.checked;for(const e of Fe.tiles.values())e.group?.traverse(t=>{t.isMesh&&(t.receiveShadow=i.target.checked)});De.invalidate()};Q("tiles").onchange=i=>i.target.checked?je.layers.enable(3):je.layers.disable(3);Q("probes").onchange=i=>i.target.checked?je.layers.enable(4):je.layers.disable(4);Q("cube").onchange=i=>{De.preview=i.target.checked,Q("cube-label").hidden=!i.target.checked};Q("coverage").onchange=i=>{ye.coverage.value=+i.target.checked,Q("coverage-key").hidden=!i.target.checked};Q("gpu-budget").onchange=i=>{De.gpuBudget=Number(i.target.value)};Q("face-budget").onchange=i=>{De.maxFaces=Number(i.target.value)};Q("target-fps").onchange=i=>{Jn=Number(i.target.value)};let Ph="on";function Bs(i){i==="view"?(At.mode!=="view"&&(Ph=At.mode),ye.view.value=0,Q("lighting-view").value="2",Q("view-key").hidden=!0):At.mode==="view"&&(ye.view.value=0,Q("lighting-view").value="0",Q("view-key").hidden=!0),At.setMode(i),document.querySelectorAll("#ao-mode button").forEach(e=>e.classList.toggle("active",e.dataset.value===i))}document.querySelectorAll("#ao-mode button").forEach(i=>i.onclick=()=>Bs(i.dataset.value));Q("probe-layout").onchange=i=>De.setLayout(i.target.value);Q("ao-quality").onchange=i=>{At.quality=i.target.value};Q("ao-radius").oninput=i=>{Qe.radius.value=Number(i.target.value),Q("ao-radius-value").value=`${Number(i.target.value).toFixed(1)} m`};Q("ao-strength").oninput=i=>{Qe.strength.value=Number(i.target.value),Q("ao-strength-value").value=`${Math.round(Number(i.target.value)*100)}%`};Q("ao-direct").oninput=i=>{Qe.direct.value=Number(i.target.value),Q("ao-direct-value").value=`${Math.round(Number(i.target.value)*100)}%`};function Dh(i){Q("perf-panel").hidden=!i,Q("perf-toggle").setAttribute("aria-expanded",String(i)),document.body.classList.toggle("perf-open",i)}Q("perf-toggle").onclick=()=>Dh(Q("perf-panel").hidden);Dh(an>=1e3);function Uv(){const i=Re.stats(),e=h=>h?`${h.mean.toFixed(2)} / ${h.p95.toFixed(2)}`:"— / —",t=[["CPU 帧回调",i.cpu.total],["　环境状态",i.cpu.environment],["　天气遮挡提交",i.cpu.weather],["　瓦片处理",i.cpu.tiles],["　探针场调度",i.cpu.field],["　探针提交",i.cpu.probes],["　AO 提交",i.cpu.ao],["　主画面提交",i.cpu.main],["GPU 探针更新",i.gpuSupported?i.gpu.probes:null],["GPU AO 重建",i.gpuSupported?i.gpu.ao:null],["GPU RT 调试",i.gpuSupported?i.gpu.debug:null],["GPU 天气遮挡",i.gpuSupported?i.gpu.weather:null],["GPU 主画面",i.gpuSupported?i.gpu.main:null]];Q("perf-rows").innerHTML=t.map(([h,u])=>{const[d,f]=e(u).split(" / ");return`<tr><td>${h}</td><td>${d}</td><td>${f}</td></tr>`}).join(""),Q("gpu-status").textContent=i.gpuSupported?`GPU 异步计时 · ${i.sampleCount} 个有效样本 · ${i.invalidSamples} 个无效样本已丢弃`:"GPU 计时扩展不可用；显示 CPU 实测，捕获按面数与 CPU 限流";const n=De.stats(),r=At.stats(),s=jt.stats();Q("perf-counts").textContent=`本帧 ${De.lastFaces} 面 · Draw ${ke.info.render.calls}（探针 ${De.lastCalls} / AO ${r.lastCalls}） · 三角形 ${(ke.info.render.triangles/1e3).toFixed(1)}k · 探针 ${n.ready}/${n.total} · 图集 ${n.atlasMB.toFixed(1)} MiB + 过渡 ${n.transitions.estimatedMiB.toFixed(2)} MiB · AO ${r.estimatedMiB.toFixed(2)} MiB · 天气 ${s.roof.estimatedMiB.toFixed(2)} MiB / ${s.effects.particles} 粒子 · 夜灯最多 6 候选/片元`,Q("frame-reference").textContent=`${Jn} FPS · ${(1e3/Jn).toFixed(2)} ms / 帧`;const a=Q("perf-chart"),o=a.getContext("2d"),l=100/Math.max(50,2e3/Jn);o.clearRect(0,0,600,100),o.strokeStyle="#b9c8b9",o.beginPath(),o.moveTo(0,100-1e3/Jn*l),o.lineTo(600,100-1e3/Jn*l),o.stroke(),[Re.frame.map(h=>h.cpu.total),Re.gpu.main||[],Re.gpu.probes||[],Re.gpu.ao||[],Re.gpu.weather||[]].forEach((h,u)=>{o.strokeStyle=["#4b81b1","#34876d","#c18b42","#9275b5","#4ba7b2"][u],o.beginPath(),h.forEach((d,f)=>{const g=f*600/119,_=100-Math.min(100,d*l);f?o.lineTo(g,_):o.moveTo(g,_)}),o.stroke()})}function Iv(){const i=At.stats(),e=Re.latest.ao,t=De.stats();Q("ao-status").textContent=`${i.mode==="off"?"已关闭 · ":""}${i.resolution.join(" × ")} · ${i.samples} 采样/像素 · ${i.estimatedMiB.toFixed(2)} MiB · 最近重建 ${e?`${e.ms.toFixed(2)} ms`:"—"}；静止时复用`,Q("probe-layout-status").textContent=`${t.layout==="adaptive"?"几何自适应":"完整网格"}：需求 ${t.total} / 候选 ${t.candidates}，裁剪 ${t.pruned} 个；固定图集 ${t.atlasMB.toFixed(1)} MiB。`}Q("moving-light").onchange=i=>{Rs=i.target.checked,Os.intensity=Rs?2400:0,Gr.visible=Rs,De.invalidateAround(70,390,180)};Q("drive").onclick=()=>{wt=null,pn=!pn,Wr()};Q("reset").onclick=()=>$s("overview");ke.domElement.addEventListener("pointerdown",()=>{wt=null,pn&&(pn=!1,Wr())});addEventListener("keydown",i=>{i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement||Bn.add(i.code)});addEventListener("keyup",i=>Bn.delete(i.code));addEventListener("blur",()=>Bn.clear());const Nv=performance.now();function Lh(i){if(requestAnimationFrame(Lh),!(i-Tr<1e3/Jn-1))try{Re.beginFrame();const e=Math.min(.05,(i-Tr)/1e3),t=(i-Tr)/1e3;if(Tr=i,Ji=(i-Nv)/1e3,As++,ke.info.reset(),Ke.dampingFactor=1-Math.pow(.915,e*60),wt){const h=Math.min(1,(i-wt.start)/900),u=h*h*(3-2*h);Ke.target.lerpVectors(wt.target0,wt.target,u),je.position.lerpVectors(wt.pos0,wt.position,u),h===1&&(wt=null)}if(pn){qi=(qi+e*20/2400)%1;const h=ni(qi),u=ni(Math.min(1,qi+.025));xn.set(h.x-Fe.origin.x,27,h.z-Fe.origin.z);const d=new C(h.x-u.x,0,h.z-u.z).normalize().multiplyScalar(135);d.y=95,je.position.lerp(xn.clone().add(d),Math.min(1,e*2)),Ke.target.lerp(xn,Math.min(1,e*3))}if(Bn.size){const h=e*Math.max(30,je.position.distanceTo(Ke.target)*.5);je.getWorldDirection(Ot),Ot.y=0,Ot.normalize(),xn.set(0,0,0),Bn.has("KeyW")&&xn.add(Ot),Bn.has("KeyS")&&xn.sub(Ot),Ot.cross(new C(0,1,0)),Bn.has("KeyD")&&xn.add(Ot),Bn.has("KeyA")&&xn.sub(Ot),xn.multiplyScalar(h),Ke.target.add(xn),je.position.add(xn)}(Fs||wt||pn||Bn.size)&&(Fs=Ke.update()),wn.copy(Ke.target).add(Fe.origin);const n=Math.max(40,je.position.y-Ke.target.y);if(Math.abs(wn.x-Fe.origin.x)>760||Math.abs(wn.z-Fe.origin.z)>760){const h=Fe.origin.clone();Fe.rebase(wn.x,wn.z);const u=Fe.origin.clone().sub(h);je.position.sub(u),Ke.target.sub(u),wt&&(wt.target.sub(u),wt.position.sub(u),wt.target0.sub(u),wt.pos0.sub(u))}Re.cpuPass("tiles",()=>Fe.update(wn.x,wn.z,n,i)),ye.origin.value.copy(Fe.origin),Hr.position.copy(Fe.origin).multiplyScalar(-1);const r=ni(qi),s=ni(qi+.001);cr.position.set(r.x,25.5,r.z),cr.rotation.y=Math.atan2(s.x-r.x,s.z-r.z),Os.position.set(70+Math.sin(Ji*.7)*55-Fe.origin.x,10,390+Math.cos(Ji*.7)*20-Fe.origin.z),Gr.position.copy(Os.position),Rs&&As%10===0&&De.invalidateAround(70,390,180);const a=Re.cpuPass("environment",()=>jt.update(e,Fe,an,Sn));jt.roof.lastCalls=0,Re.cpuPass("field",()=>{De.setAnchors(wn.x,wn.z,Fe.origin,je,Fe),Lv()}),a?(Re.gpuBegin("weather"),Re.cpuPass("weather",()=>jt.roof.update()),Re.gpuEnd()):Re.ext&&(Re.gpu.weather??=[],Re.gpu.weather.push(0),Re.gpu.weather.length>120&&Re.gpu.weather.shift());const o=Re.latest.probes;o&&o!==Lc&&o.faces>0&&(De.gpuFaceMs=De.gpuFaceMs*.7+o.ms/o.faces*.3,Lc=o);const l={faces:0,blends:0};De.mode!=="frozen"&&(De.transitions.active.length||De.captureEnabled&&De.wanted.some(h=>h.dirty&&!h.blocked))&&Re.gpuBegin("probes",l),Re.cpuPass("probes",()=>De.update(Ji,Fe.version,Fe.origin,e)),l.faces=De.lastFaces,l.blends=De.lastBlends,Re.gpuEnd(),!l.faces&&!l.blends&&Re.ext&&(Re.gpu.probes??=[],Re.gpu.probes.push(0),Re.gpu.probes.length>120&&Re.gpu.probes.shift());const c=At.needsUpdate(je,Fe);if(At.lastCalls=0,At.lastTriangles=0,c?(Re.gpuBegin("ao"),Re.cpuPass("ao",()=>At.update(je,Fe)),Re.gpuEnd()):Re.ext&&(Re.gpu.ao??=[],Re.gpu.ao.push(0),Re.gpu.ao.length>120&&Re.gpu.ao.shift()),Re.gpuBegin("main"),Re.cpuPass("main",()=>{ke.setRenderTarget(null),ke.setViewport(0,0,an,Sn),ke.render(on,je),De.drawPreview(an,Sn)}),Re.gpuEnd(),zs.enabled?(Re.gpuBegin("debug"),Re.cpuPass("debug",()=>zs.render(an,Sn)),Re.gpuEnd()):Re.ext&&(Re.gpu.debug??=[],Re.gpu.debug.push(0),Re.gpu.debug.length>120&&Re.gpu.debug.shift()),Re.cpuPass("ui",()=>{Pv(),Q("compass").style.transform=`rotate(${Ke.getAzimuthalAngle()}rad)`}),As%20===0&&Fe.active.length&&!Fo&&(Fo=!0,Q("loading").classList.add("hidden")),Oa++,i-za>700&&(No=Math.round(Oa*1e3/(i-za)),Oa=0,za=i),i-Uc>350){Uc=i;const h=Fe.stats(),u=De.stats();Q("fps").textContent=`${No||"--"} FPS`,Q("tile-stats").textContent=`瓦片 ${h.visible} 可见 / ${h.resident} 常驻 · ${(h.bytes/1048576).toFixed(1)} MB 几何估算`,Q("probe-stats").textContent=`探针 ${u.ready}/${u.total} 就绪 · ${De.mode==="frozen"?"已冻结":`待更新 ${u.dirty}`} · ${u.atlasMB.toFixed(1)} MB 图集`,Q("probe-progress").textContent=De.mode==="frozen"?"探针已冻结":u.dirty?`正在分帧捕获，${u.dirty} 个待更新`:u.transitions.active+u.transitions.warming?`捕获完成 · ${u.transitions.active+u.transitions.warming} 个结果平滑发布`:"当前视野捕获完成",Iv(),il(),Rh(),Q("perf-panel").hidden||Uv()}Re.endFrame(t,{calls:ke.info.render.calls,triangles:ke.info.render.triangles,probeFaces:De.lastFaces,probeCalls:De.lastCalls,aoCalls:At.lastCalls,aoTriangles:At.lastTriangles})}catch(e){Re.gpuEnd(),console.error(e),Ns.includes(e.message)||Ns.push(e.message),Q("error").hidden=!1,Q("error").textContent=e.message}}requestAnimationFrame(Lh);function Fv(i,e,t){At.update(je,Fe),ke.setRenderTarget(null),ke.setViewport(0,0,an,Sn),ke.render(on,je);const n=new C(i-Fe.origin.x,e,t-Fe.origin.z).project(je),r=ke.getContext(),s=Math.round((n.x*.5+.5)*r.drawingBufferWidth),a=Math.round((n.y*.5+.5)*r.drawingBufferHeight),o=new Uint8Array(4);if(s<0||a<0||s>=r.drawingBufferWidth||a>=r.drawingBufferHeight||n.z<-1||n.z>1)return{visible:!1};const l=new C(i-Fe.origin.x,e,t-Fe.origin.z),c=l.clone().sub(je.position),h=c.length(),u=new Ad(je.position,c.normalize()),d=u.intersectObjects(Fe.active.map(f=>f.group),!0)[0];return d&&Math.abs(d.distance-h)>.6?{visible:!1,occluded:!0}:(r.readPixels(s,a,1,1,r.RGBA,r.UNSIGNED_BYTE,o),{visible:!0,rgb:[...o].slice(0,3),screen:[(n.x*.5+.5)*an,(-n.y*.5+.5)*Sn]})}window.lab={get ready(){return Fo},state:()=>({frame:As,time:Ji,fps:No,errors:[...Ns],giMode:tl,shadow:Tt.castShadow,updateMode:De.mode,origin:Fe.origin.toArray(),focus:wn.toArray(),tiles:Fe.stats(),probes:De.stats(Ji),calls:ke.info.render.calls,triangles:ke.info.render.triangles,webglMemory:{...ke.info.memory}}),preset:i=>$s(i,!0),setGI:Th,setUpdate:i=>{De.mode=i,Q("update-mode").value=i},jump:(i,e)=>{wt=null;const t=je.position.clone().sub(Ke.target);Ke.target.set(i-Fe.origin.x,0,e-Fe.origin.z),je.position.copy(Ke.target).add(t),Ke.update()},setSun:(i,e)=>{Br=i,lr=e,Ys()},setDrive:i=>{pn=i,Wr()},setProbeCapture:i=>{De.captureEnabled=i},pixels:()=>{ke.setRenderTarget(null),ke.setViewport(0,0,an,Sn),ke.render(on,je);const i=ke.getContext(),e=i.drawingBufferWidth,t=i.drawingBufferHeight,n=new Uint8Array(e*t*4);i.readPixels(0,0,e,t,i.RGBA,i.UNSIGNED_BYTE,n);const r=[];for(let s=0;s<80;s++)for(let a=0;a<120;a++){const o=(Math.floor((s+.5)*t/80)*e+Math.floor((a+.5)*e/120))*4;r.push(n[o],n[o+1],n[o+2])}return r},renderer:ke};Object.assign(window.lab,{readPoint:Fv,inspectProbes:(i,e,t)=>De.inspect(i,e,t),buildings:()=>Fe.active.flatMap(i=>i.group.userData.buildings||[]),aim:(i,e)=>{wt=null,pn=!1,Wr(),Ke.target.fromArray(i).sub(Fe.origin),je.position.copy(Ke.target).add(new C(...e)),Ke.update()}});Object.assign(window.lab,{performance:()=>({...Re.stats(),targetFPS:Jn,resolution:ke.getDrawingBufferSize(new _e).toArray()}),captureBudget:()=>({gpuTargetMs:De.gpuBudget,maxFaces:De.maxFaces,cpuTargetMs:De.cpuBudget,estimatedGPUFaceMs:De.gpuFaceMs,lastFaces:De.lastFaces})});Object.assign(window.lab,{display:()=>({view:At.mode==="view"?"ao":ye.view.value?"indirect":"combined",toneMapping:ke.toneMapping===zo?"aces":"neutral",exposure:ke.toneMappingExposure})});Object.assign(window.lab,{diagnosePoint:async(i,e=[0,1,0],t=!0)=>{const{diagnoseProbePoint:n}=await Vh(async()=>{const{diagnoseProbePoint:r}=await import("./probe-diagnostics-zjnEaGCa.js");return{diagnoseProbePoint:r}},[],import.meta.url);return n(De,i,e,t)}});Object.assign(window.lab,{ao:()=>At.stats(),setAO:Bs,forceAORefresh:()=>{At.key=""}});Object.assign(window.lab,{setProbeLayout:i=>{De.setLayout(i),Q("probe-layout").value=i}});Object.assign(window.lab,{night:Ah,setNight:js,fixtures:()=>Fe.active.flatMap(i=>i.group.userData.streetFixtures||[])});Object.assign(window.lab,{weather:()=>jt.stats(),setWeather:Ci,renderTargets:()=>zs.stats(),setRenderTargets:i=>zs.toggle(i)});new URLSearchParams(location.search).get("scene")==="night"&&$s("night",!0);const ka=new URLSearchParams(location.search).get("weather");ka&&["clear","cloudy","rain","snow"].includes(ka)&&Ci(ka,{instant:!0});export{An as C,Ei as D,dn as F,Mn as H,ei as I,dt as M,Ri as O,Dn as P,Bt as R,kr as S,Ye as V,mn as W,Ct as a,_e as b,C as c,Ht as d,Co as e,Fr as f,ye as l,P_ as p,zr as t};
