class Miembro {
  nombre;
  cargo;
  #salario;

  constructor(nombre, cargo, salario) {
    this.nombre = nombre;
    this.cargo = cargo;
    this.#salario = salario;
  }

  #presentarse() {
    console.log(`Hola, soy ${this.nombre} y soy ${this.cargo}`);
  }

  mensaje() {
    this.#presentarse();
  }
}

class Jefe extends Miembro {
  constructor(nombre, cargo, salario, dirigeA) {
    super(nombre, cargo, salario);
    this.dirigeA = dirigeA;
  }

  #presentarse() {
    console.log(
      `Mi nombre es ${this.nombre}, soy ${this.cargo} y voy a dirigir la ${this.dirigeA}`
    );
  }

  mensaje() {
    this.#presentarse();
  }
}

const jefe1 = new Jefe(
  "Pedro",
  "Gerente de operaciones",
  3000,
  "sucursal de Málaga"
);

jefe1.mensaje(); // Mi nombre es Pedro, soy Gerente de operaciones y voy a dirigir la sucursal de Málaga
