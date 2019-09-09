import React, {Component} from "react";
import {Route, withRouter} from "react-router-dom";
import Loadable from "utils/loadable";

class RouterGuard extends Component {
    constructor(props) {
        super(props)
        this.props.authorazation && this.checkStatus()
        this.renderFunc = this.renderFunc.bind(this)
    }
    renderFunc() {
        console.log(this.props.path)
        if(!this.props.authorazation || (localStorage.getItem("status") && !this.props.path.match("/Login"))) {
            return (
                <Loadable component={this.props.component}></Loadable>
            )
        }
        if(localStorage.getItem("status") && this.props.path.match("/Login")) {
            return (
                <Loadable component="home"></Loadable>
            )
        }
        if(!localStorage.getItem("status") && !this.props.path.match("/Login")) {
            this.props.history.push("/Login")
        }
        if(!localStorage.getItem("status") && this.props.path.match("/Login")) {
            return (
                <Loadable component="Login"></Loadable>
            )
        }
    }
    render() {
        return (
            <Route path={this.props.path} render={this.renderFunc} exact={this.props.exact}></Route>
        )
    }
}

export default withRouter(RouterGuard)