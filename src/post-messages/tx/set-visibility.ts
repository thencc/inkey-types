import { InkeyTxMsgBase } from '../index';

export type TxMsgSetVisibility = InkeyTxMsgBase<'set-visibility', {
	visible: boolean;
	route?: string; // page to open inkey-wallet modal to
}>;
