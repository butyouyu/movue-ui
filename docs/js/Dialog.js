(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Dialog"],{"80b0":function(t,i,o){"use strict";o.r(i);var l=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("mo-page",{attrs:{title:"mo-dialog"}},[o("div",{staticClass:"demo-title"},[t._v("mo-dialog")]),o("div",{staticClass:"button-row"},[o("mo-button",{attrs:{type:"primary"},on:{click:function(i){t.visible=!0}}},[t._v("默认弹框")]),o("mo-button",{attrs:{type:"primary"},on:{click:function(i){t.visible1=!0}}},[t._v("内容弹框")])],1),o("div",{staticClass:"demo-title"},[t._v("指令弹窗")]),o("div",{staticClass:"button-row"},[o("mo-button",{attrs:{type:"primary"},on:{click:t.alert}},[t._v("alert")]),o("mo-button",{attrs:{type:"primary"},on:{click:t.alert1}},[t._v("alert 知道了")]),o("mo-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("confirm")])],1),o("mo-dialog",{attrs:{title:t.title},model:{value:t.visible,callback:function(i){t.visible=i},expression:"visible"}}),o("mo-dialog",{attrs:{title:t.title,buttons:t.buttons},model:{value:t.visible1,callback:function(i){t.visible1=i},expression:"visible1"}},[o("div",[t._v("文本内容")])])],1)},e=[],n={data:function(){return{visible:!1,visible1:!1,title:"这是标题",buttons:[{title:"取消"},{title:"知道了",type:"primary"}]}},methods:{alert:function(){var t=this;this.$alert("alert 弹窗").then((function(){t.$toast("click ok")}))},alert1:function(){var t=this;this.$alert("alert 弹窗","知道了").then((function(){t.$toast("click 知道了")}))},confirm:function(){var t=this;this.$confirm("确定要删除嘛？").then((function(){t.$toast("click ok")})).catch((function(){t.$toast("click cancel")}))}}},a=n,s=o("2877"),c=Object(s["a"])(a,l,e,!1,null,null,null);i["default"]=c.exports}}]);