// import logo from "./logo.svg";
import "./App.css";
// import Session1 from "./react_Session1/session1";
// import Red from "./react_Session1/red";
// import Black from "./react_Session1/black";
// import Blue from "./react_Session1/blue";
// import Yellow from "./react_Session1/yellow";
// import Purple from "./react_Session1/purple";
// import States from "./state/states";
import Props from "./props/Props";
import PropsState from "./propsStatePractice/propsState";

function App() {
  //react: duoc xay dung trb co so componetn va chay theo co che single page
  //state full: function
  return (
    // <div className="table">
    //   <div class="row-1">
    //     <Red />

    //     <Black />
    //   </div>
    //   <div class="row-2">
    //     <Blue />

    //     <Yellow />
    //   </div>
    //   <div class="row-3">
    //     <Purple />
    //   </div>
    // </div>

    // <States />
    <div>
      {/* <Props /> */}
      <PropsState />
    </div>
  );
}

export default App;
