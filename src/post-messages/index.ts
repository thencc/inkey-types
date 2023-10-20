// TODO change to enum?
export type IFrameCtx = 'dapp' | 'standalone' | 'popup' | 'embedded';

// re-exports
export * from './base';
export * from './rx'; // rx: from inkey-wallet
export * from './tx'; // tx: from inkey-client (dapp)
