import { InkeyTxMsgBase } from '../index';

export type TxMsgSetApp = InkeyTxMsgBase<'set-app', {
	appCode: string;
}>;
