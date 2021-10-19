(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{444:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tun-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tun-模式"}},[t._v("#")]),t._v(" TUN 模式")]),t._v(" "),a("p",[t._v("对于不遵循系统代理的软件，TUN 模式可以接管其流量并交由 CFW 处理，在 Windows 中，TUN 模式性能比 TAP 模式好")]),t._v(" "),a("h2",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),a("p",[t._v("启动 TUN 模式需要进行如下操作：")]),t._v(" "),a("ol",[a("li",[t._v("点击"),a("code",[t._v("General")]),t._v("中"),a("code",[t._v("Service Mode")]),t._v("右边"),a("code",[t._v("Manage")]),t._v("，在打开窗口中安装服务模式，安装完成应用会自动重启，Service Mode 右边地球图标变为"),a("code",[t._v("绿色")]),t._v("即安装成功（无法安装参考："),a("RouterLink",{attrs:{to:"/contents/questions.html#service-mode-无法安装-windows"}},[t._v("这里")]),t._v("）")],1),t._v(" "),a("li",[t._v("在使用的配置文件中加入如下内容：")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enhanced-mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("host\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nameserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 8.8.8.8 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 真实请求DNS，可多设置几个")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 114.114.114.114\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# interface-name: WLAN # 出口网卡名称，或者使用下方的自动检测")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gvisor "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 system 需要 Clash Premium 2021.05.08 及更高版本")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dns-hijack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 198.18.0.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请勿更改")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auto-route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auto-detect-interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自动检测出口网卡")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTICE")]),t._v(" "),a("p",[t._v("从"),a("code",[t._v("Clash Premium 2021.05.08")]),t._v("开始，使用"),a("code",[t._v("auto-*")]),t._v("代替"),a("code",[t._v("macOS-auto-*")]),t._v("，往后数个版本将暂时兼容旧字段名。此版本同时添加了"),a("code",[t._v("system stack")]),t._v("支持。"),a("a",{attrs:{href:"https://github.com/Dreamacro/clash/releases/tag/premium",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("enhanced-mode")]),t._v("设置为"),a("code",[t._v("fake-ip")]),t._v("时，会出现系统检测到网卡无法联网，微软系 APP 无法登陆使用等问题，可以通过添加"),a("code",[t._v("fake-ip-filter")]),t._v("解决：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enhanced-mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fake"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ip\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nameserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 114.114.114.114\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fake-ip-filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dns.msftncsi.com"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.msftncsi.com"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.msftconnecttest.com"')]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("TUN 模式更推荐使用 redir-host 模式")])]),t._v(" "),a("h2",{attrs:{id:"macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" macOS")]),t._v(" "),a("p",[t._v("启动 TUN 模式需要进行如下操作：")]),t._v(" "),a("ol",[a("li",[t._v("点击"),a("code",[t._v("General")]),t._v("中"),a("code",[t._v("Service Mode")]),t._v("右边"),a("code",[t._v("Manage")]),t._v("，在打开窗口中安装服务模式，安装完成应用会自动重启，Service Mode 右边地球图标变为"),a("code",[t._v("绿色")]),t._v("即安装成功")]),t._v(" "),a("li",[t._v("在使用的配置文件中加入如下内容：")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enhanced-mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("host\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nameserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 114.114.114.114 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 真实请求DNS，可多设置几个")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# interface-name: en0 # 出口网卡名称，或者使用下方的自动检测")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" system "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 gvisor")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dns-hijack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DNS劫持设置为系统DNS")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 114.114.114.114 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可任意设置，但为了保证CFW关闭后能不影响联网，建议设置真实能访问的DNS服务器")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auto-route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auto-detect-interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自动检测出口网卡")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTICE")]),t._v(" "),a("p",[t._v("从"),a("code",[t._v("Clash Premium 2021.05.08")]),t._v("开始，使用"),a("code",[t._v("auto-*")]),t._v("代替"),a("code",[t._v("macOS-auto-*")]),t._v("，往后数个版本将暂时兼容旧字段名。"),a("a",{attrs:{href:"https://github.com/Dreamacro/clash/releases/tag/premium",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("dns-hijack 不可以劫持局域网地址的 DNS，如 192.168.0.0/16，请务必手动设置系统 DNS")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("若要将此 Mac 设置为代理网关，打开 IP 转发即可：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo sysctl -w net.inet.ip.forwarding=1\n")])])]),a("p",[t._v("这种做法将在机器下次重启后失效，如果想要永久保存，编辑文件"),a("code",[t._v("/etc/sysctl.conf")]),t._v("，配置下面变量：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("net.inet.ip.forwarding=1\nnet.inet6.ip6.forwarding=1\n")])])]),a("p",[t._v("或者使用 LaunchDaemons 进行配置：")]),t._v(" "),a("ol",[a("li",[t._v("新建 "),a("code",[t._v("network.forwarding.plist")])])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("plist")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("PUBLIC")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-//Apple//DTD PLIST 1.0//EN"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.apple.com/DTDs/PropertyList-1.0.dtd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plist")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Label"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Network Forwarding"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("UserName"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("root"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("GroupName"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("wheel"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("ProgramArguments"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/usr/sbin/sysctl"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("-w"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("net.inet.ip.forwarding=1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("net.inet6.ip6.forwarding=1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("KeepAlive"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("RunAtLoad"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plist")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("将文件添加进 "),a("code",[t._v("/Library/LaunchDaemons")])]),t._v(" "),a("li",[a("code",[t._v("sudo launchctl load /Library/LaunchDaemons/network.forwarding.plist")])])])]),t._v(" "),a("h2",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),a("p",[t._v("启动 TUN 模式需要进行如下操作：")]),t._v(" "),a("ol",[a("li",[t._v("点击"),a("code",[t._v("General")]),t._v("中"),a("code",[t._v("Service Mode")]),t._v("右边"),a("code",[t._v("Manage")]),t._v("，在打开窗口中安装服务模式，安装完成应用会自动重启（某些系统需要手动重启 APP），Service Mode 右边地球图标变为"),a("code",[t._v("绿色")]),t._v("即安装成功")]),t._v(" "),a("li",[t._v("在使用的配置文件中加入如下内容：")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enhanced-mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("host\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nameserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 114.114.114.114 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 真实请求DNS，可多设置几个")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" system "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或 gvisor")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dns-hijack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DNS劫持设置为系统DNS")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 1.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请勿更改")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Linux 下一般不需要设置"),a("code",[t._v("interface-name")]),t._v("字段")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Service Mode 安装脚本使用 "),a("a",{attrs:{href:"https://github.com/Kr328/clash-premium-installer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kr328/clash-premium-installer"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"配置文件参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件参考"}},[t._v("#")]),t._v(" 配置文件参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Dreamacro/clash/wiki/Premium-Core-Features",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clash Wiki"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技巧"}},[t._v("#")]),t._v(" 技巧")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("你可以使用"),a("RouterLink",{attrs:{to:"/contents/mixin.html"}},[t._v("mixin")]),t._v("将上面内容合并至所有配置文件中，并使用 Mixin 开关 TUN 模式")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);