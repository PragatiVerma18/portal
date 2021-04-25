(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(98)),i={id:"adding-pages",title:"Adding Pages"},c={unversionedId:"adding-pages",id:"adding-pages",isDocsHomePage:!1,title:"Adding Pages",description:"To create a page:",source:"@site/docs/adding-pages.md",sourceDirName:".",slug:"/adding-pages",permalink:"/adding-pages",editUrl:"https://github.com/anitab-org/portal/edit/master/docs/docs/adding-pages.md",version:"current",frontMatter:{id:"adding-pages",title:"Adding Pages"},sidebar:"docs",previous:{title:"Introduction",permalink:"/intro"}},p=[],d={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To create a page:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Simply add a Markdown file ",Object(o.b)("inlineCode",{parentName:"li"},".md")," to ",Object(o.b)("inlineCode",{parentName:"li"},"docs/")),Object(o.b)("li",{parentName:"ul"},"Make sure to add the frontmatter at the top of the page:")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"---\nid: adding-pages\ntitle: Adding Pages\n---\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Finally, to add to the sidebar, add a new entry to ",Object(o.b)("inlineCode",{parentName:"li"},"sidebars.js"),":")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n      type: "doc",\n      id: "adding-pages",\n},\n')),Object(o.b)("p",null,"Here's the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/SanketDG/tinysaurus/commit/f7af055a85d51c26a0175fa23b45c6f58e3a1b5e"},"commit")," that adds this page!"))}l.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||s[b]||o;return n?a.a.createElement(f,c(c({ref:t},d),{},{components:n})):a.a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);