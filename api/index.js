var express = require('express')
var app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/posts', function (req, res) {
    res.json(
        [
            {
                usuario:{
                    icone: "https://img.itdg.com.br/tdg/images/recipes/000/031/593/85534/85534_original.jpg?mode=crop&scale=both&w=80&h=50",
                    nome: "joãosinho"
                },
                imagem: "https://img.itdg.com.br/tdg/images/blog/uploads/2016/12/shutterstock_494252905.jpg"
            },
            {
                usuario:{
                    icone: "https://img.itdg.com.br/tdg/images/recipes/000/031/593/85534/85534_original.jpg?mode=crop&scale=both&w=80&h=50",
                    nome: "joão"
                },
                imagem: "https://img.itdg.com.br/tdg/images/blog/uploads/2016/12/shutterstock_494252905.jpg"
            },
            {
                usuario:{
                    icone: "https://img.itdg.com.br/tdg/images/recipes/000/031/593/85534/85534_original.jpg?mode=crop&scale=both&w=80&h=50",
                    nome: "joãosão"
                },
                imagem: "https://img.itdg.com.br/tdg/images/blog/uploads/2016/12/shutterstock_494252905.jpg"
            }
        ])
})
app.get('/amigos', function (req, res) {
    res.json(
        [
    {
        icone: "https://randomuser.me/api/portraits/med/men/39.jpg",
        nome: "joão do caixão"
    },
    {
        icone: "https://randomuser.me/api/portraits/med/men/42.jpg",
        nome: "zé da rua de baixo"
    },
    {
        icone: "https://randomuser.me/api/portraits/med/women/19.jpg",
        nome: "Ansh Vazquez"
    },
    {
        icone: "https://randomuser.me/api/portraits/med/women/19.jpg",
        nome: "Ansh Vazquez"
    }
])
})

var port = process.env.PORT || 3000
console.log("servidor iniciado na porta " + port)
app.listen(port)