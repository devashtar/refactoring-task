// before
function func(s, a, b) {

    if (s.match(/^$/)) {
        return -1
    }

    var i = s.length - 1
    var aIndex = -1
    var bIndex = -1

    while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
        if (s.substring(i, i + 1) == a) {
            aIndex = i
        }
        if (s.substring(i, i + 1) == b) {
            bIndex = i
        }
        i = i - 1
    }

    if (aIndex != -1) {
        if (bIndex == -1) {
            return aIndex
        } else {
            return Math.max(aIndex, bIndex)
        }
    }

    if (bIndex != -1) {
        return bIndex
    } else {
        return -1
    }
}

// after #1
function refactoringFunc(s, a, b) {

    let searchIndex = -1

    for (let i = s.length - 1; i > 0; i--) {
        if (s[i] === a || s[i] === b) {
            searchIndex = i
            break;
        }
    }

    return searchIndex
}

// after #2
const refactoringFunc2 = (s, a, b) => Math.max(s.lastIndexOf(a), s.lastIndexOf(b))

// after #3
String.prototype.refactoringFunc3 = function(a, b) {
    return Math.max(this.lastIndexOf(a), this.lastIndexOf(b))
}

// after #4
String.prototype.refactoringFunc4 = function(...args) {
    if (args.length === 0) return -1;
    return Math.max(...args.map(template => this.lastIndexOf(template)));
}


console.log(func('Hausfrauenpanzer', 's', 'f'));                // before
console.log(refactoringFunc('Hausfrauenpanzer', 's', 'f'));     // after    version 1
console.log(refactoringFunc2('Hausfrauenpanzer', 's', 'f'));    // after    version 2
console.log('Hausfrauenpanzer'.refactoringFunc3('s', 'f'));     // after    version 3
console.log('Hausfrauenpanzer'.refactoringFunc4('s', 'f'));     // after    version 4