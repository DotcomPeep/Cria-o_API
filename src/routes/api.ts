import { Router } from 'express';

import * as apiControler from '../controllers/apiControler';

const router = Router();

router.get('/ping', apiControler.ping);

router.get('/random', apiControler.random);

router.get('/nome/:nome', apiControler.nome);

router.post('/frases', apiControler.createPhrase);

router.get('/frases', apiControler.listPhrases);

router.get('/frase/aleatoria', apiControler.randomPhrase);

router.get('/frase/:id', apiControler.getPhrase);

router.put('/frase/:id', apiControler.updatePhrase);

router.delete('/frase/:id', apiControler.deletePhrase);

export default router;