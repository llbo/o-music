// const BASE_URL = 'http://123.207.32.32:9001'
const BASE_URL = 'https://coderwhy-music.vercel.app'

const LOGIN_BASE_URL = "http://123.207.32.32:3000"
// const LOGIN_BASE_URL = "http://localhost:3000"
class ORequest {
    constructor(baseURL) {
      this.baseURL = baseURL
    }
    request (url, method, params) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: this.baseURL + url,
                method: method,
                data: params,
                success: (res) => resolve(res.data),
                fail: reject
              })
        })
    }
    get (url, params) {
      return  this.request(url, 'GET', params)
    }
    post (url, data) {
      return  this.request(url, 'POST', data)
    }
}
const oRequest = new ORequest(BASE_URL)
const hyLoginRequest = new ORequest(LOGIN_BASE_URL)
export default oRequest
export {
  hyLoginRequest
}