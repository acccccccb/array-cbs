import cbs from '../src/index.js';

const arr = [
    ['黑色', '白色', '金色'],
    ['16G', '32G', '256G', '512G'],
    ['4.7', '5.5', '7.3'],
];
(async () => {
    const res = await cbs(arr);
    console.log('Input:', arr);
    console.log('Output:', res, 'Len:', res.length);
})()
