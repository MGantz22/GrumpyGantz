import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';


function EditBeanForm (props) {
  const { bean } = props;
  function handleEditBeanFormSubmission(event) {
    event.preventDefault();
    props.onEditBean({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      stock: parseInt(event.target.stock.value),
      price: parseFloat(event.target.price.value),
      sold: parseInt(event.target.sold.value),
      id: bean.id});
  }

  return(
    <React.Fragment>
      <div>
        <h1>Bean Details:</h1>
        <ul>
        <h3>{bean.name}</h3>
          <li>Origin | {bean.origin}</li>
          <li>Roast | {bean.roast}</li>
          <li>Price per lb | ${bean.price}</li>
          <li>Stock | {bean.stock}</li>
          <li>Sold | {bean.sold}</li>
        </ul>
      </div>
      <ReusableForm 
        formSubmissionHandler={handleEditBeanFormSubmission}
        buttonText="Update Bean"/>
    </React.Fragment>
  );
}

EditBeanForm.propTypes = {
  bean: PropTypes.object, 
  onEditBean: PropTypes.func
};

export default EditBeanForm;