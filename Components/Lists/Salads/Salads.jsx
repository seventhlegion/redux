import { useDispatch } from "react-redux";
import CallSalads from "./Call-Salads";
import Foods from "../../../public/Data/Foods";
import dropIn from "../../Backdrop/dropIn";

export default function Salads() {
  const dispatch = useDispatch();
  return <CallSalads food={Foods} dropIn={dropIn} dispatch={dispatch} />;
}
