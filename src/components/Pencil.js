import React from "react"

class Pencil extends React.Component {

  handleShowPlan(flag){
    this.props.isShowMyPlan(flag)
  }

  render(){
    return(
      <div className="pencil">
        <span>
          <i className="fa fa-cog config-add-todo"></i>
          <i onClick={this.handleShowPlan.bind(this, true)}
            className="fa fa-spinner fa-spin inprogress-task"></i>
          <i
            onClick={this.handleShowPlan.bind(this, false)}
            className="fa fa-calendar completed-task"></i>
        </span>
      </div>
    )
  }
}

export default Pencil
