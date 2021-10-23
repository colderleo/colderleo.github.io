(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{479:function(e,t,a){"use strict";a.r(t);var s=a(16),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("https://blog.csdn.net/ariczhou/article/details/48808417")]),e._v(" "),a("p",[e._v("题目：表A中有member_id 和 date 等字段，现在要按 member_id 分组，取分组后date最大的记录。")]),e._v(" "),a("h4",{attrs:{id:"错误方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误方法"}},[e._v("#")]),e._v(" 错误方法：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from table1 group by member_id order by date \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("因为它是分组后取了组内的第一条数据（至于是第一条是哪一条就不一定了），取出来之后再order by date")]),e._v(" "),a("h4",{attrs:{id:"正确方法一-子查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确方法一-子查询"}},[e._v("#")]),e._v(" 正确方法一：子查询")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from (select * from table1 order by date limit 10000000000) t1  group by member_id\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这样就对了。子查询中的limit 10000000000是必须加的， 是因为mysql中某些版本中可能会做优化， 不加的话还是错误的结果。")]),e._v(" "),a("h4",{attrs:{id:"正确方法二-join-可能更高效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确方法二-join-可能更高效"}},[e._v("#")]),e._v(" 正确方法二：join （可能更高效？）")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("select * from `table1` where EXISTS (  \n    select `date` from (  \n        SELECT max(`date`) as id FROM `table1` group by `member_id` limit 10) t   \n    where t.`date`=`table1`.`date`  \n)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);