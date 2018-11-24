import React, { Component } from 'react';

class Cadastro extends Component {

    constructor() {
        super();

        this.state = {
            tarefa: {
                descricao: '',
                deadline: new Date(),
                tempoEstimadoDuracao: 0,
                severidade: '',
                cancelada: false,
                finalizada: false
            },
            sucesso: false,
            erro: false
        };

        this.aoAlterarValorDoCampo = this.aoAlterarValorDoCampo.bind(this);
    }

    aoAlterarValorDoCampo(evento) {
        let valor = evento.target.value;
        let nomeDoCampo = evento.target.name;
        let tarefa = { ...this.state.tarefa };
        tarefa[nomeDoCampo] = valor;
        this.setState({ tarefa });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h3>Nova tarefa</h3>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label>Descrição</label>
                                <input
                                    type="text"
                                    name="descricao"
                                    value={this.state.tarefa.descricao}
                                    className="form-control"
                                    onChange={this.aoAlterarValorDoCampo}
                                    required />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cadastro;