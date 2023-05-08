(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{722:function(a,s,t){"use strict";t.r(s);var n=t(21),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"单模块中的全局变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单模块中的全局变量"}},[a._v("#")]),a._v(" 单模块中的全局变量")]),a._v(" "),t("ul",[t("li",[a._v("https://www.cnblogs.com/yanfengt/p/6305542.html")]),a._v(" "),t("li",[a._v("https://blog.csdn.net/xcyansun/article/details/79672634")])]),a._v(" "),t("p",[a._v("引用全局变量，不需要golbal声明，修改全局变量，需要使用global声明，特别地，列表、字典等如果只是修改其中元素的值，可以直接使用全局变量，不需要global声明。")]),a._v(" "),t("p",[a._v("如：")]),a._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("fun1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#并不会修改全局变量a，这里a是创建的局部变量")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("fun2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("global")]),a._v(" a\n    a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#会修改全局变量a")]),a._v("\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("h2",{attrs:{id:"多模块中的全局变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多模块中的全局变量"}},[a._v("#")]),a._v(" 多模块中的全局变量")]),a._v(" "),t("ul",[t("li",[a._v("https://www.jianshu.com/p/2ccb7560011e")])]),a._v(" "),t("p",[a._v("要直接import模块名，不能从模块中import变量名。")]),a._v(" "),t("p",[a._v("global_data.py")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("a=3\nb=4\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[t("p",[a._v("如果import globa_data.py，则引用和修改对各个模块都是可见的")])]),a._v(" "),t("li",[t("p",[a._v("如果from global_data.py import a, 则a的值为import时的值，并且后续a的读写都与其他模块无关。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);