const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:
        "A psicquIA, é uma junção de tecnologia e psicologia, nos ultimos dias, muito se fala em desabafar de uma forma “inovadora” para muitos isso parece legal, mas afinal, será que isso é realmente seguro?",
        alternativas: [
         "Isso me assusta!" ,
        "Isso é perfeito!"
        ]
    },
    {
        enunciado:"É importante ter consciencia  de que as IAs não possuem termos éticos, o que pode ocasionar em infomações falhas ou até mesmo superfulas, podendo levar as pessoas que consomem esses  conteúdos a tomarem decisões precipitadas  e tendenciosas."
        alternativas: [
         "Tenho consciencia das informações que recebo e as uso com sabedoria!"
         "Não procuro saber as procedências das informações recebidas, mas as ultilizo mesmo assim!"
        ]
    },
    {
        enunciado:"Você acredita que a tecnologia pode realmente ser implantada nos tratamentos de saúde, se for usada de forma correta, por um profissional da área de saúde e tecnologia para auxiliar os pacientes? "
        alternativas: [
            "Acredito que a IA posssa sim auxiliar o profissional de saúde, nos tratamentos!"
           "Acredito que a IA não deve ser incerida como uma forma de tratamento, prefiro somente o auxilio de um profissional de saúde!"
        ]
    },
    {
<<<<<<< HEAD
        enunciado:"No futuro, você acredita que mesmo com todas as divergências da sociedade sobre as tecnologias aplicadas em tratamentos de saúde, as pessoas ainda poderão ter a liberdade de escolha sobre um tratamento tradicional?"
=======
        enunciado:
        "No futuro, você acredita que mesmo com todas as divergências da sociedade sobre as tecnologias aplicadas em tratamentos de saúde, as pessoas ainda poderão ter a liberdade de escolha sobre um tratamento tradicional?",
>>>>>>> 1645de5a7195f948fa74fe5087c2b2cf60d2b8f5
        alternativas: [
<<<<<<< HEAD
           "Acredito que sim!"
           "Acredito que não!"
=======
           "Acredito que sim!",
           "Acredito que não!"
>>>>>>> 1645de5a7195f948fa74fe5087c2b2cf60d2b8f5
        ]
    },
    {
        enunciado:"Em 2049, a sociedade..."
            "A conversa se desenvolveu em torno da temática do uso de Inteligência Artificial (IA) na psicologia, explorando as opiniões e percepções do público.
Inicialmente, foram criados cinco tópicos com duas alternativas de resposta cada, abordando as vantagens, preocupações e críticas sobre a IA na saúde mental.
O conteúdo foi então aprimorado e expandido em etapas, tornando as perguntas mais detalhadas e informativas. A primeira pergunta, em seguida, foi convertida em uma introdução narrativa, que apresentava os dois principais argumentos sobre os benefícios da IA: acessibilidade e capacidade de análise de dados."
        alternativas: [
            "Alternativa 1"
            "Alternativa 2"
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
