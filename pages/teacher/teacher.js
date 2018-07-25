// pages/teacher/teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:[
      '天津','北京','上海','深圳'
    ],
    couse:[
      '语文','数学','物理','化学'
    ],
    school:[
      '天津第三中学','实验小学','天津大学附属中学'
    ],
    teacher_list:[
      { id: 'JY0934212', path: 'img/timg1.jpg', teacher: '周老师', couse: '数学、英语', school: '天津大学', is211: true, is985: true, grade:42},
      { id: 'JY04213', path: 'img/timg1.jpg', teacher: '李老师', couse: '体育、英语', school: '天津理工大学大学', is211: false, is985: false, grade: 12 },
      { id: 'JY42314', path: 'img/timg1.jpg', teacher: '张老师', couse: '物理', school: '山西大学', is211: false, is985: true, grade: 64 },
      { id: 'JY032512', path: 'img/timg1.jpg', teacher: '麻老师', couse: '数学、计算机', school: '北京大学', is211: true, is985: false, grade: 89 },
    ],
    defalt_city:'天津',
    defalt_couse:'全部课程',
    defalt_school:'全部学校',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  //自定义函数
  //城市选择改变后的操作
  bindPickerChangeCity(e){
    var that=this;
    that.setData({
      defalt_city:that.data.city[e.detail.value]
    })
  },
  //课程改编后的操作
  bindPickerChangeCouse(e) {
    var that = this;
    that.setData({
      defalt_couse: that.data.couse[e.detail.value]
    })
  },
  //学校改变后的操作
  bindPickerChangeSchool(e) {
    var that = this;
    that.setData({
      defalt_school: that.data.school[e.detail.value]
    })
  },
  toNext(){
    wx.navigateTo({
      url: '../teacher_detail/teacher_detail',
    })
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