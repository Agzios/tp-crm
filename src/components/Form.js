import React from 'react';
import Input from './Input.js';

class Form extends React.Component {

    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <Input id='prenom' content='Prénom' />
                        <Input id='nom' content='Nom' />
                    </div>

                    <div className="row">
                        <Input id='email' content='Email' />
                        <Input id='compagnie' content='Société' />
                    </div>

                    <div className="row">
                        <Input id='notes' content='Notes' />
                        <div className='input-field col s4' >
                            <button type="submit" className='btn waves-effect waves-light'>Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
}

export default Form;