import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            city:'',
            state:'',
            country:'',
            pincode:'',
            mobile:'',
        }
    }

    onFirstNameChange = (event) => {
        this.setState({ firstname: event.target.value })
    }
    onLastNameChange = (event) => {
        this.setState({ lastname: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onCityNameChange = (event) => {
        this.setState({ city: event.target.value })
    }
    onStateNameChange = (event) => {
        this.setState({ state: event.target.value })
    }
    onCountryNameChange = (event) => {
        this.setState({ country: event.target.value })
    }
    onPincodeChange = (event) => {
        this.setState({ pincode: event.target.value })
    }

    OnMobileNoChange = (event) => {
        this.setState({ mobile: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/buyer/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                city: this.state.city,
                state: this.state.state,
                country: this.state.country,
                pincode: this.state.pincode,
                mobile: this.state.mobile,
                
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        return (
            <div style={{ background: 'linear-gradient(to bottom, #4d90fe, #ff0000)', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure flex flex-wrap">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0" style={{fontSize:'1.7cm'}} >Register</legend>
                            <div className="mt3" style={{padding: '0.4cm'}}>
                                    <label className="db fw6 lh-copy f6" htmlFor="name" style={{ fontSize: '1cm' }}>First Name : </label>
                                <input
                                    style={{fontSize:'1cm', borderColor:'red'  }}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="first"
                                    onChange={this.onFirstNameChange}
                                />
                            </div>
                            <div className="mt3" style={{ padding: '0.4cm' }}>
                                    <label className="db fw6 lh-copy f6" htmlFor="name" style={{ fontSize: '1cm' }}> Last Name : </label>
                                <input
                                    style={{ fontSize: '1cm', borderColor: 'red' }}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="last"
                                    onChange={this.onLastNameChange}
                                />
                            </div>
                            <div className="mt3" style={{ padding: '0.4cm' }}>
                                <label className="db fw6 lh-copy f6" htmlFor="name" style={{fontSize:'1cm'}}>Email : </label>
                                    <input style={{ fontSize: '1cm', borderColor: 'red' }}

                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="name"
                                    id="email"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mt3" style={{ padding: '0.4cm' }}>
                                <label className="db fw6 lh-copy f6" htmlFor="name" style={{ fontSize: '1cm' }}>City : </label>
                                    <input style={{ fontSize: '1cm', borderColor: 'red' }}

                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="city"
                                    onChange={this.onCityNameChange}
                                />
                            </div>
                            <div className="mt3" style={{ padding: '0.4cm' }}>
                                <label className="db fw6 lh-copy f6" htmlFor="name" style={{ fontSize: '1cm' }}>State : </label>
                                    <input style={{ fontSize: '1cm', justifyContent:'center', borderColor: 'red' }}

                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="state"
                                    onChange={this.onStateNameChange}
                                />
                            </div>
                            <div className="mt3" style={{ padding: '0.4cm' }}>
                                <label className="db fw6 lh-copy f6" htmlFor="name" style={{ fontSize: '1cm' }}>Country : </label>
                                    <input style={{ fontSize: '1cm', borderColor: 'red' }}

                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="country"
                                    onChange={this.onCountryNameChange}
                                />
                            </div>
                            <div className="mt3" style={{ padding: '0.4cm' }}>
                                <label className="db fw6 lh-copy f6" htmlFor="name" style={{ fontSize: '1cm' }}>Pincode : </label>
                                    <input style={{ fontSize: '1cm', borderColor: 'red' }}

                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="pin"
                                    onChange={this.onPincodeChange}
                                />
                            </div>
                            <div className="mt3" style={{ padding: '0.4cm' }}>
                                <label className="db fw6 lh-copy f6" htmlFor="name" style={{ fontSize: '1cm' }}>Mobile No. : </label>
                                    <input style={{ fontSize: '1cm', borderColor: 'red' }}

                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="mobile"
                                    onChange={this.OnMobileNoChange}
                                />
                            </div>
                            <div className="mt3" style={{  padding: '0.4cm' }}>
                                <label className="db fw6 lh-copy f6" htmlFor="name" style={{ fontSize: '1cm' }}>Password : </label>
                                    <input style={{ fontSize: '1cm', borderColor: 'red' }}

                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="name"
                                    id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                                <input style={{ fontSize: '1cm', borderColor: 'red' }}

                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Register"
                            />
                        </div>
                    </div>
                </main>
            </article>
            </div>
        );
    }
}

export default Register;