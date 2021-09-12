import { useContext } from "react";
import AppStateContext from "../contexts/AppstateContext";

export default function useOrders(){
    const { orders }  = useContext(AppStateContext);
    
    return orders;
}