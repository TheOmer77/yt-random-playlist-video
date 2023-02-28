import { Router } from 'express';

import { root } from 'controllers';

const router = Router();

router.get('/', root);

export default router;
