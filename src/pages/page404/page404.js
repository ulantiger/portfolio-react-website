import React from 'react'
import {Link} from 'react-router-dom'
import './page404.css'

export default () => {
    return (
            <div className="err404" >
                <h1>error: 404 </h1>
                <h1>page not found!</h1>
                <img src="image/err404.png" alt="" />

                <h3> <Link to="/" >
                    Back to Homepage
                    </Link>
                </h3>
            </div>
    )
}

