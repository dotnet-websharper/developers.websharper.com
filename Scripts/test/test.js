(function(Global)
{
 "use strict";
 var test,Helpers,JSHelpers,Mdl,View,Language,WsVersion,EndPoint,Icons,DocHelpers,ConfigurationPageType,ConfigurationPage,ConfigurationSection,Configuration,APITypes,NodeType,APINodeData,APIItem,Pages,CLIENT,Search,DocsClient,ApiClient,SC$1,test_Templates,WebSharper,Slice,UI,View$1,Runtime,Strings,Templating,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,Operators,Arrays,Seq,Unchecked,List,console,Doc,AttrModule,Attrs,Utils,AttrProxy,Lazy,Var$1,Client,Templates,ListModel,Storage,Serializer,Number,DomUtility;
 test=Global.test=Global.test||{};
 Helpers=test.Helpers=test.Helpers||{};
 JSHelpers=Helpers.JSHelpers=Helpers.JSHelpers||{};
 Mdl=JSHelpers.Mdl=JSHelpers.Mdl||{};
 View=Helpers.View=Helpers.View||{};
 Language=Helpers.Language=Helpers.Language||{};
 WsVersion=Helpers.WsVersion=Helpers.WsVersion||{};
 EndPoint=test.EndPoint=test.EndPoint||{};
 Icons=test.Icons=test.Icons||{};
 DocHelpers=test.DocHelpers=test.DocHelpers||{};
 ConfigurationPageType=DocHelpers.ConfigurationPageType=DocHelpers.ConfigurationPageType||{};
 ConfigurationPage=DocHelpers.ConfigurationPage=DocHelpers.ConfigurationPage||{};
 ConfigurationSection=DocHelpers.ConfigurationSection=DocHelpers.ConfigurationSection||{};
 Configuration=DocHelpers.Configuration=DocHelpers.Configuration||{};
 APITypes=test.APITypes=test.APITypes||{};
 NodeType=APITypes.NodeType=APITypes.NodeType||{};
 APINodeData=APITypes.APINodeData=APITypes.APINodeData||{};
 APIItem=APITypes.APIItem=APITypes.APIItem||{};
 Pages=test.Pages=test.Pages||{};
 CLIENT=Pages.CLIENT=Pages.CLIENT||{};
 Search=CLIENT.Search=CLIENT.Search||{};
 DocsClient=Pages.DocsClient=Pages.DocsClient||{};
 ApiClient=Pages.ApiClient=Pages.ApiClient||{};
 SC$1=Global.StartupCode$test$Main=Global.StartupCode$test$Main||{};
 test_Templates=Global.test_Templates=Global.test_Templates||{};
 WebSharper=Global.WebSharper;
 Slice=WebSharper&&WebSharper.Slice;
 UI=WebSharper&&WebSharper.UI;
 View$1=UI&&UI.View;
 Runtime=WebSharper&&WebSharper.Runtime;
 Strings=WebSharper&&WebSharper.Strings;
 Templating=UI&&UI.Templating;
 Runtime$1=Templating&&Templating.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 Operators=WebSharper&&WebSharper.Operators;
 Arrays=WebSharper&&WebSharper.Arrays;
 Seq=WebSharper&&WebSharper.Seq;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 List=WebSharper&&WebSharper.List;
 console=Global.console;
 Doc=UI&&UI.Doc;
 AttrModule=UI&&UI.AttrModule;
 Attrs=UI&&UI.Attrs;
 Utils=WebSharper&&WebSharper.Utils;
 AttrProxy=UI&&UI.AttrProxy;
 Lazy=WebSharper&&WebSharper.Lazy;
 Var$1=UI&&UI.Var$1;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 ListModel=UI&&UI.ListModel;
 Storage=UI&&UI.Storage;
 Serializer=UI&&UI.Serializer;
 Number=Global.Number;
 DomUtility=UI&&UI.DomUtility;
 Mdl.UpgradeDom=Global.ignore;
 JSHelpers.Trim=function(s,c)
 {
  var start,finish;
  start=0;
  finish=s.length-1;
  while(start<s.length&&s[start]===c)
   start=start+1;
  while(finish>start&&s[finish]===c)
   finish=finish-1;
  return Slice.string(s,{
   $:1,
   $0:start
  },{
   $:1,
   $0:finish
  });
 };
 View.Zip=function(v1,v2)
 {
  return View$1.Map2(function(x,y)
  {
   return[x,y];
  },v1,v2);
 };
 Language=Helpers.Language=Runtime.Class({
  toString:function()
  {
   return this=="cs"?"cs":"fs";
  }
 },null,Language);
 Language.For=function(v)
 {
  return v=="v3.x"?Helpers.v3xLanguages():Helpers.allLanguages();
 };
 Language.PrettyString=function(_this)
 {
  return _this=="cs"?"C#":"F#";
 };
 Language.get_AsStringForDocConfigPath=function($this)
 {
  return $this=="cs"?"csharp":"fsharp";
 };
 WsVersion=Helpers.WsVersion=Runtime.Class({
  toString:function()
  {
   return this=="v4.x"?"v4.x":"v3.x";
  }
 },null,WsVersion);
 WsVersion.For=function(v)
 {
  return v=="fs"?Helpers.allVersions():Helpers.csVersions();
 };
 WsVersion.NumberString=function(_this)
 {
  return _this=="v4.x"?"4.x":"3.x";
 };
 WsVersion.PrettyString=function(_this)
 {
  return _this=="v4.x"?"v4.x":"v3.x";
 };
 Helpers.v3xLanguages=function()
 {
  SC$1.$cctor();
  return SC$1.v3xLanguages;
 };
 Helpers.allLanguages=function()
 {
  SC$1.$cctor();
  return SC$1.allLanguages;
 };
 Helpers.allVersions=function()
 {
  SC$1.$cctor();
  return SC$1.allVersions;
 };
 Helpers.csVersions=function()
 {
  SC$1.$cctor();
  return SC$1.csVersions;
 };
 Helpers.WsVersion$1=function(a)
 {
  return a==="v3.x"?{
   $:1,
   $0:"v3.x"
  }:a==="v4.x"?{
   $:1,
   $0:"v4.x"
  }:null;
 };
 Helpers.Language$1=function(a)
 {
  return a==="fs"?{
   $:1,
   $0:"fs"
  }:a==="cs"?{
   $:1,
   $0:"cs"
  }:null;
 };
 Helpers.MiniLoading=function()
 {
  SC$1.$cctor();
  return SC$1.MiniLoading;
 };
 Helpers.Loading=function()
 {
  SC$1.$cctor();
  return SC$1.Loading;
 };
 Helpers.UpgradeDom=Global.ignore;
 Helpers.ShowModal=function(str)
 {
  Global.jQuery(str).addClass("shown");
 };
 Helpers.CloseModal=function(str)
 {
  Global.jQuery(str).removeClass("shown");
  Global.jQuery(str).remove();
 };
 Helpers.ShowSnackbar=function(message,timeout)
 {
  Global.jQuery("#snackbar > .mdl-snackbar__text").text(message);
  Global.jQuery("#snackbar").addClass("mdl-snackbar--active");
  Global.setTimeout(function()
  {
   Global.jQuery("#snackbar").removeClass("mdl-snackbar--active");
  },timeout);
 };
 Helpers.setActiveTocElem=function(root,el)
 {
  Helpers.removeActiveElems(root);
  el.addClass("active");
 };
 Helpers.removeActiveElems=function(root)
 {
  root.find(".table-of-contents .active").removeClass("active");
 };
 Helpers.becomeNanoScroller=function(el)
 {
  Global.jQuery(el).parents(".nano").first().nanoScroller();
 };
 Helpers.urlify=function(urlPart)
 {
  return Strings.Replace(Strings.Replace(urlPart.toLowerCase()," ","_"),"#","-sharp");
 };
 EndPoint.Error404={
  $:14
 };
 EndPoint.PrivacyPolicy={
  $:13
 };
 EndPoint.CookiePolicy={
  $:12
 };
 EndPoint.TermsOfUse={
  $:11
 };
 EndPoint.Extensions={
  $:10
 };
 EndPoint.Videos={
  $:9
 };
 EndPoint.Books={
  $:8
 };
 EndPoint.Home={
  $:0
 };
 Icons.LHS$248$27=function()
 {
  return function()
  {
   self.document.querySelector(".drawer-backdrop").addEventListener("click",function()
   {
    self.document.querySelector(".lhs-drawer").classList.remove("shown");
    return self.document.querySelector(".drawer-backdrop").classList.remove("shown");
   });
  };
 };
 Icons.LHS$243$21=function()
 {
  return function()
  {
   self.document.querySelector(".drawer-backdrop").classList.add("shown");
   self.document.querySelector(".lhs-drawer").classList.add("shown");
  };
 };
 Icons.LHS=function()
 {
  var b,t,p,i;
  return(b=(t=new ProviderBuilder.New$1(),(t.h.push(Handler.EventQ2(t.k,"showlhs",function()
  {
   return t.i;
  },function()
  {
   self.document.querySelector(".drawer-backdrop").classList.add("shown");
   self.document.querySelector(".lhs-drawer").classList.add("shown");
  })),t)),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],test_Templates.iconmain(p[0])),b.i=i,i))).get_Doc().OnAfterRender(function()
  {
   self.document.querySelector(".drawer-backdrop").addEventListener("click",function()
   {
    self.document.querySelector(".lhs-drawer").classList.remove("shown");
    return self.document.querySelector(".drawer-backdrop").classList.remove("shown");
   });
  });
 };
 ConfigurationPageType.Render={
  $:2
 };
 ConfigurationPageType.Html={
  $:1
 };
 ConfigurationPage=DocHelpers.ConfigurationPage=Runtime.Class({
  get_SourceIsHtml:function()
  {
   return this.Type.$==1||Strings.EndsWith(this.Source.toLowerCase(),".html");
  },
  get_SourceIsMarkdown:function()
  {
   return this.Type.$==0||Strings.EndsWith(this.Source.toLowerCase(),".md");
  }
 },null,ConfigurationPage);
 ConfigurationPage.New=function(Key,Title,Source,Commenting,Description,Type,SectionTitle,Language$1,TryWsUrl,GhUrl,Route)
 {
  return new ConfigurationPage({
   Key:Key,
   Title:Title,
   Source:Source,
   Commenting:Commenting,
   Description:Description,
   Type:Type,
   SectionTitle:SectionTitle,
   Language:Language$1,
   TryWsUrl:TryWsUrl,
   GhUrl:GhUrl,
   Route:Route
  });
 };
 ConfigurationSection.New=function(Title,Pages$1,Route)
 {
  return{
   Title:Title,
   Pages:Pages$1,
   Route:Route
  };
 };
 Configuration.New=function(Sections,RootPageTitle,HomePage)
 {
  return{
   Sections:Sections,
   RootPageTitle:RootPageTitle,
   HomePage:HomePage
  };
 };
 DocHelpers.InitConfiguration=function(rootPageTitle,homePage)
 {
  return Configuration.New([],rootPageTitle,homePage);
 };
 NodeType.Enum={
  $:6
 };
 NodeType.Interface={
  $:5
 };
 NodeType.Record={
  $:4
 };
 NodeType.Union={
  $:3
 };
 NodeType.Class={
  $:2
 };
 NodeType.Module={
  $:1
 };
 NodeType.Namespace={
  $:0
 };
 NodeType.ToCss=function(t)
 {
  return t!=null&&t.$==1?t.$0.$==1?"comm-icon icon-module":t.$0.$==4?"comm-icon icon-record":t.$0.$==2?"comm-icon icon-class":t.$0.$==5?"comm-icon icon-interface":t.$0.$==3?"comm-icon icon-union":t.$0.$==6?"comm-icon icon-enum":"comm-icon icon-namesp":"comm-icon icon-namesp";
 };
 NodeType.FromString=function(str)
 {
  return str==="namespace"?{
   $:1,
   $0:NodeType.Namespace
  }:str==="module"?{
   $:1,
   $0:NodeType.Module
  }:str==="class"?{
   $:1,
   $0:NodeType.Class
  }:str==="union"?{
   $:1,
   $0:NodeType.Union
  }:str==="record"?{
   $:1,
   $0:NodeType.Record
  }:str==="interface"?{
   $:1,
   $0:NodeType.Interface
  }:str==="enum"?{
   $:1,
   $0:NodeType.Enum
  }:null;
 };
 APINodeData.New=function(Key,Slug,FSlug,Type,IsProxied,Children)
 {
  return{
   Key:Key,
   Slug:Slug,
   FSlug:FSlug,
   Type:Type,
   IsProxied:IsProxied,
   Children:Children
  };
 };
 APIItem.New=function(Key,Slug,FSlug,Type,IsProxied)
 {
  return{
   Key:Key,
   Slug:Slug,
   FSlug:FSlug,
   Type:Type,
   IsProxied:IsProxied
  };
 };
 Search.Child={
  $:2
 };
 Search.Found={
  $:1
 };
 Search.NotFound={
  $:0
 };
 CLIENT.browserPanel$1030$30=function(modal)
 {
  return function()
  {
   modal();
  };
 };
 CLIENT.browserPanel=function(version,language,c,c$1,ep,tree)
 {
  var configs,cw,isMobileResView,isApi,isBooks,isVideos,isExtensions,searchQ,timer,minouthandler,searchQuery,varLanguage,varVersion,vVerLangConfig,sectionsOpen,pagesOpen,treeStorage,b,t,p,i;
  function w()
  {
   return Operators.toInt(self.document.body.clientWidth);
  }
  function closeTree()
  {
   var tree$1,width;
   tree$1=Global.jQuery("#docs .tree");
   width=tree$1.get(0).getBoundingClientRect().width;
   tree$1.animate({
    left:(function($1)
    {
     return function($2)
     {
      return $1($2.toFixed(6)+"px");
     };
    }(Global.id))(-width)
   },400);
  }
  function isMobileRes()
  {
   return Operators.toInt(self.document.body.clientWidth)<=992;
  }
  function home(sections)
  {
   var m;
   return sections.Sections.length==0?null:(m=Arrays.get(sections.Sections,0).Pages,m.$==1?{
    $:1,
    $0:[Helpers.urlify(Arrays.get(sections.Sections,0).Title),Helpers.urlify(m.$0.Title)]
   }:null);
  }
  function isActiveSection(sections,page,sect)
  {
   var $1,m,s,m$1;
   switch(page.$==1?0:page.$==2?0:page.$==3?0:page.$==10?1:2)
   {
    case 0:
     m=home(sections);
     return m!=null&&m.$==1&&(s=m.$0[0],m$1=Arrays.tryFind(function(x)
     {
      return Helpers.urlify(x.Title)===s;
     },sections.Sections),m$1!=null&&m$1.$==1&&m$1.$0.Title===sect);
    case 1:
     return"Extensions"===sect;
    case 2:
     return false;
   }
  }
  function isActivePage(sections,page,sect,pg)
  {
   var $1,m,s,p$1,m$1,o,se;
   return(page.$==1||(page.$==2||page.$==3))&&(m=home(sections),m!=null&&m.$==1&&(s=m.$0[0],(p$1=m.$0[1],(m$1=(o=Arrays.tryFind(function(o$1)
   {
    return o$1!=null;
   },Arrays.map(function(x)
   {
    return Seq.tryFind(function(pa)
    {
     return Helpers.urlify(pa.Title)===p$1&&Helpers.urlify(x.Title)===s;
    },x.Pages);
   },sections.Sections)),o==null?null:o.$0),m$1!=null&&m$1.$==1&&(se=m$1.$0,sect===se.SectionTitle&&pg===se.Title)))));
  }
  function _isFoundWithSearch(a$2,slug)
  {
   return View$1.Map(function(a$3)
   {
    var a$4,slug$1,io,sdf,sdf$1;
    a$4=a$3.toLowerCase();
    slug$1=slug.toLowerCase();
    return CLIENT.matches(slug$1,a$4)&&Strings.Trim(a$4)!==""?(io=slug$1.indexOf(a$4),slug$1===a$4?[Search.Found,a$4]:io===0?(sdf=slug$1.substring(a$4.length),(Strings.EndsWith(a$4,".")?!(sdf.indexOf(".")!=-1):Arrays.filter(function(c$2)
    {
     return c$2===".";
    },Strings.SplitStrings(sdf,[""],0)).length<=1)?[Search.Found,a$4]:[Search.Child,a$4]):io<0?[Search.NotFound,a$4]:(sdf$1=slug$1.substring(io+a$4.length),(Strings.EndsWith(a$4,".")?!(sdf$1.indexOf(".")!=-1):Arrays.filter(function(c$2)
    {
     return c$2===".";
    },Strings.SplitStrings(sdf$1,[""],0)).length<=1)?[Search.Found,a$4]:[Search.Child,a$4])):Strings.Trim(a$4)===""?[Search.Found,a$4]:[Search.NotFound,a$4];
   },a$2);
  }
  function isEq(a$2,b$1)
  {
   var $1,$2;
   while(true)
    {
     $1=a$2;
     $2=b$1;
     if($1.$==1)
     {
      if($2.$==1)
      {
       if(Unchecked.Equals($1.$0,$2.$0))
        {
         a$2=$1.$1;
         b$1=$2.$1;
        }
       else
        return false;
      }
      else
       return false;
     }
     else
      return $2.$==0||true;
    }
  }
  function isActiveApiPage(slug)
  {
   return ep.$==7&&isEq(List.ofArray(Strings.SplitChars(slug,["."],0)),List.ofArray(Strings.SplitChars(ep.$1,["."],0)));
  }
  function _isActiveApiPage(slug)
  {
   var x,$1,slug$1;
   return ep.$==7&&(x=slug==null?null:{
    $:1,
    $0:($1=slug.$0,(slug$1=$1[0],($1[1],isEq(List.ofArray(Strings.SplitChars(slug$1,["."],0)),List.ofArray(Strings.SplitChars(ep.$1,["."],0))))))
   },x==null?false:x.$0);
  }
  function openItemsN(jq)
  {
   var x,e;
   while(true)
    {
     if(jq.length===0)
      {
       x=minouthandler.get_View();
       return(function(a$2)
       {
        return function(a$3)
        {
         View$1.Get(a$2,a$3);
        };
       }(function(moh)
       {
        moh!=null&&moh.$==1?Global.clearTimeout(moh.$0):void 0;
        minouthandler.Set({
         $:1,
         $0:Global.setTimeout(function()
         {
          Helpers.MiniLoading().Set(false);
         },500)
        });
       }))(x);
      }
     else
      {
       e=jq.parent().parent().closest(".section");
       jq.closest(".section").removeClass("hidden");
       e.addClass("open");
       e.removeClass("hidden");
       jq=e;
      }
    }
  }
  function jopenItemsN(jq)
  {
   var e;
   while(true)
    if(jq.length===0)
     return null;
    else
     {
      e=jq.parent().parent().closest(".section");
      e.addClass("open");
      jq=e;
     }
  }
  function unhideItemsN(jq)
  {
   var x,e;
   while(true)
    {
     if(jq.length===0)
      {
       x=minouthandler.get_View();
       return(function(a$2)
       {
        return function(a$3)
        {
         View$1.Get(a$2,a$3);
        };
       }(function(moh)
       {
        moh!=null&&moh.$==1?Global.clearTimeout(moh.$0):void 0;
        minouthandler.Set({
         $:1,
         $0:Global.setTimeout(function()
         {
          Helpers.MiniLoading().Set(false);
         },500)
        });
       }))(x);
      }
     else
      {
       e=jq.parent().parent().closest(".section");
       jq.closest(".section").removeClass("hidden");
       e.removeClass("hidden");
       jq=e;
      }
    }
  }
  function renderApiTree(searchQue,tree$1)
  {
   var nodeval,iconclass,shouldBeVisible,m,$1,t$1,iap,m$1,$2,e,iap$1,m$2,$3,items;
   function a$2(el,t$2)
   {
    var sq,jqe,e$1,e$2;
    sq=t$2[1];
    jqe=Global.jQuery(el);
    return t$2[0].$===1&&Strings.Trim(sq)!==""?(e$1=jqe.parent().closest(".section"),(jqe.closest(".section").addClass("open"),e$1.removeClass("hidden"),openItemsN(e$1))):Strings.Trim(sq)===""?(e$2=jqe.parent().closest(".section"),iap?(console.log(jqe),jqe.closest(".section").addClass("open"),jopenItemsN(e$2)):(e$2.removeClass("hidden"),unhideItemsN(e$2))):null;
   }
   function a$3(el,t$2)
   {
    var sq,jqe,e$1;
    sq=t$2[1];
    jqe=Global.jQuery(el);
    return t$2[0].$===1&&Strings.Trim(sq)!==""?openItemsN(jqe):Strings.Trim(sq)===""?(e$1=jqe.parent().closest(".section"),iap$1?(console.log(jqe),jopenItemsN(jqe)):unhideItemsN(e$1)):null;
   }
   return tree$1.$==0?(nodeval=tree$1.$0,(iconclass=NodeType.ToCss(nodeval.Type),(shouldBeVisible=_isFoundWithSearch(searchQue,nodeval.Slug),(m=nodeval.Children,!Unchecked.Equals(m,null)&&m.length===0||!Unchecked.Equals(m,null)&&m.length===1&&(Arrays.get(m,0).$==1&&(t$1=Arrays.get(m,0).$0,!Unchecked.Equals(t$1,null)&&t$1.length===0))?(iap=isActiveApiPage(nodeval.Slug),[Doc.Element("li",[AttrModule.Class("tree-leaf"),AttrModule.DynamicClassPred("hidden",View$1.Map(function($4)
   {
    return $4[0].$==0;
   },shouldBeVisible))],[Doc.Element("a",[(m$1=nodeval.IsProxied,m$1!=null&&m$1.$==1&&(!m$1.$0&&($2=m$1.$0,true))?AttrModule.Class("not-proxied"):Attrs.EmptyAttr()),AttrModule.Class("a-like"),AttrModule.ClassPred("active",_isActiveApiPage(nodeval.FSlug)),AttrModule.Handler("click",function()
   {
    return function(ev)
    {
     var m$3;
     ev.stopPropagation();
     m$3=nodeval.FSlug;
     return m$3!=null&&m$3.$==1?void(self.document.location.href=(((Runtime.Curried3(function($4,$5,$6)
     {
      return $4(Utils.toSafe($5)+"/api/"+Utils.toSafe($6));
     }))(Global.id))(self.document.location.origin))(m$3.$0[0])):null;
    };
   }),AttrModule.DynamicCustom(function($4)
   {
    return function($5)
    {
     return a$2($4,$5);
    };
   },shouldBeVisible)],[Doc.Element("span",[AttrModule.Class(iconclass)],[]),Doc.TextNode(nodeval.Key)])])]):(e=Arrays.collect(Global.id,Arrays.map(function(k)
   {
    return renderApiTree(searchQue,k);
   },nodeval.Children)),(iap$1=isActiveApiPage(nodeval.Slug),[Doc.Element("li",[AttrModule.Class("section")],[Doc.Element("a",[(m$2=nodeval.IsProxied,m$2!=null&&m$2.$==1&&(!m$2.$0&&($3=m$2.$0,true))?AttrModule.Class("not-proxied"):Attrs.EmptyAttr()),AttrModule.Class("a-like"),AttrModule.ClassPred("active",iap$1),AttrModule.Handler("click",function(e$1)
   {
    return function(ev)
    {
     var jqe,m$3;
     ev.stopPropagation();
     jqe=Global.jQuery(e$1);
     return jqe.parent().hasClass("open")?jqe.parent().removeClass("open"):(m$3=nodeval.FSlug,m$3!=null&&m$3.$==1?(jqe.parent().addClass("open"),!iap$1?void(self.document.location.href=(((Runtime.Curried3(function($4,$5,$6)
     {
      return $4(Utils.toSafe($5)+"/api/"+Utils.toSafe($6));
     }))(Global.id))(self.document.location.origin))(m$3.$0[0])):null):jqe.parent().addClass("open"));
    };
   }),AttrModule.DynamicCustom(function($4)
   {
    return function($5)
    {
     return a$3($4,$5);
    };
   },shouldBeVisible)],[Doc.Element("span",[AttrModule.Class(iconclass)],[]),Doc.TextNode(nodeval.Key)]),Doc.Element("ul",[AttrModule.Class("indented-item")],[Doc.Concat(e)])])])))))):(items=tree$1.$0,Arrays.length(items)===0?[]:Arrays.map(function(it)
   {
    var m$3,$4;
    return Doc.Element("span",[(m$3=it.IsProxied,m$3!=null&&m$3.$==1&&(!m$3.$0&&($4=m$3.$0,true))?AttrModule.Class("item-node not-proxied"):AttrModule.Class("item-node")),AttrModule.Handler("click",function()
    {
     return function(ev)
     {
      var m$4;
      ev.stopPropagation();
      m$4=it.FSlug;
      return m$4!=null&&m$4.$==1?void(self.document.location.href=(((Runtime.Curried3(function($5,$6,$7)
      {
       return $5(Utils.toSafe($6)+"/api/"+Utils.toSafe($7));
      }))(Global.id))(self.document.location.origin))(m$4.$0[0])):null;
     };
    }),AttrModule.ClassPred("active",isActiveApiPage(it.Slug))],[Doc.Element("span",[AttrModule.Class(NodeType.ToCss(it.Type))],[]),Doc.TextNode(it.Key)]);
   },items));
  }
  function toc(sect,pg,currentRoute)
  {
   var _toc,htmlToc;
   function showItems(depth,items)
   {
    return depth===0?List.T.Empty:List.map(function(a$2)
    {
     var e,a$3,el,aAttrsAndChildren,title,id,children;
     function e$1()
     {
      return Doc.Element("li",[AttrModule.Class("toc-node")],[Doc.Element("a",[AttrProxy.Create("role","heading-"+Global.String(id)),(Lazy.Force(a$3))[0]],[Doc.TextNode(JSHelpers.Trim(title,"#"))]),(Lazy.Force(a$3))[1]]);
     }
     function a$4()
     {
      return children.$==0?[AttrModule.Class("no-children"),Doc.get_Empty()]:[AttrModule.Handler("click",function()
      {
       return function()
       {
        var el$1;
        el$1=Global.jQuery(Lazy.Force(e).elt);
        return el$1.hasClass("open")?el$1.removeClass("open"):(Global.jQuery(".toc-node").removeClass("open"),el$1.addClass("open"));
       };
      }),Doc.Element("ul",[],children)];
     }
     title=a$2.$1;
     id=a$2.$0;
     children=showItems(depth-1,a$2.$2);
     e=Lazy.Create(e$1);
     a$3=Lazy.Create(a$4);
     el=Lazy.Force(e);
     aAttrsAndChildren=Lazy.Force(a$3);
     return el;
    },items);
   }
   _toc=Doc.Element("ul",[AttrModule.Class("table-of-contents")],showItems(2,pg.Toc));
   htmlToc=Doc.Element("div",[AttrModule.OnAfterRender(function(el)
   {
    Global.jQuery(el).find("a").each(function(a$2,el$1)
    {
     return Global.jQuery(el$1).click(function(ev)
     {
      ev.preventDefault();
      ev.stopPropagation();
      self.document.location.hash=this.attributes.getNamedItem("role").value;
     });
    });
    Global.jQuery(el).find("#table-of-contents").removeAttr("id").addClass("table-of-contents");
   })],[_toc]);
   return Doc.Element("div",[AttrModule.OnAfterRender(function(el)
   {
    Helpers.becomeNanoScroller(el);
   }),AttrModule.DynamicCustom(function(el)
   {
    return function(t$1)
    {
     var h,root,$1;
     h=t$1[2];
     root=Global.jQuery("#docs .tree");
     return h!=null&&h.$==1&&(t$1[0]===sect.Title&&t$1[1]===pg.Title&&($1=h.$0,true))?Helpers.setActiveTocElem(root,Global.jQuery(el).find("#"+$1).parent("li")):h==null?Helpers.removeActiveElems(root):null;
    };
   },currentRoute)],[htmlToc]);
  }
  function extractPage(sections)
  {
   var k,m,o,p$1;
   home(sections);
   return ep.$==3?(k=ep.$2,(m=(o=Arrays.tryFind(function(o$1)
   {
    return o$1!=null;
   },Arrays.map(function(x)
   {
    return Seq.tryFind(function(p$2)
    {
     return p$2.Key===k;
    },x.Pages);
   },sections.Sections)),o==null?null:o.$0),m!=null&&m.$==1?(p$1=m.$0,[p$1.SectionTitle,p$1.Title,null]):["","",null])):["","",null];
  }
  function modal()
  {
   var innerVarLang,innerVarVersion,_,b$1,B,_this,O,_this$1,C,_this$2,p$1,i$1;
   function buttonGen(ws,l)
   {
    return Doc.Element("button",[AttrModule.Class("button version-selector-button"),AttrModule.DynamicClassPred("active-version",View$1.Map2(function($1,$2)
    {
     return Unchecked.Equals($1,ws)&&Unchecked.Equals($2,l);
    },innerVarVersion.get_View(),innerVarLang.get_View())),AttrModule.Handler("click",function()
    {
     return function()
     {
      innerVarLang.Set(l);
      return innerVarVersion.Set(ws);
     };
    })],[Doc.TextNode((((Runtime.Curried3(function($1,$2,$3)
    {
     return $1(Utils.toSafe($2)+" - "+Utils.toSafe($3));
    }))(Global.id))(WsVersion.PrettyString(ws)))(Language.PrettyString(l)))]);
   }
   innerVarLang=Var$1.Create$1(varLanguage.Get());
   innerVarVersion=Var$1.Create$1(varVersion.Get());
   _=(b$1=(B=Doc.Element("div",[AttrModule.Class("version-button-holder")],List.map(function($1)
   {
    return buttonGen($1[0],$1[1]);
   },List.ofArray([["v3.x","fs"],["v4.x","fs"],["v4.x","cs"]]))),(_this=(O=AttrModule.Handler("click",function()
   {
    return function()
    {
     var versionString,langString;
     versionString=Global.String(innerVarVersion.Get());
     langString=Global.String(innerVarLang.Get());
     self.document.location.href=self.document.location.origin+"/docs/"+versionString+"/"+langString;
     return Helpers.CloseModal("#versionModal");
    };
   }),(_this$1=(C=AttrModule.Handler("click",function()
   {
    return function()
    {
     return Helpers.CloseModal("#versionModal");
    };
   }),(_this$2=new ProviderBuilder.New$1(),(_this$2.h.push({
    $:3,
    $0:"close",
    $1:C
   }),_this$2))),(_this$1.h.push({
    $:3,
    $0:"ok",
    $1:O
   }),_this$1))),(_this.h.push({
    $:0,
    $0:"buttons",
    $1:B
   }),_this))),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],test_Templates.versionselector(p$1[0])),b$1.i=i$1,i$1))).get_Doc();
   Templates.LoadLocalTemplates("");
   Doc.RunAfterById("pageBody",_);
   Helpers.ShowModal("#versionModal");
  }
  function a(k1,a$2,a$3)
  {
   return function(t$1)
   {
    return Unchecked.Equals(k1,t$1[0]);
   };
  }
  function a$1(a$2,sections,model)
  {
   var d,openTree,apiBody,tree$1,f,$1;
   d=Doc.Concat(Arrays.map(function(section)
   {
    var sOpen;
    function a$3(s,nv)
    {
     return[s,nv];
    }
    sectionsOpen.Append([section.UrlPart,isActiveSection(sections,ep,section.Title)]);
    sOpen=sectionsOpen.LensInto(function(t$1)
    {
     return t$1[1];
    },function($2,$3)
    {
     return(function($4)
     {
      var $5;
      $5=$4[0];
      return function($6)
      {
       return a$3($5,$6);
      };
     }($2))($3);
    },section.UrlPart);
    return Doc.Element("li",[AttrModule.Class("section"),section.UrlPart==="extensions"?AttrModule.DynamicClassPred("active",View$1.Map(function($2)
    {
     return $2||isActiveSection(sections,ep,section.Title);
    },isExtensions.get_View())):AttrModule.ClassPred("active",isActiveSection(sections,ep,section.Title)),AttrModule.DynamicClassPred("open",sOpen.get_View()),AttrModule.Handler("click",function()
    {
     return function(ev)
     {
      ev.stopPropagation();
      return sOpen.Set(!sOpen.Get());
     };
    })],[Doc.Element("span",[],[Doc.TextNode(section.Title)]),Doc.Element("ul",[],List.ofSeq(Seq.delay(function()
    {
     return Seq.collect(function(page)
     {
      var pOpen,isvis,$2;
      function a$4(s,nv)
      {
       return[s,nv];
      }
      pagesOpen.Append([page.Key,isActivePage(sections,ep,section.Title,page.Title)]);
      pOpen=pagesOpen.LensInto(function(t$1)
      {
       return t$1[1];
      },function($3,$4)
      {
       return(function($5)
       {
        var $6;
        $6=$5[0];
        return function($7)
        {
         return a$4($6,$7);
        };
       }($3))($4);
      },page.Key);
      isvis=CLIENT.vMatches(page.Title,searchQuery.get_View());
      return Seq.append(ep.$==3&&(page.Key===ep.$2&&($2=ep.$2,true))?(pOpen.Set(true),[]):[],Seq.delay(function()
      {
       function a$5(el,t$1)
       {
        var sq;
        sq=t$1[1];
        return t$1[0]&&Strings.Trim(sq)!==""?(Global.jQuery(el).removeClass("hidden"),Global.jQuery(el).parent().parent().addClass("open").removeClass("hidden")):Strings.Trim(sq)===""?isActivePage(sections,ep,section.Title,page.Title)?(Global.jQuery(el).addClass("open"),Global.jQuery(el).parent().parent().addClass("open")):(Global.jQuery(el).removeClass("hidden"),Global.jQuery(el).parent().parent().removeClass("hidden"),!Global.jQuery(el).hasClass("active")?Global.jQuery(el).removeClass("open"):void 0,!Global.jQuery(el).parent().parent().hasClass("active")?Global.jQuery(el).parent().parent().removeClass("open"):null):null;
       }
       return[Doc.Element("li",[AttrModule.Class("page"),AttrModule.ClassPred("active",isActivePage(sections,ep,section.Title,page.Title)),AttrModule.DynamicClassPred("open",pOpen.get_View()),AttrModule.DynamicCustom(function($3)
       {
        return function($4)
        {
         return a$5($3,$4);
        };
       },isvis)],[Doc.Element("a",[AttrModule.Class("a-like"),AttrModule.Handler("click",function()
       {
        return function(ev)
        {
         ev.stopPropagation();
         return ep.$==3?ep.$2===page.Key?pOpen.Set(!pOpen.Get()):void(self.document.location.href=self.document.location.origin+"/docs/"+Global.String(ep.$0)+"/"+Global.String(ep.$1)+"/"+page.Key):void(self.document.location.href=self.document.location.origin+"/docs/"+Global.String(version)+"/"+Global.String(language)+"/"+page.Key);
        };
       })],[Doc.TextNode(page.Title)]),Doc.BindView(function(o)
       {
        return o?toc(section,page,View$1.Const(extractPage(configs[0]))):Doc.Element("span",[AttrProxy.Create("style","display: none"),AttrModule.OnAfterRender(function(e)
        {
         Helpers.becomeNanoScroller(e);
        })],[]);
       },pOpen.get_View())])];
      }));
     },section.Pages);
    })))]);
   },model));
   openTree=Var$1.Create$1(false);
   apiBody=(tree$1=treeStorage["var"].get_View(),Doc.Element("ul",[AttrModule.Class("indented-item"),AttrProxy.Create("id","api-ul")],[Doc.Convert((f=($1=searchQuery.get_View(),function($2)
   {
    return renderApiTree($1,$2);
   }),function(x)
   {
    return Doc.Concat(f(x));
   }),tree$1)]));
   View$1.Get(function(isap)
   {
    Var$1.Set(openTree,isap);
   },isApi.get_View());
   return Doc.Concat(List.ofArray([d,Arrays.exists(function(s)
   {
    return s.UrlPart==="extensions";
   },model)?Doc.get_Empty():Doc.Element("li",[AttrModule.Class("section c-section"),AttrModule.DynamicClassPred("active",isExtensions.get_View()),AttrModule.DynamicClassPred("hidden",View$1.Map(function($2)
   {
    return!CLIENT.matches("Extensions",$2);
   },searchQuery.get_View())),AttrProxy.Create("href","/extensions")],[Doc.Element("span",[AttrModule.Class("section-title")],[Doc.TextNode("Extensions")])]),Doc.Element("li",[AttrModule.Class("section c-section"),AttrModule.DynamicClassPred("active",isBooks.get_View()),AttrModule.DynamicClassPred("hidden",View$1.Map(function($2)
   {
    return!CLIENT.matches("Books",$2);
   },searchQuery.get_View())),AttrProxy.Create("href","/books")],[Doc.Element("span",[AttrModule.Class("section-title")],[Doc.TextNode("Books")])]),Doc.Element("li",[AttrModule.Class("section c-section"),AttrModule.DynamicClassPred("active",isVideos.get_View()),AttrModule.DynamicClassPred("hidden",View$1.Map(function($2)
   {
    return!CLIENT.matches("Videos",$2);
   },searchQuery.get_View())),AttrProxy.Create("href","/videos")],[Doc.Element("span",[AttrModule.Class("section-title")],[Doc.TextNode("Videos")])]),Doc.Element("li",[AttrModule.Class("section"),AttrModule.DynamicClassPred("active",isApi.get_View()),AttrModule.Handler("click",function(el)
   {
    return function(ev)
    {
     ev.stopPropagation();
     return Global.jQuery(el).toggleClass("open");
    };
   })],[Doc.Element("span",[AttrModule.Class("section-title")],[Doc.TextNode("API")]),apiBody])]));
  }
  configs=[c,c$1];
  isMobileResView=View$1.Map(function(x)
  {
   return x<=992;
  },(cw=Var$1.Create$1(w()),(self.addEventListener("resize",function()
  {
   return cw.Set(w());
  },false),cw.get_View())));
  isApi=Var$1.Create$1(self.location.href.indexOf("/api/")!=-1);
  isBooks=Var$1.Create$1(Strings.EndsWith(self.location.href,"/books"));
  isVideos=Var$1.Create$1(Strings.EndsWith(self.location.href,"/videos"));
  isExtensions=Var$1.Create$1(Strings.EndsWith(self.location.href,"/extensions"));
  Var$1.Create$1(false);
  searchQ=Var$1.Create$1("");
  timer=Var$1.Create$1(null);
  minouthandler=Var$1.Create$1(null);
  searchQuery=Var$1.Create$1("");
  varLanguage=Var$1.Create$1(language);
  varVersion=Var$1.Create$1(version);
  vVerLangConfig=View$1.Map(function(vl)
  {
   return[vl,configs[0],configs[1]];
  },View.Zip(varVersion.get_View(),varLanguage.get_View()));
  sectionsOpen=ListModel.Create(function($1)
  {
   return Global.id($1[0],$1[1]);
  },List.T.Empty);
  pagesOpen=ListModel.Create(function($1)
  {
   return Global.id($1[0],$1[1]);
  },List.T.Empty);
  treeStorage=ListModel.CreateWithStorage(function(a$2)
  {
   return a$2.$==1?"":a$2.$0.Key;
  },Storage.LocalStorage("api-tree-storage-"+Global.String(version),Serializer.Default()));
  treeStorage.AppendMany(tree);
  return Doc.Element("div",List.ofSeq(Seq.delay(function()
  {
   return Seq.append([AttrProxy.Create("class","tree nano")],Seq.delay(function()
   {
    return Seq.append(isMobileRes()?[AttrProxy.Create("style","visibility: hidden")]:[],Seq.delay(function()
    {
     return Seq.append([AttrModule.OnAfterRender(function(el)
     {
      var tree$1,width;
      if(isMobileRes())
       {
        tree$1=Global.jQuery(el);
        width=tree$1.get(0).getBoundingClientRect().width;
        tree$1.css("left",(function($1)
        {
         return function($2)
         {
          return $1($2.toFixed(6)+"px");
         };
        }(Global.id))(-width)).css("visibility","visible");
        tree$1.addClass("mobile-scroller");
       }
     })],Seq.delay(function()
     {
      return[AttrModule.Handler("resize",function(el)
      {
       return function()
       {
        var tree$1,width;
        tree$1=Global.jQuery(el);
        return isMobileRes()?(width=tree$1.get(0).getBoundingClientRect().width,(tree$1.css("left",(function($1)
        {
         return function($2)
         {
          return $1($2.toFixed(6)+"px");
         };
        }(Global.id))(-width)).css("visibility","visible"),tree$1.addClass("mobile-scroller"))):tree$1.css("left","0");
       };
      })];
     }));
    }));
   }));
  })),[Doc.Element("div",[AttrModule.Class("search-holder")],[Doc.Input([AttrProxy.Create("placeholder","Search..."),AttrProxy.Create("class","search-query"),AttrModule.HandlerView("keyup",searchQ.get_View(),Runtime.Curried3(function($1,$2,sq)
  {
   var t$1;
   View$1.Get(function(a$2)
   {
    if(a$2!=null&&a$2.$==1)
     Global.clearTimeout(a$2.$0);
   },timer.get_View());
   return Strings.Trim(sq).length>2?View$1.Get(function(osq)
   {
    if(osq===sq)
     ;
    else
     timer.Set({
      $:1,
      $0:Global.setTimeout(function()
      {
       Helpers.MiniLoading().Set(true);
       Global.jQuery("#customtree").find(".section").removeClass("open");
       Global.jQuery("#customtree").find(".section").addClass("hidden");
       Global.jQuery("#customtree").find(".page").addClass("hidden");
       searchQuery.Set(sq);
       View$1.Get(function(a$2)
       {
        if(a$2!=null&&a$2.$==1)
         Global.clearTimeout(a$2.$0);
       },minouthandler.get_View());
       minouthandler.Set({
        $:1,
        $0:Global.setTimeout(function()
        {
         Helpers.MiniLoading().Set(false);
        },600)
       });
      },500)
     });
   },searchQuery.get_View()):(Global.jQuery("#customtree").find(".section").removeClass("open"),searchQuery.Set((t$1=searchQuery.Get(),t$1===""?t$1:"")));
  }))],searchQ),(b=(t=new ProviderBuilder.New$1(),(t.h.push(Handler.EventQ2(t.k,"getmodal",function()
  {
   return t.i;
  },function()
  {
   modal();
  })),t)),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],test_Templates.categoryselector(p[0])),b.i=i,i))).get_Doc()]),Doc.Element("div",[AttrModule.Class("white-bg")],[Doc.BindView(function(ml)
  {
   return ml?Doc.Element("div",[AttrModule.Class("mdl-progress mdl-js-progress mdl-progress__indeterminate"),AttrModule.OnAfterRender(function()
   {
    Mdl.UpgradeDom();
   })],[]):Doc.get_Empty();
  },Helpers.MiniLoading().get_View())]),Doc.Element("div",[AttrProxy.Create("class","nano-content"),AttrProxy.Create("id","customtree")],[CLIENT.renderWhen(isMobileResView,Doc.Element("i",[AttrModule.Class("fa fa-chevron-left close-toc"),AttrModule.Handler("click",function(el)
  {
   return function()
   {
    Global.jQuery(el).parent(".tree").toggleClass("open-scroller");
    return closeTree();
   };
  })],[])),Doc.Element("ul",[],[Doc.EmbedView(View$1.MapCachedBy(function($1,$2)
  {
   return(function($3)
   {
    return a($3[0],$3[1],$3[2]);
   }($1))($2);
  },function($1)
  {
   return a$1($1[0],$1[1],$1[2]);
  },vVerLangConfig))])])]);
 };
 CLIENT.vMatches=function(title,query)
 {
  return View$1.Map(function(q)
  {
   return[CLIENT.matches(title,q),q];
  },query);
 };
 CLIENT.matches=function(title,query)
 {
  var m;
  m=Strings.Trim(query);
  return m===""||title.toLowerCase().indexOf(m.toLowerCase())!=-1;
 };
 CLIENT.renderWhen=function(cond,doc)
 {
  return Doc.BindView(function(a)
  {
   return a?doc:Doc.get_Empty();
  },cond);
 };
 CLIENT.AfterRender=function()
 {
  return Doc.Element("div",[AttrModule.OnAfterRender(function(el)
  {
   Helpers.becomeNanoScroller(el);
  })],[]);
 };
 DocsClient.AfterRender=function(url,red,redsUrl)
 {
  return Doc.Element("div",[AttrModule.OnAfterRender(function(el)
  {
   var htmlDom,imageSources,internalLinks,externalOuterLink,externalLinks,externalLinksWithHash;
   htmlDom=Global.jQuery(el.parentElement);
   htmlDom.find("h1:not(:first-child), h2:not(:first-child), h3:not(:first-child), h4:not(:first-child), h5:not(:first-child), h6:not(:first-child)").each(function($1,$2)
   {
    $2.id="heading-"+Global.String($1+1);
   });
   imageSources=htmlDom.find("img[src*='images']");
   internalLinks=htmlDom.find("a[href^='#']");
   htmlDom.find("a[href^='/api/']");
   externalOuterLink=htmlDom.find("a[href$='.md']").filter("a[href^='http']");
   externalLinks=htmlDom.find("a[href$='.md']").filter(":not(a[href^='http'])");
   externalLinksWithHash=htmlDom.find("a[href*='.md#']").filter(":not(a[href^='http'])");
   imageSources.each(function($1,$2)
   {
    var jel;
    jel=Global.jQuery($2);
    jel.attr("src",Strings.Substring(url,0,url.lastIndexOf("/"))+"/"+jel.attr("src"));
   });
   internalLinks.attr("href",function($1,$2)
   {
    return"#"+$2.substring(1);
   }).removeAttr("target");
   externalOuterLink.each(function($1,eltp)
   {
    var m;
    m=red.TryFind(Strings.Replace(Global.jQuery(eltp).attr("href"),"/blob",""));
    if(m!=null&&m.$==1)
     Global.jQuery(eltp).attr("href",m.$0);
   });
   externalLinks.each(function($1,eltp)
   {
    var url$1,replaceBase,m;
    url$1=Global.jQuery(eltp).attr("href");
    replaceBase=url$1.substring(url$1.lastIndexOf("/"));
    m=red.TryFind(replaceBase);
    if(m!=null&&m.$==1)
     Global.jQuery(eltp).attr("href",Strings.Replace(url$1,replaceBase,m.$0));
   });
   externalLinksWithHash.each(function($1,eltp)
   {
    var url$1,replaceBase,m;
    url$1=Global.jQuery(eltp).attr("href");
    replaceBase=Arrays.get(Strings.SplitChars(url$1.substring(url$1.lastIndexOf("/")),["#"],0),0);
    m=red.TryFind(replaceBase);
    if(m!=null&&m.$==1)
     Global.jQuery(eltp).attr("href",Strings.Replace(url$1,replaceBase,m.$0));
   });
   Helpers.becomeNanoScroller(el);
  })],[]);
 };
 ApiClient.UrlReplacer$1853$32=function()
 {
  return function(el)
  {
   Global.jQuery(el.parentElement).find("a").each(function(a,b)
   {
    var q,q$1,o,o$1,a$1,t,ot;
    q=Strings.SplitChars(Global.jQuery(b).attr("href"),[":"],0);
    q$1=(o=(o$1=q.length>1?{
     $:1,
     $0:Strings.Replace(Strings.Replace(Arrays.get(q,1),"_","."),"..","._")
    }:null,o$1==null?null:{
     $:1,
     $0:List.ofArray(Strings.SplitChars(o$1.$0,["."],0))
    }),o==null?null:{
     $:1,
     $0:(a$1=o.$0,a$1.$==1?a$1.$1.$==0?List.ofArray([a$1.$0]):(t=List.last(a$1),Number.isNaN(Number.parseInt(t))?a$1:List.append(List.ofSeq(Seq.truncate(List.length(a$1)-2,a$1)),List.ofArray([Seq.nth(List.length(a$1)-2,a$1)+"`"+t]))):List.T.Empty)
    });
    return q$1!=null&&q$1.$==1?(ot=Strings.concat(".",q$1.$0),Global.jQuery(b).attr("href",ot)):null;
   });
   Helpers.becomeNanoScroller(el);
  };
 };
 ApiClient.UrlReplacer=function()
 {
  return Doc.Element("div",[AttrProxy.OnAfterRenderImpl(function(el)
  {
   Global.jQuery(el.parentElement).find("a").each(function(a,b)
   {
    var q,q$1,o,o$1,a$1,t,ot;
    q=Strings.SplitChars(Global.jQuery(b).attr("href"),[":"],0);
    q$1=(o=(o$1=q.length>1?{
     $:1,
     $0:Strings.Replace(Strings.Replace(Arrays.get(q,1),"_","."),"..","._")
    }:null,o$1==null?null:{
     $:1,
     $0:List.ofArray(Strings.SplitChars(o$1.$0,["."],0))
    }),o==null?null:{
     $:1,
     $0:(a$1=o.$0,a$1.$==1?a$1.$1.$==0?List.ofArray([a$1.$0]):(t=List.last(a$1),Number.isNaN(Number.parseInt(t))?a$1:List.append(List.ofSeq(Seq.truncate(List.length(a$1)-2,a$1)),List.ofArray([Seq.nth(List.length(a$1)-2,a$1)+"`"+t]))):List.T.Empty)
    });
    return q$1!=null&&q$1.$==1?(ot=Strings.concat(".",q$1.$0),Global.jQuery(b).attr("href",ot)):null;
   });
   Helpers.becomeNanoScroller(el);
  })],[]);
 };
 Pages.DocsPage$1827$34=function(p,reds,redsUrl)
 {
  return DocsClient.AfterRender(p.Source,reds,redsUrl);
 };
 Pages.treeBody$1652$18=function(confSet,v,l,ep,tree)
 {
  return CLIENT.browserPanel(v,l,confSet[0],confSet[1],ep,tree);
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.Loading=Var$1.Create$1(false);
  SC$1.MiniLoading=Var$1.Create$1(false);
  SC$1.csVersions=List.ofArray(["v4.x"]);
  SC$1.allVersions=List.append(Helpers.csVersions(),List.ofArray(["v3.x"]));
  SC$1.allLanguages=List.ofArray(["fs","cs"]);
  SC$1.v3xLanguages=List.ofArray(["fs"]);
 };
 test_Templates.iconmain=function(h)
 {
  return h?Templates.GetOrLoadTemplate("main",{
   $:1,
   $0:"iconmain"
  },function()
  {
   return DomUtility.ParseHTMLIntoFakeRoot("<div class=\"c-d-button\" ws-onclick=\"ShowLHS\">\r\n                        <i class=\"fa fa-bars\"></i>\r\n                    </div>");
  },h):Templates.PrepareTemplate("main",{
   $:1,
   $0:"iconmain"
  },function()
  {
   return DomUtility.ParseHTMLIntoFakeRoot("<div class=\"c-d-button\" ws-onclick=\"ShowLHS\">\r\n                        <i class=\"fa fa-bars\"></i>\r\n                    </div>");
  });
 };
 test_Templates.versionselector=function(h)
 {
  return h?Templates.GetOrLoadTemplate("sidebartemplate",{
   $:1,
   $0:"versionselector"
  },function()
  {
   return DomUtility.ParseHTMLIntoFakeRoot("<div id=\"versionModal\" class=\"modal fade\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">Select version</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div ws-replace=\"Buttons\"></div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button class=\"button is-info\" ws-attr=\"Ok\">Ok</button>\r\n            <button class=\"button is-info\" ws-attr=\"Close\">Close</button>\r\n        </div>\r\n    </div>\r\n</div>");
  },h):Templates.PrepareTemplate("sidebartemplate",{
   $:1,
   $0:"versionselector"
  },function()
  {
   return DomUtility.ParseHTMLIntoFakeRoot("<div id=\"versionModal\" class=\"modal fade\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">Select version</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div ws-replace=\"Buttons\"></div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button class=\"button is-info\" ws-attr=\"Ok\">Ok</button>\r\n            <button class=\"button is-info\" ws-attr=\"Close\">Close</button>\r\n        </div>\r\n    </div>\r\n</div>");
  });
 };
 test_Templates.categoryselector=function(h)
 {
  return h?Templates.GetOrLoadTemplate("sidebartemplate",{
   $:1,
   $0:"categoryselector"
  },function()
  {
   return DomUtility.ParseHTMLIntoFakeRoot("<div>\r\n    <button class=\"button\" ws-onclick=\"GetModal\">\r\n        <span class=\"icon is-small\">\r\n            <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\r\n        </span>\r\n    </button>\r\n</div>");
  },h):Templates.PrepareTemplate("sidebartemplate",{
   $:1,
   $0:"categoryselector"
  },function()
  {
   return DomUtility.ParseHTMLIntoFakeRoot("<div>\r\n    <button class=\"button\" ws-onclick=\"GetModal\">\r\n        <span class=\"icon is-small\">\r\n            <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\r\n        </span>\r\n    </button>\r\n</div>");
  });
 };
}(self));
