// code your solution here

// function superbowlWin(rec){
//     for(const res of record){
//         const ret = Object.values(res)
//         console.log(ret[1])
//         // return ret[1] === "W"
//         // ret.find(W => {
//         //     if(ret[1] === W) return true
//         // })
//     }
//     // console.log(record.result)
// }
// // console.log(record.find(superbowlWin))
// superbowlWin()

const superbowlWin = (rec) => {
    for(const item of rec){
        if(item.result === "W"){
            return item.year;
        }
    }
    
}