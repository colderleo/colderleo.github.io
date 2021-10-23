(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{599:function(t,a,s){"use strict";s.r(a);var n=s(16),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"各种widget创建时指定其父控件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#各种widget创建时指定其父控件"}},[t._v("#")]),t._v(" 各种widget创建时指定其父控件")]),t._v(" "),s("p",[t._v("主界面是默认创建的，默认命名为Dialog。也可以改名字。")]),t._v(" "),s("h4",{attrs:{id:"普通widget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通widget"}},[t._v("#")]),t._v(" 普通widget")]),t._v(" "),s("p",[t._v("普通widget在创建时，其位于哪个父控件上，就把父控件设为谁。例如在主界面上创建一个下拉框。")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("ComboBox1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" QtWidgets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QComboBox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("该下拉框创建后，可以被layout通过addWidget()方法加入layout中。注意创建时要指定父控件，创建之后再被layout加入。")]),t._v(" "),s("h4",{attrs:{id:"layout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" Layout")]),t._v(" "),s("p",[t._v("对于某个widget，如果要整体应用一个Layout，那么创建该layout时就指定其父控件为该widget。比如创建一个Vertical Layout 并将其应用到主窗口上：")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MainVLayout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" QtWidgets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QVBoxLayout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这里的self.表示把MainVLayout作为类的属性。")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("如果想在一个父layout中包含子layout，那么子layout在创建时"),s("strong",[t._v("不要")]),t._v("指定父控件，父layout用"),s("code",[t._v("addLayout()")]),t._v("将该子layout包含进来。(add的顺序不同，对应显示效果也不一样)。比如上面的MainVLayout，现在向其内部添加一个horizontal layout：")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("innder_HLayout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" QtWidgets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QVBoxLayout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nself"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MainVLayout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addLayout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("innder_HLayout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h4",{attrs:{id:"tabwidget和其内部的单个tab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tabwidget和其内部的单个tab"}},[t._v("#")]),t._v(" TabWidget和其内部的单个tab")]),t._v(" "),s("p",[t._v("TabWidget是可以包含多个tab的控件，这里记为tabs。tabs创建的时候，其位于哪个控件上，就将其父控件设为谁。")]),t._v(" "),s("p",[t._v("tabs可以通过addTab()的方式添加一个tab。首先要创建一个widget作为tab："),s("code",[t._v("tab=QtWidgets.QWidget()")]),t._v(" 注意这个tab"),s("strong",[t._v("不指定")]),t._v("父控件。然后tabs通过addTab()将该tab添加进来。例如：")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("tabs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" QtWidgets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QTabWidget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Dialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定主界面作为tabs的父控件")]),t._v("\ntab1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" QtWidgets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QWidget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#单个tab创建时不指定父控件，由tabs通过addTab()方法添加")]),t._v("\ntab2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" QtWidgets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("QWidget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntabs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addTab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tab1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name_of_tab1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntabs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addTab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tab2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h4",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("位于layout中的子layout创建时不指定父控件")])]),t._v(" "),s("li",[s("p",[t._v("tabs中的单页tab创建时不指定父控件")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);