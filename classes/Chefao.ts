import Inimigo from './Inimigo';
import Personagem from './Personagem';

export default class Chefao extends Inimigo {
    atacar(personagem: Personagem) {
        const chanceDeAcerto = Math.random();
        if (chanceDeAcerto < 0.8) {
            console.warn('O ataque do chefão falhou e ele perdeu um turno.');
        } else {
            personagem.receberDano(this.causarDano() * 2);
            console.log('Ataque crítico! Dano dobrado pelo Chefão.');
        }
    }

    receberDano(dano: number) {
        super.receberDano(dano);
        if (this.getVida() <= 0) {
            console.log('O Chefão foi derrotado! Será o fim de tudo ou apenas o começo?');
        }
    }
}
