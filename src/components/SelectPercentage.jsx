

export const SelectPercentage = ({ children, percentage, onSelect }) => {

  /**
   * 
   * @param {Event} e 
   */
  const handleChange = (e) => {
    onSelect(Number(e.target.value));
  };

  return (
    <div>
      <label>{ children }</label>
      <select
        value={ percentage }
        onChange={ handleChange }
      >
        <option value="0">Insatisfecho (0%)</option>
        <option value="5">Bueno (5%)</option>
        <option value="10">Satisfecho (10%)</option>
        <option value="20">Excelente (20%)</option>
      </select>
    </div>
  )
}
 