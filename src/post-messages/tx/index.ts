// tx: from inkey-client

import { InkeyPostMsgBase } from '../base';

// defaults / built-ins
import { TxMsgSetVisibility } from './set-visibility';
import { TxMsgGetStyleRecs } from './get-style-recs';
import { TxMsgSignTxnsRaw } from './sign-txns-raw';
import { TxMsgSetStyles } from './set-styles';
import { TxMsgDisconnect } from './disconnect';
import { TxMsgInitComms } from './init-comms';
import { TxMsgSignTxns } from './sign-txns';
import { TxMsgConnect } from './connect';
import { TxMsgSetApp } from './set-app';
import { TxMsgReject } from './reject';

// tx post msgs
export type InkeyTxMsgBase<MessType = string, Payload = undefined> = InkeyPostMsgBase<MessType, Payload> & {
	// optional fields because they are shimmed in during .emit or .emitAsync method
	source?: 'ncc-inkey-client';
	async?: boolean;
	uuid?: string;
};
export type InkeyTxPostMsgDefault = TxMsgGetStyleRecs | TxMsgInitComms | TxMsgSetApp | TxMsgSignTxnsRaw | TxMsgSignTxns | TxMsgConnect | TxMsgDisconnect | TxMsgReject | TxMsgSetVisibility | TxMsgSetStyles;
export type InkeyTxPostMsgType = InkeyTxPostMsgDefault['type'];
export type TxEvents = MessageEvent<InkeyTxPostMsgDefault>;

// re-exports
export * from './set-visibility';
export * from './get-style-recs';
export * from './set-styles';
export * from './sign-txns-raw';
export * from './disconnect';
export * from './init-comms';
export * from './sign-txns';
export * from './connect';
export * from './set-app';
export * from './reject';