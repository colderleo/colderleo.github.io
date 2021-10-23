(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{687:function(s,n,t){"use strict";t.r(n);var a=t(16),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("给一个字符串表达式，例如  "),t("code",[s._v('string test1 = "((3+7)*7)-10*(3-2*5)"')]),s._v("\n求值。")]),s._v(" "),t("p",[s._v("别人做的，看样子没问题")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#include <iostream>\n#include <string>\n#include <stack>\n\nusing namespace std;\n\nint calculate(string s)\n{\n    int currentNum = 0;\n    int i = 0;\n    stack<int> st;\n    int res = 0;\n    char op = '+';\n\n    //从左到右依次处理每个字符\n    while(i<s.size())\n    {\n\n        //遇到连续的数字，将其转换为 int 存在 currentNum中\n        if(s[i]>='0' && s[i]<='9')\n        {\n                currentNum *= 10;\n                currentNum += s[i]-'0';\n        }\n\n        //遇到括号，则计算括号内的值(递归调用本函数)\n        else if(s[i]=='(')\n        {\n                int nbra = 0;//左括号比右括号多的个数\n                int j = i;\n                for(; i<s.size(); i++)\n                {\n                        if(s[i]=='(') nbra++;//遇到左括号，则++\n                        if(s[i]==')') nbra--;\n                        if(nbra==0) break;//左右括号包圆了。\n                }\n                currentNum = calculate(s.substr(j+1, i-j-1));//递归调用本函数，计算出括号内的值\n        }\n        \n        //例如 13-15*2   \n        //先计算currentNum=13\n        //然后遇到第一个-，此时op还是初始值+，于是先把currentNum(13) push进栈\n        //再计算currentNum=15\n        //再遇到*，此时op还是-，于是把-15push进栈\n        //再计算currentNum=2\n        //再遇到式子的结尾 i == s.size() - 1， 此时op=*；于是把-15取出来，跟currentNum 2 相乘，乘完再push(-30)进栈\n        //最后栈里面有两个数，一个是13，一个是-30\n\t\tif (s[i] == '+' || s[i] == '-' || s[i] == '*' || s[i] == '/' || i == s.size() - 1)\n\t\t{\n\t\t\tif (op == '+')\n\t\t\t{\n\t\t\t\tst.push(currentNum);\n\t\t\t}\n\t\t\telse if (op == '-')\n\t\t\t{\n\t\t\t\tst.push(-currentNum);\n\t\t\t}\n\t\t\telse if (op == '*')\n\t\t\t{\n\t\t\t\tint temp1 = st.top();\n\t\t\t\tst.pop();\n\t\t\t\tst.push(temp1 * currentNum);\n\t\t\t}\n\t\t\telse if (op == '/')\n\t\t\t{\n\t\t\t\tint temp1 = st.top();\n\t\t\t\tst.pop();\n\t\t\t\tst.push(temp1 / currentNum);\n\t\t\t}\n\t\t\top = s[i];\n\t\t\tcurrentNum = 0;\n\t\t}\n\t\ti++;\n\t}\n\n\t// 把栈中所有的数加起来。\n\twhile (!st.empty())\n\t{\n\t\tres += st.top();\n\t\tst.pop();\n\t}\n\n\treturn res;\n}\n\nint main()\n{\n\tstring test1 = \"((3+7)*7)-10*(3-2*5)\";\n\ttest1 = \"3-5*2\";\n\tint res1 = calculate(test1);\n\tcout << res1 << endl;\n\n\treturn 1;\n}\n\n\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br"),t("span",{staticClass:"line-number"},[s._v("96")]),t("br"),t("span",{staticClass:"line-number"},[s._v("97")]),t("br"),t("span",{staticClass:"line-number"},[s._v("98")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);