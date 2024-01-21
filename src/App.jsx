import { useState } from "react"
import Header from "./components/Header"
import SearchField from "./components/SearchField"
import Content from "./components/Content";
import ImageWrapper from "./components/ImageWrapper";

function App() {
  const [item, setItem] = useState("random");
  return (
    <>
      <Header></Header>
      <SearchField setItem={setItem}></SearchField>
      <Content item={item}></Content>
    </>
  )
}

export default App
