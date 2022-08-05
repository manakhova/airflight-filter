import React from 'react';

function Filter() {
    return (
        <aside className="main__filter filter">
            <h2 className="filter__title">Валюта</h2>
            <div className="filter__money">
                <button className="active" id="rub" type="button">RUB</button>
                <button id="usd" type="button">USD</button>
                <button id="eur" type="button">EUR</button>
            </div>
            <h2 className="filter__title">Количество пересадок</h2>
            <div className="filter__transfer">
                <input className="visually-hidden" type="radio" name="transfer" id="all" />
                <label htmlFor="all">
                    Все
                </label>
                <input className="visually-hidden" type="radio" name="transfer" id="no" />
                <label htmlFor="no">
                    Без пересадок
                </label>
                <input className="visually-hidden" type="radio" name="transfer" id="1-transfer" />
                <label htmlFor="1-transfer">
                    1 пересадка
                </label>
                <input className="visually-hidden" type="radio" name="transfer" id="2-transfers" />
                <label htmlFor="2-transfers">
                    2 пересадки
                </label>
                <input className="visually-hidden" type="radio" name="transfer" id="3-transfers" />
                <label htmlFor="3-transfers">
                    3 пересадки
                </label>
            </div>
        </aside>
    )
} 

export default Filter;