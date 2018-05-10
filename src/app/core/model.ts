import { DoadoraService } from './../doadoras/doadora.service';
export class Doadora {
  id: number;
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
