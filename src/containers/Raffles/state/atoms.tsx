import { atom } from "recoil";

export const resyncAtom = atom({
  key: "resync",
  default: 0,
});
export const nftsAtom = atom({
  key: "nfts",
  default: [],
});

export const nftsSelectionAtom = atom({
  key: "nftsSelection",
  default: [],
});

export const nftsQuestedAtom = atom({
  key: "nftsQuested",
  default: [],
});
export const nftsQuestedExhaustAtom = atom({
  key: "nftsQuestedExhaust",
  default: [],
});

export const questsAtom = atom({
  key: "quests",
  default: {},
});

export const questedAtom = atom({
  key: "quested",
  default: {},
});

export const questsSelectionAtom = atom({
  key: "questsSelection",
  default: "",
});

export const questsProgressionAtom = atom({
  key: "questsProgression",
  default: 0,
});

export const showCompletedAtom = atom({
  key: "showCompleted",
  default: false,
});
