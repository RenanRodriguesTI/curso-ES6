import axios from 'axios';

export const api = axios.create({
    baseURL:'https://api.github.com'
});

export default class Api{
    static async getUserInfo(username){
       try{
        const resp= await axios.get(`https://api.github.com/${username}`);
        console.log(resp)
       }
       catch(error){
            console.log("Ocorreu um erro",error)
       }
    }
}