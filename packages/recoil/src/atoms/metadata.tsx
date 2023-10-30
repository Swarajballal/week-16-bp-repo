import { BACKEND_API_URL } from "@coral-xyz/common";
import { atom, selector } from "recoil";

export const metatdataAtom = atom<{
  firstName: string;
  lastName: string;
}>({
  key: "metadataAtom",
  default: selector({
    key: "metadataAtomSelector",
    get: async ({ get }) => {
      const metadata = await fetch(`${BACKEND_API_URL}/users/metadata`, {
        method: "GET",
      });
      const json = await metadata.json();
      return {
        firstName: json.firstName,
        lastName: json.lastName,
      };
    },
  }),
});