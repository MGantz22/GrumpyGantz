import React from 'react';
import NewBeanForm from './NewBeanForm';
import BeanList from './BeanList';
import BeanDetail from './BeanDetail';
import EditBeanForm from './EditBeanForm';
import { v4 } from 'uuid';


class BeanControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBeanList: [
        {
          name: "Programmers Delight",
          origin: "Midwest-U.S",
          price: 22,
          roast: "Dark",
          stock: 130,
          sold: 0,
          id: v4()
        },

        {
          name: "Rough Stuff",
          origin: "Southern France",
          price: 28,
          roast: "Medium",
          stock: 25,
          sold: 0,
          id: v4()
        },
        {
          name: "Goji-Berry",
          origin: "Canada",
          price: 21,
          roast: "light",
          stock: 54,
          sold: 0,
          id: v4()
        },
        {
          name: "Darryl-Dude",
          origin: "Canada",
          price: 17,
          roast: "Medium",
          stock: 120,
          sold: 0,
          id: v4()
        }
    
  











      ],
      selectedBean: null,
      editing: false
    };
  }

  handleEditClick = () => {
    // console.log("handleEditClick reached!");
    this.setState({editing: true });
  }

  handleEditingBeanInList = (beanToEdit) => {
    const editedMainBeanList = this.state.mainBeanList
      .filter(bean => bean.id !== this.state.selectedBean.id)
      .concat(beanToEdit);
    this.setState({
        mainBeanList: editedMainBeanList,
        editing: false,
        selectedBean: null
      });
  }

  handleAddingNewBeanToList = (newBean) => {
    const newMainBeanList = this.state.mainBeanList.concat(newBean);
    this.setState({mainBeanList: newMainBeanList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedBean = (id) => {
    const selectedBean = this.state.mainBeanList.filter(bean => bean.id === id)[0];
    this.setState({selectedBean: selectedBean});
  }
  
  handleDeleteingBean = (id) => {
    const newMainBeanList = this.state.mainBeanList.filter(bean => bean.id !== id);
    this.setState({
      mainBeanList: newMainBeanList,
      selectedBean: null
    });
  }

  handleBeanSale = (selectedBean) => {
    let activeBean = this.state.selectedBean;
    if (activeBean.stock > 0){
      activeBean.stock -=1;
      activeBean.sold += 1;
    } else {
      activeBean.stock = 0
    }
    let newMainBeanList = this.state.mainBeanList;
    newMainBeanList[this.state.mainBeanList.indexOf(selectedBean)] = activeBean;
    this.setState({mainBeanList: newMainBeanList})
  }


  handleClick = () => {
    if (this.state.selectedBean != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBean: null,
        editing: false
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; 

    if( this.state.editing) {
      currentlyVisibleState = <EditBeanForm bean = {this.state.selectedBean} onEditBean = {this.handleEditingBeanInList} />
      buttonText = "Return to Bean List";

    } else if (this.state.selectedBean != null) {
      currentlyVisibleState = 
      <BeanDetail 
      bean = {this.state.selectedBean} 
      onBeanSale = {this.handleBeanSale}
      onClickingDelete = {this.handleDeleteingBean} 
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Bean List";

    }else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeanForm  onNewBeanCreation= {this.handleAddingNewBeanToList} />;
      buttonText = "Return to Bean List"; 

    } else {
      currentlyVisibleState = <BeanList beanList={this.state.mainBeanList} onBeanSelection={this.handleChangingSelectedBean} />;
      buttonText = "Add Beans to Inventory"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-outline-dark"  onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default BeanControl;