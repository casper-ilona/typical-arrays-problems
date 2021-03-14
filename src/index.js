exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let minValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (minValue > array[i]) {
            minValue = array[i];
        }
        
    }
    return minValue;
};


exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
            return 0;
        }
    return  Math.max(...array);
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    return array.reduce((a,b)=>(a+b))/array.length;
};
