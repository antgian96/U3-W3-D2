import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavourite } from '../redux/actions';

function Favourites() {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const handleRemove = (companyId) => {
    dispatch(removeFavourite(companyId));
  };

  return (
    <div>
      <h2>Preferiti</h2>
      <ul>
        {favourites.map((company) => (
          <li key={company.id}>
            {company.name}
            <button onClick={() => handleRemove(company.id)}>Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favourites;
