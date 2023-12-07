import { FC } from 'react';
import { TLogo, TMainMenu } from '../../api/types';
type THeaderData = {
    logos?: Array<TLogo>;
    main_menu?: Array<TMainMenu>;
};
export declare const Header: FC<THeaderData>;
export {};
