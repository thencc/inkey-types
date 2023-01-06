import { InkeyTxMsgBase } from '../index';
// import { TxnForSigning } from '../../../types';
import { TxnForSigning } from '../../algonaut-types';

export type TxMsgSignTxns = InkeyTxMsgBase<'sign-txns', {
	txns: string[] | TxnForSigning[];
}>;
