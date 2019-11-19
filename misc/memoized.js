let cache = {
    // 5:85
};
function memoizedAddTo80(n) {
    if(n in cache){
        return cache[n];
    } else {
        console.log('long time')
        cache[n] = 5 + 80;
    }
}

memoizedAddTo80(5);