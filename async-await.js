function getA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getA(): resolved');
            resolve('a');
        }, 600);
    });
}
function getB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getB(): resolved');
            resolve('b');
        }, 1000);
    });
}
async function getC() {
    console.log('getC(): resolved');
    return 'c';
}
async function awaitAll() {
    console.log('getA()');
    let a = getA();
    console.log('getB()');
    let b = getB();
    console.log('getC()');
    let c = getC();
    console.log('await all');
    let all = await Promise.all([a, b, c]);
    console.log('have all');
    console.log('a = ' + await a);
    console.log('b = ' + await b);
    console.log('c = ' + await c);
    console.log('done');
}
async function awaitEach() {
    console.log('getA()');
    let a = getA();
    console.log('getB()');
    let b = getB();
    console.log('getC()');
    let c = getC();
    console.log('a = ' + await a);
    console.log('b = ' + await b);
    console.log('c = ' + await c);
    console.log('done');
}
(async () => {
    console.log('\nstarting awaitAll...');
    await awaitAll();
    console.log('\nstarting awaitEach...');
    await awaitEach();
})();
