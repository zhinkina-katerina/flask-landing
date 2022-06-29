import React, {Component} from "react";

class CTA extends Component{
    render() {
        const {git_link} = this.props
        const {demo_link} = this.props
        return(
            <div className="portfolio__item-cta">
                <a href={git_link} className='btn' target='_blank' style={git_link ? {}: {display: 'none'}}>Git</a>
                <a href={demo_link} className='btn btn-primary' target='_blank' style={demo_link ? {}: {display: 'none'}}>Demo </a>
            </div>
        )
    }
}




export default CTA