export {}

/*
  📌 타입 별칭 (Type Alias)
  1. 복잡하거나 반복되는 타입에 이름을 부여하고자 할 때 사용 (커스텀 타입)
  2. 다양한 타입 조합에 사용
  3. 장점
    1) 타입 중복 정의를 피할 수 있음 (코드 중복 제거)
    2) 타입 변경 시 일괄 수정 가능 (유지보수 용이)
    3) 타입 구조를 명확하게 표현 가능 (가독성 향상)
  4. 작성법
     type 타입별칭 = 타입정의;
  5. 타입별칭은 변수명과의 구분을 위해 대문자로 시작하는걸 권장
*/

// type Greeting = `[Hello ${Name}]`;
// let message: Greeting = 'Hello Kim';
// messag = 'Hello Lee'

type Person = {
  name: string,
  age: number,
  job?: string
};

let person1: Person = {
  name: '김말똥',
  age: 30,
  job: '개발자'
};

let person2: Person = {
  name: '강개순',
  age: 20
  // 백수라 직업 없음
}

type ApiKey = {
  apiName: string,
  apiKey: string
}

let kakaoApi: ApiKey = {
  apiName: 'kakao',
  apiKey: '12312412313asdasdq'
}

kakaoApi.apiKey = 'qweqwewqewq123123213123';