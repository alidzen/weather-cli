const getArgs = (args) => {
    const keyArgs = {};
    const [_, env, ...params] = args;
    params.forEach((element, idx, arr) => {
        const isArg = element.charAt(0) === '-';
        if (isArg) {
            if (idx === arr.length - 1) {
                keyArgs[element.substr(1)] = true
            } else if (arr[idx + 1].charAt(0) !== '-') {
                keyArgs[element.substr(1)] = arr[idx + 1]
            } else {
                keyArgs[element.substr(1)] = true;
            }
        }

    });
    return keyArgs
}

export { getArgs }