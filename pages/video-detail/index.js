// pages/video-detail/index.js
import {getMVURL, getMVDetail, getRelatedVideo} from '../../service/apiVideo'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvURLInfo: {},
    mvDetail: {},
    relatedVideos: [],
    danmuList: [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    const id = options.id
    this.getPageData(id)
  },

  getPageData(id) {
    getMVURL(id).then(res => {
      console.log(res)
      this.setData({mvURLInfo: res.data})
    } )
    getMVDetail(id).then(res => {
      console.log(res)
      this.setData({mvDetail: res.data})
    } )
    getRelatedVideo(id).then(res => {
      console.log(res)
      this.setData({relatedVideos: res.data})
    } )
  }
})