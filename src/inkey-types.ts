export type InkeyStyleObj = {
	transparent?: boolean;
	blur?: boolean;
	blurOverlay?: boolean;
	containerBg?: string; // color of the container. defaults to #ccc.
}


export type InkeyConfig = {
	src?: string; // url
	align?: 'center' | 'left' | 'right';
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
