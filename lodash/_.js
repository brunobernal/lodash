const _ = {
    clamp(num,low,upp){
        return Math.min(Math.max(num,low),upp);

        /*CodeAcademy solution:

        clamp(number,lower,upper){
            const lowerClampedValue = Math.max(number,lower);
            const clampedValue = Math.min(lowerClampedValue,upper);
            return clampedValue;
        }

        */
    },
    inRange(num,start,end){
        if (!end) {
            end = start;
            start = 0;
        } else if (start > end) {
            let tempVar;
            tempVar = end;
            end = start;
            start = tempVar;
        } 

        if (num >= start && num < end){
            return true;
        } else {
            return false;
        }
        /*CodeAcademy solution:

        inRange(number,start,end){
            if (!end) {
                end = start;
                start = 0;
            if (start > end) {
                let temp = end;
                end = start;
                start = temp;
            }
            const isInRange = (start <= number && number < end)
            return isInRange;
        }

        */
    },
    words(string){
        return string.split(' ');
        /*CodeAcademy solution:
        words(string){
        return string.split(' ');
        }
        */
    },
    pad(string,len){
        if (len <= string.length){
            return string;
        } else {
            let difference = len - string.length;
            let padStartArg = Math.floor((difference/2))+ string.length;
            let partialStr = string.padStart(padStartArg, ' ');
            return partialStr.padEnd(len, ' ');
        }
        /* CodeAcademy solution:
     pad(string, len){    
        if (len <= string.length){
            return string;
        }
        let startPaddingLength = Math.floor((len - string.length)/2);
        let endPaddingLength = len-string.length-startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength).concat(string,' '.repeat(endPaddingLength));
        return paddedString; */
    },
      has(obj,key){
        if (obj[key]){
            return true;
        } else {
            return false;
        }
         /*
         CodeAcademy solution:
          has(obj,key){
            let hasValue = (obj[key] !== undefined);
            return hasValue;
        */
    },
    invert(obj){
        let inverted = {};
        for (let item in obj){
          inverted[obj[item]] = item;
        }
        return inverted;

        /*
         CodeAcademy solution:
          invert(obj){
            let inverted = {};
            for (let item in obj){
                let originalValue = item;
                inverted[obj[item]] = originalValue;
        }
        return inverted;
        */

    },
    findKey(obj,fun){
        for (let key in obj){
            if (fun(obj[key])){
                return key;
            } else {
                return undefined;
            };
        }


        /*
         CodeAcademy solution:
          findKey(obj,fun){
            for (let key in obj){
                let value = key;
                let predicateReturnValue = fun(value);
                if (predicateReturnValue){
                    return key;
                } else {
                    return undefined;
                }
            };
        }
        */
    },
    drop(array,num){
        if (!num){
            array.shift();
            return array;
        } else {
            let newArray = array.slice(num);
            return newArray;
        }
        /*
         CodeAcademy solution:
            drop(array,num){
                if (!num){
                num = 1;
            let droppedArray = array.slice(num);
            return droppedArray;
        }
        }
        */

    },
    dropWhile(array,fun){
        const cb = (element, index) => {
            return !fun(element, index, array);
        };
        let dropNumber = array.findIndex(cb);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
    chunk(array, size = 1){
        let arrayChunks = [];
        for (let i=0; i < array.length; i += size){
            let arrayChunk = array.slice(i, i+size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
    
};




// Do not write or modify code below this line.
module.exports = _;