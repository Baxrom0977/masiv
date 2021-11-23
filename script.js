
let javob = []
while (true) {
    let name3 = prompt('kom')
    let name2 = name3.split(',')
    if (name2[0] == 'add') {
        javob.push(name2[1])
    } else if (name2[0] == 'del') {
        javob.splice(-1, 1)

    } else if (name2 == 'stop') {
        break
    } else {
        console.log('yorvor');
    }
}
console.log(javob);