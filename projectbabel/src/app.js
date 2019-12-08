import {api} from './api';

export default class App{
    constructor(){
        this.repositories =[];
        this.formEL = document.getElementById('repo-form');
        this.formList = document.getElementById('repo-list');
        this.input = document.querySelector('input[name=repository]');
        this.registerHandlers();
    }

    registerHandlers(){
        this.formEL.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event){
        event.preventDefault();

        let search = this.input.value;

        if(this.input.lengt === 0)
        return;
        
        const response = await api.get(`repos/${search}`);
        console.log(response)
        const {name,description,html_url,owner} = response.data;
        console.log(owner)
        

   

        this.repositories.push({
            name:name,
            description:description,
            avatar_url:owner.avatar_url,
        });    

        this.render();
    }

    render(){
        this.formList.innerHTML ="";
        this.repositories.forEach((item) =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src',item.avatar_url);
            let title = document.createElement('strong');
            title.appendChild(document.createTextNode(item.name));
            let description = document.createElement('p');
            description.appendChild(document.createTextNode(item.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));
            let li = document.createElement('li');
            li.appendChild(imgEl);
            li.appendChild(title);
            li.appendChild(description);
            li.appendChild(linkEl);

            this.formList.appendChild(li);



        });
    }
}