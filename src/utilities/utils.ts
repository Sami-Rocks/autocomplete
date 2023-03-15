// This funciton simply takes out the matching substring
// since most of the time the matching text will be at the beginging of the string, 
// I am using this trick to separating the searched text and remain substring of the suggested autocomplete and using that to highlight the matching text

// it is a hack, but it works (for now)
export const findDifference = (fullString:string, subString:string) => fullString.split(subString).join('')

// This is a debounce function to delay the callback for a number of milliseconds to avoid making too many requests at a time
export const debounce = <F extends ((...args: any) => any)>(func: F, waitFor: number) => {
    let timeout: number = 0

    const debounced = (...args: any) => {
        clearTimeout(timeout)
        setTimeout(() => func(...args), waitFor)
    }
    
    return debounced as (...args: Parameters<F>) => ReturnType<F>
}

