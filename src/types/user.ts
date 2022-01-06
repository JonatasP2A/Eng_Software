import { BackgroundColors } from '../components/PlayersModal/Components/ColorSelector';

export interface House {
  id: number;
  incoming: boolean;
  price: number;
  sort: boolean;
  multiplier: boolean;
  jail: boolean;
}

export interface User {
  id: number;
  name: string;
  color: BackgroundColors;
  cash: number;
  type: number;
  houseNumber: number;
  houses: House[];
}
