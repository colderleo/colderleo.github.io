(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{509:function(t,v,_){"use strict";_.r(v);var s=_(21),e=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("忘记密码的更该方法：")]),t._v(" "),_("p",[t._v("https://blog.csdn.net/huanghaifei922/article/details/54644818")]),t._v(" "),_("p",[t._v("1.vi /etc/my.cnf\t这个可以用xftp改")]),t._v(" "),_("p",[t._v("2.在[mysqld]中添加")]),t._v(" "),_("p",[t._v("skip-grant-tables")]),t._v(" "),_("p",[t._v("例如：")]),t._v(" "),_("p",[t._v("[mysqld]")]),t._v(" "),_("p",[t._v("skip-grant-tables")]),t._v(" "),_("p",[t._v("datadir=/var/lib/mysql")]),t._v(" "),_("p",[t._v("3.重启mysql")]),t._v(" "),_("p",[t._v("service mysql restart")]),t._v(" "),_("p",[t._v("4.用户无密码登录  (直接点击回车，如果提示输入密码，再回车)")]),t._v(" "),_("p",[t._v("mysql -uroot -p")]),t._v(" "),_("p",[t._v("5.选择数据库（注意后面的分号要带上）")]),t._v(" "),_("p",[t._v("use mysql;")]),t._v(" "),_("p",[t._v("6.修改root密码")]),t._v(" "),_("p",[t._v("update user set authentication_string=password('123456') where user='root';")]),t._v(" "),_("p",[t._v("7.执行")]),t._v(" "),_("p",[t._v("flush privileges;")]),t._v(" "),_("p",[t._v("8.退出")]),t._v(" "),_("p",[t._v("exit;")]),t._v(" "),_("p",[t._v("9.删除")]),t._v(" "),_("p",[t._v("vi /etc/my.cnf")]),t._v(" "),_("p",[t._v("删除 skip-grant-tables")]),t._v(" "),_("p",[t._v("10.重启mysql")]),t._v(" "),_("p",[t._v("service mysql restart")]),t._v(" "),_("p",[t._v("下面这个没用")]),t._v(" "),_("p",[t._v("https://blog.csdn.net/heatdeath/article/details/79066191")]),t._v(" "),_("p",[t._v("2.在用mysqld_safe命令重置root用户密码时,提示command not found...")]),t._v(" "),_("p",[t._v("搜索发现这个,mysql 5.7 在centos 7 上,是用systemd管理的,相应操作如下:")]),t._v(" "),_("p",[t._v("UPDATE mysql.user SET authentication_string = PASSWORD('gao725224') WHERE User = 'root' AND Host = 'localhost';")]),t._v(" "),_("p",[t._v("\\1. Stop mysql:")]),t._v(" "),_("p",[t._v("systemctl stop mysqld")]),t._v(" "),_("p",[t._v("\\2. Set the mySQL environment option")]),t._v(" "),_("p",[t._v('systemctl set-environment MYSQLD_OPTS="--skip-grant-tables"')]),t._v(" "),_("p",[t._v("\\3. Start mysql usig the options you just set")]),t._v(" "),_("p",[t._v("systemctl start mysqld")]),t._v(" "),_("p",[t._v("\\4. Login as root")]),t._v(" "),_("p",[t._v("mysql -u root")])])}),[],!1,null,null,null);v.default=e.exports}}]);