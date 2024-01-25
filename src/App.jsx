import { useState } from "react"
import Header from "./components/Header"
import SearchField from "./components/SearchField"
import Content from "./components/Content";

function App() {
  const [item, setItem] = useState("beautiful");
  const count = window.innerWidth >= 1024 ? 12 : 10;

  return (
    <>
      <Header></Header>
      <SearchField setItem={setItem}></SearchField>
      <Content item={item} count={count}></Content>
    </>
  )
}

export default App;
