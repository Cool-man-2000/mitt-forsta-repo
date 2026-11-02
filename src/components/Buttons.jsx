const buttons = [
  ["b1", "BÄST I", "NETSCAPE 3.0"],
  ["b2", "800 x 600", "UPPLÖSNING"],
  ["b3", "GJORD MED", "REACT"],
];

export default function Buttons() {
  return (
    <div className="buttons">
      {buttons.map(([cls, top, bottom]) => (
        <span key={cls} className={cls}>
          {top}<br />{bottom}
        </span>
      ))}
    </div>
  );
}
