import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamentos-pesquisa',
  templateUrl: './agendamentos-pesquisa.component.html',
  styleUrls: ['./agendamentos-pesquisa.component.css']
})
export class AgendamentosPesquisaComponent {

  agendamentos = [
    {
        id: 4,
        data: '2018-03-25',
        doacao: {
            id: 1,
            doadoraParto: {
                id: 1,
                doadora: {
                    id: 1,
                    ativo: true,
                    pessoa: {
                        id: 1,
                        nome: 'RENATA FACO DE SABOIA CASTRO',
                        dataNascimento: '1980-05-27',
                        endereco: {
                            logradouro: 'RUA CORONEL JOAO CARNEIRO',
                            numero: '67',
                            complemento: 'APT 705',
                            bairro: {
                                id: 56,
                                nome: 'FÁTIMA',
                                cidade: {
                                    id: 756,
                                    nome: 'FORTALEZA',
                                    estado: {
                                        id: 6,
                                        sigla: 'CE',
                                        nome: 'CEARÁ'
                                    }
                                }
                            }
                        }
                    }
                },
                dataParto: '2015-08-31',
                nomeBebe: 'CECILIA'
            },
            banco: {
                id: 1,
                nome: 'MATERNIDADE ESCOLA ASSIS CHATEUBRIAND',
                endereco: {
                    logradouro: 'RUA CORONEL NUNES DE MELO',
                    numero: 'S/N',
                    complemento: null,
                    bairro: {
                        id: 52,
                        nome: 'RODOLFO TEÓFILO',
                        cidade: {
                            id: 756,
                            nome: 'FORTALEZA',
                            estado: {
                                id: 6,
                                sigla: 'CE',
                                nome: 'CEARÁ'
                            }
                        }
                    }
                },
                'telefone': '(85) 3366-8536',
                'email': 'blhmeac@meac.ufc.br'
            }
        },
        objetivo: {
            id: 1,
            nome: 'ENVIAR POTE'
        },
        rota: {
            id: 1,
            diaSemana: {
                id: 1,
                nome: 'SEGUNDA'
            },
            horario: {
                id: 1,
                nome: 'MANHÃ'
            }
        }
    },
    {
        id: 5,
        data: '2018-03-25',
        doacao: {
            id: 2,
            doadoraParto: {
                id: 2,
                doadora: {
                    id: 2,
                    ativo: true,
                    pessoa: {
                        id: 3,
                        nome: 'MARIA TIBURCIO CAVALCANTE',
                        dataNascimento: '1985-11-15',
                        endereco: {
                            logradouro: 'RUA TIBURCIO CAVALCANTE',
                            numero: '3310',
                            complemento: 'APT 1201',
                            bairro: {
                                id: 17,
                                nome: 'ALDEOTA',
                                cidade: {
                                    id: 756,
                                    nome: 'FORTALEZA',
                                    estado: {
                                        id: 6,
                                        sigla: 'CE',
                                        nome: 'CEARÁ'
                                    }
                                }
                            }
                        }
                    }
                },
                dataParto: '2018-02-25',
                nomeBebe: 'MARIAZINHA'
            },
            banco: {
                id: 1,
                nome: 'MATERNIDADE ESCOLA ASSIS CHATEUBRIAND',
                endereco: {
                    logradouro: 'RUA CORONEL NUNES DE MELO',
                    numero: 'S/N',
                    complemento: null,
                    bairro: {
                        id: 52,
                        nome: 'RODOLFO TEÓFILO',
                        cidade: {
                            id: 756,
                            nome: 'FORTALEZA',
                            estado: {
                                id: 6,
                                sigla: 'CE',
                                nome: 'CEARÁ'
                            }
                        }
                    }
                },
                'telefone': '(85) 3366-8536',
                'email': 'blhmeac@meac.ufc.br'
            }
        },
        objetivo: {
            id: 1,
            nome: 'ENVIAR POTE'
        },
        rota: {
            id: 2,
            diaSemana: {
                id: 1,
                nome: 'SEGUNDA'
            },
            horario: {
                id: 2,
                nome: 'TARDE'
            }
        }
    }
];

}
