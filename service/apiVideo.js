import oRequest from './index'
export function getTopMV(offset, limit = 10) {
  return oRequest.get("/top/mv", {
    offset,
    limit
  })
}

/**
 * 请求MV播放地址
 * @param {number} id 
 */
export function getMVURL(id) {
  return oRequest.get("/mv/url", {
    id
  })
}

/**
 * 请求mv详情
 * @param {number} mvid 
 */
export function getMVDetail(mvid) {
  return oRequest.get("/mv/detail", {
    mvid
  })
}

/**
 * 请求相似视频
 * @param {number} id 
 */
export function getRelatedVideo(id) {
  return oRequest.get("/related/allvideo", {
    id
  })
}