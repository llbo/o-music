import oRequest from './index'
export function getBanners() {
  return oRequest.get("/banner", {
    type: 2
  })
}