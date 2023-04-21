import React from "react";
import PropTypes from "prop-types";


function BeanDetail(props){
  const { bean, onClickingDelete, onClickingEdit, onBeanSale } = props; 

  return (
    <React.Fragment>
      <div>
        <h1>Bean Detail:</h1>
        <ul>
          <h3>{bean.name}</h3>
          <li>Origin | {bean.origin}</li>
          <li>Roast | {bean.roast}</li>
          <li>Price | ${bean.price}</li>
          <li>In Stock | {bean.stock}</li>
          <li>Stock Sold | {bean.sold}</li>
        </ul>
      </div>

      <button className="btn btn-success" onClick={(onBeanSale)}>Sell a Pound</button> &nbsp;
      <button className="btn btn-warning" onClick={ onClickingEdit }>Edit Bean</button> &nbsp;
      <button className="btn btn-danger" onClick={()=> onClickingDelete(bean.id) }>Delete Bean</button> 
      <hr/>
    </React.Fragment>
  );
}

BeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onBeanSale: PropTypes.func
};

export default BeanDetail;