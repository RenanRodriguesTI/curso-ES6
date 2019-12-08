

class Lista{
    constructor(){
        this.data =[];
    }

    listar(){
        console.log(this.data)
    }

}

class Container extends Lista{
    constructor(){
        super();
    }

    addData(){
        this.data.push("Sou a extensao da lista")
    }

}

const arr =[1,23,434,4343,4,43,43];


const arrmap = arr.map(function(item){
    return item *2;
});

const arrreduce = arr.reduce(function(total,next){
    return total + next;
});

console.log(arrreduce)


const arrFilter = arr.filter(function(item) {
    return item % 2 === 0;
});

const find = arr.find(function(item){
    return item > 4;
});

console.log(find);

/* Desestrutura~ç]ao de objeto**/
let usuario ={
    nome:"Renan ",
    idade:10
}
// const {nome,idade} = usuario;

//REST - Desestruturação
let user = {
    nome:'',
    sobrenome:'',
    idade:'',
}

const {nome,idade,...u} = user;
console.log(`${nome} ${idade} ${u}`)


//Spread Propagar objeto
const arr1 =[1,3,5,7];
const arr2 = [2,4,6];
const arracomp = [...arr1,...arr2];
console.log(arracomp);


document.addEventListener("DOMContentLoaded", () =>{
    // let container = new Container();
    // container.addData();
    // container.listar();

    console.log(arrmap)

    console.log(arr.map((item) => ({'number':item})));
});