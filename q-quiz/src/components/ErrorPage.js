import React from 'react'
import { useRouteError } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrownOpen } from '@fortawesome/free-regular-svg-icons'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center flex-column'>
            <FontAwesomeIcon icon={faFaceFrownOpen} style={{ fontSize: "200px", color: "#00b5ca" }} />
            {
                error && (
                    <div className='text-center pb-5'>
                        <div className='fs-1 text-danger'>{error.status}</div>
                        <div className='fs-3'>{error.statusText || error.message}</div>
                    </div>
                )
            }
        </div>
    )
}

export default ErrorPage