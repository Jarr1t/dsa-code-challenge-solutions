var longestCommonPrefix = function(strs) {
    const strsSorted = strs.sort()
    let prefix = ''
    let shorter = strsSorted[0]
    let longer = strsSorted[strsSorted.length - 1]
    console.log(shorter, longer)

    for(let i = 0; i < shorter.length; i++){
        if(shorter[i] === longer[i]){
            prefix += shorter[i]
        } else {
            break
        }
    }

    return prefix || ''
};