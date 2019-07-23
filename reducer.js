// Imports

// Actions

const START_TIMER = "START_TIMER";
const PAUSE_TIMER = "PAUSE_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// Action Creators

function startTimer() {
  return {
    type: START_TIMER
  };
}

function pauseTimer() {
  return {
    type: PAUSE_TIMER
  };
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECOND
  };
}

// Reducer

const TIMER_DURATION = 1500;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state, action);
    case PAUSE_TIMER:
      return applyPauseTimer(state, action);
    case RESTART_TIMER:
      return applyRestartTimer(state, action);
    case ADD_SECOND:
      return applyAddSecond(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applyStartTimer(state) {
  return {
    ...state,
    isPlaying: true,
    elapsedTime: 0
  };
}

function applyPauseTimer(state) {
  return {
    ...state,
    isPlaying: false
  };
}

function applyRestartTimer(state) {
  return {
    ...state,
    isPlaying: true
  };
}

function applyAddSecond(state) {
  const { elapsedTime } = state;
  if (elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
}

// Exports

const actionCreators = {
  startTimer,
  pauseTimer,
  restartTimer,
  addSecond
};
export { actionCreators };

// Default

export default reducer;
