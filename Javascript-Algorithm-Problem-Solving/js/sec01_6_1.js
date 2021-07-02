function solution(arr){/* 함수의 매개변수를 입력 */
    let answer=[];
    let sum=0, min=Number.MAX_SAFE_INTEGER;//가장 큰 값
    for(let x of arr){
        if(x%2==1){ // x%2==1 (나머지가 1 = '홀수')
            sum+=x; // sum = sum + x의 축약
            if(x<min) min=x;

        }
    }
    answer.push(sum);
    answer.push(min);

    return answer;/* 답을 return */
}
arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));/*return받은 값을 출력*/