(this["webpackJsonpproducts-app"]=this["webpackJsonpproducts-app"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"id":0,"name":"Samsung Galaxy S20","price":19999,"image":"1.jpg","description":"Measured diagonally, Galaxy S20 FE 5G\u2019s screen size is 6.5\u201d in the full rectangle and 6.4\u201d with accounting for the rounded corners; Galaxy S20 5G\'s screen size is 6.2\\" in the full rectangle and 6.1\\" with accounting for the rounded corners; Galaxy S20+ 5G\'s screen size is 6.7\\" in the full rectangle and 6.5\\" with accounting for the rounded corners; and Galaxy S20 Ultra 5G\'s screen size is 6.9\\" in the full rectangle and 6.7\\" with accounting for the rounded corners; actual viewable area is less due to the rounded corners and camera hole."},{"id":1,"name":"Apple iPhone 12","price":29999,"image":"2.jpg","description":"The iPhone 12 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. "},{"id":2,"name":"Redmi Note 8 Pro","price":6499,"image":"3.jpg","description":"25 times of pixels of the display. Zoom in for more details."},{"id":3,"name":"SAMSUNG Galaxy A51","price":8199,"image":"4.jpg","description":"How many of us are you looking for a smart phone? Great display, low battery, quick performance of the camera? Todi you can make fun of it - you know the most beautiful version of the Samsung Galaxy A51."},{"id":4,"name":"Apple AirPods Pro","price":8299,"image":"5.jpg","description":"Experience the ultimate comfort of using Apple AirPods Pro with Active Noise Cancellation, selectable earbud sizes, and enhanced immersion."},{"id":5,"name":"Samsung VC07T355MVC","price":2999,"image":"6.jpg","description":"Vacuum cleaner, telescopic tube, nozzle holder, crevice nozzle, wide dust nozzle, narrow dust nozzle"},{"id":6,"name":"Lenovo IdeaPad 3 15IIL","price":15299,"image":"7.jpg","description":"With the very best equipment, the new Lenovo IdeaPad 3 15IIL (81WE00Q2RA) Platinum Gray is ready to give you all-round possibilities. It offers a wide variety of uses, ranging from teaching functions, running work applications, to tons of entertainment."},{"id":7,"name":"Dell Vostro 3591","price":16499,"image":"8.jpg","description":"You are viewing: DELL Vostro 3591 15.6-inch Laptop (10th Gen Core i5-1035G1/16GB/512GB SSD/2GB Nvidia MX230/Window 10 + Microsoft Office), BlackYou are viewing: DELL Vostro 3591 15.6-inch\u2026"},{"id":8,"name":"Defunc True Go Slim TWS Red","price":1199,"image":"9.jpg","description":"Defunc True Go Slim - the wings of Sweden, TWS-headphones, with their unique ergonomic power-saving tabs, broken down to the anatomical features of the wooh, as they sound uncomfortable and sound."},{"id":9,"name":"KARCHER NT 65","price":27999,"image":"10.jpg","description":"For the smart minds of industrial tidying up a 2-motor pilot cleaner for dry cleaning"}]')},19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n.n(c),i=n(11),s=n.n(i),o=(n(19),n(5)),u=n(4),l=n(6),p=n(3),d=n(2),m=n.n(d),j=n(12),b=n(10),h=n.n(b),O=n(13),f=n(14),g=function(){var e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11").then((function(e){if(!e.ok)throw Error(a||(a=Object(f.a)([""," - ",""])),e.status,e.statusText);return e.json()})).catch((function(e){return console.warn("Error: ",e)}));case 2:return t=e.sent,n=t.find((function(e){return"USD"===e.ccy})),e.abrupt("return",n?n.buy:"27");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e,t){return(+t/+e).toFixed()},x=function(e,t){var n;return function(){clearTimeout(n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];n=setTimeout.apply(void 0,[e,t].concat(c))}},y=n(0),N=r.a.createContext({products:[],productsList:[],setProductsList:function(){},exchangeRate:"",setExchangeRate:function(){},currency:"",setCurrency:function(){},valueInputFrom:"",setValueInputFrom:function(){},valueInputTo:"",setValueInputTo:function(){},queryFrom:"",setQueryFrom:function(){},applyQueryFrom:function(){},queryTo:"",setQueryTo:function(){},applyQueryTo:function(){},valueRadio:"",setValueRadio:function(){}}),C=function(e){var t=e.children,n=Object(c.useState)(JSON.parse(localStorage.getItem("products"))||j),a=Object(p.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(),u=Object(p.a)(s,2),l=u[0],d=u[1],m=Object(c.useState)("uah"),b=Object(p.a)(m,2),h=b[0],O=b[1],f=Object(c.useState)(""),C=Object(p.a)(f,2),S=C[0],w=C[1],P=Object(c.useState)(""),I=Object(p.a)(P,2),k=I[0],T=I[1],F=Object(c.useCallback)(x(T,1e3),[]),G=Object(c.useState)(""),A=Object(p.a)(G,2),R=A[0],L=A[1],V=Object(c.useState)(""),z=Object(p.a)(V,2),E=z[0],D=z[1],Q=Object(c.useCallback)(x(D,1e3),[]),U=Object(c.useState)(),B=Object(p.a)(U,2),_=B[0],q=B[1];Object(c.useEffect)((function(){g().then(d)}),[]);var M=Object(c.useMemo)((function(){return k||E?"uah"===h&&k&&!E?r.filter((function(e){return+e.price>=+k})):"usd"===h&&k&&!E?r.filter((function(e){return v(l,e.price)>=+k})):"uah"===h&&E&&!k?r.filter((function(e){return+e.price<=+E})):"usd"===h&&E&&!k?r.filter((function(e){return v(l,e.price)<=+E})):"uah"===h&&k&&E?r.filter((function(e){return+e.price<=+E&&+e.price>=+k})):"usd"===h&&k&&E?r.filter((function(e){return v(l,e.price)>=+k&&v(l,e.price)<=+E})):"":r}),[h,k,E,r]),J={products:Object(c.useMemo)((function(){switch(_){case"asc":return Object(o.a)(M).sort((function(e,t){return+e.price-+t.price}));case"desc":return Object(o.a)(M).sort((function(e,t){return+t.price-+e.price}));case"alphabet":return Object(o.a)(M).sort((function(e,t){return e.name.localeCompare(t.name)}));default:return M}}),[_,M,r]),productsList:r,setProductsList:i,exchangeRate:l,setExchangeRate:d,currency:h,setCurrency:O,valueInputFrom:S,setValueInputFrom:w,valueInputTo:R,setValueInputTo:L,queryFrom:k,setQueryFrom:T,applyQueryFrom:F,queryTo:E,setQueryTo:D,applyQueryTo:Q,valueRadio:_,setValueRadio:q};return Object(y.jsx)(N.Provider,{value:J,children:t})},S={id:"",name:"",price:"",image:"",description:""},w={name:[],price:[],description:[],image:[]},P=(n(22),function(){var e=Object(c.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(S),i=Object(p.a)(r,2),s=i[0],d=i[1],j=s.name,b=s.price,h=s.image,O=s.description,f=Object(c.useState)(w),g=Object(p.a)(f,2),v=g[0],x=g[1],C=Object(c.useContext)(N),P=C.productsList,I=C.setProductsList,k=Object(c.useCallback)((function(e,t){var n={name:[],price:[],description:[]};e||n[t].push("Enter a ".concat(t[0].toUpperCase()+t.slice(1)," please!")),(e.length<1||e.length>5)&&"price"===t&&e&&n[t].push("".concat(t[0].toUpperCase()+t.slice(1)," must contain from 1 to 5 characters!")),+e<1&&"price"===t&&e&&n[t].push("".concat(t[0].toUpperCase()+t.slice(1)," must be more than 1!")),(e.length<5||e.length>40)&&"name"===t&&e&&n[t].push("".concat(t[0].toUpperCase()+t.slice(1)," must contain from 5 to 40 characters!")),(e.length>150||e.length<30)&&"description"===t&&e&&n[t].push("".concat(t[0].toUpperCase()+t.slice(1)," must contain from 20 to 150 characters!")),x(Object(l.a)(Object(l.a)({},v),n))}),[v]),T=Object(c.useCallback)((function(e){var t=e.target,n=t.value,a=t.name;d(Object(l.a)(Object(l.a)({},s),{},Object(u.a)({id:P.length},a,n.trimStart()))),k(n,a)}),[s]),F=Object(c.useCallback)((function(e){var t=e.target,n=t.value,a=t.name;k(n,a)}),[k]),G=Object(c.useCallback)((function(){var e;return(Object.values(v).some((function(e){return e.length>0}))||Object.values(s).some((function(e){return""===e})))&&(e=!0),Object.values(s).every((function(e){return""!==e}))&&(e=!1),e}),[v,s,k]),A=Object(c.useCallback)((function(e){e.preventDefault(),Object.values(s).every((function(e){return""===e}))||(localStorage.setItem("products",JSON.stringify([].concat(Object(o.a)(P),[s]))),I([].concat(Object(o.a)(P),[s])),d(S),a(!1))}),[s,P]);return Object(y.jsxs)("div",{className:"NewProduct",children:[Object(y.jsx)("button",{className:m()("NewProduct-Button button-add",{hidden_form:n}),type:"button",onClick:function(){return a(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"}),Object(y.jsx)("div",{className:m()("NewProduct-Product",{hidden_form:!n}),children:Object(y.jsxs)("form",{className:"NewProduct-Form Form",onSubmit:A,children:[Object(y.jsxs)("div",{className:"input-container",children:[Object(y.jsx)("span",{className:"error",children:v.name}),Object(y.jsxs)("label",{className:"Form-Item label",children:["\u0418\u043c\u044f",Object(y.jsx)("input",{type:"text",className:m()("input",{invalid:v.name[0]}),name:"name",placeholder:"Name",value:j,onChange:T,onBlur:F})]})]}),Object(y.jsxs)("div",{className:"input-container",children:[Object(y.jsx)("span",{className:"error",children:v.price}),Object(y.jsxs)("label",{className:"Form-Item label",children:["\u0426\u0435\u043d\u0430",Object(y.jsx)("input",{type:"number",className:m()("input",{invalid:v.price[0]}),name:"price",placeholder:"Price",min:"1",max:"50000",value:b,onChange:T,onBlur:F})]})]}),Object(y.jsxs)("div",{className:"input-container",children:[Object(y.jsx)("span",{className:"error",children:v.description}),Object(y.jsx)("textarea",{className:m()("description Form-Item input",{invalid:v.description[0]}),placeholder:"Description",rows:"5",name:"description",value:O,onChange:T,onBlur:F})]}),Object(y.jsx)("div",{className:"input-container",children:Object(y.jsxs)("div",{className:"Form-Item label",children:["\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",Object(y.jsx)("button",{className:m()("button-image",{button_checked:h}),type:"button",onClick:function(){d(Object(l.a)(Object(l.a)({},s),{},{image:"product.jpg"}))},children:"+"})]})}),Object(y.jsx)("button",{className:"Form-Item NewProduct-Button",type:"submit",disabled:G(),children:"Save"})]})})]})}),I=(n(23),function(){var e=Object(c.useContext)(N),t=e.currency,n=e.setCurrency,a=e.valueInputFrom,r=e.setValueInputFrom,i=e.valueInputTo,s=e.setValueInputTo,o=e.applyQueryTo,u=e.applyQueryFrom,l=e.valueRadio,p=e.setValueRadio;return Object(y.jsxs)("div",{className:"Options",children:[Object(y.jsxs)("div",{className:"Options-Price",children:[Object(y.jsx)("h2",{className:"Options-TitlePrice",children:"\u0426\u0435\u043d\u0430"}),Object(y.jsxs)("div",{className:"Options-InputsPrice",children:[Object(y.jsxs)("label",{className:m()("input-from",{input_active:a}),children:["\u043e\u0442:",Object(y.jsx)("br",{}),Object(y.jsx)("input",{type:"number",className:"input-price",name:"\u043e\u0442",min:"10",max:"100",value:a,onChange:function(e){r(e.target.value),u(e.target.value)}})]}),Object(y.jsxs)("label",{className:m()("input-to",{input_active:i}),children:["\u0434\u043e:",Object(y.jsx)("br",{}),Object(y.jsx)("input",{type:"number",className:"input-price",name:"\u0434\u043e",min:"100",max:"50000",value:i,onChange:function(e){s(e.target.value),o(e.target.value)}})]})]})]}),Object(y.jsxs)("div",{className:"Options-Currency",children:[Object(y.jsx)("h2",{className:"Options-TitleCurrency",children:"\u0412\u0430\u043b\u044e\u0442\u0430"}),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("button",{type:"button",className:m()("button button-usd",{currency_active:"usd"===t}),onClick:function(){return n("usd")},children:"USD"}),Object(y.jsx)("button",{type:"button",className:m()("button button-uah",{currency_active:"uah"===t}),onClick:function(){return n("uah")},children:"UAH"})]})]}),Object(y.jsxs)("div",{className:"Options-Sorting",children:[Object(y.jsx)("h2",{className:"Options-TitleSorting",children:"Co\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),Object(y.jsxs)("div",{className:"container-radio",children:[Object(y.jsxs)("label",{className:"input-asc input-radio",children:[Object(y.jsx)("input",{type:"radio",name:"asc",className:"radio",value:"asc",checked:"asc"===l,onChange:function(e){return p(e.target.value)}}),Object(y.jsx)("span",{className:"option",children:"\u043f\u043e \u0432\u043e\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u0438\u044e \u0446\u0435\u043d\u044b"})]}),Object(y.jsxs)("label",{className:"input-desc input-radio",children:[Object(y.jsx)("input",{type:"radio",name:"desc",className:"radio",value:"desc",checked:"desc"===l,onChange:function(e){return p(e.target.value)}}),Object(y.jsx)("span",{className:"option",children:"\u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e \u0446\u0435\u043d\u044b"})]}),Object(y.jsxs)("label",{className:"input-alphabet input-radio",children:[Object(y.jsx)("input",{type:"radio",name:"alphabet",className:"radio",value:"alphabet",checked:"alphabet"===l,onChange:function(e){return p(e.target.value)}}),Object(y.jsx)("span",{className:"option",children:"\u043f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"})]})]})]})]})}),k=(n(24),function(){var e=Object(c.useContext)(N),t=e.products,n=e.currency,a=e.exchangeRate;return Object(y.jsx)("div",{className:"Products",children:t.map((function(e){var t;return Object(y.jsxs)("div",{className:"Product",children:[Object(y.jsx)("div",{className:m()("photo",(t={},Object(u.a)(t,"photo_".concat(e.id+1),"product.jpg"!==e.image),Object(u.a)(t,"new_photo","product.jpg"===e.image),t))}),Object(y.jsxs)("div",{className:"Product-Content",children:[Object(y.jsx)("h3",{className:"Product-Name",children:e.name}),Object(y.jsxs)("p",{className:"Product-Price",children:["uah"===n?e.price:v(a,e.price),"\xa0",Object(y.jsx)("span",{className:"currency",children:n.toUpperCase()})]}),Object(y.jsx)("p",{className:"Product-Description",children:e.description.slice(0,150)})]})]},e.id)}))})}),T=function(){return Object(y.jsx)(C,{children:Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)("div",{className:"App-Sidebar",children:[Object(y.jsx)(I,{}),Object(y.jsx)(P,{})]}),Object(y.jsx)("div",{className:"App-Content",children:Object(y.jsx)(k,{})})]})})};s.a.render(Object(y.jsx)(T,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.0816984b.chunk.js.map