import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  priyaId: 0,
  title: "hghgfghf",
  value: `My journey began with a fascination for Linux systems, which led me to delve into the world of networking. As I honed my skills, I embraced the power of Kali Linux tools and ventured into Python programming. I channeled my creativity into crafting applications using Django, showcasing my ability to bring ideas to life. Seeking to expand my horizons, I transitioned to the dynamic realm of JavaScript, immersing myself in the MERN (MongoDB, Express.js, React, Node.js) stack. For the past 3 years, I've been dedicated to mastering this ecosystem, using it to build innovative and responsive web applications. My passion for learning, combined with my diverse technical expertise, fuels my drive to tackle new challenges and contribute to the ever-evolving tech landscape. Let's connect and explore the endless possibilities at the intersection of innovation and technology!`,
};

export const bioSlice = createSlice({
  name: "personBio",
  initialState,
  reducers: {
    changeBio: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
    updatePriyaId: (state, action) => {
      console.log("checkig store",action)
      state.priyaId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeBio, updatePriyaId } = bioSlice.actions;

export default bioSlice.reducer;
