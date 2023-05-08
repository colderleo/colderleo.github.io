(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{662:function(n,s,a){"use strict";a.r(s);var t=a(21),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/u010323563/article/details/111870855",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://blog.csdn.net/u010323563/article/details/111870855"),a("OutboundLink")],1)]),n._v(" "),a("p",[n._v("自定义类型需要自己实现hash计算和比较相等，用两个functor，在定义的时候穿进去。注意这两个函数定义的时候末尾要加上const。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("#include<thread>\n#include<mutex>\n#include<condition_variable>\n#include<iostream>\n#include<vector>\n#include<map>\n#include<functional>\n#include<unordered_map>\n#include<unordered_set>\n#include<algorithm>\nusing namespace std;\n\nclass X {\npublic:\n\tint a;\n\tint b;\n\tlong long c;\n};\n\nclass XHash{\npublic:\n\tstd::size_t operator() (const X& x1) const{\n\t\treturn x1.a + x1.b + x1.c;\n\t}\n};\n\nclass XEqual{\npublic:\n\tbool operator()(const X& lhs, const X& rhs) const{\n\t\treturn lhs.a==rhs.a;\n\t}\n};\n\nint main() {\n\tX x1;\n\tx1.a=2;\n\tunordered_set<X, XHash, XEqual>xset;\n\txset.insert(x1);\n\tcout<<(*xset.begin()).a;\n\treturn 0;\n}\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);