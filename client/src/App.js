import React,{useState, useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addContact, getContacts, putContact } from './Redux/actions/action';
import ContactCard from './components/ContactCard'
import AddContact from './components/AddContact'

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [id, setId] = useState(0)
  const [edit, setEdit] = useState(false)

  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts())
  }, [])

  const add = () => {
    dispatch(addContact({name, email, phone}))
  }

  const editting = () => {
    dispatch(putContact(id, {id, name, email, phone} ))
    setEdit(false)
    setName('')
    setEmail('')
    setPhone('')
    setId(0)
  }
  
  const getPerson = person => {
  setName(person.name)
  setEmail(person.email)
  setPhone(person.phone)
  setId(person._id)
  setEdit(true)
  }

  return (
    <Router>
    <div className="App">
      <Link to='/contact-list'>
      <button>Contact List</button>
      </Link>
      <Link to='/add-contact'>
      <button>Add Contact</button>
      </Link>

    <Route path="/contact-list" render={() => (
      <div style={{display:"flex", flexWrap:"wrap"}}> {contacts.map(contact => <ContactCard contact={contact} getPerson={getPerson}/>)} </div>
      )}
      />
    <Route path="/(add-contact|edit-contact)" render={() => ( 
    <AddContact  
    name={name} 
    email={email} 
    phone={phone} 
    setName={setName} 
    setEmail={setEmail} 
    setPhone={setPhone}
    action={edit ? editting : add}
    edit={edit}/>
    )}
    />
    </div>
    </Router>
  );
}

export default App;
