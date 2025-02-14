import React from 'react'
import ENVIROMENT from '../utils/constants/enviroment'
import { getAuthenticatedHeaders } from '../fetching/customHeaders'
import { useFetch } from '../hooks/useFetch'


const HomeScreen = () => {

    const { data: product_response, loading: product_loading, error: product_response_error } = useFetch(ENVIROMENT.API_URL + '/api/products',{
        method: 'GET',
        headers: getAuthenticatedHeaders()
    })
    return (
        <div>
            <h1>Bienvenidos</h1>
            <div>
                <h2>Espacio de Productos</h2>
                <div>
                    
                </div>
            </div>

        </div>
    )
}

export default HomeScreen


// const HomeScreen = () => {
//     const {products_state, products_loading_state, products_error_state} = useProducts()
//     //Necesito el is_authenticated_state

//   return (
//     <div>
//         <Link to={'/product/new'}>
//             Crear producto
//         </Link>
//         <h1>Bienvenido a Brand name</h1>
//         {/* 
//         Ver si el usuario tiene rol de admin y si tiene rol de admin mostrar el boton de crear producto
//         este boton te llevara a /product/new y nos mostrara un formulario para crear el producto
//         */}
//         <div>
//             {
//                 products_loading_state
//                 ? <span>Cargando</span>
//                 : (
//                     products_error_state
//                     ? <span>{products_error_state}</span>
//                     : <div>
//                         {
//                             products_state.map(
//                                 (product) => {
//                                     return (
//                                       <Product product={product} key={product._id}/>
//                                     )
                                    
//                                 }
//                             )

//                         }
//                     </div>
//                 )
//             }
//         </div>
//     </div>
//   )
// }

// export default HomeScreen