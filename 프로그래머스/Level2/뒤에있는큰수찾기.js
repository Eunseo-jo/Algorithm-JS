function solution(numbers) {
    const n = numbers.length;
    const answer = Array(n).fill(-1); 
    const stack = []; 

    for (let i = n - 1; i >= 0; i--) { 
        while (stack.length > 0 && stack[stack.length - 1] <= numbers[i]) { 
          // 스택이 비어있지 않고, 스택의 맨 위에 있는 숫자가 현재 숫자보다 작거나 같은 경우
            stack.pop(); 
        }
        if (stack.length > 0) { // 스택이 비어있지 않은 경우
            answer[i] = stack[stack.length - 1]; // 스택의 맨 위에 있는 숫자가 현재 숫자의 뒷 큰수
        }
        stack.push(numbers[i]); // 현재 숫자 스택에 push
    }
    return answer;
}