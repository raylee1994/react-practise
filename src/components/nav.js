import React,{Component} from "react"
import {NavLink} from "react-router-dom"

class GlobalNav extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li><NavLink to="/">/</NavLink></li>
                    <li><NavLink to="/ComA">ComA</NavLink></li>
                    <li><NavLink to="/ComB">ComB</NavLink></li>
                </ul>
                <div>登录状态：{localStorage.getItem("status") ? "已登录" : "未登录"}</div>
            </React.Fragment>
        )
    }
}

export default GlobalNav