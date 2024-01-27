import React, { Component } from 'react';
import Navigation from '../../Navbar/Navigation';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';


import './UserHome.css';

const initialState = {
    input: '',
    route: 'signin',
    isSignedIn: false,
    user: {
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        city: '',
        state: '',
        country: '',
        pincode:'',
        mobile:'',
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = initialState;
    }

    loadUser = (data) => {
        this.setState({
            user: {
                id: data.id,
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                city: data.city,
                state: data.state,
                country: data.country,
                pincode: data.pincode,
                mobile: data.mobile,
            }
        })
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState(initialState)
        } else if (route === 'home') {
            this.setState({ isSignedIn: true })
        }
        this.setState({ route: route });
    }

    render() {
        const { isSignedIn, route } = this.state;
        return (
            <div className="App">
                <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                {route === 'home'
                    ? <div>
                        <p>You have passed the test and now poonam will show you everything you want!!!</p>
                    </div>
                    : (
                        route === 'signin'
                            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                    )
                }
            </div>
        );
    }
}

export default App;



