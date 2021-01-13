import React from 'react';

class Form extends React.Component {

    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                            <label for="first_name">First Name</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label for="last_name">Last Name</label>
                        </div>

                        <div className="input-field col s6">
                            <input placeholder="Placeholder" id="email" type="text" className="validate" />
                            <label for="email">Email</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="compagnie" type="text" className="validate" />
                            <label for="compagnie">Compagnie</label>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
}

export default Form;