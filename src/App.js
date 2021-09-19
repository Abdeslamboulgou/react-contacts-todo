import { useEffect } from 'react';
import Contacts from './components/Contacts';
import '../src/style/Contacts.css';

function App() {
  const contacts = ["abdeslam"];
  useEffect(() => {
    alert(`you want add contacts ! nice choice `)},[]);
  useEffect(() => {
    // Modifiez le titre de mon onglet
    document.title = `Contacts adds`
})
  return (
    
    <div className='contacts' >
        <Contacts data={contacts} />
    </div>
  )
}

export default App;
