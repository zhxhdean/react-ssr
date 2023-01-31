import React, {useEffect} from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { getToDoList } from "../api";

const Home = (props) => {
  const todos = useLoaderData();
  const location = useLocation();
  console.log(todos, location)
  useEffect(() => {
    console.log(props)
  }, [])
  return (
    <div>
      This is Home
      <button
        onClick={() => {
          alert("click1");
        }}
      >
        click
      </button>
      <Link to="/about">About</Link>
      <div>
        {todos.map(item => <span key={item}>{item}</span>)}
      </div>
    </div>
  );
};

// 挂载服务端渲染的方法
Home.getServerSideProps = async () => {
  const data = await getToDoList();
  return data;
}
export default Home;
