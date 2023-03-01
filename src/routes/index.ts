import { Router } from 'express';

import { healthz, randomPlaylistVid, root } from 'controllers';

const router = Router();

router.get('/', root);
router.get('/healthz', healthz);
router.get('/:id', randomPlaylistVid);

export default router;
