import React,{Component} from "react"
import {Link, Switch} from "react-router-dom"
import routes from 'router/ComBChildRouter';
import RouterGuard from 'routerGuard';
import {withRouter} from "react-router-dom";

class ComB extends Component {
    constructor(props) {
        super(props)
        this.switchNews = this.switchNews.bind(this)
    }
    switchNews(id) {
        var _ts = this
        return function() {
            _ts.props.history.push(`/Detail/${id}`)
        }
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li onClick={this.switchNews(1)}>news 1</li>
                    <li onClick={this.switchNews(2)}>news 2</li>
                </ul>
                <ul>
                    {
                        routes.map((item, index) => {
                            return (
                                <li><Link to={item.path} key={index}>{item.path}</Link></li>
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

export default withRouter(ComB)