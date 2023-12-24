import React from 'react';

type TMainMenu = {
    title: string;
    page_slug: string | null;
    url: string | null;
    children: Array<TChild> | null;
    target_blank: boolean;
};
type TChild = {
    title: string;
    page_slug: string | null;
    url: string | null;
    children: unknown;
    target_blank: boolean;
};

declare const ProzhitoHeader: ({ main_menu, account }: {
    main_menu?: TMainMenu[] | undefined;
    account?: boolean | undefined;
}) => Promise<React.JSX.Element>;

declare const StylesInject: React.FC;

declare class Account {
    static _instance: Account;
    private _user;
    private _loading;
    private _error;
    static _updateCallback: (() => void) | null;
    constructor(updateCallback?: () => void);
    set user(data: Record<string, string>);
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

export { Account, ProzhitoHeader, StylesInject };
