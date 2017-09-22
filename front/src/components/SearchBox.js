/**
 * Created by Lady Pinzon on 20/09/2017.
 */
import React, {Component} from "react";
import "./SearchBox.css";

export default class SearchBox extends Component {

    constructor(props) {

        super(props)
    }

    onEnter(event) {

        this.props.search(event.target.value);
    }
    call() {

        this.props.peticion();
    }


    render() {
        return (<div className="row search">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <input type="text" placeholder="Ingrese un usuario" onChange={this.onEnter.bind(this)}/>
            <button type="button" className="btn btn-success" onClick ={this.call.bind(this)}>Buscar seguidores</button>
            </div>
            <div className="col-md-4"></div>
        </div>);
    }
}