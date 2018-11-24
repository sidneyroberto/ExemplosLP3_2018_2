import axios from 'axios';
import { URL_API_ANA } from '../config';
import dateFormat from 'dateformat';

class MonitoramentoController {

    realizarLeituraDoDia(req, res) {
        const dataAtual = dateFormat(new Date(), 'dd/mm/yyyy');
        const url = URL_API_ANA
            .replace('DATA_INICIO', dataAtual)
            .replace('DATA_FIM', dataAtual);

        axios
            .get(url)
            .then(resposta => res.json(resposta.data))
            .catch(erro => res.status(500).json(erro));
    }
}

export default MonitoramentoController;

