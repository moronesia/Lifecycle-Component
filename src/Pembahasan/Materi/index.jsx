import React from "react";
import Validation from "./Validation";
// import FormValidation from "./FormValidation";

export default class Form extends React.Component {
    render() {
        return (
            <div>
                {/* <FormValidation /> */}
                <Validation />
            </div>
        )
    }
}