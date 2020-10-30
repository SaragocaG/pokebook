import React from 'react';
import { TypeAbility } from '../../../types/types';

interface ComponentProps {
  abilities: TypeAbility[];
}

const AbilitiesList = ({ abilities }: ComponentProps) => {
  return (
    <div className="col hcenter">
      <div className="col sm-10 md-7 lg-7">
        <div className="responsive-table">
          <table className="table">
            <thead>
              <tr>
                <th>Habilidades do Pokémon</th>
              </tr>
            </thead>
            <tbody>
              {
                abilities.map((ability) => (
                  <tr key={ability.name}>
                    <td>{ ability.name }</td>
                  </tr>
                )) 
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AbilitiesList;
