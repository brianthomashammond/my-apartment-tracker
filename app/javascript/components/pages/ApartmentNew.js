import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";

import image from '../assets/grant-lemons-jTCLppdwSEc-unsplash.jpg'

export default class ApartmentNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                street: "",
                city: "",
                state: "",
                manager: "",
                email: "",
                price: "",
                bedrooms: "",
                bathrooms: "",
                pets: "no",
                user_id: this.props.current_user.id,
            },
            success: false,
        }
    }

    handleChange = (e) => {
        let { form } = this.state;
        form[e.target.name] = e.target.value;
        this.setState({ form: form });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createNewApartment(this.state.form);
        this.setState({ success: true });
    };

    render() {
        return (
            <>
                <div className="body-container" style={{ backgroundImage: `url(${image})` }}>
                    <div className="form">
                        <Form>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label>Street</Label>
                                        <Input
                                        type="text"
                                        name="street"
                                        onChange={this.handleChange}
                                        value={this.state.form.street}
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
                                        onChange={this.handleChange}
                                        value={this.state.form.city}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label>State</Label>
                                        <Input
                                        type="select"
                                        name="state"
                                        onChange={this.handleChange}
                                        value={this.state.form.state}
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
                                        onChange={this.handleChange}
                                        value={this.state.form.manager}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input
                                        type="email"
                                        name="email"
                                        onChange={this.handleChange}
                                        value={this.state.form.email}
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
                                        onChange={this.handleChange}
                                        value={this.state.form.bedrooms}
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
                                        onChange={this.handleChange}
                                        value={this.state.form.bathrooms}
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
                                                        checked={this.state.form.pets === "Yes"}
                                                        onChange={this.handleChange}
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
                                                        checked={this.state.form.pets === "No"}
                                                        onChange={this.handleChange}
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
                                        onChange={this.handleChange}
                                        value={this.state.form.price}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <div className="form-button-wrapper">
                                <Button
                                name="submit"
                                className="button"
                                onClick={this.handleSubmit}
                                >
                                    Add a New Listing
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                {this.state.success && <Redirect to="/myapartmentindex" />}
            </>
        )
    }
}
