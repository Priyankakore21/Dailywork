exports.add=function(a,b){
   
   if(a==undefined)
   return b;
   if(b==undefined)
   return a;
   if(a==undefined && b==undefined)
   return undefined;
   else
    return(a+b);
}

exports.sub=function(a,b){

}

exports.mult=function(a,b){
    return a*b
}

exports.div=function(a,b){
    if(b==0)
    return undefined
    else
    return a/b
}
