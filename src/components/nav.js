import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import eventbus from "utils/EventBus"

class GlobalNav extends Component {
    constructor(props) {
        super(props)
        var _ts = this
        this.state = {
            status: localStorage.getItem("status")
        }
        eventbus.on("login", function(status) {
            _ts.setState({
                status
            })
        })
        eventbus.on("logout", function(status) {
            _ts.setState({
                status
            })
        })
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li><NavLink to="/">/</NavLink></li>
                    <li><NavLink to="/ComA">ComA</NavLink></li>
                    <li><NavLink to="/ComB">ComB</NavLink></li>
                </ul>
                <div>登录状态：{this.state.status ? "已登录" : "未登录"}</div>
            </React.Fragment>
        )
    }
}

export default GlobalNav