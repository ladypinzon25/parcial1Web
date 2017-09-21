import React, { Component } from 'react';
import SearchBox from "./components/SearchBox.js";
import './App.css';

const URL ="http://localhost:8082";

class App extends Component {

    constructor(props) {

        super(props)
        this.state = {
            followers: [],
            user: ""
        }
        this.search=this.search.bind(this);

    };


    componentWillMount(){
        fetch(URL+"/getFollowers/john-guerra", {method: "GET", headers: {accept: "application/json"}}).then((res)=>{
            if(res.ok)
                return res.json();
        }).then((followers)=>{

            this.setState({
                followers: followers
            });
        });
    }
    search(text){
        this.setState({
            user: text
        })
    }
    render() {

        return (
            <div>
              <h1>Followers</h1>
              <div>
                <SearchBox search ={this.search}/>
                  {console.log(this.state.user)}
              </div>
            </div>
        )
    }
}
export default App;
