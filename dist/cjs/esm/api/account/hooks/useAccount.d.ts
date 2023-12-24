type TUser = Record<string, string>;
type TAccount = {
    loading: boolean;
    error: string;
    user: TUser | null;
    setUser: (user: TUser) => void;
    login: (data: TUser) => void;
    logout: () => void;
};
export declare const useAccount: () => TAccount;
export {};
