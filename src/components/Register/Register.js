import React, { Component } from "react";

// primea OnRouteChange ca param. trebuie sa modific this.bla bla

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            passsword: ''
        }
    }
    onChangeRegisterName = (event) => {
        this.setState({ name: event.target.value });
        console.log(this.state.name);
    }
    onChangeRegisterEmail = (event) => {
        this.setState({ email: event.target.value });
        console.log(this.state.email);
    }
    onChangeRegisterPassword = (event) => {
        this.setState({ password: event.target.value });
        console.log(this.state.password);
    }

    clickSignUp = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.passsword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                    console.log(user);
                }
            })
    }
    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
                <main className="pa4 black-80 ">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
                            <legend className="f1 fw6 ph0 mh0">REGISTER</legend>
                            <div className="mt3 ">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input
                                    onChange={this.onChangeRegisterName}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                            </div>
                            <div className="mt3 ">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    onChange={this.onChangeRegisterEmail}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3 ">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    onChange={this.onChangeRegisterPassword}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                            </div>

                            <div className="">
                                <input
                                    onClick={this.clickSignUp}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Sign up" />
                            </div>
                            <div className="lh-copy mt3 center pointer grow">
                                <p
                                    onClick={() => onRouteChange('signin')}

                                    className="f6 link dim black db"
                                >
                                    Have an account?
                                </p>
                            </div>

                        </fieldset>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;