(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{270:function(module,exports,__webpack_require__){__webpack_require__(271),__webpack_require__(416),module.exports=__webpack_require__(417)},335:function(module,exports){},417:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(267);module._StorybookPreserveDecorators=!0,Object(_storybook_html__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(607)],module)}.call(this,__webpack_require__(418)(module))},607:function(module,exports,__webpack_require__){var map={"./postprocess.stories.js":610};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=607},610:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"None",(function(){return None})),__webpack_require__.d(__webpack_exports__,"Monochrome",(function(){return Monochrome})),__webpack_require__.d(__webpack_exports__,"Binarize",(function(){return Binarize})),__webpack_require__.d(__webpack_exports__,"Invert",(function(){return Invert})),__webpack_require__.d(__webpack_exports__,"EdgeSobel",(function(){return EdgeSobel})),__webpack_require__.d(__webpack_exports__,"Blur",(function(){return Blur})),__webpack_require__.d(__webpack_exports__,"Swirl",(function(){return Swirl})),__webpack_require__.d(__webpack_exports__,"Godray",(function(){return Godray})),__webpack_require__.d(__webpack_exports__,"Pixelate",(function(){return Pixelate})),__webpack_require__.d(__webpack_exports__,"Hexagon",(function(){return Hexagon})),__webpack_require__.d(__webpack_exports__,"Posterize",(function(){return Posterize})),__webpack_require__.d(__webpack_exports__,"Whitenoise",(function(){return Whitenoise}));var three_module=__webpack_require__(2),EffectComposer=(__webpack_require__(32),__webpack_require__(101),__webpack_require__(34),__webpack_require__(161),__webpack_require__(64),__webpack_require__(608),__webpack_require__(609),__webpack_require__(50),__webpack_require__(35),__webpack_require__(269)),RenderPass=__webpack_require__(268),ShaderPass=__webpack_require__(83),vert_default="varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",frag_default="varying vec2 vUv;\nuniform sampler2D tDiffuse;\nvoid main() {\n  vec4 color = texture2D(tDiffuse, vUv);\n  gl_FragColor = color;\n}\n";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var createManyMesh=function(){for(var geometry=new three_module.a(10,10,10),object=new three_module.f,i=0;100>i;i++){var material=new three_module.e,mesh=new three_module.d(geometry,material);mesh.position.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),mesh.position.multiplyScalar(100*Math.random()),mesh.rotation.set(2*Math.random(),2*Math.random(),2*Math.random()),object.add(mesh)}return object};var threejs=function init(elem){var _ref=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},uniforms=_ref.uniforms,frag=_ref.frag,vert=_ref.vert,camera=new three_module.h(70,window.innerWidth/window.innerHeight,.01,1e3);camera.position.z=100;var scene=new three_module.k,mesh=createManyMesh();scene.add(mesh);var renderer=new three_module.p({antialias:!0});renderer.setSize(window.innerWidth,window.innerHeight);var composer=new EffectComposer.a(renderer);composer.addPass(new RenderPass.a(scene,camera));var refUniforms=_objectSpread({tDiffuse:{value:null,type:"t"},time:{type:"f",value:0},resolution:{type:"v2",value:new three_module.n(window.innerWidth,window.innerHeight)}},uniforms),effect=new ShaderPass.a(new three_module.l({uniforms:refUniforms,vertexShader:vert||vert_default,fragmentShader:frag||frag_default}));function animate(){requestAnimationFrame(animate),mesh.rotation.x+=.0025,mesh.rotation.y+=.005,composer.render(),refUniforms.time.value+=.05}composer.addPass(effect),elem.appendChild(renderer.domElement),animate()},None=(__webpack_exports__.default={title:"Postprocess"},function(){var div=document.createElement("div");return threejs(div),div}),Monochrome=function(){var div=document.createElement("div");return threejs(div,{frag:"#define R_LUMINANCE 0.298912\n#define G_LUMINANCE 0.586611\n#define B_LUMINANCE 0.114478\n\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nconst vec3 monochromeScale = vec3(R_LUMINANCE, G_LUMINANCE, B_LUMINANCE);\n\nvoid main() {\n  vec4 color = texture2D(tDiffuse, vUv);\n  float grayColor = dot(color.rgb, monochromeScale);\n  color = vec4(vec3(grayColor), 1.0);\n  gl_FragColor = vec4(color);\n}\n"}),div},Binarize=function(){var div=document.createElement("div");return threejs(div,{frag:"#define R_LUMINANCE 0.298912\n#define G_LUMINANCE 0.586611\n#define B_LUMINANCE 0.114478\n\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nconst float threshold = 0.53333;\n\nvoid main() {\n  vec4 color = texture2D(tDiffuse, vUv);\n  float v = color.x * R_LUMINANCE + color.y * G_LUMINANCE + color.z * B_LUMINANCE;\n  gl_FragColor = vec4(vec3(step(threshold, v)), 1.0);\n}\n"}),div},Invert=function(){var div=document.createElement("div");return threejs(div,{frag:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\n\nvoid main() {\n  vec4 color = texture2D(tDiffuse, vUv);\n  gl_FragColor = vec4(1.0 - color.x, 1.0 - color.y, 1.0 - color.z, 1.0);\n}\n"}),div},EdgeSobel=function(){var div=document.createElement("div");return threejs(div,{frag:"uniform sampler2D tDiffuse;\nvarying vec2 vUv;\nuniform vec2 resolution;\n\nvoid make_kernel(inout vec4 n[9], sampler2D tex, vec2 coord) {\n  float w = 1.0 / resolution.x;\n  float h = 1.0 / resolution.y;\n\n  n[0] = texture2D(tex, coord + vec2( -w, -h));\n  n[1] = texture2D(tex, coord + vec2(0.0, -h));\n  n[2] = texture2D(tex, coord + vec2(  w, -h));\n  n[3] = texture2D(tex, coord + vec2( -w, 0.0));\n  n[4] = texture2D(tex, coord);\n  n[5] = texture2D(tex, coord + vec2(  w, 0.0));\n  n[6] = texture2D(tex, coord + vec2( -w, h));\n  n[7] = texture2D(tex, coord + vec2(0.0, h));\n  n[8] = texture2D(tex, coord + vec2(  w, h));\n}\n\nvoid main(void) {\n  vec4 n[9];\n  make_kernel(n, tDiffuse, vUv.xy);\n\n  vec4 edge_h = n[2] + (2.0*n[5]) + n[8] - (n[0] + (2.0*n[3]) + n[6]);\n  vec4 edge_v = n[0] + (2.0*n[1]) + n[2] - (n[6] + (2.0*n[7]) + n[8]);\n  vec4 edge = sqrt((edge_h * edge_h) + (edge_v * edge_v));\n\n  gl_FragColor = vec4(1.0 - edge.rgb, 1.0);\n}\n"}),div},Blur=function(){var div=document.createElement("div");return threejs(div,{frag:"uniform sampler2D tDiffuse;\nvarying vec2 vUv;\nuniform vec2 resolution;\nuniform float strength;\n\nvoid make_kernel(inout vec4 n[9], sampler2D tex, vec2 coord) {\n  float w = 1.0 / resolution.x * strength;\n  float h = 1.0 / resolution.y * strength;\n\n  n[0] = texture2D(tex, coord + vec2( -w, -h));\n  n[1] = texture2D(tex, coord + vec2(0.0, -h));\n  n[2] = texture2D(tex, coord + vec2(  w, -h));\n  n[3] = texture2D(tex, coord + vec2( -w, 0.0));\n  n[4] = texture2D(tex, coord);\n  n[5] = texture2D(tex, coord + vec2(  w, 0.0));\n  n[6] = texture2D(tex, coord + vec2( -w, h));\n  n[7] = texture2D(tex, coord + vec2(0.0, h));\n  n[8] = texture2D(tex, coord + vec2(  w, h));\n}\n\nvoid main(void) {\n  vec4 n[9];\n  make_kernel(n, tDiffuse, vUv.xy);\n\n  vec4 sum = (1.0 * n[0] + 2.0 * n[1] + 1.0 * n[2] + 2.0 * n[3] + 4.0 * n[4] + 2.0 * n[5] + 1.0 * n[6] + 2.0 * n[7] + 1.0 * n[8]) / 16.0;\n  gl_FragColor = vec4(sum.rgb, 1.0);\n}\n",uniforms:{strength:{type:"f",value:2.5}}}),div},Swirl=function(){var div=document.createElement("div");return threejs(div,{frag:"uniform sampler2D tDiffuse;\nvarying vec2 vUv;\nuniform vec2 resolution;\n\nuniform float radius;\nuniform float angle;\n\nvoid main() {\n  vec2 center = resolution.xy / 2.0;\n  vec2 pos = (vUv * resolution) - center;\n  float len = length(pos);\n  if (len < radius) {\n    float percent = (radius - len) / radius;\n    float theta = percent * percent * angle;\n    float s = sin(theta);\n    float c = cos(theta);\n    pos = vec2(dot(pos, vec2(c, -s)), dot(pos, vec2(s, c)));\n  }\n  pos += center;\n  vec4 color = texture2D(tDiffuse, pos / resolution);\n  gl_FragColor = color;\n}\n",uniforms:{radius:{type:"f",value:500},angle:{type:"f",value:5}}}),div},Godray=function(){var div=document.createElement("div");return threejs(div,{frag:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\n\nuniform vec2 center;\nconst float blurWidth = -0.85;\n#define NUM_SAMPLES 100\n\nvoid main() {\n  vec2 ray = vUv - center;\n  vec3 color = vec3(0.0);\n\n  for(int i = 0; i < NUM_SAMPLES; i++) {\n    float scale = 1.0 + blurWidth * (float(i) / float(NUM_SAMPLES - 1));\n    color += (texture2D(tDiffuse, (ray * scale) + center).xyz) / float(NUM_SAMPLES);\n  }\n  gl_FragColor = vec4(color, 1.0);\n}\n",uniforms:{center:{type:"v2",value:new three_module.n(.25,.25)}}}),div},Pixelate=function(){var div=document.createElement("div");return threejs(div,{frag:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 resolution;\nuniform float size;\n\nvoid main() {\n  vec2 vUv2 = vUv;\n  vUv2.x = floor(vUv2.x * resolution.x / size) / (resolution.x / size) + (size / 2.0) / resolution.x;\n  vUv2.y = floor(vUv2.y * resolution.y / size) / (resolution.y / size) + (size / 2.0) / resolution.y;\n  vec4 color = texture2D(tDiffuse, vUv2);\n  gl_FragColor = color;\n}\n",uniforms:{size:{type:"f",value:10}}}),div},Hexagon=function(){var div=document.createElement("div");return threejs(div,{frag:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 resolution;\nuniform float size;\n\nconst float PI = 3.14159265359;\nconst float TAU = 2.0*PI;\nfloat deg30 = TAU/12.0;\n\nfloat hexDist(vec2 a, vec2 b){\n\tvec2 p = abs(b-a);\n\tfloat s = sin(deg30);\n\tfloat c = cos(deg30);\n\t\n\tfloat diagDist = s*p.x + c*p.y;\n\treturn max(diagDist, p.x)/c;\n}\n\nvec2 nearestHex(float s, vec2 st){\n\tfloat h = sin(deg30)*s;\n\tfloat r = cos(deg30)*s;\n\tfloat b = s + 2.0*h;\n\tfloat a = 2.0*r;\n\tfloat m = h/r;\n\n\tvec2 sect = st/vec2(2.0*r, h+s);\n\tvec2 sectPxl = mod(st, vec2(2.0*r, h+s));\n\t\n\tfloat aSection = mod(floor(sect.y), 2.0);\n\t\n\tvec2 coord = floor(sect);\n\tif (aSection > 0.0) {\n\t\tif (sectPxl.y < (h-sectPxl.x*m)) {\n\t\t\tcoord -= 1.0;\n\t\t} else if(sectPxl.y < (-h + sectPxl.x*m)) {\n\t\t\tcoord.y -= 1.0;\n\t\t}\n\t} else {\n    if (sectPxl.x > r) {\n      if (sectPxl.y < (2.0*h - sectPxl.x * m)) {\n        coord.y -= 1.0;\n      }\n    } else {\n      if (sectPxl.y < (sectPxl.x*m)) {\n        coord.y -= 1.0;\n      } else {\n        coord.x -= 1.0;\n      }\n    }\n\t}\n\t\n\tfloat xoff = mod(coord.y, 2.0)*r;\n\treturn vec2(coord.x*2.0*r-xoff, coord.y*(h+s))+vec2(r*2.0, s);\n}\n\nvoid main() {\n  float s = resolution.x / size;\n  vec2 nearest = nearestHex(s, gl_FragCoord.xy);\n  vec4 texel = texture2D(tDiffuse, nearest / resolution.xy);\n  float dist = hexDist(gl_FragCoord.xy, nearest);\n  float interior = 1.0 - smoothstep(s - 1.0, s, dist);\n  gl_FragColor = vec4(texel.rgb * interior, 1.0);\n}\n",uniforms:{size:{type:"f",value:150}}}),div},Posterize=function(){var div=document.createElement("div");return threejs(div,{frag:"uniform sampler2D tDiffuse;\nvarying vec2 vUv;\nuniform float gamma;\nuniform float numColors;\n\nvoid main() {\n  vec3 c = texture2D(tDiffuse, vUv).rgb;\n  c = pow(c, vec3(gamma, gamma, gamma));\n  c = c * numColors;\n  c = floor(c);\n  c = c / numColors;\n  c = pow(c, vec3(1.0 / gamma));\n  gl_FragColor = vec4(c, 1.0);\n}\n",uniforms:{gamma:{type:"f",value:.6},numColors:{type:"f",value:8}}}),div},Whitenoise=function(){var div=document.createElement("div");return threejs(div,{frag:"precision mediump float;\n\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\n\nuniform float time;\nuniform vec2 resolution;\n\nfloat random(vec2 st) {\n  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);\n}\n\nvoid main(void) {\n  vec2 st = gl_FragCoord.xy/resolution.xy;\n  float rnd = fract(random(st) + time);\n  vec4 color = texture2D(tDiffuse, vUv);\n  gl_FragColor = vec4(mix(vec3(rnd).rgb, color.rgb, 0.5), 1.0);\n}\n"}),div}}},[[270,1,2]]]);
//# sourceMappingURL=main.1a2af6d231ab325b0867.bundle.js.map