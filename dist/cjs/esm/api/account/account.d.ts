export declare class Account {
    static _instance: Account;
    private _user;
    private _loading;
    private _error;
    static _updateCallback: (() => void)[];
    constructor(updateCallback?: () => void);
    set user(data: Record<string, string>);
    private emitUpdate;
    auth(access?: string, refresh?: string): Promise<{
        user?: Record<string, string> | undefined;
        error?: string | undefined;
    }>;
    login(data: Record<string, string>): void;
    logout(): void;
    info(): {
        loading: boolean;
        error: string;
        user: Record<string, string> | null;
    };
}
