// This is a implementation of Quick Find to solve Dynamic Connectivity problem.
// Initialize the id array with 10 entries
var id = [];
for (var i = 0; i < 10; i++) {
    id[i] = i;
}
console.log(id);
// Union functionality
// union(3,4) means the entries of 3 in the id array should be set to the id of 4

function union(p,q){
    let pid = id[p];
    let qid = id[q];
    for(let i =0;i<id.length;i++){
        if(id[i] == pid){
            id[i] = qid;
        }
    }
}

function printID(){
    console.log(id)
}

function connected(p,q){
    if(id[p]==id[q]){
        console.log(true)
    }else {
        console.log(false)
    }
}

union(3,4);
union(3,5)
printID();
union(6,7);
printID();
connected(3,4);
connected(0,9);
