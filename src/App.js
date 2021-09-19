import { useEffect } from 'react';
import Contacts from './components/Contacts';
import '../src/style/Contacts.css';
import group from'../src/assets/group.png';

function App(props) {
  const contacts = ["abdeslam"];
  useEffect(() => {
    alert(`you want add contacts ! good choice `)},[]);
  useEffect(() => {
    // update the title of my page
    document.title = ` Add Contacts `
})
  return (
    <div>
    <p className='mng-contacts'> Manage Contacts 
    <span>  <img src={group} className='group' alt='add-contacts'/></span>
    </p>
    <div className='contacts' >
        <Contacts data={contacts} setContacts={props.setContacts}/>
    </div>
    </div>
  )
}

export default App;
