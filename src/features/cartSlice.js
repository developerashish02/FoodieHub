import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            let { id, quntity } = action.payload;
            console.log(id, state.items[0], "Checking");

            const index = state.items.findIndex((item) => item.id === id);
            console.log(index);

            if (index == -1) {
                state.items.push(action.payload);
            } else {
                const item = state.items.find((item) => item.id == id);
                item.quntity += 1;
            }
            state.totalPrice += +action.payload.price / 100;
        },

        removeItem: (state, action) => {
            const id = action.payload;

            const removeItem = state.items.find((item) => item.id == id);

            if (removeItem && removeItem.quntity !== 1) {
                removeItem.quntity -= 1;
                if (state.totalPrice !== 0) {
                    state.totalPrice -= +removeItem.price / 100;
                }
            } else {
                const index = state.items.findIndex((item) => item.id === id);
                state.items.splice(index, 1);
                if (state.totalPrice !== 0) {
                    state.totalPrice -= +removeItem.price / 100;
                }
            }

            // if (removeItem && removeItem.quntity === 1) {
            //     const index = state.items.findIndex((item) => item.id === id);
            //     if (index !== 1) {
            //         state.totalPrice -= removeItem.price / 100;
            //         state.items.splice(index, 1);

            //     }
            // }
        },
    },
});

export const { addToCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
