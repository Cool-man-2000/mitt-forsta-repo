type Fact = { title: string; text: string };

const facts: Fact[] = [
  { title: "Privat från start", text: "Bara du ser den tills du själv väljer att dela länken." },
  { title: "Samma länk", text: "Ber du om ändringar uppdateras sidan på plats. Länken är densamma och öppna flikar hämtar den nya versionen." },
  { title: "Äkta 90-tal", text: "Grå bakgrund, rullande text och blinkande bokstäver. Mörkt läge fanns inte på den tiden." },
  { title: "Kan göra mer", text: "En artefakt kan spara data, låta flera personer fylla i samma lista eller ställa frågor till Claude." },
];

export default function Facts() {
  return (
    <table className="facts">
      <tbody>
        {facts.map(({ title, text }) => (
          <tr key={title}>
            <th>{title}</th>
            <td>{text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
