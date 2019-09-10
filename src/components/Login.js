import React,{Component} from "react"
import {withRouter} from "react-router-dom"
import eventbus from "utils/EventBus"

class Login extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }
    login() {
        localStorage.setItem("status", 1)
        eventbus.emit("login", localStorage.getItem("status"))
        this.props.history.push("/")
    }
    logout() {
        localStorage.removeItem("status")
        eventbus.emit("logout", localStorage.getItem("status"))
        this.props.history.push("/")
    }
    render() {
        return (
            <React.Fragment>
                <a href="javascript:;" onClick={this.login}>登录</a>
                <a href="javascript:;" onClick={this.logout}>退出</a>
            </React.Fragment>
        )
    }
}

export default withRouter(Login)