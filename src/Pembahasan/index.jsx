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
        Axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=f83692ff5fa84daca326087f949d97c4")
        .then(response => {
           this.setState({
            getNews : response.data.articles
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
                                    <div className="col-3" key={Index}>
                                        <div className="card" style={{width: "18rem"}}>
                                            <img src={row.urlToImage} className="card-img-top" alt="" />
                                            <div className="card-body">
                                                <h3 className="card-title">{row.title}</h3>
                                                <p className="card-text">{row.description}</p>
                                                <a 
                                                href={row.url} 
                                                className="btn btn-primary"
                                                >
                                                    Baca Selengkapnya
                                                </a>
                                                <hr />
                                               
                                                <p className="author">Penulis: {row.author}</p>
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