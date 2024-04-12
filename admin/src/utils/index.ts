import numeral from 'numeral'

export const formatNumber = (num: number, format: string = '0,0') => {
	return numeral(num).format(format)
}

export const ignoreFindDOMNodeError = () => {
	// eslint-disable-next-line
	const consoleError = console.error.bind(console)
	// eslint-disable-next-line
	console.error = (errObj, ...args) => {
		if (typeof errObj === 'string' && args.includes('findDOMNode')) {
			return
		}
		consoleError(errObj, ...args)
	}
}
