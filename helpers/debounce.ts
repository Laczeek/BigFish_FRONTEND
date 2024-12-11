/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const debounce = (cb: Function, delay: number) => {
    let timeout: null | NodeJS.Timeout = null;
    return (...args: any[]) => {
        if(timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            cb(...args);
            timeout = null;
        }, delay)
    }
}


export default debounce;