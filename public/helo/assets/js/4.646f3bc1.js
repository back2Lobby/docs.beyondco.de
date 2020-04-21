(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{165:function(e,t,i){"use strict";i.r(t);var a=i(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("The easiest way to catch incoming emails in HELO is by using local mailboxes. Local mailboxes are created automatically, when HELO receives an incoming email from your application. There is no need to manually create these mailboxes.")]),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("Once HELO receives an incoming email from one of your applications, it will send out a notification and show you the email details in the application UI. Here is how such an example email might look like:")]),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("The user interface gives you all the information about the incoming email, such as the sender, recipient, possible CC, and BCC addresses.")]),e._v(" "),i("p",[e._v("You can get more information about the incoming email, by looking at the different tabs. They include information such as the raw email message, the SMTP headers or spam report information.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("Because of this, HELO also allows you to manually toggle the link checker feature. You can enable or disable the behaviour in HELOs settings.")]),e._v(" "),e._m(7),e._v(" "),i("p",[e._v("When HELO receives an incoming email, it will automatically perform a SpamAssassin check on the email message. The SpamAssassin score will tell you how likely it is, that your email will end up in the users spam box.\nPlease be aware that this score is only one indicator and is not a guarantee that your email will go through. When you actually send out your email a lot of additional factors come into play, when receiving email servers calculate their own spam score - such as the server that your email was sent from.")]),e._v(" "),i("p",[e._v("The spam report will then give you a detailed information of the SpamAssassin scoring.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),i("p",[e._v("HELO allows you to easily test how your email will look like on multiple different email clients. This is done by making use of the great "),i("a",{attrs:{href:"https://testi.at",target:"_blank",rel:"noopener noreferrer"}},[e._v("Testi@"),i("OutboundLink")],1),e._v(" service - it requires that you have a Testi account. Testi includes some tests in its free version, so you can check out if you think that the service is helpful to you.")]),e._v(" "),i("p",[e._v("Once you login with your Testi credentials, you can select to add new tests, choose which email clients to test your email on, and you will afterwards see the results in the HELO UI:")]),e._v(" "),e._m(10)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"local-mailboxes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local-mailboxes","aria-hidden":"true"}},[this._v("#")]),this._v(" Local Mailboxes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"email-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#email-details","aria-hidden":"true"}},[this._v("#")]),this._v(" Email details")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/email-details.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"link-checker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#link-checker","aria-hidden":"true"}},[this._v("#")]),this._v(" Link checker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("HELO comes with a built-in link checker, that makes it very easy to determine if your outgoing emails contain any broken or just wrong links. The link checker is enabled by default and will try to automatically perform a "),t("code",[this._v("HEAD")]),this._v(" request to all of your email links. If the "),t("code",[this._v("HEAD")]),this._v(" request does not succeed, it will then try and perform a "),t("code",[this._v("GET")]),this._v(" request instead.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/link-checker.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Because HELO will try and perform a "),t("code",[this._v("GET")]),this._v(" request, depending on your email content, this might not be the desired behaviour. Think about email verification links that only work one time. When HELO performs the "),t("code",[this._v("GET")]),this._v(" request to those links, the email will be marked as verified and additional requests will fail.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"spam-report"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spam-report","aria-hidden":"true"}},[this._v("#")]),this._v(" Spam report")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/spam-report.png",alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/testing.png",alt:""}})])}],!1,null,null,null);s.options.__file="mailboxes.md";t.default=s.exports}}]);