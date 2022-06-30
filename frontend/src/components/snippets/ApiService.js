import axios from "axios";

export default class APIService {

    static SendEmail(name, message, email) {
        const params = JSON.stringify({
            name: name,
            email: email,
            message: message,
        })
        return new Promise((resolve, reject) => {
            axios.post('/api/send_email', {params},
            {headers: {
                    'Content-Type': 'multipart/form-data'
                    }}
            ).then((response) => {
                resolve(response);
            })
        })}
        static GetPortfolio(){
            return new Promise((resolve, reject) => {
                axios.get('/api/get_portfolio_items').then((response) => {
                    resolve(response);
            })
            })}
}

