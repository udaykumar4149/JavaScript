let list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
let list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

let Users1 = [], Users2 = [], Users3 = [];

for (let i = 0; i < list1.length; i++) {
    let found = false;
    for (let j = 0; j < list2.length; j++) {
        if (list1[i] === list2[j]) {
            found = true;
            break;
        }
    }
    if (!found) Users1.push(list1[i]);
}

console.log(Users1);

for (let i = 0; i < list2.length; i++) {
    let found = false;
    for (let j = 0; j < list1.length; j++) {
        if (list2[i] === list1[j]) {
            found = true;
            break;
        }
    }
    if (!found) Users2.push(list2[i]);
}

console.log(Users2);

for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
        if (list1[i] === list2[j]) {
            Users3.push(list1[i]);
            break;
        }
    }
}

console.log(Users3);
