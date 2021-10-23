(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{685:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h4",{attrs:{id:"leetcode六道题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#leetcode六道题目"}},[s._v("#")]),s._v(" LeetCode六道题目")]),s._v(" "),t("p",[s._v("基础题目1：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/")]),s._v(" "),t("p",[s._v("给定一个数组prices，它的第 i 个元素是一支给定股票第 i 天的价格。")]),s._v(" "),t("p",[s._v("如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。注意你不能在买入股票前卖出股票。")]),s._v(" "),t("p",[s._v("题目变化：")]),s._v(" "),t("ul",[t("li",[s._v("题目2、交易次数不限")]),s._v(" "),t("li",[s._v("题目3、最多完成2笔交易。 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/")]),s._v(" "),t("li",[s._v("题目4、交易含冷冻期，即卖出股票后第二天不能交易，第三天才可以交易。https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/submissions/")]),s._v(" "),t("li",[s._v("题目5、最多完成k笔交易 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/")]),s._v(" "),t("li",[s._v("题目6、交易含手续费 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/")])]),s._v(" "),t("p",[s._v("LeetCode上该题目对应的一篇文章，动态规划法（dp，dynamic programming），一个方法团灭 6 道股票问题：\nhttps://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/solution/yi-ge-tong-yong-fang-fa-tuan-mie-6-dao-gu-piao-wen/")]),s._v(" "),t("h4",{attrs:{id:"交易状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交易状态"}},[s._v("#")]),s._v(" 交易状态")]),s._v(" "),t("p",[s._v("什么是交易状态？每天交易完成后的状态是确定的：剩余交易次数k是确定的，是否持有也是确定的。交易状态即剩余交易次数k和是否持有0/1。")]),s._v(" "),t("p",[s._v("比如说基础题目1，每天交易完成后有以下可能的状态：(前两个比较特殊)")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("状态00：[已交易次数k=0][当前是否持有=0]   收益=0;\n状态01：[已交易次数k=0][当前是否持有=1]   不存在\n\n状态10：[已交易次数k=1][当前是否持有=0]\n状态11：[已交易次数k=1][当前是否持有=1]\n\n当然后面还有更多：\n状态20：[已交易次数k=2][当前是否持有=0]\n状态21：[已交易次数k=2][当前是否持有=1]\n...\n\n前两个状态00、01收益是确定的，后续计算每天各个状态的收益时不用计算它俩，也不用设置对应的变量。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h4",{attrs:{id:"累计收益"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#累计收益"}},[s._v("#")]),s._v(" 累计收益")]),s._v(" "),t("p",[s._v("什么是第 i 天的累计收益？就是从开始到 i 天总共赚了多少钱（花的用负数表示，持有的股票不算）。初始收益为0。")]),s._v(" "),t("ul",[t("li",[s._v("当天没有买也没有卖，收益不变；")]),s._v(" "),t("li",[s._v("当天买入，价格为3，那么收益减3，")]),s._v(" "),t("li",[s._v("当天卖出，价格为7，那么收益加7；")])]),s._v(" "),t("p",[s._v("累计收益记为dp（dynamic programming）。第i天，已交易次数=k，持仓=0，此状态的最大累计收益记为"),t("code",[s._v("dp[i][k][0]")])]),s._v(" "),t("h4",{attrs:{id:"依次计算出每天各个状态的最大累计收益"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依次计算出每天各个状态的最大累计收益"}},[s._v("#")]),s._v(" 依次计算出每天各个状态的最大累计收益")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("第0天，也就是开始交易之前")]),s._v(" "),t("ul",[t("li",[s._v("【k=n, 持仓=0】：不管k等于多少，刚开始持仓=0，收益也=0，即"),t("code",[s._v("dp[i][k][0]=0")]),s._v("。")]),s._v(" "),t("li",[s._v("【k=n, 持仓=1】：不管k等于多少，刚开始交易之前，持仓肯定不能为1，而且如果为1后面计算的时候就可以直接卖掉了，所以这种情况应该让dp为负无穷，后续计算中就会被替代掉。"),t("code",[s._v("dp[i][k][0]=-infinity")])])])]),s._v(" "),t("li",[t("p",[s._v("第1天，计算各个状态的最大值：")]),s._v(" "),t("ul",[t("li",[s._v("以状态20为例，20可能从各个初始状态转移过来，比如初始的20不交易仍然是20，或者初始的21卖出变成20。从所有结果中找到最大值，得到"),t("code",[s._v("dp[1][2][0]")]),s._v("。")])])]),s._v(" "),t("li",[t("p",[s._v("第二天计继续各个状态的最大值")]),s._v(" "),t("p",[s._v("...")])]),s._v(" "),t("li",[t("p",[s._v("一直到最后一天，得到最终的最大收益。")])])]),s._v(" "),t("p",[s._v("为什么依次计算出每天的各个状态的最大值，最后就能计算出最大收益？ 这个嘛，比如第三天你和我都处在的状态20，此时我赚了200块，你赚了180，那么后面无论你操作的再好，我只要跟你一样操作，我就比你多赚20。")]),s._v(" "),t("p",[s._v("假设prices = {3,2,6,7,5}，最多只能交易一次，那么每天需要计算的状态为10和11：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("第i天")]),s._v(" "),t("th",[s._v("状态10 当前持有")]),s._v(" "),t("th",[s._v("状态11：当前未持有")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("prices[1]=3")]),s._v(" "),t("td",[s._v("-3")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("prices[2]=2")]),s._v(" "),t("td",[s._v("max(-3,    0-2)     =  -2    （继续持有，或首次买入）")]),s._v(" "),t("td",[s._v("max( 0,   -3+2  )   =  0    （继续未持有，或卖出）")])]),s._v(" "),t("tr",[t("td",[s._v("prices[3]=6")]),s._v(" "),t("td",[s._v("max( -2,    0-6)    =  -2")]),s._v(" "),t("td",[s._v("max( 0,   -2+6  )   = 4")])]),s._v(" "),t("tr",[t("td",[s._v("prices[4]=7")]),s._v(" "),t("td",[s._v("max( -2,    0-7)    =  -2")]),s._v(" "),t("td",[s._v("max( 4,   -2+7  )   = 5")])]),s._v(" "),t("tr",[t("td",[s._v("prices[5]=5")]),s._v(" "),t("td",[s._v("max( -2,    0-5)    =  -2")]),s._v(" "),t("td",[s._v("max( 5,   -2+5  )   = 5")])])])]),s._v(" "),t("p",[s._v("所以最大收益为5。")]),s._v(" "),t("h4",{attrs:{id:"状态转移方程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#状态转移方程"}},[s._v("#")]),s._v(" 状态转移方程")]),s._v(" "),t("p",[s._v("k有上限时，比如最多完成2笔交易，其状态转移方程如下：")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("状态转移方程：\n    dp[i][k][0] = max( dp[i-1][k][0],   dp[i-1][k][1]+prices[i] )  //今天没持有\n    \t\t\t//max(   昨天没持有,rest,      昨天持有今天卖出   )\n    dp[i][k][1] = max( dp[i-1][k][1],   dp[i-1][k-1][0]-prices[i] )  //今天持有\n    \t\t\t//max(   昨天持有,rest,       昨天没持有今天买入，注意昨天是k-1今天买入后变成k )\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"第1题-最多交易一次-c-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第1题-最多交易一次-c-代码"}},[s._v("#")]),s._v(" 第1题，最多交易一次，C++代码")]),s._v(" "),t("p",[s._v("这里写一段简单的C++代码，对应LeetCode的第一题，最多交易一次。")]),s._v(" "),t("p",[s._v("https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/submissions/")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\nint maxProfit(vector<int>& prices) {\n    if(prices.empty())\n        return 0;\n    int dp10=0, dp11=1<<31;  //所有的dpk0都初始化为0，dpk1都初始化为负无穷  //1<<31是最小的int。 \n    for(auto price : prices){ //依次计算每天的dp10和dp11\n        dp10 = max(dp10, dp11+price); // max(继续空仓, 卖出)\n        dp11 = max(dp11, -price); //max(继续持仓, 第一次买入)\n    }\n    return  dp10;\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h4",{attrs:{id:"第2题-交易次数不限-c-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第2题-交易次数不限-c-代码"}},[s._v("#")]),s._v(" 第2题，交易次数不限，C++代码")]),s._v(" "),t("p",[s._v("交易次数不限的情况下，需要加一个临时变量dp10past")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("int maxProfit(vector<int>& prices) {\n    if(prices.empty())\n        return 0;\n    int dp10=0, dp11=1<<31, dp10past; //所有的dpk0都初始化为0，dpk1都初始化为负无穷  //1<<31是最小的int。\n    for(auto price : prices){\n        dp10past = dp10;\n        dp10 = max(dp10, dp11+price);// max(继续空仓, 卖出)\n        dp11 = max(dp11, dp10past-price);// max(继续持仓, 买入)\n    }\n    return dp10;\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h4",{attrs:{id:"第3题-最多交易两次"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第3题-最多交易两次"}},[s._v("#")]),s._v(" 第3题，最多交易两次")]),s._v(" "),t("p",[s._v("跟第一题非常神似")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// dp[i][2][0] = max(dp[i-1][2][0], dp[i-1][2][1] + prices[i])\n// dp[i][2][1] = max(dp[i-1][2][1], dp[i-1][1][0] - prices[i])\n// dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])\n// dp[i][1][1] = max(dp[i-1][1][1], -prices[i])\n\nint maxProfit(vector<int>& prices) {\n    int dp20 = 0, dp21 = INT_MIN;  //所有的ik0都初始化为0，ik1都初始化为负无穷    //INT_MIN是C++里的一个宏定义\n    int dp10 = 0, dp11 = INT_MIN;\n    for (int price : prices) {\n        dp20 = max(dp20, dp21+price);  //max(继续空仓, 卖出)\n        dp21 = max(dp21, dp10-price);  //max(继续持仓, 买入)\n        dp10 = max(dp10, dp11+price);\n        dp11 = max(dp11, -price);  //max(继续持仓, 第一次买入)\n    }\n    return dp20;\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h4",{attrs:{id:"第5题-最多交易k次"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第5题-最多交易k次"}},[s._v("#")]),s._v(" 第5题，最多交易k次")]),s._v(" "),t("div",{staticClass:"language-c++ line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("int maxProfit(int k, vector<int>& prices) {\n    if(prices.empty())\n        return 0;\n    if(k>prices.size()/2)//这里如果k大于一半的天数，那么相当于不限制次数，调用第2题的代码。LeetCode中如果不处理这种情况会出错。\n        return maxProfitUnlimited(prices);\n    vector<vector<int>> dp(k+1, {0, INT_MIN}); //这里k表示已交易次数，实际上使用了dp[k]到dp[1],没有用dp[0],虽然多用了一点空间，但是便于理解。\n    for(auto price : prices){ //遍历prices,计算每一天的各个状态\n        for(int j=k; j>=1; --j){ //遍历各个状态，从dp[k][0]、dp[k][1]到dp[1][0]、dp[1][1]\n            dp[j][0]=max(dp[j][0], dp[j][1]+price); //max(继续空仓, 卖出)\n            dp[j][1]=max(dp[j][1], dp[j-1][0]-price); //max(继续持仓, 买入)\n        } \n    }\n    return dp[k][0];\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);