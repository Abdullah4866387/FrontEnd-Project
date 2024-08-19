function getCurrentDateTime() 
{
    const now = new Date();
    return now.toLocaleString();
}
  
 
function updateDateTime() 
{
    const datetimeElement = document.getElementById("datetime");
    datetimeElement.textContent = getCurrentDateTime();
}
  

setInterval(updateDateTime, 1000);



