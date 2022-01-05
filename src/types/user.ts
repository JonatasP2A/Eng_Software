import { BackgroundColors } from "../components/PlayersModal/Components/ColorSelector";

export interface User {
  id: number;
  name: string;
  color: BackgroundColors;
  cash: number;
  type: number;
}
