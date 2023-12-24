export type TContext = {
    logos: Array<TLogo>;
    main_menu: Array<TMainMenu>;
    footer_menu: Array<TFooterMenu>;
    footer_links: Array<TFooterLink>;
    footer_social: Array<TFooterSocial>;
};
export type TLogo = {
    icon: string;
    alt_text: string;
    page_slug: string | null;
    url: string | null;
    target_blank: boolean;
};
export type TMainMenu = {
    title: string;
    page_slug: string | null;
    url: string | null;
    children: Array<TChild> | null;
    target_blank: boolean;
};
export type TFooterMenu = {
    title: string;
    page_slug: string | null;
    url: string | null;
    children: Array<TChild> | null;
    target_blank: boolean;
};
export type TFooterLink = {
    title: string;
    page_slug: string | null;
    url: string | null;
    target_blank: boolean;
};
export type TFooterSocial = {
    title: string;
    icon: string;
    page_slug: string | null;
    url: string | null;
    target_blank: boolean;
};
export type TChild = {
    title: string;
    page_slug: string | null;
    url: string | null;
    children: unknown;
    target_blank: boolean;
};
