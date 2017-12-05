import * as React from "react";
import * as ReactDOM from "react-dom";
// import Hello from "./Hello";
import configureStore, { history } from "./store/configureStore";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

import { getAllMakers } from "./actions/makeActions";

// ReactDOM.render(
//   <Hello name="Sambaran Roy!" />,
//   document.getElementById("root"),
// );

const store = configureStore({});
store.dispatch(getAllMakers());

ReactDOM.render((
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById("root"));
