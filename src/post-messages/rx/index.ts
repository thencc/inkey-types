// rx: from inkey-wallet

import { InkeyPostMsgBase } from '../base';
import { IFrameCtx } from '../index';

// defaults / built-ins
import { RxMsgLogin } from './login';
import { RxMsgHide } from './hide';
import { RxMsgDisconnect } from './disconnect';
import { RxMsgStyleRecommendations } from './style-recs';
import { RxMsgAsyncReply } from './async-reply';
import { RxMsgReady } from './ready';
import { RxMsgSetHeight } from './set-height';

// rx post msgs
export type InkeyRxMsgBase<MessType = string, Payload = undefined> = InkeyPostMsgBase<MessType, Payload> & {
	// optional fields because they are shimmed in during .sendMessage method
	source?: 'ncc-inkey-wallet';
	context?: IFrameCtx;
};
export type InkeyRxPostMsgDefault = RxMsgLogin | RxMsgHide | RxMsgDisconnect | RxMsgStyleRecommendations | RxMsgAsyncReply | RxMsgReady | RxMsgSetHeight;
export type InkeyRxPostMsgType = InkeyRxPostMsgDefault['type'];
export type InkeyRxMsg<T> = T extends InkeyRxMsgBase<string, T> ? T : InkeyRxPostMsgDefault; // accept passed in generic w constraints or a default/known post msg type
export type RxEvents = MessageEvent<InkeyRxPostMsgDefault>;

// re-exports
export * from './login';
export * from './hide';
export * from './disconnect';
export * from './style-recs';
export * from './async-reply';
export * from './ready';
export * from './set-height';