import Arma from '../classes/Arma';
import Chefao from '../classes/Chefao';
import Inimigo from '../classes/Inimigo';
import Personagem from '../classes/Personagem';

// Armas inspiradas em Harry Potter, House of the Dragon, Senhor dos anéis
const espadaDeAnduril = new Arma('Espada de Andúril', 'A lâmina que foi quebrada, agora forjada novamente.', 20);
const varinhaDeSalgueiro = new Arma('Varinha de Salgueiro', 'Uma poderosa varinha mágica capaz de lançar feitiços fatais.', 15);
const machadoDeAnão = new Arma('Machado dos Anões', 'Uma arma resistente e pesada, ideal para combates próximos.', 18);
const arcoDeGaladriel = new Arma('Arco de Galadriel', 'Um arco élfico que nunca erra o alvo.', 14);
const adagaDoDragão = new Arma('Adaga do Dragão', 'Uma adaga forjada com presas de dragão, com veneno mortal.', 17);

// Personagem principal Elfa da Floresta
const guerreiro = new Personagem('Lia Galanodel', 400, 80);

// Inimigos 
const urukHai = new Inimigo('Uruk-Hai', 200, 60);
const basilisco = new Inimigo('Basilisco', 180, 75);
const cavaleiroDourado = new Inimigo('Cavaleiro Dourado', 150, 50);
const dementador = new Inimigo('Dementador', 140, 40);
const dragaoNegro = new Inimigo('Dragão Negro', 300, 100);

// Chefão
const chefao = new Chefao('Sauron Renascido', 400, 80);

// Introdução à batalha
console.log('Os ventos da guerra anunciam tempos sombrios. Lia Galanodel deve enfrentar inimigos temíveis.');
console.log(`Nome: ${guerreiro.getNome()} | Vida: ${guerreiro.getVida()} | Força: ${guerreiro.getForca()}`);

// Equipar armas
guerreiro.setArma(espadaDeAnduril);
urukHai.setArma(machadoDeAnão);
basilisco.setArma(adagaDoDragão);
dementador.setArma(varinhaDeSalgueiro);
cavaleiroDourado.setArma(arcoDeGaladriel);
dragaoNegro.setArma(arcoDeGaladriel);

// Primeira rodada
guerreiro.atacar(urukHai);
basilisco.atacar(guerreiro);
guerreiro.atacar(dementador);
dementador.atacar(guerreiro);

console.log(`Após a batalha inicial, ${guerreiro.getNome()} tem ${guerreiro.getVida()} de vida.`);

// Enfrentando outros inimigos
guerreiro.atacar(cavaleiroDourado);
cavaleiroDourado.atacar(guerreiro);

guerreiro.atacar(dragaoNegro);
dragaoNegro.atacar(guerreiro);

// Enfrentando o Chefão
guerreiro.atacar(chefao);
chefao.atacar(guerreiro);
chefao.atacar(guerreiro);

// Finalizando a batalha
if (guerreiro.getVida() <= 0) {
    console.log(`${guerreiro.getNome()} foi derrotado! O mal venceu, e a terra foi consumida pela escuridão.`);
} else {
    console.log(`${guerreiro.getNome()} sobreviveu à batalha! O mundo foi salvo, pelo menos por enquanto.`);
}

console.log(`Depois de um confronto épico com ${chefao.getNome()}, ${guerreiro.getNome()} está com ${guerreiro.getVida()} de vida. O destino do Mundo Mágico depende de sua próxima escolha.`);
