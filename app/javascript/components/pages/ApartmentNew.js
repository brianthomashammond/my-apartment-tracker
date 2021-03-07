import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";

import image from '../assets/grant-lemons-jTCLppdwSEc-unsplash.jpg'

const ApartmentNew = ({ createNewApartment, current_user}) => {
    const [success, setSuccess] =  useState(false)
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [usstate, setUsstate] = useState("")
    const [manager, setManager] = useState("")
    const [email, setEmail] = useState("")
    const [price, setPrice] = useState("")
    const [bedrooms, setBedrooms] = useState("")
    const [bathrooms, setBathrooms] = useState("")
    const [pets, setPets] = useState("no")

    let form = {
                street: street,
                city: city,
                state: usstate,
                manager: manager,
                email: email,
                price: price,
                bedrooms: bedrooms,
                bathrooms: bathrooms,
                pets: pets,
                user_id: current_user.id,
    }

    const handleChange = (e) => {
        console.log(form)
        console.log(e)
        form[e.target.name] = e.target.value;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createNewApartment(form)
        setSuccess(true)
    }

    useEffect(() => {
        setSuccess(false)
    }, [])

    return (
        <>
            <div className="form-background" style={{ backgroundImage: `url(${image})` }}>
                <div className="body-container">
                    <div className="form">
                        <Form>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label>Street</Label>
                                        <Input
                                        type="text"
                                        name="street"
                                        onChange={e => setStreet(e.target.value)}
                                        value={form.street}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="9">
                                    <FormGroup>
                                        <Label>City</Label>
                                        <Input
                                        type="text"
                                        name="city"
                                        onChange={e => setCity(e.target.value)}
                                        value={form.city}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label>State</Label>
                                        <Input
                                        type="select"
                                        name="state"
                                        onChange={e => setUsstate(e.target.value)}
                                        value={form.state}
                                        >
                                            <option selected disabled hidden></option>
                                            <option>AL</option>
                                            <option>AK</option>
                                            <option>AZ</option>
                                            <option>AR</option>
                                            <option>CA</option>
                                            <option>CO</option>
                                            <option>CT</option>
                                            <option>DE</option>
                                            <option>FL</option>
                                            <option>GA</option>
                                            <option>HI</option>
                                            <option>ID</option>
                                            <option>IL</option>
                                            <option>IN</option>
                                            <option>IA</option>
                                            <option>KS</option>
                                            <option>KY</option>
                                            <option>LA</option>
                                            <option>ME</option>
                                            <option>MD</option>
                                            <option>MA</option>
                                            <option>MI</option>
                                            <option>MN</option>
                                            <option>MS</option>
                                            <option>MO</option>
                                            <option>MT</option>
                                            <option>NE</option>
                                            <option>NV</option>
                                            <option>NH</option>
                                            <option>NJ</option>
                                            <option>NM</option>
                                            <option>NY</option>
                                            <option>NC</option>
                                            <option>ND</option>
                                            <option>OH</option>
                                            <option>OK</option>
                                            <option>OR</option>
                                            <option>PA</option>
                                            <option>RI</option>
                                            <option>SC</option>
                                            <option>SD</option>
                                            <option>TN</option>
                                            <option>TX</option>
                                            <option>UT</option>
                                            <option>VT</option>
                                            <option>VA</option>
                                            <option>WA</option>
                                            <option>WV</option>
                                            <option>WI</option>
                                            <option>WY</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label>Manager</Label>
                                        <Input
                                        type="text"
                                        name="manager"
                                        onChange={e => setManager(e.target.value)}
                                        value={form.manager}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input
                                        type="email"
                                        name="email"
                                        onChange={e => setEmail(e.target.value)}
                                        value={form.email}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label>Bedrooms</Label>
                                        <Input
                                        type="select"
                                        name="bedrooms"
                                        onChange={e => setBedrooms(e.target.value)}
                                        value={form.bedrooms}
                                        >
                                            <option selected disabled hidden></option>
                                            <option>Studio</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>Bathrooms</Label>
                                        <Input
                                        type="select"
                                        name="bathrooms"
                                        onChange={e => setBathrooms(e.target.value)}
                                        value={form.bathrooms}
                                        >
                                            <option selected disabled hidden></option>
                                            <option>.5</option>
                                            <option>1</option>
                                            <option>1.5</option>
                                            <option>2</option>
                                            <option>2.5</option>
                                            <option>3</option>
                                            <option>3.5</option>
                                            <option>4</option>
                                            <option>4.5</option>
                                            <option>5</option>
                                            <option>5.5</option>
                                            <option>6</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <Row>
                                        <FormGroup>
                                            <Label>Pets</Label>
                                            <Row>
                                                <Col>
                                                    <div class="custom-control custom-radio custom-radio-black radio-row">
                                                        <input
                                                        type="radio"
                                                        name="pets"
                                                        value="Yes"
                                                        checked={form.pets === "Yes"}
                                                        onChange={e => setPets(e.target.value)}
                                                        class="custom-control-input custom-control-input-black"
                                                        id="customCheck1"
                                                        />
                                                        <label
                                                        class="custom-control-label"
                                                        for="customCheck1"
                                                        >
                                                            Yes
                                                        </label>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div class="custom-control custom-radio custom-radio-black">
                                                        <input
                                                        type="radio"
                                                        name="pets"
                                                        value="No"
                                                        checked={form.pets === "No"}
                                                        onChange={e => setPets(e.target.value)}
                                                        class="custom-control-input custom-control-input-black"
                                                        id="customCheck2"
                                                        />
                                                        <label
                                                        class="custom-control-label"
                                                        for="customCheck2"
                                                        >
                                                            No
                                                        </label>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                    </Row>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>Price</Label>
                                        <Input
                                        type="text"
                                        name="price"
                                        onChange={e => setPrice(e.target.value)}
                                        value={form.price}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <div className="form-button-wrapper">
                                <Button
                                name="submit"
                                className="button"
                                onClick={handleSubmit}
                                >
                                    Add a New Listing
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            {success && <Redirect to="/myapartmentindex" />}
        </>
    )
}

export default ApartmentNew