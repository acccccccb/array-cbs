function cbs(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('combination 参数格式不正确，必须为 Array');
    }
    let max = 0;
    const indexArr = [];

    const lenArr = arr.map((item) => { 
        indexArr.push(0);
        max === 0 ? max = item.length : max *= item.length;
        return item.length;
     });

    const generator = async () => {
        return new Promise((resolve) => {
            const result = [];
            let count = 0;
            const loop = () => {
                return new Promise(async () => {
                    const coordinates = indexArr;

                    const data = coordinates.map((item, index) => {
                        return arr[index][item];
                    });
                    result.push(data);
                    indexArr[0] = indexArr[0] += 1;
                    count++;

                    indexArr.forEach((item, index) => {
                        if (indexArr[index] >= lenArr[index]) {
                            indexArr[index] = 0;
                            indexArr[index + 1] += 1;
                        }
                    });

                    if (count < max) {
                        await loop();
                    } else {
                        resolve(result);
                    }
                });
            };
            loop();
        });
    };
    return generator();
}
export default cbs;