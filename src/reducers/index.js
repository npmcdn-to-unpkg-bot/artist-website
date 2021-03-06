import { combineReducers } from 'redux'
import backpack from 'reducers/backpack'
import tutorialWriter from 'reducers/tutorialWriter'

function tutorialViewer (state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

function userPage (state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

function catalogue (state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  backpack,
  tutorialWriter,
  tutorialViewer,
  userPage,
  catalogue
})

export default rootReducer

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
export const state = {
  'tutorial-writer': {
    selection: {
      taskSwimlane: [
        // using keys to reference tasks
        'start'
      ],
      characterSwimlanes: [
        // using keys to reference character swimlances
        {
          // using keys to reference acts
          key: 'Xao Yong',
          acts: ['start']
        },
        {
          // using keys to reference acts
        }
      ]
    },
    timeline: {
      taskSwimlane: [
        'start'
      ],
      CharacterSwimlanes: [
        {
          key: 'act1',
          acts: ''
        },
        {
          key: 'act2'
        }
      ]
    },
    'main-viewport': {
      navigation: {}
    },
    'property-window': {
      editor: {}
    }
  }, // tutorial writer
  'tutorial-viewer': {
    navigation: {}
  },
  'bag-pack': {
    icon: {}
  }
}
