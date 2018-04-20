var app = getApp();
Page({
    data:{
        userInfo: {}
    },
	onLoad:function(){        
        app.getUserInfo(function(userInfo){
            this.setData({
                userInfo: userInfo
            });
        })       
    }
});