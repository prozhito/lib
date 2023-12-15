export declare const authWithToken: (access?: string, refresh?: string) => Promise<{
    user?: Record<string, string> | undefined;
    error?: string | undefined;
}>;
