"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[53970],{975216:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var n=a(667294),i=a(545007),r=a(883119),s=a(587114),o=a(224796),l=a(510989),d=a(619370),c=a(172203),_=a(140017),u=a(906623);function p({constraint:e}){let t=(0,u.E)(),a=t?.getId();return(0,n.useEffect)(()=>{t&&t.markConstraintComplete(e)},[a,e]),null}var m=a(608516),f=a(731714),v=a(623409),h=a(494125),g=a(855142),S=a(559510),y=a(325945),E=a(623281),I=a(728294),k=a(785893);let b=(0,I.Z)(()=>a.e(43473).then(a.bind(a,316503)),void 0,"PinSaveButtonCommon"),A=(0,n.lazy)(async()=>({default:(await Promise.all([a.e(69965),a.e(22538)]).then(a.bind(a,758697))).QuickSaveButtonWithExperienceAnchor})),R=({boardCount:e=0,clientTrackingParams:t,fromEggsBoard:a,onBoardSelectionFlyoutChange:I,onClickCallback:R,pin:Z,showEnabledSaveBehavior:C,showRepinOnInitialRender:P,variant:x,viewParameter:T,viewType:w})=>{let U=(0,u.E)(),{experience:D}=(0,c.Z)(1000310),{experience:M}=(0,c.Z)(12),N=(0,v.Z)(),j=(0,i.I0)(),B=(0,_.ZP)(),O=(0,n.useRef)(!1),{pins:L,clear:K}=(0,S.Z)(),Q=(0,f.M0)().getItem(o.M8)||"",H=Q?Q===Z.id:!!L&&L.length>0&&L[L.length-1].id===Z.id;(0,h.Z)(()=>{O.current||2!==L.length&&(1!==L.length||H)||(O.current=!0,(2===L.length&&!Q&&H?[L[0]]:L).forEach(({id:e,nodeId:t})=>{(0,s.Z)({description:"",entityId:e,link:"",promotedIsRemovable:void 0,title:""},B).then(a=>{let{id:n,url:i,name:r}=a;j((0,y.d)({boardId:n,url:i,title:r||"",pinId:e||"",nodeId:t}))})}),H||K())});let F=()=>{(0,f.M0)().removeItem(o.M8),(0,f.M0)().removeItem(o.RD),K(),N({action:"trigger",item:"unauth-save-button-quicksave"}),j((0,E.hT)(!0)),j((0,y.d)({boardId:"",url:"",title:"Profile",pinId:Z.id,nodeId:Z?.node_id})),j((0,y.X)(Z))},G=()=>{U&&U.markConstraintComplete("button")};if(Z?.pinner?.blocked_by_me||Z?.promoted_is_removable)return(0,k.jsx)(p,{constraint:"button"});if(D&&502450===D.experience_id)return(0,k.jsx)(l.Z,{name:"SafeSuspense_SaveAffordance_QuickSaveButton",children:(0,k.jsx)(m.Z,{children:(0,k.jsx)(A,{autoQuicksaveCallback:F,clientTrackingParams:t,experience:D,onClickCallback:R,onMount:G,pinKey:{type:"deprecated",data:Z},shouldAutoQuicksave:H,showEnabledSaveBehavior:C,viewParameter:T})})});let V=!Z.content_sensitivity?.is_sensitive_content&&void 0!==e,W=[501041],$=M&&501041===M.experience_id&&M.display_data.has_tooltip?e=>(0,k.jsx)(d.default,{anchor:e,experienceIds:W,idealDirection:"down",placementId:12,positionRelativeToAnchor:!0,showCaret:!0}):void 0;return V?(0,k.jsx)(r.xu,{children:(0,k.jsx)(l.Z,{name:"SafeSuspense_SaveAffordance_PinBetterSave",children:(0,k.jsx)(g.default,{autoQuicksaveCallback:F,clientTrackingParams:t,fromEggsBoard:a,onClickCallback:R,onMount:G,onToggleFlyout:I,pinKey:{type:"deprecated",data:Z},renderPinSaveTooltip:$,shouldAutoQuicksave:H,variant:x,viewParameter:T,viewType:w})})}):(0,k.jsx)(l.Z,{name:"SafeSuspense_SaveAffordance_PinSaveButton",children:(0,k.jsx)(m.Z,{children:(0,k.jsx)(b,{clientTrackingParams:t,isCloseupPin:!0,onClickCallback:R,onMount:G,pinKey:{type:"deprecated",data:Z},renderPinSaveTooltip:$,showRepinOnInitialRender:P})})})}},127285:(e,t,a)=>{a.d(t,{V:()=>n,w:()=>i});let n="hasAppInstalledWasLogged",i="unauthSavedPins"},235712:(e,t,a)=>{a.d(t,{i:()=>i,x:()=>r});var n=a(96452);let i=["shopping_rec_disabled","featureMap","comments_disabled","allow_mentions","messaging_permissions","opt_in_private_account","ads_customize_from_conversion","personalize_from_offsite_browsing","third_party_marketing_tracking_enabled","ccpa_opted_out","third_party_ads_personalization","video_rec_enabled"];function r({apiErrorCode:e,onShowMessage:t,onPassCodeRequired:a,onPassCodeSkipConfirmation:i}){e&&(({[n.RR]:t,[n.mX]:a,[n.q6]:i})[e]||t)()}},876605:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(216167);let i=e=>n.Z.create("UserPasswordResource",e).callUpdate({showError:!1})},175789:(e,t,a)=>{a.d(t,{Z:()=>n});let n=(e,t)=>e.length>t?e.substr(0,t-3).trim()+"…":e},559510:(e,t,a)=>{a.d(t,{$:()=>d,Z:()=>u});var n=a(224796),i=a(127285),r=a(5859),s=a(944662),o=a(731714),l=a(233440);let d=2,c=e=>e?.pins??[],_=e=>e.length?{pins:e}:null,u=()=>{let{isAuthenticated:e,countryFromHostName:t,countryFromIp:a}=(0,r.B)(),u=(0,s.Z)({countryFromHostName:t||"",countryFromIp:a||"",isAuthenticated:e}),p=(0,o.M0)(),m=c(u?p.getItem(n.s1):l.ZP.getItem(i.w)),f=e=>u?p.setItem(n.s1,_(e)):l.ZP.setItem(i.w,_(e)),v=()=>m.length<d;return{pins:m,save:e=>{v()&&f(m.filter(({id:t})=>t!==e.id).concat([e]))},unsave:e=>f(m.filter(({id:t})=>t!==e)),isSaved:e=>m.some(({id:t})=>t===e),clear:()=>f([]),canSaveMore:v}}},623281:(e,t,a)=>{a.d(t,{Cp:()=>f,GT:()=>d,V6:()=>o,W2:()=>_,W6:()=>v,_L:()=>m,fm:()=>l,hT:()=>c});var n=a(216167),i=a(235712),r=a(876605),s=a(227258);function o(e,t){return{type:"UPDATE_USER_SOCIAL_NETWORK",payload:{socialNetworkName:e,connected:t}}}let l=e=>({type:"USER_DOMAIN_VERIFIED",payload:{verifiedWebsite:e}}),d=e=>({type:"USER_DOMAIN_UNVERIFIED",payload:{verifiedWebsite:e}});function c(e){return{type:"UPDATE_HAS_QUICKSAVE_BOARD",payload:{createdQuicksaveBoard:e}}}let _=(e,t,a)=>n=>{n({type:"USER_SETTING_CHANGE",payload:{id:e,field:t,value:a}})},u=(e,t,a)=>n=>{n({type:"USER_PARTNER_SETTING_CHANGE",payload:{id:e,field:t,value:a}})},p=e=>{let t=e.split(" ");return{first_name:t[0],last_name:t[1]}},m=({field:e,value:t,passcode:a,onSettingSavedHn:r,showErrorHn:o,surfaceTag:l,userId:d,passcodeSkipAcknowledged:c=!1})=>async(m,f)=>{let v=f().users[d],h={user_id:d,surface_tag:l};if("full_name"===e){if(v.is_partner)h.business_name=t;else{let e=p(t);h.first_name=e.first_name,h.last_name=e.last_name||""}}else h[e]=t;a&&(h.passcode=a),i.i.includes(e)&&null!=c&&(h.user_confirm_skip_passcode=c);try{if(await n.Z.create("UserSettingsResource",h).callUpdate(),"profile_image_url"===e)m((0,s.b)("UserResource",{options:h}));else if("full_name"===e){if(v.is_partner)m(_(d,"first_name",t));else{let e=p(t);m(_(d,"first_name",e.first_name)),m(_(d,"last_name",e.last_name))}}m(v.is_partner&&("account_type"===e||"contact_name"===e)?u(d,e,t):_(d,e,t)),r()}catch(e){o(e)}},f=(e,t,a,n,i,s,o)=>()=>{(0,r.Z)({new:t,new_confirm:a,old:e,passcode:n,recaptcha_v3_token:i}).then(s,o)},v=(e,t,a,i,r,s)=>o=>{o(_(e,`${t}.${a}`,i));let l={},d="EmailSettingsResource";void 0!==r?(l={section:t,option:a,value:i,od:r.od,user_id:r.user_id},d="UnsubEmailSettingsResource"):l={section:t,option:a,value:i},n.Z.create(d,l).callUpdate().then(s).catch(()=>o(_(e,`${t}.${a}`,!i)))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/app-common-react-components-closeup-CloseupBody-SaveAffordance-b950ab5f6ad12b24.mjs.map