import {getTopMV} from '../../service/apiVideo'
Page({
    data: {
        topMVs: []
    },
    onLoad: function (options) {
        getTopMV(0).then(res => {
            this.setData({topMVs: res.data.data})
        })
 
    }
})