export declare const getUser: (token: string) => Promise<{
    user?: Record<string, string>;
    error?: string;
}>;
