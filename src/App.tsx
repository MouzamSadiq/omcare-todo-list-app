import { Suspense, lazy } from "react";
import "./App.css";

const TodoAppContainer = lazy(
  () => import("./pages/TodoList/TodoAppContainer")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TodoAppContainer />
    </Suspense>
  );
}

export default App;
