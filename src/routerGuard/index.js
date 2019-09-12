import React, {Component} from "react";
import {Route, withRouter} from "react-router-dom";
import Loadable from "utils/loadable";

class RouterGuard extends Component {
    constructor(props) {
        super(props)
        this.renderFunc = this.renderFunc.bind(this)
    }
    // enter
    renderFunc() {
        if(!this.props.authorazation || localStorage.getItem("status")) {
            return (
                <Loadable component={this.props.component}></Loadable>
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
    // leave
    componentWillUnmount() {
        console.log(1)
    }
    render() {
        return (
            <Route path={this.props.path} render={this.renderFunc} exact={this.props.exact}></Route>
        )
    }
}

export default withRouter(RouterGuard)