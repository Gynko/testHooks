import "./inputText.styles.css";

export default function InputText({ name, set }) {
  return (
    <form>
      <div className="input-label">
        <label htmlFor={name}>{name}</label>
        <input
          type="text"
          name={name}
          htmlFor={name}
          onChange={set}
          className="input-rect"
        ></input>
      </div>
    </form>
  );
}
