import React from "react";
import Bean from "./Bean";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";




function BeanList(props){
  return (
    
      <Container>
    <React.Fragment>
      <hr/>
        {props.beanList.map((bean) => 
          <Bean
            whenBeanClicked = {props.onBeanSelection}
            name={bean.name}
            origin={bean.origin}
            roast={bean.roast}
            price={bean.price}
            stock={bean.stock}
            sold={bean.sold}
            id={bean.id}
            key={bean.id} />
        )}

    </React.Fragment>
    </Container>
    
    
  );
}


BeanList.propTypes = {
  beanList: PropTypes.array,
  onBeanSelection: PropTypes.func,
}

export default BeanList;