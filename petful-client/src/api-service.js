import config from './config';
//import mainUser from './routes/main-user'

const ApiService = {

  getCats() {
    return fetch(`${config.API_ENDPOINT}/cats`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteCat() {
    return fetch(`${config.API_ENDPOINT}/cats`, {
      method: 'DELETE'
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    ) 
  },

  getUsers() {
    return fetch(`${config.API_ENDPOINT}/users`)
      .then(res => 
         (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postUser() {
    return fetch(`${config.API_ENDPOINT}/users/Main_User`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
    .catch(err => console.log(err))
  },

  deleteUser() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'DELETE'
    })
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  },
  
  getDogs() {
    return fetch(`${config.API_ENDPOINT}/dogs`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteDog() {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      method: 'DELETE'
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )   
  }
}

export default ApiService;