
let positon;
let sizeX,sizeY;
let x,y;

if(!positon)
{
    console.log("Noti.js says: Notification position unspecified")
}

switch(positon)
{
    case "top-left":
        x=0;
        y=0;
    break;
    
    case "top-right":
        y=0;
        x=100-sizeX;
    break;
    
    case "bottom-left":
        x=0;
        y=100-sizeY;
    break;
    
    case "bottom-right":
        x=100-sizeX;
        y=100-sizeY;
    break;

    case "center":
        x=50-sizeX;
        y=50-sizeY;
    break;
}