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

declare const ProzhitoHeader: ({ main_menu }: {
    main_menu?: TMainMenu[] | undefined;
}) => React.JSX.Element;

export { ProzhitoHeader };
