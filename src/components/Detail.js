import React,{Component} from "react"
import {withRouter} from "react-router-dom"

class NewsDetail extends Component {
    render() {
        return (
            <div>NewsDetail: {this.props.match.id}</div>
        )
    }
}

export default withRouter(NewsDetail)