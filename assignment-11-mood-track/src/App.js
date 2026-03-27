import React, { useState } from "react";
import "./App.css";

function App() {

const [mood, setMood] = useState("Neutral");

return (

<div className="container">

<h1>Mood Tracker</h1>

<h2>Your Mood: {mood}</h2>

<div className="buttons">

<button onClick={() => setMood("😊 Happy")}>
Happy
</button>

<button onClick={() => setMood("😐 Neutral")}>
Neutral
</button>

<button onClick={() => setMood("😔 Sad")}>
Sad
</button>

<button onClick={() => setMood("😡 Angry")}>
Angry
</button>

</div>

</div>

);

}

export default App;