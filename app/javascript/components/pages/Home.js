import React, { Component } from 'react'

import image from '../assets/grant-lemons-jTCLppdwSEc-unsplash.jpg'

export default class Home extends Component {
    render() {
        return (
            <>
                <div id="home" style={{ backgroundImage: `url(${image})` }}>
                </div>
            </>
        )
    }
}