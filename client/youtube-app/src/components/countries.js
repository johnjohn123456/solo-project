import React from 'react';
import SelectCountries from './countriesSelect';

const CountriesId = (props) => {
  const countries = [
  {'name':'USA','code':'US','flag':'usa-flag.png'},
  {'name':'Greece','code':'GR'},
  {'name':'Italy','code':'IT'},
  {'name':'Bulgaria','code':'BG'},
  {'name':'Turkey','code':'TR'},
  {'name':'Spain','code':'ES'},
  {'name':'UK','code':'GB' },
  {'name':'Sweden','code':'SE'},
  {'name':'Germany','code':'DE'},
  {'name':'Israel','code':'IS'},
  {'name':'France','code':'FR'},
  {'name':'Colombia','code':'CO'}
  ]

  const renderCountries = countries.map(country => {
    return (
      <SelectCountries countryName={country.name} countryCode={country.code} countrySelect={props.countrySelect} flag={country.flag}/>
    )
  })

  return (
    <div>
      <h2 className="title-country">Countries</h2>
      <div className="countries-list">
        {renderCountries}
      </div>
    </div>
  )
};

export default CountriesId;