import React from 'react';
import type { TLogo, TMainMenu } from '../../api/context/types';
type THeaderData = {
    logos?: Array<TLogo>;
    main_menu?: Array<TMainMenu>;
    account?: boolean;
};
export declare const Header: ({ main_menu, account }: THeaderData) => React.JSX.Element;
export {};
