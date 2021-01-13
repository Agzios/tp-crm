import React from 'react';

const Single = (props) => {

    return(<li className="col s12 m6">
        <div className="card">
            <div className="card-image">
                <img
                    src={`https://source.unsplash.com/collection/772333/1000x1000?i=${props.id}`}
                    alt="{props.item.prenom}"
                />
                <span className="card-title">
                    {props.item.prenom} {props.item.nom} -{" "}
                    {props.item.compagnie}
                </span>
            </div>
            <div className="card-content">
                <span className="card-title">{props.item.email} </span>
                <div className="row">
                    <blockquote>
                        <h5>{props.item.notes}</h5>
                    </blockquote>
                </div>
            </div>
        </div>
    </li>
    );
};

export default Single;