import React from "react";
import "../color.scss";
import styles from "./button.scss";

class Button extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render(props){
        return(
            <>
                <button className={this.props.classbtn}>{this.props.value}</button>
            </>
        )
    }
}

export default Button ;