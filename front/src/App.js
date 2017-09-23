import React, {Component} from 'react';
import SearchBox from "./components/SearchBox.js";
import axios from "axios";


import List from './components/List';
import './App.css';

const URL = "http://localhost:8082";

class App extends Component {

    constructor(props) {

        super(props)
        this.state = {
            followers: [],
            user: "",
            historial: "",
            busquedas: []
        }
        this.search = this.search.bind(this);
        this.peticion = this.peticion.bind(this);
    };

    componentWillMount() {

        fetch(URL + "/busquedasRecientes/", {method: "GET", headers: {accept: "application/json"}}).then((res) => {
            if (res.ok)
                return res.json();
        }).then((busquedas) => {

            this.setState({
                busquedas: busquedas

            });
        })
    }


    peticion(pUser) {
        let usuario = this.state.user;
        if (pUser)
            usuario = pUser;
        if (this.state.historial.length == 0) {

            this.setState({
                historial: this.state.historial + usuario
            })
        }
        else {
            this.setState({
                historial: this.state.historial + " sigue a: " + usuario
            })
        }

        fetch(URL + "/getFollowers/" + usuario, {method: "GET", headers: {accept: "application/json"}}).then((res) => {
            if (res.ok)
                return res.json();
        }).then((followers) => {

            this.setState({
                followers: followers.data

            });
            axios.post(URL + '/postBusquedas', {
                usuario: usuario
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });

    }

    search(text) {
        this.setState({
            user: text
        })
    }

    render() {

        return (
            <div className="followers">
                <h1>Followers</h1>

                <div>
                    <SearchBox search={this.search} peticion={this.peticion}/>

                </div>
                <List list={this.state.followers} peticion={this.peticion} hist={this.state.historial} bus={this.state.busquedas}/>


            </div>
        )
    }
}
export default App;
