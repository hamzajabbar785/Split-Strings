// Complete the solution so that it splits the string into pairs of two characters. If the string contains 
// an odd number of characters then it should replace the missing second character of the final pair with 
// an underscore ('_').

// Examples:

// * ''abc =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

const solution = (str) => {
    let result = []
    if(str.length % 2 !== 0){
        str += "_"
    }

    for(let i = 0; i < str.length; i += 2){
        result.push(str[i] + str[i + 1])
    }

    return result
}

solution("abcdef")

//Solution 2

const solution = (str) => {
    let result = []

    for(let i = 0; i < str.length; i += 2){
        second = str[i+1] || '_';
        result.push(str[i] + second);
    }
    
    return result
}