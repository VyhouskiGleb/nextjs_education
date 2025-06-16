export function decodeUrlParam(encodedUrlParam: string): string | undefined {
	try {
		return decodeURIComponent(encodedUrlParam);
	} catch (error) {
		console.error('Failed to decode URL:', error);
	}
}

export function encodeUrlParam(urlParam: string): string | undefined {
	try {
		return encodeURIComponent(urlParam);
	} catch (error) {
		console.error('Failed to encode URL:', error);
	}
}

export function compileRelativePath(path: string, params: Record<string, string | number>): string {
	return Object.entries(params).reduce((acc, [key, value]) => {
		return acc.replace(`:${key}`, value.toString());
	}, path);
}