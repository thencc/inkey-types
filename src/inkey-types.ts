
export type InkeyConfig = {
	src?: string; // url
	align?: 'center' | 'left' | 'right';
};

export type InkeyClientAccount = {
	address: string;
	username: string;
};

export type FrameBusRequestsMap = Map<
	string,
	{
		req: Record<string, any>,
		resolve: (value: any) => void
	}
>;
