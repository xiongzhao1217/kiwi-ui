(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-633e"],{1774:function(e,t,i){},"764d":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"div-content"},[i("h1",[e._v("AutoSelect选择器")]),i("br"),i("h2",[e._v("概述")]),i("br"),i("p",{staticStyle:{"font-size":"14px"}},[e._v("对iview原生Select组件进行二次封装，支持绑定Array渲染组件，原生Select组件的所有特性也被完美继承。")]),i("br"),i("h2",[e._v("代码示例")]),i("br"),i("Card",[i("Row",[i("Col",{staticStyle:{"margin-top":"12px"},attrs:{span:"12"}},[i("Ztree",{ref:"ztree",attrs:{data:e.treeData,setting:e.setting,expand:""}}),i("Divider",{attrs:{orientation:"left"}},[e._v("数据绑定")]),i("div",{staticClass:"example-desc"},[i("p",[e._v("• 使用"),i("code",[e._v("v-model")]),e._v("进行数据双向绑定。")]),i("p",[e._v("• 使用"),i("code",[e._v("mapper")]),e._v("进行"),i("code",[e._v("option")]),e._v("列表数据绑定，接受对象或二维数组类型。")]),i("p",[e._v("• 小伙伴请注意，由于遍历对象的key是无序的，所以如果希望下拉选项顺序固定，需要使用二维数组进行绑定。")])])],1),i("AutoSplit"),i("Col",{attrs:{span:"12"}},[i("CodeView",{attrs:{path:"/component/md/auto-select.md",title:"基本用法","code-style":"iview-code"}})],1)],1),i("div")],1)],1)},n=[],d={data:function(){return{treeData:[{id:1,name:"一级节点1"},{id:2,name:"一级节点2"},{id:3,name:"一级节点3"},{id:4,name:"一级节点4"},{id:5,pid:1,name:"二级节点1-1"},{id:7,pid:2,name:"二级节点2-1"},{id:8,pid:3,name:"二级节点3-1"},{id:9,pid:4,name:"二级节点4-1"}],setting:{showEdit:!0,data:{simpleData:{enable:!0,pIdKey:"pid"}},edit:{showRenameBtn:function(e,t){var i=0!==t.level;return i}}}}},mounted:function(){this.$refs.ztree.loadZtree()}},o=d,r=(i("b4dc"),i("2877")),s=Object(r["a"])(o,a,n,!1,null,null,null);s.options.__file="ztree.vue";t["default"]=s.exports},b4dc:function(e,t,i){"use strict";var a=i("1774"),n=i.n(a);n.a}}]);