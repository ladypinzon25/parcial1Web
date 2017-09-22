/**
 * Created by Lady Pinzon on 20/09/2017.
 */
import React, {Component} from "react";
import "./Follower.css";

export default class Follower extends  Component {

    constructor (props){
        super(props)
    }
    call() {

        this.props.nuevaBusqueda(this.props.follower.login);
    }
    render(){
        return(<div className="col-md-2 follower" onClick={this.call.bind(this)}>

            <h4>{this.props.follower.login}</h4>
            <div>
            <img src={this.props.follower.avatar_url}/>
            </div>
        </div>);
    }
}