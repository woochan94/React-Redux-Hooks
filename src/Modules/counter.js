// 액션 정의 
const INCREMENT = 'counter/INCREMENT'; 
const DECREMENT = 'counter/DECREMENT'; 

// 액션 생성함수 정의 
export const increment = () => ({ type: INCREMENT }); 
export const decrement = () => ({ type: DECREMENT });

// 초기 state 정의 
const initialState = 0;

// reducer 정의 
const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: 
            return state + 1;
        case DECREMENT:
            return state - 1;
        default: 
            return state; 
    }
}

export default counter;