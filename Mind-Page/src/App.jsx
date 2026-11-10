import CLOCKcard from './Clock'
import ToDo from './ToDo'

function App() {
  return (
    <>
      <h1 height = '100%' width = '100%' color = "orange">Mind-Page</h1>
      <br></br>
      <h2 color = "orange">Focus, Get Things Done.</h2>
      <br></br>
    <div>
      <CLOCKcard />
      <br></br>
      <ToDo />
    </div>
    </>
  )
}

export default App
