
function getA(): Promise<any> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('getA(): resolved');
			resolve('a');
		}, 600);
	});
}

function getB(): Promise<any> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('getB(): resolved');
			resolve('b');
		}, 1000);
	});
}

function getC(): Promise<any> {
	console.log('getC(): resolved');
	return new Promise((resolve, reject) => { resolve('c'); });
}

function awaitAll() {
	console.log('getA()');
	let a = getA();
	console.log('getB()');
	let b = getB();
	console.log('getC()');
	let c = getC();

	console.log('await all');
	return Promise.all([a, b, c]).then(all => {
		let [a,b,c] = all;
		console.log('have all');
		console.log('a = ' + a);
		console.log('b = ' + b);
		console.log('c = ' + c);
		console.log('done');
	});
}

function awaitEach() {
	console.log('getA()');
	let a = getA();
	console.log('getB()');
	let b = getB();
	console.log('getC()');
	let c = getC();

	console.log('have all');
	return a.then(aValue => {
		console.log('a = ' + aValue);
		return b;
	}).then(bValue => {
		console.log('b = ' + bValue);
		return c;
	}).then(cValue => {
		console.log('c = ' + cValue);
		console.log('done');
	});
}

(async () => {
	console.log('starting awaitAll...');
	await awaitAll();
	console.log('starting awaitEach...');
	await awaitEach();
})();
