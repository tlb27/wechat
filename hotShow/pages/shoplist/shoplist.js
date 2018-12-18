// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],//商品列表
    pageIndex:0,//商品分页页码
    pageSize:6,//页大小
    hasMore:true//是否还有更多数据
  },
  loadMore:function(){
    //判断是否有下一页数据
    if(this.data.hasMore==false)return
//加载更多的数据
//发送ajax请求
wx.request({
  url: 'http://127.0.0.1:3000/newslist',
  data:{pno:++this.data.pageIndex,
  pageSize:this.data.pageSize},
  success:(result)=>{
    // console.log(result)
    var pageCount=result.data.pageCount;
    var pno=this.data.pageIndex;
    var data=this.data.list.concat(result.data.data);
    //获取返回数据
    //保存list列表
    var flag=this.data.pageIndex<pageCount;
    this.setData({
      list:data,
      hasMore:flag,
      pageIndex:pno
    })
  }
})
    wx.showLoading({
      title: '下载加载数据',
    });
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
 
 
  onLoad: function (options) {
    this.loadMore()
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
    console.log(111)
    this.loadMore()
    console.log(this.data.pageIndex)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})