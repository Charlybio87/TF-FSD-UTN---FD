const solicitarProductos = async () => {
  const URL_API_PRODUCTS = 'https://tf-fsd-utn-fd.vercel.app/data/products.json' // Ver donde se esta ejecutando

  const respuestaHttp = await fetch(URL_API_PRODUCTS,
      {
          method: 'GET'
      }
  )
  const resultado = await respuestaHttp.json()
  return resultado
}


export default solicitarProductos