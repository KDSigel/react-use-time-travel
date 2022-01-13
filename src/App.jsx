import useTimeTravel from "./hooks/useTimeTravel";

export default function App() {

const {save, undo, redo, current} = useTimeTravel()

  return(
    <>
    <section>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>

      <input type='date' value={current} onChange={save}/>

      <div>{ !current ? <span>Please select a date</span> : current}</div>
    </section>
    </>
  );
}
