
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Work  from "./components/Work";
//import Contact from"./components/Contact";
import Footer from "./components/Footer";

function App() {
  const Contact =[
    { id:'1',
      name:"Harpreet singh ",
      email:"malvia@gmail.com",
    },
    {
      id:'2',
      name :"Gurpreet singh ",
      email:"Gurpreet@gmail.com"

    },
    {
      id:'3',
      name :"Harpreet singh ",
      email:"Harpreet@gmail.com"

    }
    
    ];

  return (
   <>
   <Navbar/>
   <Home />
   <About />
   <Skill/>
   <Work />
   <Footer />
   </>
  )
}

export default App
