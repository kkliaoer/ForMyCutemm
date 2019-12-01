// pages/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '1', value: '斋藤飞鸟' },
      { name: '2', value: '石原里美' },
      { name: '3', value: '小松菜奈' },
      { name: '4', value: '斋藤飞虎' },
    ]
  },

  radioChange: function (e) {
    if(e.detail.value=="4"){
        wx.showModal({
          title: "萌酱猪猪看这里辣！",
          content: "恭喜你获得了一块🍧碎片哦！",
          // success: function(res){
          //   if(res.confirm){
          //     wx.showToast({
          //       title:"略略略🐷！"
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