import type { Account, LogicSigAccount, MultisigMetadata, SuggestedParams, Transaction } from './algo-sdk-types/index';

// FYI the import below breaks in some deno envs. TODO check this later...
import type { ApplicationStateSchema } from './algo-sdk-types/src/client/v2/algod/models/types';

export type AlgonautConfig = {
	BASE_SERVER: string;
	INDEX_SERVER?: string; // optional, but helpful
	LEDGER: string;
	PORT: string;
	API_TOKEN: any;
	SIGNING_MODE?: 'local' | 'inkey';
	INKEY_SRC?: string;
	INKEY_ALIGN?: 'center' | 'left' | 'right';
}

export interface AlgonautStateData {
	key: string;
	value: string | number | bigint;
	address: string; // if we can detect an address, we put it here
}

export interface AlgonautContractSchema {
	localInts: number,
	localBytes: number,
	globalInts: number,
	globalBytes: number,
}

export interface AlgonautDeployArguments {
	tealApprovalCode: string;
	tealClearCode: string;
	appArgs: any[];
	schema: AlgonautContractSchema;
	optionalFields?: AlgonautTransactionFields;
}

export interface AlgonautUpdateAppArguments {
	appIndex: number;
	tealApprovalCode: string;
	tealClearCode: string;
	appArgs: any[];
	//schema: AlgonautContractSchema;
	optionalFields?: AlgonautTransactionFields;
	//lease: Uint8Array;
	//rekeyTo: string;
}

export interface AlgonautDeleteAppArguments {
	optionalFields?: AlgonautTransactionFields;
}

export interface AlgonautLsigDeployArguments extends AlgonautDeployArguments {
	lsig: LogicSigAccount;
	noteText?: string;
}

export interface AlgonautAppStateEncoded {
	key: string;
	value: {
		bytes: string;
		type: number;
		uint: number
	}
}

export interface AlgonautGetApplicationResponse {
	id: number;
	params: {
		'approval-program': string;
		'clear-state-program': string;
		creator: string;
		extraProgramPages?: number;
		'global-state'?: AlgonautAppStateEncoded[];
		'global-state-schema'?: ApplicationStateSchema;
		'local-state-schema'?: ApplicationStateSchema;
	}
}

export interface AlgonautAppState {
	index: number;
	hasState: boolean;
	creatorAddress: string;
	globals: AlgonautStateData[];
	locals: AlgonautStateData[];
}

export interface AlgonautCallAppArguments {
	appIndex: number;
	appArgs: any[];
	optionalFields?: AlgonautTransactionFields;
}

export interface AlgonautLsigCallAppArguments extends AlgonautCallAppArguments {
	lsig: LogicSigAccount;
}

export interface AlgonautCreateAssetArguments {
	assetName: string;
	symbol: string;
	metaBlock: string;
	decimals: number;
	amount: number;
	assetURL?: string;
	defaultFrozen?: boolean;
	assetMetadataHash?: string;
	clawback?: string;
	manager?: string;
	reserve?: string;
	freeze?: string;
	rekeyTo?: string;
	optionalFields?: AlgonautTransactionFields;
}

export interface AlgonautDestroyAssetArguments {
	rekeyTo?: string;
	optionalFields?: AlgonautTransactionFields;
}

export interface AlgonautSendAssetArguments {
	to: string;
	assetIndex: number;
	amount: number | bigint;
	optionalFields?: AlgonautTransactionFields;
}

export interface AlgonautLsigSendAssetArguments extends AlgonautSendAssetArguments {
	lsig: LogicSigAccount;
}

export interface AlgonautPaymentArguments {
	to: string;
	amount: number | bigint;
	note?: string;
	optionalFields?: AlgonautTransactionFields;
}

export interface AlgonautLsigPaymentArguments extends AlgonautPaymentArguments {
	lsig: LogicSigAccount;
}

export interface AlgonautTxnCallbacks {
	onSign(payload: any): void;
	onSend(payload: any): void;
	onConfirm(payload: any): void;
}

export type AlgonautError = {
	message: string;
	rawError?: any;
}

export type AlgonautTransactionStatus = {
	status: 'success' | 'fail' | 'rejected';
	message: string;
	index?: number;
	txId: string;
	error?: Error;
	meta?: any;
	createdIndex?: number; // implement this for created apps and assets
}

export type AlgonautWallet = {
	address: string;
	mnemonic: string;
}

export type AlgonautTransactionFields = {
	accounts?: string[],
	applications?: number[],
	assets?: number[],
	reKeyTo?: string,
	note?: string,
	closeRemainderTo?: string,
	manager?: string,
	freeze?: string,
	clawback?: string,
	reserve?: string;
	suggestedParams?: SuggestedParams;
}

export type AlgonautAtomicTransaction = {
	transaction: Transaction;
	transactionSigner: Account | LogicSigAccount;
	isLogigSig: boolean;
}

export type InkeyResponseBase = {
	success: boolean;
	reject?: boolean;
	error?: any;
}

export type InkeySignTxnResponse = InkeyResponseBase & {
	signedTxns?: Uint8Array[] | Uint8Array;
}

export type TxnForSigning = {
	txn: string; // base64 encoded transaction
	txnDecoded?: Transaction;
	isLogicSig?: boolean;
	isMultisig?: boolean;
	multisigMeta?: MultisigMetadata;
}