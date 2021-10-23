(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{553:function(t,a,e){"use strict";e.r(a);var i=e(16),r=Object(i.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h4",{attrs:{id:"python中的多线程库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python中的多线程库"}},[t._v("#")]),t._v(" Python中的多线程库")]),t._v(" "),e("p",[t._v("https://www.v2ex.com/t/427395\nqTimer 不是多线程，它是把消息定期插入消息队列，消息队列各个消息是串行的。")]),t._v(" "),e("p",[t._v("qTimer主界面线程中如果使用qTimer，并在里面sleep，可以看到界面会卡住。")]),t._v(" "),e("p",[t._v("网上很多人说Pyqt中建议用QThread，可以享受信号槽机制。 https://www.zhihu.com/question/266450799")]),t._v(" "),e("h4",{attrs:{id:"gil详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gil详解"}},[t._v("#")]),t._v(" GIL详解")]),t._v(" "),e("p",[t._v("这篇文章讲的非常棒： https://blog.csdn.net/weixin_41594007/article/details/79485847")]),t._v(" "),e("p",[t._v("python解释器中有一个是CPython，它是应用最广的，其他还有JPython等比较小众。CPython中存在一个大锁，叫global interpreter lock（JPython中没有），它使得多线程的python程序由于这把锁的存在，实际上只是并发，并不能并行。通常多核CPU不同核之间是并行的，可以同时运行，但是python多线程每个线程运行时都要先获取这把锁，才能继续运行。")]),t._v(" "),e("p",[t._v("对于IO密集型的多线程，采用并发的方式可以明显提高效率。但是对于计算密集型，采用多线程并不能利用多核并行计算的优势，效率会很低。 像文中所说，用python创建多线程，在两个核的cpu上跑，两个核的cpu利用率加起来是100%")]),t._v(" "),e("p",[t._v("这篇也可以： https://www.cnblogs.com/SuKiWX/p/8804974.html")]),t._v(" "),e("h4",{attrs:{id:"如何改进gil锁带来的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何改进gil锁带来的问题"}},[t._v("#")]),t._v(" 如何改进GIL锁带来的问题")]),t._v(" "),e("p",[t._v("1.更换cpython为jpython(不建议)")]),t._v(" "),e("p",[t._v("2.使用多进程完成多线程的任务")]),t._v(" "),e("p",[t._v("3.在使用多线程可以使用c语言去实现")]),t._v(" "),e("h4",{attrs:{id:"什么时候会释放gil锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么时候会释放gil锁"}},[t._v("#")]),t._v(" 什么时候会释放Gil锁")]),t._v(" "),e("ul",[e("li",[t._v("遇到像i/o操作这种 会有时间空闲情况 造成cpu闲置的情况会释放Gil")]),t._v(" "),e("li",[t._v("有一个专门ticks进行计数 一旦ticks数值达到100 这个时候释放Gil锁 线程之间开始竞争Gil锁(说明:\nticks这个数值可以进行设置来延长或者缩减获得Gil锁的线程使用cpu的时间)")])]),t._v(" "),e("h4",{attrs:{id:"gil和互斥锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gil和互斥锁"}},[t._v("#")]),t._v(" GIL和互斥锁")]),t._v(" "),e("ul",[e("li",[t._v("Gil锁  : 保证同一时刻只有一个线程能使用到cpu")]),t._v(" "),e("li",[t._v("互斥锁 : 多线程时,保证修改共享数据时有序的修改,不会产生数据修改混乱")])]),t._v(" "),e("p",[t._v("举例：假设只有一个进程,这个进程中有两个线程 Thread1,Thread2, 要修改共享的数据date, 并且有互斥锁，修改数据的机制为：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("(1)多线程运行，假设Thread1获得GIL可以使用cpu，这时Thread1获得 互斥锁lock,Thread1可以改date数据(但并\n没有开始修改数据)")])]),t._v(" "),e("li",[e("p",[t._v("(2)Thread1线程在修改date数据前发生了 i/o操作 或者 ticks计数满100 (注意就是没有运行到修改data数据),这个\n时候 Thread1 让出了Gil,Gil锁可以被竞争")])]),t._v(" "),e("li",[e("p",[t._v("(3) Thread1 和 Thread2 开始竞争 Gil (注意:如果Thread1是因为 i/o 阻塞 让出的Gil Thread2必定拿到Gil,如果\nThread1是因为ticks计数满100让出Gil 这个时候 Thread1 和 Thread2 公平竞争)")])]),t._v(" "),e("li",[e("p",[t._v("(4)假设 Thread2正好获得了GIL, 运行代码去修改共享数据date,由于Thread1有互斥锁lock，所以Thread2无法更改共享数据\ndate,这时Thread2让出Gil锁 , GIL锁再次发生竞争")])]),t._v(" "),e("li",[e("p",[t._v("(5)假设Thread1又抢到GIL，由于其有互斥锁Lock所以其可以继续修改共享数据data,当Thread1修改完数据释放互斥锁lock,\nThread2在获得GIL与lock后才可对data进行修改")])])]),t._v(" "),e("p",[t._v("以上描述了 互斥锁和Gil锁的 一个关系。")])])}),[],!1,null,null,null);a.default=r.exports}}]);