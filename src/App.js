import "./App.css";
import { useState } from "react";

function App() {
  const [loadvideo, setloadvideo] = useState(false);
  const [dowload, setdowload] = useState(false);
  const [errotxt, seterrortxt] = useState("");
  const [srcvideo, setsrcvideo] = useState("");
  const onload = async () => {
    try {
      setdowload(true);
      const srctmp = await window.flutter_inappwebview.callHandler(
        "PrintExample"
      );
      setsrcvideo(srctmp);
      setloadvideo(true);
    } catch (error) {
      seterrortxt("error en cargar video");
    } finally {
      setdowload(false);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Prueba de video al descargar</p>
        {errotxt !== "" && (
          <p
            style={{
              color: "red",
            }}
          >
            {errotxt}
          </p>
        )}
        {dowload && <p>Cargando video...</p>}
        {loadvideo && (
          <video
            style={{
              height: "220px",
            }}
            controls
          >
            <source src={srcvideo} type="video/mp4" />
          </video>
        )}

        <button
          onClick={onload}
          style={{
            margin: "20px",
          }}
          disabled={dowload}
        >
          Cargar video
        </button>
      </header>
    </div>
  );
}

export default App;
