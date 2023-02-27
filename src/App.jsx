import './App.css'
import Card from './components/Card'
import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'

//import ClassComponent from './components/ClassComponent'
//import {ClassComponent} from './components/ClassComponent'
//esta forma si no puse default
//import FuncComponent from './components/FuncComponent'
//borro lo q no voy a utilizar

function App() {

  let elementos = [1, 2, 3]

  return (
    <>
      <ClassComponent/>
      <FuncComponent/>
      <Card elemento = {elementos[0]}/>
      <Card elemento = {elementos[1]}/>
      <Card elemento = {elementos[2]}/>
    </>
  )
}

export default App
