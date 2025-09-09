
import './App.css'
import { Challenge } from './components/Challenge/Challenge'
import { Events } from './components/Events/Events'
import { TemplateExpressions } from './components/TemplateExpressions'

function App() {

  return (
    <>
      <div>
          <TemplateExpressions/>
      </div>
      <div>
        <Events/>
      </div>
      
      <hr />

      <div>
        <Challenge/>
      </div>
    </>
  )
}

export default App
