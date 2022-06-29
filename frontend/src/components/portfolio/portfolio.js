import React, {Component} from "react";
import "./portfolio.css"
import Carousel from "../snippets/carousel";
import PortfolioItem from "./portfolioItem";
import APIService from "../snippets/ApiService";


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          items: []
    };
    this.handleServerResponse = this.handleServerResponse.bind(this);
    }

    handleServerResponse(response){
          this.setState({
            items: response
          });
    }

    componentDidMount() {
        APIService.GetPortfolio()
            .then(response => {this.handleServerResponse(response.data)})
            .catch(error => console.log('error', error))
  }
    render() {
        let itemsForSlider = []
        if (this.state.items.length > 0) {
            itemsForSlider = this.state.items.map((item, index) => {
            return (<PortfolioItem item={item}/>)
            })
        }
        return (
            <section id='portfolio' className='slide-4 section'>
                <div className="container portfolio__container">
                    <h5>My projects</h5>
                    <h2>Portfolio</h2>
                    <div className="portfolio__content">
                        <Carousel itemsForSlider={itemsForSlider} />
                    </div>
                </div>
            </section>
        )
    }
}
export default Portfolio
