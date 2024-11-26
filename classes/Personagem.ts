import Arma from './Arma';

export default class Personagem {
    private nome: string = '';
    private vida: number = 100;
    private forca: number = 10;
    private arma: Arma | null = null;

    constructor(nome: string, vida: number = 100, forca: number = 10) {
        if (!nome) throw new Error('O nome do personagem não pode ser vazio.');
        this.nome = nome;
        this.vida = Math.max(vida, 0);
        this.forca = forca;
    }

    getNome() {
        return this.nome;
    }

    getVida() {
        return this.vida;
    }

    getForca() {
        return this.forca;
    }

    getArma() {
        return this.arma;
    }

    setNome(nome: string) {
        if (!nome.trim()) {
            console.error('Erro: O nome não pode ser vazio.');
            return;
        }
        this.nome = nome;
    }

    setVida(vida: number) {
        this.vida = Math.max(vida, 0);
    }

    setForca(forca: number) {
        this.forca = forca;
    }

    setArma(arma: Arma) {
        this.arma = arma;
    }

    receberDano(dano: number) {
        this.vida -= dano;
        if (this.vida <= 0) {
            console.log(`${this.nome} caiu em combate!`);
        }
    }

    causarDano() {
        return this.forca + (this.arma?.getDano() || 0);
    }

    atacar(alvo: Personagem) {
        const dano = this.causarDano();
        console.log(`${this.nome} ataca ${alvo.getNome()} com ${dano} de dano.`);
        alvo.receberDano(dano);
    }
}
