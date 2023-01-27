function chkPair(A , size , x) {
    let resultArray=[]
     
    for (i = 0; i < (size - 1); i++) {
        for (j = (i + 1); j < size; j++) {
  
            if (A[i] + A[j] == x) {
                document.write("Pair with a given sum " + x + " is (" + A[i] + ", " + A[j] + ")");

                resultArray.push(A[i]);
                resultArray.push(A[j]);

                return resultArray

            }
        }
    }

    return resultArray;
}

    let A = [ 0, -1, 2, -3, 1 ];
    let x = -2;
    let size = A.length;
    let result=chkPair(A,size,x)

    if (result.length>0) {
        console.log("Valid pair exists");
    }
    else {
        console.log("No valid pair exists for " + x);
    }