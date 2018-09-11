
export enum ActionTypes {
    SELECT_CHARACTER = "SELECT_CHARACTER",
    CHARACTERS_LOADED = "CHARACTERS_LOADED",
    CHARACTERS_LOADING = "CHARACTERS_LOADING"
}

export interface ICharacter {
    id: number;
    name: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }

export interface IAppState {
    characters: ICharacter[];
    charactersLoading: boolean;
    selectedCharacterId: number;
  }
   