import oRequest from './index'
export function getBanners() {
  return oRequest.get("/banner", {
    type: 2
  })
}

export function getRankings(id) {
  // return oRequest.get("/top/list", {
  //   idx
  // })
  return oRequest.get("/playlist/detail", {
    id
  })
}

// cat -> category 类别
export function getSongMenu(cat="全部", limit=6, offset=0) {
  return oRequest.get("/top/playlist", {
    cat,
    limit,
    offset
  })
}

/**
 * 获取歌曲详情
 * @param {*} id 
 */
export function getSongMenuDetail(id) {
  return oRequest.get("/playlist/detail", {
    id
  })
}