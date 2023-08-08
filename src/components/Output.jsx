

export const Output = ({ bill, tip  }) => {
  return (
    <div>
      <h3>Total a pagar: ${ bill + tip } (${ bill } + ${ tip } de propina)</h3>
    </div>
  );
};
