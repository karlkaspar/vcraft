import * as React from "react";
import { useHistory } from "react-router-dom";

const BackButton = () => {
    let history = useHistory();
    return (
        <>
          <button onClick={() => history.goBack()}>Back</button>
        </>
    );
};
export default BackButton;
