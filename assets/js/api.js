export default {
  getTodoById(axios, id) {
    return axios.$get(`todos/${id}`)
  }
}