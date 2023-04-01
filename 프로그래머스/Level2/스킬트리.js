function solution(skill, skill_trees) {
    var answer = 0;
    
    for(let i of skill_trees){
        let status = true;
        let idx = 0;
      
      for(let j = 0; j < i.length; j++){
        if(i[j] === skill[idx]) idx++;
       }
      
      for(let k = idx; k < skill.length; k++){
        if(i.indexOf(skill[k]) !== -1) status=false;
      }

      if(status) answer++;
  }
    return answer;
}
//solution("ABC", ["OPQ"]) output: 1