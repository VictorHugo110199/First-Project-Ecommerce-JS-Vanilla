let secaoProdutos = document.querySelector(".allProducts")
let secaoCarrinho = document.querySelector(".mainCarrinho ul")
let mainCarrinho = document.querySelector(".mainCarrinho")
let frase01 = document.createElement("p")
frase01.id = "frase01"
frase01.innerText = "Carrinho vázio"
let frase02 = document.createElement("p")
frase02.id = "frase02"
frase02.innerText = "Adicione itens"
mainCarrinho.appendChild(frase01)
mainCarrinho.appendChild(frase02)
let carrinhoQuantidade = document.querySelector(".carrinhoQuantidade")
let valorTotal = document.querySelector(".valorTotal")

function listarProdutos (arrProdutos, secao){
    secao.innerHTML = ""
    for(let i = 0; i < arrProdutos.length; i++){
        let produto = arrProdutos[i]
        let cardProduto = criarCardProduto(produto)
        secao.appendChild(cardProduto)
    }
}
listarProdutos(data, secaoProdutos)
function criarCardProduto(obj){
    let newLi = document.createElement("li")
    let newImg = document.createElement("img")
    let newDiv = document.createElement("div")
    let newButton = document.createElement("button")
    let newNomeProduto = document.createElement("p")
    let newDescricaoProduto = document.createElement("p")
    let newValorProduto = document.createElement("p")
    let newBotaoadd = document.createElement("p")
    if(obj.id != undefined){
        newBotaoadd.id =  obj.id
    }
    newLi.classList.add("products")
    newImg.src = `${obj.img}`
    newImg.alt = `Imagem de uma ${obj.nameItem}`
    newDiv.classList.add("informacoes")
    newButton.classList.add("productType")
    newButton.innerHTML = `${obj.tag}`
    newNomeProduto.classList.add("nomeProduto")
    newNomeProduto.innerText = `${obj.nameItem}`
    newDescricaoProduto.classList.add("descricaoProduto")
    newDescricaoProduto.innerText = `${obj.description}`
    newValorProduto.classList.add("valorProduto")
    newValorProduto.innerText = `R$ ${obj.value}`
    newBotaoadd.classList.add("botaoadd")
    newBotaoadd.innerText = `${obj.addCart}`
    newDiv.appendChild(newButton)
    newDiv.appendChild(newNomeProduto)
    newDiv.appendChild(newDescricaoProduto)
    newDiv.appendChild(newValorProduto)
    newDiv.appendChild(newBotaoadd)
    newLi.appendChild(newImg)
    newLi.appendChild(newDiv)
    return newLi
}

secaoProdutos.addEventListener("click", ListarProdutoCarrinho)

function ListarProdutoCarrinho(event){
    let btnAdicionar = event.target 
    if(btnAdicionar.className == "botaoadd"){
        let produto = btnAdicionar.closest("li").cloneNode(true)
        let produtoCarrinho = cardCarrinho(produto)
        secaoCarrinho.appendChild(produtoCarrinho)
    }
    avisoCarrinho(secaoCarrinho)
    quantidadeValores(secaoCarrinho)
}
function cardCarrinho (produto){
    let imagemSrc = produto.children[0].src
    let imagemAlt = produto.children[0].alt
    let text = produto.children[1].children[1].textContent
    let preco = produto.children[1].children[3].textContent

    let newLiCarrinho = document.createElement("li")
    newLiCarrinho.classList.add("liCarrinho")
    let divCarrinho = document.createElement("div")
    divCarrinho.classList.add("divCarrinho")
    let newImagem = document.createElement("img")
    newImagem.classList.add("carrinhoImg")
    newImagem.src = imagemSrc
    newImagem.alt = imagemAlt
    let newText = document.createElement("p")
    newText.classList.add("carrinhoNome")
    newText.innerHTML = text
    let newPreco = document.createElement("p")
    newPreco.classList.add("carrinhoPreco")
    newPreco.innerHTML = preco
    let bntRemover = document.createElement("p")
    bntRemover.classList.add("bntRemover")
    bntRemover.innerText = "Remover Produto"

    divCarrinho.appendChild(newText)
    divCarrinho.appendChild(newPreco)
    divCarrinho.appendChild(bntRemover)
    newLiCarrinho.appendChild(newImagem)
    newLiCarrinho.appendChild(divCarrinho)

    return newLiCarrinho
}
function avisoCarrinho (ul){
    if(secaoCarrinho.children.length !== 0){
        let removerFrase01 = mainCarrinho.children[1]
        let removerFrase02 = mainCarrinho.children[2]
        for(let i = 0; i < mainCarrinho.children.length; i++){
            if(mainCarrinho.children[i].id == "frase01"){
                removerFrase01.remove()
                removerFrase02.remove()
            }
        }
    } else if (secaoCarrinho.children.length <= 0){
        mainCarrinho.appendChild(frase01)
        mainCarrinho.appendChild(frase02)
    }
}
secaoCarrinho.addEventListener("click", funcaoRemover)
function funcaoRemover (event){
    let bntRemover = event.target
    if(bntRemover.className == "bntRemover"){
        let liRemover = bntRemover.closest("li")
        liRemover.remove()
    }
    avisoCarrinho(secaoCarrinho)
    quantidadeValores(secaoCarrinho)    
}
function quantidadeValores (ul){
    for(let i = 0; i < ul.children.length; i++){
        let valores = ul.children[i].children[1].children[1].textContent
        console.log(valores)
        carrinhoQuantidade.innerHTML = `${ul.children.length}`
    } 
}
