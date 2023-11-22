(function(){"use strict";function E(n,e){self.onmessage=async a=>{await e;const{name:r,args:i,transferableIndices:c}=a.data,o=[];let s;try{const t=n[r];if(typeof t!="function"){console.error(`${r} is not an exposed worker function`),self.close();return}const p=await t(...i);i.forEach((m,j)=>c.includes(j)&&o.push(m)),s={type:"success",result:p,transferables:o}}catch(t){const{message:p,name:m}=t;s={type:"error",error:{message:p,name:m}}}self.postMessage(s,o)}}function P(n){return(...e)=>{const a={type:"control",name:n,args:e};self.postMessage(a)}}function F(n,e){e=e||{};const{url:a,init:r}=e;return new Promise(i=>{self.Module={...e?.Module,async onRuntimeInitialized(){r&&await r(),i(null)},locateFile(c,o){return(a||o)+c}},importScripts((a||"")+n)})}function C(n,...e){const a=Module.FS[n](...e);if(n!=="mkdir")return a}const L=(n,e)=>e.some(a=>n instanceof a);let M,x;function O(){return M||(M=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A(){return x||(x=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D=new WeakMap,y=new WeakMap,S=new WeakMap,_=new WeakMap,l=new WeakMap;function T(n){const e=new Promise((a,r)=>{const i=()=>{n.removeEventListener("success",c),n.removeEventListener("error",o)},c=()=>{a(d(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",c),n.addEventListener("error",o)});return e.then(a=>{a instanceof IDBCursor&&D.set(a,n)}).catch(()=>{}),l.set(e,n),e}function W(n){if(y.has(n))return;const e=new Promise((a,r)=>{const i=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",o),n.removeEventListener("abort",o)},c=()=>{a(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",c),n.addEventListener("error",o),n.addEventListener("abort",o)});y.set(n,e)}let f={get(n,e,a){if(n instanceof IDBTransaction){if(e==="done")return y.get(n);if(e==="objectStoreNames")return n.objectStoreNames||S.get(n);if(e==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return d(n[e])},set(n,e,a){return n[e]=a,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function V(n){f=n(f)}function N(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...a){const r=n.call(v(this),e,...a);return S.set(r,e.sort?e.sort():[e]),d(r)}:A().includes(n)?function(...e){return n.apply(v(this),e),d(D.get(this))}:function(...e){return d(n.apply(v(this),e))}}function R(n){return typeof n=="function"?N(n):(n instanceof IDBTransaction&&W(n),L(n,O())?new Proxy(n,f):n)}function d(n){if(n instanceof IDBRequest)return T(n);if(_.has(n))return _.get(n);const e=R(n);return e!==n&&(_.set(n,e),l.set(e,n)),e}const v=n=>l.get(n);function H(n,e,{blocked:a,upgrade:r,blocking:i,terminated:c}={}){const o=indexedDB.open(n,e),s=d(o);return r&&o.addEventListener("upgradeneeded",t=>{r(d(o.result),t.oldVersion,t.newVersion,d(o.transaction),t)}),a&&o.addEventListener("blocked",t=>a(t.oldVersion,t.newVersion,t)),s.then(t=>{c&&t.addEventListener("close",()=>c()),i&&t.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),s}const K=["get","getKey","getAll","getAllKeys","count"],U=["put","add","delete","clear"],g=new Map;function z(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(g.get(e))return g.get(e);const a=e.replace(/FromIndex$/,""),r=e!==a,i=U.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!(i||K.includes(a)))return;const c=async function(o,...s){const t=this.transaction(o,i?"readwrite":"readonly");let p=t.store;return r&&(p=p.index(s.shift())),(await Promise.all([p[a](...s),i&&t.done]))[0]};return g.set(e,c),c}V(n=>({...n,get:(e,a,r)=>z(e,a)||n.get(e,a,r),has:(e,a)=>!!z(e,a)||n.has(e,a)}));const b="hash",h="content";class J{dbPromise;constructor(e){this.dbPromise=H(e,1,{upgrade(a){a.createObjectStore(b),a.createObjectStore(h)}})}async getDB(){return this.dbPromise.catch(()=>{})}async get(e,a,r){const i=await this.getDB();if(await i?.get(b,e)===a)return i.get(h,e);const o=await fetch(r);if(!o.ok)throw new Error(`Fail to download ${e}`);const s=await o.arrayBuffer();return await i?.put(h,s,e),await i?.put(b,a,e),s}async invalidate(){return(await this.getDB())?.clear(b)}}var X="\uD55C\uAD00\uD654",G="\u6719\u6708\u62FC\u97F3",Q="\u6719\u6708\u62FC\u97F3\xB7\u8BED\u53E5\u6D41",Y="\u7CA4\u8BED\u62FC\u97F3",Z="\u7CA4\u8BED\u62FC\u97F3\xB7IPA",nn="\u81EA\u7136\u7801\u53CC\u62FC",en="\u667A\u80FDABC\u53CC\u62FC",an="\u5C0F\u9E64\u53CC\u62FC",rn="\u5FAE\u8F6F\u53CC\u62FC",on="\u62FC\u97F3\u52A0\u52A0\u53CC\u62FC",cn="86\u4E94\u7B14",tn="86\u4E94\u7B14\xB7\u62FC\u97F3",sn="86\u4E94\u7B14\xB7\u7E41\u4F53",pn="\u8896\u73CD\u7B80\u62FC",dn="\u5730\u7403\u62FC\u97F3",mn="X-SAMPA",bn="\u4E91\u9F99\u56FD\u9645\u97F3\u6807",un="\u6CE8\u97F3",yn="\u6CE8\u97F3\xB7\u5FEB\u6253",_n="\u5BAB\u4FDD\u62FC\u97F3\xB7\u4E03\u6307\u7985",ln="\u5BAB\u4FDD\u62FC\u97F3\xB7\u516B\u6307\u7985",fn="\u5BAB\u4FDD\u62FC\u97F3\xB7\u4E5D\u6307\u7985",vn="\u5BAB\u4FDD\u62FC\u97F3\xB7\u5341\u6307\u7985",gn="\u4E2D\u53E4\u5168\u62FC",hn="\u4E2D\u53E4\u4E09\u62FC",$n="\u4ED3\u9889\u4E94\u4EE3",wn="\u4ED3\u9889\u4E94\u4EE3\xB7\u5FEB\u6253",jn="\u4E94\u7B14\u753B",kn="\u884C\u521730",Mn="\u4E0A\u6D77\u5434\u8BED\xB7\u8001\u6D3E",xn="\u4E0A\u6D77\u5434\u8BED\xB7\u65B0\u6D3E",Dn="\u82CF\u5DDE\u5434\u8BED",Sn="\u6253\u5B57\u901F\u8BB0\u6CD5",zn="\u5FEB\u901F\u4ED3\u9889",In="\u901F\u6210",Bn={handarin:X,luna_pinyin:G,luna_pinyin_fluency:Q,jyut6ping3:Y,jyut6ping3_ipa:Z,double_pinyin:nn,double_pinyin_abc:en,double_pinyin_flypy:an,double_pinyin_mspy:rn,double_pinyin_pyjj:on,wubi86:cn,wubi_pinyin:tn,wubi_trad:sn,pinyin_simp:pn,terra_pinyin:dn,ipa_xsampa:mn,ipa_yunlong:bn,bopomofo:un,bopomofo_express:yn,combo_pinyin:_n,combo_pinyin_8:ln,combo_pinyin_9:fn,combo_pinyin_10:vn,zyenpheng:gn,sampheng:hn,cangjie5:$n,cangjie5_express:wn,stroke:jn,array30:kn,wugniu_lopha:Mn,wugniu:xn,soutzoe:Dn,stenotype:Sn,scj6:zn,quick5:In},qn={},En={},Pn={dict:"luna_pinyin"},Fn={dict:"luna_pinyin",prism:"luna_quanpin"},Cn={},Ln={dict:"jyut6ping3",prism:"jyut6ping3_ipa"},On={dict:"luna_pinyin",prism:"double_pinyin"},An={dict:"luna_pinyin",prism:"double_pinyin_abc"},Tn={dict:"luna_pinyin",prism:"double_pinyin_flypy"},Wn={dict:"luna_pinyin",prism:"double_pinyin_mspy"},Vn={dict:"luna_pinyin",prism:"double_pinyin_pyjj"},Nn={},Rn={dict:"wubi86",prism:"wubi_pinyin"},Hn={dict:"wubi86",prism:"wubi_trad"},Kn={},Un={},Jn={},Xn={},Gn={dict:"terra_pinyin",prism:"bopomofo"},Qn={dict:"terra_pinyin",prism:"bopomofo_express"},Yn={dict:"luna_pinyin",prism:"combo_pinyin"},Zn={dict:"luna_pinyin",prism:"combo_pinyin"},ne={dict:"luna_pinyin",prism:"combo_pinyin"},ee={dict:"luna_pinyin",prism:"combo_pinyin"},ae={},ie={dict:"zyenpheng",prism:"sampheng"},re={},oe={dict:"cangjie5",prism:"cangjie5_express"},ce={},te={},se={},pe={dict:"wugniu_lopha",prism:"wugniu"},de={},me={dict:"luna_pinyin",prism:"stenotype"},be={},ue={},ye={handarin:qn,luna_pinyin:En,luna_pinyin_fluency:Pn,luna_quanpin:Fn,jyut6ping3:Cn,jyut6ping3_ipa:Ln,double_pinyin:On,double_pinyin_abc:An,double_pinyin_flypy:Tn,double_pinyin_mspy:Wn,double_pinyin_pyjj:Vn,wubi86:Nn,wubi_pinyin:Rn,wubi_trad:Hn,pinyin_simp:Kn,terra_pinyin:Un,ipa_xsampa:Jn,ipa_yunlong:Xn,bopomofo:Gn,bopomofo_express:Qn,combo_pinyin:Yn,combo_pinyin_8:Zn,combo_pinyin_9:ne,combo_pinyin_10:ee,zyenpheng:ae,sampheng:ie,cangjie5:re,cangjie5_express:oe,stroke:ce,array30:te,wugniu_lopha:se,wugniu:pe,soutzoe:de,stenotype:me,scj6:be,quick5:ue},_e="picado-tv/rime-handarin",le="luna-pinyin",fe="luna-pinyin",ve="luna-pinyin",ge="cantonese",he="cantonese",$e="double-pinyin",we="double-pinyin",je="double-pinyin",ke="double-pinyin",Me="double-pinyin",xe="wubi",De="wubi",Se="wubi",ze="pinyin-simp",Ie="terra-pinyin",Be="ipa",qe="ipa",Ee="bopomofo",Pe="bopomofo",Fe="combo-pinyin",Ce="combo-pinyin",Le="combo-pinyin",Oe="combo-pinyin",Ae="middle-chinese",Te="middle-chinese",We="cangjie",Ve="cangjie",Ne="stroke",Re="array",He="wugniu",Ke="wugniu",Ue="soutzoe",Je="stenotype",Xe="scj",Ge="quick",Qe={handarin:_e,luna_pinyin:le,luna_pinyin_fluency:fe,luna_quanpin:ve,jyut6ping3:ge,jyut6ping3_ipa:he,double_pinyin:$e,double_pinyin_abc:we,double_pinyin_flypy:je,double_pinyin_mspy:ke,double_pinyin_pyjj:Me,wubi86:xe,wubi_pinyin:De,wubi_trad:Se,pinyin_simp:ze,terra_pinyin:Ie,ipa_xsampa:Be,ipa_yunlong:qe,bopomofo:Ee,bopomofo_express:Pe,combo_pinyin:Fe,combo_pinyin_8:Ce,combo_pinyin_9:Le,combo_pinyin_10:Oe,zyenpheng:Ae,sampheng:Te,cangjie5:We,cangjie5_express:Ve,stroke:Ne,array30:Re,wugniu_lopha:He,wugniu:Ke,soutzoe:Ue,stenotype:Je,scj6:Xe,quick5:Ge},Ye=["luna_pinyin"],Ze=["stroke"],na=["stroke"],ea=["luna_pinyin","stroke","cangjie5"],aa=["luna_pinyin","stroke","cangjie5"],ia=["luna_pinyin"],ra=["luna_pinyin"],oa=["luna_pinyin"],ca=["luna_pinyin"],ta=["luna_pinyin"],sa=["pinyin_simp"],pa=["pinyin_simp"],da=["pinyin_simp"],ma=["stroke"],ba=["stroke"],ua=["terra_pinyin","stroke"],ya=["terra_pinyin","stroke"],_a=["luna_pinyin"],la=["luna_pinyin"],fa=["luna_pinyin"],va=["luna_pinyin"],ga=["luna_pinyin"],ha=["luna_pinyin"],$a=["luna_quanpin"],wa=["luna_quanpin"],ja=["luna_pinyin"],ka=["luna_quanpin"],Ma=["luna_pinyin"],xa=["luna_pinyin"],Da=["luna_pinyin"],Sa=["luna_pinyin"],za=["luna_quanpin"],Ia=["luna_quanpin"],Ba={handarin:Ye,luna_pinyin:Ze,luna_pinyin_fluency:na,jyut6ping3:ea,jyut6ping3_ipa:aa,double_pinyin:ia,double_pinyin_abc:ra,double_pinyin_flypy:oa,double_pinyin_mspy:ca,double_pinyin_pyjj:ta,wubi86:sa,wubi_pinyin:pa,wubi_trad:da,pinyin_simp:ma,terra_pinyin:ba,bopomofo:ua,bopomofo_express:ya,combo_pinyin:_a,combo_pinyin_8:la,combo_pinyin_9:fa,combo_pinyin_10:va,zyenpheng:ga,sampheng:ha,cangjie5:$a,cangjie5_express:wa,stroke:ja,array30:ka,wugniu_lopha:Ma,wugniu:xa,soutzoe:Da,stenotype:Sa,scj6:za,quick5:Ia},qa=[{name:"jyut6ping3.prism.bin",md5:"6b71a9e2f823ddd4e264a1237914d1a7"},{name:"jyut6ping3.reverse.bin",md5:"7e966b94835ad457d5f81a3338f32f3b"},{name:"jyut6ping3.schema.yaml",md5:"d0fc61e25feffc2526bb4e98e16bbde6"},{name:"jyut6ping3.table.bin",md5:"7691a71f0998565dc2354f41cc3eaa10"},{name:"jyut6ping3_ipa.prism.bin",md5:"7b70d7566b50325e2b10d617207e0d93"},{name:"jyut6ping3_ipa.schema.yaml",md5:"bc1fc01dbaeb836c2e5aa5017ecd8b94"}],Ea=[{name:"wubi86.prism.bin",md5:"e40fe2db3e26f1f9efb1ea0bde2a343d"},{name:"wubi86.reverse.bin",md5:"fd84814998dbcc3feecc117ee8835ee3"},{name:"wubi86.schema.yaml",md5:"4c66187568b199a1a50026a13e1dde4b"},{name:"wubi86.table.bin",md5:"5f9a629c8ed1b254ebe2897474e9d39b"},{name:"wubi_pinyin.prism.bin",md5:"67b7747db86930810dce46bf26f0d5e0"},{name:"wubi_pinyin.schema.yaml",md5:"4c04a659b6eb7371b3c2ec2607a19671"},{name:"wubi_trad.prism.bin",md5:"330f3f5e67cdc152368431d5707a8d60"},{name:"wubi_trad.schema.yaml",md5:"47aff1514de471d8937c1730944dca85"}],Pa=[{name:"ipa_xsampa.prism.bin",md5:"1f89f323b398e55b41a3d51292e153b4"},{name:"ipa_xsampa.reverse.bin",md5:"204c1a057beff33f33e4e6e2334d9388"},{name:"ipa_xsampa.schema.yaml",md5:"3de5dc8e1373f3445eb3eb6372757725"},{name:"ipa_xsampa.table.bin",md5:"2643f70120a14876bf358e77fae47def"},{name:"ipa_yunlong.prism.bin",md5:"e99012d354473ed9251fde4d664cf360"},{name:"ipa_yunlong.reverse.bin",md5:"bb4ede9eca7365defaa9631dacf2d0c6"},{name:"ipa_yunlong.schema.yaml",md5:"bca1844fbfc48f6141d419cb154cbc00"},{name:"ipa_yunlong.table.bin",md5:"ca7388b30a151620453ef1684408c34f"}],Fa=[{name:"bopomofo.prism.bin",md5:"234e19133234e3c3b096aec7d4cebc25"},{name:"bopomofo.schema.yaml",md5:"2c657fdc0c9ac5894f3e4244949f2ef4"},{name:"bopomofo_express.prism.bin",md5:"166c04c549fe673e7b073b93c84832b0"},{name:"bopomofo_express.schema.yaml",md5:"d15617e84bc8cb6d001dba90c8bf5cfb"}],Ca=[{name:"cangjie5.prism.bin",md5:"270dae5bd46881ca495b8f96a3f405a8"},{name:"cangjie5.reverse.bin",md5:"1cec526731a457fbd930048a6bb3c4a5"},{name:"cangjie5.schema.yaml",md5:"fa91cc2e81a964b9a5099dcd1e234943"},{name:"cangjie5.table.bin",md5:"27532455e5194bc2da9a4eeecf3cb9d8"},{name:"cangjie5_express.prism.bin",md5:"332ba669b6f89ad261950859f8b9254c"},{name:"cangjie5_express.schema.yaml",md5:"8777c77fe530913bb23321a0534b66ec"}],La=[{name:"stroke.prism.bin",md5:"91b8ef81bd02d409057a18a0d62b2e3e"},{name:"stroke.reverse.bin",md5:"5eca5ef2a34f55c8589f34e7a3762a9d"},{name:"stroke.schema.yaml",md5:"44e4e9b9b7560c88374b6227816567d4"},{name:"stroke.table.bin",md5:"1ceec88e2abf0920c5e6d9ba32907dc0"}],Oa=[{name:"array30.prism.bin",md5:"0e97da41ec8391c54d19f11071058393"},{name:"array30.reverse.bin",md5:"7f7d287012202461fc5ceb3f9eca2116"},{name:"array30.schema.yaml",md5:"7afec43f8ea020d44cbadc9bdefe2562"},{name:"array30.table.bin",md5:"e6dde610a837ae475807936ae77270d0"}],Aa=[{name:"wugniu.prism.bin",md5:"dbf5abf3515c2fba8a0af549ae9e6061"},{name:"wugniu.schema.yaml",md5:"ee539505db7b3e4503a3a0f4cae62617"},{name:"wugniu_lopha.prism.bin",md5:"f3f5258eafc62e9cd05d697a29dd0e77"},{name:"wugniu_lopha.reverse.bin",md5:"3cd2200a259a83b80fcb356682174ce1"},{name:"wugniu_lopha.schema.yaml",md5:"f548d1bc05160aca287f455e1c94d338"},{name:"wugniu_lopha.table.bin",md5:"89ebfd89994a67472b2378f488338a76"}],Ta=[{name:"soutzoe.prism.bin",md5:"4af9c71a9e69294ca4dab79a4eafcefa"},{name:"soutzoe.reverse.bin",md5:"db12cdab4004bf6efa49542152fb7cfe"},{name:"soutzoe.schema.yaml",md5:"40f575d07cf52d64c1a15c5a58f255a7"},{name:"soutzoe.table.bin",md5:"6239f14f75ec3cbb0d913b6947f8e8c0"}],Wa=[{name:"stenotype.prism.bin",md5:"1df2aa4b1d705d88004246ce33f9b0bb"},{name:"stenotype.schema.yaml",md5:"0a6f54723a56922d7c73aa8fb654ee05"}],Va=[{name:"scj6.prism.bin",md5:"bd95bef1a1cd46f289c7750337072373"},{name:"scj6.reverse.bin",md5:"efb9d5051b2ce3e4d91a4a8dc4b63027"},{name:"scj6.schema.yaml",md5:"ec5610abdd580e2699f51aa9c36aa8bc"},{name:"scj6.table.bin",md5:"4216472d63de2550ee944ac5e97c557a"}],Na=[{name:"quick5.prism.bin",md5:"3bde0fa40d486200ce17c45574575cca"},{name:"quick5.reverse.bin",md5:"27444b0d2825ee331e992058d419be34"},{name:"quick5.schema.yaml",md5:"d1fa5bb2d31c5e4130df680aee8c4d0c"},{name:"quick5.table.bin",md5:"25954fec90c31dedb99a45812c7447a9"}],Ra={"picado-tv/rime-handarin":[{name:"handarin.prism.bin",md5:"5065348594b55da8b657669155805a11"},{name:"handarin.reverse.bin",md5:"0e225e3a3eb7ddbbdffa8691e0400d34"},{name:"handarin.schema.yaml",md5:"0f05b562d1967b6483f5eb48b0819c1e"},{name:"handarin.table.bin",md5:"af80d3497431856450e999e0b51120ed"}],"luna-pinyin":[{name:"luna_pinyin.prism.bin",md5:"353c5e34c859a9a0e76900df030fa713"},{name:"luna_pinyin.reverse.bin",md5:"d16701cc9cc16ab74f3b60b336409bf1"},{name:"luna_pinyin.schema.yaml",md5:"e9b840d9205f8425a98bd05122ba0fb9"},{name:"luna_pinyin.table.bin",md5:"153ea95bab6e4ee20abff0f5dfec6ead"},{name:"luna_pinyin_fluency.schema.yaml",md5:"2be9abb3c612c1479a7e2712b5b5cd39"},{name:"luna_quanpin.prism.bin",md5:"de0b1974ded4038dc2bea8e4c4e912d2"},{name:"luna_quanpin.schema.yaml",md5:"217dcb807feff1c3a11e664c05f8ac62"}],cantonese:qa,"double-pinyin":[{name:"double_pinyin.prism.bin",md5:"ebe88ee6e183f57f385b26f407508b2d"},{name:"double_pinyin.schema.yaml",md5:"37d4bbe21afc6ecbffef32035853a62f"},{name:"double_pinyin_abc.prism.bin",md5:"6a9b3f79d7c8b0caaf32aa649c02b65d"},{name:"double_pinyin_abc.schema.yaml",md5:"c19a099692bfff3d2292f31cae94f1f3"},{name:"double_pinyin_flypy.prism.bin",md5:"f9f5a25e674bcd94999947baa0ea7212"},{name:"double_pinyin_flypy.schema.yaml",md5:"20da2434e8413cfee9a16862b5de94e7"},{name:"double_pinyin_mspy.prism.bin",md5:"0d0e95e701e381b790d91bea3d9c26cd"},{name:"double_pinyin_mspy.schema.yaml",md5:"da893bb1ccb222953447bc03e28a7aa3"},{name:"double_pinyin_pyjj.prism.bin",md5:"869d45bd575161358073112c6e220dd6"},{name:"double_pinyin_pyjj.schema.yaml",md5:"fa420f3c963b79af67c8c52c27cbffc2"}],wubi:Ea,"pinyin-simp":[{name:"pinyin_simp.prism.bin",md5:"3b1037493ae93c1f7ae64bea9bc16650"},{name:"pinyin_simp.reverse.bin",md5:"a7691b570c4c4a1a8ca6339f9b6338e8"},{name:"pinyin_simp.schema.yaml",md5:"7101abebdd3155a77b545ed7a19b3681"},{name:"pinyin_simp.table.bin",md5:"18cdf4674c35c6694f96ab10df5ee7be"}],"terra-pinyin":[{name:"terra_pinyin.prism.bin",md5:"ab694f25ee6ee00f010de4d9a5df7245"},{name:"terra_pinyin.reverse.bin",md5:"c2b4ebbd44eb9a57aa1f6e263001e83c"},{name:"terra_pinyin.schema.yaml",md5:"e1d2aabdde916f7bb782d4e924b529c7"},{name:"terra_pinyin.table.bin",md5:"aac5fdf8846b9eac8dc031fd6f8f1bdf"}],ipa:Pa,bopomofo:Fa,"combo-pinyin":[{name:"combo_pinyin.prism.bin",md5:"c6d468e4b7f88a824e32602624205ec1"},{name:"combo_pinyin.schema.yaml",md5:"1b0f5fc4b8270db662ce882b4ed96a2d"},{name:"combo_pinyin_10.schema.yaml",md5:"94fed0d8c33755f12ba9ec97cc41da35"},{name:"combo_pinyin_8.schema.yaml",md5:"ebd27fb7db368986561c54ad429dd56d"},{name:"combo_pinyin_9.schema.yaml",md5:"e5fc98fcf97bd2d2461d0e5969a8c535"}],"middle-chinese":[{name:"sampheng.prism.bin",md5:"edccb12d4111233c6c02cccd989c195b"},{name:"sampheng.schema.yaml",md5:"47d5a80503aac65038f641958672829b"},{name:"zyenpheng.prism.bin",md5:"7ad3323279ae37dbdaf2dd4b804b8618"},{name:"zyenpheng.reverse.bin",md5:"0d3b84ce7e7b2714cb4a0eea35536d38"},{name:"zyenpheng.schema.yaml",md5:"e7c18923cb4e305362f0b7ae48b2c329"},{name:"zyenpheng.table.bin",md5:"dc2e6122b5e0753e6c12887d21c38195"}],cangjie:Ca,stroke:La,array:Oa,wugniu:Aa,soutzoe:Ta,stenotype:Wa,scj:Va,quick:Na};const $="/rime",Ha="/usr/share/rime-data";function Ka(n,e){return`ime/${n}/${e}`}const Ua=new J("ime");async function Ja(n){const e=[];function a(i){if(e.includes(i))return[];e.push(i);const c=[];for(const k of Ba[i]||[])c.push(...a(k));const{dict:o,prism:s}=ye[i],t=o||i,p=`${t}.table.bin`,m=`${t}.reverse.bin`,j=`${s||t}.prism.bin`,Za=`${i}.schema.yaml`,B=Qe[i];for(const k of[p,m,j,Za])for(const{name:q,md5:ni}of Ra[B])if(k===q){c.push({name:q,md5:ni,target:B});break}return c}const r=a(n);await Promise.all(r.map(async({name:i,target:c,md5:o})=>{const s=`${Ha}/build/${i}`;try{Module.FS.lookupPath(s)}catch{const t=await Ua.get(i,o,Ka(c,i));Module.FS.writeFile(s,new Uint8Array(t))}}))}async function Xa(n){return w||await Ja(n),Module.ccall("set_ime","null",["string"],[n]),u("write")}function u(n){let e,a;const r=new Promise((i,c)=>{e=i,a=c});return Module.FS.syncfs(n==="read",i=>{i&&a(i),e(null)}),r}const Ga=F("rime.js",{url:"",async init(){Module.FS.mkdir($),Module.FS.mount(IDBFS,{},$),await u("read"),Module.ccall("init","null",[],[]);for(const[n,e]of Object.entries(Bn))Module.ccall("set_schema_name","null",["string","string"],[n,e])},Module:{printErr(n){const e=n.match(/[EWID]\S+ \S+ \S+ (.*)/);e?{E:console.error,W:console.warn,I:console.info,D:console.debug}[n[0]](e[1]):console.error(n)}}});let w=!1;const Qa=P("deployStatus");globalThis._deployStatus=(n,e)=>{n==="success"&&(w=!0),Qa(n,e)};function I(n){for(const e of Module.FS.readdir(n)){if(e==="."||e==="..")continue;const a=`${n}/${e}`,{mode:r}=Module.FS.lstat(a);Module.FS.isDir(r)?(I(a),Module.FS.rmdir(a)):Module.FS.unlink(a)}}async function Ya(){I($),await u("write"),w=!1,Module.ccall("reset","null",[],[])}E({fsOperate:C,resetUserDirectory:Ya,setIME:Xa,setOption(n,e){return Module.ccall("set_option","null",["string","number"],[n,e])},setPageSize(n){return Module.ccall("set_page_size","null",["number"],[n])},deploy(){return Module.ccall("deploy","null",[],[])},async process(n){const e=JSON.parse(Module.ccall("process","string",["string"],[n]));return"committed"in e&&await u("write"),e},selectCandidateOnCurrentPage(n){return Module.ccall("select_candidate_on_current_page","string",["number"],[n])}},Ga)})();
