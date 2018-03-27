import React from 'react';

const SelectCountries = (props) => {

  return (
    <div>
      <div>
        <div className="country-item" onClick={() => props.countrySelect(props.countryCode,props.flag)}>{props.countryName}</div>
      </div>
    </div>  
  )
}

export default SelectCountries;