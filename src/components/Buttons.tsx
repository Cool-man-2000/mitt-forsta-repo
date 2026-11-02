type Badge = { className: string; top: string; bottom: string };

const badges: Badge[] = [
  { className: "b1", top: "BÄST I", bottom: "NETSCAPE 3.0" },
  { className: "b2", top: "800 x 600", bottom: "UPPLÖSNING" },
  { className: "b3", top: "GJORD MED", bottom: "TYPESCRIPT" },
];

export default function Buttons() {
  return (
    <div className="buttons">
      {badges.map(({ className, top, bottom }) => (
        <span key={className} className={className}>
          {top}<br />{bottom}
        </span>
      ))}
    </div>
  );
}
