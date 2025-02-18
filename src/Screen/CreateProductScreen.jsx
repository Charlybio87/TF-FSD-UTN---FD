import React from 'react'
import useForm from '../hooks/useForm'
import ENVIROMENT from '../utils/constants/enviroment'
import { getAuthenticatedHeaders } from '../fetching/customHeaders'
import { useNavigate } from 'react-router-dom'

const CreateProductScreen = () => {
    const navigate = useNavigate()
    const { handleChangeInput, formState} = useForm({
		title: '',
		price: '',
        stock: '',
        description: '',
        category: '',
        seller_id:''
        // image_base64: ''
	})
    const handleSubmitNewProduct = async (event) => {
        event.preventDefault()
        const response = await fetch(ENVIROMENT.API_URL + '/api/products', {
            method: 'POST',
            body: JSON.stringify(formState),
            headers: getAuthenticatedHeaders()
        })
        const data = await response.json()
        console.log(data)
        navigate('/')
    }

  return (
    <div>
        <h1>Crear producto</h1>
        <form onSubmit={handleSubmitNewProduct}>
            <div>
                <label htmlFor='title'>Ingrese el titulo:</label>
                <input name="title" id="title" placeholder='Ingrese el titulo' onChange={handleChangeInput} value={formState.title}/>
            </div>
            <div>
                <label htmlFor="price"> Ingrese el precio:</label>
                <input name="price" id="price" placeholder='Ingrese el precio' onChange={handleChangeInput} value={formState.price}/>
            </div>
            <div>
                <label htmlFor="stock">Ingrese el stock:</label>
                <input name="stock" id="stock" placeholder='Ingrese el stock' onChange={handleChangeInput}
                value={formState.stock}/>
            </div>
            <div>
                <label htmlFor="description">Ingrese la descripcion:</label>
                <input name="description" id="description" placeholder='Ingrese la descripcion' onChange={handleChangeInput} value={formState.description}/>
            </div>
            <div>
                <label htmlFor="category">Ingrese la categoria:</label>
                <input name="category" id="category" placeholder='Ingrese la categoria' onChange={handleChangeInput} value={formState.category} />
            </div>
            <div>
                <label htmlFor="seller_id">Ingrese la seller_id:</label>
                <input name="seller_id" id="seller_id" placeholder='Ingrese la seller_id' onChange={handleChangeInput} value={formState.seller_id}/>
            </div>
            {/* <div>
                <label htmlFor="image">Seleccione una imagen:</label>
                {formState.image_base64 && <img src={formState.image_base64} alt="" width={200}/>}
                <input type='file' name="image_base64" id="image" onChange={(evento) => handleChangeImage(evento, 'image_base64')}/>
            </div> */}
            <button type="submit">Crear producto</button>
        </form>
    </div>
  )
}

export default CreateProductScreen