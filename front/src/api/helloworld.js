import request from "../utils/request";

export function getmsg(params) {
  return request({
    url: `/api`,
    method: 'get',
    params
  })
}