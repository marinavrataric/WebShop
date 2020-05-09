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
    },
    productList: [{
        id: 0,
        name: '',
        image: '',
        price: {
            amount: 0,
            currency: ''
        }
    }],
    dispatch: ({ }) => { },
    totalAmountRounded: "0.00 kn",
    user: {
        email: '',
        password: '',
        isLogin: false
    },
    setUser: (user: (
        {
            email: string,
            password: string,
            isLogin: boolean
        }
    )) => { },
})