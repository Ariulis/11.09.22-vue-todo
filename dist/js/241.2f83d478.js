"use strict";(self["webpackChunkVueToDo"]=self["webpackChunkVueToDo"]||[]).push([[241],{2241:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("The list of tasks")]),t.tasks.length?e("div",{staticClass:"row"},[e("div",{staticClass:"input-field col s6"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],ref:"select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filter=e.target.multiple?s:s[0]}}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Choose the status")]),e("option",{attrs:{value:"active"}},[t._v("Active")]),e("option",{attrs:{value:"outdated"}},[t._v("Outdated")]),e("option",{attrs:{value:"completed"}},[t._v("Completed")])]),e("label",[t._v("Status sorting")]),t.filter?e("button",{staticClass:"btn btn-small blue",attrs:{type:"button"},on:{click:function(e){t.filter=null}}},[t._v(" Clear filter ")]):t._e()])]):t._e(),e("hr"),t.tasks.length?e("div",{staticClass:"table"},[e("table",[t._m(0),e("tbody",t._l(t.tasks,(function(s,a){return e("tr",{key:s.id},[e("td",[t._v(t._s(a+1))]),e("td",[t._v(t._s(s.title))]),e("td",[t._v(t._s(new Date(s.date).toLocaleDateString("ru-RU")))]),e("td",t._l(s.chips,(function(s){return e("div",{key:s.tag},[t._v(t._s(s.tag))])})),0),e("td",{staticClass:"task-description-table"},[e("div",[t._v(t._s(s.description))])]),e("td",[t._v(t._s(s.status))]),e("td",[e("router-link",{attrs:{to:`/update/${s.id}`,custom:""},scopedSlots:t._u([{key:"default",fn:function({href:s,navigate:a}){return[e("a",{staticClass:"btn btn-small",attrs:{href:s},on:{click:a}},[t._v("Update")])]}}],null,!0)})],1),e("td",[e("button",{staticClass:"btn btn-small red",attrs:{type:"button"},on:{click:function(e){t.modal.open(),t.deletingTaskId=s.id}}},[t._v(" Delete ")])])])})),0)])]):e("p",[t._v("There are no tasks yet")]),e("div",{ref:"modal",staticClass:"modal",attrs:{id:"delete-task-modal"}},[t._m(1),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-small",attrs:{type:"button"},on:{click:function(e){return t.deleteTaskModalAction(e)}}},[t._v(" Cancel ")]),e("button",{staticClass:"btn btn-small red",attrs:{type:"button",id:"delete-task-modal-btn"},on:{click:function(e){return t.deleteTaskModalAction(e)}}},[t._v(" Delete ")])])])])},l=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("#")]),e("th",[t._v("Title")]),e("th",[t._v("Date")]),e("th",[t._v("Tags")]),e("th",[t._v("Description")]),e("th",[t._v("Status")]),e("th",[t._v("Update task")]),e("th",[t._v("Delete task")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-content"},[e("h4",[t._v("Delete task")]),e("p",[t._v("Are you sure that you want to delete the task?")])])}],i={metaInfo(){return{title:"The tasks list"}},data:()=>({select:null,filter:null,modal:null,deletingTaskId:null}),computed:{tasks(){return this.$store.getters.tasks.filter((t=>!this.filter||t.status===this.filter))}},methods:{deleteTaskModalAction(t){this.modal.close(),"delete-task-modal-btn"===t.target.id&&this.$store.dispatch("deleteTask",this.deletingTaskId)}},mounted(){this.$nextTick((()=>{this.select=window.M.FormSelect.init(this.$refs.select),this.modal=window.M.Modal.init(this.$refs.modal)}))},destroyed(){this.select&&this.select.destroy&&this.select.destroy(),this.modal&&this.modal.destroy&&this.modal.destroy()}},n=i,o=s(1001),r=(0,o.Z)(n,a,l,!1,null,"3227855f",null),d=r.exports}}]);
//# sourceMappingURL=241.2f83d478.js.map