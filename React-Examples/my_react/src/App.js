import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    render() {
        const characters = [
            {
                'name': 'Piya',
                'job': 'IT'
            },
            {
                'name': 'Gayatri',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ];

  return (
            <div className="container">
                <Table characterData={characters} />
            </div>
        );
    }
}
export default App;