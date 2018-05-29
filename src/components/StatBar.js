import React, { Component } from 'react'

class StatBar extends Component {
  constructor(props){
    super(props)
  }
  
  calculateStatPercent(stat, max) {
    return Math.floor((stat / max) * 100); 
  }

  getClassNameForStat(stat) {
    if(stat <= 60)
        return "StatBar-low"
    if(stat > 60 && stat <= 90)
        return "StatBar-medium-low"
    if(stat > 90 && stat <= 100)
        return "StatBar-medium"
    if(stat > 100 && stat <= 110)
        return "StatBar-medium-high"
    if(stat > 110 && stat <= 130)
        return "StatBar-high"
    if(stat > 130)
        return "StatBar-very-high"         
  }

  render() {

    const statPercentage = this.calculateStatPercent(this.props.statValue, 230)

    return (      
      <div className="StatBar">
        <span style={{width: statPercentage + "%"}} className={this.getClassNameForStat(this.props.statValue)}></span>
      </div>
    );
  }
}

export default StatBar
