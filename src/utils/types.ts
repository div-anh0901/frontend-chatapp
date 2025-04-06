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