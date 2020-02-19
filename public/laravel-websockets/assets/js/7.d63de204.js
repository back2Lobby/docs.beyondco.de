(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{178:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("Since most of the web's traffic is going through HTTPS, it's also crucial to secure your WebSocket server. Luckily, adding SSL support to this package is really simple.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),e("p",[t._v("But this is only a subset of all the available configuration options.\nThis packages makes use of the official PHP "),e("a",{attrs:{href:"http://php.net/manual/en/context.ssl.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSL context options"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("So if you find yourself in the need of adding additional configuration settings, take a look at the PHP documentation and simply add the configuration parameters that you need.")]),t._v(" "),e("p",[t._v("After setting up your SSL settings, you can simply (re)start your WebSocket server using:")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),e("p",[t._v("Since the SSL configuration can vary quite a lot, depending on your setup, let's take a look at the most common approaches.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),e("p",[t._v("You also need to disable SSL verification.")]),t._v(" "),t._m(16),e("p",[t._v("Last but not least, you still need to configure Laravel Echo to also use WSS on port 6001.")]),t._v(" "),t._m(17),t._m(18),t._v(" "),e("p",[t._v("Alternatively, you can also use a proxy service - like Nginx, HAProxy or Caddy - to handle the SSL configurations and proxy all requests in plain HTTP to your echo server.")]),t._v(" "),e("p",[t._v("A basic Nginx configuration would look like this, but you might want to tweak the SSL parameters to your liking.")]),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),e("p",[t._v("To have the websockets be served at the same location and port as your other web content, Nginx can be taught to map incoming requests based on their type to special sub-locations.")]),t._v(" "),t._m(22),e("p",[t._v("This configuration is useful if you do not want to open multiple ports or you are restricted to which ports are already opened on your server. Alternatively, a second Nginx location can be used on the server-side, while the Pusher configuration "),e("a",{attrs:{href:"https://github.com/pusher/pusher-js#wspath",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("wsPath")]),e("OutboundLink")],1),t._v(" can be used on the client-side ("),t._m(23),t._v(").")]),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),e("p",[t._v("You know you've reached this limit of your Nginx error logs contain similar messages to these:")]),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),e("p",[e("a",{attrs:{href:"https://caddyserver.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Caddy"),e("OutboundLink")],1),t._v(" can also be used to automatically obtain a TLS certificate from Let's Encrypt and terminate TLS before proxying to your echo server.")]),t._v(" "),e("p",[t._v("An example configuration would look like this:")]),t._v(" "),t._m(32),t._m(33)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"ssl-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssl-support"}},[this._v("#")]),this._v(" SSL Support")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The SSL configuration takes place in your "),s("code",[this._v("config/websockets.php")]),this._v(" file.\nThe default configuration has a SSL section that looks like this:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'ssl'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * Path to local certificate file on filesystem. It must be a PEM encoded file which\n     * contains your certificate and private key. It can optionally contain the\n     * certificate chain of issuers. The private key also may be contained\n     * in a separate file specified by local_pk.\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'local_cert'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * Path to local private key file on filesystem in case of separate files for\n     * certificate (local_cert) and private key.\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'local_pk'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * Passphrase with which your local_cert file was encoded.\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'passphrase'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("php artisan websockets:serve\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"client-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-configuration"}},[this._v("#")]),this._v(" Client configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("When your SSL settings are in place and working, you still need to tell Laravel Echo that it should make use of it.\nYou can do this by specifying the "),s("code",[this._v("encrypted")]),this._v(" property in your JavaScript file, like this:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Echo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"laravel-echo"')]),t._v("\n\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pusher "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pusher-js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Echo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Echo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    broadcaster"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pusher'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    key"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your-pusher-key'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    wsHost"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    wsPort"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6001")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    disableStats"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    encrypted"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"server-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-configuration"}},[this._v("#")]),this._v(" Server configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("When broadcasting events from your Laravel application to the WebSocket server, you also need to tell Laravel to make use of HTTPS instead of HTTP. You can do this by setting the "),s("code",[this._v("scheme")]),this._v(" option in your "),s("code",[this._v("config/broadcasting.php")]),this._v(" file to "),s("code",[this._v("https")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'pusher'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'driver'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'pusher'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'key'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_KEY'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'secret'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_SECRET'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'app_id'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_ID'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'options'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'cluster'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_CLUSTER'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'host'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'127.0.0.1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'port'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6001")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'scheme'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'https'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"usage-with-laravel-valet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-with-laravel-valet"}},[this._v("#")]),this._v(" Usage with Laravel Valet")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Laravel Valet uses self-signed SSL certificates locally.\nTo use self-signed certificates with Laravel WebSockets, here's how the SSL configuration section in your "),s("code",[this._v("config/websockets.php")]),this._v(" file should look like.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Make sure that you replace "),e("code",[t._v("YOUR-USERNAME")]),t._v(" with your Mac username and "),e("code",[t._v("VALET-SITE.TLD")]),t._v(" with the host of the Valet site that you're working on right now. For example "),e("code",[t._v("laravel-websockets-demo.test")]),t._v(".")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'ssl'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * Path to local certificate file on filesystem. It must be a PEM encoded file which\n     * contains your certificate and private key. It can optionally contain the\n     * certificate chain of issuers. The private key also may be contained\n     * in a separate file specified by local_pk.\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'local_cert'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/Users/YOUR-USERNAME/.config/valet/Certificates/VALET-SITE.TLD.crt'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * Path to local private key file on filesystem in case of separate files for\n     * certificate (local_cert) and private key.\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'local_pk'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/Users/YOUR-USERNAME/.config/valet/Certificates/VALET-SITE.TLD.key'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * Passphrase with which your local_cert file was encoded.\n     */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'passphrase'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'verify_peer'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Next, you need to adjust the "),s("code",[this._v("config/broadcasting.php")]),this._v(" file to make use of a secure connection when broadcasting messages from Laravel to the WebSocket server.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'pusher'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'driver'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'pusher'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'key'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_KEY'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'secret'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_SECRET'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'app_id'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_ID'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'options'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'cluster'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_CLUSTER'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'host'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'127.0.0.1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'port'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6001")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'scheme'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'https'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'curl_options'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURLOPT_SSL_VERIFYHOST")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURLOPT_SSL_VERIFYPEER")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Echo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Echo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    broadcaster"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pusher'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    key"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your-pusher-key'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    wsHost"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    wsPort"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6001")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    wssPort"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6001")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    disableStats"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"usage-with-a-reverse-proxy-like-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-with-a-reverse-proxy-like-nginx"}},[this._v("#")]),this._v(" Usage with a reverse proxy (like Nginx)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("server {\n  listen        443 ssl;\n  listen        [::]:443 ssl;\n  server_name   socket.yourapp.tld;\n\n  # Start the SSL configurations\n  ssl                  on;\n  ssl_certificate      /etc/letsencrypt/live/socket.yourapp.tld/fullchain.pem;\n  ssl_certificate_key  /etc/letsencrypt/live/socket.yourapp.tld/privkey.pem;\n\n  location / {\n    proxy_pass             http://127.0.0.1:6001;\n    proxy_read_timeout     60;\n    proxy_connect_timeout  60;\n    proxy_redirect         off;\n\n    # Allow the use of websockets\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection 'upgrade';\n    proxy_set_header Host $host;\n    proxy_cache_bypass $http_upgrade;\n  }\n}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can now talk HTTPS to "),s("code",[this._v("socket.yourapp.tld")]),this._v(". You would configure your "),s("code",[this._v("config/broadcasting.php")]),this._v(" like the example above, treating your socket server as an "),s("code",[this._v("https")]),this._v(" endpoint.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"same-location-for-websockets-and-web-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#same-location-for-websockets-and-web-contents"}},[this._v("#")]),this._v(" Same location for websockets and web contents")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('map $http_upgrade $type {\n  default "web";\n  websocket "ws";\n}\n\nserver {\n  # Your default configuration comes here...\n\n  location / {\n    try_files /nonexistent @$type;\n  }\n  \n  location @web {\n    try_files $uri $uri/ /index.php?$query_string;\n  }\n\n  location @ws {\n    proxy_pass             http://127.0.0.1:6001;\n    proxy_set_header Host  $host;\n    proxy_read_timeout     60;\n    proxy_connect_timeout  60;\n    proxy_redirect         off;\n\n    # Allow the use of websockets\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection \'upgrade\';\n    proxy_set_header Host $host;\n    proxy_cache_bypass $http_upgrade;\n  }\n}\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("em",[this._v("note: "),s("code",[this._v('"pusher-js": ">=4.2.2"')]),this._v(" is required for this configuration option")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("server {\n  # Your default configuration comes here...\n\n  location /ws {\n    proxy_pass             http://127.0.0.1:6001;\n    proxy_set_header Host  $host;\n    proxy_read_timeout     60;\n    proxy_connect_timeout  60;\n    proxy_redirect         off;\n\n    # Allow the use of websockets\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection 'upgrade';\n    proxy_set_header Host $host;\n    proxy_cache_bypass $http_upgrade;\n  }\n}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"nginx-worker-connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-worker-connections"}},[this._v("#")]),this._v(" Nginx worker connections")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Note that you might need to increase the amount of "),s("code",[this._v("worker_connections")]),this._v(" in Nginx. Your WebSocket connections will now be sent to Nginx, which in turn will send those along to the websocket server.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("By default, that will have a sane limit of 1024 connections. If you are expecting more concurrent connections to your WebSockets, you can increase this in your global "),s("code",[this._v("nginx.conf")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("events {\n    worker_connections  1024;\n}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("[alert] 1024 worker_connections are not enough while connecting to upstream\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Remember to restart your Nginx after you've modified the "),s("code",[this._v("worker_connections")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"example-using-caddy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-using-caddy"}},[this._v("#")]),this._v(" Example using Caddy")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("socket.yourapp.tld {\n    rewrite / {\n        if {>Connection} has Upgrade\n        if {>Upgrade} is websocket\n        to /websocket-proxy/{path}?{query}\n    }\n\n    proxy /websocket-proxy 127.0.0.1:6001 {\n        without /special-websocket-url\n        transparent\n        websocket\n    }\n    \n    tls youremail.com\n}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Note the "),s("code",[this._v("to /websocket-proxy")]),this._v(", this is a dummy path to allow the "),s("code",[this._v("proxy")]),this._v(" directive to only proxy on websocket connections. This should be a path that will never be used by your application's routing. Also, note that you should change "),s("code",[this._v("127.0.0.1")]),this._v(" to the hostname of your websocket server. For example, if you're running in a Docker environment, this might be the container name of your websocket server.")])}],!1,null,null,null);s.default=a.exports}}]);