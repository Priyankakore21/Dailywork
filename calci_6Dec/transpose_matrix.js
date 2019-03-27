
var array=[[1,2],[3,4]]

for (var i = 0; i < 2; i++) {
    array[i] = [];
    for (var j = 0; j < 2; j++) {
        array3[i][j] = 0;
    }
}

for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
        array[i][j] = array[j][i]
    }
}

for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
        process.stdout.write(array[i][j]+"")
    }
    console.log('/n')
}