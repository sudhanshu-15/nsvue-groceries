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

    getCommonHeaders() {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Config.authHeader,
            }
        }
        return config;
    }
}