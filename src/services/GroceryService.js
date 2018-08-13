import axios from 'axios';
import Config from '../shared/config';
import { getString } from 'tns-core-modules/application-settings';
import Grocery from '../models/Grocery';

const tokenKey = "token";

export default class GroceryService {
    constructor() {
        this.config = new Config();
        this.baseUrl = this.config.apiUrl + "appdata/" + this.config.appKey + "/Groceries";
        this.params = "sort=_kmd.lmt=1";
        this.instance = axios.create({
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Kinvey ' + getString(tokenKey),
                },
            params: this.params
        });
        console.log("Token key: " + getString(tokenKey));
        console.log("Params in constructor: " +  JSON.stringify(this.params));
    }
    
    load() {
        var baseUrl = this.config.apiUrl + "appdata/" + this.config.appKey + "/Groceries";
        var params = "sort=_kmd.lmt=1";
        console.log("Base URL: " + baseUrl);
        console.log("Params: " + JSON.stringify(params));
        return this.instance.get(this.baseUrl).then((response) => {
            let groceryList = [];
            response.data.forEach(grocery => {
                groceryList.push(new Grocery(grocery._id, grocery.name));
            });
            return groceryList;
        }).catch((error) => {
            console.log(error);
            return Error("Unable to get groceries" + error);
        });
    }
}