(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55e7550f"],{"4bbc":function(e,t,s){e.exports=s.p+"img/Kayode.c859a545.png"},5261:function(e,t,s){"use strict";var n=s("f4e8"),o=s.n(n);o.a},"54af":function(e,t,s){e.exports=s.p+"img/Kolapo.c0ee9343.png"},"5de6":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scholarships-wrap"},[n("b-row",{staticClass:"top-text"},[n("h3",{staticClass:"top-text-heading"},[e._v("\n            Team\n        ")]),n("p",{staticClass:"sub-text"},[e._v("\n            Instructors and mentors for the Stutern Graduate Accelerator are experts and leaders in their respective fields working with leading companies around the world.\n        ")])]),n("b-row",{staticClass:"sets"},[n("b-col",{attrs:{sm:"12"}},[n("p",{staticClass:"set"},[e._v("\n                Instructors and mentors\n            ")])]),n("b-col",{staticClass:"content-holder",attrs:{sm:"12"}},[n("b-row",e._l(e.instructors,function(t,o){return n("b-col",{key:o,attrs:{sm:"3"}},[n("div",{staticClass:"card-wrap"},[n("div",{staticClass:"card-inner-wrapper",staticStyle:{width:"100%","white-space":"initial"}},[n("div",{staticClass:"card"},[n("img",{staticClass:"imgg",attrs:{src:s("905e")("./"+t.photo),alt:""}}),n("div",{staticClass:"user-details"},[n("p",{staticClass:"name"},[e._v("\n                                    "+e._s(t.name)+" \n                                    ")]),n("p",{staticClass:"job-title"},[e._v("\n                                    "+e._s(t.title)+"\n                                    ")])])])])])])}),1)],1)],1)],1)},o=[],r=(s("55dd"),s("cebc")),i=(s("cadf"),s("551c"),s("097d"),s("2f62")),a={data:function(){return{reducedSets:{},v1:"scroll-wrapper",v2:"scroll-wrapper2",instructors:[{name:"Silm Momoh",photo:"Slim.jpg",title:"Product Designer"},{name:"Uche Ugo",photo:"Uche.jpg",title:"Product Designer"},{name:"Gabriel Esu",photo:"Gabriel.jpg",title:"Product Designer"},{name:"Kolapo Oni",photo:"Kolapo.png",title:"Creative Developer"},{name:"Joseph Rex",photo:"Rex.jpg",title:"Software/Web application developer"},{name:"Bomanaziba Josiah",photo:"Boma.png",title:"Product Designer"},{name:"Olukayode",photo:"Kayode.png",title:"Web developer"},{name:"Adebanjo Segun",photo:"Segun.png",title:"Web developer"},{name:"Folorunsho Tosin",photo:"Tosin.png",title:"Web Designer"}]}},computed:Object(r["a"])({},Object(i["b"])({sets:"getSets",students:"getStudents"})),methods:{toScholarship:function(){this.$router.push({name:"ScholarshipChild",params:{scholarshipName:"girlsInTech"}})},toLeft:function(e){var t=this.$refs[e][0];t.scrollLeft=t.scrollWidth-t.clientWidth},toRight:function(e){var t=this.$refs[e][0];t.scrollLeft=0},toSingle:function(e){this.$router.push({name:"SingleHire",params:{userId:e._id}})},log:function(){var e=this.$refs["scroll-wrapper"];e.scrollLeft=e.scrollWidth-e.clientWidth}},mounted:function(){this.reducedSets=this.students.reduce(function(e,t){return e[t.userSet]=e[t.userSet]?e[t.userSet].concat(t):[t],e},{});for(var e=0;e<this.sets.length;e++)this.reducedSets[this.sets[e].setName].sort(function(e,t){return e.userName>t.userName?1:e.userName<t.userName?-1:0})}},c=a,p=(s("5261"),s("2877")),l=Object(p["a"])(c,n,o,!1,null,"40981f96",null);l.options.__file="Team.vue";t["default"]=l.exports},"6d24":function(e,t,s){e.exports=s.p+"img/Tosin.d80711e4.png"},"77e4":function(e,t,s){e.exports=s.p+"img/Slim.1236719d.jpg"},"890e":function(e,t,s){e.exports=s.p+"img/Rex.69cc0ae9.jpg"},"905e":function(e,t,s){var n={"./Boma.png":"e1b0","./Gabriel.jpg":"df0a","./Kayode.png":"4bbc","./Kolapo.png":"54af","./Rex.jpg":"890e","./Segun.png":"dff5","./Slim.jpg":"77e4","./Tosin.png":"6d24","./Uche.jpg":"a7ee"};function o(e){var t=r(e);return s(t)}function r(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id="905e"},a7ee:function(e,t,s){e.exports=s.p+"img/Uche.30501974.jpg"},df0a:function(e,t,s){e.exports=s.p+"img/Gabriel.ab9a69e1.jpg"},dff5:function(e,t,s){e.exports=s.p+"img/Segun.38e7ea7c.png"},e1b0:function(e,t,s){e.exports=s.p+"img/Boma.22e595e2.png"},f4e8:function(e,t,s){}}]);
//# sourceMappingURL=chunk-55e7550f.e0adece4.js.map