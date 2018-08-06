import axios from 'axios';
import Config from '../shared/config';

export default class UserService {
    constructor() {
        this.config = new Config();
        this.instance = axios.create({
            headers: {
                post: {
                    'Content-Type': 'application/json',
                    'Authorization': this.config.authHeader,
                }
            }
        });
    }
    register(user) {
        return this.instance.post(this.config.apiUrl + "user/" + this.config.appKey, JSON.stringify({
            username: user.email,
            email: user.email,
            password: user.password
        }));
    }

    login(user) {
        return this.instance.post(this.config.apiUrl + "user/" + this.config.appKey + "/login", 
            JSON.stringify({
                username: user.email,
                password: user.password
            })
        ).then((response) => {
            console.log(response);
            this.config.token = response.data._kmd.authtoken;
        });
    }
}