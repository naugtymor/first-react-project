import {rerenderEntireTree} from "./render";
import state from "./redux/state";
import reportWebVitals from "./reportWebVitals";

rerenderEntireTree(state);

reportWebVitals();