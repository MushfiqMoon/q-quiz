import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
        {
            error && (
                <div>
                    <div>{error.status}</div>
                    <div>{error.statusText || error.message}</div>
                </div>
            )
        }
        <p></p>
    </div>
  )
}

export default ErrorPage