import React,{Component} from "react";
import Loadable from "react-loadable";

class ComponentLoadable extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var MyComponent = Loadable({
            loader: () => import(this.props.component),
            loading: () => {
                return (
                    <div>loading...</div>
                )
            }
        })
        return (
            <MyComponent></MyComponent>
        )
    }
}

export default ComponentLoadable