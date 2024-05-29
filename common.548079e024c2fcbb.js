"use strict";(self.webpackChunktetu_game_ui=self.webpackChunktetu_game_ui||[]).push([[592],{87756:(x,C,t)=>{t.d(C,{M:()=>h});var e=t(68351),m=t(90654),_=t(48358),u=t(98678),P=t(53344),p=t(90473);let h=(()=>{class a{constructor(c,o){this.tokenService=c,this.heroControllerService=o}isNftApprovedInPawnshop(c,o,v,f){return(0,m.D)([this.tokenService.getApproved$(c,o).pipe((0,_.U)(E=>E.toLowerCase()===((0,e.wA)(f).pawnshop??"").toLowerCase())),this.tokenService.isApprovedForAll$(c,v,(0,e.wA)(f).pawnshop??"")]).pipe((0,_.U)(([E,S])=>E||S))}}return a.\u0275fac=function(c){return new(c||a)(u.LFG(P.B),u.LFG(p.r))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},34010:(x,C,t)=>{t.d(C,{J:()=>O});var e=t(35373),m=t(80557),_=t(25658),u=t(68351),P=t(43916),p=t(14111),h=t(2677),a=t(9249),g=t(21160),c=t(27193),o=t(98678),v=t(11517),f=t(46693),E=t(33524),S=t(30611),F=t(55298);let O=(()=>{class M extends _.kP{constructor(r,n,i,s,d){super(),this.providerService=r,this.relayService=n,this.transactionsService=i,this.logger=s,this.errorService=d}createDungeonFactory(r,n=""){return e.v.connect((0,u.wA)(r).dungeonFactory,this.providerService.getProviderForRead())}getDungeonTreasuryAmount$(r,n,i,s){return this.logger.trace("getDungeonTreasuryAmount",r,n,i,s),(0,p.D)(this.createDungeonFactory(r).getDungeonTreasuryAmount(n,i,s)).pipe((0,h.X)({count:_.S8,delay:_.V1}),(0,a.K)(this.errorService.onCatchError))}bossCompleted$(r,n,i){return this.logger.trace("bossCompleted",r,n,i),(0,p.D)(this.createDungeonFactory(r).isBiomeBoss(n,i)).pipe((0,h.X)({count:_.S8,delay:_.V1}),(0,a.K)(this.errorService.onCatchError))}minLevelForTreasury$(r,n){return this.logger.trace("minLevelForTreasury",r,n),(0,p.D)(this.createDungeonFactory(n).minLevelForTreasury(r)).pipe((0,h.X)({count:_.S8,delay:_.V1}),(0,a.K)(this.errorService.onCatchError))}launchDungeon$(r,n,i,s,d){return(0,p.D)(this.createDungeonFactory(d,r).launch.estimateGas(n,i,s)).pipe((0,g.w)(D=>this.updateCurrentFees$(this.providerService,D)),(0,c.b)(D=>this.providerService.onChainCall(new m.bq({name:"Launch dungeon",txPopulated:this.createDungeonFactory(d,r).launch.populateTransaction(n,i,s),gasLimit:(0,P.gu)(D,2000000n),maxFeePerGas:this.maxFeePerGas,maxPriorityFeePerGas:this.maxPriorityFeePerGas,gasPrice:this.gasPrice,isDelegatedRelayPossible:!0,relayService:this.relayService}))),(0,a.K)(this.errorService.onCatchError))}openObject$(r,n,i){return(0,p.D)(this.createDungeonFactory(n,r).openObject.estimateGas(i)).pipe((0,g.w)(s=>this.updateCurrentFees$(this.providerService,s)),(0,c.b)(s=>this.providerService.onChainCall(new m.bq({name:"Open chamber",txPopulated:this.createDungeonFactory(n,r).openObject.populateTransaction(i),gasLimit:(0,P.gu)(s),maxFeePerGas:this.maxFeePerGas,maxPriorityFeePerGas:this.maxPriorityFeePerGas,gasPrice:this.gasPrice,isDelegatedRelayPossible:!0,relayService:this.relayService}))),(0,a.K)(this.errorService.onCatchError))}objectAction$(r,n,i,s,d,D,T=!1){return(0,p.D)(this.createDungeonFactory(n,r).objectAction.estimateGas(i,s)).pipe((0,g.w)(y=>this.updateCurrentFees$(this.providerService,y)),(0,c.b)(y=>this.providerService.onChainCall(new m.bq({name:"Object action",showLoadingScreen:T,isNeedUpdateHero:!0,isNeedUpdateBalances:!0,txPopulated:this.createDungeonFactory(n,r).objectAction.populateTransaction(i,s),gasLimit:(0,P.gu)(y,D),maxFeePerGas:this.maxFeePerGas,maxPriorityFeePerGas:this.maxPriorityFeePerGas,gasPrice:this.gasPrice,showSpeedUpDialog:d,isDelegatedRelayPossible:!0,relayService:this.relayService}))),(0,a.K)(this.errorService.onCatchError))}enter$(r,n,i,s,d){return(0,p.D)(this.createDungeonFactory(n,r).enter.estimateGas(i,s,d)).pipe((0,g.w)(D=>this.updateCurrentFees$(this.providerService,D)),(0,c.b)(D=>this.providerService.onChainCall(new m.bq({name:"Enter to dungeon",txPopulated:this.createDungeonFactory(n,r).enter.populateTransaction(i,s,d),gasLimit:(0,P.gu)(D),maxFeePerGas:this.maxFeePerGas,maxPriorityFeePerGas:this.maxPriorityFeePerGas,gasPrice:this.gasPrice,isDelegatedRelayPossible:!0,relayService:this.relayService}))),(0,a.K)(this.errorService.onCatchError))}exitAndClaim$(r,n,i){return(0,p.D)(this.createDungeonFactory(n,r).exit.estimateGas(i,!0)).pipe((0,g.w)(s=>this.updateCurrentFees$(this.providerService,s)),(0,c.b)(s=>this.providerService.onChainCall(new m.bq({name:"Exit and claim",isNeedUpdateHero:!0,isNeedUpdateBalances:!0,txPopulated:this.createDungeonFactory(n,r).exit.populateTransaction(i,!0),gasLimit:(0,P.gu)(s),maxFeePerGas:this.maxFeePerGas,maxPriorityFeePerGas:this.maxPriorityFeePerGas,gasPrice:this.gasPrice,isDelegatedRelayPossible:!0,relayService:this.relayService}))),(0,a.K)(this.errorService.onCatchError))}}return M.\u0275fac=function(r){return new(r||M)(o.LFG(v.H),o.LFG(f.D),o.LFG(E.v),o.LFG(S.Kf),o.LFG(F.T))},M.\u0275prov=o.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"}),M})()},43486:(x,C,t)=>{t.d(C,{X:()=>F});var e=t(66417),m=t(80557),_=t(25658),u=t(68351),P=t(43916),p=t(14111),h=t(2677),a=t(9249),g=t(21160),c=t(27193),o=t(98678),v=t(11517),f=t(55298),E=t(30611),S=t(46693);let F=(()=>{class O extends _.kP{constructor(l,r,n,i){super(),this.providerService=l,this.errorService=r,this.logger=n,this.relayService=i}createReinforcementController(l,r=""){return e.g4.connect((0,u.wA)(l).reinforcementController,this.providerService.getProviderForRead())}maxScore$(l,r){return this.logger.trace("maxScore",l,r),(0,p.D)(this.createReinforcementController(l).maxScore(r)).pipe((0,h.X)({count:_.S8,delay:_.V1}),(0,a.K)(this.errorService.onCatchError))}heroScoreAdjusted$(l,r,n){return this.logger.trace("heroScoreAdjusted",l,r,n),(0,p.D)(this.createReinforcementController(l).heroScoreAdjusted(r,n)).pipe((0,h.X)({count:_.S8,delay:_.V1}),(0,a.K)(this.errorService.onCatchError))}heroInfo$(l,r,n){return this.logger.trace("heroInfo",l,r,n),(0,p.D)(this.createReinforcementController(l).heroInfo(r,n)).pipe((0,h.X)({count:_.S8,delay:_.V1}),(0,a.K)(this.errorService.onCatchError))}stakeHero$(l,r,n,i,s){return(0,p.D)(this.createReinforcementController(r,l).stakeHero.estimateGas(n,i,s)).pipe((0,g.w)(d=>this.updateCurrentFees$(this.providerService,d)),(0,c.b)(d=>this.providerService.onChainCall(new m.bq({name:"Stake hero",isNeedUpdateHero:!0,txPopulated:this.createReinforcementController(r,l).stakeHero.populateTransaction(n,i,s),gasLimit:(0,P.gu)(d),maxFeePerGas:this.maxFeePerGas,maxPriorityFeePerGas:this.maxPriorityFeePerGas,gasPrice:this.gasPrice,isDelegatedRelayPossible:!0,relayService:this.relayService}))),(0,a.K)(this.errorService.onCatchError))}withdrawHero$(l,r,n,i){return(0,p.D)(this.createReinforcementController(r,l).withdrawHero.estimateGas(n,i)).pipe((0,g.w)(s=>this.updateCurrentFees$(this.providerService,s)),(0,c.b)(s=>this.providerService.onChainCall(new m.bq({name:"UnStake hero",isNeedUpdateHero:!0,isNeedUpdateBalances:!0,txPopulated:this.createReinforcementController(r,l).withdrawHero.populateTransaction(n,i),gasLimit:(0,P.gu)(s),maxFeePerGas:this.maxFeePerGas,maxPriorityFeePerGas:this.maxPriorityFeePerGas,gasPrice:this.gasPrice,isDelegatedRelayPossible:!0,relayService:this.relayService}))),(0,a.K)(this.errorService.onCatchError))}claimAll$(l,r,n,i){return(0,p.D)(this.createReinforcementController(r,l).claimAll.estimateGas(n,i)).pipe((0,g.w)(s=>this.updateCurrentFees$(this.providerService,s)),(0,c.b)(s=>this.providerService.onChainCall(new m.bq({name:"Claim staked rewards",isNeedUpdateHero:!0,isNeedUpdateBalances:!0,txPopulated:this.createReinforcementController(r,l).claimAll.populateTransaction(n,i),gasLimit:(0,P.gu)(s),maxFeePerGas:this.maxFeePerGas,maxPriorityFeePerGas:this.maxPriorityFeePerGas,gasPrice:this.gasPrice,isDelegatedRelayPossible:!0,relayService:this.relayService}))),(0,a.K)(this.errorService.onCatchError))}}return O.\u0275fac=function(l){return new(l||O)(o.LFG(v.H),o.LFG(f.T),o.LFG(E.Kf),o.LFG(S.D))},O.\u0275prov=o.Yz7({token:O,factory:O.\u0275fac,providedIn:"root"}),O})()},17659:(x,C,t)=>{t.d(C,{H:()=>P});var e=t(98678),m=t(35103),_=t(60419);function u(p,h){if(1&p&&e._UZ(0,"img",2),2&p){const a=e.oxw();e.Q6J("ngClass","hero--"+a.biomeSize)}}let P=(()=>{class p{constructor(){this.biomeSize="default"}}return p.\u0275fac=function(a){return new(a||p)},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-biome"]],inputs:{biome:"biome",biomeSize:"biomeSize"},decls:2,vars:3,consts:[["class","hero","src","../../../../assets/images/ui/icons/other/helmet-light.png","alt","",3,"ngClass",4,"ngIf"],[1,"avatar",3,"avatarType","imagePath"],["src","../../../../assets/images/ui/icons/other/helmet-light.png","alt","",1,"hero",3,"ngClass"]],template:function(a,g){1&a&&(e.YNc(0,u,1,1,"img",0),e._UZ(1,"app-avatar",1)),2&a&&(e.Q6J("ngIf",g.biome&&g.biome.isHeroHere),e.xp6(1),e.Q6J("avatarType",g.biomeSize)("imagePath",g.biome&&g.biome.biomeAvatar||"assets/images/ui/art/TOWN1.avif"))},dependencies:[m.mk,m.O5,_.A],styles:[".pointer[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:url(/assets/images/cursor/cursor-50-active.avif) 10 0,pointer}.no-action[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;pointer-events:none}.hidden[_ngcontent-%COMP%]{display:none!important}.width-100[_ngcontent-%COMP%]{width:100%}@keyframes button-process-animation{0%{text-shadow:none}to{text-shadow:0 0 16px #dfa94e}}.button-process-animation[_ngcontent-%COMP%]{animation-duration:1s;animation-name:button-process-animation;animation-iteration-count:infinite;animation-direction:alternate}.page-loader[_ngcontent-%COMP%]{position:absolute;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);z-index:5}.gap-2[_ngcontent-%COMP%]{gap:2px}.gap-4[_ngcontent-%COMP%]{gap:4px}.gap-6[_ngcontent-%COMP%]{gap:6px}.gap-8[_ngcontent-%COMP%]{gap:8px}.gap-10[_ngcontent-%COMP%]{gap:10px}.gap-12[_ngcontent-%COMP%]{gap:12px}.gap-14[_ngcontent-%COMP%]{gap:14px}.gap-16[_ngcontent-%COMP%]{gap:16px}.gap-18[_ngcontent-%COMP%]{gap:18px}.gap-20[_ngcontent-%COMP%]{gap:20px}.gap-22[_ngcontent-%COMP%]{gap:22px}.gap-24[_ngcontent-%COMP%]{gap:24px}.gap-26[_ngcontent-%COMP%]{gap:26px}.gap-28[_ngcontent-%COMP%]{gap:28px}.gap-30[_ngcontent-%COMP%]{gap:30px}.gap-32[_ngcontent-%COMP%]{gap:32px}.gap-34[_ngcontent-%COMP%]{gap:34px}.gap-36[_ngcontent-%COMP%]{gap:36px}.gap-38[_ngcontent-%COMP%]{gap:38px}.gap-40[_ngcontent-%COMP%]{gap:40px}.gap-42[_ngcontent-%COMP%]{gap:42px}.gap-44[_ngcontent-%COMP%]{gap:44px}.gap-46[_ngcontent-%COMP%]{gap:46px}.gap-48[_ngcontent-%COMP%]{gap:48px}.gap-50[_ngcontent-%COMP%]{gap:50px}.gap-52[_ngcontent-%COMP%]{gap:52px}.gap-54[_ngcontent-%COMP%]{gap:54px}.gap-56[_ngcontent-%COMP%]{gap:56px}.gap-58[_ngcontent-%COMP%]{gap:58px}.gap-60[_ngcontent-%COMP%]{gap:60px}.gap-62[_ngcontent-%COMP%]{gap:62px}.gap-64[_ngcontent-%COMP%]{gap:64px}.gap-66[_ngcontent-%COMP%]{gap:66px}.gap-68[_ngcontent-%COMP%]{gap:68px}.gap-70[_ngcontent-%COMP%]{gap:70px}.gap-72[_ngcontent-%COMP%]{gap:72px}.gap-74[_ngcontent-%COMP%]{gap:74px}.gap-76[_ngcontent-%COMP%]{gap:76px}.gap-78[_ngcontent-%COMP%]{gap:78px}.gap-80[_ngcontent-%COMP%]{gap:80px}.gap-82[_ngcontent-%COMP%]{gap:82px}.gap-84[_ngcontent-%COMP%]{gap:84px}.gap-86[_ngcontent-%COMP%]{gap:86px}.gap-88[_ngcontent-%COMP%]{gap:88px}.gap-90[_ngcontent-%COMP%]{gap:90px}.gap-92[_ngcontent-%COMP%]{gap:92px}.gap-94[_ngcontent-%COMP%]{gap:94px}.gap-96[_ngcontent-%COMP%]{gap:96px}.gap-98[_ngcontent-%COMP%]{gap:98px}.gap-100[_ngcontent-%COMP%]{gap:100px}.hero[_ngcontent-%COMP%]{position:absolute;top:-20px;right:-20px;width:120px;z-index:1}.hero--small[_ngcontent-%COMP%]{width:80px}.boss-container[_ngcontent-%COMP%]{position:absolute;right:-48px;bottom:-31px}.avatar[_ngcontent-%COMP%]{position:absolute}"],changeDetection:0}),p})()},54831:(x,C,t)=>{t.d(C,{y:()=>h});var e=t(98678),m=t(35103);function _(a,g){if(1&a){const c=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(c);const v=e.oxw();return e.KtG(v.topClick.emit())}),e.qZA()}if(2&a){const c=e.oxw();e.Q6J("disabled",c.isTopDisabled)}}function u(a,g){if(1&a){const c=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(){e.CHM(c);const v=e.oxw();return e.KtG(v.bottomClick.emit())}),e.qZA()}if(2&a){const c=e.oxw();e.Q6J("disabled",c.isBottomDisabled)}}function P(a,g){1&a&&e._UZ(0,"div",8)}const p=["*"];let h=(()=>{class a{constructor(){this.isArrows=!1,this.isMinimal=!1,this.isLeftDisabled=!1,this.isRightDisabled=!1,this.isShowTopBottom=!1,this.isTopDisabled=!1,this.isBottomDisabled=!1,this.isShowDivider=!0,this.leftClick=new e.vpe,this.rightClick=new e.vpe,this.topClick=new e.vpe,this.bottomClick=new e.vpe}get hostSizeClass(){return this.size?"app-frame-"+this.size:""}}return a.\u0275fac=function(c){return new(c||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-left-right-frame"]],hostAttrs:[1,"g-flex-column"],hostVars:2,hostBindings:function(c,o){2&c&&e.Tol(o.hostSizeClass)},inputs:{isArrows:"isArrows",isMinimal:"isMinimal",isLeftDisabled:"isLeftDisabled",isRightDisabled:"isRightDisabled",isShowTopBottom:"isShowTopBottom",isTopDisabled:"isTopDisabled",isBottomDisabled:"isBottomDisabled",isShowDivider:"isShowDivider",size:"size"},outputs:{leftClick:"leftClick",rightClick:"rightClick",topClick:"topClick",bottomClick:"bottomClick"},ngContentSelectors:p,decls:7,vars:13,consts:[[1,"g-flex","g-flex--align-center","g-flex--space-between"],["class","app-btn-square-minus app-btn-square-minus--all pointer",3,"disabled","click",4,"ngIf"],[1,"app-btn-square-minus","pointer",3,"disabled","click"],[1,"app-btn-square-plus","pointer",3,"disabled","click"],["class","app-btn-square-plus app-btn-square-plus--all pointer",3,"disabled","click",4,"ngIf"],["class","app-divider-scratches-border-bolt",4,"ngIf"],[1,"app-btn-square-minus","app-btn-square-minus--all","pointer",3,"disabled","click"],[1,"app-btn-square-plus","app-btn-square-plus--all","pointer",3,"disabled","click"],[1,"app-divider-scratches-border-bolt"]],template:function(c,o){1&c&&(e.F$t(),e.TgZ(0,"div",0),e.YNc(1,_,1,1,"button",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return o.leftClick.emit()}),e.qZA(),e.Hsn(3),e.TgZ(4,"button",3),e.NdJ("click",function(){return o.rightClick.emit()}),e.qZA(),e.YNc(5,u,1,1,"button",4),e.qZA(),e.YNc(6,P,1,0,"div",5)),2&c&&(e.xp6(1),e.Q6J("ngIf",o.isShowTopBottom),e.xp6(1),e.ekj("app-btn-square-minus--arrows",o.isArrows)("app-btn-square-minus--minimal",o.isMinimal),e.Q6J("disabled",o.isLeftDisabled),e.xp6(2),e.ekj("app-btn-square-plus--arrows",o.isArrows)("app-btn-square-plus--minimal",o.isMinimal),e.Q6J("disabled",o.isRightDisabled),e.xp6(1),e.Q6J("ngIf",o.isShowTopBottom),e.xp6(1),e.Q6J("ngIf",o.isShowDivider))},dependencies:[m.O5],styles:["[_nghost-%COMP%]{padding:8px}"],changeDetection:0}),a})()},21292:(x,C,t)=>{t.d(C,{e:()=>P});var e=t(79601),m=t(53012),_=t(70474);const u=`${m.P} ${_.q}`,P=(0,e.X$)("slideOnUpdate",[(0,e.eR)(":increment",[(0,e.vP)([(0,e.oB)({transform:"translateX(0)"}),(0,e.jt)(u,(0,e.oB)({transform:"translateX(-100%)"})),(0,e.oB)({transform:"translateX(100%)"}),(0,e.jt)(u,(0,e.oB)({transform:"translateX(0)"}))])]),(0,e.eR)(":decrement",[(0,e.vP)([(0,e.oB)({transform:"translateX(0)"}),(0,e.jt)(u,(0,e.oB)({transform:"translateX(100%)"})),(0,e.oB)({transform:"translateX(-100%)"}),(0,e.jt)(u,(0,e.oB)({transform:"translateX(0)"}))])])])},71016:(x,C,t)=>{t.d(C,{A:()=>m});var e=t(79601);const m=(0,e.X$)("slideVerticalAnimation",[(0,e.eR)(":enter",[(0,e.oB)({opacity:0,transform:"scaleY(0) translateY(-100%)"}),(0,e.jt)("120ms ease-out",(0,e.oB)({opacity:1,transform:"scaleY(1) translateY(0%)"}))]),(0,e.eR)(":leave",[(0,e.oB)({opacity:1,transform:"scaleY(1) translateY(0%)"}),(0,e.jt)("160ms ease-in",(0,e.oB)({opacity:0,transform:"scaleY(0) translateY(-100%)"}))])])}}]);