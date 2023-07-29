import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  
  return (
    <>
      <div className='w-screen grid place-items-center bg-blue-100 h-screen px-6 font-sans'>
        {/* <!-- navbar --> */}
        <Navbar></Navbar>
        <div className='w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white'>
          {/* <!-- header --> */}
          <Header></Header>
          <hr className='mt-4' />
          {/* <!-- todo list --> */}
          <TodoList></TodoList>
          <hr className='mt-4' />
          {/* <!-- footer --> */}
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default App;
