function solution(elements) {
     let set = new Set();
     let circular = elements.concat(elements);
     let cnt = 1;
     
     while(cnt < elements.length){
       for(let i=0; i < elements.length; i++){
         let sum = 0;
         for(let j = i; j < i+cnt; j++){
           sum += circular[j];
         }
         set.add(sum);      
       }
       cnt++;
     }   
    return set.size+1;
}