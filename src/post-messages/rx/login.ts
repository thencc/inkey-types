import { InkeyRxMsgBase } from '../index';

export type InkeyAccount = {
	address: string;
	name: string;
	chain: string;
	walletId: string;
	active: boolean;
	timeAdded?: number; // datetime as number
	timeLastUsed?: number;
}

export type MsgPayloadLogin = {
	accounts: InkeyAccount[];
};

export type RxMsgLogin = InkeyRxMsgBase<'login', MsgPayloadLogin>;
