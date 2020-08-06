import { v4 as uuidv4 } from "uuid";
import ActionTypes from "../ActionTypes";

class Note {
    constructor(id, title, tags, body) {
        this.id = id;
        this.title = title;
        this.tags = tags;
        this.body = body;
        this.pinToTop = false;
        this.modified = getTime();
    }
}

function storeState(state) {
    localStorage.setItem("state", JSON.stringify(state));
}

export default function DataReducer(state, action) {
    switch (action.type) {
        case ActionTypes.HANDLE_NOTES_CHANGE:
            const stateCopy = { ...state };
            stateCopy[action.noteType] = stateCopy[action.noteType].map(
                (item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            body: action.text,
                            title: action.text.slice(0, 25),
                            modified: getTime(),
                        };
                    } else {
                        return item;
                    }
                }
            );
            storeState(stateCopy);
            return stateCopy;

        case ActionTypes.ADD_NOTE:
            const newNote = new Note(uuidv4(), "New Note", [], "");
            const stateCopy2 = {
                ...state,
                notes: [...state.notes, newNote],
            };
            storeState(stateCopy2);
            return stateCopy2;

        case ActionTypes.REMOVE_NOTE:
            let deletedNote,stateCopy3;

            state.notes.forEach((note) => {
                if (note.id === action.id) {
                    deletedNote = note;
                }
            });

            stateCopy3 = {
                ...state,
                notes: state.notes.filter((note) => {
                    if (note.id !== action.id) {
                        return note;
                    }
                }),
                trash: [...state.trash, deletedNote],
            };

            storeState(stateCopy3);
            return stateCopy3;

        case ActionTypes.DELETE_NOTE:
            const stateCopy4 = {
                ...state,
                trash: state.trash.filter((note) => {
                    if (note.id !== action.id) {
                        return note;
                    }
                }),
            };
            storeState(stateCopy4);

            return stateCopy4;

        case ActionTypes.RESTORE_NOTE:
            let restoredNote,stateCopy5;

            state.trash.forEach((note) => {
                if (note.id === action.id) {
                    restoredNote = note;
                }
            });

            stateCopy5 = {
                ...state,
                trash: state.trash.filter((note) => {
                    if (note.id !== action.id) {
                        return note;
                    }
                }),
                notes: [...state.notes, restoredNote],
            };

            storeState(stateCopy5);

            return stateCopy5;

        case ActionTypes.ADD_TAG:
            const stateCopy6 = { ...state };
            if (action.tagname !== "") {
                const newTags = checkTag(stateCopy6.tags, action.tagname);

                stateCopy6.tags = newTags; // assign new tags to the main list of tags

                stateCopy6[action.noteType] = stateCopy6[action.noteType].map(
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

            storeState(stateCopy6);
            return stateCopy6;

        case ActionTypes.REMOVE_TAG:
            let newNotes = [...state.notes];

            newNotes = newNotes.map((note) => {
                return {
                    ...note,
                    tags: [
                        ...note.tags.filter((tag) => tag.title !== action.name),
                    ],
                };
            });

            const stateCopy7 = {
                ...state,
                tags: [...state.tags.filter((item) => item.id !== action.id)],
                notes: newNotes,
            };
            
            storeState(stateCopy7);
            return stateCopy7;
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

function padZero(time) {
    return time < 10 ? `0${time}` : time;
}

function getTime() {
    const date = new Date();
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const h = date.getHours() + 1 > 12 ? date.getHours() - 12 : date.getHours();
    const type = date.getHours() + 1 > 12 ? "PM" : "AM";
    const m = date.getMinutes();

    const time = `${
        months[date.getMonth()]
    } ${date.getDay()}, ${date.getFullYear()} ${h}:${padZero(m)} ${type}`;

    return time;
}
