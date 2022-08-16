import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
        const {
            onClick,
            props: {
            activeTab,
            label,
            },
        } = this;
  
        let className = 'slider-container__tab-item';
  
        if (activeTab === label) {
            className += ' slider-container__tab-item_active';
        }
  
        return (
            <li className={className} onClick={onClick}>
                <span>
                    {label}
                </span>
            </li>
        );
    }
  }
  
  export default Tab;