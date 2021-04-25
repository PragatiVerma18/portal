(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(98)),i={id:"test-the-app",title:"How to Test The Application"},s={unversionedId:"test-the-app",id:"test-the-app",isDocsHomePage:!1,title:"How to Test The Application",description:"The website is served live on this link",source:"@site/docs/Test-The-App.md",sourceDirName:".",slug:"/test-the-app",permalink:"/test-the-app",editUrl:"https://github.com/anitab-org/portal/edit/master/docs/docs/Test-The-App.md",version:"current",frontMatter:{id:"test-the-app",title:"How to Test The Application"},sidebar:"docs",previous:{title:"Commit Message Style Guide",permalink:"/commit-message-style-guide"},next:{title:"Maintainer Guidelines",permalink:"/maintainer-guideline"}},l=[{value:"The website is served live on this link",id:"the-website-is-served-live-on-this-link",children:[]},{value:"To run test cases on the app, run the following command after you setup the portal locally.",id:"to-run-test-cases-on-the-app-run-the-following-command-after-you-setup-the-portal-locally",children:[]},{value:"To check for the PEP8 style guide errors, run the following command",id:"to-check-for-the-pep8-style-guide-errors-run-the-following-command",children:[]}],c={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"the-website-is-served-live-on-this-link"},"The website is served live on ",Object(a.b)("a",{parentName:"h3",href:"http://ec2-54-215-223-241.us-west-1.compute.amazonaws.com/"},"this link")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"to-run-test-cases-on-the-app-run-the-following-command-after-you-setup-the-portal-locally"},"To run test cases on the app, run the following command after you setup the portal locally."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"python systers_portal/manage.py runserver --settings=systers_portal.settings.testing\n")),Object(a.b)("h3",{id:"to-check-for-the-pep8-style-guide-errors-run-the-following-command"},"To check for the PEP8 style guide errors, run the following command"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"flake8 systers_portal\n")))}p.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?o.a.createElement(h,s(s({ref:t},c),{},{components:r})):o.a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);