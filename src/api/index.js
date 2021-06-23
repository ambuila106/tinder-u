import axios from "axios";

export default class Api {
    options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c801747969msha2bfae4b2c7f945p119b01jsn257fed89fea5',
            'x-rapidapi-host': 'instagram85.p.rapidapi.com'
        }
    };

    async getIdByUser(user) {
        this.options.url = `https://instagram85.p.rapidapi.com/account/${user}/info`;
        console.log("dentro");
        axios.request(this.options).then(function (response) {
            console.log(response.data.data.id);
        }).catch(function (error) {
            console.error(error);
        });
    }
}