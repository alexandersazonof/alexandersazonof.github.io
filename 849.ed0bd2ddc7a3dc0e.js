"use strict";(self.webpackChunktetu_game_ui=self.webpackChunktetu_game_ui||[]).push([[849],{6849:(Z,U,o)=>{o.r(U),o.d(U,{TopListModule:()=>ee});var n=o(35103),S=o(5476),D=o(16268),b=o(82865),x=o(76291),A=o(68305),M=o(56561),E=o(18460),w=o(51510),O=o(57563),g=o(10512),T=o(90654),y=o(35879),r=o(28589),C=o(24944),e=o(98678),_=o(90473),s=o(11517),I=o(59634),c=o(51216),d=o(96342),v=o(2097),f=o(39283),u=o(48821),P=o(86237),L=o(54831),R=o(31584),B=o(60419),N=o(46835),k=o(29617);function F(i,h){if(1&i){const t=e.EpF();e.TgZ(0,"app-left-right-frame",9),e.NdJ("leftClick",function(){e.CHM(t);const p=e.oxw(2);return e.KtG(p.onPageChanged(p.page-1))})("rightClick",function(){e.CHM(t);const p=e.oxw(2);return e.KtG(p.onPageChanged(p.page+1))})("topClick",function(){e.CHM(t);const p=e.oxw(2);return e.KtG(p.onPageChanged(0))})("bottomClick",function(){e.CHM(t);const p=e.oxw(2);return e.KtG(p.onPageChanged(p.totalHeroes/p.pageSize-1))}),e._uU(1),e.qZA()}if(2&i){const t=e.oxw(2);e.Q6J("isArrows",!0)("isShowTopBottom",!0)("isLeftDisabled",0===t.page)("isRightDisabled",t.page+1===t.totalHeroes/t.pageSize)("isTopDisabled",0===t.page)("isBottomDisabled",t.page+1===t.totalHeroes/t.pageSize)("isShowDivider",!1),e.xp6(1),e.AsE(" ",(t.page+1).toFixed(0),"/",(t.totalHeroes/t.pageSize).toFixed(0)," ")}}function G(i,h){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",4)(2,"div",5),e.YNc(3,F,2,9,"app-left-right-frame",6),e.qZA(),e.TgZ(4,"app-dropdown",7),e.NdJ("selectItem",function(p){e.CHM(t);const m=e.oxw();return e.KtG(m.setSortHero(p.id))}),e.qZA()(),e._UZ(5,"div",8),e.BQk()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("ngIf",t.totalHeroes>1),e.xp6(1),e.Q6J("size",t.DROPDOWN_SIZE.LARGE)("items",t.itemsSortOptions)("selectedItem",t.dropdownSortSelected)("sortDirection",t.orderDirection)("isShowSortDirection",!0)}}function z(i,h){1&i&&e._UZ(0,"app-loading-small",10)}function K(i,h){1&i&&(e.TgZ(0,"div",14)(1,"div",15),e._uU(2,"Hero"),e.qZA(),e._UZ(3,"div",16),e.TgZ(4,"div",17),e._uU(5,"Biome"),e.qZA(),e._UZ(6,"div",16),e.TgZ(7,"div",18),e._uU(8,"Score"),e.qZA(),e._UZ(9,"div",16),e.TgZ(10,"div",19),e._uU(11,"Earned in Adventures"),e.qZA(),e._UZ(12,"div",16),e.TgZ(13,"div",20),e._uU(14,"Earned in Reinforce"),e.qZA(),e._UZ(15,"div",16),e.qZA())}function J(i,h){if(1&i){const t=e.EpF();e.TgZ(0,"div",23),e.NdJ("click",function(){const m=e.CHM(t).$implicit,H=e.oxw(3);return e.KtG(H.heroStats(m))}),e.TgZ(1,"div",24)(2,"div",25)(3,"div",26)(4,"div",27),e._UZ(5,"app-avatar",28),e.TgZ(6,"div",29)(7,"div",30),e._uU(8),e.qZA()()()()(),e.TgZ(9,"div",31)(10,"div",32),e._uU(11),e.qZA(),e.TgZ(12,"div",5),e._UZ(13,"div",16),e.TgZ(14,"div",33),e._uU(15),e.qZA(),e._UZ(16,"div",16),e.TgZ(17,"div",34),e._uU(18),e.qZA(),e._UZ(19,"div",16)(20,"app-balance",35)(21,"div",16)(22,"app-balance",36),e.qZA()()(),e._UZ(23,"app-scratch",37),e.qZA()}if(2&i){const t=h.$implicit;e.xp6(5),e.Q6J("isCenteredImage",!0)("imagePath",t.avatarUrl),e.xp6(3),e.hij(" ",t.stats.level," "),e.xp6(3),e.hij(" ",t.uniqName," "),e.xp6(4),e.hij(" ",t.maxBiomeCompleted+1," "),e.xp6(3),e.hij(" ",t.scoreFormatted," "),e.xp6(2),e.Q6J("isReverse",!1)("isUsdNextLine",!0)("balanceUnformatted",t.tokenEarned)("balance",t.tokenEarnedFormatted)("isShowBalanceUsd",!0),e.xp6(2),e.Q6J("isReverse",!1)("isUsdNextLine",!0)("balanceUnformatted",t.reinforcementTokenEarned)("balance",t.reinforcementTokenEarnedFormatted)("isShowBalanceUsd",!0)}}function Y(i,h){if(1&i&&(e.TgZ(0,"div",21),e.YNc(1,J,24,16,"div",22),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.heroes)}}function Q(i,h){if(1&i){const t=e.EpF();e.TgZ(0,"div",23),e.NdJ("click",function(){const m=e.CHM(t).$implicit,H=e.oxw(4);return e.KtG(H.heroStats(m))}),e.TgZ(1,"div",24)(2,"div",25)(3,"div",26)(4,"div",27),e._UZ(5,"app-avatar",28),e.TgZ(6,"div",29)(7,"div",30),e._uU(8),e.qZA()()()()(),e.TgZ(9,"div",31)(10,"div",32),e._uU(11),e.qZA(),e.TgZ(12,"div",5),e._UZ(13,"div",16),e.TgZ(14,"div",33),e._uU(15),e.qZA(),e._UZ(16,"div",16),e.TgZ(17,"div",34),e._uU(18),e.qZA(),e._UZ(19,"div",16)(20,"app-balance",35)(21,"div",16)(22,"app-balance",36),e.qZA()()(),e._UZ(23,"app-scratch",37),e.qZA()}if(2&i){const t=h.$implicit;e.xp6(5),e.Q6J("isCenteredImage",!0)("imagePath",t.avatarUrl),e.xp6(3),e.hij(" ",t.stats.level," "),e.xp6(3),e.hij(" ",t.uniqName," "),e.xp6(4),e.hij(" ",t.maxBiomeCompleted+1," "),e.xp6(3),e.hij(" ",t.scoreFormatted," "),e.xp6(2),e.Q6J("isReverse",!1)("isUsdNextLine",!0)("balanceUnformatted",t.tokenEarned)("balance",t.tokenEarnedFormatted)("isShowBalanceUsd",!0),e.xp6(2),e.Q6J("isReverse",!1)("isUsdNextLine",!0)("balanceUnformatted",t.reinforcementTokenEarned)("balance",t.reinforcementTokenEarnedFormatted)("isShowBalanceUsd",!0)}}function W(i,h){if(1&i&&(e.ynx(0),e.YNc(1,Q,24,16,"div",22),e.BQk()),2&i){const t=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t.accountHeroes)}}function $(i,h){if(1&i){const t=e.EpF();e.TgZ(0,"div",40)(1,"div",41),e._uU(2," You don't have any heroes yet."),e._UZ(3,"br"),e._uU(4," Do you want to create your first hero? "),e.qZA(),e.TgZ(5,"button",42),e.NdJ("click",function(){e.CHM(t);const p=e.oxw(3);return e.KtG(p.createHero())}),e.TgZ(6,"span",43),e._uU(7),e.ALo(8,"translate"),e.qZA()()()}2&i&&(e.xp6(7),e.hij(" ",e.lcZ(8,1,"hero-screen.buttons.create-hero")," "))}function j(i,h){if(1&i&&(e.TgZ(0,"div",21),e.YNc(1,W,2,1,"ng-container",38),e.YNc(2,$,9,3,"ng-template",null,39,e.W1O),e.qZA()),2&i){const t=e.MAs(3),a=e.oxw(2);e.xp6(1),e.Q6J("ngIf",a.accountHeroes.length>0)("ngIfElse",t)}}function X(i,h){if(1&i&&(e.TgZ(0,"div",11),e.YNc(1,K,16,0,"div",12),e.YNc(2,Y,2,1,"div",13),e.YNc(3,j,4,2,"div",13),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf","all"===t.selectedTopListId||t.accountHeroes.length>0),e.xp6(1),e.Q6J("ngIf","all"===t.selectedTopListId),e.xp6(1),e.Q6J("ngIf","my"===t.selectedTopListId)}}var l=(()=>{return(i=l||(l={})).NAME="Name",i.SCORE="Score",i.DUNG="Earned in Adventures",i.REINFORCEMENT="Earned in Reinforcement",l;var i})();const q=[{path:x.EX.EMPTY,component:(()=>{class i{constructor(t,a,p,m,H,te,ne,oe,ie,ae){this.router=t,this.destroy$=a,this.heroControllerService=p,this.changeDetectorRef=m,this.providerService=H,this.appStateService=te,this.subgraphService=ne,this.translateService=oe,this.mediator=ie,this.dialog=ae,this.MAIN_ROUTES=x.EX,this.loading=!0,this.heroes=[],this.accountHeroes=[],this.orderBy=g.DB.HeroStatTokenEarned,this.orderDirection=g.N9.Desc,this.orderHeroAccountBy=g.DB.HeroStatTokenEarned,this.orderHeroAccountDirection=g.N9.Desc,this.currentItemsSort=0,this.page=0,this.accountPage=0,this.pageSize=10,this.totalHeroes=0,this.totalAccountHeroes=0,this.totalHeroesByMetaClass=[],this.allHeroesClass=[...w.yd].map(([re,se])=>re),this.currentRow=l.DUNG,this.currentHeroAccountRow=l.DUNG,this.DROPDOWN_SIZE=E.wk,this.topListTypes=[{id:"all",label:"All Heroes"},{id:"my",label:"My Heroes"}],this.selectedTopListId="all",this.itemsSortOptions=[{label:l.DUNG,id:l.DUNG},{label:l.SCORE,id:l.SCORE},{label:l.NAME,id:l.NAME},{label:l.REINFORCEMENT,id:l.REINFORCEMENT}],this.dropdownSortSelected=this.itemsSortOptions[0],this.appStateService.setHeaderState({isBackButtonShown:!0,isAccountBalanceShown:!0,isInventoryShown:!1,backUrl:[x.EX.MAIN]})}ngOnInit(){this.providerService.subscribeOnAccountAndNetwork(this.destroy$,this.changeDetectorRef,t=>{this.account=t,this.init()},t=>{this.chainId=t,this.heroControllerService.adjustFees(t),this.init()})}init(){this.account&&this.chainId&&this.loadHeroes()}loadHeroes(){(0,T.D)({generalStat:this.subgraphService.generalTokenomics$(),userStat:this.subgraphService.userStat$(this.account)}).pipe((0,y.R)(this.destroy$)).subscribe(({generalStat:t,userStat:a})=>{this.loading=!1,t&&t.length>0&&(this.generalStat=t[0],this.totalHeroes=this.generalStat.liveHeroes,this.totalHeroesByMetaClass=this.generalStat.liveHeroesByClass),a&&(this.totalAccountHeroes=a.heroes),this.searchHeroes(),this.searchAccountHeroes(),this.changeDetectorRef.detectChanges(),this.mediator.dispatch(new M.N.PageLoaded(x.EX.TOP_LIST))})}prepareHeroes(t){return t?t.map((a,p)=>{const m=a;switch(p){case 0:m.rank="gold";break;case 1:m.rank="silver"}return m.avatarUrl=(0,w.MZ)(a.meta.heroClass),m.scoreFormatted=r.M.formatCurrency(a.score),m.tokenEarnedFormatted=r.M.formatCurrency(+(0,O.bM)(a.heroStat.tokenEarned,18)),m.reinforcementTokenEarnedFormatted=r.M.formatCurrency(+(0,O.bM)(a.heroStat.reinforcementTokenEarned,18)),m.tokenEarned=+(0,O.bM)(a.heroStat.tokenEarned,18),m.reinforcementTokenEarned=+(0,O.bM)(a.heroStat.reinforcementTokenEarned,18),m}):[]}searchHeroes(){const t=this.pageSize*this.page;this.loading=!0,this.subgraphService.heroesTopListPaginated$(this.pageSize,t,0===this.currentItemsSort?this.allHeroesClass:[this.currentItemsSort],this.orderBy,this.orderDirection).pipe((0,y.R)(this.destroy$)).subscribe(a=>{this.heroes=this.prepareHeroes(a),this.loading=!1,this.changeDetectorRef.detectChanges(),this.mediator.dispatch(new M.N.PageLoaded(x.EX.TOP_LIST))})}searchAccountHeroes(){const t=this.pageSize*this.accountPage;this.loading=!0,this.subgraphService.heroesTopListAccountPaginated$(this.pageSize,t,this.account,0===this.currentItemsSort?this.allHeroesClass:[this.currentItemsSort],this.orderHeroAccountBy,this.orderHeroAccountDirection).pipe((0,y.R)(this.destroy$)).subscribe(a=>{this.accountHeroes=this.prepareHeroes(a),this.loading=!1,this.changeDetectorRef.detectChanges(),this.mediator.dispatch(new M.N.PageLoaded(x.EX.TOP_LIST))})}setSortHero(t){switch(t){case l.NAME:this.orderBy=g.DB.UniqName;break;case l.SCORE:this.orderBy=g.DB.Score;break;case l.DUNG:this.orderBy=g.DB.HeroStatTokenEarned;break;case l.REINFORCEMENT:this.orderBy=g.DB.HeroStatReinforcementTokenEarned;break;default:throw new Error("Unknown row name "+t)}this.dropdownSortSelected=this.itemsSortOptions.find(a=>a.id===t),t===this.currentRow&&(this.orderDirection=this.orderDirection===g.N9.Asc?g.N9.Desc:g.N9.Asc),this.currentRow=t,this.searchHeroes()}setSortAccountHero(t){switch(t){case l.NAME:this.orderHeroAccountBy=g.DB.UniqName;break;case l.SCORE:this.orderHeroAccountBy=g.DB.Score;break;case l.DUNG:this.orderHeroAccountBy=g.DB.HeroStatTokenEarned;break;case l.REINFORCEMENT:this.orderHeroAccountBy=g.DB.HeroStatReinforcementTokenEarned;break;default:throw new Error("Unknown row name "+t)}t===this.currentHeroAccountRow&&(this.orderHeroAccountDirection=this.orderHeroAccountDirection===g.N9.Asc?g.N9.Desc:g.N9.Asc),this.currentHeroAccountRow=t,this.searchAccountHeroes()}heroStats(t){this.dialog.open(C.m,{panelClass:"app-overlay-pane",data:{heroToken:t.meta.id,heroId:t.heroId}})}onPageChanged(t){this.page=t,this.searchHeroes(),this.changeDetectorRef.detectChanges()}onHeroAccountPageChanged(t){this.accountPage=t,this.searchAccountHeroes(),this.changeDetectorRef.detectChanges()}onSelectAction({id:t}){this.selectedTopListId=t,this.page=0}createHero(){this.router.navigate([x.EX.CREATE])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(D.F0),e.Y36(A.z),e.Y36(_.r),e.Y36(e.sBO),e.Y36(s.H),e.Y36(I.Z),e.Y36(c.k),e.Y36(d.sK),e.Y36(v._),e.Y36(f.Vq))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-top-list"]],hostAttrs:[1,"g-flex-column"],features:[e._Bn([A.z])],decls:5,vars:6,consts:[["size","big","dividerType","big",1,"tabs",3,"items","isShowDivider","selectedItemId","choose"],[4,"ngIf"],["class","page-loader",4,"ngIf","ngIfElse"],["contentTpl",""],[1,"filters__controls","g-flex","g-flex--align-center","g-flex--space-between"],[1,"g-flex","g-flex--align-center"],[3,"isArrows","isShowTopBottom","isLeftDisabled","isRightDisabled","isTopDisabled","isBottomDisabled","isShowDivider","leftClick","rightClick","topClick","bottomClick",4,"ngIf"],["iconOnly","app-btn-square-list app-btn-square-list--small",1,"sort-dropdown",3,"size","items","selectedItem","sortDirection","isShowSortDirection","selectItem"],[1,"divider","app-divider-scratches-border-v-medium-down"],[3,"isArrows","isShowTopBottom","isLeftDisabled","isRightDisabled","isTopDisabled","isBottomDisabled","isShowDivider","leftClick","rightClick","topClick","bottomClick"],[1,"page-loader"],[1,"content","g-flex-column__item","g-flex-column"],["class","titles g-flex g-flex--align-center",4,"ngIf"],["class","list g-scroll-y",4,"ngIf"],[1,"titles","g-flex","g-flex--align-center"],[1,"item__hero"],[1,"app-divider-bolt","g-flex__item-fixed"],[1,"item__biome"],[1,"item__score"],[1,"item__token"],[1,"item__reinforcement"],[1,"list","g-scroll-y"],["class","item-container",3,"click",4,"ngFor","ngForOf"],[1,"item-container",3,"click"],[1,"item","g-flex","g-flex--align-center"],[1,"item__hero","g-flex","g-flex--align-center"],[1,"g-flex__item"],[1,"avatar","g-flex-column","g-flex--align-center","g-flex__item-fixed"],["avatarType","micro",1,"avatar__image",3,"isCenteredImage","imagePath"],[1,"avatar__level","app-lvl-default-small","g-flex","g-flex--align-center","g-flex--justify-center"],[1,"avatar__level-text"],[1,"g-flex-column","g-flex--align-baseline","gap-8"],[1,"name","text-shadow"],[1,"item__biome","g-flex__item-fixed","text-shadow"],[1,"item__score","g-flex__item-fixed","text-shadow"],["tokenType","sacra",1,"item__token","g-flex--justify-center",3,"isReverse","isUsdNextLine","balanceUnformatted","balance","isShowBalanceUsd"],["tokenType","sacra",1,"item__reinforcement","g-flex--justify-center",3,"isReverse","isUsdNextLine","balanceUnformatted","balance","isShowBalanceUsd"],["backgroundType","huge"],[4,"ngIf","ngIfElse"],["noMyHeroesTpl",""],[1,"g-flex-column","g-flex--align-center","gap-40"],[1,"no-heroes","g-flex","g-flex--align-center","g-flex--justify-center","app-btn-huge_font-size","text-shadow"],[1,"btn-create","app-btn-silver-3",3,"click"],[1,"btn-create__title","app-btn_font-size"]],template:function(t,a){if(1&t&&(e.TgZ(0,"app-radio-group",0),e.NdJ("choose",function(m){return a.onSelectAction(m)}),e.qZA(),e.YNc(1,G,6,6,"ng-container",1),e.YNc(2,z,1,0,"app-loading-small",2),e.YNc(3,X,4,3,"ng-template",null,3,e.W1O)),2&t){const p=e.MAs(4);e.Q6J("items",a.topListTypes)("isShowDivider",!1)("selectedItemId",a.selectedTopListId),e.xp6(1),e.Q6J("ngIf","all"===a.selectedTopListId),e.xp6(1),e.Q6J("ngIf",a.loading)("ngIfElse",p)}},dependencies:[n.sg,n.O5,u.T,P.B,L.y,R.w,B.A,N.T,k.J,d.X$],styles:[".pointer[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:url(/assets/images/cursor/cursor-50-active.avif) 10 0,pointer}.no-action[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;pointer-events:none}.hidden[_ngcontent-%COMP%]{display:none!important}.width-100[_ngcontent-%COMP%]{width:100%}@keyframes button-process-animation{0%{text-shadow:none}to{text-shadow:0 0 16px #dfa94e}}.button-process-animation[_ngcontent-%COMP%]{animation-duration:1s;animation-name:button-process-animation;animation-iteration-count:infinite;animation-direction:alternate}.page-loader[_ngcontent-%COMP%]{position:absolute;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);z-index:5}.gap-2[_ngcontent-%COMP%]{gap:2px}.gap-4[_ngcontent-%COMP%]{gap:4px}.gap-6[_ngcontent-%COMP%]{gap:6px}.gap-8[_ngcontent-%COMP%]{gap:8px}.gap-10[_ngcontent-%COMP%]{gap:10px}.gap-12[_ngcontent-%COMP%]{gap:12px}.gap-14[_ngcontent-%COMP%]{gap:14px}.gap-16[_ngcontent-%COMP%]{gap:16px}.gap-18[_ngcontent-%COMP%]{gap:18px}.gap-20[_ngcontent-%COMP%]{gap:20px}.gap-22[_ngcontent-%COMP%]{gap:22px}.gap-24[_ngcontent-%COMP%]{gap:24px}.gap-26[_ngcontent-%COMP%]{gap:26px}.gap-28[_ngcontent-%COMP%]{gap:28px}.gap-30[_ngcontent-%COMP%]{gap:30px}.gap-32[_ngcontent-%COMP%]{gap:32px}.gap-34[_ngcontent-%COMP%]{gap:34px}.gap-36[_ngcontent-%COMP%]{gap:36px}.gap-38[_ngcontent-%COMP%]{gap:38px}.gap-40[_ngcontent-%COMP%]{gap:40px}.gap-42[_ngcontent-%COMP%]{gap:42px}.gap-44[_ngcontent-%COMP%]{gap:44px}.gap-46[_ngcontent-%COMP%]{gap:46px}.gap-48[_ngcontent-%COMP%]{gap:48px}.gap-50[_ngcontent-%COMP%]{gap:50px}.gap-52[_ngcontent-%COMP%]{gap:52px}.gap-54[_ngcontent-%COMP%]{gap:54px}.gap-56[_ngcontent-%COMP%]{gap:56px}.gap-58[_ngcontent-%COMP%]{gap:58px}.gap-60[_ngcontent-%COMP%]{gap:60px}.gap-62[_ngcontent-%COMP%]{gap:62px}.gap-64[_ngcontent-%COMP%]{gap:64px}.gap-66[_ngcontent-%COMP%]{gap:66px}.gap-68[_ngcontent-%COMP%]{gap:68px}.gap-70[_ngcontent-%COMP%]{gap:70px}.gap-72[_ngcontent-%COMP%]{gap:72px}.gap-74[_ngcontent-%COMP%]{gap:74px}.gap-76[_ngcontent-%COMP%]{gap:76px}.gap-78[_ngcontent-%COMP%]{gap:78px}.gap-80[_ngcontent-%COMP%]{gap:80px}.gap-82[_ngcontent-%COMP%]{gap:82px}.gap-84[_ngcontent-%COMP%]{gap:84px}.gap-86[_ngcontent-%COMP%]{gap:86px}.gap-88[_ngcontent-%COMP%]{gap:88px}.gap-90[_ngcontent-%COMP%]{gap:90px}.gap-92[_ngcontent-%COMP%]{gap:92px}.gap-94[_ngcontent-%COMP%]{gap:94px}.gap-96[_ngcontent-%COMP%]{gap:96px}.gap-98[_ngcontent-%COMP%]{gap:98px}.gap-100[_ngcontent-%COMP%]{gap:100px}.color-enemy-name[_ngcontent-%COMP%]{color:#e03636}.color-negative-value[_ngcontent-%COMP%]{color:#dd6363}.color-positive-value[_ngcontent-%COMP%]{color:#a6a6a6}.color-mana[_ngcontent-%COMP%]{color:#8282f6}.color-red-fire[_ngcontent-%COMP%]{color:#dc3e3e}.color-yellow-fire[_ngcontent-%COMP%]{color:#dfa94e}.color-nickname[_ngcontent-%COMP%]{color:#d7a061}.color-caption[_ngcontent-%COMP%]{color:#a37c83}.bar-hp[_ngcontent-%COMP%]{color:#9af481}.bar-mp[_ngcontent-%COMP%]{color:#8282f6}.bar-exp[_ngcontent-%COMP%]{color:#ffda82}.bar-enemy[_ngcontent-%COMP%]{color:#fb9696}.color-try[_ngcontent-%COMP%]{color:#d8ffd4}.color-free[_ngcontent-%COMP%]{color:#f9fff5}.shadow__button[_ngcontent-%COMP%]{filter:drop-shadow(12px 15px 10px rgba(0,0,0,.15)) drop-shadow(0 0 15px rgba(0,0,0,.2))}.shadow__icon[_ngcontent-%COMP%], .avatar__level[_ngcontent-%COMP%]{filter:drop-shadow(0px 3px 2px rgba(0,0,0,.4)) drop-shadow(0 0 15px rgba(0,0,0,.2))}[_nghost-%COMP%]{margin-top:80px}.tabs[_ngcontent-%COMP%]{margin-left:40px;margin-bottom:40px}.divider[_ngcontent-%COMP%]{margin-top:-20px;margin-bottom:20px}.btn-rogue[_ngcontent-%COMP%]{margin-top:80px;align-self:center}.titles[_ngcontent-%COMP%]{width:100%;padding:0 40px;margin-bottom:20px;text-align:center}.list[_ngcontent-%COMP%]{padding:0 40px}.item[_ngcontent-%COMP%]{padding-bottom:12px;padding-top:24px}.item__hero[_ngcontent-%COMP%]{min-width:240px;max-width:240px}.item__biome[_ngcontent-%COMP%]{min-width:110px;max-width:110px;text-align:center}.item__score[_ngcontent-%COMP%]{min-width:100px;max-width:100px;text-align:center}.item__token[_ngcontent-%COMP%], .item__reinforcement[_ngcontent-%COMP%]{min-width:210px;max-width:210px;line-height:1.2}.item__number[_ngcontent-%COMP%]{width:50px;line-height:.6;margin-top:-12px}.item__number-text[_ngcontent-%COMP%]{text-align:center;min-width:40px}.avatar[_ngcontent-%COMP%]{position:relative}.avatar__level[_ngcontent-%COMP%]{scale:.7;position:absolute;top:-64px;right:-5px;z-index:4}.avatar__level-text[_ngcontent-%COMP%]{text-align:center;white-space:nowrap;color:#dfa94e;text-shadow:0 0 4px rgba(223,169,78,.2)}.app-divider-bolt[_ngcontent-%COMP%]{margin:0 5px}.select[_ngcontent-%COMP%]{padding-left:20px;font-family:SellYouSoul,serif}.name[_ngcontent-%COMP%]{line-height:1.2;text-align:center;overflow:hidden;text-overflow:ellipsis}.pagination[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:40px}.filters__controls[_ngcontent-%COMP%]{padding:0 40px;margin-bottom:20px}.sort-dropdown[_ngcontent-%COMP%]{margin-top:-20px}.no-heroes[_ngcontent-%COMP%]{padding:40px 60px;text-align:center}"],changeDetection:0}),i})(),data:{animation:"TopListComponent"}}];let ee=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[n.ez,D.Bz.forChild(q),S.u5,b.m]}),i})()},90473:(Z,U,o)=>{o.d(U,{r:()=>_});var n=o(80557),S=o(25658),D=o(68351),b=o(43916),x=o(14111),A=o(2677),M=o(9249),E=o(21160),w=o(69637),O=o(27193),g=o(17978),T=o(98678),y=o(11517),r=o(55298),C=o(30611),e=o(46693);let _=(()=>{class s extends S.kP{constructor(c,d,v,f){super(),this.providerService=c,this.errorService=d,this.logger=v,this.relayService=f}createHeroController(c,d=""){return g.x8.connect((0,D.wA)(c).heroController,this.providerService.getProviderForRead())}nameToHero$(c,d){return this.logger.trace("nameToHero",c,d),(0,x.D)(this.createHeroController(d).nameToHero(c)).pipe((0,A.X)({count:S.S8,delay:S.V1}),(0,M.K)(this.errorService.onCatchError))}askReinforcement$(c,d,v,f){return(0,x.D)(this.createHeroController(d,c).askReinforcement.estimateGas(v,f)).pipe((0,E.w)(u=>this.updateCurrentFees$(this.providerService,u)),(0,w.z)(u=>this.providerService.onChainCall(new n.bq({name:"Ask reinforcement",showLoadingScreen:!0,isNeedUpdateHero:!0,txPopulated:this.createHeroController(d,c).askReinforcement.populateTransaction(v,f),gasLimit:(0,b.gu)(u),maxFeePerGas:this.maxFeePerGas,maxPriorityFeePerGas:this.maxPriorityFeePerGas,gasPrice:this.gasPrice,isDelegatedRelayPossible:!0,relayService:this.relayService}))),(0,M.K)(this.errorService.onCatchError))}levelUp$(c,d,v,f,u){return(0,x.D)(this.createHeroController(d,c).levelUp.estimateGas(v,f,u)).pipe((0,E.w)(P=>this.updateCurrentFees$(this.providerService,P)),(0,O.b)(P=>this.providerService.onChainCall(new n.bq({name:"Level up",isNeedUpdateHero:!0,isNeedUpdateBalances:!0,txPopulated:this.createHeroController(d,c).levelUp.populateTransaction(v,f,u),gasLimit:(0,b.gu)(P),maxFeePerGas:this.maxFeePerGas,maxPriorityFeePerGas:this.maxPriorityFeePerGas,gasPrice:this.gasPrice,isDelegatedRelayPossible:!0,relayService:this.relayService}))),(0,M.K)(this.errorService.onCatchError))}create$(c,d,v,f,u,P=!0){return(0,x.D)(this.createHeroController(d,c).createWithRefCode.estimateGas(v,f,u.toLowerCase(),P)).pipe((0,E.w)(L=>this.updateCurrentFees$(this.providerService,L)),(0,O.b)(L=>this.providerService.onChainCall(new n.bq({name:"Create hero",isNeedUpdateHero:!0,isNeedUpdateBalances:!0,txPopulated:this.createHeroController(d,c).createWithRefCode.populateTransaction(v,f,u,P),gasLimit:(0,b.gu)(L),maxFeePerGas:this.maxFeePerGas,maxPriorityFeePerGas:this.maxPriorityFeePerGas,gasPrice:this.gasPrice,isDelegatedRelayPossible:!0,relayService:this.relayService}))),(0,M.K)(this.errorService.onCatchError))}setBiome$(c,d,v,f,u){return(0,x.D)(this.createHeroController(d,c).setBiome.estimateGas(v,f,u)).pipe((0,E.w)(P=>this.updateCurrentFees$(this.providerService,P)),(0,O.b)(P=>this.providerService.onChainCall(new n.bq({name:"Set biome",txPopulated:this.createHeroController(d,c).setBiome.populateTransaction(v,f,u),gasLimit:(0,b.gu)(P),maxFeePerGas:this.maxFeePerGas,maxPriorityFeePerGas:this.maxPriorityFeePerGas,gasPrice:this.gasPrice,isDelegatedRelayPossible:!0,relayService:this.relayService}))),(0,M.K)(this.errorService.onCatchError))}}return s.\u0275fac=function(c){return new(c||s)(T.LFG(y.H),T.LFG(r.T),T.LFG(C.Kf),T.LFG(e.D))},s.\u0275prov=T.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},31584:(Z,U,o)=>{o.d(U,{w:()=>y});var n=o(98678),S=o(8838),D=o(35103),b=o(48821),x=o(96342);function A(r,C){if(1&r&&(n.ynx(0),n._UZ(1,"img",12)(2,"img",12),n.BQk()),2&r){const e=n.oxw().$implicit,_=n.oxw();n.xp6(1),n.ekj("hidden",!(!e.iconDisabled||e.iconDisabled&&e.id===_.selectedItemId)),n.Q6J("src",e.icon,n.LSH),n.xp6(1),n.ekj("hidden",!(e.iconDisabled&&e.id!==_.selectedItemId)),n.Q6J("src",e.iconDisabled,n.LSH)}}function M(r,C){if(1&r&&n._UZ(0,"img",13),2&r){const e=n.oxw().$implicit,_=n.oxw();n.ekj("item__divider--big","big"===_.size)("item__divider--wrap",_.isWrapLabel)("item__divider--visible",e.id===_.selectedItemId)}}function E(r,C){if(1&r&&n._UZ(0,"img",14),2&r){const e=n.oxw().$implicit,_=n.oxw();n.ekj("item__divider--visible",e.id===_.selectedItemId)}}function w(r,C){1&r&&n._UZ(0,"img",15)}function O(r,C){1&r&&n._UZ(0,"img",16)}function g(r,C){if(1&r){const e=n.EpF();n.TgZ(0,"div",3)(1,"div",4)(2,"div",5),n.NdJ("click",function(){const I=n.CHM(e).$implicit,c=n.oxw();return n.KtG(c.onSelect(I))}),n.YNc(3,A,3,6,"ng-container",6),n.TgZ(4,"div",7),n._uU(5),n.ALo(6,"translate"),n.qZA(),n.YNc(7,M,1,6,"img",8),n.YNc(8,E,1,2,"img",9),n.qZA(),n.YNc(9,w,1,0,"img",10),n.YNc(10,O,1,0,"img",11),n.qZA()()}if(2&r){const e=C.$implicit,_=C.last,s=n.oxw();n.ekj("item--style2",s.isUseStyle2)("pointer",!s.isDisabled&&s.isChangeManually)("app-btn-small_font-size","small"===s.size)("app-btn-medium_font-size","medium"===s.size)("app-btn-medium-small_font-size","medium-small"===s.size)("app-btn_font-size","default"===s.size)("app-btn-huge_font-size","big"===s.size)("item--disabled",s.isDisabled)("item--selected",e.id===s.selectedItemId),n.xp6(3),n.Q6J("ngIf",e.icon),n.xp6(1),n.ekj("label--wrap",s.isWrapLabel),n.xp6(1),n.hij(" ",n.lcZ(6,26,e.label)," "),n.xp6(2),n.Q6J("ngIf","big"===s.selectedType),n.xp6(1),n.Q6J("ngIf","small"===s.selectedType),n.xp6(1),n.Q6J("ngIf",!_&&"big"===s.dividerType),n.xp6(1),n.Q6J("ngIf",!_&&"small"===s.dividerType)}}function T(r,C){1&r&&n._UZ(0,"app-scratch",17)}let y=(()=>{class r{constructor(){this.items=[],this.isDisabled=!1,this.isChangeManually=!0,this.isShowDivider=!0,this.dividerType="none",this.selectedType="big",this.size="small",this.isUseStyle2=!1,this.isWrapLabel=!1,this.choose=new n.vpe,this.CHECKBOX_STATE=S.H}onSelect(e){this.isDisabled||!this.isChangeManually||(this.selectedItemId=e.id,this.choose.emit(e))}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-radio-group"]],inputs:{items:"items",selectedItemId:"selectedItemId",isDisabled:"isDisabled",isChangeManually:"isChangeManually",isShowDivider:"isShowDivider",dividerType:"dividerType",selectedType:"selectedType",size:"size",isUseStyle2:"isUseStyle2",isWrapLabel:"isWrapLabel"},outputs:{choose:"choose"},decls:3,vars:2,consts:[[1,"container","g-flex","g-flex--align-center"],["class","item g-flex-column g-flex--align-center",3,"item--style2","pointer","app-btn-small_font-size","app-btn-medium_font-size","app-btn-medium-small_font-size","app-btn_font-size","app-btn-huge_font-size","item--disabled","item--selected",4,"ngFor","ngForOf"],["class","scratch","backgroundType","small",4,"ngIf"],[1,"item","g-flex-column","g-flex--align-center"],[1,"g-flex","g-flex--align-center"],[1,"g-flex-column","g-flex--align-center",3,"click"],[4,"ngIf"],[1,"label","text-shadow"],["class","item__divider","src","assets/images/ui/dividers/borders_v/border_v_silver_up.png","alt","",3,"item__divider--big","item__divider--wrap","item__divider--visible",4,"ngIf"],["class","item__divider item__divider-small","src","assets/images/ui/dividers/bolt/bolt.png","alt","",3,"item__divider--visible",4,"ngIf"],["class","divider","src","assets/images/ui/dividers/bolt/group-of-bolts.png","alt","",4,"ngIf"],["class","divider","src","assets/images/ui/dividers/bolt/bolt.png","alt","",4,"ngIf"],["alt","",3,"src"],["src","assets/images/ui/dividers/borders_v/border_v_silver_up.png","alt","",1,"item__divider"],["src","assets/images/ui/dividers/bolt/bolt.png","alt","",1,"item__divider","item__divider-small"],["src","assets/images/ui/dividers/bolt/group-of-bolts.png","alt","",1,"divider"],["src","assets/images/ui/dividers/bolt/bolt.png","alt","",1,"divider"],["backgroundType","small",1,"scratch"]],template:function(e,_){1&e&&(n.TgZ(0,"div",0),n.YNc(1,g,11,28,"div",1),n.qZA(),n.YNc(2,T,1,0,"app-scratch",2)),2&e&&(n.xp6(1),n.Q6J("ngForOf",_.items),n.xp6(1),n.Q6J("ngIf",_.isShowDivider))},dependencies:[D.sg,D.O5,b.T,x.X$],styles:[".pointer[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:url(/assets/images/cursor/cursor-50-active.avif) 10 0,pointer}.no-action[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;pointer-events:none}.hidden[_ngcontent-%COMP%]{display:none!important}.width-100[_ngcontent-%COMP%]{width:100%}@keyframes button-process-animation{0%{text-shadow:none}to{text-shadow:0 0 16px #dfa94e}}.button-process-animation[_ngcontent-%COMP%]{animation-duration:1s;animation-name:button-process-animation;animation-iteration-count:infinite;animation-direction:alternate}.page-loader[_ngcontent-%COMP%]{position:absolute;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);z-index:5}.gap-2[_ngcontent-%COMP%]{gap:2px}.gap-4[_ngcontent-%COMP%]{gap:4px}.gap-6[_ngcontent-%COMP%]{gap:6px}.gap-8[_ngcontent-%COMP%]{gap:8px}.gap-10[_ngcontent-%COMP%]{gap:10px}.gap-12[_ngcontent-%COMP%]{gap:12px}.gap-14[_ngcontent-%COMP%]{gap:14px}.gap-16[_ngcontent-%COMP%]{gap:16px}.gap-18[_ngcontent-%COMP%]{gap:18px}.gap-20[_ngcontent-%COMP%]{gap:20px}.gap-22[_ngcontent-%COMP%]{gap:22px}.gap-24[_ngcontent-%COMP%]{gap:24px}.gap-26[_ngcontent-%COMP%]{gap:26px}.gap-28[_ngcontent-%COMP%]{gap:28px}.gap-30[_ngcontent-%COMP%]{gap:30px}.gap-32[_ngcontent-%COMP%]{gap:32px}.gap-34[_ngcontent-%COMP%]{gap:34px}.gap-36[_ngcontent-%COMP%]{gap:36px}.gap-38[_ngcontent-%COMP%]{gap:38px}.gap-40[_ngcontent-%COMP%]{gap:40px}.gap-42[_ngcontent-%COMP%]{gap:42px}.gap-44[_ngcontent-%COMP%]{gap:44px}.gap-46[_ngcontent-%COMP%]{gap:46px}.gap-48[_ngcontent-%COMP%]{gap:48px}.gap-50[_ngcontent-%COMP%]{gap:50px}.gap-52[_ngcontent-%COMP%]{gap:52px}.gap-54[_ngcontent-%COMP%]{gap:54px}.gap-56[_ngcontent-%COMP%]{gap:56px}.gap-58[_ngcontent-%COMP%]{gap:58px}.gap-60[_ngcontent-%COMP%]{gap:60px}.gap-62[_ngcontent-%COMP%]{gap:62px}.gap-64[_ngcontent-%COMP%]{gap:64px}.gap-66[_ngcontent-%COMP%]{gap:66px}.gap-68[_ngcontent-%COMP%]{gap:68px}.gap-70[_ngcontent-%COMP%]{gap:70px}.gap-72[_ngcontent-%COMP%]{gap:72px}.gap-74[_ngcontent-%COMP%]{gap:74px}.gap-76[_ngcontent-%COMP%]{gap:76px}.gap-78[_ngcontent-%COMP%]{gap:78px}.gap-80[_ngcontent-%COMP%]{gap:80px}.gap-82[_ngcontent-%COMP%]{gap:82px}.gap-84[_ngcontent-%COMP%]{gap:84px}.gap-86[_ngcontent-%COMP%]{gap:86px}.gap-88[_ngcontent-%COMP%]{gap:88px}.gap-90[_ngcontent-%COMP%]{gap:90px}.gap-92[_ngcontent-%COMP%]{gap:92px}.gap-94[_ngcontent-%COMP%]{gap:94px}.gap-96[_ngcontent-%COMP%]{gap:96px}.gap-98[_ngcontent-%COMP%]{gap:98px}.gap-100[_ngcontent-%COMP%]{gap:100px}.container[_ngcontent-%COMP%]{position:relative}.item[_ngcontent-%COMP%]{position:relative;color:#4b4137;-webkit-user-select:none;user-select:none;white-space:nowrap}.item--style2[_ngcontent-%COMP%]{color:#786c5c}.item[_ngcontent-%COMP%]:not(:last-of-type){margin-right:20px}.item--selected[_ngcontent-%COMP%]{color:inherit}.item--disabled[_ngcontent-%COMP%]{color:#a37c83}.item__divider[_ngcontent-%COMP%]{position:absolute;bottom:-20px;opacity:0;transition:all .16s ease}.item__divider--wrap[_ngcontent-%COMP%]{bottom:-30px}.item__divider--visible[_ngcontent-%COMP%]{opacity:1}.item__divider--big[_ngcontent-%COMP%]{bottom:-20px}.item__divider-small[_ngcontent-%COMP%]{bottom:-25px}.label[_ngcontent-%COMP%]{font-family:SellYouSoul,serif}.label--wrap[_ngcontent-%COMP%]{white-space:pre-line;text-align:center;line-height:1.2}.divider[_ngcontent-%COMP%]{margin-top:5px;margin-left:15px}.scratch[_ngcontent-%COMP%]{width:100%!important;margin-top:3px}"],changeDetection:0}),r})()}}]);