import React from 'react';
type TFormLoginProps = {
    loading: boolean;
    error: string;
    user: Record<string, string> | null;
    login: (data: Record<string, string>) => void;
    logout: () => void;
    visible: boolean;
    closeModal: () => void;
};
export declare const ModalAccount: ({ loading, error, user, login, logout, visible, closeModal }: TFormLoginProps) => React.JSX.Element;
export {};
