var localPostProjeto = document.getElementById('projetoContainer')


export class Projeto {
    constructor(titulo, paragrafo, link){
        this.titulo = titulo
        this.paragrafo = paragrafo
        this.link = link
    }
    
    postarDescricao(){
        localPostProjeto.innerHTML = `<h3 class="titulo__descricao-projetos">${this.titulo}</h3>
    <p class="decricao__projetos">${this.paragrafo}</p>
    <a href="${this.link}" target="_blank" id="linkProjeto">Acessar Projeto</a>`
    }
}


