import React, {Component} from "react";
import "./contacts.css"
import APIService from '../snippets/ApiService'

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            message: null,
            email: null,
            sendInfo: null,
            isFormSentSuccessful: false

        };
        this.sendEmail = this.sendEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleServerResponse = this.handleServerResponse.bind(this);
    }

    sendEmail() {
        const {name, message, email} = this.state
        APIService.SendEmail(name, message, email)
            .then(response => {this.handleServerResponse(response.data)})
            .catch(error => console.log('error', error))

    }

    handleServerResponse (response) {
        this.setState({sendInfo : response.message,
                            isFormSentSuccessful: response.email_was_sent});
    }

    handleSubmit (event){
        event.preventDefault()
        this.sendEmail()
    }

    render() {
        return (
            <section id='contacts' className='section slide-5'>
                <div className="container contact__container">
                    <h5>Feel free to contact me</h5>
                    <h2>Send me Email</h2>
                    <div className="contact__form">
                        <div className="contact__send_info">
                            <p>{this.state.sendInfo}</p>
                        </div>
                        <form onSubmit={this.handleSubmit} method='POST'>
                            <div className="form-group" style={this.state.isFormSentSuccessful ? {display: 'none'} : {}}>
                                <input type="text" name='name' placeholder='Your name' required
                                       onChange={(e) => this.state.name = e.target.value}/>
                                <input type="email" name='email' placeholder='Your email' required
                                       onChange={(e) => this.state.email = e.target.value}/>
                            </div>
                            <div className="form-group"style={this.state.isFormSentSuccessful ? {display: 'none'} : {}}>
                                <textarea name="message" id="message" rows="10" placeholder='Your massage'
                                          onChange={(e) => this.state.message = e.target.value}></textarea>
                                <button type='submit' className='btn'>Send email</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts