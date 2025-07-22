import React, { useEffect, useState } from 'react'
import LazySpinner from './LazySpinner'

function Products() {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => { return res.json() })
            .then((data) => {
                setTimeout(() => {
                    setData(data)
                    setLoad(true)
                }, 2000);
            })
    }, [])


    return (
        load ? (<section>
            <div className="container my-5">
                <div className="row" id="productRow">
                    {data.map((value) => {
                        return (
                            <div key={value.id} className="col-md-4 col-lg-3 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img src={value.image} className="card-img-top p-3" style={{ height: 200, objectFit: 'contain' }} alt="${product.title}" />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-truncate" >{value.title}</h5>
                                        <p className="card-text">{value.rating.count}</p>
                                        <p className="fw-bold mb-2">{value.price}</p>
                                        <a href="#" className="btn btn-primary mt-auto">{value.category}</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>) : (<LazySpinner></LazySpinner>)
    )
}

export default Products