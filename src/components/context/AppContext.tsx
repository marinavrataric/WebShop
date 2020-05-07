import { createContext } from "react";

export const AppContext = createContext({
    visible: false,
    setVisible: (visible: (boolean)) => { },
})