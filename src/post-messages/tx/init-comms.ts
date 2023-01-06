import { InkeyTxMsgBase } from '../index';

export type TxMsgInitComms = InkeyTxMsgBase<'init-comms', {
	url: string;
}>;
