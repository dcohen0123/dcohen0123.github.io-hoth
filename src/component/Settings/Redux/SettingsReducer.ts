import State from "../../../redux/State/State"

export default function settingsReducer(state = State.settingsManager, action: { type: string, payload?: any }) {
    switch (action.type) {
      default:
        return state
    }
  }