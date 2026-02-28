// BUG: NextResponse is verkeerd geïmporteerd
import { NextResponse } from "next/servers";

const quotes = [
  { id: 1, text: "Code is als humor. Als je het moet uitleggen, is het slecht.", author: "Cory House" },
  { id: 2, text: "Eerst los je het probleem op. Dan schrijf je de code.", author: "John Johnson" },
  { id: 3, text: "De beste foutmelding is er eentje die nooit verschijnt.", author: "Thomas Fuchs" },
  { id: 4, text: "Elke grote developer was ooit een beginner.", author: "NOVI" },
];

export async function GET() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return NextResponse.json(randomQuote);
}
