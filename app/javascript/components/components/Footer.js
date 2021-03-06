import React from 'react'
import { Nav, NavItem } from 'reactstrap'

const Footer = ({ 
    logged_in,
    sign_in_route,
    sign_out_route,
    sign_up_route,
}) => {
    return (
        <div id="footer">
            <Nav>
                <NavItem>
                    <a href="/">Home</a>
                </NavItem>
                <NavItem>
                    <a href="/apartmentindex">Apartment List</a>
                </NavItem>
                {logged_in &&
                    <>
                        <NavItem>
                            <a href={sign_out_route}>Sign Out</a>
                        </NavItem>
                        <NavItem>
                            <a href="/apartmentnew">Create a New Listing</a>
                        </NavItem>
                        <NavItem>
                            <a href="/myapartmentindex">See My Listings</a>
                        </NavItem>
                    </>
                }
                {!logged_in &&
                    <>
                        <NavItem>
                            <a href={sign_in_route}>Sign In</a>
                        </NavItem>
                        <NavItem>
                            <a href={sign_up_route}>Sign Up</a>
                        </NavItem>
                    </>
                }
            </Nav>
        </div>
    )
}

export default Footer