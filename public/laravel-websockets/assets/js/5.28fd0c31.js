(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{176:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"custom-websocket-handlers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-websocket-handlers"}},[t._v("#")]),t._v(" Custom WebSocket Handlers")]),t._v(" "),s("p",[t._v('While this package\'s main purpose is to make the usage of either the Pusher JavaScript client or Laravel Echo as easy as possible, you are not limited to the Pusher protocol at all.\nThere might be situations where all you need is a simple, bare-bone, WebSocket server where you want to have full control over the incoming payload and what you want to do with it - without having "channels" in the way.')]),t._v(" "),s("p",[t._v("You can easily create your own custom WebSocketHandler class. All you need to do is implement Ratchets "),s("code",[t._v("Ratchet\\WebSocket\\MessageComponentInterface")]),t._v(".")]),t._v(" "),s("p",[t._v("Once implemented, you will have a class that looks something like this:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Ratchet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ConnectionInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Ratchet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("RFC6455"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Messaging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Ratchet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WebSocket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessageComponentInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyCustomWebSocketHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageComponentInterface")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onOpen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConnectionInterface "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO: Implement onOpen() method.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onClose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConnectionInterface "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO: Implement onClose() method.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConnectionInterface "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO: Implement onError() method.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ConnectionInterface "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MessageInterface "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO: Implement onMessage() method.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("In the class itself you have full control over all the lifecycle events of your WebSocket connections and can intercept the incoming messages and react to them.")]),t._v(" "),s("p",[t._v("The only part missing is, that you will need to tell our WebSocket server to load this handler at a specific route endpoint. This can be achieved using the "),s("code",[t._v("WebSocketsRouter")]),t._v(" facade.")]),t._v(" "),s("p",[t._v("This class takes care of registering the routes with the actual webSocket server. You can use the "),s("code",[t._v("webSocket")]),t._v(" method to define a custom WebSocket endpoint. The method needs two arguments: the path where the WebSocket handled should be available and the fully qualified classname of the WebSocket handler class.")]),t._v(" "),s("p",[t._v("This could, for example, be done inside your "),s("code",[t._v("routes/web.php")]),t._v(" file.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("WebSocketsRouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("webSocket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/my-websocket'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MyCustomWebSocketHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Once you've added the custom WebSocket route, be sure to restart our WebSocket server for the changes to take place.")])])}],!1,null,null,null);e.default=n.exports}}]);