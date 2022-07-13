import axios from "axios"; 
 
 export async function getToken(json) {

  const response = await axios
    .post('https://localhost:7229/api/auth/login', json, {
      headers: {
        'content-type' : 'application/json'
      }
    })

  return response.data.token
  
    // const response = await fetch('https://localhost:7229/api/auth/login', {
    //     method: 'Post',
    //     body: json,
    //     headers: {
    //         'content-type' : 'application/json'
    //     }
    // })
    // const data = await response.json();

    // return data.token
}

export function getUserFromToken(token) {
  const userInfo = JSON.parse(atob(token.split('.')[1]));
  return {
    name: userInfo['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
  }
}