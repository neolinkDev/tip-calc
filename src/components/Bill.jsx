

export const Bill = ({ bill, setBill }) => {

  const handleBill = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setBill(value);
    }
  };

  return (
    <div>
      <label htmlFor="bill">¿Cuánto fue la cuenta?</label>
      <input 
        type="text" 
        placeholder="Total a pagar" 
        id="bill" 
        value={ bill }
        onChange={ handleBill }
        title="Por favor ingrese solo números"
      />
    </div>
  );
};
