if(!self.define){let e,a={};const s=(s,f)=>(s=new URL(s+".js",f).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let c={};const d=e=>s(e,r),b={module:{uri:r},exports:c,require:d};a[r]=Promise.all(f.map((e=>b[e]||d(e)))).then((e=>(i(...e),c)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-01e1269a.js",revision:"78ad14fec08508560fb64422332c7678"},{url:"assets/404.html-eb9b513d.js",revision:"749c54c9a827d28a61414000adc47977"},{url:"assets/app-cffd82d0.js",revision:"78e3132c6536216247ba51e1e882e471"},{url:"assets/arc-e18c9ab6.js",revision:"427919d3058fd556365fc0731e5f2e26"},{url:"assets/array-9f3ba611.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/auto-fe80bb03.js",revision:"9d99a020735f021d88a203c78f7e0ee0"},{url:"assets/c4Diagram-c0b17d02-1a1815fe.js",revision:"484fafc14da7ad9da2a8990673a16e81"},{url:"assets/classDiagram-a8cc8886-07ca8863.js",revision:"6010cdacfa08b943bb398c7059f43d1e"},{url:"assets/classDiagram-v2-802a48d3-99241607.js",revision:"4abd718f5b5a3a7f84767d7886e76d77"},{url:"assets/codemirror-editor-e60442b7.js",revision:"d1841de4a7b6df854dbb17185c6ce4e3"},{url:"assets/commonjs-dynamic-modules-302442b1.js",revision:"2afbf9a8021b44e8591299a7a7dbfc94"},{url:"assets/commonjsHelpers-de833af9.js",revision:"e2be7f3e66571d8f9280caf91c5e9b86"},{url:"assets/createText-3b1f58a4-f35565d6.js",revision:"7d570f832be3832d6a48ee4e5a3640a2"},{url:"assets/edges-0005682e-5482d205.js",revision:"e1fadfff6e0d3e49a13981bb41f467c3"},{url:"assets/ementa.html-27905f08.js",revision:"b6dd119046f56e9be1bc11d9b75ef215"},{url:"assets/ementa.html-f8bdb86c.js",revision:"4f2ac292a50a81b02641e1f60be20d34"},{url:"assets/erDiagram-dedf2781-9b195c85.js",revision:"ca32d60559aed4ee6d9b14d660aee690"},{url:"assets/flowchart-c441f34d.js",revision:"d0922e56732b0ff9f2eb72eccb4e7e36"},{url:"assets/flowchart-elk-definition-56584a6c-2421c7ef.js",revision:"ae39a217c4bf9ee57e2a142f5be172d7"},{url:"assets/flowDb-ff651a22-5bb30baf.js",revision:"7c4c9eaa4d8214e550b358d625cfbd68"},{url:"assets/flowDiagram-d6f8fe3a-7911d549.js",revision:"1527f3e58bb11fab82c81aeebf524ce7"},{url:"assets/flowDiagram-v2-58f49b84-9c48e733.js",revision:"0f4d369d5577376d3962ea17804c70cc"},{url:"assets/ganttDiagram-088dbd90-476b96e5.js",revision:"4aff01dc4ccbf58211e8c0290fe445ac"},{url:"assets/gitGraphDiagram-e0ffc2d1-d342ca52.js",revision:"87ff2904a2f7e84c8558b7889fa1cc2b"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-2bf332f6.js",revision:"15b6a4a48574f26d02d692ce0cac07fb"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-f58d48f9-24662c95.js",revision:"e0c84411f5266339a6e0aaf21205cb0e"},{url:"assets/index.html-167de890.js",revision:"fd98a8000e62e0877d56a9342c2e0135"},{url:"assets/index.html-286d807b.js",revision:"a5a6a96832a904e31728b4083d3bedb4"},{url:"assets/index.html-3b9390b0.js",revision:"a5a6a96832a904e31728b4083d3bedb4"},{url:"assets/index.html-3b9be616.js",revision:"a5a6a96832a904e31728b4083d3bedb4"},{url:"assets/index.html-48816ee0.js",revision:"462c7a62294fe22e1007d2f0d2e76b04"},{url:"assets/index.html-50a41d4c.js",revision:"d65567bccbd0d466ad113924c7036e03"},{url:"assets/index.html-5288f5cb.js",revision:"a5a6a96832a904e31728b4083d3bedb4"},{url:"assets/index.html-57f4300c.js",revision:"a5a6a96832a904e31728b4083d3bedb4"},{url:"assets/index.html-6fc81466.js",revision:"a5a6a96832a904e31728b4083d3bedb4"},{url:"assets/index.html-7515d218.js",revision:"2f920d36169a4f3a7168937b208a9a51"},{url:"assets/index.html-8867108b.js",revision:"a5a6a96832a904e31728b4083d3bedb4"},{url:"assets/index.html-94e9838d.js",revision:"9f0c1722f169dc5dd0b3de37e31a4aa7"},{url:"assets/index.html-953dbed6.js",revision:"a5a6a96832a904e31728b4083d3bedb4"},{url:"assets/index.html-a79606c8.js",revision:"892ad369c13f3a69d88cc06a8ae6e35a"},{url:"assets/index.html-a7bf7f16.js",revision:"4a25c1211fe32346c9f8342e7b357ef2"},{url:"assets/index.html-c3a787ea.js",revision:"316909c1a54b07c92c0f3092413008da"},{url:"assets/index.html-c44f2dab.js",revision:"64dfe108c1dc3b5ea368b3c70ed5c862"},{url:"assets/index.html-fde9d7ad.js",revision:"7c1678886afc1ab1a6c9d9c4a3489c22"},{url:"assets/infoDiagram-64895a6e-ff4174b9.js",revision:"953e4bef7a5f85bc2f854d5d96f22b73"},{url:"assets/init-77b53fdd.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/intro.html-024662dc.js",revision:"5570100aca67b2d99739f8705e28efa6"},{url:"assets/intro.html-6c36f007.js",revision:"674435d792f774e8dd95860f9cda2033"},{url:"assets/journeyDiagram-adaa34f8-4b594371.js",revision:"99e7136ad063c12e73f1fd0f5152739c"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/layout-8a2ef56a.js",revision:"03a1992647056fe7e5c7afcc131fa394"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/line-afda97ec.js",revision:"9921abe1e29cee9d6828820b7ee56383"},{url:"assets/linear-0dff1c44.js",revision:"60e01c72132b2700845fd290d484ef8b"},{url:"assets/markdown.esm-abe06b83.js",revision:"3e2668565c994b015ab82cac0075bf97"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core-66719097.js",revision:"6fb804a230a4c89e14acb80b3b1c8a76"},{url:"assets/mindmap-definition-57868176-3089e323.js",revision:"7d030d40df364f4f35c51c199ca6eb5e"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/ordinal-ba9b4969.js",revision:"3a57ceba2c0d70da5e704aad84f79b46"},{url:"assets/path-53f90ab3.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-5794cde2.js",revision:"2687434a99577ed4fa4b1050a3f0ac90"},{url:"assets/pieDiagram-3fca7ce7-b3eb43e7.js",revision:"1697dc3d05bf4e12bde1f998525c34e4"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-0ca4be02-600aac92.js",revision:"f15ae35ef8029b20fea3319c6ae9c686"},{url:"assets/requirementDiagram-e13af0f0-d6a43a21.js",revision:"3744f48422b0d467616c26e713dc3717"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/sankeyDiagram-a7f8e230-73d80fb4.js",revision:"2b5c44211fc201ca68806f3cde158224"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/sequenceDiagram-84aa38e3-e6a1e60c.js",revision:"8ea61c670668af2a01aecc960287710a"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/stateDiagram-9a586ac6-ba8e6f63.js",revision:"5f50579c1bb94c1c6a07b16cff5c5ce5"},{url:"assets/stateDiagram-v2-96f2b9df-c4cec6c9.js",revision:"6f0a17b8546ccc3ff2dae8ad1ea2f956"},{url:"assets/style-26ead7b2.css",revision:"58095e3757e77baaca26bcfcf8fda7ed"},{url:"assets/styles-1b0c237a-b5f40abc.js",revision:"d53b1c21ec167e1905433d561b979cce"},{url:"assets/styles-622362e4-85bc081f.js",revision:"c475fa18c1a64eb15c0b485e793b2a82"},{url:"assets/styles-a1a6e33f-3b49496a.js",revision:"cc17390fc2bbac7db5dd7e9691494330"},{url:"assets/svgDraw-70101091-237a3662.js",revision:"17726fa20fd07a240f931b2849d27afc"},{url:"assets/svgDrawCommon-42e92da3-96d6862a.js",revision:"89742ab2234a98f76cf4c41e4c6b7e8c"},{url:"assets/timeline-definition-1a90b03d-10010738.js",revision:"b4a1e4ccc4af4f3552969b8c826ab5d0"},{url:"assets/utils-a5e1dbae-143be013.js",revision:"7c6f998ca9a809acdca07301595257b8"},{url:"assets/vue-repl-d90efd4d.js",revision:"779e2ccb7a23a13040fb4e1d18a00bb2"},{url:"assets/VuePlayground-ea49a1e6.js",revision:"4781cf4e6cb1bc216684ab7463d7baf0"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"d158cad89bd4ee16f84caad47d744e7f"},{url:"404.html",revision:"d5ebf03b1736c72b48205101b3053e83"},{url:"article/index.html",revision:"f827c31c4d00c92e64e3422b538d15fd"},{url:"category/index.html",revision:"d5b8fdbb59710288dcb0613539d60fd0"},{url:"category/plano-de-curso/index.html",revision:"14a0acce91cc5b63c626769339d3fdbf"},{url:"index.html",revision:"c60b3ae39b538427f6b49ff3433bbaab"},{url:"intro.html",revision:"23764a9e4d5be6151022fd587df7c9a7"},{url:"posts/ementa.html",revision:"5393c19742daddecd0c7fd459518552d"},{url:"posts/index.html",revision:"62d2ef090ac9b24c67de1817f91cad3e"},{url:"star/index.html",revision:"bb2ee99eae9589958db9aaa05e34cbe6"},{url:"tag/ementa/index.html",revision:"1d614d60432b32e16c680f51966711b5"},{url:"tag/index.html",revision:"86d5e65521999b30fa9c57ed9f3da518"},{url:"timeline/index.html",revision:"3cadecf87c095adfa2295392795210a4"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/apple-icon-152.png",revision:"72cda603cbf834c3728db9b1c7e8234f"},{url:"assets/icon/chrome-192.png",revision:"5db057d64f8d3948b1b8bf030a3d71dd"},{url:"assets/icon/chrome-512.png",revision:"72cda603cbf834c3728db9b1c7e8234f"},{url:"assets/icon/chrome-mask-192.png",revision:"5db057d64f8d3948b1b8bf030a3d71dd"},{url:"assets/icon/chrome-mask-512.png",revision:"72cda603cbf834c3728db9b1c7e8234f"},{url:"assets/icon/ms-icon-144.png",revision:"72cda603cbf834c3728db9b1c7e8234f"},{url:"avatar.jpg",revision:"8d82aafb3eec10baf4fff8f070f36ccc"},{url:"logo.png",revision:"bbb2548edfb38614fa2c5348b4734609"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map