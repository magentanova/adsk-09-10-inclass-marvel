
export enum ActionTypes {
    SELECT_CHARACTER = "SELECT_CHARACTER",
    CHARACTERS_LOADED = "CHARACTERS_LOADED"
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
    selectedCharacterId: number;
  }
   