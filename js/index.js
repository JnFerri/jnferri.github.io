import { Projeto } from "./Projeto.js"

var localPostProjeto = document.getElementById('projetoContainer')

var localPostProjeto =''

let mirabilis = document.getElementById('projetoMirabilis')
mirabilis.addEventListener('click',
function adicionarInfoMirabilis(){
    var Info = new Projeto('Mirabilis3Dstudio', 'texte', 'https://jnferri.github.io/Mirabilis3dStudio/index.html')
    console.log(Info)


localPostProjeto.innerHTML = `<h3 class="titulo__descricao-projetos">${Info.titulo}</h3>
<p class="decricao__projetos">${Info.paragrafo}</p>
<a href="${Info.link}" target="_blank" id="linkProjeto">Acessar Projeto</a>`
})








