import { InkeyStyleObj } from '../../inkey-types';
import { InkeyTxMsgBase } from '../index';

// we don't want to allow injection here, probably!
// so all styles should be passed as booleans or otherwise
// interpretable values, that are translated or verified by inkey
// on the wallet side.
export type TxMsgSetStyles = InkeyTxMsgBase<'set-styles', {
    styles: InkeyStyleObj
}>;