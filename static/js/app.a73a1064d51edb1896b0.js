webpackJsonp([1],[,,,,,function(t,e,s){"use strict";e.a={props:{activateSidebar:{dafault:!1}},name:"app",data:function(){return{sidebarActive:!1,initSidebar:!1}},mounted:function(){this.sidebarActive=this.activateSidebar},methods:{initialiseSidebar:function(){this.initSidebar=!0,this.sidebarActive=!0}}}},function(t,e,s){"use strict";function a(t){return t<=2?1:t<4?2:3}function i(t,e){return 60*e/t}function r(t,e,s){for(var a=0,i=s,n=0;n<i.length;n++)i[n].includes(void 0)&&a++;if(0!==a){var o=Math.floor(Math.random()*s.length),l=Math.floor(Math.random()*e);null===s[o][l]||void 0===s[o][l]?s[o][l]=t.coursename:r(t,e,s)}}function n(t,e,s){for(var i=[],n=Array(5),o=Array(2),l=a(s),c=a(e),u=5*l,d=2*c,v=0,f=0;f<t.length;f++)v+=t[f].priority();for(var m=0;m<n.length;m++)n[m]=Array(l);for(var p=0;p<o.length;p++)o[p]=Array(c);for(var h=0;h<t.length;h++){for(var _=0;_<t[h].occurs(v,u);_++)r(t[h],l,n);for(var b=0;b<t[h].occurs(v,d);b++)r(t[h],c,o)}return n.forEach(function(t){return i.push(t)}),o.forEach(function(t){return i.push(t)}),i}var o=s(25),l=s.n(o),c=s(26),u=s.n(c),d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;l()(this,t),this.coursename=e,this.units=s,this.difficulty=a}return u()(t,[{key:"priority",value:function(){return this.units*this.difficulty}},{key:"occurs",value:function(t,e){return Math.round(this.priority()*e/t)}}]),t}();e.a={data:function(){return{courses:[new d,new d],weekdayHours:"",weekendHours:"",courseform:!0,results:!1,timetable:[],days:["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],duration:{}}},methods:{addCourse:function(){this.courses.push(new d)},deleteCourse:function(t){this.courses.splice(t,1)},computeResults:function(){this.timetable=n(this.courses,this.weekendHours,this.weekdayHours),this.courseform=!1,this.results=!0,this.duration={weekdays:i(a(this.weekdayHours),this.weekdayHours),weekends:i(a(this.weekendHours),this.weekendHours)}},editCourses:function(){this.results=!1,this.courseform=!0}}}},,,,,function(t,e,s){"use strict";e.a={}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(4),i=s(16),r=s(21);a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},,,,function(t,e,s){"use strict";function a(t){s(17)}var i=s(5),r=s(19),n=s(2),o=a,l=n(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e){},,function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark secondary-color fixed-top text-white px-4"},[s("a",{staticClass:"button-collapse text-white",staticStyle:{"font-size":"1.5rem"},attrs:{href:"#","data-activates":"slide-out"},on:{click:t.initialiseSidebar}},[s("i",{staticClass:"fa fa-bars"})]),t._v(" "),t._m(0)]),t._v(" "),t.initSidebar?s("div",{staticClass:"side-nav fixed",class:{"animated slideInLeft":t.sidebarActive,"animated slideOutLeft":!t.sidebarActive},staticStyle:{"background-image":"url('./static/img/bg2.jpg')","background-size":"cover","background-position":"center",color:"#fff"},style:{"-webkit-transform: translateX(0), -ms-transform: translateX(0), transform: translateX(0)":t.sidebarActive},attrs:{id:"slide-out"}},[t._m(1)]):t._e(),t._v(" "),t.sidebarActive?s("div",{attrs:{id:"sidenav-overlay"},on:{click:function(e){t.sidebarActive=!1}}}):t._e()]),t._v(" "),s("main",[s("div",{staticClass:"container mt-5 pt-3"},[s("router-view")],1)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ml-auto"},[s("span",{staticClass:"h5"},[t._v("Enter Courses")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"custom-scrollbar"},[a("li",[a("div",{staticClass:"logo-wrapper waves-light"},[a("a",{staticStyle:{padding:"1rem",display:"flex","align-items":"center"},attrs:{href:"#"}},[a("img",{staticClass:"img-fluid flex-center d-inline",staticStyle:{width:"50px",padding:"0",height:"auto"},attrs:{src:s(20)}}),t._v(" "),a("h2",{staticClass:"d-inline",staticStyle:{padding:"1rem","font-size":"1.6rem","margin-bottom":"0","font-family":"'Roboto Slab'"}},[t._v("STGEN")])])])]),t._v(" "),a("li",[a("ul",{staticClass:"social"},[a("li",[a("a",{staticClass:"icons-sm fb-ic",attrs:{href:"https://www.facebook.com/hellesanmi.santiago"}},[a("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),a("li",[a("a",{staticClass:"icons-sm pin-ic",attrs:{href:"https://github.com/itope84"}},[a("i",{staticClass:"fa fa-github"})])]),t._v(" "),a("li",[a("a",{staticClass:"icons-sm gplus-ic",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-google-plus"})])]),t._v(" "),a("li",[a("a",{staticClass:"icons-sm tw-ic",attrs:{href:"https://twitter.com/aidansantiago97"}},[a("i",{staticClass:"fa fa-twitter"})])])])]),t._v(" "),a("li",{staticClass:"social p-2"},[t._v("\n              STGEN is an app that lets you quickly scaffold a study timetable, given a number of courses with their priority. "),a("br")]),t._v(" "),a("li",{staticClass:"p-2"},[a("b",[t._v("Coming Soon:")]),a("br"),t._v("\n              We will be able to save timetables to view offline or download as pdf\n          ")]),t._v(" "),a("li",{staticClass:"text-center",staticStyle:{position:"absolute",bottom:"2vh"}},[t._v("Built By "),a("a",{staticClass:"text-secondary",attrs:{href:"https://itope84.github.io"}},[t._v("Ilesanmi Temitope Santiago")])])])}],r={render:a,staticRenderFns:i};e.a=r},function(t,e,s){t.exports=s.p+"static/img/stgen-icon-white-512x512.1daa837.png"},function(t,e,s){"use strict";var a=s(4),i=s(22),r=s(23),n=s(41);a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"Home",component:r.a},{path:"/timetable",name:"timetable",component:n.a}]})},,function(t,e,s){"use strict";function a(t){s(24)}var i=s(6),r=s(40),n=s(2),o=a,l=n(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e){},,,,,,,,,,,,,,,,function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-container card p-4"},[t.courseform?s("div",{staticClass:"row animated fadeIn"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"card-body"},[s("div",{attrs:{id:"courseform"}},[s("p",{staticClass:"h4 text-center py-4"},[t._v("Enter Courses")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"md-form col-lg-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.weekdayHours,expression:"weekdayHours"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Hours per weekday",required:""},domProps:{value:t.weekdayHours},on:{input:function(e){e.target.composing||(t.weekdayHours=e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"md-form col-lg-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.weekendHours,expression:"weekendHours"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Hours per weekend",required:""},domProps:{value:t.weekendHours},on:{input:function(e){e.target.composing||(t.weekendHours=e.target.value)}}}),t._v(" "),t._m(1)])]),t._v(" "),s("small",{staticClass:"small d-block"},[t._v("What courses do you want to read")]),t._v(" "),t._l(t.courses,function(e,a){return s("div",{staticClass:"animated fadeIn row lighten-5",class:{purple:a%2==0}},[s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"md-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.coursename,expression:"course.coursename"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Course",required:""},domProps:{value:e.coursename},on:{input:function(s){s.target.composing||t.$set(e,"coursename",s.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"md-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.units,expression:"course.units"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Course Units",required:""},domProps:{value:e.units},on:{input:function(s){s.target.composing||t.$set(e,"units",s.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"md-form"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.difficulty,expression:"course.difficulty"}],staticClass:"form-control",attrs:{required:""},on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"difficulty",s.target.multiple?a:a[0])}}},[s("option",{attrs:{disabled:"",selected:"",value:"null"}},[t._v("Difficulty")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("Easy")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("medium")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("Technical")])])])]),t._v(" "),s("a",{staticClass:"btn btn-elegant p-1",staticStyle:{position:"absolute",right:"5%","font-size":"1.0rem"},on:{click:function(e){t.deleteCourse(a)}}},[s("i",{staticClass:"fa fa-times"})])])}),t._v(" "),s("div",{staticClass:"d-flex flex-wrap text-center py-4 mt-3"},[s("button",{staticClass:"btn btn-primary",attrs:{id:"add"},on:{click:t.addCourse}},[s("i",{staticClass:"fa fa-plus"}),t._v(" New Course")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"submit"},on:{click:function(e){return e.preventDefault(),t.computeResults(e)}}},[t._v("Get Timetable")])])],2)])])]):t._e(),t._v(" "),t.results?s("div",{staticClass:"animated fadeIn"},[s("p",[t._v("Hello, The following study plan has been generated for you based on your request. Make sure to store it...")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("p",[t._v("Each weekday period lasts "),s("span",{staticClass:"text-primary"},[t._v(t._s(t.duration.weekdays))]),t._v(" hours")]),t._v(" "),s("p",[t._v("Each weekend period lasts "),s("span",{staticClass:"text-primary"},[t._v(t._s(t.duration.weekends))]),t._v(" hours")])]),t._v(" "),s("div",{staticClass:"col-md-6 d-flex"},[s("button",{staticClass:"btn btn-primary ml-auto",on:{click:t.editCourses}},[t._v("Edit Courses")])])]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[s("thead",{staticClass:"secondary-color text-white py-2"},[s("tr",[s("th",[t._v("Day")]),t._v(" "),t._l(t.timetable[0],function(e,a){return s("th",[t._v("Period "+t._s(a)+" ")])})],2)]),t._v(" "),s("tbody",t._l(t.timetable,function(e,a){return s("tr",[s("th",{attrs:{scope:"row"}},[t._v(t._s(t.days[a]))]),t._v(" "),t._l(t.timetable[a],function(e,a){return s("td",[t._v(t._s(e))])})],2)}))])])]):t._e()])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("small",{staticClass:"font-weight-light"},[t._v("How Many hours "),s("b",[t._v("per day")]),t._v(" can you read on a weekday (Mon-Fri)")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("small",{staticClass:"font-weight-light"},[t._v("How Many hours "),s("b",[t._v("per day")]),t._v(" can you read on a weekend (Sat-Sun)")])}],r={render:a,staticRenderFns:i};e.a=r},function(t,e,s){"use strict";function a(t){s(42)}var i=s(11),r=s(43),n=s(2),o=a,l=n(i.a,r.a,!1,o,null,null);e.a=l.exports},function(t,e){},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},i=[],r={render:a,staticRenderFns:i};e.a=r}],[12]);
//# sourceMappingURL=app.a73a1064d51edb1896b0.js.map