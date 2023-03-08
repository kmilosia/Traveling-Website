import React from 'react';
import './search.css';
import gold from '../../assets/gold.png';

function Search() {
  return (
    <div className='search'>
      <div className="container">
        <div className="left">
            <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
            <p>Come experience the very most luxurious Caribbean all-inclusive vacations for couples at Sandal Resorts. 
                Our luxury beach resorts, set along the most georgeos tropical settings and exquisite beaches.
                If your are planning a wedding, the best beach is the Bahamas beaches with honeymoon packages included.
            </p>
            <div className="search-col-2">
                <div className="box">
                    <div>
                        <img src={gold} alt="Gold Certficate" style={{marginRight: '1rem'}}/>
                    </div>
                    <div>
                        <h3>World's Leading</h3>
                        <p>All-inclusive company for 20 years in a row!</p>
                    </div>
                </div>
                <div className="box">
                    <div>
                        <h3>No one includes more</h3>
                        <p>All-inclusive company for 20 years in a row!</p>
                        <button>View Packages</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="right">
            <div className='promo'>
                <h4 className='save'>Get an additional 7% off!</h4>
                <p className='timer'>12 HOURS LEFT!</p>
                <p className='offers'>View all our current offers!</p>
            </div>
            <form>
                <div className="input-wrap">
                    <label>Destination</label>
                    <select>
                        <option value="1">Grande Antigua</option>
                        <option value="1">Grenada</option>
                        <option value="1">Emerald Bay</option>
                        <option value="1">Bora Bora</option>
                        <option value="1">Key West</option>
                        <option value="1">Maldives</option>
                        <option value="1">Barbados</option>
                    </select>
                </div>
                <div className="date">
                    <div className="input-wrap">
                        <label>Check-in</label>
                        <input type="date" />
                    </div>
                    <div className="input-wrap">
                        <label>Check-out</label>
                        <input type="date" />
                    </div>
                </div>
                <button>Rates and Availibilities</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Search;
