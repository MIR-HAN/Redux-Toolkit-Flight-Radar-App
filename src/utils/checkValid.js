
//check datas values 

const checkValid = (value)=>{

    return value === 0 || value === null || value === undefined 
        || value === '' ? "unknown" : value
}

export default checkValid;