//console.log('Loaded!');
var button=document.getElementById('counter');
var counter=0;
button.onClick=function(){
    //make a requestion to the counter endpoint
    
    //captute the responce and store it in a variable
    
    //render the variable in the correct span
    
    counter =counter+1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
    
};