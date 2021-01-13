// //This is mucj better approach to solve dynamic connectiivity problem.
// // If two elements have same root then they both are conected.

// // Initialize the array
// var id = [];
// for(let i=0;i<10;i++){
//     id[i]=i;
// }

// function printID(){
//     console.log(id);
// }

// // Finding the root of i => Check iteratively under
// function root(i){
//     while(i!=id[i]){
//         i = id[i];
//     }
//     //console.log(i)
//     return i;
// }

// // Change the root of p to root of q
// function union(p,q){
//     pid = root(p);
//     qid = root(q);
//     id[pid] = qid;    
//     console.log(pid);
//     console.log(qid);
// }

// function connected(p,q){
//     let pid = root(p);
//     let qid = root(q);
//     if(pid == qid){
//         console.log(true);
//     }else {
//         console.log(false);
//     }
// }

// union(4,3);
// printID()


// Implementing Quick union algorithm

var id = [];
for(let i = 0;i<10;i++){
    id[i] = i;
}

function printID(){
    console.log(id);
}

function root(i){
    while(i!=id[i]){
        i = id[i];
    }
    return i;
}

function union(p,q){
    root_p = root(p);
    root_q = root(q);
    id[root_p] = root_q;
}

function connected(p,q){
    if(root(p)==root(q)){
        console.log(true);
    }else {
        console.log(false)
    }
}


root(4);
union(3,8);
union(4,6);
union(5,4);
root(4);
connected(5,4);
connected(4,6);
connected(3,8);
connected(4,7);