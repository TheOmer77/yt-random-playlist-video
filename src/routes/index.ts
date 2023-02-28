import { Router } from 'express';

import { randomPlaylistVid, root } from 'controllers';

const router = Router();

router.get('/', root);
router.get('/:id', randomPlaylistVid);

export default router;
