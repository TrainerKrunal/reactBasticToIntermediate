 
import './App.css';
import UseStateDemo from './Hooks/useStateDemo';
import UseEffectDemo from './Hooks/useEffectDemo';
import FetchDemoComp from './Hooks/fetchDemoComp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AppNavBar from './Pages/appNavBar';
import AboutPage from './Pages/aboutPage';
import CustomerPage from './Pages/customerPage';
import HomePage from './Pages/homePage';
import UserList from './Users/userList';
import UserDetails from './Users/userDetails';
import UseMemoDemo from './PerformanceOptimization/useMemoDemo';
import ReactMemoDemo from './PerformanceOptimization/reactMemoDemo';
import Component1 from './Props-Drilling/component1';
import TodoList from './ReduxToDoList/todoList';
import DisplayTodo from './ReduxToDoList/displayTodo';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <AppNavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/useState" element={<UseStateDemo />} />
              <Route path="/useEffect" element={<UseEffectDemo />} />
              <Route path="/fetchDemo" element={<FetchDemoComp />} />
              <Route path="/customers" element={<CustomerPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/details/:id" element={<UserDetails />} />
              <Route path="/useMemo" element={<UseMemoDemo />} />
              <Route path="/reactMemo" element={<ReactMemoDemo />} />
              <Route path="/propsDrilling" element={<Component1 />} />
              <Route path="/reduxToDoList" element={<TodoList />} />
              <Route path="/todoList" element={<DisplayTodo />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
