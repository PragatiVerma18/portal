(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(98)),i={id:"code-org",title:"Code Organization"},c={unversionedId:"code-org",id:"code-org",isDocsHomePage:!1,title:"Code Organization",description:"This page will give you a generic overview on Systers Portal project architecture.",source:"@site/docs/code-organization.md",sourceDirName:".",slug:"/code-org",permalink:"/code-org",editUrl:"https://github.com/anitab-org/portal/edit/master/docs/docs/code-organization.md",version:"current",frontMatter:{id:"code-org",title:"Code Organization"},sidebar:"docs",previous:{title:"Coding Standards",permalink:"/coding-standard"},next:{title:"User Authentication",permalink:"/user-auth"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page will give you a generic overview on Systers Portal project architecture.\nAs any other Django project Portal organizes its functionality in several apps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"blog")," - handles showing, adding, editing and deleting news and resources."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"common")," - generic functionality that can't be part of any other app.\nFor example, landing, about, contact pages, generic models, helpers, mixins\nthat are used in several apps."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"community")," - community and subcommunities functionality, like\nadding new communities, views and editing community profiles, showing, adding,\nediting and deleting community pages, managing permissions regarding each\ncommunity."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"membership")," - handles showing, creating, approving and rejecting join\nrequests to a community, removing and inviting users to become members of a\ncommunity."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"users")," - showing and editing user personal profile."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"meetup")," - handles meetup locations and meetup functionality.")),Object(o.b)("p",null,"The templates are placed inside ",Object(o.b)("inlineCode",{parentName:"p"},"systers_portal/templates")," folder organized\nin a folder structure similar to the apps tree. Respectively the templates\nlocation matches the views location."),Object(o.b)("p",null,"Each app along with models, views, urls and other app related code (admin, forms,\nmixins, utils) contains a folder with migrations and tests. The migrations\nare generated by Django and shouldn't be edited manually. The tests folder\nmimics the app modules covering each module with a separate test file. For\nexample, tests for ",Object(o.b)("inlineCode",{parentName:"p"},"app_name/models.py")," are contained in the\n",Object(o.b)("inlineCode",{parentName:"p"},"app_name/tests/test_models.py"),"."))}p.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(g,c(c({ref:t},l),{},{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);