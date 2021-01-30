import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";

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
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNewApartment(this.state.form);
    this.setState({ success: true });
  };

  render() {
    return (
      <>
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
                      type="text"
                      name="state"
                      onChange={this.handleChange}
                      value={this.state.form.state}
                    />
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
                      type="number"
                      name="bedrooms"
                      onChange={this.handleChange}
                      value={this.state.form.bedrooms}
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Bathrooms</Label>
                    <Input
                      type="number"
                      name="bathrooms"
                      onChange={this.handleChange}
                      value={this.state.form.bathrooms}
                    />
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
    );
  }
}
