import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {paths} from "../routes/paths";

export default function Page() {
  const navi = useNavigate()
  useEffect(() => {
    navi(paths.dashboard.root)
  }, [])
  return (
    <>

    </>
  );
}
