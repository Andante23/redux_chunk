import letterData from "assets/fakedata.json";

// 리듀서 함수에 들어가는 초기값
const initialState = letterData;

// 액션 변수 정의
const ADD_ZNBILETTER = "zaNaBiLetter/ADD_ZNBLETTER";
const UPDATE_ZNBLETTER = "zaNaBiLetter/UPDATE_ZNBLETTER";
const DELETE_ZNBLETTER = "zaNaBiLetter/DELETE_ZNBLETTER";

/*
 addZanNaBiLetter :잔나비 팬 레터 데이터를 추가하는 액션 함수
 updateZanNaBiLetter : 잔나비 팬 레터의 내용을 변경하는 액션 함수
 deleteZanNaBiLetter : 잔나비 팬 레터 데이터를 삭제하는 액션 함수
 zaNaBiLetter : 전달받은 action 타입에 따라 변화를 일으키는 리듀서 함수 
 */
export const addZanNaBiLetter = (payload) => {
  return { type: ADD_ZNBILETTER, payload };
};

export const updateZanNaBiLetter = (payload) => {
  return { type: UPDATE_ZNBLETTER, payload };
};

export const deleteZanNaBiLetter = (payload) => {
  return { type: DELETE_ZNBLETTER, payload };
};

export const zaNaBiLetter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ZNBILETTER:
      return [...state, action.payload];

    case UPDATE_ZNBLETTER:
      return state.map((letter) =>
        letter.id === action.payload.id
          ? { ...letter, content: action.payload.editedContent }
          : letter
      );

    case DELETE_ZNBLETTER:
      return state.filter((letter) => letter.id !== action.payload);

    default:
      return state;
  }
};
