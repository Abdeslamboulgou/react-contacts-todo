import React , {useState} from "react";

import '../style/Contacts.css';

function Personne(props) {
    const [ person, setPerson ] = useState('');
    function handleChange(e) {
      if(e.target.value ===' '){
        alert(`you should add the correct name of contact !! `);
      }  else if(e.target.value !==' ') {
          setPerson(e.target.value);}

    }
    
    function handleSubmit(e) {
              // preventDefault do not let you add an contact without write the name in the input
      if(person !== '') {
        props.handleSubmit(person);
      }
     e.preventDefault();

    }
    return (
      <form className='platform' onSubmit={handleSubmit}>
        <input className='inputs' type="text" 
          placeholder="Add new contact" 
          onChange={handleChange} 
          value={person} />
        <button className='buttns' type="submit">Add Contact</button>
      </form>
     
    );
  }
  export default Personne