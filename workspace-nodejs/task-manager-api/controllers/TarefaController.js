import Tarefa from '../models/tarefa';

class TarefaController {

    listarSeveridades(req, res) {
        const severidades = Tarefa.schema.path('severidade').enumValues;
        res.json(severidades);
    }

    salvar(req, res) {
        const tarefa = req.body;

        let funcaoErro = (erro) => {
            console.log(erro);
            res.status(500).json('Erro ao tentar salvar a tarefa');
        };

        Tarefa
            .create(tarefa)
            .then(
                tarefa => res.status(201).json(tarefa),
                erro => funcaoErro(erro)
            )
            .catch(erro => funcaoErro(erro));
    }

    atualizar(req, res) {
        const tarefa = req.body;

        let funcaoErro = (erro) => {
            console.log(erro);
            res.status(500).json('Erro ao tentar atualizar a tarefa');
        };

        Tarefa
            .findByIdAndUpdate(tarefa._id, tarefa)
            .exec()
            .then(
                tarefa => res.json(tarefa),
                erro => funcaoErro(erro)
            )
            .catch(erro => funcaoErro(erro));
    }

    listarTarefas(req, res) {
        Tarefa
            .find()
            .exec()
            .then(
                tarefas => res.json(tarefas),
                erro => {
                    console.log(erro);
                    res.status(500).json('Erro ao tentar listar as tarefas');
                }
            );
    }
}

export default TarefaController;