/**
 * Created by Lady Pinzon on 20/09/2017.
 */
import React, {Component} from "react";

export default class SearchBox extends Component {

    constructor(props) {

        super(props)
    }

    onEnter(event) {
        console.log(event.target.value);
        this.props.search(event.target.value);
    }


    render() {
        return (<div>
            <input type="text" placeholder="search" onInput={this.onEnter.bind(this)}/>
        </div>);
    }
}