import { InkeyAccount, InkeyTxMsgBase } from '../index';

export type TxMsgConnect = InkeyTxMsgBase<'connect', {
	siteName?: string;
	connectedAccounts?: InkeyAccount[];
}>;
