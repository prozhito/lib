import { FC } from "react";
import { TMainMenu } from "../../api/types";
type THeaderMenuProps = {
    desktop: boolean;
    open: boolean;
    main_menu: Array<TMainMenu>;
    onClose?: () => void;
};
export declare const HeaderMenu: FC<THeaderMenuProps>;
export {};
