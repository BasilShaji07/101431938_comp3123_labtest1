function lowerCaseWords(inputArray) {
    return new Promise((resolve, reject) => {

        if (!Array.isArray(inputArray)) {
            return reject("Input should be an array.");
        }
        
        const filteredStrings = inputArray
            .filter(item => typeof item === 'string')  
            .map(str => str.toLowerCase()); 
        
        resolve(filteredStrings); 
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result)) 
    .catch(error => console.error(error));
