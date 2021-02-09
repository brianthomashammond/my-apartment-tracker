import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import image from '../assets/grant-lemons-jTCLppdwSEc-unsplash.jpg'

export default class ApartmentShow extends Component {
    render() {
        const { apartment, current_user, logged_in } = this.props
        return (
            <>
                <div className="show-body" style={{ backgroundImage: `url(${image})` }}>
                    <h3>{apartment.street}</h3>
                    <p>{apartment.city}, {apartment.state}</p>
                    <p>Manager Name: {apartment.manager}</p>
                    <p>Manager Email: {apartment.email}</p>
                    <p>Price: ${apartment.price}</p>
                    <p>Bedrooms: {apartment.bedrooms}</p>
                    <p>Bathrooms: {apartment.bathrooms}</p>
                    <p>Pets allowed?: {apartment.pets}</p>
                    <div className="form-button-wrapper">
                        {logged_in && 
                        current_user.id === apartment.user_id &&
                            <>
                                <Link to={`/apartmentedit/${apartment.id}`} className="button">
                                    Edit this Listing
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </>
        )
    }
}