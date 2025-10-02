const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A psicquIA, é uma junção de tecnologia e psicologia, nos ultimos dias, muito se fala em desabafar de uma forma “inovadora” para muitos isso parece legal, mas afinal, será que isso é realmente seguro?",
        alternativas: [
            {
                texto: "Isso me assusta!",
                afirmacao: "No inicio eu fico com medo."
            },
            {
                texto: "Isso é perfeito!",
                afirmacao: "Facilita minha vida."
            }
        ]
    },
    {
        enunciado: "É importante ter consciencia  de que as IAs não possuem termos éticos, o que pode ocasionar em infomações falhas ou até mesmo superfulas, podendo levar as pessoas que consomem esses  conteúdos a tomarem decisões precipitadas  e tendenciosas.",
        alternativas: [
            {
                texto: "Tenho consciencia das informações que recebo e as uso com sabedoria!",
                afirmacao: "Consigo utilizar a IA para buscar informações úteis, sei como as utilizar de forma segura e coerente."
            },
            {
                texto: "Não procuro saber as procedências das informações recebidas, mas as ultilizo mesmo assim!",
                afirmacao: "Tenho preguiça de pesquisar, assim acretido no que aparece primeiro, sem ter o trabalho de ficar verificando as informações."
            }
        ]
    },
    {
        enunciado: "Você acredita que a tecnologia pode realmente ser implantada nos tratamentos de saúde, se for usada de forma correta, por um profissional da área de saúde e tecnologia para auxiliar os pacientes?",
        alternativas: [
            {
                texto: "Acredito que a IA posssa sim auxiliar o profissional de saúde, nos tratamentos!",
                afirmacao: "Isso é uma inovação no auxilio ao profissional, quando usada de forma correta."
            },
            {
                texto: "Acredito que a IA não deve ser incerida como uma forma de tratamento, prefiro somente o auxilio de um profissional de saúde!",
                afirmacao: "Tenho preocupação com as minhas informações pessoais, já que a Ia não possui POLITICA DE PRIVACIDADE."
            }
        ]
    },
    {
        enunciado: "No futuro, você acredita que mesmo com todas as divergências da sociedade sobre as tecnologias aplicadas em tratamentos de saúde, as pessoas ainda poderão ter a liberdade de escolha sobre um tratamento tradicional?",
        alternativas: [
            {
                texto: "Acredito que sim!",
                afirmacao: "No futuro acredito que as pessoas ainda terão a possibilidade de escolha entre o tratamento tradicional e tecnologico"
            },
            {
                texto: "Acredito que não!",
                afirmacao: "No futuro acredito que não teremos a possibilidade de escolha, poís, com o avanço da tecnologia talvez nem tanhamos mais profissionais na área, já que acredito que a Ia vai dominar o mundo."
            }
        ]
    },
    
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
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();