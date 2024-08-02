onst caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Agricultura Sustentável",
        alternativas: [
            {
                texto: "introducao",
                afirmacao: "Agricultura sustentável é aquela que respeita o meio ambiente, é justa do ponto de vista social e consegue ser economicamente viável. A agricultura para ser considerada sustentável deve garantir, às gerações futuras, a capacidade de suprir as necessidades de produção e qualidade de vida. "
            },
            {

        ]
    },
    {
        enunciado: "Quais são as características da agricultura sustentável?">",
        alternativas: [
            {
                texto: "Conservação do solo;.</li>
            Conservação da água;
            Cuidado ambiental por meio do uso de técnicas apropriadas
            Promoção da economia sustentável, criando técnicas economicamente viáveis;.
            Preocupação com a sociedade, desde o produtor até o consumidor final do que é produzido
            Respeito ao trabalhador rural.
                
            {

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