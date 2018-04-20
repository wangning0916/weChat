//index.js
var app = getApp();
Page({
  data: {
      count: 0, 
      name:"jackson",  
      id:1,
      border:"1px solid #ff0000",
      show:false,
      num1:1,
      num2:2,
      object:{
          age:12
      },
      flag:'weixin',
      array:[1,2,3,4,5],
      array2: [[1,2,3],[4,5,6],[7,8,9]],
      tem1:{firstName:'Li',lastName:'Lei'},
      tem2:{firstName:'Li2',lastName:'Lei2'},
      tem3:{firstName:'Li3',lastName:'Lei3'}
  },
  onLoad:function(){
    console.log("页面加载时触发onLoad")
  },
  onReady:function(){
    console.log("页面渲染完成触发onReady")
  },
  onShow:function(){
    console.log("页面显示时触发onShow") 
  },
  onHide:function(){
      console.log("页面隐藏是触发onHide")
  },
  onUnload:function(){
      console.log("页面卸载是触发onUnload")
  },
  onPullDownRefresh:function(){
    console.log("用户下拉是触发onPullDownRefresh")
  },
  onShareAppMessage:function(){
      console.log("右上角转发时触发onShareAppMessage")
  },
  //自定义函数
  countClick:function(){
    this.setData({
      count: this.data.count + 1
    });  
  },
  tap1:function(){
      console.log("tap1");
  },
  tap2: function () {
      console.log("tap2");
  },
  tap3: function () {
      console.log("tap3");
  },
  tap4: function (e) {
      console.log(e);
  },
  tap5: function (e) {
      console.log(e);
  },
  //自定义数据
  customData:{
      name:'jack'
  }
})
