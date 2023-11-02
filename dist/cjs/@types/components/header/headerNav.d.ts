import { FC } from "react";
import { TMainMenu } from "../../api/types";
type THeaderNavProps = {
    desktop: boolean;
    open: boolean;
    main_menu: Array<TMainMenu>;
    onClose?: () => void;
};
export declare const HeaderNav: FC<THeaderNavProps>;
export {};
