/*
let arr = [10, 20, 30, 9, 2, 1, 9, 8];
function getMin(arr){
    let result = arr[0];
   for(let i = 0; i < arr.length; i++ ) {
          if(result > arr[i]){
                result = arr[i];
             } 
    }
    return result;
 
}
console.log(getMin(arr));

*/
/*let arr = [10, 20, 30, 9, 2, 1, 9, 8];
function getEven(arr){
    let result = new Array();
    for(let i = 0; i < arr.length; i++){
            if( (arr[i] % 2)==0) {
                result.push(arr[i]);
            }
    }
    
    for(let y of result){
        console.log(y);
    }

}

getEven(arr);*/
 
var objects= [ 
    {name:'Jonny Walker', birthDate:'1995-12-17'},
    {name:'Andrew', birthDate:'2001-10-29'},
    {name:'Viktor', birthDate:'1998-11-09'},
    {name :'Andrew', birthDate:'2011-05-09'}
];
  
function searchByName(name) {
    
    var toSearch = 'Andrew';    
    for(var i=0; i<name.length; i++) {
        for(key in name[i]) {
            if(name[i][key].indexOf(toSearch)!=-1) {
                console.log(name[i]);
            }
        }
    }
}
searchByName(objects);

