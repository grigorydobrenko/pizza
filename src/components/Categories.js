import React, {useState} from 'react';

const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const categories = ['Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    const onClickHandler = (index) => {
        setActiveIndex(index)
    }


    return (
        <div className="categories">
            <ul>
                {categories.map((value, index) => {
                    return <li key={index} onClick={() => onClickHandler(index)} className={activeIndex === index ? "active" : ''}>{value}</li>
                })}
            </ul>
        </div>
    );
};

export default Categories;