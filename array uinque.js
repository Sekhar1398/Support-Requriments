function onLoad() {
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    // usage example:
    var a = ['a', 1, 'a', 2, '1'];
    var unique = a.filter(onlyUnique);

    alert(unique); // ['a', 1, 2, '1']
}
