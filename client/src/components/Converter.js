import React, { useState } from 'react'
import '../styles/Convert.css'

export default function Converter() {
    const [ml, setMl] = useState(0)

    const submitHandler = (e) => {
        e.preventDefault()
        setMl((e.target[0].value * 30).toFixed(2))
    }

    return (
        <div className="converter">
            <form onSubmit={submitHandler}>
                <div className="form-row row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Enter in oz"/>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Convert oz to ml</button>
                    </div>
                    <div className="col result">
                        <input value={ml + 'ml'} className="form-control" id="disabledInput" placeholder="Result in ml" disabled/>
                    </div>
                </div>
            </form>
        </div>
    )
}
