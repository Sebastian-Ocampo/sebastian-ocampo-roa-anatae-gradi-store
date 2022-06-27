/**
 * Convert a template string into HTML DOM nodes
 * @param  {String} str The template string
 * @return {Node}       The template HTML
 */
 export const stringToHTML = (str) => {
	// If DOMParser is supported, use it
	if (support()) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(str, 'text/html');
		return doc.body;
	}

	// Otherwise, fallback to old-school method
	const dom = document.createElement('div');
	dom.innerHTML = str;
	return dom;
};

const support = () => {
	if (!window.DOMParser) return false;

	const parser = new DOMParser();

  try {
		parser.parseFromString('x', 'text/html');
	} catch (err) {
		return false;
	}

	return true;
};