import React, {Component} from "react";
import {Route} from "react-router-dom";
import Loadable from "utils/loadable";

class RouterGuard extends Component {
    constructor(props) {
        super(props)
        this.props.authorazation && this.checkStatus()
        this.renderFunc = this.renderFunc.bind(this)
    }
    renderFunc() {
        if(!this.props.authorazation) {
            return (
                <Loadable component={this.props.component}></Loadable>
            )
        }
        if(!localStorage.getItem("status") && !this.props.path.match("/Login")) {
            return (
                <Loadable component="components/Login"></Loadable>
            )
        }
        if(localStorage.getItem("status") && this.props.path.match("/Login")) {
            return (
                <Loadable component="components/home"></Loadable>
            )
        }
    }
    render() {
        return (
            <Route path={this.props.path} render={this.renderFunc} exact={this.props.exact}></Route>
        )
    }
}

export default RouterGuard