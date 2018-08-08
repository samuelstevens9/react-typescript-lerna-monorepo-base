// src/types/index.tsx

export interface IFetchObject {
    fetching: boolean;
    fetched: boolean;
    fetch_error: string;
    data: any[];
}

export interface IStoreState {
    fetching: boolean;
    fetched: boolean;
    fetch_error: string;

    languageName: string;
    enthusiasmLevel: number;
    email: string;
    password: string;
    confirmPassword: string;

    users: IFetchObject;
    permissions: IFetchObject;

    
}