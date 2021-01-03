// Game of Life where 1 is alive and 0 is dead
function arr(size) {
    var arr = [] // initializes array environment
    for(var i = 0; i < size; i++){  // builds "primary" array layer 
        arr2 = [] // establishes array that goes into each layer
        var v = [] // establishes variable that populates each coordinate
        
            for(var j = 0; j < size; j++){ 
                let t = Math.random() // makes variable used to determine if coordinate is on or off
                
                if(t > 0.5){ // conducts 1 or 0 test
                    var v = 0; // populates coordinate
                }
                else{
                    var v =1;
                }
                arr2.push(v); 
            }
        arr.push(arr2); // adds layer of values to primary array
        
    }
    for(var k = 0; k < 40; k++){ // advances generation
        console.log(arr);
        // calculates perimeter and adjusts coordinate value
        for(var i = 0; i < size; i++){ 
            for(var j =0; j < size; j++){
                // calculates perimeter
                if(i == 0 && j == 0){
                   var perimeter = arr[i][j+1] + arr[i+1][j] + arr[i+1][j+1] // top left corner
                }
                else if(i == 0 && j == size - 1 ){
                    var perimeter = arr[i][j-1] + arr[i+1][j-1] + arr[i+1][j] // top right corner
                    
                }
                else if(i == (size - 1) && j == 0){
                    var perimeter = arr[i][j+1] + arr[i-1][j] + arr[i-1][j+1] // bottom left corner
                
                }
                else if(i == (size - 1) && j == (size -1)){
                    var perimeter = arr[i-1][j] + arr[i-1][j-1] + arr[i][j-1] // bottom right corner
                }
                else if(i == 0){
                    var perimeter = arr[i][j-1] + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1] + arr[i][j+1] // top row
                }
                else if(i == (size - 1)){
                    var perimeter = arr[i][j-1] + arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + arr[i][j+1] // bottom row
                }
                else if(j == 0){
                    var perimeter = arr[i][j+1] + arr[i+1][j+1] + arr[i-1][j+1] + arr[i-1][j] + arr[i+1][j] // left side
                }
                else if(j == (size - 1)){
                    var perimeter = arr[i][j-1] + arr[i-1][j-1] + arr[i+1][j-1] + arr[i+1][j] + arr[i-1][j] // right side
                }
                else{
                    var perimeter = arr[i][j+1] + arr[i][j-1] + arr[i+1][j] + arr[i+1][j-1] + arr[i+1][j+1] + arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1]
                    
                }
                // computes rules
                if(perimeter < 2){ // under population death
                    arr[i][j] = 0
                }
                else if(perimeter > 3){ // overpopulation death
                    arr[i][j] = 0
                }
                else{
                    arr[i][j] = 1 // stable population/reproduction
                }
            }   
        }
    }  
}
    


