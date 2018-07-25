//app.js
var map = require('./utils/amap-wx.js')
App({
  onLaunch: function () {
    
  },
  getLogin:function(){
    var that=this;
    return new Promise(function(resove,rej){
      // 登录
      wx.login({
        success: res => {
          resove();
        }
      })
    })
  },
  getAddress:function(){
    var that=this;
    return new Promise(function(res,rej){
      var mapObj = new map.AMapWX({ key: '044aa4f78c98d8450a1711b4932bf857' });
      mapObj.getRegeo({
        success(data) {
          that.globalData.province = data[0].regeocodeData.addressComponent.province;
          res(that.globalData)
        }
      })
    })
  },
  getUser:function(){
    var that=this;
    return new Promise(function(res,req){
      wx.getUserInfo({
        success(data){
          console.log(data)
          that.globalData.userInfo = data.userInfo.nickName
        }
      })
    })
  },
  updata:function(){
    var that=this;
    return new Promise(function(res,req){
      that.getLogin().then(that.getUser().then(that.getAddress().then(function(){
        res(that.globalData)
      })))
    })
  },
  globalData: {
    userInfo: '',
    province:''
  }
})