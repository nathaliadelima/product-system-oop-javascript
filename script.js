class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  mostrarDetalhes() {
    console.log(`${this.nome} - R$ ${this.preco}`);
  }
}

// criando objeto
const produto1 = new Produto("Mouse", 50);

produto1.mostrarDetalhes();

class Eletronico extends Produto {
  constructor(nome, preco, garantia) {
    super(nome, preco);
    this.garantia = garantia;
  }

  mostrarDetalhes() {
    console.log(
      `${this.nome} - R$ ${this.preco} - Garantia: ${this.garantia} meses`,
    );
  }
}

const celular = new Eletronico("Celular", 1500, 12);

celular.mostrarDetalhes();
