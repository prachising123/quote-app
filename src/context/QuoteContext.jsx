import { useReducer } from "react";
import QuoteReducer from "./QuoteReducer";
import { createContext } from "react";

const QuoteContext = createContext();

export const QuoteProvider = ({children}) => {
     
    const initialState = {
        quoteData : {},
    }

    const [state , dispatch ] = useReducer(QuoteReducer , initialState);

    return(
        <QuoteContext.Provider value={{...state,dispatch}}>
        {children}
        </QuoteContext.Provider>
    )
}
export default QuoteContext;