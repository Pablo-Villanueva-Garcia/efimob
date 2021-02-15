import { useHistory } from "react-router-dom";

export const GoBackButton = () => {
  let history = useHistory();
  return (
    <div className="xs50 font">
      <button onClick={history.goBack}>Atras</button>
    </div>
  );
};
