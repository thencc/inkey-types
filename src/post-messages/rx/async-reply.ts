import { InkeyRxMsgBase } from '../index';

export type RxMsgAsyncReply = InkeyRxMsgBase<'async-reply', any> & {
	async: true;
	uuid: string; // unique identifier to match back in client dapp (uses timestamp)
	payload: any;
};
