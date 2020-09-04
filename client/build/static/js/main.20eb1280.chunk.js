(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{20:function(e,t,n){e.exports=n(44)},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c),o=function(){return r.a.createElement("h2",null,"Expense Tracker")},u=n(3),s=n.n(u),i=n(7),p=n(5),m=n(19),d=n(2),E=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(d.a)(Object(d.a)({},e),{},{transactions:t.payload});case"DELETE_TRANSACTION":return Object(d.a)(Object(d.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(d.a)(Object(d.a)({},e),{},{transactions:[].concat(Object(m.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:t.payload});default:return e}},f=n(8),v=n.n(f),b={transactions:[],error:null},O=Object(a.createContext)(b),h=function(e){var t=e.children,n=Object(a.useReducer)(E,b),c=Object(p.a)(n,2),l=c[0],o=c[1];function u(){return(u=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("api/v1/transactions");case 3:t=e.sent,o({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(){return(m=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("/api/v1/transactions/".concat(t));case 3:o({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function d(){return(d=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,v.a.post("/api/v1/transactions",t,n);case 4:a=e.sent,o({type:"ADD_TRANSACTION",payload:a.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return r.a.createElement(O.Provider,{value:{transactions:l.transactions,error:l.error,getTransactions:function(){return u.apply(this,arguments)},deleteTransaction:function(e){return m.apply(this,arguments)},addTransaction:function(e){return d.apply(this,arguments)}}},t)},T=function(){var e=Object(a.useContext)(O).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"$",e))},x=function(){var e=Object(a.useContext)(O).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"+",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"-",n)))},y=function(e){var t=e.transaction,n=Object(a.useContext)(O).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null," ",c,"$",Math.abs(t.amount)),r.a.createElement("button",{className:"delete-btn",onClick:function(){return n(t._id)}},"x"))},N=function(){var e=Object(a.useContext)(O),t=e.transactions,n=e.getTransactions;return Object(a.useEffect)((function(){n()}),[]),r.a.createElement("div",null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{id:"list",className:"list"},t.map((function(e){return r.a.createElement(y,{key:e.id,transaction:e})}))))},j=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),o=Object(p.a)(l,2),u=o[0],s=o[1],i=Object(a.useContext)(O).addTransaction;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+u};i(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:u,onChange:function(e){return s(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};n(43);var A=function(){return r.a.createElement(h,null,r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(T,null),r.a.createElement(x,null),r.a.createElement(N,null),r.a.createElement(j,null)))};l.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.20eb1280.chunk.js.map