import { useContext } from "react";
import AppStateContext from "../contexts/AppstateContext";

export default function usePrototypes(){
    const { prototypes }  = useContext(AppStateContext);
    
    return prototypes;
}