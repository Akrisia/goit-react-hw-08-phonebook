"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[815],{3815:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a={},r="ContactForm_form__dhl+T",s="ContactForm_input__Bl93P",c="ContactForm_button__eSwX9",i=n(9434),o=n(4827),u=n(3329);function l(){var e=(0,i.I0)();return(0,u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.currentTarget,a={name:n.elements.name.value,number:n.elements.number.value};e((0,o.uK)(a)),n.reset()},className:r,children:[(0,u.jsxs)("label",{className:s,children:["Name",(0,u.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{className:s,children:["Number",(0,u.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{type:"submit",className:c,children:"Add contact"})]})}var m="Filter_filter__vxThR",d="Filter_input__N7T3z",h=function(e){return e.contacts.filter},_=function(e){var t=function(e){return e.contacts.items}(e),n=h(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},f=n(6400),p=function(){var e=(0,i.v9)(h),t=(0,i.I0)();return(0,u.jsxs)("label",{className:m,children:["Find contacts by name",(0,u.jsx)("input",{className:d,type:"text",name:"filter",value:e,onChange:function(e){return t((0,f.a)(e.target.value))}})]})},b="ContactList_list__csErn",x="ContactList_item__EZYHO",j="ContactList_button__7kL4l",v=n(2791),C=function(){var e=(0,i.v9)(_),t=(0,i.I0)();(0,v.useEffect)((function(){t((0,o.K2)())}),[t]);return(0,u.jsx)(u.Fragment,{children:e.length>0&&(0,u.jsx)("ul",{className:b,children:e.map((function(e){var n=e.name,a=e.number,r=e.id;return(0,u.jsxs)("li",{className:x,children:[n,": ",a,(0,u.jsx)("button",{type:"button",className:j,id:r,onClick:function(){return function(e){return t((0,o.GK)(e))}(r)},children:"Delete"})]},r)}))})})};function N(){return(0,u.jsxs)("div",{className:a.container,children:[(0,u.jsx)("h1",{children:"Phonebook"}),(0,u.jsx)(l,{}),(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(p,{}),(0,u.jsx)(C,{})]})}}}]);
//# sourceMappingURL=815.3ff0506b.chunk.js.map