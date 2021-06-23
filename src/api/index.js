import axios from "axios";

export default class Api {
    options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c801747969msha2bfae4b2c7f945p119b01jsn257fed89fea5',
            'x-rapidapi-host': 'instagram85.p.rapidapi.com'
        }
    };

    getIdByUser(user) {
        this.options.url = `https://instagram85.p.rapidapi.com/account/${user}/info`;
        return axios.request(this.options)
    }
}