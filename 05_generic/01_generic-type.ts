export {}

// 특정 타입의 데이터를 전달했을 때 해당 타입의 데이터를 반환하는 함수를 정의해보기
function getData1(anything: any): any {
  return anything;
}

const num1 = getData1(1); // num1 == 1
const str1 = getData1('string'); // str1 = 'string'

// 반환되는 값들은 무조건 any 타입이 됨 == TypeScript에서 타입 정보 잃어버림
console.log(num1, str1);
// console.log(num1.toUpperCase());

// 각 타입별 함수를 정의하는 방법 => 동일한 로직의 함수가 타입이 다르다는 이유만으로 여러개 정의 => 중복코드 발생

// 제네릭 맛보기 (제네릭 함수)
function getData2<T>(anything: T): T {
  return anything;
}

const num2 = getData2<number>(10);
const str2 = getData2<string>('str');
console.log(num2, str2);

//console.log(num2.toUpperCase()); // 잘못된 접근 컴파일에어로 알려줌


/*
  📌 제네릭 타입 (Generic Type)
  1. 제네릭 정의 : 타입을 미리 정해두지 않고 사용하는 시점에서 지정할 수 있게 하는 기능 
  2. 즉, 타입을 파라미터로 받아 처리하는 타입
  3. 한가지 타입에만 국한되지 않고, 여러 타입에 대해 동일한 구조나 동작을 보장할 수 있음 
  4. 주로 컬렉션(배열, 객체) 타입에 사용
  5. 작성법
     <T> : 타입 파라미터 (T는 타입 변수, 임의의 타입을 의미)
*/

type Box<T> = {
  value: T
}

const box1: Box<string> = {
  value: 'hello'
}

const box2: Box<number> = {
  value: 10
}

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}

// API 요청후 응답뎅터에 대한 타입 정의
// 상황에 따라 응답 데이터로 담기는 data의 타입은 매번 다름
interface ApiResponse<T> {
  status: 200 | 400 | 404 | 500;
  success: boolean;
  data: T
}

// 한 유저데이터를 조회요청하는 API
const userResponse: ApiResponse<User> = {
  status: 200,
  success: true,
  data: {
    id: 1,
    name: '홍길동',
    email: 'hong@example.com',
    isAdmin: false
  }
}
// 여러 유저데이터를 조회 요청하는 API
const usersResponse: ApiResponse<User[]> = {
  status: 200,
  success: true,
  data: [
    {
      id: 1,
      name: '홍길동',
      email: 'hong@example.com',
      isAdmin: false
    },
     {
      id: 2,
      name: '김말똥',
      email: 'kim@example.com',
      isAdmin: true
    }
  ]
}

// 에러 메세지를 응답하는 ApiResponse
const errorResponse: ApiResponse<{message: string}> = {
  status: 500,
  success: false,
  data: {
    message: 'Internal Server Error',
  }
}