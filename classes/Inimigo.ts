import Personagem from './Personagem';

export default class Inimigo extends Personagem {
    atacar(personagem: Personagem) {
        const chanceDeAcerto = Math.random();
        if (chanceDeAcerto < 0.4) {
            console.warn('Ataque do inimigo falhou! Uma oportunidade foi perdida.');
        } else {
            const danoCausado = this.causarDano();
            personagem.receberDano(danoCausado);
            console.log(`Inimigo causou ${danoCausado} de dano ao personagem.`);
        }
    }
}
