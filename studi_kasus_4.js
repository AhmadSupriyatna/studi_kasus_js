function panggilNestedArray(value){
    // tulis jawabanmu disini
    for(i=0;i<value.length;i++){
        console.log("Id : ", value[i][0]);
        console.log("Name : ", value[i][1]);
        console.log("Company : ", value[i][2]);
    }
   }
   
   var nestedArray = [
     [1, "Mark Zuckerberg", "Facebook"],
     [2, "Elon Musk", "Tesla"],
     [3, "Bill Gates", "Microsoft"],
     [4, "Steve Jobs", "Apple"]
   ]
   
   panggilNestedArray(nestedArray)