(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{535:function(s,n,a){"use strict";a.r(n);var t=a(16),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[s._v("#")]),s._v(" get")]),s._v(" "),a("p",[s._v("下面的url是django的语法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("        // 注意then和catch中用的箭头函数 => ,该用法中this指向在编译时确定，因此可以正常使用。\n        axios({\n                method: 'get',\n                url: \"{% url 'hist_prod_data' %}\",\n                params: {\n                    p1 : 1,\n                    p2 : 'bbb'\n                }\n            })\n        .then(res=> {\n                console.log(res)\n            })\n        .catch(error=> {\n                console.log('get err: ', error)\n            });\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h4",{attrs:{id:"post"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[s._v("#")]),s._v(" post")]),s._v(" "),a("p",[s._v("注意axios中，params是添加到请求头中的数据，data是post主体的数据。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("        // 注意then和catch中用的箭头函数 => ,该用法中this指向在编译时确定，因此可以正常使用。\n        axios({\n                method: 'post',\n                url: \"{% url 'hist_prod_data' %}\",\n                params: {\n                    p1 : 1,\n                    p2 : 'bbb',\n                    csrfmiddlewaretoken: '{{ csrf_token }}'\n                },\n                data: {\n                    data1: 'ccc'\n                }\n            })\n        .then(res=> {\n                console.log(res)\n            })\n        .catch(error=> {\n                console.log('get err: ', error)\n            });\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);