import logo from "./logo.svg";
import "./App.css";
import CommonHooks from "./react-hooks/common-hooks";
import MemorizeHook from "./react-hooks/memorize-hook";
import useApi from "./react-hooks/custom-hooks/useApi";

function App() {
  const { data, loading } = useApi("https://jsonplaceholder.typicode.com/posts");
  console.log(data,'=====',loading);
  return null;
  // return <CommonHooks />;
  // return <MemorizeHook />;
}

export default App;
