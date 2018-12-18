// pages/news/news.js
Page({

  click1: function (e) {
    wx.getLocation({//获取当前经纬度
      type: 'wgs84', 
      success: function (res) {
    wx.openLocation({
      latitude: 30.2768600000,
      longitude: 120.1367000000,
      scale: 18,
      name: '七欣天品蟹轩',
      address: '中国浙江省杭州市西湖区教工路88号'
    })
      }
    })
  },
  click2: function (e) {
    wx.openLocation({
      latitude: 30.3044860000,
      longitude: 120.1514960000,
      scale: 18,
      name: '海底捞',
      address: '中国浙江省杭州市拱墅区上塘路458号'
    })

  },
  click3: function (e) {
    wx.openLocation({
      latitude: 30.2793880000,
      longitude: 120.0964660000,
      scale: 18,
      name: '杭州爆鸡',
      address: '中国浙江省杭州市西湖区'
    })

  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  getNewsList:function(){
    wx.request({
      url:"http://127.0.0.1:3000/newslist1",
      success:(res)=>{
        this.setData({list:res.data})
      }
    });
  },
  onLoad: function (options) {
    this.getNewsList();
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