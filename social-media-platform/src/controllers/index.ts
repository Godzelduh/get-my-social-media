import { Request, Response } from 'express';

export class IndexController {
    getUserProfile(req: Request, res: Response) {
        // Logic to get user profile
        res.send('User profile');
    }

    createPost(req: Request, res: Response) {
        // Logic to create a new post
        res.send('Post created');
    }

    deletePost(req: Request, res: Response) {
        // Logic to delete a post
        res.send('Post deleted');
    }
}