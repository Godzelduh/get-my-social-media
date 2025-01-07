export interface User {
    id: string;
    username: string;
    email: string;
}

export interface Post {
    id: string;
    content: string;
    authorId: string;
}