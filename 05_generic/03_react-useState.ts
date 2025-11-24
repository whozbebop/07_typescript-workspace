export {}

/*
  const [count, setCount]  = useState(0); // [ 초기상태값, 상태변경용함수 ]
  
  const [value, setValue] = useState({});
*/

function useState<T>(initalState: T): [ T, (newState: T) => void] {
  // ... 상태관련코드

  return [initalState, (newState) => {
    // 상태를 업데이트 해주는 로직
  } ]
}

const [ count, setCount ] = useState<number>(0);

interface User {
  id: number;
  name: string;
  age: number
}

const [user, setUser] = useState<User | null>(null);

/*
useEffect(() => {
  // 데이터 페칭
  setUser(조회된데이터(User객체))
}, [])
*/