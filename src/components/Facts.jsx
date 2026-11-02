const facts = [
  ["Privat från start", "Bara du ser den tills du själv väljer att dela länken."],
  ["Samma länk", "Ber du om ändringar uppdateras sidan på plats. Länken är densamma och öppna flikar hämtar den nya versionen."],
  ["Äkta 90-tal", "Grå bakgrund, rullande text och blinkande bokstäver. Mörkt läge fanns inte på den tiden."],
  ["Kan göra mer", "En artefakt kan spara data, låta flera personer fylla i samma lista eller ställa frågor till Claude."],
];

export default function Facts() {
  return (
    <table className="facts">
      <tbody>
        {facts.map(([title, text]) => (
          <tr key={title}>
            <th>{title}</th>
            <td>{text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
