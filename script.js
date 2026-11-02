const titles = ["인터스텔라", "기생충", "쇼생크 탈출", "어벤져스: 엔드게임", "센과 치히로의 행방불명"];
const ratings = [8.4, 8.5, 8.7, 8.3, 8.5];
const years = [2014, 2019, 1994, 2019, 2001];

let sum = 0;

for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}

console.log("합계:", sum);


const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0;


let count = 0;

for (let i = 0; i < ratings.length; i++) {

    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }

    if (ratings[i] >= 8) {
        count++;
    }
}

console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");


for (let i = 0; i < ratings.length; i++) {
    let label;

    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7) {
        label = "추천";
    } else {
        label = "보통";
    }

    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}


const avgText = average.toFixed(1);
const best = titles[maxIndex];

alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);