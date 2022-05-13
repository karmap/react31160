import { createContext, useContext } from "react";

export const DarkmodeContext = createContext(false)

export const useDarkmode = () => {
    return useContext( DarkmodeContext )
}
