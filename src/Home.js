import React from 'react'
import SearchBar from './components/SearchBar.js'
import Cards from './components/Cards.js';
function Home() {
  var headings={
    width:'min(80%,1000px)',
  }
  var projectsMain={
    display:"flex",
    flexDirection:"column",
    alignItems:"center",

  }
  return (

    <div className='home-main'>
        <div className='top-main'>
            <SearchBar></SearchBar>
      
        </div>
        <div style={projectsMain}>
          <h1 style={headings}>Projects</h1>
          <Cards head3="Greetings" para="This is the about the project"></Cards>
          <Cards head3="Loyality" para="This is the about the project"></Cards>
          <Cards head3="FirstReactProject" para="This is the about the project"></Cards>
          <Cards head3="School Project" para="This is the about the project"></Cards>
          <Cards head3="Ptu summary" para="This is the about the project"></Cards>
          <Cards head3="PTU website" para="This is the about the project"></Cards>
        </div>
    </div>
  )
}

export default Home;