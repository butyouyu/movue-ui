(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Input"],{"4dff":function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("mo-page",{attrs:{title:"文本框 mo-input"}},[a("div",{staticClass:"demo-title"},[e._v("基础用法")]),a("div",{staticClass:"demo-row"},[a("mo-input",{attrs:{placeholder:"文本框"},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}})],1),a("div",{staticClass:"demo-title"},[e._v("属性配置")]),a("div",{staticClass:"demo-row"},[a("mo-input",{attrs:{placeholder:"密码框",type:"password"},model:{value:e.password,callback:function(l){e.password=l},expression:"password"}}),a("mo-input",{attrs:{label:"label: 标题",placeholder:"通过label配置标题"},model:{value:e.label,callback:function(l){e.label=l},expression:"label"}}),a("mo-input",{attrs:{label:"placeholder",placeholder:"显示placeholder"},model:{value:e.placeholder,callback:function(l){e.placeholder=l},expression:"placeholder"}}),a("mo-input",{attrs:{label:"name: age",placeholder:"表单name属性配置"},model:{value:e.name,callback:function(l){e.name=l},expression:"name"}}),a("mo-input",{attrs:{label:"maxlength: 8",placeholder:"最长可输入8位",maxlength:"8"},model:{value:e.maxlength,callback:function(l){e.maxlength=l},expression:"maxlength"}}),a("mo-input",{attrs:{label:"clearable: false",placeholder:"不显示清除按钮",clearable:!1},model:{value:e.clearable,callback:function(l){e.clearable=l},expression:"clearable"}}),a("mo-input",{attrs:{label:"disabled: true",disabled:"",value:e.value}})],1),a("div",{staticClass:"demo-title"},[e._v("Events")]),a("div",{staticClass:"demo-row"},[a("mo-input",{attrs:{label:"@focus",placeholder:"获得焦点时触发"},on:{focus:function(l){return e.$toast("focus")}},model:{value:e.focus,callback:function(l){e.focus=l},expression:"focus"}}),a("mo-input",{attrs:{label:"@blur",placeholder:"失去焦点时触发"},on:{blur:function(l){return e.$toast("blur")}},model:{value:e.blur,callback:function(l){e.blur=l},expression:"blur"}}),a("mo-input",{attrs:{label:"@clear",placeholder:"点击清空时触发"},on:{clear:function(l){return e.$toast("clear")}},model:{value:e.clear,callback:function(l){e.clear=l},expression:"clear"}}),a("mo-input",{attrs:{label:"@change",placeholder:"失去焦点且值改变时触发"},on:{change:function(l){return e.$toast("change")}},model:{value:e.change,callback:function(l){e.change=l},expression:"change"}})],1)])},o=[],n={data:function(){return{value:"",password:"",label:"",placeholder:"",name:"",maxlength:"",clearable:"",change:"",blur:"",focus:"",clear:""}}},c=n,r=a("2877"),s=Object(r["a"])(c,t,o,!1,null,null,null);l["default"]=s.exports}}]);