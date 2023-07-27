function choice(items) {
    return items[Math.floor(Math.random() * items.length)]
}

function remove(items, item) {
    // get the index of the first occurrence of the value
    var index = items.indexOf(item);

    // remove the element at that index
    if (index > -1) {
        items.splice(index, 1);
    } 
}

export default choice
export {remove}