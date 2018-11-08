import mongoose from 'mongoose';

const esquema = new mongoose.Schema({

    descricao: {
        type: String,
        required: true
    },

    deadline: {
        type: Date,
        required: true
    },

    tempoEstimadoDuracao: {
        type: Number,
        required: true
    },

    severidade: {
        type: String,
        required: true,
        enum: ['baixa', 'média', 'alta', 'muito alta']
    },

    cancelada: {
        type: Boolean,
        default: false
    },

    finalizada: {
        type: Boolean,
        default: false
    }
});

const Tarefa = mongoose.model('Tarefa', esquema);
export default Tarefa;