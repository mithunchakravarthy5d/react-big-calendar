import React, { useState } from 'react';
import styles from './styles.module.css';

interface DropdownProps {
  options: {title: string, value: string}[];
  onSelect: (selectedOption: string) => void;
}

interface options {title: string, value: string};


const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(options[0]?.title);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (option: options) => {
    setSelectedOption(option?.title);
    onSelect(option?.value);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>{selectedOption}</button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option) => (
            <li key={option?.title} onClick={() => handleOptionClick(option)}>
              {option?.title}
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default Dropdown;