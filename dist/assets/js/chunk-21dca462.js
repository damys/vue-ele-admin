(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21dca462"],{5442:function(e,r,s){"use strict";var t=s("97f6"),o=s.n(t);o.a},"97f6":function(e,r,s){},dd7b:function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"login"},[s("div",{staticClass:"login-title"},[e._v("登录管理系统")]),s("el-form",{ref:"ruleForm",staticClass:"login-form",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0px"}},[s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{attrs:{placeholder:"用户名","prefix-icon":"el-icon-user",autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"密码","prefix-icon":"el-icon-key",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),s("el-button",{staticClass:"login-submit",attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("登录")]),s("p",{staticClass:"login-tips"},[e._v("测试：admin,123456")])],1)],1)])},o=[],a={components:{},data:function(){return{ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:12,message:"长度在 3 到 12 字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:12,message:"长度在 6 到 12 字符",trigger:"blur"}]}}},created:function(){var e=this;document.onkeydown=function(r){var s;s=void 0===window.event?r.keyCode:window.event.keyCode,13===s&&e.submitForm("ruleForm")}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return r.$message({message:"登录失败",type:"warning",duration:500}),!1;r.requestLogin()?(r.$message({message:"登录成功",type:"success",duration:1e3}),setTimeout(function(){localStorage.setItem("username",r.ruleForm.username),r.$router.push("/")},1e3)):r.$message({message:"用户名或密码错误",type:"error",duration:1e3})})},requestLogin:function(){return"admin"===this.ruleForm.username&&"123456"===this.ruleForm.password}}},n=a,i=(s("5442"),s("2877")),u=Object(i["a"])(n,t,o,!1,null,"51beaf23",null);r["default"]=u.exports}}]);