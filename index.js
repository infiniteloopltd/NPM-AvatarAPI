const axios = require('axios');

function getProviders()
{
  const customPromise = new Promise((resolve, reject) => {
 	axios.get('https://www.avatarapi.com/v2/providers.aspx')
	  .then(res => {
		resolve(res.data);
	  })
	  .catch(err => {
		reject(err);
	  });
  });
  return customPromise
}

function getCredit(username,password)
{
   const customPromise = new Promise((resolve, reject) => {
 	axios.post('https://avatarapi.com/v2/credits.aspx',{username:username,password:password})
	  .then(res => {
		resolve(res.data);
	  })
	  .catch(err => {
		reject(err);
	  });
  });
  return customPromise
}

function search(username, password, email, provider = null) {
  const customPromise = new Promise((resolve, reject) => {
    const params = { username, password, email };
    if (provider) {
      params.provider = provider;
    }
    axios.post('https://avatarapi.com/v2/api.aspx', params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
  return customPromise;
}

module.exports = {getProviders,getCredit,search };