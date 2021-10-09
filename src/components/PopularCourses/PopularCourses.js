import React from 'react';
import './PopularCourses.css'
const PopularCourses = (props) => {
    const{title, price, thumb} = props.course;
    return (
        <>
        <div class="col">
        <div class="card h-100">
            <img src={thumb} class="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
                <h5 class="card-title text-primary fw-bold">{title}</h5>
                <p class="card-text text-primary fw-bold">${price}</p>
            </div>
        </div>
        </div>
        </>
    );
};

export default PopularCourses;