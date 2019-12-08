module.exports ={
    /* Arquivo principa que contém o ES6 */
    entry:'./src/main.js',
    /* Saida */
    output:{
        /*Caminho onde os arquivos serão publicados*/
        path:`${__dirname}/public`,
        /** Arquivo onde será armazenado a compilação do ES6 para js puro */
        filename:'bundle.js'
    },
    devServer:{
        /*Diretório base para rodar o webpack server */
        contentBase:`${__dirname}/public`
    },
    module:{
        rules:[
           {
            /* Regex para pegar arquivos com a externsão js */
            test: /\.js$/,
            /*Excluir a pasta mode_modules da compilação */
            exclude:/node_modules/,
            use:{
                loader:"babel-loader"
            }
           }
        ]
    }
}