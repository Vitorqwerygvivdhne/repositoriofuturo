function escolhaSeuDestinoJS() {
    let destinoNarrativa = []; // Array para armazenar escolhas e afirmações

    // As mensagens iniciais serão exibidas no console do navegador
    console.log("=== Escolha o Seu Destino ===");
    console.log("Bem-vindo à sua jornada de decisões. Cada escolha que você fizer moldará seu caminho.");

    // --- Situação 1: Carteira na Praça ---
    console.log("\n--- Situação 1 ---");
    let resposta1 = prompt("Você está na pior situação possível, sem ter para onde ir nem onde morar. Andando na praça, você acha uma carteira com 100 reais. O que você faz?\nA) Pegaria essa carteira para você e gastaria esse dinheiro com algo que você necessite.\nB) Tentaria achar o dono original da carteira.");

    if (resposta1 && resposta1.toUpperCase() === "A") {
        destinoNarrativa.push({
            pergunta: "Carteira com R$100",
            escolha: "Pegar para si",
            afirmacao: "Sua escolha revelou um foco pragmático na **sobrevivência imediata**. O alívio foi momentâneo, mas refletiu sua urgência em um momento difícil."
        });
    } else if (resposta1 && resposta1.toUpperCase() === "B") {
        destinoNarrativa.push({
            pergunta: "Carteira com R$100",
            escolha: "Tentar achar o dono",
            afirmacao: "Mesmo em desespero, sua **integridade** se destacou. Essa ação, embora não tenha resolvido seu problema imediato, semeou algo positivo para o futuro."
        });
    } else {
        destinoNarrativa.push({
            pergunta: "Carteira com R$100",
            escolha: "Indecisão ou resposta inválida",
            afirmacao: "A **hesitação** em um momento crucial pode indicar um caminho de incertezas ou a busca por um terceiro caminho."
        });
    }

    // --- Situação 2: Idoso Quase Atropelado ---
    console.log("\n--- Situação 2 ---");
    let resposta2 = prompt("Você sai da praça e continua andando pela cidade, e um senhor está quase sendo atropelado. O que você vai fazer?\nA) Ignorar o senhor e continuar o seu caminho.\nB) Com toda a sua bondade, ajudar o senhor a atravessar a rua antes que ele seja atropelado.");

    if (resposta2 && resposta2.toUpperCase() === "A") {
        destinoNarrativa.push({
            pergunta: "Idoso em perigo",
            escolha: "Ignorar",
            afirmacao: "Você demonstrou um foco singular em sua própria jornada, talvez pela intensidade de seus problemas. Sua prioridade era o seu **próprio avanço**."
        });
    } else if (resposta2 && resposta2.toUpperCase() === "B") {
        destinoNarrativa.push({
            pergunta: "Idoso em perigo",
            escolha: "Ajudar o senhor",
            afirmacao: "Sua **compaixão e senso de responsabilidade** emergiram em um momento de crise alheia. Essa ação solidária é um forte traço do seu caráter."
        });
    } else {
        destinoNarrativa.push({
            pergunta: "Idoso em perigo",
            escolha: "Indecisão ou resposta inválida",
            afirmacao: "A falta de reação diante de uma emergência pode ser um sinal de **sobrecarga** ou de uma reflexão mais profunda sobre o envolvimento com o mundo exterior."
        });
    }

    // --- Situação 3: Carrinho de Compras Abandonado ---
    console.log("\n--- Situação 3 ---");
    let resposta3 = prompt("Você acha um carrinho de supermercado cheio de compras abandonado perto de um supermercado. O que você vai fazer?\nA) Passa reto e não pega o carrinho.\nB) Rouba o carrinho na maior espreita possível.");

    if (resposta3 && resposta3.toUpperCase() === "A") {
        destinoNarrativa.push({
            pergunta: "Carrinho de compras abandonado",
            escolha: "Passar reto",
            afirmacao: "Sua **disciplina ética** prevaleceu sobre a tentação e a necessidade. Você escolheu a conduta correta, mesmo sem supervisão."
        });
    } else if (resposta3 && resposta3.toUpperCase() === "B") {
        destinoNarrativa.push({
            pergunta: "Carrinho de compras abandonado",
            escolha: "Roubar o carrinho",
            afirmacao: "A urgência das suas circunstâncias te levou a um ato de desespero. Essa escolha, embora resolva um problema imediato, pode trazer **consequências inesperadas**."
        });
    } else {
        destinoNarrativa.push({
            pergunta: "Carrinho de compras abandonado",
            escolha: "Indecisão ou resposta inválida",
            afirmacao: "Sua indecisão perante uma oportunidade duvidosa sugere uma **cautela** ou um dilema moral não resolvido."
        });
    }

    // --- Situação 4: Ataque Inesperado ---
    console.log("\n--- Situação 4 ---");
    let resposta4 = prompt("Você está dormindo no chão, usando uma caixa de papelão como cobertor, e do nada vem um homem querendo bater em você. O que você vai fazer?\nA) Levar pancada à solta.\nB) Revidar o ataque da pessoa.");

    if (resposta4 && resposta4.toUpperCase() === "A") {
        destinoNarrativa.push({
            pergunta: "Ataque inesperado",
            escolha: "Levar a pancada",
            afirmacao: "Sua escolha pode indicar uma aversão à violência ou uma **resignação** diante da adversidade. Você pode estar buscando a paz, mesmo à custa de sua segurança imediata."
        });
    } else if (resposta4 && resposta4.toUpperCase() === "B") {
        destinoNarrativa.push({
            pergunta: "Ataque inesperado",
            escolha: "Revidar o ataque",
            afirmacao: "Seu instinto de **autopreservação** é forte. Você demonstrou que não se submeterá à opressão, lutando por sua própria segurança."
        });
    } else {
        destinoNarrativa.push({
            pergunta: "Ataque inesperado",
            escolha: "Indecisão ou resposta inválida",
            afirmacao: "A falta de reação imediata em uma situação de perigo pode ser um sinal de **choque** ou de uma busca por uma solução não-confrontacional."
        });
    }

    // --- Situação 5: Carro de Luxo Aberto ---
    console.log("\n--- Situação 5 ---");
    let resposta5 = prompt("Você anda pela rua, seguindo seu destino, e encontra um carro muito bonito com um valor de 1 milhão de reais. Ele está aberto com a chave dentro. O que você faz?\nA) Pegar o carro para você.\nB) Deixar o carro e seguir em frente.");

    if (resposta5 && resposta5.toUpperCase() === "A") {
        destinoNarrativa.push({
            pergunta: "Carro de luxo abandonado",
            escolha: "Pegar o carro",
            afirmacao: "A tentação de uma vida completamente diferente se mostrou **irresistível**. Essa decisão tem o potencial de mudar tudo, mas com riscos significativos envolvidos."
        });
    } else if (resposta5 && resposta5.toUpperCase() === "B") {
        destinoNarrativa.push({
            pergunta: "Carro de luxo abandonado",
            escolha: "Deixar o carro e seguir em frente",
            afirmacao: "Sua **moralidade e senso de propósito** te guiaram. Você recusou um atalho ilícito para o sucesso, mantendo-se fiel ao seu caminho."
        });
    } else {
        destinoNarrativa.push({
            pergunta: "Carro de luxo abandonado",
            escolha: "Indecisão ou resposta inválida",
            afirmacao: "Sua falta de decisão perante uma oportunidade tão grande pode indicar uma forte **consciência das consequências** ou uma aversão a grandes riscos."
        });
    }

    // --- Situação 6: Casa de Rico Abandonada ---
    console.log("\n--- Situação 6 ---");
    let resposta6 = prompt("Você ainda está andando por aí e vê uma casa de rico abandonada. O que você faz?\nA) Entrar na casa.\nB) Continuar seguindo em frente.");

    if (resposta6 && resposta6.toUpperCase() === "A") {
        destinoNarrativa.push({
            pergunta: "Casa de rico abandonada",
            escolha: "Entrar na casa",
            afirmacao: "Sua **curiosidade e a busca por um refúgio ou oportunidades** te levaram a explorar um território desconhecido. O que você encontrará lá moldará seu próximo passo."
        });
    } else if (resposta6 && resposta6.toUpperCase() === "B") {
        destinoNarrativa.push({
            pergunta: "Casa de rico abandonada",
            escolha: "Continuar seguindo em frente",
            afirmacao: "Você demonstrou um **foco inabalável** em seu próprio destino. Não se desviou por distrações, mantendo sua jornada como prioridade."
        });
    } else {
        destinoNarrativa.push({
            pergunta: "Casa de rico abandonada",
            escolha: "Indecisão ou resposta inválida",
            afirmacao: "Sua hesitação em explorar um local desconhecido pode refletir **cautela** ou a preferência por um caminho mais direto e previsível."
        });
    }

    console.log("\n--- Resumo do Seu Destino ---");
    destinoNarrativa.forEach((item, index) => {
        console.log(`\nSituação ${index + 1}: ${item.pergunta}`);
        console.log(`Sua escolha: ${item.escolha}`);
        console.log(`Afirmação: ${item.afirmacao}`);
    });
    console.log("Lembre-se: cada escolha tece o fio do seu destino. As consequências de suas ações, boas ou ruins, constroem quem você se tornará.");
}