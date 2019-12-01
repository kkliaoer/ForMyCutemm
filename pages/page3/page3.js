// pages/page3/page3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '1', value: '星星我好冷啊 我是不是快死了' },
      { name: '2', value: '耶 就这个辣' },
      { name: '3', value: '等我死了 如果韩信出新皮肤了 记得烧给我' },
      { name: '4', value: '和直男讲话好累' },
    ]
  },

  radioChange: function (e) {
    if(e.detail.value=="4"){
        wx.showModal({
          title: "萌酱猪猪看这里辣！",
          content: "恭喜你获得了一块🍭碎片哦！",
          // success: function(res){
          //   if(res.confirm){
          //     wx.showToast({
          //       title:"大笨蛋🐮！"
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