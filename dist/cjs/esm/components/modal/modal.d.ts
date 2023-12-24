import React from 'react';
type TModal = ({ children }: {
    children?: React.ReactNode;
}) => React.JSX.Element;
interface IModal extends TModal {
    Show: (children?: React.ReactNode) => void;
}
export declare const Modal: IModal;
export {};
