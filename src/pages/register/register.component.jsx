import InputText from "../../components/inputText/inputText.component";
import "./register.styles.css";
import { useCvData } from "../../hooks/cvData";
import { useState } from "react";

export default function Register() {
  let inputs = { name: "", age: "", expertise: "" };
  const { infos, setInfos, competences, setCompetences } = useCvData(inputs);
  const [savedValue, setSavedValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setCompetences([...competences, event.target.value]);
      setSavedValue("");
    }
  };
  function onChangeValue(event) {
    setInfos({ ...infos, [event.target.name]: event.target.value });
    inputs = { ...infos };
  }

  return (
    <div>
      <h1>Register</h1>
      {Object.keys(inputs).map((key, index) => {
        return (
          <InputText
            key={`${inputs[index]} ${index}`}
            name={key}
            set={onChangeValue}
          />
        );
      })}
      <div className="register-answers">
        {Object.keys(infos).map((key, index) =>
          infos[key] !== "" ? (
            <p className="answers">
              {key} : {infos[key]}
            </p>
          ) : null
        )}
      </div>
      <h1>Competences</h1>
      <p>Type a competence and press enter.</p>

      <input
        type="text"
        value={savedValue}
        onChange={(e) => setSavedValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type and press Enter"
      />
      <div>
        <h2>List of competences</h2>
        {competences.map((competence, index) => {
          return <p key={`${competence} ${index}`}>{competence}</p>;
        })}
      </div>
    </div>
  );
}
