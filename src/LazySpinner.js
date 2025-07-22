import React from 'react'

function LazySpinner() {
    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
            <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default LazySpinner