import React, { Component } from 'react';
import Navigation from '../../../Components/Navbar/Navigation';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import Main from '../Pages/Main';

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
            <div className="App" style={{ background: 'linear-gradient(to bottom, #4d90fe, #ff0000)', minHeight: '100vh' }}>
                <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                {route === 'home' ? 
                    <div>
                        <Main/>
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



