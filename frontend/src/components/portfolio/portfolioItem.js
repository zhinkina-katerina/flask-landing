import React, {Component} from "react";
import CTA from "./CTA";


class PortfolioItem extends Component{
    render() {
        const {item} = this.props
        return (
            <article className='portfolio__item'>
                <div className="portfolio__item__text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
                <CTA git_link={item.git_link}  demo_link={item.demo_link}/>
            </article>
        )}
    }
export default PortfolioItem