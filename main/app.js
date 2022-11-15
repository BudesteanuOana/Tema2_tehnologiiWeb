function addTokens(input, tokens){

    if(!(typeof input === 'string')) {
        throw Error("Invalid input");
    }

    if(input.length < 6){
        throw Error("Input should have at least 6 characters");
    }

    for(i=0; i<tokens.length; i++){
        if(!('tokenName' in tokens[i]) || !(typeof tokens[i].tokenName === 'string')) {
            throw Error("Invalid array format")
        }
    }


    if(!(input.includes("..."))) {
        return input;
    }

    const words = input.split("...")
    let formatted = '';
    for(i=0; i<words.length-1; i++) {
        formatted +=words[i];
        formatted += "${" + tokens[i].tokenName +"}"
    }
    return formatted;
    
}

const app = {
    addTokens: addTokens
}

module.exports = app;