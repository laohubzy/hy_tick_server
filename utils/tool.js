const ReplaceFirstUper = (str) => {  
    str = str.toLowerCase();   
    return str.replace(/\b(\w)|\s(\w)/g, (m) => {
            return m.toUpperCase();
        }
    ); 
}

exports.ReplaceFirstUper = ReplaceFirstUper