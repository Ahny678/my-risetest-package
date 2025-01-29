function modeOfArr(arr){
    const frequencyMap = arr.reduce((acc, num)=>{
        acc[num] = (acc[num]|| 0 ) + 1;
        return acc;
    }, {});

    return Object.keys(frequencyMap).reduce((a,b)=>
       frequencyMap[a]>frequencyMap[b] ? a : b
    );
}

export default modeOfArr;