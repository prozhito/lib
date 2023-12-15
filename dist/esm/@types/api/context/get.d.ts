import { TContext } from './types';
export declare const getContextData: () => Promise<{
    data?: TContext;
    error?: string;
}>;
