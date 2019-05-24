import config from './config';

const ApiService = {

  getCats() {
    return fetch(`${config.API_ENDPOINT}/cats`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

}

export default ApiService;