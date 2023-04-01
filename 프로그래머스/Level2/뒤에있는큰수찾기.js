function solution(numbers) {
    const n = numbers.length;
    const answer = Array(n).fill(-1); 
    const stack = []; 

    for (let i = n - 1; i >= 0; i--) { 
        while (stack.length > 0 && stack[stack.length - 1] <= numbers[i]) { 
          // ������ ������� �ʰ�, ������ �� ���� �ִ� ���ڰ� ���� ���ں��� �۰ų� ���� ���
            stack.pop(); 
        }
        if (stack.length > 0) { // ������ ������� ���� ���
            answer[i] = stack[stack.length - 1]; // ������ �� ���� �ִ� ���ڰ� ���� ������ �� ū��
        }
        stack.push(numbers[i]); // ���� ���� ���ÿ� push
    }
    return answer;
}