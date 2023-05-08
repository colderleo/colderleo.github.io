(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{654:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"set和multiset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set和multiset"}},[s._v("#")]),s._v(" set和multiset")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("set内的数据是自动排序的，唯一的。内部结构为红黑树。set中数元素的值不能直接被改变。")])]),s._v(" "),a("li",[a("p",[s._v("set在insert后，原来成员的指针不变。相比之下，vector可能会变(即便是push_back也可能会变)。")])]),s._v(" "),a("li",[a("p",[s._v("multiset就是成员可以重复，其他的跟set差不多。")])])]),s._v(" "),a("p",[s._v("set用法：https://blog.csdn.net/Strawberry_595/article/details/81188509  （这篇文章写得非常棒）")]),s._v(" "),a("h2",{attrs:{id:"速记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#速记"}},[s._v("#")]),s._v(" 速记：")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//引用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<set>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<algorithm>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<iostream>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//初始化")]),s._v("\n\tset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这里也可以换成 multiset")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//set s(op) 以op为排序准则，产生一个空的set/multiset")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//set s1(s2)  产生某个set/multiset的副本，所有元素都被拷贝")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//set s(beg,end) 以区间[beg,end)内的所有元素产生一个set/multiset")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//set s(beg,end, op)  以op为排序准则，区间[beg,end)内的元素产生一个set/multiset")]),s._v("\n\n    \n\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//插入")]),s._v("\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//插入后会自动排序")]),s._v("\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//如果是set，重复插入没得用，还是只有一个5。 如果是multiset，就有两个5")]),s._v("\n\t\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//s.clear()  清空所有元素。")]),s._v("\n        \n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//遍历")]),s._v("\n\tset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("iterator it "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("it "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tcout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("it "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出 3 5 6")]),s._v("\n\t\tit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查看某个元素的出现次数")]),s._v("\n\tcout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5的个数为"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//3在set中出现的次数。如果是set，输出1；如果是multiset，输出2。  如果没有该值，输出0")]),s._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//另外注意 <algorithm中有 lower_bound(iter_begin,iter_end),是二分法查找，需要[iter_begin,iter_end)之间按升序排列。参考 https://www.cnblogs.com/mcgrady_ww/p/7685569.html")]),s._v("\n\tcout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s中大于等于3的最小元素为"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lower_bound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出3")]),s._v("\n\tcout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s中大于3的最小元素为"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("upper_bound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出5  ")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//bool s.empty()\t查看是否为空")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//s.earse(iter)  删除iterator指向的元素")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//s.earse(iter_begin, iter_end)  删除[iter_begin, iter_end) 这个区间的元素，左闭右开。注意这里的iter_begin指向的是s内的元素")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//s.earse(value)  删除某个值")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//it = s.find(value)\t查找某个值，返回指向该值的iter。 如果没找到则返回end()")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//s.insert(iter_begin, iter_end) 插入[iter_begin, iter_end) 这个区间的元素。注意这里的iter_begin指向的是s之外的元素。")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//set<int>::iterator 类型，只能++，不能+1")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br")])]),a("h2",{attrs:{id:"lower-bound-和-upper-bound"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lower-bound-和-upper-bound"}},[s._v("#")]),s._v(" lower_bound 和 upper_bound")]),s._v(" "),a("p",[s._v("https://blog.csdn.net/naipp/article/details/52915573")]),s._v(" "),a("h3",{attrs:{id:"★升序排列的容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#★升序排列的容器"}},[s._v("#")]),s._v(" ★升序排列的容器：")]),s._v(" "),a("p",[s._v("iterator lower_bound( const key_type &key ): 返回一个迭代器，指向键值>= key的第一个元素。 简单记为 lower_begin, 等于该元素或及元素之后的子集的begin()\niterator upper_bound( const key_type &key ):返回一个迭代器，指向键值<=key的最后一个元素的后一个元素。 简单记为 upper_end, 等于该元素及该元素之前的子集的end()")]),s._v(" "),a("h3",{attrs:{id:"★降序排列的容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#★降序排列的容器"}},[s._v("#")]),s._v(" ★降序排列的容器：")]),s._v(" "),a("p",[s._v("iterator lower_bound( const key_type &key ): 返回一个迭代器，指向键值<= key的第一个元素。\niterator upper_bound( const key_type &key ):返回一个迭代器，指向键值>=key的最后一个元素的后一个元素")]),s._v(" "),a("p",[s._v("从前往后排列的一列数， 3 4 5 6 7\nlower_bound(6), 就是6和6后面的所有数的第一个 (6)"),a("br"),s._v("\nupper_bound(6), 就是6和6前面的所有数的最后一个 (6)，再往后一位，7")]),s._v(" "),a("p",[s._v("从前往后排列的一列数， 7  5 4 3\nlower_bound(6), 就是6和6后面的所有数的第一个 (5)\nupper_bound(6), 就是6和6前面的所有数的最后一个 (7)，再往后一位，5")]),s._v(" "),a("p",[s._v("upper_bound 和lower_bound是二分查找，所以效率略高，但笔者在使用的时候发现偶尔会有一些问题，所以写了这篇文章，总结了一发。")]),s._v(" "),a("p",[s._v("首先，最形象的一句话：\nupper_bound（i） 返回的是键值为i的元素可以插入的最后一个位置（上界）\nlowe_bound（i） 返回的是键值为i的元素可以插入的位置的第一个位置（下界）。")]),s._v(" "),a("p",[s._v("怎么理解呢，举例：\n在升序的set里面\nset里没有元素i的时候，两个元素的返回值是一样的。\n1 2 4 5 这个序列，upp（3）和low（3）都返回位置2（下标）")]),s._v(" "),a("p",[s._v("如果只有一个元素i，low返回那个元素的位置，而upp返回那个元素的位置的后一个位置。\n1 2 4 5 这个序列upp（2）返回下标2而low（2）返回下标1")]),s._v(" "),a("p",[s._v("多个元素i，low返回那个元素的位置，upp返回那多个元素中的最后一个的后一个位置。\n1 2 2 4 5 这个序列 upp（2）返回下标3的位置，low（2）返回下标1的位置。")]),s._v(" "),a("p",[s._v("！！！！！！！！！！！！！\n特别注意：举例在一个升序的容器里，如果所有元素都大于i则，upp和low都返回begin。都小于i则返回end（越界了）。")]),s._v(" "),a("p",[s._v("————————————————\n版权声明：本文为CSDN博主「奶瓶他哥」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。\n原文链接：https://blog.csdn.net/naipp/article/details/52915573")]),s._v(" "),a("h2",{attrs:{id:"自定义比较函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义比较函数"}},[s._v("#")]),s._v(" 自定义比较函数")]),s._v(" "),a("p",[s._v("另外，由于set内部是需要排序的。我们可以自定义比较函数；如果插入的元素是结构体，更需要自定义比较函数。")]),s._v(" "),a("p",[s._v("参考 https://blog.csdn.net/qq_33859479/article/details/77572023")]),s._v(" "),a("p",[s._v("参考2：https://blog.csdn.net/y109y/article/details/82901710")]),s._v(" "),a("ul",[a("li",[s._v("如果元素是结构体，可以直接重载 < operator，将比较函数写在结构体内。")])]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Info")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tstring name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//重载“<”操作符，自定义排序规则")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("operator")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Info "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//按score从大到小排列")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("score"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \nset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Info"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Info"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("iterator it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("如果元素不是结构体，又不想或者不能在其内部重载 < operator，那么可以在模板定义的时候（set<type,cmp> s），传进去一个functor，就是仿函数(一个class，在内部重载括号操作符)，作为比较函数。")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("myComp")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("operator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" your_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" your_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("myComp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("myComp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),s._v("iterator it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("这里为什么要重载括号操作符呢？是和set的定义有关系。set定义的时候可以传入三个泛型，第二个就是class Compare （functor 仿函数）。在其内部使用时，Compare(a,b)就调用了括号操作符。这种在class内部重载括号操作符的方式称为"),a("strong",[s._v("functor")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Compare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" less "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Alloc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" alloc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//其中 less<key>定义如下：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("less")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token base-clause"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("binary_function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("operator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);