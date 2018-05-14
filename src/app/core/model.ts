export class Estado {
  id: number;
  nome: string;
  sigla: string;
}

export class Cidade {
  id: number;
  nome: string;
  estado = new Estado();
}

export class Bairro {
  id: number;
  nome: string;
  cidade = new Cidade();
}

export class Endereco {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro = new Bairro();
}

export class Pessoa {
  id: number;
  nome: string;
  dataNascimento: Date;
  endereco = new Endereco();
}

export class Doadora {
  id: number;
  pessoa = new Pessoa();
  dataParto: Date;
  nomeBebe: string;
}

export class Banco {
  id: number;
}

export class Objetivo {
  id: number;
}

export class Rota {
  id: number;
}

export class Agendamento {
  id: number;
  data: Date;
  doadora = new Doadora();
  banco = new Banco();
  objetivo = new Objetivo();
  rota = new Rota();
}
