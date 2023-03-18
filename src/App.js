// import Home from './page/Home';
// import Title from './components/Title';
import Home from './pages/Home';
import About from './pages/About'
// import Counter from './components/Counter'



import React from 'react'

function App() {
  const [page, setPage] = React.useState("Home");

  const handleChange = () => {
    if (page === "Home") {
      setPage("About");
    } else {
      setPage("Home");
    }
  };
  return (
    <div>
      {page === "Home" ? <Home/> : <About/>}
    <button onClick={handleChange}>Change Page</button>
      {/* <Title name="Title1"/>
        <Title name="Title2"/>
        <Title  name="Title3"/> */}
        {/* <Home />
        
         <Title title="Anil"desc="is a Developer"/>
         <Home /> */}
         
         {/* <Counter /> */}
         {/* <List /> */}

    </div>
  )
}

export default App