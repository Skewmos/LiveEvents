import React from "react";
import "../color.scss";
import "./button.scss";

class Button extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render(props){
        console.log(this.props);
        return(
            <>
                <button className={this.props.classbtn}>{this.props.value}</button>
            </>
        )
    }
}

export default Button ;