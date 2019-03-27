var matrixadd = (array1,array2) => {
    var array1 = [[2, 3], [2, 4]];
    var array2 = [[1, 6], [3, 7]];
    var array3 = [];
    // var array4 = [];
    for (var i = 0; i < 2; i++) {
        array3[i] = [];
        for (var j = 0; j < 2; j++) {
            array3[i][j] = 0;
        }
    }
    for (var i = 0; i < 2; i++) {
        array3[i] = [];
        for (var j = 0; j < 2; j++) {
            array3[i][j] = 0;
        }
    }

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            array3[i][j] = array1[i][j] + array2[i][j]
        }
    }


    for (var i = 0; i < 2; i++) {

        for (var j = 0; j < 2; j++) {
            process.stdout.write(array3[i][j] + " ")
        }
        console.log('\n');
    }


    return(array3)

}

var matrixsub = (array1,array2) => {
    var array1 = [[2, 3], [2, 4]];
    var array2 = [[1, 6], [3, 7]];
    var array4 = [];

    for (var i = 0; i < 2; i++) {
        array4[i] = [];
        for (var j = 0; j < 2; j++) {
            array4[i][j] = 0;
        }
    }

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            array4[i][j] = array1[i][j] - array2[i][j] + " "
        }
    }

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            process.stdout.write(array4[i][j] + "  ")
        }
        console.log('\n');
    }

return(array4)
}
// matrixadd();
// matrixsub();
module.exports={matrixadd,matrixsub}