import {TimerInput} from "./components/Timer"

function App() {

  return (
    <>
      <TimerInput onchange={() => {
        console.log("Input changed");
      }}/>
    </>
  )

}

export default App