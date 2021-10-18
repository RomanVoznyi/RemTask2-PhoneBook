import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

const INITIAL_STATE = {
  contacts: [],
  name: '',
};

function App() {
  const [contacts, setContacts] = useState(INITIAL_STATE.contacts);
  const [name, setName] = useState(INITIAL_STATE.name);

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setContacts(prevState => [...prevState, { name, id: nanoid() }]);
  };

  return (
    <div className="App">
      <h1>PhoneBook</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="labelNameField">
          <span className="titleNameField">Name</span>
          <input
            type="text"
            className="nameField"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов."
            value={name}
            onChange={handleName}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
      <h1>Contacts</h1>
      <ul>
        {contacts.length > 0 &&
          contacts.map(el => (
            <li key={el.id} className="listItem">
              {el.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
