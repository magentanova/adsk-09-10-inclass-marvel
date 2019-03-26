
export enum ActionTypes {
    SELECT_CHARACTER = "SELECT_CHARACTER",
    CHARACTER_DETAIL_LOADED = "CHARACTER_DETAIL_LOADED",
    CHARACTER_DETAIL_LOADING = "CHARACTER_DETAIL_LOADING",
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
    characterDetail: ICharacter | {};
    charactersLoading: boolean;
    selectedCharacterId: number;
  }
   