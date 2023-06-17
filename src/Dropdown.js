import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown__button" onMouseEnter={toggleDropdown}>
        {selectedItem ? selectedItem : 'Select an item'}
      </button>
      {isOpen && (
        <ul className="dropdown__list">
          {items.map((item, index) => (
            <li
              key={index}
              className={`dropdown__item ${selectedItem === item ? 'selected' : ''}`}
              onClick={() => selectItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;