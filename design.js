var bulb = 0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src = "bulb on.jpg ";
        bulb=1;

    }
    else{
        document.getElementryId("image").src = "bulb off.jpg";
        bulb=0

    }
}