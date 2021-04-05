import React, { Component } from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import MyApartmentIndex from "./pages/MyApartmentIndex"

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apartments: [],
        }
    }
    
    

    componentDidMount() {
        this.getApartments()
    }

    getApartments = () => {
        fetch("/apartments")
        .then(response => {
            return response.json()
        })
        .then(payload => {
            this.setState({ apartments: payload })
        })
        .catch(errors => {
            console.log("index errors:", errors);
        })
    }

    createNewApartment = async (apartment) => {
        try {
            const response = await fetch("/apartments", {
                body: JSON.stringify(apartment),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
            })
            this.getApartments()
        } catch (errors) {
            console.log("create errors:", errors)
        }
    }

    updateApartment = async (apartment, id) => {
        try {
            const response = await fetch(`/apartments/${id}`, {
                body: JSON.stringify(apartment),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "PATCH"
            })
            if (response.status === 200) {
                this.getApartments()
            }
            return response
        } catch (errors) {
            console.log("edit errors", errors)
        }
    }

    deleteApartment = async (id) => {
        const choice = confirm('Are you sure you want to remove this listing?')
        if (choice === true) {
            try {
                const response = await fetch(`apartments/${id}`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "DELETE"
                })
                this.getApartments()
                return response
            } catch (errors) {
                console.log("delete errors", errors)
            }
        }
    }

    render() {
        const {
            logged_in,
            sign_in_route,
            sign_out_route,
            sign_up_route,
            current_user,
        } = this.props

        const { apartments } = this.state

        return (
            <Router>

                <Header />

                <Switch>
                    {/* HOME */}
                    <Route exact path="/" component={Home} />

                    {/* APARTMENT INDEX */}
                    <Route
                        path="/apartmentindex"
                        render={(props) =>
                            <ApartmentIndex apartments={ apartments } />
                        }
                    />

                    {/*APARTMENT SHOW*/}
                    <Route
                        path="/apartmentshow/:id"
                        render={(props) => {
                            let localid = props.match.params.id
                            let apartment = apartments.find(apartment =>
                                apartment.id === parseInt(localid)
                            )
                        return (
                            <ApartmentShow
                                apartment={ apartment }
                                current_user={ current_user }
                                logged_in={ logged_in }
                            />
                        )
                        }}
                    />

                    {/*APARTMENT NEW*/}
                    {logged_in &&
                        <Route
                            path="/apartmentnew"
                            render={(props) =>
                                <ApartmentNew
                                    createNewApartment={ this.createNewApartment }
                                    current_user={ current_user }
                                />
                            }
                        />
                    }

                    {/*MY APARTMENT INDEX*/}
                    {logged_in &&
                        <Route
                            path="/myapartmentindex"
                            render={(props) => {
                                let user = current_user.id
                                let apartments = this.state.apartments.filter(apartment => 
                                    apartment.user_id === user
                                )

                                return (
                                    <MyApartmentIndex
                                        apartments={ apartments }
                                        deleteApartment={ this.deleteApartment }
                                    />
                                )
                            }}
                        />
                    }

                    {/*APARTMENT EDIT*/}
                    {logged_in &&
                        <Route
                            path="/apartmentedit/:id"
                            render={(props) => {
                                let id = props.match.params.id
                                let apartment = apartments.find(apartment =>
                                    apartment.id === parseInt(id)
                                )

                            return (
                                <ApartmentEdit
                                    updateApartment={ this.updateApartment }
                                    current_user={ current_user }
                                    apartment={ apartment }
                                />
                            )
                            }}
                        />
                    }

                    {/*NOT FOUND*/}
                    <Route component={ NotFound } />
                </Switch>

                <Footer
                    logged_in={ logged_in }
                    sign_in_route={ sign_in_route }
                    sign_out_route={ sign_out_route }
                    sign_up_route={ sign_up_route }
                />
            </Router>
        )
    }
}
