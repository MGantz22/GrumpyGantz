import React from 'react';
import PropTypes from 'prop-types';

function Bean(props) {
  return (
    <React.Fragment>
      <div onClick= {() => props.whenBeanClicked(props.id)}>
        <ul>
        <h3>{props.name}</h3>
        <span>Origin | {props.origin} <br/></span>
        <span>Roast | {props.roast} <br/></span>
        <span>Price per lb | ${props.price} <br/></span>
        <span>On Hand | {props.stock} lbs <br/></span>
        <span>lbs Sold | {props.sold} <br/></span>
        </ul>
        <hr />
      </div>
    </React.Fragment>
  );
}

Bean.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenBeanClicked: PropTypes.func
};

export default Bean;
