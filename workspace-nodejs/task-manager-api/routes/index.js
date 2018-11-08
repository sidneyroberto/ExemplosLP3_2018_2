import express from 'express';
import TarefaController from '../controllers/TarefaController';

const router = express.Router();
let tarefaCtrl = new TarefaController();

// Serviço para listar os graus de severidade
router.get('/tarefas/severidades', tarefaCtrl.listarSeveridades);

// Serviço para cadastrar uma nova tarefa
router.post('/tarefas', tarefaCtrl.salvar);

// Serviço para atualizar uma tarefa
router.put('/tarefas', tarefaCtrl.atualizar);

// Serviço para listar as tarefas cadastradas
router.get('/tarefas', tarefaCtrl.listarTarefas);

export default router;
