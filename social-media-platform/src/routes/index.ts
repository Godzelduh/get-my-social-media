import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/api/user', router);
    app.get('/api/user/profile', indexController.getUserProfile);
    app.post('/api/user/create-post', indexController.createPost);
    app.delete('/api/user/delete-post/:id', indexController.deletePost);
}