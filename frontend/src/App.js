import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomUserList from './components/CustomUser.js';
import Footer from './components/Footer.js';
import Menu from './components/Menu.js';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'custom_users': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/customusers/')
            .then(response => {
                const custom_users = response.data
                    this.setState(
                    {
                        'custom_users': custom_users
                    }
                    )
            })
            .catch(error => console.log(error))
    }

    render () {
        return (
            <div>
                <Menu />
                <CustomUserList custom_users={this.state.custom_users} />
                <Footer />
            </div>
        )
    }
}

export default App;
