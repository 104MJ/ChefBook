import { Recette } from './recette';

export type RootStackParamList = {
  Accueil: undefined;
  Details: { recette: Recette };
};
