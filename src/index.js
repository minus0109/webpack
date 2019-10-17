function component() {
	const element = document.createElement('h2')
	const array = ['Hello','webpack']
	element.innerHTML = _.join(array, ' ')
	return element;
};

document.body.appendChild(component());