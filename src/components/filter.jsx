import React from 'react';
import {FilterType} from "../utils/utils";

function Filter(props) {
    const {filters, updateFilters} = props;

    const onFiltersChange = (event) => {
        const newFilter = event.target.name;
        updateFilters(newFilter);
    };
    
    return (
        <aside className="main__filter filter">
            <h2 className="filter__title">Валюта</h2>
            <div className="filter__money">
                <button className="active" id="rub" type="button">RUB</button>
                <button id="usd" type="button">USD</button>
                <button id="eur" type="button">EUR</button>
            </div>
            <h2 className="filter__title">Количество пересадок</h2>
            <form action="#" method="post" className="filter__transfer">
                <input checked={filters.indexOf(FilterType.ALL) !== -1} 
                    className="visually-hidden" 
                    type="checkbox" 
                    name={FilterType.ALL} 
                    id="all" 
                    onChange={onFiltersChange}/>
                <label htmlFor="all">
                    Все
                </label>
                <input checked={filters.indexOf(FilterType.TR0) !== -1} 
                    className="visually-hidden" 
                    type="checkbox" 
                    name={FilterType.TR0} 
                    id="no" 
                    onChange={onFiltersChange}/>
                <label htmlFor="no">
                    Без пересадок
                </label>
                <input checked={filters.indexOf(FilterType.TR1) !== -1} 
                    className="visually-hidden" 
                    type="checkbox" name={FilterType.TR1} 
                    id="1-transfer" 
                    onChange={onFiltersChange}/>
                <label htmlFor="1-transfer">
                    1 пересадка
                </label>
                <input checked={filters.indexOf(FilterType.TR2) !== -1} 
                    className="visually-hidden" 
                    type="checkbox" 
                    name={FilterType.TR2} 
                    id="2-transfers" 
                    onChange={onFiltersChange}/>
                <label htmlFor="2-transfers">
                    2 пересадки
                </label>
                <input checked={filters.indexOf(FilterType.TR3) !== -1} 
                    className="visually-hidden" 
                    type="checkbox" 
                    name={FilterType.TR3} 
                    id="3-transfers" 
                    onChange={onFiltersChange}/>
                <label htmlFor="3-transfers">
                    3 пересадки
                </label>
            </form>
        </aside>
    )
} 

export default Filter;