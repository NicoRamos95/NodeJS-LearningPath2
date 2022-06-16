import { useEffect, useState } from 'react'

const Countries = (props) => {
    const [countries, setCountries] = useState([])
    useEffect ( () => { 
        fetch('https://restcountries.com/v3.1/all')
        .then(respuesta => respuesta.json())
        .then(data => { setCountries(data)})
    },[])
    return(
            countries.map( (country, index) => {
                return ( 
                    <option className="text-center" key={index} value={country.name.common}>{country.name.common}</option>)
            })
        )
}

export default Countries