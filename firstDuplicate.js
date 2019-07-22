function firstDuplicate(a) {
    const set1 = new Set();
    for (let i of a) {
        if (set1.has(i))
            return i;
        else
            set1.add(i);
    }
    return -1;
}
