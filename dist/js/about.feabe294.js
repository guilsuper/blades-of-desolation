"use strict";(self["webpackChunkblades_of_desolation"]=self["webpackChunkblades_of_desolation"]||[]).push([[443],{198:function(e,a,t){t.r(a),t.d(a,{default:function(){return w}});var l=t(3396),o=t(7139);const r=["id","onClick"],i={key:0},s=["src"];function n(e,a,t,n,c,d){return(0,l.wg)(),(0,l.iD)("div",{class:"container-fluid area-map map",style:(0,o.j5)("background-image: url("+e.bgImg+")")},[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(10,(a=>(0,l._)("div",{class:"row",key:a},[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(6,(t=>(0,l._)("div",{id:e.location+"-"+a+"-"+t,class:(0,o.C_)(["col bg-shadow disabled",d.findIfVisible(a,t)?"":"bg-dark"]),onClick:l=>d.explore(e.location+"-"+a+"-"+t),key:t},[e.location+"-"+a+"-"+t==e.currentLocation?((0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("img",{class:"char-icon",src:e.charImg,alt:"X"},null,8,s)])):(0,l.kq)("",!0)],10,r))),64))]))),64))],4)}var c=t(4870),d=t(8914),p=t(7387),u=t.n(p),h=t(9626),m=t(1067),g=t(5216),f=t(4677),v=t(1988),C={name:"AreaLocation",components:{},setup(){(0,l.bv)((()=>{let e=d.Z.state.player.explored[d.Z.state.location];e.forEach((e=>{u()("#"+e).removeClass("bg-shadow")})),a()}));const e=(0,c.qj)({location:(0,l.Fl)((()=>d.Z.state.location)),explored:(0,l.Fl)((()=>d.Z.state.player.explored[d.Z.state.location])),currentLocation:(0,l.Fl)((()=>d.Z.state.player.currentLocation)),bgImg:(0,l.Fl)((()=>d.Z.state.locationImgList.find((e=>e.includes("area"+(d.Z.state.location+1)+"."))))),charImg:(0,l.Fl)((()=>d.Z.state.player.characters.filter((e=>e.hp>0))[0].img))});function a(){let e=d.Z.state.player.currentLocation.split("-");setTimeout((()=>{for(let a=-1;a<=1;a++)0!=a?(u()(`#${e[0]}-${+e[1]+a}-${+e[2]+a}`).removeClass("disabled"),u()(`#${e[0]}-${+e[1]-a}-${+e[2]+a}`).removeClass("disabled"),u()(`#${e[0]}-${+e[1]}-${+e[2]+a}`).removeClass("disabled"),u()(`#${e[0]}-${+e[1]+a}-${+e[2]}`).removeClass("disabled")):u()(`#${e[0]}-${+e[1]}-${+e[2]}`).removeClass("disabled")}),250)}return(0,l.YP)((()=>[e.currentLocation]),(()=>{u()(".col").each((function(){u()(this).addClass("disabled")})),a()})),e},methods:{explore(e){let a=d.Z.state.player.explored[d.Z.state.location];a.includes(e)||(a.push(e),u()("#"+e).removeClass("bg-shadow")),d.Z.state.player.currentLocation=e,this.getRandomEncounter()},async getRandomEncounter(){const e=(0,f.pm)();let a=Math.ceil(100*Math.random());if(a>40)h.Z.push({name:"battleField"});else if(a>20)e.info("You found some nice trees",{timeout:4e3});else if(a>10){let a=Math.round(100*Math.random())*(d.Z.state.location+1);d.Z.state.player.gold+=a,e.success("You found "+a+"Gold!",{timeout:4e3})}else if(a>5){let a=g.x.findRandomItem();d.Z.state.player.items.push(new v.c(a)),e.success("You found a "+a.name,{timeout:4e3})}else await m.Z.confirm("Encounter","Hello weary traveler, would you like to buy some wears?")&&h.Z.push({name:"MainShop"})},findIfVisible(e,a){let t=!1;return 0==this.explored.length?e+a==2:(this.explored.forEach((l=>{let o=l.split("-");if(o[1]!=e||o[2]!=a)for(let r=-1;r<=1;r++){if(+o[2]+r==a&&+o[1]==e)return void(t=!0);if(+o[2]+r==a&&+o[1]+r==e)return void(t=!0);if(+o[2]==a&&+o[1]+r==e)return void(t=!0);if(+o[2]+r==a&&+o[1]-r==e)return void(t=!0)}else t=!0})),t)}}},y=t(89);const k=(0,y.Z)(C,[["render",n]]);var w=k},7381:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var l=t(3396);const o={class:"about"},r=(0,l._)("h1",null,"This is an about page",-1),i=[r];function s(e,a){return(0,l.wg)(),(0,l.iD)("div",o,i)}var n=t(89);const c={},d=(0,n.Z)(c,[["render",s]]);var p=d},4496:function(e,a,t){t.r(a),t.d(a,{default:function(){return Q}});var l=t(3396);const o={class:"container mt-5"},r={key:0},i={key:1},s={key:2};function n(e,a,t,n,c,d){const p=(0,l.up)("GeneralShop"),u=(0,l.up)("SellShop"),h=(0,l.up)("MagicShop");return(0,l.wg)(),(0,l.iD)("div",o,["general"==e.activeShop?((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(p,{storeItems:e.storeItems},null,8,["storeItems"])])):(0,l.kq)("",!0),"sell"==e.activeShop?((0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(u)])):(0,l.kq)("",!0),"magic"==e.activeShop?((0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(h,{spellList:e.spellList},null,8,["spellList"])])):(0,l.kq)("",!0)])}var c=t(4870),d=t(8914),p=t(5216),u=t(4485),h=t(6897),m=t(118),g=t(1067),f=t(9359),v=t(7139);const C=(0,l._)("div",{class:"row pt-2"},[(0,l._)("div",{class:"col-md-6 col-12"},[(0,l._)("h1",{for:"sell"},"Sell Items")])],-1),y={class:"row mh-100"},k={class:"col-md-6 col-12"},w=["onClick"];function _(e,a,t,o,r,i){return(0,l.wg)(),(0,l.iD)(l.HY,null,[C,(0,l._)("div",y,[(0,l._)("div",k,[(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.playerItems,(e=>((0,l.wg)(),(0,l.iD)("li",{class:(0,v.C_)(i.getRarityFullName(e.rarity)),key:e.id,onClick:a=>i.sell(e)},(0,v.zw)(e.name)+" - "+(0,v.zw)(e.price/10)+"gold",11,w)))),128))])])])],64)}var Z={name:"SellSop",setup(){const e=(0,c.qj)({playersGold:(0,l.Fl)((()=>d.Z.state.player.gold)),playerItems:(0,l.Fl)((()=>d.Z.state.player.items))});return e},methods:{sell(e){p.x.sellItem(e)},getRarityFullName:u.$}},b=t(89);const I=(0,b.Z)(Z,[["render",_]]);var S=I;const L=(0,l._)("div",{class:"row pt-2"},[(0,l._)("div",{class:"col-md-6 col-12"},[(0,l._)("h1",{for:"buy"},"Buy Items")])],-1),A={class:"row mh-100"},D={class:"col-md-6 col-12"};function $(e,a,t,o,r,i){const s=(0,l.up)("Item");return(0,l.wg)(),(0,l.iD)(l.HY,null,[L,(0,l._)("div",A,[(0,l._)("div",D,[(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.storeItems,(e=>((0,l.wg)(),(0,l.j4)(s,{class:(0,v.C_)(i.getRarityFullName(e.rarity)),key:e.id,item:e,display:"shop",onClick:a=>i.buy(e)},null,8,["class","item","onClick"])))),128))])])])],64)}var F=t(9297),M=t(4677),q={name:"GeneralShop",components:{Item:F.Z},props:{storeItems:{type:Object}},setup(){const e=(0,c.qj)({playersGold:(0,l.Fl)((()=>d.Z.state.player.gold)),quest:null,activeShop:(0,l.Fl)((()=>d.Z.state.shop))});return e},methods:{buy(e){const a=(0,M.pm)();this.$store.state.player.gold>=e.price?(this.$store.commit("reducePlayerGold",e.price),p.x.buyItem(e),a.info("Purchased "+e.name)):a.warning("Insufficient resources")},getRarityFullName:u.$}};const x=(0,b.Z)(q,[["render",$]]);var Y=x;const j=e=>((0,l.dD)("data-v-24256b53"),e=e(),(0,l.Cn)(),e),H=j((()=>(0,l._)("div",{class:"row pt-2"},[(0,l._)("div",{class:"col-12"},[(0,l._)("h1",{for:"buy"},"Learn Spells")])],-1))),G={class:"row mh-100"},R={class:"col-md-6 col-12"},E={key:0,for:"spells"},K=["onClick","title"];function P(e,a,t,o,r,i){return(0,l.wg)(),(0,l.iD)(l.HY,null,[H,(0,l._)("div",G,[(0,l._)("div",R,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.spellList,(e=>((0,l.wg)(),(0,l.iD)("ul",{key:e},[e.length>0?((0,l.wg)(),(0,l.iD)("label",E,(0,v.zw)(e[0].level>0?"Level "+e[0].level:"Cantrip")+" Spells",1)):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e.name,onClick:a=>i.buySpell(e),title:e.title??i.getTitle(e)},(0,v.zw)(e.name)+" - "+(0,v.zw)(e.price??1e3*e.level+1e3)+"gold",9,K)))),128))])))),128))])])],64)}var z={name:"MagicShop",props:{spellList:{type:Object}},setup(){const e=(0,c.qj)({});return e},methods:{async buySpell(e){const a=(0,M.pm)();let t=e.price??1e3*e.level+1e3;if(d.Z.state.player.gold<t)return void a.warning("Insufficient resources");let l=await g.Z.selectChar(e.name,t);if(0==l||!l)return;let o=d.Z.state.player.characters.filter((e=>e.id==l))[0];this.$store.commit("reducePlayerGold",t),f.w.learnSpell(e.name,o)},getTitle(e){let a="";return e.strength?a=e.strength+" "+e.dmgType+" dmg":(a=e.buff?"+":"-",a+=e.value+" "+e.effect),a+=e.areaEffect?" (Mass effect)":"",a}}};const N=(0,b.Z)(z,[["render",P],["__scopeId","data-v-24256b53"]]);var T=N,W={name:"MainShop",components:{SellShop:S,GeneralShop:Y,MagicShop:T},setup(){(0,l.bv)((async()=>{let e=1+m._.getPartyLuck(),a=Math.ceil(25*Math.random());if(e>a){let e=Math.floor(Math.random()*d.Z.state.quests.length),a=d.Z.state.quests[e];await g.Z.confirm(a.objective,a.target)&&h.g.acceptQuest(a)}h.g.checkQuestProgress(),d.Z.state.shopItems=p.x.getStoreItems()}));const e=(0,c.qj)({playersGold:(0,l.Fl)((()=>d.Z.state.player.gold)),storeItems:(0,l.Fl)((()=>d.Z.state.shopItems)),quest:null,activeShop:(0,l.Fl)((()=>d.Z.state.shop)),spellList:(0,l.Fl)((()=>f.w.getRandomSpellList()))});return e},methods:{getRarityFullName:u.$}};const O=(0,b.Z)(W,[["render",n]]);var Q=O},7145:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var l=t(3396);const o={class:"container-fluid map"},r=(0,l._)("img",{class:"",src:"https://firebasestorage.googleapis.com/v0/b/game-pics.appspot.com/o/imageedit_1_8804535635.png?alt=media&token=d39097b7-e9a9-42dc-8ad9-580d7daab080",width:"1000",height:"840",usemap:"#world-map"},null,-1),i={name:"world-map",id:"world-map"};function s(e,a,t,s,n,c){return(0,l.wg)(),(0,l.iD)("div",o,[r,(0,l._)("map",i,[(0,l._)("area",{id:"area-1",shape:"circle",coords:"708,238,10",alt:"1",title:"Area 1",onClick:a[0]||(a[0]=e=>c.locationChange(0))}),(0,l._)("area",{id:"area-2",shape:"circle",coords:"733,336,10",alt:"2",title:"Area 2",onClick:a[1]||(a[1]=e=>c.locationChange(1))}),(0,l._)("area",{id:"area-3",shape:"circle",coords:"620,360,10",alt:"3",title:"Area 3",onClick:a[2]||(a[2]=e=>c.locationChange(2))}),(0,l._)("area",{id:"area-4",shape:"circle",coords:"482,328,10",alt:"4",title:"Area 4",onClick:a[3]||(a[3]=e=>c.locationChange(3))}),(0,l._)("area",{id:"area-5",shape:"circle",coords:"454,232,10",alt:"5",title:"Area 5",onClick:a[4]||(a[4]=e=>c.locationChange(4))}),(0,l._)("area",{id:"area-6",shape:"circle",coords:"682,132,10",alt:"6",title:"Area 6",onClick:a[5]||(a[5]=e=>c.locationChange(5))}),(0,l._)("area",{id:"area-7",shape:"circle",coords:"270,225,10",alt:"7",title:"Area 7",onClick:a[6]||(a[6]=e=>c.locationChange(6))}),(0,l._)("area",{id:"area-8",shape:"circle",coords:"113,265,10",alt:"8",title:"Area 8",onClick:a[7]||(a[7]=e=>c.locationChange(7))}),(0,l._)("area",{id:"area-9",shape:"circle",coords:"299,340,10",alt:"9",title:"Area 9",onClick:a[8]||(a[8]=e=>c.locationChange(8))}),(0,l._)("area",{id:"area-10",shape:"circle",coords:"320,392,10",alt:"10",title:"Area 10",onClick:a[9]||(a[9]=e=>c.locationChange(9))}),(0,l._)("area",{id:"area-11",shape:"circle",coords:"480,444,10",alt:"11",title:"Area 11",onClick:a[10]||(a[10]=e=>c.locationChange(10))}),(0,l._)("area",{id:"area-12",shape:"circle",coords:"633,485,10",alt:"12",title:"Area 12",onClick:a[11]||(a[11]=e=>c.locationChange(11))}),(0,l._)("area",{id:"area-13",shape:"circle",coords:"809,519,10",alt:"13",title:"Area 13",onClick:a[12]||(a[12]=e=>c.locationChange(12))}),(0,l._)("area",{id:"area-14",shape:"circle",coords:"635,622,10",alt:"14",title:"Area 14",onClick:a[13]||(a[13]=e=>c.locationChange(13))}),(0,l._)("area",{id:"area-15",shape:"circle",coords:"455,541,10",alt:"15",title:"Area 15",onClick:a[14]||(a[14]=e=>c.locationChange(14))}),(0,l._)("area",{id:"area-16",shape:"circle",coords:"450,605,10",alt:"16",title:"Area 16",onClick:a[15]||(a[15]=e=>c.locationChange(15))}),(0,l._)("area",{id:"area-17",shape:"circle",coords:"360,665,10",alt:"17",title:"Area 17",onClick:a[16]||(a[16]=e=>c.locationChange(16))}),(0,l._)("area",{id:"area-18",shape:"circle",coords:"285,590,10",alt:"18",title:"Area 18",onClick:a[17]||(a[17]=e=>c.locationChange(17))}),(0,l._)("area",{id:"area-19",shape:"circle",coords:"211,675,10",alt:"19",title:"Area 19",onClick:a[18]||(a[18]=e=>c.locationChange(18))}),(0,l._)("area",{id:"area-20",shape:"circle",coords:"734,747,10",alt:"20",title:"Area 20",onClick:a[19]||(a[19]=e=>c.locationChange(19))}),(0,l._)("area",{id:"area-secret",shape:"circle",coords:"100,100,10",alt:"death",onClick:a[20]||(a[20]=e=>c.locationChange(20))})])])}var n=t(4870),c=t(9626),d=t(8914),p=t(4677),u={name:"MapLocation",components:{},setup(){const e=(0,n.qj)({});return e},methods:{locationChange(e){const a=(0,p.pm)();this.checkLocationChange(e)||e==d.Z.state.location?(d.Z.state.location!=e&&(d.Z.state.player.currentLocation=e+"-1-1",d.Z.state.location=e),c.Z.push({name:"AreaLocation"})):a.warning("Cannot access this location")},checkLocationChange(e){const a=(0,p.pm)();if(Math.abs(d.Z.state.location-e)>1)return void a.warning("Cannot Skip areas in journey");let t=e-1>=0?e-1:0;return d.Z.state.player.explored[t].length>=60}}},h=t(89);const m=(0,h.Z)(u,[["render",s]]);var g=m}}]);
//# sourceMappingURL=about.feabe294.js.map