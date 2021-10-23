(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{503:function(t,s,a){"use strict";a.r(s);var e=a(16),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ul",[a("li",[a("p",[t._v("参考官方文档：https://about.gitlab.com/install/#centos-7 官方文档安装后，设置root默认密码会失败，版本大概是13.4，ee(企业)版的。")])]),t._v(" "),a("li",[a("p",[t._v("官方的配置说明：https://gitlab.com/gitlab-org/omnibus-gitlab/-/tree/master/doc/settings")])]),t._v(" "),a("li",[a("p",[t._v("安装以前版本的gitlab, 参考https://www.jianshu.com/p/8c02c3887889")])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd /usr/local/src\nwget https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-12.0.8-ce.0.el7.x86_64.rpm\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("假设要访问的地址是：\nhttp://192.168.100.140:8082/")]),t._v(" "),a("p",[t._v("安装的时候，url部分这样设置：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('sudo EXTERNAL_URL="http://0.0.0.0:8082" yum install -y gitlab-ce\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("修改端口号，记得打开防火墙。")]),t._v(" "),a("p",[t._v("其实什么都不用改， 安装的时候设置"),a("code",[t._v("external_url 'http://0.0.0.0:8082'")]),t._v(" 就够了。")]),t._v(" "),a("h4",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gitlab-ctl stop\ngitlab-ctl reconfigure\n\ngitlab-ctl start\ngitlab-ctl restart\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("设置git-data文件夹的位置\nhttps://www.cnblogs.com/dieyaxianju/p/7586203.html")]),t._v(" "),a("p",[t._v("注意新的仓库文件夹权限，")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chown -R git.git /data/git-data  #修改创建目录的属主和属组为git用户\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("将旧仓库中的.git文件夹导入新仓库：\nhttp://www.manongjc.com/article/63814.html")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo gitlab-rake gitlab:import:repos['/var/opt/gitlab/git-data/repositories']\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"设置gitlab开机自启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置gitlab开机自启动"}},[t._v("#")]),t._v(" 设置GitLab开机自启动")]),t._v(" "),a("p",[t._v("https://www.cnblogs.com/xzlive/p/10838516.html")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 禁止 Gitlab 开机自启动：\nsystemctl disable gitlab-runsvdir.service\n\n# 启用 Gitlab 开机自启动：\nsystemctl enable gitlab-runsvdir.service\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);