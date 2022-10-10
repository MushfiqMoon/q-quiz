import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrownOpen } from '@fortawesome/free-regular-svg-icons'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center flex-column'>
            <FontAwesomeIcon icon={faFaceFrownOpen} style={{ fontSize: "200px", color: "#00b5ca" }} />
            <h3 className='mt-3 t-primary'>Opps..</h3>
            {
                error && (
                    <div className='text-center mt-3 pb-5'>
                        <div className='fs-1 text-danger'>{error.status}</div>
                        <div className='fs-3'>{error.statusText || error.message}</div>
                    </div>
                )
            }
            <Link to="/" className='btn btn-outline-info fw-bold'>Go to Home</Link>
        </div>
    )
}

export default ErrorPage