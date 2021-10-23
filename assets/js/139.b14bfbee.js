(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{604:function(s,n,a){"use strict";a.r(n);var e=a(16),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("https://www.cnblogs.com/hanxi/archive/2012/07/25/2608068.html")]),s._v(" "),a("p",[s._v("在A.h中包含B.h")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// A.h\n#include "B.h"\nclass A\n{\n    public:\n        A(B* pB):m_pB(pB) {}\n        void useB();\n    private:\n        B* m_pB;\n};\n\n//A.cpp\n#include "A.h"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("在B.h中就包含不了A.h了。包含了会报错。这时候就在B.h中声明class A; 在B.cpp中包含A.cpp。")]),s._v(" "),a("p",[s._v("在B中只能使用A的引用或者指针，不能包含A的实例。")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//B.h\nclass A;\nclass B\n{\n    public:\n        B(A* pA):m_pA(pA) {}\n        void useA();\n        \n    private:\n        A* m_pA;\n};\n\n//B.cpp\n#include "A.h"\n#include "B.h"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("也可以在A.h中声明class B;  A.cpp中包含B.h")]),s._v(" "),a("p",[s._v("同样在在B.h中声明class A;  B.cpp中包含A.h")]),s._v(" "),a("p",[s._v("A B互不包含对方的实例，只能包含对方的指针或者引用。")])])}),[],!1,null,null,null);n.default=t.exports}}]);