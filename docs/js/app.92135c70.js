(function(a){function t(t){for(var o,r,s=t[0],c=t[1],l=t[2],u=0,h=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(a[o]=c[o]);p&&p(t);while(h.length)h.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var a,t=0;t<i.length;t++){for(var e=i[t],o=!0,s=1;s<e.length;s++){var c=e[s];0!==n[c]&&(o=!1)}o&&(i.splice(t--,1),a=r(r.s=e[0]))}return a}var o={},n={app:0},i=[];function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=a,r.c=o,r.d=function(a,t,e){r.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},r.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},r.t=function(a,t){if(1&t&&(a=r(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var o in a)r.d(e,o,function(t){return a[t]}.bind(null,o));return e},r.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return r.d(t,"a",t),t},r.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},r.p="/okayu-button/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=c;i.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"0321":function(a,t,e){a.exports=e.p+"img/BG2.e1f863da.png"},"0c4e":function(a,t,e){},1564:function(a,t,e){"use strict";var o={info:{title:"おかゆボタン",info:"通知",null:"なし",developer:"開発：zyzsdy 二次開発：茶目",deployer:"サーバー配置：KirinCoffee 晨轩",audioStaff:"協力：QA 雪毬 星尘",about:"スタッフ",toGithub:"Githubで翻訳に参加、音声を追加および提案をしてください。",notOfficial:"このサイトはファン作品であり、公式とは関係ありません。",overlapTips:"声重なる再生モードは手動で停止できません。大量のスレッドを作成するので、後リフレッシュしてください。"},action:{toggleNavbar:"ナビゲーションバーを切り替える",close:"閉じる",copy:"コピー",control:"コントロール",stopvoice:"再生停止",randomplay:"ランダム",overlap:"声重なる可能",autoplay:"とまらないホロライブ",playing:"現在再生：",noplay:"再生なし"},lang:{"zh-CN":"中国語","en-US":"英語","ja-JP":"日本語"}};t["a"]=o},"296e":function(a,t,e){"use strict";var o={info:{title:"Okayu Button",info:"Information",null:"Empty",developer:"Fork from zyzsdy, developed by Cyame.",deployer:"Deployed by KirinCoffee & Chenxuan353.",audioStaff:"Collaborated by QA & Yukimari & StarDustFallen",about:"About",toGithub:"Looking forward to your participation in translation, add audio or make suggestions on Github:",notOfficial:"This is merely a fan work with no association with the official.",overlapTips:"There're still a branch of bugs to fix, it will create a new thread once a button is clicked. So please refresh the page occasionally and enjoy it."},action:{toggleNavbar:"Switch the Navigator",close:"Close",copy:"Copy",control:"Control",stopvoice:"Stop",randomplay:"Random",overlap:"Allow overlap",autoplay:"Autoplay",playing:"Now Playing: ",noplay:"Nothing is playing now"},lang:{"zh-CN":"Chinese","en-US":"English","ja-JP":"Japanese"}};t["a"]=o},"2f6e":function(a,t,e){"use strict";var o={info:{title:"饭团猫按钮",info:"消息",null:"空",developer:"原作：zyzsdy 二次开发：茶目 ",deployer:"服务器部署：KirinCoffee 晨轩",audioStaff:"协力：QA 雪毬 星尘",about:"关于",toGithub:"欢迎在Github参与翻译、增补音频或提出建议",notOfficial:"本站为爱好者作品，和Hololive官方无关，如有任何问题，恳请批评指正。",overlapTips:"重叠播放无法暂停，而且会创建大量线程，玩够了最好刷新一下~"},action:{toggleNavbar:"切换导航栏",close:"关闭",copy:"复制",control:"控制面板",stopvoice:"停止",randomplay:"随机播放",overlap:"允许声音重叠",autoplay:"自动播放",playing:"正在播放：",noplay:"暂无播放"},lang:{"zh-CN":"简体中文","en-US":"英语","ja-JP":"日文"}};t["a"]=o},"3dfd":function(a,t,e){"use strict";var o,n,i,r,s=function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{attrs:{id:"app"}},[o("el-container",[o("Modal"),o("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"navbar-header"},[o("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-navbar-collapse","aria-expanded":"false"}},[o("span",{staticClass:"sr-only"},[a._v(a._s(a.$t("action.toggleNavbar")))]),o("span",{staticClass:"icon-bar"}),o("span",{staticClass:"icon-bar"}),o("span",{staticClass:"icon-bar"})]),o("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a._v(a._s(a.$t("info.title")))])],1),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-navbar-collapse"}},[o("ul",{staticClass:"nav navbar-nav"},[o("li",[o("a",{attrs:{href:"https://www.youtube.com/channel/UCvaTdHTWBGv3MKj3KVqJVCw",target:"_blank"}},[o("img",{attrs:{src:"resources/youtube_social_icon_red.png",height:"18"}})])]),o("li",[o("a",{attrs:{href:"https://twitter.com/nekomataokayu",target:"_blank"}},[o("img",{attrs:{src:"resources/Twitter_Social_Icon_Circle_Color.png",height:"18"}})])])]),o("ul",{staticClass:"nav navbar-nav navbar-right"},[o("li",{staticClass:"dropdown"},[o("a",{staticClass:"dropdown-toggle",attrs:{href:"javascript:;","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[a._v(a._s(a.$t("lang."+a.currentLang))+" "),o("span",{staticClass:"caret"})]),o("ul",{staticClass:"dropdown-menu"},[o("li",[o("a",{attrs:{href:"javascript:;"},on:{click:function(t){return a.chlang("zh-CN")}}},[a._v(a._s(a.$t("lang.zh-CN")))])]),o("li",[o("a",{attrs:{href:"javascript:;"},on:{click:function(t){return a.chlang("en-US")}}},[a._v(a._s(a.$t("lang.en-US")))])]),o("li",[o("a",{attrs:{href:"javascript:;"},on:{click:function(t){return a.chlang("ja-JP")}}},[a._v(a._s(a.$t("lang.ja-JP")))])])])])])])])]),o("el-main",{staticClass:"main-content"},[o("router-view")],1),o("div",{staticClass:"background"},[o("img",{attrs:{src:e("0321"),width:"100%",height:"100%",alt:""}})]),o("el-footer",{staticClass:"footer"},[o("div",{staticClass:"container-fluid footer-content"},[o("div",{staticClass:"pull-right"},[o("div",{staticClass:"text-right"},[o("a",{attrs:{href:"https://github.com/Cyame/okayu-button/",target:"_blank"}},[a._v(a._s(a.$t("info.toGithub"))+" "),o("img",{attrs:{src:"https://img.shields.io/github/stars/Cyame/okayu-button.svg?style=social"}})])]),o("div",{staticClass:"text-right"},[a._v(a._s(a.$t("info.notOfficial")))])]),o("el-popover",{attrs:{placement:"top-start",title:"Cyame @ 2020",trigger:"hover"}},[o("div",{staticStyle:{margin:"auto"}},[o("div",[a._v(a._s(a.$t("info.developer")))]),o("div",[a._v(a._s(a.$t("info.deployer")))]),o("div",[a._v(a._s(a.$t("info.audioStaff")))])]),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[a._v(a._s(a.$t("info.about")))])],1)],1)])],1)],1)},c=[],l=e("d225"),p=e("b0b4"),u=e("308d"),h=e("6bb5"),v=e("4e2b"),d=e("2b0e"),f=e("65d9"),b=e.n(f),m=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[a._m(0),e("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[a._v(a._s(a.$t(a.title)))])]),e("div",{staticClass:"modal-body"},[a._v(" "+a._s(a.$t(a.msg))+" ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[a._v(a._s(a.$t("action.close")))])])])])])},g=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])}],y=e("013f"),C=e("bd86"),j=e("1157"),S=e.n(j),N=b()((n=function(a){function t(){var a,e;Object(l["a"])(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return e=Object(u["a"])(this,(a=Object(h["a"])(t)).call.apply(a,[this].concat(n))),Object(C["a"])(Object(y["a"])(e),"title","info.info"),Object(C["a"])(Object(y["a"])(e),"msg","info.null"),e}return Object(v["a"])(t,a),Object(p["a"])(t,[{key:"created",value:function(){var a=this;this.$gConst.globalbus.$on("send-info",(function(t){a.msg=t,a.showModal()}))}},{key:"showModal",value:function(){S()("#myModal").modal()}}]),t}(d["default"]),o=n))||o,w=N,P=w,_=(e("b338"),e("2877")),J=Object(_["a"])(P,m,g,!1,null,null,null),z=J.exports,k=(i=b()({components:{Modal:z}}),i(r=function(a){function t(){return Object(l["a"])(this,t),Object(u["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(v["a"])(t,a),Object(p["a"])(t,[{key:"created",value:function(){this.$i18n.locale=localStorage.getItem("lang")||this.$i18n.locale}},{key:"chlang",value:function(a){this.$i18n.locale=a,localStorage.setItem("lang",a)}},{key:"currentLang",get:function(){return this.$i18n.locale}}]),t}(d["default"]))||r),U=k,O=U,G=(e("5c0b"),Object(_["a"])(O,s,c,!1,null,null,null));t["a"]=G.exports},"41cb":function(a,t,e){"use strict";var o,n,i=e("2b0e"),r=e("8c4f"),s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"top"},[e("el-collapse",{on:{change:this.handleChange},model:{value:this.activeNames,callback:function(t){a.$set(this,"activeNames",t)},expression:"this.activeNames"}},[e("el-collapse-item",{attrs:{name:"controller"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-open titleicon"}),e("p",{staticStyle:{"font-size":"18px"}},[a._v(a._s(a.$t("action.control")))])]),e("div",{staticClass:"controlgroup"},[e("br"),e("el-row",[e("el-col",{attrs:{span:8}},[e("el-button",{staticClass:"controlbutton",attrs:{type:"primary"},on:{click:a.random}},[a._v(a._s(a.$t("action.randomplay")))])],1),e("el-col",{attrs:{span:8}},[e("el-button",{staticClass:"controlbutton",attrs:{type:"primary"},on:{click:a.stopPlay}},[a._v(a._s(a.$t("action.stopvoice")))])],1),e("el-col",{attrs:{span:8}},[e("el-checkbox",{staticClass:"checkbox",class:{disabled:a.autoCheck},staticStyle:{"margin-right":"0px"},on:{click:a.overlap},model:{value:a.overlapCheck,callback:function(t){a.overlapCheck=t},expression:"overlapCheck"}},[a._v(a._s(a.$t("action.overlap")))])],1),e("el-col",{attrs:{span:8}},[e("el-checkbox",{staticClass:"checkbox",class:{disabled:a.overlapCheck},staticStyle:{"margin-top":"0px"},on:{click:a.autoPlay},model:{value:a.autoCheck,callback:function(t){a.autoCheck=t},expression:"autoCheck"}},[a._v(a._s(a.$t("action.autoplay")))])],1)],1)],1),e("div",{staticClass:"cate-body",staticStyle:{margin:"0 5px"}},[e("span",[a._v(a._s(a.voice.name?a.$t("action.playing")+a.$t("voice."+a.voice.name):a.$t("action.noplay")))])]),e("audio",{attrs:{id:"player"},on:{ended:function(t){return a.voiceEnd(!1)}}})],2),a._l(a.voices,(function(t){return e("el-collapse-item",{key:t.categoryName,attrs:{name:t.categoryName}},[e("template",{slot:"title"},[a._v(a._s(a.$t("voicecategory."+t.categoryName)))]),a._l(t.voiceList,(function(t){return e("el-button",{key:t.name,staticClass:"button",on:{click:function(e){return a.play(t)}}},[a._v(" "+a._s(a.$t("voice."+t.name))+" ")])}))],2)}))],2)],1)])},c=[],l=e("d225"),p=e("b0b4"),u=e("308d"),h=e("6bb5"),v=e("013f"),d=e("4e2b"),f=e("bd86"),b=e("65d9"),m=e.n(b),g=e("da57"),y=m()((n=function(a){function t(){var a,o;Object(l["a"])(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return o=Object(u["a"])(this,(a=Object(h["a"])(t)).call.apply(a,[this].concat(i))),Object(f["a"])(Object(v["a"])(o),"voices",g.voices),Object(f["a"])(Object(v["a"])(o),"autoCheck",!1),Object(f["a"])(Object(v["a"])(o),"overlapCheck",!1),Object(f["a"])(Object(v["a"])(o),"voice",{}),Object(f["a"])(Object(v["a"])(o),"activeNames",["controller","lmao","regigigas","strange-voices","grunting"]),Object(f["a"])(Object(v["a"])(o),"bgSrc",e("a187")),o}return Object(d["a"])(t,a),Object(p["a"])(t,[{key:"play",value:function(a){if(this.overlapCheck){var t=new Audio("voices/"+a.path);this.voice=a,t.play()}else{this.stopPlay();var e=document.getElementById("player");e.src="voices/"+a.path,this.voice=a,e.play()}}},{key:"stopPlay",value:function(){var a=document.getElementById("player");a.pause(),this.voiceEnd(!0)}},{key:"voiceEnd",value:function(a){!0!==a&&this.autoCheck?this.random():this.voice={}}},{key:"random",value:function(){var a=this.voices[this._randomNum(0,this.voices.length-1)];this.play(a.voiceList[this._randomNum(0,a.voiceList.length-1)])}},{key:"autoPlay",value:function(){this.overlapCheck||(this.autoCheck=!this.autoCheck)}},{key:"overlap",value:function(){this.autoCheck||(this.overlapCheck=!this.overlapCheck)}},{key:"_randomNum",value:function(a,t){switch(arguments.length){case 1:return parseInt(Math.random()*a+1,10);case 2:return parseInt(Math.random()*(t-a+1)+a,10);default:return 0}}},{key:"handleChange",value:function(a){console.log(a)}}]),t}(i["default"]),o=n))||o,C=y,j=C,S=(e("6535"),e("2877")),N=Object(S["a"])(j,s,c,!1,null,"2e76a825",null),w=N.exports;i["default"].use(r["a"]);t["a"]=new r["a"]({base:"/okayu-button/",routes:[{path:"/",name:"home",component:w}]})},"56d7":function(a,t,e){"use strict";e.r(t),function(a){e("7f7f"),e("ac4d"),e("8a81"),e("ac6a"),e("cadf"),e("551c"),e("f751"),e("097d");var t=e("2b0e"),o=e("a925"),n=e("41cb"),i=e("3dfd"),r=e("296e"),s=e("2f6e"),c=e("1564"),l=e("5c96"),p=e.n(l),u=(e("e7f3"),e("1157")),h=e.n(u),v=(e("1b58"),e("898e")),d=e("da57");a.jQuery=a.$=h.a;var f={voice:{},voicecategory:{}},b={voice:{},voicecategory:{}},m={voice:{},voicecategory:{}},g=!0,y=!1,C=void 0;try{for(var j,S=d.voices[Symbol.iterator]();!(g=(j=S.next()).done);g=!0){var N=j.value;void 0!==N.categoryDescription&&(void 0!==N.categoryDescription["zh-CN"]&&(f.voicecategory[N.categoryName]=N.categoryDescription["zh-CN"]),void 0!==N.categoryDescription["en-US"]&&(b.voicecategory[N.categoryName]=N.categoryDescription["en-US"]),void 0!==N.categoryDescription["ja-JP"]&&(m.voicecategory[N.categoryName]=N.categoryDescription["ja-JP"]));var w=!0,P=!1,_=void 0;try{for(var J,z=N.voiceList[Symbol.iterator]();!(w=(J=z.next()).done);w=!0){var k=J.value;void 0!==k.description&&(void 0!==k.description["zh-CN"]&&(f.voice[k.name]=k.description["zh-CN"]),void 0!==k.description["en-US"]&&(b.voice[k.name]=k.description["en-US"]),void 0!==k.description["ja-JP"]&&(m.voice[k.name]=k.description["ja-JP"]))}}catch(M){P=!0,_=M}finally{try{w||null==z.return||z.return()}finally{if(P)throw _}}}}catch(M){y=!0,C=M}finally{try{g||null==S.return||S.return()}finally{if(y)throw C}}var U=Object.assign(s["a"],f),O=Object.assign(r["a"],b),G=Object.assign(c["a"],m);t["default"].config.productionTip=!1,t["default"].use(o["a"]),t["default"].use(v["a"]),t["default"].use(p.a);var $={"en-US":O,"zh-CN":U,"ja-JP":G},x="zh-CN";/ja/i.test(navigator.language)?x="ja-JP":/en/i.test(navigator.language)&&(x="en-US");var L=new o["a"]({locale:x,messages:$});new t["default"]({router:n["a"],i18n:L,render:function(a){return a(i["a"])}}).$mount("#app")}.call(this,e("c8ba"))},"5c0b":function(a,t,e){"use strict";var o=e("9c0c"),n=e.n(o);n.a},"63ec":function(a,t,e){},6535:function(a,t,e){"use strict";var o=e("63ec"),n=e.n(o);n.a},"898e":function(a,t,e){"use strict";var o=e("d225"),n=e("b0b4"),i=e("2b0e"),r=function(){function a(){Object(o["a"])(this,a)}return Object(n["a"])(a,[{key:"install",value:function(a){a.prototype.$gConst={globalbus:new i["default"]}}}]),a}();t["a"]=new r},"9c0c":function(a,t,e){},a187:function(a,t,e){a.exports=e.p+"img/BG1.af3d6844.jpeg"},b338:function(a,t,e){"use strict";var o=e("0c4e"),n=e.n(o);n.a},da57:function(a){a.exports=JSON.parse('{"voices":[{"categoryName":"regigigas","categoryDescription":{"zh-CN":"雷吉奇嘎嘎嘎","en-US":"Regigigas","ja-JP":"レジギガガガ"},"voiceList":[{"name":"o-1","path":"o-1.wav","description":{"zh-CN":"嘎 1","en-US":"Ga 1","ja-JP":"ガ 1"}},{"name":"o-2","path":"o-2.wav","description":{"zh-CN":"嘎 2","en-US":"Ga 2","ja-JP":"ガ 2"}},{"name":"o-3","path":"o-3.wav","description":{"zh-CN":"嘎 3","en-US":"Ga 3","ja-JP":"ガ 3"}},{"name":"o-4","path":"o-4.wav","description":{"zh-CN":"嘎 4","en-US":"Ga 4","ja-JP":"ガ 4"}},{"name":"o-5","path":"o-5.wav","description":{"zh-CN":"嘎 5","en-US":"Ga 5","ja-JP":"ガ 5"}},{"name":"o-6","path":"o-6.wav","description":{"zh-CN":"嘎 6","en-US":"Ga 6","ja-JP":"ガ 6"}},{"name":"o-7","path":"o-7.wav","description":{"zh-CN":"嘎 7","en-US":"Ga 7","ja-JP":"ガ 7"}},{"name":"o-8","path":"o-8.wav","description":{"zh-CN":"嘎 8","en-US":"Ga 8","ja-JP":"ガ 8"}},{"name":"o-9","path":"o-9.wav","description":{"zh-CN":"嘎 9","en-US":"Ga 9","ja-JP":"ガ 9"}},{"name":"o-10","path":"o-10.wav","description":{"zh-CN":"嘎 10","en-US":"Ga 10","ja-JP":"ガ 10"}},{"name":"o-11","path":"o-11.wav","description":{"zh-CN":"嘎 11","en-US":"Ga 11","ja-JP":"ガ 11"}},{"name":"o-12","path":"o-12.wav","description":{"zh-CN":"嘎 12","en-US":"Ga 12","ja-JP":"ガ 12"}},{"name":"o-13","path":"o-13.wav","description":{"zh-CN":"嘎 13","en-US":"Ga 13","ja-JP":"ガ 13"}},{"name":"o-14","path":"o-14.wav","description":{"zh-CN":"嘎 14","en-US":"Ga 14","ja-JP":"ガ 14"}},{"name":"o-15","path":"o-15.wav","description":{"zh-CN":"嘎嘎嘎嘎嘎 1","en-US":"Gagagaga 1","ja-JP":"ガガガガガ 1"}},{"name":"o-16","path":"o-16.wav","description":{"zh-CN":"嘎嘎嘎嘎嘎 2","en-US":"Gagagaga 2","ja-JP":"ガガガガガ 2"}},{"name":"o-17","path":"o-17.wav","description":{"zh-CN":"嘎嘎嘎嘎嘎 3","en-US":"Gagagaga 3","ja-JP":"ガガガガガ 3"}},{"name":"o-18","path":"o-18.wav","description":{"zh-CN":"嘎嘎嘎嘎嘎 4","en-US":"Gagagaga 4","ja-JP":"ガガガガガ 4"}},{"name":"o-19","path":"o-19.wav","description":{"zh-CN":"吉 1","en-US":"Gi 1","ja-JP":"ジ 1"}},{"name":"o-20","path":"o-20.wav","description":{"zh-CN":"吉 2","en-US":"Gi 2","ja-JP":"ジ 2"}},{"name":"o-21","path":"o-21.wav","description":{"zh-CN":"吉 3","en-US":"Gi 3","ja-JP":"ジ 3"}},{"name":"o-22","path":"o-22.wav","description":{"zh-CN":"雷 1","en-US":"Re 1","ja-JP":"レ 1"}},{"name":"o-23","path":"o-23.wav","description":{"zh-CN":"雷 2","en-US":"Re 2","ja-JP":"レ 2"}},{"name":"o-24","path":"o-24.wav","description":{"zh-CN":"雷 3","en-US":"Re 3","ja-JP":"レ 3"}},{"name":"o-25","path":"o-25.wav","description":{"zh-CN":"雷 4","en-US":"Re 4","ja-JP":"レ 4"}},{"name":"o-26","path":"o-26.wav","description":{"zh-CN":"雷 5","en-US":"Re 5","ja-JP":"レ 5"}},{"name":"o-27","path":"o-27.wav","description":{"zh-CN":"奇 1","en-US":"Gi 1","ja-JP":"ギ １"}},{"name":"o-28","path":"o-28.wav","description":{"zh-CN":"奇 2","en-US":"Gi 2","ja-JP":"ギ 2"}},{"name":"o-29","path":"o-29.wav","description":{"zh-CN":"奇 3","en-US":"Gi 3","ja-JP":"ギ 3"}},{"name":"o-30","path":"o-30.wav","description":{"zh-CN":"奇 4","en-US":"Gi 4","ja-JP":"ギ 4"}},{"name":"o-31","path":"o-31.wav","description":{"zh-CN":"奇 5","en-US":"Gi 5","ja-JP":"ギ 5"}},{"name":"o-32","path":"o-32.wav","description":{"zh-CN":"雷吉奇 1","en-US":"ReJiGi 1","ja-JP":"レジギ 1"}},{"name":"o-33","path":"o-33.wav","description":{"zh-CN":"雷吉奇 2","en-US":"ReJiGi 2","ja-JP":"レジギ 2"}},{"name":"o-34","path":"o-34.wav","description":{"zh-CN":"雷吉奇 3","en-US":"ReJiGi 3","ja-JP":"レジギ 3"}}]},{"categoryName":"lmao","categoryDescription":{"zh-CN":"笑声","en-US":"Laugh","ja-JP":"笑声"},"voiceList":[{"name":"o-35","path":"o-35.wav","description":{"zh-CN":"屑猫狂笑 1","en-US":"Lmao 1","ja-JP":"笑すぎ 1"}}]},{"categoryName":"grunting","categoryDescription":{"zh-CN":"咕噜","ja-JP":"ゴロゴロ","en-US":"Grunting"},"voiceList":[{"name":"o-50","path":"o-50.wav","description":{"zh-CN":"咕噜咕噜 1","en-US":"Grunting 1","ja-JP":"ゴロゴロ 1"}},{"name":"o-51","path":"o-51.wav","description":{"zh-CN":"咕噜咕噜 2","en-US":"Grunting 2","ja-JP":"ゴロゴロ 2"}},{"name":"o-52","path":"o-52.wav","description":{"zh-CN":"咕噜咕噜 3","en-US":"Grunting 3","ja-JP":"ゴロゴロ 3"}},{"name":"o-53","path":"o-53.wav","description":{"zh-CN":"咕噜咕噜 4","en-US":"Grunting 4","ja-JP":"ゴロゴロ 4"}}]},{"categoryName":"strange-voices","categoryDescription":{"zh-CN":"奇声/怪叫","en-US":"Strange Voices","ja-JP":"変な声"},"voiceList":[{"name":"o-36","path":"o-36.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}},{"name":"o-37","path":"o-37.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}},{"name":"o-38","path":"o-38.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}},{"name":"o-39","path":"o-39.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}},{"name":"o-40","path":"o-40.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}},{"name":"o-41","path":"o-41.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}},{"name":"o-42","path":"o-42.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}},{"name":"o-43","path":"o-43.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}},{"name":"o-44","path":"o-44.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}},{"name":"o-45","path":"o-45.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}},{"name":"o-46","path":"o-46.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}},{"name":"o-47","path":"o-47.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}},{"name":"o-48","path":"o-48.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}},{"name":"o-49","path":"o-49.mav","description":{"zh-CN":"吃瘪悲鸣 1","en-US":"sob 1","ja-JP":"不憫 1"}}]}]}')},e7f3:function(a,t,e){}});
//# sourceMappingURL=app.92135c70.js.map