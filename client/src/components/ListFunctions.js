import axios from 'axios'

export const getList = () => {
  return axios
    .get('/search', {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      return res.data
    })
}


// export const getList = () => {
//   return axios
//     .get('/search?item=apple', {
//       headers: { 'Content-Type': 'application/json' }
//     })
//     .then(res => {
//       console.log(res.datal);
//       return res.data
//     })
// }
