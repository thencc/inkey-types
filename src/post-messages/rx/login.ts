import { InkeyRxMsgBase } from '../index';

export type InkeyAccountBase = {
	address: string;
	username: string;
}
export type MsgPayloadLogin = {
	accounts: InkeyAccountBase[];
};

export type RxMsgLogin = InkeyRxMsgBase<'login', MsgPayloadLogin>;
