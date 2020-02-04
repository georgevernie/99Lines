let friends =["Jerry", "Henry", "Lisa", "Franny", "Emily"];
for(let x = 0; x < friends.length; x++){
    console.log(friends[x] + ": ");
    for(let y = 99; y > 0; y--){    
        
        if(y == 1){
            console.log(y + " lines of code in the file, " + y + 
            " lines of code; " + friends[x] + 
            " strikes one out, clears it all out, no more lines of code in the file" )
             
        }
        else{
            console.log(y + " lines of code in the file, " + y + 
            " lines of code; " + friends[x] + " strikes one out, clears it all out, "
             + (y-1) + " lines of code in the file.")
        }
    }
}