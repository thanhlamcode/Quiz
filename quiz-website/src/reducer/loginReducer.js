export const loginReducer = (state = true, action) => {
  switch (action.type) {
    case "LOG":
      return !state; // Thay đổi giá trị của state
    default:
      return state; // Trả về state hiện tại cho các action type khác
  }
};
