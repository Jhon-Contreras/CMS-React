import type { Contact } from "../schemas/Contact";

type State = {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "FETCH_INIT" }
  | { type: "SUCCESS"; payload: Contact[] }
  | { type: "FETCH_ERROR"; error: string }
  | { type: "ADD_CONTACT"; payload: Contact }
  | { type: "DELETE_CONTACT"; payload: string }
  | { type: "CLEAR_ERROR" };

export const initialState: State = {
  contacts: [],
  loading: false,
  error: null,
};

export function contactsReducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "SUCCESS":
      return { ...state, loading: false, contacts: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.error };
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    default:
      return state;
  }
}
