(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{672:function(s,t,l){"use strict";l.r(t);var e=l(21),v=Object(e.a)({},(function(){var s=this,t=s.$createElement,l=s._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[l("p",[s._v("mysql商用是否需要购买版权的理解：")]),s._v(" "),l("p",[s._v("1、首先理解一下GPL协议，就是开源协议，意思是GPL软件发布给别人时必须同时发布源代码，而且获得源代码的人可以自由的更改并且传播你的源代码，但是他更改的也同样要遵守GPL。注意，GPL是你在发布软件给别人的时候会生效，单纯自己用没关系的。比如说自己搭建网站，网站项目代码不给别人就没关系。")]),s._v(" "),l("p",[s._v("那么你修改过的GPL软件可以卖钱吗？当然可以，你可以付费下载，卖光盘，但是卖了之后人家也可以自由复制传播，你卖的是下载服务，光盘费用，而且别人买了之后可以随便传播人家可能就不买你的软件了。（自己的理解不知道对不对）")]),s._v(" "),l("p",[s._v("2、mysql由两种版权，一个是GPL版的，另一个是商用版的。GPL版的是说你用了（连接了）mysql就必须把你的软件开放源代码，把你的源代码变成GPL型。商用版的是说你用了mysql但是不想把你的代码变成GPL型，那就要购买商业版的mysql版权。")]),s._v(" "),l("p",[s._v("3、如何才能既使用mysql又不把自己的软件变成GPL型的呢？有两种办法。")]),s._v(" "),l("p",[s._v("​        一是你的采用hibernate或者类似的方式访问数据库（貌似PHP和JAVA就是这样的）。hibernate是一种数据库访问规范，可以访问大部分的数据库。在你卖自己的软件时，你不提供mysql安装包，告诉用户可以访问随便一种数据库，然后推荐他使用mysql，这样你就不用购买mysql的商业版权也不会让你的代码传染GPL了。")]),s._v(" "),l("p",[s._v("​       二是将你的软件分成两部分，A部分用来访问mysql，剩下的部分称之为B，B和A互相通信。这样A是GPL型的，B是你的软件产品，B不带GPL，跟mysql也没关系。这个A就是中间层保护，注意A和B要在不同进程中，二者通过通信连接，比如socket、读写文件等，不要发生代码上的关系。")]),s._v(" "),l("p",[s._v("4、什么样的连接是会传染GPL呢？")]),s._v(" "),l("p",[s._v("据说是这样的：C语言中包含了动态链接库或者静态链接的就会传染。PHP和JAVA貌似它本来就会提供一个中间层，不会被传染。")])])}),[],!1,null,null,null);t.default=v.exports}}]);