const perguntas = [
    {
        enunciado: "Você está na pior situação possível, sem ter para onde ir nem onde morar. Andando na praça, você acha uma carteira com 100 reais. O que você faz?",
        alternativas: [
            {
                texto: "Pegaria essa carteira para você e gastaria esse dinheiro com algo que você necessite.",
                afirmacao: "Sua escolha revelou um foco pragmático na **sobrevivência imediata**. O alívio foi momentâneo, mas refletiu sua urgência em um momento difícil."
            },
            {
                texto: "Tentaria achar o dono original da carteira.",
                afirmacao: "Mesmo em desespero, sua **integridade** se destacou. Essa ação, embora não tenha resolvido seu problema imediato, semeou algo positivo para o futuro."
            }
        ]
    },
    {
        enunciado: "Você sai da praça e continua andando pela cidade, e um senhor está quase sendo atropelado. O que você vai fazer?",
        alternativas: [
            {
                texto: "Ignorar o senhor e continuar o seu caminho.",
                afirmacao: "Você demonstrou um foco singular em sua própria jornada, talvez pela intensidade de seus problemas. Sua prioridade era o seu **próprio avanço**."
            },
            {
                texto: "Com toda a sua bondade, ajudar o senhor a atravessar a rua antes que ele seja atropelado.",
                afirmacao: "Sua **compaixão e senso de responsabilidade** emergiram em um momento de crise alheia. Essa ação solidária é um forte traço do seu caráter."
            }
        ]
    },
    {
        enunciado: "Você acha um carrinho de supermercado cheio de compras abandonado perto de um supermercado. O que você vai fazer?",
        alternativas: [
            {
                texto: "Passa reto e não pega o carrinho.",
                afirmacao: "Sua **disciplina ética** prevaleceu sobre a tentação e a necessidade. Você escolheu a conduta correta, mesmo sem supervisão."
            },
            {
                texto: "Rouba o carrinho na maior espreita possível.",
                afirmacao: "A urgência das suas circunstâncias te levou a um ato de desespero. Essa escolha, embora resolva um problema imediato, pode trazer **consequências inesperadas**."
            }
        ]
    },
    {
        enunciado: "Você está dormindo no chão, usando uma caixa de papelão como cobertor, e do nada vem um homem querendo bater em você. O que você vai fazer?",
        alternativas: [
            {
                texto: "Levar pancada à solta.",
                afirmacao: "Sua escolha pode indicar uma aversão à violência ou uma **resignação** diante da adversidade. Você pode estar buscando a paz, mesmo à custa de sua segurança imediata."
            },
            {
                texto: "Revidar o ataque da pessoa.",
                afirmacao: "Seu instinto de **autopreservação** é forte. Você demonstrou que não se submeterá à opressão, lutando por sua própria segurança."
            }
        ]
    },
    {
        enunciado: "Você anda pela rua, seguindo seu destino, e encontra um carro muito bonito com um valor de 1 milhão de reais. Ele está aberto com a chave dentro. O que você faz?",
        alternativas: [
            {
                texto: "Pegar o carro para você.",
                afirmacao: "A tentação de uma vida completamente diferente se mostrou **irresistível**. Essa decisão tem o potencial de mudar tudo, mas com riscos significativos envolvidos."
            },
            {
                texto: "Deixar o carro e seguir em frente.",
                afirmacao: "Sua **moralidade e senso de propósito** te guiaram. Você recusou um atalho ilícito para o sucesso, mantendo-se fiel ao seu caminho."
            }
        ]
    },
    {
        enunciado: "Você ainda está andando por aí e vê uma casa de rico abandonada. O que você faz?",
        alternativas: [
            {
                texto: "Entrar na casa.",
                afirmacao: "Sua **curiosidade e a busca por um refúgio ou oportunidades** te levaram a explorar um território desconhecido. O que você encontrará lá moldará seu próximo passo."
            },
            {
                texto: "Continuar seguindo em frente.",
                afirmacao: "Você demonstrou um **foco inabalável** em seu próprio destino. Não se desviou por distrações, mantendo sua jornada como prioridade."
            }
        ]
    }
];

// Pegando referências aos elementos HTML
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let perguntaAtual = 0; // Para controlar qual pergunta está sendo exibida
let historicoAfirmacoes = []; // Para armazenar as afirmações do jogador

// Função para mostrar a próxima pergunta
function mostraPergunta() {
    if (perguntaAtual < perguntas.length) {
        caixaPerguntas.textContent = perguntas[perguntaAtual].enunciado;
        caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores
        perguntas[perguntaAtual].alternativas.forEach((alternativa, index) => {
            const botaoAlternativa = document.createElement("button");
            botaoAlternativa.textContent = `${String.fromCharCode(65 + index)}) ${alternativa.texto}`; // Adiciona A), B)
            botaoAlternativa.classList.add("botao-alternativa");
            botaoAlternativa.addEventListener("click", () => escolheAlternativa(alternativa.afirmacao));
            caixaAlternativas.appendChild(botaoAlternativa);
        });
    } else {
        mostraResultado(); // Se não há mais perguntas, mostra o resultado final
    }
}

// Função para lidar com a escolha de uma alternativa
function escolheAlternativa(afirmacao) {
    historicoAfirmacoes.push(afirmacao); // Adiciona a afirmação ao histórico
    perguntaAtual++; // Avança para a próxima pergunta
    mostraPergunta(); // Exibe a próxima pergunta
}

// Função para mostrar o resultado final
function mostraResultado() {
    caixaPerguntas.style.display = 'none'; // Esconde a caixa de perguntas
    caixaAlternativas.style.display = 'none'; // Esconde a caixa de alternativas
    caixaResultado.style.display = 'block'; // Mostra a caixa de resultado

    let resultadoFinal = "=== Seu Destino Final ===\n\n";
    historicoAfirmacoes.forEach((afirmacao, index) => {
        resultadoFinal += `Situação ${index + 1}: ${afirmacao}\n\n`;
    });
    resultadoFinal += "Lembre-se: cada escolha tece o fio do seu destino. As consequências de suas ações, boas ou ruins, constroem quem você se tornará.";

    // Para exibir no console (ainda útil para debug)
    console.log(resultadoFinal);
    
    // Para exibir na página HTML
    textoResultado.innerHTML = resultadoFinal; 
}

// Inicia o jogo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    mostraPergunta();
});