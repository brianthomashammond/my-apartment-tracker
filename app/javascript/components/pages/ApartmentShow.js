import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ApartmentShow extends Component {

    render() {
        const { apartment } = this.props
        return (
            <>
                <div className="show-body">
                    <h3>{apartment.street}</h3>
                    <p>{apartment.city}, {apartment.state}</p>
                    <p>Manager Name: {apartment.manager}</p>
                    <p>Manager Email: {apartment.email}</p>
                    <p>Price: ${apartment.price}</p>
                    <p>Bedrooms: {apartment.bedrooms}</p>
                    <p>Bathrooms: {apartment.bathrooms}</p>
                    <p>Pets allowed?: {apartment.pets}</p>
                    <div className="form-button-wrapper">
                        {!this.props.logged_in &&
                            <Link to={"/apartmentindex"} className="button">
                                Go to All Listings
                            </Link>
                        }
                        {this.props.logged_in &&
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