import { InkeyRxMsgBase } from '../index';

export type InkeyAccount = {
	address: string;
	name: string;
	chain: string;
	walletId: string;
}

export type MsgPayloadLogin = {
	accounts: InkeyAccount[];
};

export type RxMsgLogin = InkeyRxMsgBase<'login', MsgPayloadLogin>;
