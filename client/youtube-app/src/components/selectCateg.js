import React, { Component } from 'react';

const SelectCateg = (props) => {
  return (
    <div className="categ-item" onClick={() => props.categ(props.categNum,props.categName)}>{props.categId}</div>
  )
}

export default SelectCateg;