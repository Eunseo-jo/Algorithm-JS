function solution(numbers, target) {
    var answer = 0;
    
    const dfs = (level, sum) => {
        if(level === numbers.length) {
            if(sum === target)
                answer++;
            return;
        }
        dfs(level+1,sum+numbers[level]);
        dfs(level+1, sum-numbers[level]);
    }
    dfs(0,0);
    return answer;
}