import Card from "./componentes/Card";
import Coments from "./componentes/Coments";
import Header from "./componentes/Header";

export default function App() {
  return (
    <>
    <Header/>
    
    <div className='container'>
      <Card></Card>
      <div>
        <Coments foto="src\assets\moça.jpg" nome="Thaís Gomes" cargo="Designer"/>
        <Coments foto="src\assets\cara.jpg" nome="Ricardo Siqueira" cargo="Dev Back-end"/>
      </div>
      
      
    </div>
    </>
  )
}



