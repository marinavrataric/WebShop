import { createContext } from "react";

export const AppContext = createContext({
    visible: false,
    setVisible: (visible: (boolean)) => { },
    product: {
        "bedroom": [],
        "bathroom": [],
        "diningRoom": [],
        "kitchen": [],
        "livingRoom": [],
        "office": [],
        "outdoor": []
    }
})