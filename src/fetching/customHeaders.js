//Una funcion que me devuelve los headers de una consulta autenticada
const getAuthenticatedHeaders = () => {
  const access_token = sessionStorage.getItem('access_token')
  return { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token
  }
}

export {getAuthenticatedHeaders}