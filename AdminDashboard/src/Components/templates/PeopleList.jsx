
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePerson } from '../../conentFile';
import Display from '../organisms/Display';

const PeopleList = () => {
  const people = useSelector((state) => state.adminDashboard.people);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removePerson({ id }));
  };
    const handleEdit = (id) => {
    dispatch(editPerson({ id }));
  }

  return (
    <div>
      <h2>People</h2>
      {people.map((person) => (
        <Display
          key={person.id}
          text1={person.name}
          text2={person.email}
          del={() => handleDelete(person.id)}
          edit={() => handleEdit(person.id)}
        />
      ))}
    </div>
  );
};

export default PeopleList;
