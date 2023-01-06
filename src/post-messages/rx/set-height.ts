import { InkeyRxMsgBase } from '../index';

export type RxMsgSetHeight = InkeyRxMsgBase<'set-height', {
	height: number;
}>;
