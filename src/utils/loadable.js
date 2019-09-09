import React,{Component} from "react";
import Loadable from "react-loadable";

function Loading(props) {
    console.log(props)
    if (props.error) {
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else if (props.timedOut) {
      return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
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

export default ComponentLoadable