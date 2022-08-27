import React from "react";
import Axios from "axios";
import './style.css'
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import { Button } from "react-bootstrap";



export default class Index extends React.Component {

    state = {
        getNews : []
    }


    componentDidMount(){
        Axios.get("https://www.omdbapi.com/?s=Batman&apikey=3c3331d6")
        .then(response => {
           this.setState({
            getNews : response.data.Search
           })
        }).catch(err => console.log(err)) 
    }



    render() {
        return(

            <div>
                <div className="container">
                    <div className="head-form">
                    <Form className="d-flex">
                        <Form.Control onSubmit={this.componentDidMount}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            onChange={this.setState.getNews}
                        />
                        <Button type="submit">Search</Button>
                    
                    </Form>
                    </div>
                    <div className="row">
                        {
                            this.state.getNews.map((row, Index) => {
                                return(
                                    <div className="col-4" key={Index}>
                                        <div className="card" style={{width: "18rem"}}>
                                            <img src={row.Poster} className="card-img-top" alt="" />
                                            <div className="card-body">
                                                <h3 className="card-title">{row.Title}</h3>
                                                <p className="author">Penulis: {row.Type}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        )
    }
}