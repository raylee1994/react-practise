import React,{Component} from "react"
import {Link, Switch} from "react-router-dom"
import routes from 'router/ComBChildRouter';
import RouterGuard from 'routerGuard';

class ComB extends Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li><Link to="/Detail/1">news 1</Link></li>
                    <li><Link to="/Detail/2">news 2</Link></li>
                </ul>
                <ul>
                    {
                        routes.map((item) => {
                            return (
                                <li><Link to={item.path}>{item.path}</Link></li>
                            )
                        })
                    }
                </ul>
                <Switch>
                    {
                        routes.map((item) => {
                            return (
                                <RouterGuard {...item}></RouterGuard>
                            )
                        })
                    }
                </Switch>
            </React.Fragment>
        )
    }
}

export default ComB