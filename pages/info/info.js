//info.js 描述个人信息页面
var app = getApp();
Page({
    data: {
        info: [{ key: '姓名', value: 'zhanglinyu' },
        { key: '性别', value: '女' },
        { key: '年龄', value: '24' },
        { key: '职业', value: '前端工程师一枚' }
        ],
        userInfo: {},

    },
    preview(e) {//点击头像实现预览功能
        var url = e.currentTarget.dataset.img;
        var _this = this;
        wx.previewImage({
            current: '个人照片', 
            urls: [url]
        });
    },
    onLoad() {
        var _this = this;
        app.getUserInfo(function (userInfo) {
            //更新数据  
            //不要直接设置_this.data.会造成视图没有更新
            _this.setData({
                userInfo: userInfo
            })
        })
    }
});