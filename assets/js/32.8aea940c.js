(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{425:function(t,s,a){"use strict";a.r(s);var e=a(28),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"配置文件预处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件预处理"}},[t._v("#")]),t._v(" 配置文件预处理")]),t._v(" "),a("h2",{attrs:{id:"版本要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本要求"}},[t._v("#")]),t._v(" 版本要求")]),t._v(" "),a("p",[t._v("0.10.1 版本更新后，支持使用 JavaScript 对下载后的配置文件进行预处理")]),t._v(" "),a("p",[t._v("0.11.10 版本更新后，支持使用 YAML 对下载后配置文件进行简单预处理")]),t._v(" "),a("h2",{attrs:{id:"简便方法-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简便方法-yaml"}},[t._v("#")]),t._v(" 简便方法（YAML）")]),t._v(" "),a("p",[t._v("如果需要对下载地址为"),a("code",[t._v("https://example.com/profile.yaml")]),t._v("的配置文件进行预处理，操作如下：")]),t._v(" "),a("ol",[a("li",[t._v("进入 Settings 界面")]),t._v(" "),a("li",[t._v("滚动至 Profiles 栏")]),t._v(" "),a("li",[t._v("点击 Parsers 右边 Edit 打开编辑器，填入："),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("parsers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//example.com/profile.yaml\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("yaml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prepend-rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("test.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rules最前面增加一个规则")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("append-proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# proxies最后面增加一个服务")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 123.123.123.123\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("456")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("点击编辑器右下角保存按钮")])]),t._v(" "),a("p",[t._v("当配置文件触发刷新（包括自动更新）时，CFW 会读取"),a("code",[t._v("yaml")]),t._v("字段定义的值，将对应值插入/合并到原配置文件中")]),t._v(" "),a("h3",{attrs:{id:"参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("键")]),t._v(" "),a("th",[t._v("值类型")]),t._v(" "),a("th",[t._v("操作")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("append-rules")]),t._v(" "),a("td",[t._v("数组")]),t._v(" "),a("td",[t._v("数组合并至原配置"),a("code",[t._v("rules")]),t._v("数组"),a("strong",[t._v("后")])])]),t._v(" "),a("tr",[a("td",[t._v("prepend-rules")]),t._v(" "),a("td",[t._v("数组")]),t._v(" "),a("td",[t._v("数组合并至原配置"),a("code",[t._v("rules")]),t._v("数组"),a("strong",[t._v("前")])])]),t._v(" "),a("tr",[a("td",[t._v("append-proxies")]),t._v(" "),a("td",[t._v("数组")]),t._v(" "),a("td",[t._v("数组合并至原配置"),a("code",[t._v("proxies")]),t._v("数组"),a("strong",[t._v("后")])])]),t._v(" "),a("tr",[a("td",[t._v("prepend-proxies")]),t._v(" "),a("td",[t._v("数组")]),t._v(" "),a("td",[t._v("数组合并至原配置"),a("code",[t._v("proxies")]),t._v("数组"),a("strong",[t._v("前")])])]),t._v(" "),a("tr",[a("td",[t._v("append-proxy-groups")]),t._v(" "),a("td",[t._v("数组")]),t._v(" "),a("td",[t._v("数组合并至原配置"),a("code",[t._v("proxy-groups")]),t._v("数组"),a("strong",[t._v("后")])])]),t._v(" "),a("tr",[a("td",[t._v("prepend-proxy-groups")]),t._v(" "),a("td",[t._v("数组")]),t._v(" "),a("td",[t._v("数组合并至原配置"),a("code",[t._v("proxy-groups")]),t._v("数组"),a("strong",[t._v("前")])])]),t._v(" "),a("tr",[a("td",[t._v("mix-proxy-providers")]),t._v(" "),a("td",[t._v("对象")]),t._v(" "),a("td",[t._v("对象合并至原配置"),a("code",[t._v("proxy-providers")]),t._v("中")])]),t._v(" "),a("tr",[a("td",[t._v("mix-rule-providers")]),t._v(" "),a("td",[t._v("对象")]),t._v(" "),a("td",[t._v("对象合并至原配置"),a("code",[t._v("rule-providers")]),t._v("中")])]),t._v(" "),a("tr",[a("td",[t._v("mix-object")]),t._v(" "),a("td",[t._v("对象")]),t._v(" "),a("td",[t._v("对象合并至原配置最外层中")])]),t._v(" "),a("tr",[a("td",[t._v("commands")]),t._v(" "),a("td",[t._v("数组")]),t._v(" "),a("td",[t._v("在上面操作完成后执行简单命令操作配置文件")])])])]),t._v(" "),a("h3",{attrs:{id:"commands-使用方法-beta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands-使用方法-beta"}},[t._v("#")]),t._v(" Commands 使用方法（beta）")]),t._v(" "),a("p",[t._v("commands 是一组简单的命令，作为上面操作的补充")]),t._v(" "),a("p",[t._v("例子:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("commands")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" dns.enable=false "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 命令1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("groups.0.proxies.2+DIRECT "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 命令2")]),t._v("\n")])])]),a("p",[t._v("每个命令可以被分为三个部分，分别是："),a("strong",[t._v("定位+操作+设定值")])]),t._v(" "),a("p",[t._v("命令 1 中，定位是"),a("code",[t._v("dns.enable")]),t._v("，操作是"),a("code",[t._v("=")]),t._v("，设定值是"),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("命令 2 中，定位是"),a("code",[t._v("proxy-groups.0.proxies.2")]),t._v("，操作是"),a("code",[t._v("+")]),t._v("，设定值是"),a("code",[t._v("DIRECT")])]),t._v(" "),a("h4",{attrs:{id:"定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定位"}},[t._v("#")]),t._v(" 定位")]),t._v(" "),a("p",[t._v("定位中每个层级以"),a("code",[t._v(".")]),t._v("分割，数组类型的定位下标由 0 开始计算，命令 2 中"),a("code",[t._v("proxy-groups.0")]),t._v("即表示定位至第 1 个策略组，"),a("code",[t._v(".proxies")]),t._v("表示访问第一个策略组的 proxies 属性，"),a("code",[t._v(".proxies.2")]),t._v("表示 proxies 属性的第 3 个位置")]),t._v(" "),a("p",[t._v("如果不想用序号定位，也可以使用"),a("code",[t._v("name")]),t._v("值定位，"),a("code",[t._v("proxies")]),t._v("以及"),a("code",[t._v("proxy-groups")]),t._v("中的每个项目都会有"),a("code",[t._v("name")]),t._v("属性。例如在"),a("code",[t._v("proxies")]),t._v("中已经定义了名为"),a("code",[t._v("debug")]),t._v("的节点，那么修改其"),a("code",[t._v("udp")]),t._v("参数的定位即为"),a("code",[t._v("proxies.(debug).udp")]),t._v("，名称两边的"),a("code",[t._v("()")]),t._v("是保证识别，如果节点名不包括"),a("code",[t._v("+")]),t._v("、"),a("code",[t._v(".")]),t._v("或"),a("code",[t._v("=")]),t._v("这几个符号，也可以省略不写")]),t._v(" "),a("h4",{attrs:{id:"操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),a("p",[t._v("目前支持三种操作：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("=")]),t._v("：覆盖")]),t._v(" "),a("li",[a("code",[t._v("+")]),t._v("：插入")]),t._v(" "),a("li",[a("code",[t._v("-")]),t._v("：删除")])]),t._v(" "),a("p",[t._v("命令 1 中，"),a("code",[t._v("=")]),t._v("表示将"),a("code",[t._v("dns")]),t._v("下"),a("code",[t._v("enable")]),t._v("的值覆盖为"),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("命令 2 中，"),a("code",[t._v("+")]),t._v("表示在定位的策略组中的"),a("code",[t._v("proxies")]),t._v("数组中添加一个名为"),a("code",[t._v("DIRECT")]),t._v("的值，原本其他值被向后移动 1 位。如果此处改成"),a("code",[t._v("=")]),t._v("，则会覆盖原来第一个值")]),t._v(" "),a("h4",{attrs:{id:"设定值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设定值"}},[t._v("#")]),t._v(" 设定值")]),t._v(" "),a("p",[t._v("设定值是用于插入或覆盖的值，如果操作是"),a("code",[t._v("-")]),t._v("，则此值可有可无，例如：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("commands")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" proxies.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 命令3")]),t._v("\n")])])]),a("p",[t._v("此处可以将配置文件"),a("code",[t._v("proxies")]),t._v("的第 1 个节点删除")]),t._v(" "),a("p",[t._v("如果设定值为纯数字，则会被识别为整数，为"),a("code",[t._v("true|false")]),t._v("则识别为布尔类型，如果 JSON 编码通过则识别为对象")]),t._v(" "),a("p",[t._v("v0.13.7 版本更新后，支持 3 个内置值用于设置策略组节点，分别是"),a("code",[t._v("[]proxyNames")]),t._v("，"),a("code",[t._v("[]groupNames")]),t._v("和"),a("code",[t._v("[]shuffledProxyNames")]),t._v("，并支持使用正则过滤其中节点，例子如下：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("yaml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prepend-proxy-groups")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myGroup "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建立新策略组")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fallback\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.gstatic.com/generate_204"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DIRECT\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("commands")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("groups.myGroup.proxies="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("proxyNames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("HK "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 向策略组添加所有定义的节点名，并按“HK”正则表达式过滤")]),t._v("\n")])])]),a("h2",{attrs:{id:"进阶方法-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶方法-javascript"}},[t._v("#")]),t._v(" 进阶方法（JavaScript）")]),t._v(" "),a("p",[t._v("如果需要对下载地址为"),a("code",[t._v("https://example.com/profile.yaml")]),t._v("的配置文件进行预处理，操作如下：")]),t._v(" "),a("ol",[a("li",[t._v("进入 Settings 界面")]),t._v(" "),a("li",[t._v("滚动至 Profiles 栏")]),t._v(" "),a("li",[t._v("点击 Parsers 右边 Edit 打开编辑器，填入："),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("parsers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//example.com/profile.yaml\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n      module.exports.parse = async (raw, { axios, yaml, notify, console }, { name, url, interval, selected }) => {\n        const obj = yaml.parse(raw)\n        return yaml.stringify(obj)\n      }")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("点击编辑器右下角保存按钮")])]),t._v(" "),a("p",[t._v("当配置文件触发刷新（包括自动更新）时，CFW 会调用此方法对下载的配置文件内容进行处理，再写入本地文件中")]),t._v(" "),a("p",[t._v("当然，parsers 也支持使用路径引入代码：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("parsers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//example.com/profile.yaml\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:/Users/cfw/parser.js"')]),t._v("\n")])])]),a("h3",{attrs:{id:"参数说明-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明-2"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),a("p",[t._v("CFW 调用用户定义的"),a("code",[t._v("parse")]),t._v("方法时，会传入 3 个参数，分别是"),a("strong",[t._v("配置文件文本内容")]),t._v("，"),a("strong",[t._v("工具类对象/方法")]),t._v("以及"),a("strong",[t._v("配置文件元数据")])]),t._v(" "),a("h4",{attrs:{id:"配置文件文本内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件文本内容"}},[t._v("#")]),t._v(" 配置文件文本内容")]),t._v(" "),a("p",[t._v("raw 是一个字符串，一般需要用 yaml 库解析成 JavaScript 对象")]),t._v(" "),a("h4",{attrs:{id:"工具类对象-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具类对象-方法"}},[t._v("#")]),t._v(" 工具类对象/方法")]),t._v(" "),a("p",[t._v("包括：")]),t._v(" "),a("ul",[a("li",[t._v("axios：网络请求框架，"),a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("yaml：yaml 框架，"),a("a",{attrs:{href:"https://github.com/eemeli/yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("notify：发出系统通知方法，签名为"),a("code",[t._v("function notify(title:string, message:string, silent:bool)")])]),t._v(" "),a("li",[t._v("console：日志输出至文件，方便调试，在 Settings 界面中 Parser 设置下方打开")]),t._v(" "),a("li",[t._v("homeDir：Home Directory 目录")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("除了以上工具类，在使用"),a("code",[t._v(".js")]),t._v("文件时，也可以通过"),a("code",[t._v("npm")]),t._v("引入第三方模块")])]),t._v(" "),a("h4",{attrs:{id:"配置文件元数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件元数据"}},[t._v("#")]),t._v(" 配置文件元数据")]),t._v(" "),a("p",[t._v("元数据为 JavaScript 对象，包括：")]),t._v(" "),a("ul",[a("li",[t._v("name：名称")]),t._v(" "),a("li",[t._v("url：下载地址")]),t._v(" "),a("li",[t._v("interval：更新周期")]),t._v(" "),a("li",[t._v("selected：策略组选择缓存，数组")]),t._v(" "),a("li",[t._v("mode：模式缓存")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("元数据在配置文件首次下载时只有 url 参数")])]),t._v(" "),a("h3",{attrs:{id:"返回说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明")]),t._v(" "),a("p",[a("code",[t._v("parse")]),t._v("方法需要返回一个字符串，CFW 会将返回的字符串存入对应的配置文件中")]),t._v(" "),a("h2",{attrs:{id:"多处理器及正则匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多处理器及正则匹配"}},[t._v("#")]),t._v(" 多处理器及正则匹配")]),t._v(" "),a("h3",{attrs:{id:"正则匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则匹配"}},[t._v("#")]),t._v(" 正则匹配")]),t._v(" "),a("p",[t._v("上面例子中，使用"),a("code",[t._v("url")]),t._v("匹配配置文件地址，如果一个处理器需要处理多个配置文件，也可以使用正则表达式进行匹配，使用关键字"),a("code",[t._v("reg")]),t._v("设置")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("parsers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("reg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//test.com.+$ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 正则匹配域名")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("yaml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prepend-rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DOMAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("test.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DIRECT\n")])])]),a("h3",{attrs:{id:"多处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多处理器"}},[t._v("#")]),t._v(" 多处理器")]),t._v(" "),a("p",[t._v("parser 定义的数组支持多个处理器从上至下按顺序执行，例如：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("parsers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("reg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//test.com.+$ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一个执行的parser")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:/Users/cfw/parser.yaml"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//example.com/profile.yaml "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对上一个parser执行的结果进行处理")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:/Users/cfw/parser.js"')]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("file 同时支持 yaml 及 js 格式的文件")])])])}),[],!1,null,null,null);s.default=r.exports}}]);