import React from "react";
import PropTypes from "prop-types";


function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <br>
        </br>
        <input
          type='text'
          name='name'
          placeholder='Bean Name' />
          <br/>
          <br/>
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
          <br/>
          <br/>
          <input
          type="number"
          step='0.10'
          max='1000'
          name='price'
          placeholder="Cost per lb" />
          <br />
          <br />
        <lable htmlFor="roast">Roast: </lable>
        <select name='roast' id='roasts'>
          <option value='Light'>Light</option>
          <option value='Medium'>Medium</option>
          <option value='Dark'>Dark</option>
        </select>
        <br/>
        <br/>
        
        <input
          type='number'
          name='stock' id='stock'
          placeholder='Pounds On Hand' />
          <br/>
          <br/>

        <input
          type='number'
          name='sold' id='sold'
          placeholder='Pounds Sold' />
          <br/>
          <br/>
        <button class="btn btn-outline-primary"  type='submit'>{props.buttonText}</button>
      </form>
      <br/>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;