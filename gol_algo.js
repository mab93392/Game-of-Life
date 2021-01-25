// Game of Life where 1 is alive and 0 is dead
const size = 250; // square width


function arr() {
    var arr1 = [] // initializes array environment
    for(var i = 0; i < size; i++){  // builds "primary" array layer 
        arr2 = [] // establishes array that goes into each layer
        var v = [] // establishes variable that populates each coordinate
        
            for(var j = 0; j < size; j++){ 
                let t = Math.random() // makes variable used to determine if coordinate is on or off
                
                if(t < 0.5 && j > ( .49*size) && j < (.51*size) && i > (.49*size) && i < (.51*size)){ // conducts 1 or 0 test
                    var v = 1; // populates coordinate
                }
                else{
                    var v =0;
                }
                arr2.push(v); 
            }
        arr1.push(arr2); // adds layer of values to primary array
        
    }
    return arr1
}

function arr_update(arr){
    var perimeter = []
        // calculates perimeter and adjusts coordinate value
        for(var i = 0; i < size; i++){ 
            var perimeter2 = []
            for(var j =0; j < size; j++){
                var p = []
                // calculates perimeter
                if(i == 0 && j == 0){
                    p = arr[i][j+1] + arr[i+1][j] + arr[i+1][j+1] // top left corner
                }
                else if(i == 0 && j == size - 1 ){
                    p = arr[i][j-1] + arr[i+1][j-1] + arr[i+1][j] // top right corner
                    
                }
                else if(i == (size - 1) && j == 0){
                    p = arr[i][j+1] + arr[i-1][j] + arr[i-1][j+1] // bottom left corner
                
                }
                else if(i == (size - 1) && j == (size -1)){
                    p = arr[i-1][j] + arr[i-1][j-1] + arr[i][j-1] // bottom right corner
                }
                else if(i == 0){
                    p = arr[i][j-1] + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1] + arr[i][j+1]// + arr[39][j]// + arr[39][j+1] + arr[-1][j-1] // top row
                }
                else if(i == (size - 1)){
                    p = arr[i][j-1] + arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + arr[i][j+1] // bottom row
                }
                else if(j == 0){
                    p = arr[i][j+1] + arr[i+1][j+1] + arr[i-1][j+1] + arr[i-1][j] + arr[i+1][j] // left side
                }
                else if(j == (size - 1)){
                    p = arr[i][j-1] + arr[i-1][j-1] + arr[i+1][j-1] + arr[i+1][j] + arr[i-1][j] // right side
                }
                else{
                    p = arr[i][j+1] + arr[i][j-1] + arr[i+1][j] + arr[i+1][j-1] + arr[i+1][j+1] + arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1]
                    
                }
                perimeter2.push(p)
            }
            perimeter.push(perimeter2)
        }
    // computes rules
    for(var i = 0; i < size; i++){
        for(var j =0; j < size; j++){
            if(perimeter[i][j] < 2){ // under population death
                arr[i][j] = 0
            }
            else if(perimeter[i][j] > 3){ // overpopulation death
                arr[i][j] = 0
            }
            else{
                arr[i][j] = 1 // stable population/reproduction
            }
        }
    }          
    
    return arr
        
}  



window.addEventListener("load", ()=> {
    // initializes variables
    const c = document.querySelector("#Canvas");
    const onbtn = document.querySelector("#on");
    const offbtn = document.querySelector("#off");
    const rbtn = document.querySelector("#next_gen");
    const ctx = c.getContext("2d");
    let intID;
    var grid = arr()
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    // animates grid
    function gridDraw(arr){
        for(var i = 0; i<size; i++){
            for(var j = 0; j<size; j++){
               if(grid[i][j] == 1){
                   ctx.fillRect(50+i*3,50+j*3,3,3);
               } 
            }
        }
    }

    // "on" event protocol
    function on(){
        gridDraw(grid)
        intID = setInterval(function(){
            grid = arr_update(grid)
            ctx.clearRect(50,50,1500,1500);
            gridDraw(grid)
        },100)
        
    }
    
    // "refresh" protocol
    function refresh(){
        clearInterval(intID)
        ctx.clearRect(50,50,1500,1500);
        for(var i = 0; i < size; i++){
            for(var j = 0; j < size; j++){
                grid[i][j] = 0
            }
        }
        grid = arr()
        gridDraw(grid)
    }

    // "off" protocol
    function off(){
        clearInterval(intID) 
    }
    
    onbtn.addEventListener("click", e =>{
        on()
    });


    offbtn.addEventListener("click", e =>{
        off()
        
    })
    
    rbtn.addEventListener("click", e =>{
        refresh()
    })
    

    
});



