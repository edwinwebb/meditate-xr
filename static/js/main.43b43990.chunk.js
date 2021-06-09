(this["webpackJsonptest-xr"]=this["webpackJsonptest-xr"]||[]).push([[0],{42:function(e,t,r){},47:function(e,t,r){"use strict";r.r(t);var n=r(5),a=r(36),s=r.n(a),i=(r(42),r(11)),c=r(18),o=r(52),j=r(48),l=r(0),b=r(10);function u(e){var t=Object(n.useState)(!1),r=Object(i.a)(t,2),a=r[0],s=r[1],u=Object(n.useState)(!1),d=Object(i.a)(u,2),O=d[0],p=d[1],x=Object(c.d)(),g=x.isPresenting,m=x.player,h=Object(n.useRef)(),f=e.callbacks,M=f.setInclination,y=f.setMoonPosition,v=f.setMoonScale,S=Object(c.c)("right"),_=Object(c.c)("left"),R=new l.Raycaster,k=new l.Matrix4;return Object(c.e)("squeezestart",(function(e){return s(!0)}),{handedness:"right"}),Object(c.e)("squeezeend",(function(e){return s(!1)}),{handedness:"right"}),Object(c.e)("squeezestart",(function(e){return p(!0)}),{handedness:"left"}),Object(c.e)("squeezeend",(function(e){return p(!1)}),{handedness:"left"}),Object(n.useEffect)((function(){m.children[0].position.set(0,1,0)})),Object(c.f)((function(){a&&g&&M(S.controller.position.y/2-.5),O&&g&&(k.identity().extractRotation(_.controller.matrixWorld),R.ray.origin.setFromMatrixPosition(_.controller.matrixWorld),R.ray.direction.set(0,0,-1).applyMatrix4(k),y(R.intersectObject(h.current)[0].point.toArray()),v(m.children[0].position.distanceTo(_.controller.position)))})),Object(b.jsxs)("group",{children:[Object(b.jsx)(o.a,{}),Object(b.jsx)(j.b,{args:[380,32,32],position:[0,0,0],ref:h,visible:!1,children:Object(b.jsx)("meshBasicMaterial",{side:l.DoubleSide})})]})}var d=r(53);var O=function(e){var t=Object(n.useRef)(),r=e.inclination,a=void 0===r?.2:r,s=Math.min(Math.max(a,-.4),1);return Object(b.jsxs)("group",{children:[Object(b.jsx)("directionalLight",{args:[16645075,.7],position:[1e4,1e3*s,0]}),Object(b.jsx)(d.a,{ref:t,sunPosition:[1,s,0],distance:15e4})]})},p=r(8),x=r(51);function g(e){var t=Object(n.useRef)(),r=Object(x.a)("/moon.glb"),a=r.nodes,s=r.materials;return Object(b.jsx)("group",Object(p.a)(Object(p.a)({ref:t},e),{},{dispose:null,children:Object(b.jsx)("mesh",{geometry:a.Cube008.geometry,material:s["Default OBJ.005"],scale:[.003,.003,.003],"material-transparent":!0,"material-opacity":.98,"material-blending":l.AdditiveBlending})}))}function m(e){var t=e.radius,r=void 0===t?1.737:t,a=e.position,s=void 0===a?[0,100,380]:a,i=e.scale,o=void 0===i?1:i,l=Object(n.useRef)();return Object(c.f)((function(){l.current.position.x=s[0],l.current.position.y=s[1],l.current.position.z=s[2],l.current.scale.set(10*(1-o),10*(1-o),10*(1-o))})),Object(b.jsx)("group",{position:[0,100,-380],ref:l,children:Object(b.jsx)(n.Suspense,{fallback:Object(b.jsx)(j.b,{args:[r,32,32],scale:[1,1,1]}),children:Object(b.jsx)(g,{scale:[10,10,10]})})})}x.a.preload("/meditate-xr/moon.glb");var h=r(50),f=r(49);function M(e){var t=Object(n.useRef)(),r=Object(x.a)("/yinyang.glb").nodes,a=Object(f.a)(["/meditate-xrMarble006_1K_Color.jpg","/meditate-xrMarble006_1K_Roughness.jpg","/meditate-xrMarble006_1K_Normal.jpg","/meditate-xrMarble012_1K_Color.jpg","/meditate-xrMarble012_1K_Roughness.jpg","/meditate-xrMarble012_1K_Normal.jpg"]),s=Object(i.a)(a,6),c=s[0],o=s[1],j=s[2],u=s[3],d=s[4],O=s[5];return Object(b.jsx)("group",Object(p.a)(Object(p.a)({ref:t},e),{},{dispose:null,scale:[6,6,6],children:Object(b.jsx)(h.a,{resolution:512,frames:1/0,near:.1,far:5e4,children:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("mesh",{geometry:r.yang.geometry,children:Object(b.jsx)("meshStandardMaterial",{envMap:e,map:c,roughnessMap:o,normalMap:j,side:l.DoubleSide})}),Object(b.jsx)("mesh",{geometry:r.yin.geometry,children:Object(b.jsx)("meshStandardMaterial",{envMap:e,map:u,roughnessMap:d,normalMap:O,side:l.DoubleSide})})]})}})}))}function y(e){return Object(b.jsx)(n.Suspense,{fallback:Object(b.jsx)(j.a,{args:[1,1,32,32],scale:[1,.01,1]}),children:Object(b.jsx)(M,{scale:[.1,.1,.1]})})}x.a.preload("/meditate-xr/yinyang.glb");var v=function(){var e=Object(n.useState)(.2),t=Object(i.a)(e,2),r=t[0],a=t[1],s=Object(n.useState)([0,0,-380]),o=Object(i.a)(s,2),j=o[0],l=o[1],d=Object(n.useState)(1),p=Object(i.a)(d,2),x=p[0],g=p[1];return Object(b.jsxs)(c.b,{camera:[{far:15e4}],children:[Object(b.jsx)(O,{inclination:r}),Object(b.jsx)(m,{radius:1.737,position:j,scale:x}),Object(b.jsx)(y,{}),Object(b.jsx)(u,{callbacks:{setInclination:a,setMoonPosition:l,setMoonScale:g}}),Object(b.jsx)("hemisphereLight",{args:[5725280,2434096,1]}),Object(b.jsx)(c.a,{})]})};s.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.43b43990.chunk.js.map