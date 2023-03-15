

export const findDifference = (fullString:string, subString:string) => fullString.split(subString).join('')

export function throttle(cb:any, delay = 1200) {
    let shouldWait = false
    let waitingArgs:any
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
  
    return (...args:any) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
  
      cb(...args)
      shouldWait = true
      setTimeout(timeoutFunc, delay)
    }
  }