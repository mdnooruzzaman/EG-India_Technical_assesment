import React from 'react';
import { AutoComplete } from 'antd';
import { useArticlesData } from '../../utils/hooks/useArticlesData';

interface AutoCompleteInterface{
    style: React.CSSProperties;
    placeholder: string;
}


const SearchInput: React.FC<AutoCompleteInterface> = ({style, placeholder}) => {
 const {value, options, onChange, onSelect, getPanelValue, setOptions} = useArticlesData()

  return (
    <>
      <AutoComplete
        value={value}
        options={options}
        style={style}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default SearchInput;