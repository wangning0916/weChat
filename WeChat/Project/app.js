App({
 
  getUserInfo: function (cb) {
      if (this.globalData.userInfo) {
          typeof cb == "function" && cb(this.globalData.userInfo)
      } else {
          wx.login({
              success: function (res) {
                  wx.getUserInfo({
                      success: function (res) {
                          console.log(resizeTo)
                          this.globalData.userInfo = res.userInfo;
                          typeof cb == "function" && cb(that.globalData.userInfo)
                      }
                  })
              }
          })
      }
  }, 
  globalData:{
      userInfo:null
  } 
})
