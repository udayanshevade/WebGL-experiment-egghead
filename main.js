!function(t){var r={};function n(a){if(r[a])return r[a].exports;var o=r[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,a){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(a,o,function(r){return t[r]}.bind(null,o));return a},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=8)}({8:function(t,r,n){"use strict";n.r(r);var a={};n.r(a),n.d(a,"create",function(){return u}),n.d(a,"clone",function(){return i}),n.d(a,"copy",function(){return c}),n.d(a,"fromValues",function(){return f}),n.d(a,"set",function(){return h}),n.d(a,"identity",function(){return M}),n.d(a,"transpose",function(){return s}),n.d(a,"invert",function(){return d}),n.d(a,"adjoint",function(){return v}),n.d(a,"determinant",function(){return l}),n.d(a,"multiply",function(){return b}),n.d(a,"translate",function(){return m}),n.d(a,"scale",function(){return p}),n.d(a,"rotate",function(){return g}),n.d(a,"rotateX",function(){return x}),n.d(a,"rotateY",function(){return A}),n.d(a,"rotateZ",function(){return w}),n.d(a,"fromTranslation",function(){return S}),n.d(a,"fromScaling",function(){return y}),n.d(a,"fromRotation",function(){return R}),n.d(a,"fromXRotation",function(){return q}),n.d(a,"fromYRotation",function(){return F}),n.d(a,"fromZRotation",function(){return _}),n.d(a,"fromRotationTranslation",function(){return P}),n.d(a,"fromQuat2",function(){return T}),n.d(a,"getTranslation",function(){return E}),n.d(a,"getScaling",function(){return O}),n.d(a,"getRotation",function(){return B}),n.d(a,"fromRotationTranslationScale",function(){return I}),n.d(a,"fromRotationTranslationScaleOrigin",function(){return j}),n.d(a,"fromQuat",function(){return D}),n.d(a,"frustum",function(){return L}),n.d(a,"perspective",function(){return U}),n.d(a,"perspectiveFromFieldOfView",function(){return Y}),n.d(a,"ortho",function(){return C}),n.d(a,"lookAt",function(){return z}),n.d(a,"targetTo",function(){return V}),n.d(a,"str",function(){return X}),n.d(a,"frob",function(){return Z}),n.d(a,"add",function(){return k}),n.d(a,"subtract",function(){return G}),n.d(a,"multiplyScalar",function(){return H}),n.d(a,"multiplyScalarAndAdd",function(){return N}),n.d(a,"exactEquals",function(){return Q}),n.d(a,"equals",function(){return W}),n.d(a,"mul",function(){return nt}),n.d(a,"sub",function(){return at});var o=1e-6,e="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;Math.PI;function u(){var t=new e(16);return e!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function i(t){var r=new e(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}function c(t,r){return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}function f(t,r,n,a,o,u,i,c,f,h,M,s,d,v,l,b){var m=new e(16);return m[0]=t,m[1]=r,m[2]=n,m[3]=a,m[4]=o,m[5]=u,m[6]=i,m[7]=c,m[8]=f,m[9]=h,m[10]=M,m[11]=s,m[12]=d,m[13]=v,m[14]=l,m[15]=b,m}function h(t,r,n,a,o,e,u,i,c,f,h,M,s,d,v,l,b){return t[0]=r,t[1]=n,t[2]=a,t[3]=o,t[4]=e,t[5]=u,t[6]=i,t[7]=c,t[8]=f,t[9]=h,t[10]=M,t[11]=s,t[12]=d,t[13]=v,t[14]=l,t[15]=b,t}function M(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function s(t,r){if(t===r){var n=r[1],a=r[2],o=r[3],e=r[6],u=r[7],i=r[11];t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=n,t[6]=r[9],t[7]=r[13],t[8]=a,t[9]=e,t[11]=r[14],t[12]=o,t[13]=u,t[14]=i}else t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15];return t}function d(t,r){var n=r[0],a=r[1],o=r[2],e=r[3],u=r[4],i=r[5],c=r[6],f=r[7],h=r[8],M=r[9],s=r[10],d=r[11],v=r[12],l=r[13],b=r[14],m=r[15],p=n*i-a*u,g=n*c-o*u,x=n*f-e*u,A=a*c-o*i,w=a*f-e*i,S=o*f-e*c,y=h*l-M*v,R=h*b-s*v,q=h*m-d*v,F=M*b-s*l,_=M*m-d*l,P=s*m-d*b,T=p*P-g*_+x*F+A*q-w*R+S*y;return T?(T=1/T,t[0]=(i*P-c*_+f*F)*T,t[1]=(o*_-a*P-e*F)*T,t[2]=(l*S-b*w+m*A)*T,t[3]=(s*w-M*S-d*A)*T,t[4]=(c*q-u*P-f*R)*T,t[5]=(n*P-o*q+e*R)*T,t[6]=(b*x-v*S-m*g)*T,t[7]=(h*S-s*x+d*g)*T,t[8]=(u*_-i*q+f*y)*T,t[9]=(a*q-n*_-e*y)*T,t[10]=(v*w-l*x+m*p)*T,t[11]=(M*x-h*w-d*p)*T,t[12]=(i*R-u*F-c*y)*T,t[13]=(n*F-a*R+o*y)*T,t[14]=(l*g-v*A-b*p)*T,t[15]=(h*A-M*g+s*p)*T,t):null}function v(t,r){var n=r[0],a=r[1],o=r[2],e=r[3],u=r[4],i=r[5],c=r[6],f=r[7],h=r[8],M=r[9],s=r[10],d=r[11],v=r[12],l=r[13],b=r[14],m=r[15];return t[0]=i*(s*m-d*b)-M*(c*m-f*b)+l*(c*d-f*s),t[1]=-(a*(s*m-d*b)-M*(o*m-e*b)+l*(o*d-e*s)),t[2]=a*(c*m-f*b)-i*(o*m-e*b)+l*(o*f-e*c),t[3]=-(a*(c*d-f*s)-i*(o*d-e*s)+M*(o*f-e*c)),t[4]=-(u*(s*m-d*b)-h*(c*m-f*b)+v*(c*d-f*s)),t[5]=n*(s*m-d*b)-h*(o*m-e*b)+v*(o*d-e*s),t[6]=-(n*(c*m-f*b)-u*(o*m-e*b)+v*(o*f-e*c)),t[7]=n*(c*d-f*s)-u*(o*d-e*s)+h*(o*f-e*c),t[8]=u*(M*m-d*l)-h*(i*m-f*l)+v*(i*d-f*M),t[9]=-(n*(M*m-d*l)-h*(a*m-e*l)+v*(a*d-e*M)),t[10]=n*(i*m-f*l)-u*(a*m-e*l)+v*(a*f-e*i),t[11]=-(n*(i*d-f*M)-u*(a*d-e*M)+h*(a*f-e*i)),t[12]=-(u*(M*b-s*l)-h*(i*b-c*l)+v*(i*s-c*M)),t[13]=n*(M*b-s*l)-h*(a*b-o*l)+v*(a*s-o*M),t[14]=-(n*(i*b-c*l)-u*(a*b-o*l)+v*(a*c-o*i)),t[15]=n*(i*s-c*M)-u*(a*s-o*M)+h*(a*c-o*i),t}function l(t){var r=t[0],n=t[1],a=t[2],o=t[3],e=t[4],u=t[5],i=t[6],c=t[7],f=t[8],h=t[9],M=t[10],s=t[11],d=t[12],v=t[13],l=t[14],b=t[15];return(r*u-n*e)*(M*b-s*l)-(r*i-a*e)*(h*b-s*v)+(r*c-o*e)*(h*l-M*v)+(n*i-a*u)*(f*b-s*d)-(n*c-o*u)*(f*l-M*d)+(a*c-o*i)*(f*v-h*d)}function b(t,r,n){var a=r[0],o=r[1],e=r[2],u=r[3],i=r[4],c=r[5],f=r[6],h=r[7],M=r[8],s=r[9],d=r[10],v=r[11],l=r[12],b=r[13],m=r[14],p=r[15],g=n[0],x=n[1],A=n[2],w=n[3];return t[0]=g*a+x*i+A*M+w*l,t[1]=g*o+x*c+A*s+w*b,t[2]=g*e+x*f+A*d+w*m,t[3]=g*u+x*h+A*v+w*p,g=n[4],x=n[5],A=n[6],w=n[7],t[4]=g*a+x*i+A*M+w*l,t[5]=g*o+x*c+A*s+w*b,t[6]=g*e+x*f+A*d+w*m,t[7]=g*u+x*h+A*v+w*p,g=n[8],x=n[9],A=n[10],w=n[11],t[8]=g*a+x*i+A*M+w*l,t[9]=g*o+x*c+A*s+w*b,t[10]=g*e+x*f+A*d+w*m,t[11]=g*u+x*h+A*v+w*p,g=n[12],x=n[13],A=n[14],w=n[15],t[12]=g*a+x*i+A*M+w*l,t[13]=g*o+x*c+A*s+w*b,t[14]=g*e+x*f+A*d+w*m,t[15]=g*u+x*h+A*v+w*p,t}function m(t,r,n){var a=n[0],o=n[1],e=n[2],u=void 0,i=void 0,c=void 0,f=void 0,h=void 0,M=void 0,s=void 0,d=void 0,v=void 0,l=void 0,b=void 0,m=void 0;return r===t?(t[12]=r[0]*a+r[4]*o+r[8]*e+r[12],t[13]=r[1]*a+r[5]*o+r[9]*e+r[13],t[14]=r[2]*a+r[6]*o+r[10]*e+r[14],t[15]=r[3]*a+r[7]*o+r[11]*e+r[15]):(u=r[0],i=r[1],c=r[2],f=r[3],h=r[4],M=r[5],s=r[6],d=r[7],v=r[8],l=r[9],b=r[10],m=r[11],t[0]=u,t[1]=i,t[2]=c,t[3]=f,t[4]=h,t[5]=M,t[6]=s,t[7]=d,t[8]=v,t[9]=l,t[10]=b,t[11]=m,t[12]=u*a+h*o+v*e+r[12],t[13]=i*a+M*o+l*e+r[13],t[14]=c*a+s*o+b*e+r[14],t[15]=f*a+d*o+m*e+r[15]),t}function p(t,r,n){var a=n[0],o=n[1],e=n[2];return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=r[3]*a,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=r[7]*o,t[8]=r[8]*e,t[9]=r[9]*e,t[10]=r[10]*e,t[11]=r[11]*e,t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}function g(t,r,n,a){var e,u,i,c,f,h,M,s,d,v,l,b,m,p,g,x,A,w,S,y,R,q,F,_,P=a[0],T=a[1],E=a[2],O=Math.sqrt(P*P+T*T+E*E);return O<o?null:(P*=O=1/O,T*=O,E*=O,e=Math.sin(n),i=1-(u=Math.cos(n)),c=r[0],f=r[1],h=r[2],M=r[3],s=r[4],d=r[5],v=r[6],l=r[7],b=r[8],m=r[9],p=r[10],g=r[11],x=P*P*i+u,A=T*P*i+E*e,w=E*P*i-T*e,S=P*T*i-E*e,y=T*T*i+u,R=E*T*i+P*e,q=P*E*i+T*e,F=T*E*i-P*e,_=E*E*i+u,t[0]=c*x+s*A+b*w,t[1]=f*x+d*A+m*w,t[2]=h*x+v*A+p*w,t[3]=M*x+l*A+g*w,t[4]=c*S+s*y+b*R,t[5]=f*S+d*y+m*R,t[6]=h*S+v*y+p*R,t[7]=M*S+l*y+g*R,t[8]=c*q+s*F+b*_,t[9]=f*q+d*F+m*_,t[10]=h*q+v*F+p*_,t[11]=M*q+l*F+g*_,r!==t&&(t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t)}function x(t,r,n){var a=Math.sin(n),o=Math.cos(n),e=r[4],u=r[5],i=r[6],c=r[7],f=r[8],h=r[9],M=r[10],s=r[11];return r!==t&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[4]=e*o+f*a,t[5]=u*o+h*a,t[6]=i*o+M*a,t[7]=c*o+s*a,t[8]=f*o-e*a,t[9]=h*o-u*a,t[10]=M*o-i*a,t[11]=s*o-c*a,t}function A(t,r,n){var a=Math.sin(n),o=Math.cos(n),e=r[0],u=r[1],i=r[2],c=r[3],f=r[8],h=r[9],M=r[10],s=r[11];return r!==t&&(t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[0]=e*o-f*a,t[1]=u*o-h*a,t[2]=i*o-M*a,t[3]=c*o-s*a,t[8]=e*a+f*o,t[9]=u*a+h*o,t[10]=i*a+M*o,t[11]=c*a+s*o,t}function w(t,r,n){var a=Math.sin(n),o=Math.cos(n),e=r[0],u=r[1],i=r[2],c=r[3],f=r[4],h=r[5],M=r[6],s=r[7];return r!==t&&(t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[0]=e*o+f*a,t[1]=u*o+h*a,t[2]=i*o+M*a,t[3]=c*o+s*a,t[4]=f*o-e*a,t[5]=h*o-u*a,t[6]=M*o-i*a,t[7]=s*o-c*a,t}function S(t,r){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function y(t,r){return t[0]=r[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=r[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function R(t,r,n){var a,e,u,i=n[0],c=n[1],f=n[2],h=Math.sqrt(i*i+c*c+f*f);return h<o?null:(i*=h=1/h,c*=h,f*=h,a=Math.sin(r),u=1-(e=Math.cos(r)),t[0]=i*i*u+e,t[1]=c*i*u+f*a,t[2]=f*i*u-c*a,t[3]=0,t[4]=i*c*u-f*a,t[5]=c*c*u+e,t[6]=f*c*u+i*a,t[7]=0,t[8]=i*f*u+c*a,t[9]=c*f*u-i*a,t[10]=f*f*u+e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function q(t,r){var n=Math.sin(r),a=Math.cos(r);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function F(t,r){var n=Math.sin(r),a=Math.cos(r);return t[0]=a,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function _(t,r){var n=Math.sin(r),a=Math.cos(r);return t[0]=a,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function P(t,r,n){var a=r[0],o=r[1],e=r[2],u=r[3],i=a+a,c=o+o,f=e+e,h=a*i,M=a*c,s=a*f,d=o*c,v=o*f,l=e*f,b=u*i,m=u*c,p=u*f;return t[0]=1-(d+l),t[1]=M+p,t[2]=s-m,t[3]=0,t[4]=M-p,t[5]=1-(h+l),t[6]=v+b,t[7]=0,t[8]=s+m,t[9]=v-b,t[10]=1-(h+d),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function T(t,r){var n=new e(3),a=-r[0],o=-r[1],u=-r[2],i=r[3],c=r[4],f=r[5],h=r[6],M=r[7],s=a*a+o*o+u*u+i*i;return s>0?(n[0]=2*(c*i+M*a+f*u-h*o)/s,n[1]=2*(f*i+M*o+h*a-c*u)/s,n[2]=2*(h*i+M*u+c*o-f*a)/s):(n[0]=2*(c*i+M*a+f*u-h*o),n[1]=2*(f*i+M*o+h*a-c*u),n[2]=2*(h*i+M*u+c*o-f*a)),P(t,r,n),t}function E(t,r){return t[0]=r[12],t[1]=r[13],t[2]=r[14],t}function O(t,r){var n=r[0],a=r[1],o=r[2],e=r[4],u=r[5],i=r[6],c=r[8],f=r[9],h=r[10];return t[0]=Math.sqrt(n*n+a*a+o*o),t[1]=Math.sqrt(e*e+u*u+i*i),t[2]=Math.sqrt(c*c+f*f+h*h),t}function B(t,r){var n=r[0]+r[5]+r[10],a=0;return n>0?(a=2*Math.sqrt(n+1),t[3]=.25*a,t[0]=(r[6]-r[9])/a,t[1]=(r[8]-r[2])/a,t[2]=(r[1]-r[4])/a):r[0]>r[5]&&r[0]>r[10]?(a=2*Math.sqrt(1+r[0]-r[5]-r[10]),t[3]=(r[6]-r[9])/a,t[0]=.25*a,t[1]=(r[1]+r[4])/a,t[2]=(r[8]+r[2])/a):r[5]>r[10]?(a=2*Math.sqrt(1+r[5]-r[0]-r[10]),t[3]=(r[8]-r[2])/a,t[0]=(r[1]+r[4])/a,t[1]=.25*a,t[2]=(r[6]+r[9])/a):(a=2*Math.sqrt(1+r[10]-r[0]-r[5]),t[3]=(r[1]-r[4])/a,t[0]=(r[8]+r[2])/a,t[1]=(r[6]+r[9])/a,t[2]=.25*a),t}function I(t,r,n,a){var o=r[0],e=r[1],u=r[2],i=r[3],c=o+o,f=e+e,h=u+u,M=o*c,s=o*f,d=o*h,v=e*f,l=e*h,b=u*h,m=i*c,p=i*f,g=i*h,x=a[0],A=a[1],w=a[2];return t[0]=(1-(v+b))*x,t[1]=(s+g)*x,t[2]=(d-p)*x,t[3]=0,t[4]=(s-g)*A,t[5]=(1-(M+b))*A,t[6]=(l+m)*A,t[7]=0,t[8]=(d+p)*w,t[9]=(l-m)*w,t[10]=(1-(M+v))*w,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function j(t,r,n,a,o){var e=r[0],u=r[1],i=r[2],c=r[3],f=e+e,h=u+u,M=i+i,s=e*f,d=e*h,v=e*M,l=u*h,b=u*M,m=i*M,p=c*f,g=c*h,x=c*M,A=a[0],w=a[1],S=a[2],y=o[0],R=o[1],q=o[2],F=(1-(l+m))*A,_=(d+x)*A,P=(v-g)*A,T=(d-x)*w,E=(1-(s+m))*w,O=(b+p)*w,B=(v+g)*S,I=(b-p)*S,j=(1-(s+l))*S;return t[0]=F,t[1]=_,t[2]=P,t[3]=0,t[4]=T,t[5]=E,t[6]=O,t[7]=0,t[8]=B,t[9]=I,t[10]=j,t[11]=0,t[12]=n[0]+y-(F*y+T*R+B*q),t[13]=n[1]+R-(_*y+E*R+I*q),t[14]=n[2]+q-(P*y+O*R+j*q),t[15]=1,t}function D(t,r){var n=r[0],a=r[1],o=r[2],e=r[3],u=n+n,i=a+a,c=o+o,f=n*u,h=a*u,M=a*i,s=o*u,d=o*i,v=o*c,l=e*u,b=e*i,m=e*c;return t[0]=1-M-v,t[1]=h+m,t[2]=s-b,t[3]=0,t[4]=h-m,t[5]=1-f-v,t[6]=d+l,t[7]=0,t[8]=s+b,t[9]=d-l,t[10]=1-f-M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function L(t,r,n,a,o,e,u){var i=1/(n-r),c=1/(o-a),f=1/(e-u);return t[0]=2*e*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*e*c,t[6]=0,t[7]=0,t[8]=(n+r)*i,t[9]=(o+a)*c,t[10]=(u+e)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=u*e*2*f,t[15]=0,t}function U(t,r,n,a,o){var e=1/Math.tan(r/2),u=void 0;return t[0]=e/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=o&&o!==1/0?(u=1/(a-o),t[10]=(o+a)*u,t[14]=2*o*a*u):(t[10]=-1,t[14]=-2*a),t}function Y(t,r,n,a){var o=Math.tan(r.upDegrees*Math.PI/180),e=Math.tan(r.downDegrees*Math.PI/180),u=Math.tan(r.leftDegrees*Math.PI/180),i=Math.tan(r.rightDegrees*Math.PI/180),c=2/(u+i),f=2/(o+e);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-(u-i)*c*.5,t[9]=(o-e)*f*.5,t[10]=a/(n-a),t[11]=-1,t[12]=0,t[13]=0,t[14]=a*n/(n-a),t[15]=0,t}function C(t,r,n,a,o,e,u){var i=1/(r-n),c=1/(a-o),f=1/(e-u);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(r+n)*i,t[13]=(o+a)*c,t[14]=(u+e)*f,t[15]=1,t}function z(t,r,n,a){var e=void 0,u=void 0,i=void 0,c=void 0,f=void 0,h=void 0,s=void 0,d=void 0,v=void 0,l=void 0,b=r[0],m=r[1],p=r[2],g=a[0],x=a[1],A=a[2],w=n[0],S=n[1],y=n[2];return Math.abs(b-w)<o&&Math.abs(m-S)<o&&Math.abs(p-y)<o?M(t):(s=b-w,d=m-S,v=p-y,e=x*(v*=l=1/Math.sqrt(s*s+d*d+v*v))-A*(d*=l),u=A*(s*=l)-g*v,i=g*d-x*s,(l=Math.sqrt(e*e+u*u+i*i))?(e*=l=1/l,u*=l,i*=l):(e=0,u=0,i=0),c=d*i-v*u,f=v*e-s*i,h=s*u-d*e,(l=Math.sqrt(c*c+f*f+h*h))?(c*=l=1/l,f*=l,h*=l):(c=0,f=0,h=0),t[0]=e,t[1]=c,t[2]=s,t[3]=0,t[4]=u,t[5]=f,t[6]=d,t[7]=0,t[8]=i,t[9]=h,t[10]=v,t[11]=0,t[12]=-(e*b+u*m+i*p),t[13]=-(c*b+f*m+h*p),t[14]=-(s*b+d*m+v*p),t[15]=1,t)}function V(t,r,n,a){var o=r[0],e=r[1],u=r[2],i=a[0],c=a[1],f=a[2],h=o-n[0],M=e-n[1],s=u-n[2],d=h*h+M*M+s*s;d>0&&(h*=d=1/Math.sqrt(d),M*=d,s*=d);var v=c*s-f*M,l=f*h-i*s,b=i*M-c*h;return(d=v*v+l*l+b*b)>0&&(v*=d=1/Math.sqrt(d),l*=d,b*=d),t[0]=v,t[1]=l,t[2]=b,t[3]=0,t[4]=M*b-s*l,t[5]=s*v-h*b,t[6]=h*l-M*v,t[7]=0,t[8]=h,t[9]=M,t[10]=s,t[11]=0,t[12]=o,t[13]=e,t[14]=u,t[15]=1,t}function X(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function Z(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))}function k(t,r,n){return t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t[3]=r[3]+n[3],t[4]=r[4]+n[4],t[5]=r[5]+n[5],t[6]=r[6]+n[6],t[7]=r[7]+n[7],t[8]=r[8]+n[8],t[9]=r[9]+n[9],t[10]=r[10]+n[10],t[11]=r[11]+n[11],t[12]=r[12]+n[12],t[13]=r[13]+n[13],t[14]=r[14]+n[14],t[15]=r[15]+n[15],t}function G(t,r,n){return t[0]=r[0]-n[0],t[1]=r[1]-n[1],t[2]=r[2]-n[2],t[3]=r[3]-n[3],t[4]=r[4]-n[4],t[5]=r[5]-n[5],t[6]=r[6]-n[6],t[7]=r[7]-n[7],t[8]=r[8]-n[8],t[9]=r[9]-n[9],t[10]=r[10]-n[10],t[11]=r[11]-n[11],t[12]=r[12]-n[12],t[13]=r[13]-n[13],t[14]=r[14]-n[14],t[15]=r[15]-n[15],t}function H(t,r,n){return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=r[3]*n,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=r[7]*n,t[8]=r[8]*n,t[9]=r[9]*n,t[10]=r[10]*n,t[11]=r[11]*n,t[12]=r[12]*n,t[13]=r[13]*n,t[14]=r[14]*n,t[15]=r[15]*n,t}function N(t,r,n,a){return t[0]=r[0]+n[0]*a,t[1]=r[1]+n[1]*a,t[2]=r[2]+n[2]*a,t[3]=r[3]+n[3]*a,t[4]=r[4]+n[4]*a,t[5]=r[5]+n[5]*a,t[6]=r[6]+n[6]*a,t[7]=r[7]+n[7]*a,t[8]=r[8]+n[8]*a,t[9]=r[9]+n[9]*a,t[10]=r[10]+n[10]*a,t[11]=r[11]+n[11]*a,t[12]=r[12]+n[12]*a,t[13]=r[13]+n[13]*a,t[14]=r[14]+n[14]*a,t[15]=r[15]+n[15]*a,t}function Q(t,r){return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}function W(t,r){var n=t[0],a=t[1],e=t[2],u=t[3],i=t[4],c=t[5],f=t[6],h=t[7],M=t[8],s=t[9],d=t[10],v=t[11],l=t[12],b=t[13],m=t[14],p=t[15],g=r[0],x=r[1],A=r[2],w=r[3],S=r[4],y=r[5],R=r[6],q=r[7],F=r[8],_=r[9],P=r[10],T=r[11],E=r[12],O=r[13],B=r[14],I=r[15];return Math.abs(n-g)<=o*Math.max(1,Math.abs(n),Math.abs(g))&&Math.abs(a-x)<=o*Math.max(1,Math.abs(a),Math.abs(x))&&Math.abs(e-A)<=o*Math.max(1,Math.abs(e),Math.abs(A))&&Math.abs(u-w)<=o*Math.max(1,Math.abs(u),Math.abs(w))&&Math.abs(i-S)<=o*Math.max(1,Math.abs(i),Math.abs(S))&&Math.abs(c-y)<=o*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(f-R)<=o*Math.max(1,Math.abs(f),Math.abs(R))&&Math.abs(h-q)<=o*Math.max(1,Math.abs(h),Math.abs(q))&&Math.abs(M-F)<=o*Math.max(1,Math.abs(M),Math.abs(F))&&Math.abs(s-_)<=o*Math.max(1,Math.abs(s),Math.abs(_))&&Math.abs(d-P)<=o*Math.max(1,Math.abs(d),Math.abs(P))&&Math.abs(v-T)<=o*Math.max(1,Math.abs(v),Math.abs(T))&&Math.abs(l-E)<=o*Math.max(1,Math.abs(l),Math.abs(E))&&Math.abs(b-O)<=o*Math.max(1,Math.abs(b),Math.abs(O))&&Math.abs(m-B)<=o*Math.max(1,Math.abs(m),Math.abs(B))&&Math.abs(p-I)<=o*Math.max(1,Math.abs(p),Math.abs(I))}var J,K,$,tt,rt,nt=b,at=G,ot=a.create();!function(){var t=document.getElementById("canvas");(J=t.getContext("webgl")).viewport(0,0,t.width,t.height),J.clearColor(1,1,1,1)}(),function(){var t="";t+="attribute vec4 coords;",t+="attribute float pointSize;",t+="uniform mat4 transformMatrix;",t+="void main(void) {",t+=" gl_Position = transformMatrix * coords;",t+="  gl_PointSize = pointSize;",t+="}";var r=J.createShader(J.VERTEX_SHADER);J.shaderSource(r,t),J.compileShader(r);var n="";n+="precision mediump float;",n+="uniform vec4 color;",n+="void main(void) {",n+="  gl_FragColor = color;",n+="}";var a=J.createShader(J.FRAGMENT_SHADER);J.shaderSource(a,n),J.compileShader(a),K=J.createProgram(),J.attachShader(K,r),J.attachShader(K,a),J.linkProgram(K),J.useProgram(K)}(),function(){$=[];for(var t=0;t<30;t+=1)$.push(2*Math.random()-1),$.push(2*Math.random()-1),$.push(2*Math.random()-1);tt=J.createBuffer(),J.bindBuffer(J.ARRAY_BUFFER,tt),J.bufferData(J.ARRAY_BUFFER,new Float32Array($),J.STATIC_DRAW);var r=J.getAttribLocation(K,"coords");J.vertexAttribPointer(r,3,J.FLOAT,!1,0,0),J.enableVertexAttribArray(r),J.bindBuffer(J.ARRAY_BUFFER,null),rt=J.getAttribLocation(K,"pointSize"),J.vertexAttrib1f(rt,1);var n=J.getUniformLocation(K,"color");J.uniform4f(n,0,0,0,1)}(),function t(){a.rotateX(ot,ot,.007),a.rotateY(ot,ot,.013),a.rotateZ(ot,ot,.01);var r=J.getUniformLocation(K,"transformMatrix");J.uniformMatrix4fv(r,!1,ot),J.clear(J.COLOR_BUFFER_BIT),J.drawArrays(J.TRIANGLES,0,30),requestAnimationFrame(t)}()}});