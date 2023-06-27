
export type InkeyConfig = {
	src?: string; // url
	align?: 'center' | 'left' | 'right';
	blur?: boolean;
	darkMode?: boolean;
};

export type FrameBusRequestsMap = Map<
	string,
	{
		req: Record<string, any>,
		resolve: (value: any) => void
	}
>;
