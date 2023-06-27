import { InkeyTxMsgBase } from '../index';

export type TxMsgSetStyles = InkeyTxMsgBase<'get-style-recs', {
    styles: string; // string of css styles
}>;