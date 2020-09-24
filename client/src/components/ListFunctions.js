import axios from 'axios'
var x;
export const getList = () => {
  return axios
    .get('/search', {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      var x = res.data
      return x
    })
    console.log(x)
}
