import { Router } from 'express';
import { findMovie, listAllMovies } from '../controllers/movies-controller.mjs';

const router = Router();

router.get('/', listAllMovies);
router.get('/:id', findMovie);
export default router;
