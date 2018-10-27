import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json('Oi!');
});

// Serviço para teste do deploy
router.get('/tarefas', (req, res) => {
  res.json([
    {
      descricao: 'Testar web service',
      severidade: 'alta',
      deadline: new Date()
    },
    {
      descricao: 'Implementar interface com o usuário',
      severidade: 'média',
      deadline: new Date()
    },
    {
      descricao: 'Fazer o deploy da aplicação',
      severidade: 'baixa',
      deadline: new Date()
    }
  ]);
});

export default router;
