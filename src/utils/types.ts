export type CreateUserParams={
    email: string;
    username: string;
    password: string;
}


export type UserCredentialParam={
    email: string;
    password: string;
}

export type User = {
    id: number;
    email: string;
    username: string;
}

export type ListConversations={
    id: number;
    creator: User;
    recipient: User;
    createdAt: string;
}

export type Conversations ={
    id: number;
    creator: User;
    recipient: User;
    createdAt: string;
}

export type Message = {
    id: number;
    content: string;
    createdAt: string;
    author: User;
}