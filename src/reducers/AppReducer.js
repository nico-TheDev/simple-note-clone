import globalTypes from "../GlobalTypes";
import { v4 as uuidv4 } from "uuid";

class Note {
    constructor(id, title, tags, body) {
        this.id = id;
        this.title = title;
        this.tags = tags;
        this.body = body;
        this.pinToTop = false;
    }
}

export default function AppReducer(state, action) {
    switch (action.type) {
        case globalTypes.toggleNav:
            console.log("navi");
            return { ...state, navbarOpen: !state.navbarOpen };
        case globalTypes.toggleInfo:
            console.log("open info");
            return { ...state, infoBarOpen: !state.infoBarOpen };
        case globalTypes.changeCurrentNote:
            const assignedNote = { ...action.note };
            return { ...state, currentNote: assignedNote };
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
            const newNote = new Note(uuidv4(), "New Note", [], "");

            return {
                ...state,
                notes: [...state.notes, newNote],
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

        case globalTypes.addTag:
            const newState = { ...state };
            if (action.tagname !== "") {
                const newTags = checkTag(newState.tags, action.tagname);

                newState.tags = newTags; // assign new tags to the main list of tags

                newState[action.noteType] = newState[action.noteType].map(
                    (item) => {
                        if (item.id === action.id) {
                            const newTags = checkTag(item.tags, action.tagname);

                            return {
                                ...item,
                                tags: newTags,
                            };
                        } else {
                            return item;
                        }
                    }
                );
            }

            return newState;

        case globalTypes.removeTag:
            let newNotes = [...state.notes];

            newNotes = newNotes.map((note) => {
                return {
                    ...note,
                    tags: [
                        ...note.tags.filter((tag) => tag.title !== action.name),
                    ],
                };
            });

            return {
                ...state,
                tags: [...state.tags.filter((item) => item.id !== action.id)],
                notes: newNotes,
            };

        case globalTypes.changeQuery:
            return {
                ...state,
                query: action.query,
            };

        default:
            return state;
    }
}

function checkTag(tagArr, tagname) {
    const isTagPresent = tagArr.some((item) => item.title === tagname);

    if (isTagPresent) {
        return [...tagArr];
    } else {
        return [
            ...tagArr,
            {
                id: uuidv4(),
                title: tagname,
            },
        ];
    }
}
