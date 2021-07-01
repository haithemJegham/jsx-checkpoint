import logo from './logo.svg';
import './App.css';
import img1 from './images/haithem.jpg'; //inside the src folder (doesn't work with the public folder)


function App() {  
  return (
    
     <div style={{border:"solid 1px black",maxWidth:"100vw"}}> 
          <h1 className="titleRed">Haithem Jegham</h1>   


         <img src={img1} /> 


         <img src="./images/haithem1.jpg" />  

 
  
 

    </div>
  )
}

export default App;


