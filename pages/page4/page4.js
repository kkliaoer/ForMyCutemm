// pages/page4/page4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '1', value: '星星' },
      { name: '2', value: '鼠标' },
      { name: '3', value: '手套' },
      { name: '4', value: '萌妹' },
    ]
  },

  radioChange: function (e) {
    if(e.detail.value=="1"){
        wx.showModal({
          title: "萌酱猪猪看这里辣！",
          content: "恭喜你集齐了三个碎片哦，获得了星星的神秘宝贝！🎁正在路上辣！要随时看消息袄！哈哈哈哈哈哈！！！天天开心辣！",
          success: function(res){
            if(res.confirm){
              wx.showToast({
                title:"生日快乐辣！"
              })
            }
          }
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