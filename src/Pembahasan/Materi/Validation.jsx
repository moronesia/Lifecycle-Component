import React from "react";
// import * as Validator from 'validatorjs';
import "./style.css";

const Input = ({label, type, name, onChange}) => {
    
    return(
        <div>
            <label>{label}</label>
                <br />
                    <input type={type} name={name} onChange={e => onChange(e.target.value)} />
                <br />
        </div>
        
     )
}

const ShowErrors = ({errors}) => {
   
    return (
        <ul className="baris">
            {
            errors.map((errors, i) => <li key={i}>{errors}</li>)
            }
        </ul>
    )
}


export default class Validation extends React.Component {
    
    state = {
        Email: ``,
        Password: ``,
        errors: []
    }
   

    handleSubmit = event => {
        event.preventDefault();
        const { Email, Password } = this.state;
        
        let message = []

        if(Email.length === 0) {
            message = [...message, `email tidak boleh kosong`];
        }

        if(Password.length === 0) {
            message = [...message, `password tidak boleh kosong`];
        }else if(Password.length < 8) {
            message = [...message, `password terlalu pendek`];
        }
        
        // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // if(!re.test(String(Email).toLowerCase())) {
        //     message = [...message, `Email tidak valid`];
        // }

        if(message.length > 0){
            this.setState({
                errors: message
            });
        }else{
            alert(`
            Email: ${this.state.Email}
            Password: ${this.state.Password}
          `);
        }
        
    }



    render () {
        return (
            <div className="kolom">
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }
                <h2 className="judul">Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input type="email" name="Email" label="Email" onChange={value => this.setState({Email: value})} />
                    <Input type="password" name="Password" label="Password" onChange={value => this.setState({Password: value})} />
                    <br />
                    <button className="tombol" type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}