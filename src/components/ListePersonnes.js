import React  from "react";
import logo from '../assets/delete.png';
import '../style/Contacts.css';
import FlipMove from 'react-flip-move'


function ListePersonnes(props) {
    const contact = props.data;
    const listItems = contact.map((val, index) =>
    <div className='contacs'>
      <li className='listpers' key={index}><p> 
            <input className='inser-contact' type='text' value={val}/>
            <span><img src={logo} alt='supp-contacts' className='logo' onClick={() => removeContact(val)}/></span>
         </p>
      </li>
      </div>
    );
    function removeContact(itemToBeDeleted){
          const updatContact=[...props.data].filter((val) => val!==itemToBeDeleted)
          props.setContacts(updatContact)

    }
    return (<div className='listitems'>
        <FlipMove duration={100} easing="ease-in-out">
             {listItems}
        </FlipMove>
        </div>);
  }
  export default  ListePersonnes