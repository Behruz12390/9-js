const a =['non', 'asal', 'banan', 'olma', 'aziza', 'gul', 'mashina']
const k =[]
const l =[]
for(const i of a){
    if(i.includes('n')){
        k.push(i)
    }else{
        l.push(i)
}
}
console.log(k, 'n harfi ishtirok etgan sozlar');
console.log(l, 'n harfi ishtirok etmagan sozlar');