function max(ar) {
  var num=ar[0]; 
  var flag=0; 
  ar.forEach(function(item){
  	if(item>num) num=item;
  });
  return num;}