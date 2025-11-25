import { useState } from "react";

interface TodoFormProps {
  addTodo: (title: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {

  const [value, setValue] = useState<string>('');

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value); // 새 Todo 추가 기능
    setValue('');   // 입력값 초기화
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };


  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Add new todo..."
        value={value}
        onChange={ handleChange } />
      <button>Add</button>
    </form>
  )
}

export default TodoForm