import globalTypes from "../GlobalTypes";
import { v4 as uuidv4 } from "uuid";

export default function AppReducer(state, action) {
    switch (action.type) {
        case globalTypes.toggleNav:
            console.log("navi");
            return { ...state, navbarOpen: !state.navbarOpen };

        case globalTypes.handleNotesChange:
            const stateCopy = { ...state };
            stateCopy[action.noteType] = stateCopy[action.noteType].map(
                (item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            body: action.text,
                            title: action.text.slice(0, 25),
                        };
                    } else {
                        return item;
                    }
                }
            );

            return stateCopy;

        case globalTypes.addNote:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        id: uuidv4(),
                        title: "New Note",
                        tags: [],
                        body: ``,
                    },
                ],
            };

        case globalTypes.removeNote:
            let deletedNote;

            state.notes.forEach((note) => {
                if (note.id === action.id) {
                    deletedNote = note;
                }
            });

            return {
                ...state,
                notes: state.notes.filter((note) => {
                    if (note.id !== action.id) {
                        return note;
                    }
                }),
                trash: [...state.trash, deletedNote],
            };

        case globalTypes.deleteNote:
            return {
                ...state,
                trash: state.trash.filter((note) => {
                    if (note.id !== action.id) {
                        return note;
                    }
                }),
            };

        case globalTypes.restoreNote:
            let restoredNote;

            state.trash.forEach((note) => {
                if (note.id === action.id) {
                    restoredNote = note;
                }
            });

            return {
                ...state,
                trash: state.trash.filter((note) => {
                    if (note.id !== action.id) {
                        return note;
                    }
                }),
                notes: [...state.notes, restoredNote],
            };

        default:
            return state;
    }
}
