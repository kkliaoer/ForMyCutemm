// pages/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '梦泪', value: '梦泪' },
      { name: '萌泪', value: '萌泪' },
      { name: '萌妹', value: '萌妹' },
      { name: '猛妹', value: '猛妹' },
    ]
  },

  radioChange: function (e) {
    if(e.detail.value=="萌妹"){
        wx.showModal({
          title: "萌酱猪猪看这里辣！",
          content: "恭喜你获得了一块🍰碎片哦！",
          // success: function(res){
          //   if(res.confirm){
          //     wx.showToast({
          //       title:"耶🐒！"
          //     })
          //   }
          // }
        })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})