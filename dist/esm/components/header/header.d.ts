import React from 'react';
import type { TMainMenu } from '../../api/context/types';
type THeaderData = {
    main_menu?: Array<TMainMenu>;
    account?: boolean;
};
export declare const Header: ({ main_menu, account }: THeaderData) => React.JSX.Element;
export {};
