

export function count(arr){
    if(arr.length === 0) return 0;
    return arr.reduce((count, item) => {
        return count+1;
    },0)
}


export function printName(name){
    console.log('name is ',name);
};

function printAge(age){
    console.log('age is ',age);
}

function printPlace(place){
    console.log('place is',place);
}

export {
    printAge,
    printPlace
}