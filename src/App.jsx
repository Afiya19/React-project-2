import './App.css'
import { ContactForm } from './components/ContactForm/ContactForm'
import ContactHeader from './components/ContactHeader/ContactHeader'
import NavBar from './components/Navigation/NavigationBar'

function App() {

  return (
   <div className='container'>
    <NavBar/>
    <main className='main_container'>



    <ContactHeader/>
    <ContactForm/>
    </main>
   </div>
  )
}

export default App
