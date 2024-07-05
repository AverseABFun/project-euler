var sequence = [1, 2]
while (!(sequence[sequence.length-1] > 4000000)) {
    sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2])
}
sequence = sequence.slice(0,sequence.length-1)
console.log(sequence)
var out = 0
for (var item of sequence) {
    if (item % 2 == 0) {
        out += item
    }
}
console.log(out)