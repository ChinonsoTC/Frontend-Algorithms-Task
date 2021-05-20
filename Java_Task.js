// onvertFahrToCelsius

function convertFahrToCelsius(F) {
    let dataType = typeof F;

    if(isNaN(F)) {
        if (dataType === 'object' && !Array.isArray(F)) {
            return `${JSON.stringify(F)} is not a valid number but a/an ${dataType}`;
        }
        return `${F} is not a valid number but a/an ${Array.isArray(F) ? 'array' : dataType}`;
    }
    else {
        let C = (F-32) * 5/9;
        return Number(C.toFixed(4));
    }
}


// CheckYuGiOh


function checkYuGiOh(n) {
    let result = [];

    if (isNaN(n)) {
        return `Invalid parameter: ${typeof n === 'object' ? JSON.stringify(n) : n}`;
    }

    for (let i = 1; i<=n; i++) {
        if(i%2 === 0) {
            if (i%3 === 0 && i%5 === 0) {
                result.push('yu-gi-oh');
            }
            else if(i%3 === 0) {
                result.push('yu-gi');
            }
            else if (i%5 === 0) {
                result.push('yu-oh');
            }
            else {
                result.push('yu');
            }
        }

        else if (i%3 === 0) {
            if(i%5 === 0) {
                result.push('gi-oh');
            }
            else {
                result.push('gi');
            }
        }

        else if (i%5 === 0) {
            result.push('oh');
        }

        else {
            result.push(i);
        }
    }

    return result;
}