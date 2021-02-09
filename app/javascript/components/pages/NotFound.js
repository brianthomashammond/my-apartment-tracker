import React, { Component } from 'react'

import image from '../assets/grant-lemons-jTCLppdwSEc-unsplash.jpg'

export default class NotFound extends Component {
    render() {
        return (
            <>
                <div id="notFound" style={{ backgroundImage: `url(${image})` }}>
                    <div className="index-card">
                        <h3>Selection Not Found</h3>
                        <h3>Please Navigate Below</h3>
                    </div>
                </div>
            </>
        )
    }
}