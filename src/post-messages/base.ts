//

export type InkeyPostMsgBase<MessType = string, Payload = undefined> = {
	type: MessType;
	source?: 'ncc-inkey-wallet' | 'ncc-inkey-client'; // rx: from inkey-wallet, tx: from inkey-client (dapp)
	// payload: Payload; // see code below for a better implementation. looks tricky but aims to type payload IF generic is passed in and omit the field if nothing is passed in
} &
	// IF a payload generic is passed in use it, otherwise omit it
	(Payload extends undefined ?
		{} :
		{
			payload: Payload;
		}
	);
