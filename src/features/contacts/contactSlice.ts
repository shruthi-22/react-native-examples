import { createSlice } from "@reduxjs/toolkit";

export interface Contact {
  contactName: string;
  phoneNumber: string;
}

interface PhoneBookState {
  contacts: Contact[];
}

export interface RootState {
  phoneBook: PhoneBookState;
}

const phoneBookInitialState : PhoneBookState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'phoneBook',
  initialState: phoneBookInitialState,
  reducers: {
    add: (state, action) => {
      state.contacts = [...state.contacts, action.payload]
    },
    clear: (state) => {
      state.contacts = []
    }
  }
})

export default contactSlice.reducer
export const {add, clear} = contactSlice.actions






// export const contactsReducer = (state = phoneBookInitialState, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case CLEAR_CONTACTS:
//       return {
//         ...state,
//         contacts: [],
//       };

//     default:
//       return state;
//   }
// };

// // selectors
// const getStore = (): RootState => store.getState();
// const getPhoneBook = (): PhoneBookState => getStore().phoneBook;
// export const getContacts = () => getPhoneBook().contacts;
