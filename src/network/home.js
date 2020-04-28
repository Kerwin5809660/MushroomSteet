import  {request} from './request'

export function getHomeMultidata(){
  return request({
    url:'api/data/home/multidata/multidata.json'
  })
}

//响应式拦截


