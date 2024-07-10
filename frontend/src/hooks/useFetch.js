import { useState , useEffect } from "react";


const useFetch =(url)=>{

    const[data , setdata] = useState([])
    const[error , setError] = useState(null)
    const[loading , setloading] = useState(false)

    useEffect(()=>{
        const fetchData = async()=>{
            setloading(true)

            try {
                const res= await fetch(url)

                if(!res.ok){
                    setError('failed to fetch')
                }
                const result = await res.json()
                setdata(result.data)
                setloading(false)
            } catch (err) {
                setError(err.message)
                setloading(false)
            }
        };

        fetchData()
    } , [url])
    return{
        data,
        error,
        loading
    }
}

export default useFetch