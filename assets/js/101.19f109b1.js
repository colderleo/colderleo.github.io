(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{670:function(n,s,r){"use strict";r.r(s);var a=r(16),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,r=n._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("p",[n._v("C语言中文网的socket教程，一系列，非常棒，不过有些章节要收费。\nhttp://c.biancheng.net/socket/")]),n._v(" "),r("p",[n._v("一篇博客，单个的socket client和server的通信，代码很好，我修改了一小部分，并加上了注释，如下。\nhttps://www.cnblogs.com/zkfopen/p/9441264.html")]),n._v(" "),r("h4",{attrs:{id:"server-cpp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-cpp"}},[n._v("#")]),n._v(" server.cpp")]),n._v(" "),r("div",{staticClass:"language-c++ line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v('//server.cpp\n\n#include<stdlib.h>  //这5个是unix常用库，加了不会错，不加很可能会出错。\n#include<unistd.h>\n#include<string.h>  //memset() 等\n#include<stdio.h>   //printf\n#include<errno.h>\n\n#include<sys/types.h>\n#include<sys/socket.h>  //socekt通信，这3个都要\n#include<netinet/in.h>  //定义了sockaddr_in \n#include<arpa/inet.h>  //包含inet_addr("127.0.0.1")\n\n#define MAXSIZE 4096\n\nint main(int argc, char** argv){\n    \n    //AF_INET，表示ipv4，还有AF_INET6; AF意思是Address Family\n    //SOCK_STREAM表示TCP，还有 SOCK_DGRAM:UDP   \n    //socket函数第三个参数，0，表示传输协议。它有三种取值，IPPROTO_TCP，IPPROTO_UDP，0。 0表示根据第二个参数自动推演，所以一般就用0\n    int  server_sock;\n    if( (server_sock = socket(AF_INET, SOCK_STREAM, 0)) == -1 ){\n        printf("create socket error: %s\\n", strerror(errno));\n        return 0;\n    }\n\n    struct sockaddr_in  addr;\n    memset(&addr, 0, sizeof(addr));//把addr的内存初始化为0。这句相当于是快速的初始化。\n    addr.sin_family = AF_INET;//ipv4\n    // addr.sin_addr.s_addr = htonl(INADDR_ANY);// 0.0.0.0， 监听所有网卡的所有ip地址。 htonl host to network long，把host字节序转换为网路字节序，long\n    addr.sin_addr.s_addr = inet_addr("0.0.0.0");// 0.0.0.0， 监听所有网卡的所有ip地址。\n    addr.sin_port = htons(6666);//host to network short.\n\n    // bind 绑定成功，返回0，失败返回-1\n    int bind_ret = bind(server_sock, (struct sockaddr*)&addr, sizeof(addr));\n    if(-1 == bind_ret){//addr类型是sockaddr_in，这里要给它转成sockaddr\n        printf("bind socket error: %s\\n", strerror(errno));\n        return 0;\n    }\n\n    int listen_ret = listen(server_sock, 10);\n    if(-1 == listen_ret){//10是请求队列的长度。并发量小可以设置成10或20。\n        printf("listen socket error: %s\\n", strerror(errno));\n        return 0;\n    }\n\n    printf("======waiting for client\'s request======\\n");\n    int client_sock, n;\n    char  buff[4096];\n    while(1){\n        //接受客户端socket连接\n        struct sockaddr_in client_addr;\n        socklen_t len = sizeof(client_addr);\n        client_sock = accept(server_sock, (struct sockaddr*)&client_addr, &len);\n        //如果不关心客户端的地址，也可以这样：accept(server_sock, NULL, NULL); \n        if( -1 == client_sock){\n            printf("accept socket error");\n            continue;\n        }\n        \n        //接收数据\n        n = recv(client_sock, buff, MAXSIZE-1, 0);//MAXSIZE是接收数据的长度，第4个参数一般配置为0\n        buff[n] = \'\\0\';\n        printf("recv msg from client: %s\\n", buff);\n        close(client_sock);\n    }\n    close(server_sock);\n    return 0;\n}\n\n\n')])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br"),r("span",{staticClass:"line-number"},[n._v("6")]),r("br"),r("span",{staticClass:"line-number"},[n._v("7")]),r("br"),r("span",{staticClass:"line-number"},[n._v("8")]),r("br"),r("span",{staticClass:"line-number"},[n._v("9")]),r("br"),r("span",{staticClass:"line-number"},[n._v("10")]),r("br"),r("span",{staticClass:"line-number"},[n._v("11")]),r("br"),r("span",{staticClass:"line-number"},[n._v("12")]),r("br"),r("span",{staticClass:"line-number"},[n._v("13")]),r("br"),r("span",{staticClass:"line-number"},[n._v("14")]),r("br"),r("span",{staticClass:"line-number"},[n._v("15")]),r("br"),r("span",{staticClass:"line-number"},[n._v("16")]),r("br"),r("span",{staticClass:"line-number"},[n._v("17")]),r("br"),r("span",{staticClass:"line-number"},[n._v("18")]),r("br"),r("span",{staticClass:"line-number"},[n._v("19")]),r("br"),r("span",{staticClass:"line-number"},[n._v("20")]),r("br"),r("span",{staticClass:"line-number"},[n._v("21")]),r("br"),r("span",{staticClass:"line-number"},[n._v("22")]),r("br"),r("span",{staticClass:"line-number"},[n._v("23")]),r("br"),r("span",{staticClass:"line-number"},[n._v("24")]),r("br"),r("span",{staticClass:"line-number"},[n._v("25")]),r("br"),r("span",{staticClass:"line-number"},[n._v("26")]),r("br"),r("span",{staticClass:"line-number"},[n._v("27")]),r("br"),r("span",{staticClass:"line-number"},[n._v("28")]),r("br"),r("span",{staticClass:"line-number"},[n._v("29")]),r("br"),r("span",{staticClass:"line-number"},[n._v("30")]),r("br"),r("span",{staticClass:"line-number"},[n._v("31")]),r("br"),r("span",{staticClass:"line-number"},[n._v("32")]),r("br"),r("span",{staticClass:"line-number"},[n._v("33")]),r("br"),r("span",{staticClass:"line-number"},[n._v("34")]),r("br"),r("span",{staticClass:"line-number"},[n._v("35")]),r("br"),r("span",{staticClass:"line-number"},[n._v("36")]),r("br"),r("span",{staticClass:"line-number"},[n._v("37")]),r("br"),r("span",{staticClass:"line-number"},[n._v("38")]),r("br"),r("span",{staticClass:"line-number"},[n._v("39")]),r("br"),r("span",{staticClass:"line-number"},[n._v("40")]),r("br"),r("span",{staticClass:"line-number"},[n._v("41")]),r("br"),r("span",{staticClass:"line-number"},[n._v("42")]),r("br"),r("span",{staticClass:"line-number"},[n._v("43")]),r("br"),r("span",{staticClass:"line-number"},[n._v("44")]),r("br"),r("span",{staticClass:"line-number"},[n._v("45")]),r("br"),r("span",{staticClass:"line-number"},[n._v("46")]),r("br"),r("span",{staticClass:"line-number"},[n._v("47")]),r("br"),r("span",{staticClass:"line-number"},[n._v("48")]),r("br"),r("span",{staticClass:"line-number"},[n._v("49")]),r("br"),r("span",{staticClass:"line-number"},[n._v("50")]),r("br"),r("span",{staticClass:"line-number"},[n._v("51")]),r("br"),r("span",{staticClass:"line-number"},[n._v("52")]),r("br"),r("span",{staticClass:"line-number"},[n._v("53")]),r("br"),r("span",{staticClass:"line-number"},[n._v("54")]),r("br"),r("span",{staticClass:"line-number"},[n._v("55")]),r("br"),r("span",{staticClass:"line-number"},[n._v("56")]),r("br"),r("span",{staticClass:"line-number"},[n._v("57")]),r("br"),r("span",{staticClass:"line-number"},[n._v("58")]),r("br"),r("span",{staticClass:"line-number"},[n._v("59")]),r("br"),r("span",{staticClass:"line-number"},[n._v("60")]),r("br"),r("span",{staticClass:"line-number"},[n._v("61")]),r("br"),r("span",{staticClass:"line-number"},[n._v("62")]),r("br"),r("span",{staticClass:"line-number"},[n._v("63")]),r("br"),r("span",{staticClass:"line-number"},[n._v("64")]),r("br"),r("span",{staticClass:"line-number"},[n._v("65")]),r("br"),r("span",{staticClass:"line-number"},[n._v("66")]),r("br"),r("span",{staticClass:"line-number"},[n._v("67")]),r("br"),r("span",{staticClass:"line-number"},[n._v("68")]),r("br"),r("span",{staticClass:"line-number"},[n._v("69")]),r("br"),r("span",{staticClass:"line-number"},[n._v("70")]),r("br"),r("span",{staticClass:"line-number"},[n._v("71")]),r("br")])]),r("h4",{attrs:{id:"client-cpp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client-cpp"}},[n._v("#")]),n._v(" client.cpp")]),n._v(" "),r("div",{staticClass:"language-C++ line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v('//client.cpp\n\n#include<stdio.h>  //这4个是unix下的常用库\n#include<stdlib.h>\n#include<string.h>\n#include<unistd.h>\n\n#include<errno.h>\n#include<sys/socket.h>  \n#include<netinet/in.h>\n#include<arpa/inet.h>   //包含inet_addr("127.0.0.1")\n\n#define MAXSIZE 4096\n\nint main(int argc, char** argv){\n    char  recvline[4096], sendline[4096];\n\n    //运行时输入ip地址作为参数，\n    // if( argc != 2){\n    //     printf("usage: ./client <ipaddress>\\n");\n    //     return 0;\n    // }\n\n    int sock_client = socket(AF_INET, SOCK_STREAM, 0);\n    if( sock_client < 0){\n        printf("create socket error: %s\\n", strerror(errno));\n        return 0;\n    }\n\n    struct sockaddr_in  addr;\n    memset(&addr, 0, sizeof(addr));\n    addr.sin_family = AF_INET;\n    addr.sin_port = htons(6666);\n    //addr.sin_addr.s_addr = inet_addr(argv[1]);//将main传入的参数赋给addr.sin_addr\n    addr.sin_addr.s_addr = inet_addr("127.0.0.1");//将main传入的参数赋给addr.sin_addr\n    \n    //也可以用下面的方法传，这个方法的好处是能检测输入是否正确，另外inet_pton这个函数ipv6也可以处理。\n    // if( inet_pton(AF_INET, argv[1], &addr.sin_addr) <= 0){\n    //     // inet_pton 将点分十进制串转换成网络字节序二进制值，此函数对IPv4地址和IPv6地址都能处理。\n    //     printf("inet_pton error for %s\\n",argv[1]);\n    //     return 0;\n    // }\n\n    int connect_ret = connect(sock_client, (struct sockaddr*)&addr, sizeof(addr));\n    if(connect_ret < 0){\n        printf("connect error: %s(errno: %d)\\n",strerror(errno),errno);\n        return 0;\n    }\n\n    printf("send msg to server: \\n");\n    fgets(sendline, 4096, stdin);\n    if(send(sock_client, sendline, strlen(sendline), 0) < 0){\n        printf("send msg error: %s(errno: %d)\\n", strerror(errno), errno);\n        return 0;\n    }\n    // close(sock_client);\n    return 0;\n}\n')])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br"),r("span",{staticClass:"line-number"},[n._v("6")]),r("br"),r("span",{staticClass:"line-number"},[n._v("7")]),r("br"),r("span",{staticClass:"line-number"},[n._v("8")]),r("br"),r("span",{staticClass:"line-number"},[n._v("9")]),r("br"),r("span",{staticClass:"line-number"},[n._v("10")]),r("br"),r("span",{staticClass:"line-number"},[n._v("11")]),r("br"),r("span",{staticClass:"line-number"},[n._v("12")]),r("br"),r("span",{staticClass:"line-number"},[n._v("13")]),r("br"),r("span",{staticClass:"line-number"},[n._v("14")]),r("br"),r("span",{staticClass:"line-number"},[n._v("15")]),r("br"),r("span",{staticClass:"line-number"},[n._v("16")]),r("br"),r("span",{staticClass:"line-number"},[n._v("17")]),r("br"),r("span",{staticClass:"line-number"},[n._v("18")]),r("br"),r("span",{staticClass:"line-number"},[n._v("19")]),r("br"),r("span",{staticClass:"line-number"},[n._v("20")]),r("br"),r("span",{staticClass:"line-number"},[n._v("21")]),r("br"),r("span",{staticClass:"line-number"},[n._v("22")]),r("br"),r("span",{staticClass:"line-number"},[n._v("23")]),r("br"),r("span",{staticClass:"line-number"},[n._v("24")]),r("br"),r("span",{staticClass:"line-number"},[n._v("25")]),r("br"),r("span",{staticClass:"line-number"},[n._v("26")]),r("br"),r("span",{staticClass:"line-number"},[n._v("27")]),r("br"),r("span",{staticClass:"line-number"},[n._v("28")]),r("br"),r("span",{staticClass:"line-number"},[n._v("29")]),r("br"),r("span",{staticClass:"line-number"},[n._v("30")]),r("br"),r("span",{staticClass:"line-number"},[n._v("31")]),r("br"),r("span",{staticClass:"line-number"},[n._v("32")]),r("br"),r("span",{staticClass:"line-number"},[n._v("33")]),r("br"),r("span",{staticClass:"line-number"},[n._v("34")]),r("br"),r("span",{staticClass:"line-number"},[n._v("35")]),r("br"),r("span",{staticClass:"line-number"},[n._v("36")]),r("br"),r("span",{staticClass:"line-number"},[n._v("37")]),r("br"),r("span",{staticClass:"line-number"},[n._v("38")]),r("br"),r("span",{staticClass:"line-number"},[n._v("39")]),r("br"),r("span",{staticClass:"line-number"},[n._v("40")]),r("br"),r("span",{staticClass:"line-number"},[n._v("41")]),r("br"),r("span",{staticClass:"line-number"},[n._v("42")]),r("br"),r("span",{staticClass:"line-number"},[n._v("43")]),r("br"),r("span",{staticClass:"line-number"},[n._v("44")]),r("br"),r("span",{staticClass:"line-number"},[n._v("45")]),r("br"),r("span",{staticClass:"line-number"},[n._v("46")]),r("br"),r("span",{staticClass:"line-number"},[n._v("47")]),r("br"),r("span",{staticClass:"line-number"},[n._v("48")]),r("br"),r("span",{staticClass:"line-number"},[n._v("49")]),r("br"),r("span",{staticClass:"line-number"},[n._v("50")]),r("br"),r("span",{staticClass:"line-number"},[n._v("51")]),r("br"),r("span",{staticClass:"line-number"},[n._v("52")]),r("br"),r("span",{staticClass:"line-number"},[n._v("53")]),r("br"),r("span",{staticClass:"line-number"},[n._v("54")]),r("br"),r("span",{staticClass:"line-number"},[n._v("55")]),r("br"),r("span",{staticClass:"line-number"},[n._v("56")]),r("br"),r("span",{staticClass:"line-number"},[n._v("57")]),r("br"),r("span",{staticClass:"line-number"},[n._v("58")]),r("br")])]),r("h4",{attrs:{id:"struct-sockaddr和struct-sockaddr-in的区别和用法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#struct-sockaddr和struct-sockaddr-in的区别和用法"}},[n._v("#")]),n._v(" struct sockaddr和struct sockaddr_in的区别和用法")]),n._v(" "),r("p",[n._v("https://blog.csdn.net/slvher/article/details/8856003")]),n._v(" "),r("div",{staticClass:"language-c++ line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("\n//sockaddr_in的结构\nstruct sockaddr_in { \n    short int sin_family;\n    unsigned short int sin_port; \n    struct in_addr sin_addr;                \n    unsigned char sin_zero[8];\n}   \n\n\n")])]),n._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[n._v("1")]),r("br"),r("span",{staticClass:"line-number"},[n._v("2")]),r("br"),r("span",{staticClass:"line-number"},[n._v("3")]),r("br"),r("span",{staticClass:"line-number"},[n._v("4")]),r("br"),r("span",{staticClass:"line-number"},[n._v("5")]),r("br"),r("span",{staticClass:"line-number"},[n._v("6")]),r("br"),r("span",{staticClass:"line-number"},[n._v("7")]),r("br"),r("span",{staticClass:"line-number"},[n._v("8")]),r("br"),r("span",{staticClass:"line-number"},[n._v("9")]),r("br"),r("span",{staticClass:"line-number"},[n._v("10")]),r("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);