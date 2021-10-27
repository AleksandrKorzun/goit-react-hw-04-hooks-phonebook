(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={contactsList:"Contacts_contactsList__164cS",formListItem:"Contacts_formListItem__1xraD",text:"Contacts_text__100KC",btn:"Contacts_btn__2IQbU"}},function(t,e,n){t.exports={form:"PhonebookInput_form__3Rwvo",formLabel:"PhonebookInput_formLabel__1kmJo",formInput:"PhonebookInput_formInput__KfFmH",btn:"PhonebookInput_btn__1IcXy"}},,,,,,,function(t,e,n){t.exports={formLabel:"Filter_formLabel__1DpJ4",formInput:"Filter_formInput__dFLUB"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(11),r=n.n(o),s=(n(17),n(12)),i=n(5),l=(n(18),n(22)),u=n(7),m=n(9),b=n(3),f=n.n(b),j=n(0),d=function(t){var e=t.name,n=t.number,a=t.onSubmitContacts,c=t.onChangeInpuntName;return Object(j.jsxs)("form",{className:f.a.form,onSubmit:a,children:[Object(j.jsxs)("label",{className:f.a.formLabel,children:["Name",Object(j.jsx)("input",{className:f.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:c,value:e})]}),Object(j.jsxs)("label",{className:f.a.formLabel,children:["Number",Object(j.jsx)("input",{className:f.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:c,value:n})]}),Object(j.jsx)("button",{type:"submit",className:f.a.btn,children:"ADD contacts"})]})},h=function(t){var e=t.addContacts,n=Object(a.useState)({name:"",number:""}),c=Object(i.a)(n,2),o=c[0],r=c[1],s=o.name,l=o.number;return Object(j.jsx)(d,{name:s,number:l,onChangeInpuntName:function(t){var e=t.target,n=e.name,a=e.value;r((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(u.a)({},n,a))}))},onSubmitContacts:function(t){t.preventDefault(),e(o.name,o.number),r({name:"",number:""})}})},p=n(10),O=n.n(p),x=function(t){var e=t.filter,n=t.onChangeFilter;return Object(j.jsxs)("label",{className:O.a.formLabel,children:["Find contacts by name",Object(j.jsx)("input",{className:O.a.formInput,type:"text",name:"filter",onChange:n,value:e})]})},C=n(2),_=n.n(C),g=function(t){var e=t.filter,n=t.contacts,a=t.onDeleteContact;return e?n.map((function(t){var n=t.name,c=t.number,o=t.id;if(n.toLocaleLowerCase().includes(e.trim().toLocaleLowerCase()))return Object(j.jsxs)("li",{className:_.a.formListItem,children:[Object(j.jsxs)("p",{className:_.a.text,children:[n,": ",c]}),Object(j.jsx)("button",{className:_.a.btn,type:"button",onClick:a,id:o,children:"Delete"})]},o)})):n.map((function(t){var e=t.name,n=t.number,c=t.id;return Object(j.jsxs)("li",{className:_.a.formListItem,children:[Object(j.jsxs)("p",{className:_.a.text,children:[e,": ",n]}),Object(j.jsx)("button",{type:"button",className:_.a.btn,onClick:a,id:c,children:"Delete"})]},c)}))},L=function(t){var e=t.filter,n=t.contacts,a=t.onDeleteContact;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:_.a.contactsList,children:Object(j.jsx)(g,{contacts:n,filter:e,onDeleteContact:a})})})},I=function(){var t=Object(a.useState)(JSON.parse(window.localStorage.getItem("contacts"))||[]),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),r=Object(i.a)(o,2),u=r[0],m=r[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{style:{textAlign:"center"},children:"Phonebook"}),Object(j.jsx)(h,{addContacts:function(t,e){n.some((function(e){return e.name.trim().toLocaleLowerCase()===t.trim().toLocaleLowerCase()}))?alert("".concat(t," is already in contacts")):c((function(n){return[].concat(Object(s.a)(n),[{name:t,number:e,id:Object(l.a)()}])}))}}),Object(j.jsx)("h2",{style:{textAlign:"center"},children:"Contacts"}),Object(j.jsx)(x,{filter:u,onChangeFilter:function(t){var e=t.target.value;m(e)}}),Object(j.jsx)(L,{filter:u,contacts:n,onDeleteContact:function(t){var e=t.target.id;c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.8ff78dc9.chunk.js.map