var requestPosts = new XMLHttpRequest();
requestPosts.open("get","https://comidagram.herokuapp.com/posts");
requestPosts.addEventListener("load", executarCriacaoDosPosts);
requestPosts.send();
function executarCriacaoDosPosts(){
    if (requestPosts.status == 200){ 
        var posts = JSON.parse(requestPosts.response);
        posts.forEach(function (post) {
            criarPublicacao(post)
        });
    }
}
function criarPublicacao (post) {
    var publicacao = document.createElement("div")

    var dadosDoUsuario = document.createElement("div")
    var iconeDoUsuario = document.createElement("img")
    var nomeDoUsuario = document.createElement("span")
    dadosDoUsuario.appendChild(iconeDoUsuario)
    dadosDoUsuario.appendChild(nomeDoUsuario);
    iconeDoUsuario.classList.add("rounded")
    iconeDoUsuario.src=post.usuario.icone
    nomeDoUsuario.innerHTML = post.usuario.nome

    var areaImagem = document.createElement("div")
    var imagem = document.createElement("img")
    areaImagem.appendChild(imagem)
    areaImagem.classList.add("bg-secondary", "d-flex", "flex-column", "justify-content-center") 
    areaImagem.style.maxHeight = "390px"
    areaImagem.style.height = "390px"
    imagem.classList.add("mn-100", "img-fluid")
    imagem.src = post.imagem

    var acoes = document.createElement("div")
    var botaoSalivar = document.createElement("button")
    var botaoCompartilhar = document.createElement("button")
    acoes.appendChild(botaoSalivar)
    acoes.appendChild(botaoCompartilhar)
    acoes.classList.add("p-2")
    botaoSalivar.classList.add("btn", "btn-info")
    botaoCompartilhar.classList.add("btn", "btn-warning")
    botaoSalivar.innerText = "X"
    botaoCompartilhar.innerText = "X"  

    publicacao.appendChild(dadosDoUsuario);
    publicacao.appendChild(areaImagem)
    publicacao.appendChild(acoes)

    document.querySelector(".publicacoes").appendChild(publicacao)
}
function alterarDados () {
    document.querySelector(".dados img").src="" //"data:image/jpeg;base64,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"
    document.querySelector(".dados span").innerHTML='Nome do Amigo'
    document.querySelector(".imagem img").src="https://img.itdg.com.br/tdg/images/blog/uploads/2016/12/shutterstock_494252905.jpg"
}
function criarAmigo () {
    var amigo = document.createElement("button")
    amigo.classList.add("btn", "btn-outline-secondary","rounded-circle","bg-white")
    amigo.innerHTML = "X"

    document.querySelector(".barra-amigos").appendChild(amigo);    
}
var amigos = [
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
]
amigos.forEach (function(amigo){
    criarAmigo(amigo);
});
// document.querySelector("#botao-amigo-1").addEventListener("click",alterarDados)