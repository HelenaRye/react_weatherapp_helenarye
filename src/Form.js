import "./App.css";

export default function Form() {
  return (
    <form className="Form">
      <input type="text" id="searchbox" placeholder="Enter your city" />

      <input type="submit" className="btn btn-outline-light" value="Search" />
    </form>
  );
}
