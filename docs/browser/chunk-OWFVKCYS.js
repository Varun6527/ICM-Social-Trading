import{a as $}from"./chunk-XY6TIIOF.js";import{a as ee}from"./chunk-AGXGLGFY.js";import{a as X}from"./chunk-ZMEXDH5L.js";import{f as Z}from"./chunk-KKB3U7AD.js";import{c as q,i as Q,o as H,q as J,r as K,u as Y,v as te}from"./chunk-BBDCSVIU.js";import{a as P}from"./chunk-D2HZNMZZ.js";import{Aa as k,Ea as j,Ma as z,O as G,Oa as v,T as R,U,V}from"./chunk-GPXXUB3O.js";import{$b as F,Da as _,Ha as s,Kc as W,Lc as B,O as w,Qa as r,R as b,Ra as a,Sa as u,Sb as L,Va as A,W as f,X as g,Ya as C,_a as m,eb as T,fb as M,gb as O,lb as l,mb as h,nb as S,oa as n,pa as y,qb as N,rb as I,sb as D,ub as E,yb as c,zb as d}from"./chunk-VFCAWHKN.js";import"./chunk-XTLRYQGA.js";function ie(o,x){if(o&1){let e=A();r(0,"button",10),C("click",function(){f(e);let i=m(2);return g(i.clearFilters())}),u(1,"img",18),l(2),c(3,"translate"),a()}o&2&&(n(2),S(" ",d(3,1,"COMMON.Clear")," "))}function ne(o,x){if(o&1){let e=A();r(0,"mat-form-field")(1,"mat-label"),l(2),c(3,"translate"),a(),r(4,"mat-select",19),D("ngModelChange",function(i){f(e);let p=m(2);return I(p.selectedAccountStatus,i)||(p.selectedAccountStatus=i),g(i)}),C("selectionChange",function(){f(e);let i=m(2);return g(i.refreshAccountDataList())}),r(5,"mat-option",20),l(6),c(7,"translate"),a(),r(8,"mat-option",20),l(9),c(10,"translate"),a()()()}if(o&2){let e=m(2);n(2),h(d(3,6,"PROVIDERS_PROFILE.Scope")),n(2),N("ngModel",e.selectedAccountStatus),n(),s("value","Active"),n(),h(d(7,8,"COMMON.Active")),n(2),s("value","All"),n(),h(d(10,10,"COMMON.All"))}}function oe(o,x){if(o&1){let e=A();r(0,"mat-card-content",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"h5"),l(5),c(6,"translate"),a(),r(7,"p"),l(8),c(9,"translate"),a()()(),r(10,"div",7)(11,"div",8)(12,"div",9)(13,"button",10),C("click",function(){f(e);let i=m();return g(i.applyFilters())}),u(14,"img",11),l(15),c(16,"translate"),a(),_(17,ie,4,3,"button",12),a(),r(18,"div",13),_(19,ne,11,12,"mat-form-field",14),r(20,"button",15),C("click",function(){f(e);let i=m();return g(i.refreshAccountDataList())}),u(21,"img",16),l(22),c(23,"translate"),a()()(),u(24,"common-ag-grid",17),a()()()}if(o&2){let e=m();n(5),h(d(6,9,"ACCOUNTS.Accounts")),n(3),h(d(9,11,"ACCOUNTS.List of accounts")),n(7),S(" ",d(16,13,"COMMON.Filters")," "),n(2),s("ngIf",e.showFilters),n(2),s("ngIf",e.showFilters),n(3),S(" ",d(23,15,"COMMON.Refresh")," "),n(2),s("gridConfig",e.gridConfig)("gridData",e.accountGridData)("showGridLoader",e.showGridLoader)}}function re(o,x){o&1&&(r(0,"div",21),u(1,"img",22),a())}var De=(()=>{class o{_webService;accountGridData=[];selectedAccountStatus="Active";showLoader=!1;showGridLoader=!1;showFilters=!1;gridConfig;errorComponent;commonDialog=w(q);hideAgGrid;constructor(e){this._webService=e,this._webService.subscribeOnWebDataChange("AccountStandAloneComponent",t=>{this.recieveChildrenEmitter(t)}),this.getAccountsData("showPageLoader")}getAccountsData(e){this.toggleLoadingOverlay(e,!0);let t={scope:this.selectedAccountStatus,$count:!0};this._webService.getTradingAccountData(t).subscribe({next:i=>{this.accountGridData=[],i.items.forEach(p=>this.accountGridData.push(new Z(p))),this.toggleLoadingOverlay(e,!1)},error:i=>{this.showErrorWarnMessage(i?.error?.errorMessage)}})}toggleLoadingOverlay(e,t){e=="showPageLoader"?(this.setupAccountGridConfig(),this.showLoader=t):e=="showGridLoader"&&(this.showGridLoader=t)}showErrorWarnMessage(e){let t=this.errorComponent?.config;t.message=e||t.message,this.errorComponent?.openErrorSnackbar()}setupAccountGridConfig(){let e=[{field:"tradingAccName",headerName:"ACCOUNTS.Title",cellRenderer:Y,resizable:!1,width:250,suppressSizeToFit:!0,colId:"accountDetailsPopup"},{field:"type",headerName:"ACCOUNTS.Type",cellRenderer:$,cellStyle:{display:"flex","justify-content":"center","flex-direction":"column"},resizable:!1,width:140,maxWidth:140},{field:"tradingAccountNo",headerName:"ACCOUNTS.Trading Account",resizable:!1,width:200,maxWidth:250},{field:"balance",headerName:"ACCOUNTS.Balance",resizable:!1,width:150,maxWidth:150},{field:"equity",headerName:"ACCOUNTS.Equity",resizable:!1,width:150,maxWidth:150},{field:"connectTime",headerName:"ACCOUNTS.Connected",resizable:!1,width:220,maxWidth:220},{field:"actions",headerName:"",cellRenderer:X,flex:1,colId:"accountDetailsPopup",showPopupArraow:!0,sortable:!1}];this.setupGridConfig(e)}setupGridConfig(e){this.gridConfig={maxHeight:"400px",noDataWarnMessage:"There are no accounts data",gridOptions:{},agGridTheme:"ag-theme-alpine",pageSizeDropdownArr:[25,50,100],initialSelectedPageSize:25,columnDefination:e,enablePagination:!0,headerNameLangArr:e.map(t=>t.headerName),rowModelType:"clientSide",rowHeight:void 0}}refreshAccountDataList(){this.getAccountsData("showGridLoader")}clearFilters(){this.selectedAccountStatus="Active",this.refreshAccountDataList()}applyFilters(){this.showFilters?(this.showFilters=!1,this.selectedAccountStatus!=="Active"&&this.clearFilters()):this.showFilters=!0}recieveChildrenEmitter(e){e.action=="open_account_details_popup"&&this.openBeTradingAccountPopup(e.data)}openBeTradingAccountPopup(e){this.commonDialog.open(ee,{panelClass:"common-dialog",data:this.prepareTradingAccountData(e)}),this.commonDialog.afterAllClosed.subscribe(t=>{})}prepareTradingAccountData(e){return{mainTitle:"HOME.TradingAccInfo",secondryTitle:"ACCOUNTS.InfoMetaTradeAccount",labelDetails:[{title:"COMMON.Id",value:e.clientId},{title:"COMMON.State",value:e.state,type:"tag"},{title:"ACCOUNTS.Connected",value:e.connectTime},{title:"PROVIDERS_PROFILE.MT login",value:e.tradingAccountNo},{title:"PROVIDERS_PROFILE.MT name",value:e.tradingAccName},{title:"ACCOUNTS.TradeGroupType",value:e.tradeGroupType,type:"tag"},{title:"ACCOUNTS.AvailInMetaTrade",value:e.avialableInMetaTrade,type:"tag"},{title:"ACCOUNTS.TradeType",value:e.tradeType,type:"tag"},{title:"PROVIDERS_PROFILE.Currency",value:e.currency},{title:"ACCOUNTS.Balance",value:e.balance},{title:"ACCOUNTS.Credit",value:e.credit},{title:"ACCOUNTS.Equity",value:e.equity},{title:"ACCOUNTS.FloatProfit",value:e.floatingPoint}]}}ngOnDestroy(){this._webService.unSubscribeOnWebDataChange("AccountStandAloneComponent")}static \u0275fac=function(t){return new(t||o)(y(P))};static \u0275cmp=b({type:o,selectors:[["app-account"]],viewQuery:function(t,i){if(t&1&&T(v,5),t&2){let p;M(p=O())&&(i.errorComponent=p.first)}},standalone:!0,features:[E],decls:4,vars:2,consts:[["appearance","outlined",1,"section-card"],["class","section-card-content",4,"ngIf"],["class","full-view-port-height d-flex justify-center align-center",4,"ngIf"],[1,"section-card-content"],[1,"home-card"],[1,"header","d-flex","justify-space-between","align-center"],[1,"header-title"],[1,"metrics-table"],[1,"header-buttons","d-flex","justify-space-between"],[1,"d-flex","g-20","justify-center","align-center"],[1,"secondary-btn",3,"click"],["src","../../../../assets/icons/filterIcon.svg"],["class","secondary-btn",3,"click",4,"ngIf"],[1,"d-flex","g-20","common-dropdown"],[4,"ngIf"],[1,"refresh-btn",3,"click"],["src","../../../../assets/icons/rotateIcon.svg"],[3,"gridConfig","gridData","showGridLoader"],["width","20","src","../../../../assets/icons/clear-icon.svg"],[3,"ngModelChange","selectionChange","ngModel"],[3,"value"],[1,"full-view-port-height","d-flex","justify-center","align-center"],["src","../../../../assets/logo/ICM Logo Default 1.png"]],template:function(t,i){t&1&&(r(0,"mat-card",0),_(1,oe,25,17,"mat-card-content",1)(2,re,2,0,"div",2),a(),u(3,"show-error-message")),t&2&&(n(),s("ngIf",!i.showLoader),n(),s("ngIf",i.showLoader))},dependencies:[F,L,v,B,W,V,R,U,K,H,Q,J,G,z,k,j,te],styles:[".common-dropdown .mdc-text-field{background-color:var(--primaryWhite)!important;border:1px solid var(--border-color)!important;border-bottom:0px!important;border-radius:8px!important;width:150px}  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple:before{border-bottom-color:var(--border-color)!important}  .common-dropdown .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple:before{border-bottom-color:var(--border-color)!important}  .mat-mdc-form-field-subscript-wrapper{display:none}.refresh-btn[_ngcontent-%COMP%]{background:#fff;color:#000;border-radius:8px;font-weight:500;font-size:18px;border:1px solid #D0D5DD;padding:12px 18px;display:flex;justify-content:space-between;gap:10px;align-items:center;cursor:pointer;min-height:56px;transition:background-color .3s linear,border-radius .3s linear,padding .3s linear,width .3s linear;margin-bottom:0}"]})}return o})();export{De as AccountStandAloneComponent};
