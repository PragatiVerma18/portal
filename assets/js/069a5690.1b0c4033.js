(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(98)),s={id:"user-auth",title:"User Authentication"},i={unversionedId:"user-auth",id:"user-auth",isDocsHomePage:!1,title:"User Authentication",description:"Standard User Model",source:"@site/docs/user-auth.md",sourceDirName:".",slug:"/user-auth",permalink:"/user-auth",editUrl:"https://github.com/anitab-org/portal/edit/master/docs/docs/user-auth.md",version:"current",frontMatter:{id:"user-auth",title:"User Authentication"},sidebar:"docs",previous:{title:"Code Organization",permalink:"/code-org"},next:{title:"Technical Decisions",permalink:"/tech-decisions"}},c=[{value:"How is it done in the Backend of Django?",id:"how-is-it-done-in-the-backend-of-django",children:[]},{value:"The Django-allauth",id:"the-django-allauth",children:[]},{value:"Other Security Features",id:"other-security-features",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Standard User Model"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"What is it?"))),Object(o.b)("p",null,"Fundamentally, the concept of a user account exists for two reasons: access control and personalized application state. Access control is the idea that resources on a system are only available to some users. Personalized state is heavily dependent on the purpose of the application but may include settings, data, or any other records specific to an individual user. The Django stock User model provides sensible approaches to both use cases."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Features"))),Object(o.b)("p",null,"There are two types of users in a Django application: superuser accounts and regular users. Superusers have every attribute and privilege of regular accounts, but also have access to the Django admin panel. Essentially, superusers can create, edit, or delete any data in the application, including other user accounts."),Object(o.b)("h2",{id:"how-is-it-done-in-the-backend-of-django"},"How is it done in the Backend of Django?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Django includes substantial password management middleware with the user model"),Object(o.b)("li",{parentName:"ul"},"User passwords are required to be at least 8 characters, not entirely numbers, not match too closely to the username, and not be on a list of the 20,000 most common passwords."),Object(o.b)("li",{parentName:"ul"},"When a password is sent to the server, it is encrypted before it is stored, by default using the PBKDF2 algorithm with a SHA256 hash.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Imp"))),Object(o.b)("p",null,"If you want to effectively delete a user without removing those attached objects, set the user\u2019s is_active field to false instead, or else the data tied to that user would also be deleted."),Object(o.b)("h2",{id:"the-django-allauth"},"The Django-allauth"),Object(o.b)("p",null,"Django-allauth provides the abstraction which saves us from building things from scratch."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"These are the following features provided by the library which are being used currently in the Project"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Signup of both local and social accounts"),Object(o.b)("li",{parentName:"ul"},"Connecting more than one social account to a local account"),Object(o.b)("li",{parentName:"ul"},"Disconnecting a social account \u2013 requires setting a password if only the local account remains"),Object(o.b)("li",{parentName:"ul"},"Optional instant-signup for social accounts \u2013 no questions asked"),Object(o.b)("li",{parentName:"ul"},"E-mail address management (multiple e-mail addresses, setting a primary)"),Object(o.b)("li",{parentName:"ul"},"Password forgotten flow"),Object(o.b)("li",{parentName:"ul"},"E-mail address verification flow")),Object(o.b)("p",null,"When the Project is locally run, the emails are printed in the console because of the following command"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'\n")),Object(o.b)("h2",{id:"other-security-features"},"Other Security Features"),Object(o.b)("p",null,"SECRET_KEY is needed to be exported for the system to run locally"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"export SECRET_KEY==foobarbazz\n")))}u.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,h=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(h,i(i({ref:t},l),{},{components:n})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);