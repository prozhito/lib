import React from 'react';
type TUserMenuProps = {
    user_data?: {
        user?: Record<string, string>;
        error?: string;
    };
};
export declare const UserMenu: ({ user_data }: TUserMenuProps) => React.JSX.Element;
export {};
