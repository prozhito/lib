import { FC, ReactNode } from 'react';
type TExternalLinkProps = {
    url: string | null;
    children: ReactNode;
    className?: string;
    target_blank: boolean;
};
export declare const ExternalLink: FC<TExternalLinkProps>;
export {};
