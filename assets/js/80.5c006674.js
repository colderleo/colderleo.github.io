(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{703:function(t,a,r){"use strict";r.r(a);var e=r(16),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"速记"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#速记"}},[t._v("#")]),t._v(" 速记")]),t._v(" "),r("p",[t._v("设计模式主要分三个类型：创建型、结构型和行为型。")]),t._v(" "),r("p",[t._v("创建型包括：单例模式，工厂模式等；")]),t._v(" "),r("p",[t._v("行为型包括：迭代器模式，观察者模式，策略模式等；")]),t._v(" "),r("p",[t._v("结构性包括： 代理模式，适配器模式等。")]),t._v(" "),r("h2",{attrs:{id:"创建型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建型"}},[t._v("#")]),t._v(" 创建型")]),t._v(" "),r("h4",{attrs:{id:"一、singleton-单例模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、singleton-单例模式"}},[t._v("#")]),t._v(" 一、Singleton，单例模式：")]),t._v(" "),r("p",[t._v("保证一个类只有一个实例，并提供一个访问它的全局访问点")]),t._v(" "),r("p",[t._v("例如数据库的访问。设计一个static getInstance()的接口，以及一个static的成员变量，当调用接口时，判断成员变量否创建。")]),t._v(" "),r("h4",{attrs:{id:"二、factory-method-工厂模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、factory-method-工厂模式"}},[t._v("#")]),t._v(" 二、Factory Method，工厂模式：")]),t._v(" "),r("p",[t._v("定义一个用于创建对象的接口，让子类决定实例化哪一个类，Factory Method使一个类的实例化延迟到了子类。")]),t._v(" "),r("p",[t._v("http://www.imooc.com/article/31360")]),t._v(" "),r("p",[t._v("优点：创建多个产品类时，可以复用代码；业务逻辑变化时方便修改。 缺点：新增产品时需要修改工厂类，而且产品较多时工厂类会比较复杂。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("三、Abstract Factory，抽象工厂：提供一个创建一系列相关或相互依赖对象的接口，而无须指定它们的具体类。")])]),t._v(" "),r("li",[r("p",[t._v("四、Builder，建造模式：将一个复杂对象的构建与他的表示相分离，使得同样的构建过程可以创建不同的表示。")])]),t._v(" "),r("li",[r("p",[t._v("五、Prototype，原型模式：用原型实例指定创建对象的种类，并且通过拷贝这些原型来创建新的对象。")])])]),t._v(" "),r("h2",{attrs:{id:"行为型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#行为型"}},[t._v("#")]),t._v(" 行为型")]),t._v(" "),r("h4",{attrs:{id:"六、iterator-迭代器模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、iterator-迭代器模式"}},[t._v("#")]),t._v(" 六、Iterator，迭代器模式：")]),t._v(" "),r("p",[t._v("提供一个方法顺序访问一个聚合对象的各个元素，而又不需要暴露该对象的内部表示。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("七、Observer，观察者模式：定义对象间一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知自动更新。")])]),t._v(" "),r("li",[r("p",[t._v("八、Template Method，模板方法：定义一个操作中的算法的骨架，而将一些步骤延迟到子类中，TemplateMethod使得子类可以不改变一个算法的结构即可以重定义该算法得某些特定步骤。")])]),t._v(" "),r("li",[r("p",[t._v("九、Command，命令模式：将一个请求封装为一个对象，从而使你可以用不同的请求对客户进行参数化，对请求排队和记录请求日志，以及支持可撤销的操作。")])]),t._v(" "),r("li",[r("p",[t._v("十、State，状态模式：允许对象在其内部状态改变时改变他的行为。对象看起来似乎改变了他的类。")])])]),t._v(" "),r("h4",{attrs:{id:"十一、strategy-策略模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#十一、strategy-策略模式"}},[t._v("#")]),t._v(" 十一、Strategy，策略模式：")]),t._v(" "),r("p",[t._v("它对一系列的算法加以封装，为所有算法定义一个抽象的算法接口，并通过继承该抽象算法接口对所有的算法加以封装和实现，具体的算法选择交由客户端决定")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("十二、China of Responsibility，职责链模式：使多个对象都有机会处理请求，从而避免请求的送发者和接收者之间的耦合关系")])]),t._v(" "),r("li",[r("p",[t._v("十三、Mediator，中介者模式：用一个中介对象封装一些列的对象交互。")])]),t._v(" "),r("li",[r("p",[t._v("十四、Visitor，访问者模式：表示一个作用于某对象结构中的各元素的操作，它使你可以在不改变各元素类的前提下定义作用于这个元素的新操作。")])]),t._v(" "),r("li",[r("p",[t._v("十五、Interpreter，解释器模式：给定一个语言，定义他的文法的一个表示，并定义一个解释器，这个解释器使用该表示来解释语言中的句子。")])]),t._v(" "),r("li",[r("p",[t._v("十六、Memento，备忘录模式：在不破坏对象的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。")])])]),t._v(" "),r("h2",{attrs:{id:"结构型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结构型"}},[t._v("#")]),t._v(" 结构型")]),t._v(" "),r("h4",{attrs:{id:"十九、proxy-代理模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#十九、proxy-代理模式"}},[t._v("#")]),t._v(" 十九、Proxy，代理模式")]),t._v(" "),r("p",[t._v("为其他对象提供一种代理以控制对这个对象的访问")]),t._v(" "),r("h4",{attrs:{id:"二十、adapter-适配器模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二十、adapter-适配器模式"}},[t._v("#")]),t._v(" 二十、Adapter，适配器模式")]),t._v(" "),r("p",[t._v("将一类的接口转换成客户希望的另外一个接口，Adapter模式使得原本由于接口不兼容而不能一起工作那些类可以一起工作。\nhttps://www.cnblogs.com/knowledgesea/p/3934994.html\n比如网购支付 ，不同的银行提供不同的接口。")]),t._v(" "),r("h4",{attrs:{id:"二十二、bridge-桥接模式-将抽象部分与它的实现部分相分离-使他们可以独立的变化。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二十二、bridge-桥接模式-将抽象部分与它的实现部分相分离-使他们可以独立的变化。"}},[t._v("#")]),t._v(" 二十二、Bridge，桥接模式：将抽象部分与它的实现部分相分离，使他们可以独立的变化。")]),t._v(" "),r("p",[t._v("https://blog.csdn.net/qq_31156277/article/details/80659537\n比如电脑可以分为台式机、笔记本、平板；又可以分为不同的品牌。可以把品牌的接口抽象出来。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("二十一、Decrator，装饰模式：动态地给一个对象增加一些额外的职责，就增加的功能来说，Decorator模式相比生成子类更加灵活。")])]),t._v(" "),r("li",[r("p",[t._v("二十三、Flyweight，享元模式")])]),t._v(" "),r("li",[r("p",[t._v("十七、Composite，组合模式：将对象组合成树形结构以表示部分整体的关系，Composite使得用户对单个对象和组合对象的使用具有一致性。")])]),t._v(" "),r("li",[r("p",[t._v("十八、Facade，外观模式：为子系统中的一组接口提供一致的界面，fa?ade提供了一高层接口，这个接口使得子系统更容易使用。")])])]),t._v(" "),r("h2",{attrs:{id:"书-设计模式那点事"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#书-设计模式那点事"}},[t._v("#")]),t._v(" 书：设计模式那点事")]),t._v(" "),r("p",[t._v("23种设计模式要在这里详细的都说一遍内容实在太多了啊，推荐你一本好书《软件秘笈：设计模式那点事》，里面讲解的23中设计模式例子很生动，容易理解，还有JDK中设计模式应用情况，看了收获挺大的！百度里面搜“设计模式”，第一条中设计模式百度百科中就有首推该图书，浏览量在20几万以上的，不会错的。")])])}),[],!1,null,null,null);a.default=v.exports}}]);