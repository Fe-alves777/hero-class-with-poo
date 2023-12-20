
class heroi {
    constructor (nome, idade, tipo) {

        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = " ";
        switch (this.tipo) {

            case "mago": 
                ataque = "magia";
                break

            case "guerreiro":
                ataque = "espada";
                break
            
            case "monge":
                ataque ="artes marciais";
                break
            
            case "ninja":
                ataque ="shuriken";
                break
            
            default:
                ataque ="comum";


        } 

        alert(`A ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }

    atacarSe() {
        let ataque = " ";
        if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "mago") {
            ataque = "magia";
        } else {
            ataque = "comum";
        }

        alert(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

let personagemFeminino = new heroi ("Maria", 9, "monge");

let personagemMasculino = new heroi ("Felipe", 21, "mago");

personagemFeminino.atacar();
personagemMasculino.atacarSe();
