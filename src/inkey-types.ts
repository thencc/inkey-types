export type InkeyStyleObj = {
	transparent?: boolean;
}


export type InkeyConfig = {
	src?: string; // url
	align?: 'center' | 'left' | 'right';
	blur?: boolean; // blurs the sibling components when inkey is open
	containerBg?: string; // color of the container. defaults to #ccc.
	darkMode?: boolean;
	styles?: InkeyStyleObj;
};

export type FrameBusRequestsMap = Map<
	string,
	{
		req: Record<string, any>,
		resolve: (value: any) => void
	}
>;
