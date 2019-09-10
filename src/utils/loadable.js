import React,{Component} from "react";
import Loadable from "react-loadable";
import {withRouter} from "react-router-dom";

function Loading(props) {
    if (props.error) {
      return <div>Error!</div>;
    } else if (props.timedOut) {
      return <div>Taking a long time... </div>;
    } else if (props.pastDelay) {
      return <div>Loading...</div>;
    } else {
      return null;
    }
  }

class ComponentLoadable extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var MyComponent = Loadable({
            loader: () => import(`../components/${this.props.component}`),
            loading: Loading,
            timeout: 10000
        })
        return (
            <MyComponent></MyComponent>
        )
    }
}

export default withRouter(ComponentLoadable)