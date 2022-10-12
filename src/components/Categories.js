import React from 'react';

const Categories = ({value, setCategoryId}) => {

    const categories = ['Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]


    return (
        <div className="categories">
            <ul>
                {categories.map((elem, index) => {
                    return <li key={index} onClick={() => setCategoryId(index)}
                               className={value === index ? "active" : ''}>{elem}</li>
                })}
            </ul>
        </div>
    );
};

export default Categories;