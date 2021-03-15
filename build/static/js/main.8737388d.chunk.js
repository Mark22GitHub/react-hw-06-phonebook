(this["webpackJsonpreact-hw-02-feedback"]=this["webpackJsonpreact-hw-02-feedback"]||[]).push([[0],{11:function(t,e,n){t.exports={filter:"Filter_filter__35l_Z",input:"Filter_input__2CEsa"}},19:function(t,e,n){},2:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1I-Eb",addContact:"ContactForm_addContact__oiTcK",input:"ContactForm_input__3dHde"}},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(12),o=n.n(s),r=(n(19),n(13)),i=n(3),u=n(4),l=n(7),m=n(6),b=n(5),d=n(10),h=n(23),j=n(2),f=n.n(j),p=n(0),C={name:"",number:""},O=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).nameInputId=Object(h.a)(),t.numberInputId=Object(h.a)(),t.state=Object(d.a)({},C),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState(Object(d.a)({},C))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:f.a.contactForm,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(p.jsx)("input",{className:f.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(p.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(p.jsx)("input",{className:f.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(p.jsx)("button",{className:f.a.addContact,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),x=n(8),v=n.n(x),_=function(t){var e=t.contacts,n=t.onDeleteFromContacts;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("ul",{children:e.map((function(t){return Object(p.jsxs)("li",{className:v.a.ContactListItem,children:[Object(p.jsxs)("p",{className:v.a.ContactsListText,children:[t.name,":",t.number]}),Object(p.jsx)("button",{className:v.a.ContactsListButton,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})},g=n(11),F=n.n(g),I=function(t){var e=t.value,n=t.onChange;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("label",{className:F.a.filter,children:["Find contact by name",Object(p.jsx)("input",{className:F.a.input,type:"text",value:e,onChange:n})]})})},y=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,s={id:Object(h.a)(),name:n,number:a};c.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(r.a)(e),[s])}}))},t.deleteFromContacts=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts,a=JSON.stringify(n);n!==e.contacts&&localStorage.setItem("contacts",a)}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(p.jsxs)("div",{style:{width:"300px",margin:"0 auto"},children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(O,{onSubmit:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(I,{value:t,onChange:this.changeFilter}),Object(p.jsx)(_,{contacts:e,onDeleteFromContacts:this.deleteFromContacts})]})}}]),n}(a.Component);n(21);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={ContactListItem:"ContactList_ContactListItem__14o34",ContactsListText:"ContactList_ContactsListText__2_Iht",ContactsListButton:"ContactList_ContactsListButton__2wEPP"}}},[[22,1,2]]]);
//# sourceMappingURL=main.8737388d.chunk.js.map