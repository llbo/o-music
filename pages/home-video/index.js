import {getTopMV} from '../../service/apiVideo'
Page({
    data: {
        topMVs: [],
        hasMore: true
    },
    onLoad (options) {
        this.getTopMVData(0)
    },
    getTopMVData(offset) {
        if (!this.data.hasMore) return
        wx.showNavigationBarLoading()
        getTopMV(offset).then(res => {
            let newData =  this.data.topMVs
            if (offset === 0) {
                newData = res.data
            } else {
                newData = newData.concat(res.data)
            }
            this.setData({topMVs: newData})
            this.setData({hasMore: res.hasMore})
            wx.hideNavigationBarLoading()
            if (offset === 0) {
                wx.stopPullDownRefresh()
            }
        })
    },
    handleVideoItemClick (e) {
        const id = e.currentTarget.dataset.item.id
        console.log('click', id)
        // 页面跳转
        wx.navigateTo({
          url: `/pages/video-detail/index?id=${id}`,
        })
    },
    onPullDownRefresh () {
        this.getTopMVData(0)
    },
    onReachBottom () {
        if (!this.data.hasMore) return
        this.getTopMVData(this.data.topMVs.length)
    }
})