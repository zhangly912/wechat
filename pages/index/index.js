//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    describle: "my name is zhanglinyu"
  },
  //事件处理函数
  bindViewTap: function () {
    wx.switchTab({
      url: '../logs/logs'
    });
    //注意 navigateTo/switchTab/redirectTo/navigateBack的区别
  },
  goInfoTap: function () {
    wx.switchTab({
      url: '../info/info',
      success: function (res) {
        console.log("跳转成功");
      },
      fail: function (res) {
        console.log("跳转失败");
      },
      complete: function (res) {
        console.log("无论成功失败都会执行");
      }
    })
  },
  getLocation: function () {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
      }
    })
  },
  onPullDownRefresh: function () {
    //下拉刷新的监听
    wx.stopPullDownRefresh();//
  },
  onShareAppMessage: function () {
    return {
      title: '分享我的信息',
      path: '/pages/info/info',
      success: function (res) {
        // 分享成功
      },
      fail: function (res) {
        // 分享失败
      }

    }
  },
  onLoad: function () {
    console.log('onLoad')
    var _this = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      _this.setData({
        userInfo: userInfo
      })
    });
    //
    _this.getLocation();
    wx.setNavigationBarTitle({
      title: '这是首页'
    })

  }
})
