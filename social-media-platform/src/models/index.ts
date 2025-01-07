import User from './User.ts'; // Ensure that './User' file exists in the same directory
import Thought from './Thought';

export { User, Thought };

export class Post {
    id: number;
    content: string;
    authorId: number;

    constructor(id: number, content: string, authorId: number) {
        this.id = id;
        this.content = content;
        this.authorId = authorId;
    }

    // Method to update post content
    updateContent(content: string) {
        this.content = content;
    }
}