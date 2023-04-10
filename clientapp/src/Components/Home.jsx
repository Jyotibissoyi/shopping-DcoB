import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
//import './Products.css'

const Home = () => {
    const navigate = useNavigate()
    const [getData, setGetData] = useState([])
      console.log(getData)
    const getHome = async () => {
        const response = await fetch('http://localhost:3001/getData')
        const data = await response.json()
        setGetData(data.data)
    }

    useEffect(() => {
        getHome()
    }, [])

    const exploreHandler = (product) => {
        navigate('/products/product', { state: { product: product } });
    }
    

    return (
        <div className="container">
            {getData.map((product) => {
                return (
                    <div className='col' key={product.id}>
                        <div className="card h-100" key={product.id}>
                            <img src={product.productImage} className="card-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.price}</p>
                                <button className="btn btn-primary" onClick={() => exploreHandler(product)}>Explore More</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;