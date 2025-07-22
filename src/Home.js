import React, { useEffect, useState } from 'react'
import LazySpinner from './LazySpinner';

function Home() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {load ? (
        <>
          <section className="d-flex align-items-center justify-content-center text-center text-white min-vh-100" style={{
            background: `
              linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
              url('https://images.unsplash.com/photo-1562158070-57d0f23b6f0d?auto=format&fit=crop&w=1350&q=80') center/cover no-repeat
            `
          }}>
            <div className="container px-3">
              <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">Discover Trends &amp; Tech</h1>
              <p className="lead mb-4 animate__animated animate__fadeInUp">Shop the best in clothing, jewelry, and electronics — all in one place.</p>
              <a href="#products" className="btn btn-danger btn-lg animate__animated animate__fadeInUp">Shop Now</a>
            </div>
          </section>

          
          <section className="py-5 text-center" id="products">
            <div className="container">
              <h2 className="display-5 mb-4">Featured Products</h2>
              <div className="row g-4 justify-content-center">
                <div className="col-sm-6 col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" className="card-img-top" alt="Clothes" style={{ height: '220px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <h5 className="card-title">Stylish Clothes</h5>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" className="card-img-top" alt="Jewelry" style={{ height: '220px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <h5 className="card-title">Elegant Jewelry</h5>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" className="card-img-top" alt="Electronics" style={{ height: '220px', objectFit: 'cover' }} />
                    <div className="card-body">
                      <h5 className="card-title">Latest Electronics</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <LazySpinner/>
      )}
    </>
  );
}

export default Home;
