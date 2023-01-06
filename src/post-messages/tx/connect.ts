import { InkeyTxMsgBase } from '../index';

export type TxMsgConnect = InkeyTxMsgBase<'connect', {
	siteName: string;
}>;
