(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{170:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("Under the hood, this class uses the "),e("a",{attrs:{href:"https://mail-mime-parser.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mail Mime Parser"),e("OutboundLink")],1),t._v(" package to parse the incoming email MIME and access it.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("This method will return the emails HTML content.")]),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("This method will return the emails text content.")]),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("Returns the subject of the email.")]),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("Returns the senders email address.")]),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("Returns the name of the sender.")]),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("Returns an array containing all recipient emails and names.")]),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("Returns an array containing all cc emails and names.")]),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("Returns an array containing all attachments.")]),t._v(" "),e("p",[t._v("For example, to store all attachments to a file on a Laravel storage:")]),t._v(" "),t._m(15),t._m(16),t._v(" "),e("p",[t._v("Returns the raw "),e("code",[t._v("ZBateson\\MailMimeParser\\Message")]),t._v(" message object, if you want to do additional tasks with the mail. Please refer to the "),e("a",{attrs:{href:"https://mail-mime-parser.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mail Mime Parser documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),e("p",[t._v("To reply to the inbound email, you can use the "),e("code",[t._v("reply")]),t._v(" method. It receives a "),e("a",{attrs:{href:"https://laravel.com/docs/5.7/mail#generating-mailables",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Mailable"),e("OutboundLink")],1),t._v(" as a parameter, where you can customize the email that will be sent as a response.")]),t._v(" "),t._m(20),t._m(21),t._v(" "),e("p",[t._v("In addition to replying the incoming emails, you may also want to forward the email to other recipients after your automatic processing is done:")]),t._v(" "),t._m(22),e("p",[t._v("This method accepts either an array of email addresses, a user object or an email string.")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),e("p",[t._v("You can leverage Laravel's scheduler to run the clean up command now and then.")]),t._v(" "),t._m(27)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"handling-inbound-emails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-inbound-emails"}},[this._v("#")]),this._v(" Handling Inbound Emails")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Once one of your mailboxes matches an incoming email, you have access to the "),a("code",[this._v("InboundEmail")]),this._v(" object that references this email. This class has a lot of convenience methods for you, to access the email content.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"available-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-methods"}},[this._v("#")]),this._v(" Available methods")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[this._v("#")]),this._v(" id()")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If your incoming email has a "),a("code",[this._v("Message-Id")]),this._v(" header field, you can access the unique message ID using "),a("code",[this._v("$email->id()")]),this._v(". If no such header field exists, a random id will be generated.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[this._v("#")]),this._v(" date()")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Returns a "),a("code",[this._v("Carbon")]),this._v(" object of the emails "),a("code",[this._v("Date")]),this._v(" header value.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[this._v("#")]),this._v(" html()")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[this._v("#")]),this._v(" text()")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"subject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[this._v("#")]),this._v(" subject()")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[this._v("#")]),this._v(" from()")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"fromname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fromname"}},[this._v("#")]),this._v(" fromName")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to"}},[this._v("#")]),this._v(" to()")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"cc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cc"}},[this._v("#")]),this._v(" cc()")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"attachments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attachments"}},[this._v("#")]),this._v(" attachments()")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$email")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachments")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$attachment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$filename")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$attachment")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFilename")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$attachment")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("saveContent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("storage_path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$filename")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[this._v("#")]),this._v(" message()")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"responding-to-emails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#responding-to-emails"}},[this._v("#")]),this._v(" Responding to emails")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The "),a("code",[this._v("InboundEmail")]),this._v(" class also has two methods to make it easy for you to either reply or forward the incoming email in your application.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"replying"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replying"}},[this._v("#")]),this._v(" Replying")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("Mailbox"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sender@domain.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("InboundEmail "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$email")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$email")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("reply")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FeedbackReceived")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"forwarding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forwarding"}},[this._v("#")]),this._v(" Forwarding")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("Mailbox"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sender@domain.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("InboundEmail "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$email")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$email")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'recipient@otherdomain.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"storing-emails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storing-emails"}},[this._v("#")]),this._v(" Storing emails")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("By default, this package stores all matched incoming emails in your database. You can define the number of days, these emails will remain in your application in the "),a("code",[this._v("config/mailbox.php")]),this._v(" file.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("To automatically remove older emails, this package provides an artisan command "),a("code",[this._v("mailbox:clean")]),this._v(".")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Running this command will result in the deletion of all inbound emails that are older than the number of days specified in the "),a("code",[this._v("store_incoming_emails_for_days")]),this._v(" setting of the config file.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//app/Console/Kernel.php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("schedule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Schedule "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$schedule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$schedule")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'mailbox:clean'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("daily")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);a.default=n.exports}}]);