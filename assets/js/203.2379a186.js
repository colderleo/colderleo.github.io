(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{683:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("https://www.cnblogs.com/nigang/p/3613452.html")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[s._v("CExample 是一个类，定义其拷贝构造函数和赋值运算符：\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("CExample")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" CExample"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" RightSides"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//拷贝构造函数  ")]),s._v("\n\nCExample "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" CExample"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("operator")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" CExample"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" RightSides"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//赋值操作符重载  ")]),s._v("\n\nCExample B"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这时会调用拷贝构造函数。 ")]),s._v("\nCExample B；\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这时会调用默认构造函数 ")]),s._v("\nB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这时会调用赋值运算符")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("拷贝构造函数何时被调用？")]),s._v(" "),a("p",[s._v("a.对象的直接赋值也会调用拷贝构造函数 ；")]),s._v(" "),a("p",[s._v("b.函数参数传递只要是按"),a("em",[s._v("值传递")]),s._v("也调用拷贝构造函数；")]),s._v(" "),a("p",[s._v("c.函数返回只要是按值返回也调用拷贝构造函数。(这里如果编译器开启了返回值优化，则不会调用拷贝构造函数，)")]),s._v(" "),a("p",[a("strong",[s._v("如果不想写拷贝构造函数和赋值函数，又不允许别人使用编译器生成的缺省函数，最简单的办法是将拷贝构造函数和赋值函数声明为私有函数，不用编写代码。")])]),s._v(" "),a("p",[a("strong",[s._v("另外，当使用自定义类作为vector成员时，不能把拷贝构造函数声明为私有。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);