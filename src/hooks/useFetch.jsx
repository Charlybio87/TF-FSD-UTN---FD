import { useState } from "react"

export const useFetch = (api_url, params) => {
  
  const [Loading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const callFetch = async () => {
    const response = await fetch(api_url, params)
    const responseData = await response.json()
    setData(responseData)
    setIsLoading(false)
  }
  try {
    callFetch()
  } 
  catch (error) {
    setError(error)
  }

  return {
    Loading, data, error
  }
}
