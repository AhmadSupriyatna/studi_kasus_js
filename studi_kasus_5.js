function panggilNestedArray(value){
    
    for(i=0;i<=value.length;i++){
        nestedArray= [value[0][i], value[1][i], value[2][i]]
        console.log(nestedArray)
    }
   }
   
   var nestedArray = [
      [1,2,3,4],
      ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
      ['Facebook', 'Tesla', 'Microsoft', 'Apple']
   ]
   
  panggilNestedArray(nestedArray)