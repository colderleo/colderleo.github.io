(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{648:function(t,e,n){"use strict";n.r(e);var s=n(21),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("参考："),n("a",{attrs:{href:"https://blog.csdn.net/liuzhi67/article/details/50950843",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/liuzhi67/article/details/50950843"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("++i返回的是左值，i++返回的是右值（临时对象）")]),t._v(" "),n("p",[n("code",[t._v("it++")]),t._v("，先将it自增1，再返回一个复制出来的临时对象it。")]),t._v(" "),n("p",[n("code",[t._v("mapInt.erase(it++)")]),t._v("相当于执行了下面的语句：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("auto temp = it_temp;\nit++;\nmapInt.erase(it_temp);\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[n("code",[t._v("mapInt.erase(it++)")]),t._v("的程序执行过程：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// postfix form: fetch and increment\nmap<int, int>::iterator operator++(int)//通过一个多余的int参数与prefix++区分\n{\n    map<int, int>::iterator tmp = *this; // fetch\n    increment(); // increment，map内部由红黑树实现，此函数负责指向下一个有序元素的iterator\n    return tmp; // return what was\n}\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);