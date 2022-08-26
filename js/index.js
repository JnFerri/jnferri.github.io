import { Projeto } from "./Projeto.js"

    let mirabilis = new Projeto('Mirabilis 3D Studio', 'Mirabilis 3D Studio é o projeto criado como teste para uma futura empresa a qual pretendo abrir de renderização de vídeos e imagens e criação de conteúdo para divulgação de produtos, trabalho o qual atualmente faço na empresa onde trabalho. O site não esta totalmente concluído faltando alguns detalhes, mas mesmo assim demonstra um pouco da minha capacidade como programador front-end. ', 'https://jnferri.github.io/Mirabilis3dStudio/index.html')
    let recomendaLivros = new Projeto('Recomenda Livros', 'Recomenda livro é um projeto o qual criei para colocar em pratica alguns dos meus conhecimentos de arquitetura CSS. Gosto de ler e a ideia do site é recomendar bons livros demonstrando todos os sentimentos o qual o leitor pode ter ao ler boas obras. Para criação do site utilizei HTML, CSS e JavaScript.', 'https://jnferri.github.io/recomendalivro/index.html')
    let calculadora = new Projeto('Calculadora JavaScript','Calculadora criada utilizando JavaScript, fiz este projeto para me desafiar a criar uma calculadora totalmente sozinho e por em pratica logica de programação e treinar JavaScript.', 'projetos/Calculadora-Js/index.html')
    let calculosEng = new Projeto('Sistema de Aproveitamento de Chapas', 'Projeto criado após eu perceber que na empresa onde trabalho, muitas vezes tínhamos que calcular manualmente a quantidade de peças que cabem na chapa e definir através da densidade do aço e o peso da pesa quanto seria o percentual de perda, para definirmos a quantidade de matéria prima total utilizada na produção da peça. O processo era demorado pois havia mais de uma medida de chapa de aço, sendo assim necessário calcular todas e ver qual teria menos percentual de perda. O projeto funciona colocando as medidas de altura e largura da peça no momento do corte, seu peso, material e espessura da chapa, dando assim o demonstrativo de todas as chapas disponíveis e percentual de perda.', 'http://calculosengenharia.rf.gd/')

    let projeto = document.querySelectorAll('#projeto')

    projeto[0].addEventListener('click', function(){
        mirabilis.postarDescricao()
    })
    projeto[1].addEventListener('click', function(){
        recomendaLivros.postarDescricao()
    })
    projeto[2].addEventListener('click', function(){
        calculadora.postarDescricao()
    })
    projeto[3].addEventListener('click', function(){
        calculosEng.postarDescricao()
    })


    var personagem = document.querySelector('.apresentacao__imagem')
    
    window.onload = function carregarIMG(){
        console.log(personagem.style.tranform)
    }
   








