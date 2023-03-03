// rx: from inkey-wallet

import { InkeyPostMsgBase } from '../base';
import { IFrameCtx } from '../index';

// defaults / built-ins
import { RxMsgStyleRecommendations } from './style-recs';
import { RxMsgAsyncReply } from './async-reply';
import { RxMsgDisconnect } from './disconnect';
import { RxMsgSetHeight } from './set-height';
import { RxMsgLogin } from './login';
import { RxMsgReady } from './ready';
import { RxMsgHide } from './hide';
import { RxMsgShow } from './show';

// rx post msgs
export type InkeyRxMsgBase<MessType = string, Payload = undefined> = InkeyPostMsgBase<MessType, Payload> & {
	// optional fields because they are shimmed in during .sendMessage method
	source?: 'ncc-inkey-wallet';
	context?: IFrameCtx;
};
export type InkeyRxPostMsgDefault = RxMsgLogin | RxMsgHide | RxMsgShow | RxMsgDisconnect | RxMsgStyleRecommendations | RxMsgAsyncReply | RxMsgReady | RxMsgSetHeight;
export type InkeyRxPostMsgType = InkeyRxPostMsgDefault['type'];
export type RxEvents = MessageEvent<InkeyRxPostMsgDefault>;

// re-exports
export * from './style-recs';
export * from './async-reply';
export * from './disconnect';
export * from './set-height';
export * from './login';
export * from './ready';
export * from './hide';
export * from './show';