function solution(numbers) {
    var answer = '';
    numbers.sort((a,b)=>((b.toString()+a.toString())-(a.toString()+b.toString())));
    answer=numbers.join('');
    if (answer[0] === '0') {
      return '0';
    }
      return answer;
  }