import numeral from 'numeral'

export const formatNumber = (num: number, format: string = '0,0') => {
	return numeral(num).format(format)
}

export const ignoreFindDOMNodeError = () => {
	const oldWarn = console.warn
	console.warn = (message, ...optionalParams) => {
		if (!message.includes('findDOMNode is deprecated in StrictMode')) {
			oldWarn(message, ...optionalParams)
		}
	}
}
