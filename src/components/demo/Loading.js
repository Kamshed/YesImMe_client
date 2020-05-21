/* ------------ main imports ------------ */
import React from 'react'


/* ------------ other imports ------------ */


/* ------------ styles ------------ */
import './Loading.css'


function Loading(props) {
    console.log(props)
    return (
        <div id="loadin" className="loading demo-loading" name="loading">
            <div className="loadingContianer">
                <p className="loading-info">Loading...</p>
            </div>
            
        </div>
    )
}

export default Loading