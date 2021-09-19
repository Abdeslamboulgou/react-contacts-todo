import React, { useState } from 'react';
import '../style/Contacts.css';
import Personne from './Personne';
import ListePersonnes from './ListePersonnes';


function Contacts(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
      // rest parametrs
    setContacts([...contacts, name]);
  }
  return(
  <div >
       <Personne handleSubmit={addPerson} />
       <ListePersonnes data={contacts} />
</div>
  );
}

export default Contacts