import React, {Component} from 'react';
import Follower from "./Follower.js";
import "./List.css";

class List extends Component {

    renderFollowers() {

        return this.props.list.map((f, i) => {
            return <Follower follower={f} key={i} nuevaBusqueda= {this.props.peticion}/>;
        });
    }


    render() {
console.log(this.props.bus)
        return (
            <div className="list">
                <h3>Busquedas recientes</h3>
                <div className="busquedasRecientes">{this.props.bus.map((user)=>{return user.usuario}).join(", ")}</div>
                <h3 className="historial">{this.props.hist}</h3>
                {this.renderFollowers()}
            </div>);
    }
}

export default List;
