import { AddItem } from "functions";
import { Button } from "styles/global";

const AddBtn: React.FC = () => {
  return (
    <Button type="submit" onClick={AddItem}>
      Lägg till
    </Button>
  );
};

export default AddBtn;
