(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{270:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(40),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("blog").only(["title","description","date","slug"]).sortBy("date","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{posts:n});case 5:case"end":return e.stop()}}),e)})))()}}),c=r(13),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex"},t._l(t.posts,(function(e){return r("div",{key:Math.random(),staticClass:"blog-post-card p-8 m-8 w-96 border-2 border-blue-700 shadow-lg cursor-pointer"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:e.slug}}}},[r("p",{staticClass:"text-3xl"},[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"text-base"},[t._v(t._s(e.description))])])],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);