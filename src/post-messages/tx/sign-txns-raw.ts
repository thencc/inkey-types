import { InkeyAccount, InkeyTxMsgBase } from '../index';

export type TxMsgSignTxnsRaw = InkeyTxMsgBase<'sign-txns-raw', {
	txns: Uint8Array[],
	connectedAccounts?: InkeyAccount[];
}>;
