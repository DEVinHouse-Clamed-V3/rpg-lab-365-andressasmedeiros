export default class Arma {
    private readonly nome: string = '';
    private descricao: string = '';
    private dano: number;

    constructor(nome: string, descricao: string, dano: number = 0) {
        this.nome = nome;
        this.descricao = descricao;
        this.dano = Math.max(dano, 0);
    }

    getNome() {
        return this.nome;
    }

    getDano() {
        return this.dano;
    }

    getDescricao() {
        return this.descricao;
    }

    setDano(dano: number) {
        if (dano < 0) {
            console.error('Erro: o dano deve ser maior ou igual a zero.');
        } else {
            this.dano = dano;
        }
    }
}
