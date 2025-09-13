import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [{
    id: 1,
    filename: 'Document1.pdf',
    desc: 'this file contains important information of CSE core fundamentals',
  }, {
    id: 2,
    filename: 'Document2.pdf',
    desc: 'this file contains important information of CSE core fundamentals',
  }],
  people: [{
    id: 1,
    name: 'Rohan',
    email: 'rohan@example.com'
  }, {
    id: 2,
    name: 'Sushma',
    email: 'sushma@example.com'
  }
],
};

const adminDashboardSlice = createSlice({
  name: "adminDashboard",
  initialState,
  reducers: {
    addFile: (state, action) => {
        let newFile = {
            id : files.length + 1,
            filename : action.payload.filename,
            desc : action.payload.desc,
        };
      state.files=[...state.files, newFile];
    },
    removeFile: (state, action) => {
      state.files = state.files.filter(file => file.id !== action.payload.id);
    },
    addPerson: (state, action) => {
        let newPerson = {
            id : state.people.length + 1,
            name : action.payload.name,
            email : action.payload.email,
        };
      state.people=[...state.people, newPerson];
    },
    removePerson: (state, action) => {
      state.people = state.people.filter(person => person.id !== action.payload.id);
    },
    editfile: (state, action) => {
      const { id, filename, desc } = action.payload;
      const existingFile = state.files.find(file => file.id === id);
        if (existingFile) {
          existingFile.filename = filename;
          existingFile.desc = desc;
        }
  },
  editperson: (state, action) => {
      const { id, name, email } = action.payload;
      const existingPerson = state.people.find(person => person.id === id);
      if (existingPerson) {
          existingPerson.name = name;
          existingPerson.email = email;
      }
  },
  },
});

export const { addFile, removeFile, addPerson, removePerson } = adminDashboardSlice.actions;

export default adminDashboardSlice.reducer;
