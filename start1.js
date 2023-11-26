Array-1 -- start1
Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.

Examples

start1([1, 2, 3], [1, 3]) → 2
start1([7, 2, 3], [1]) → 1
start1([1, 2], []) → 1

function start1(a, b) {
    let len = 0;

    // Check if the first element of array 'a' is 1
    if (a.length > 0 && a[0] === 1) {
        len++;
    }

    // Check if the first element of array 'b' is 1
    if (b.length > 0 && b[0] === 1) {
        len++;
    }

    return len;
}console.log(start1([1, 2, 3], [1, 3]));
