import React from 'react';
import type { TLogo, TMainMenu } from '../../api/context/types';
type THeaderData = {
    logos?: Array<TLogo>;
    main_menu?: Array<TMainMenu>;
    account?: boolean;
    user_data?: {
        user?: Record<string, string>;
        error?: string;
    };
};
export declare const Header: ({ user_data, main_menu, account }: THeaderData) => React.JSX.Element;
export {};
