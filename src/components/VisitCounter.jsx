import { useState } from "react";

const KEY = "besok";
let counted = null;

// Räknar besök i den här webbläsaren, en gång per sidladdning. Varje besökare har sin egen räknare.
function countVisit() {
  if (counted !== null) return counted;
  counted = 1;
  try {
    counted = Number(localStorage.getItem(KEY) || 0) + 1;
    localStorage.setItem(KEY, String(counted));
  } catch {
    // Lagring blockerad, visa bara det här besöket.
  }
  return counted;
}

export default function VisitCounter() {
  const [visits] = useState(countVisit);

  return (
    <p className="counter">
      Du har besökt sidan <b>{String(visits).padStart(6, "0")}</b> gånger
    </p>
  );
}
