import React from 'react';
import SelectCateg from './selectCateg';

const CategoryId = (props) => {

  this.state = {
    categoryNum:28
  }

const categories = [
{'name':'Music','id':10},
{'name':'Sports','id':17},
{'name':'Science','id':28},
{'name':'Vehicles','id':2},
{'name':'Animals','id':15},
{'name':'Entertainment','id':24},
{'name':'Howto','id':26}
]
const renderCategories = categories.map(category => {
  return (
    <SelectCateg categId={category.name} categNum={category.id} categ={props.categ} categName={category.name}/>
  )
})
  return (
  <div>
    <h2 className="title-category">Categories</h2>
    <div className="categories-list">
      {renderCategories}
    </div>
  </div>  
  )

};

export default CategoryId;