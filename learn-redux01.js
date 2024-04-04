const redux = require('redux')
const createStore = redux.createStore
// bind action creating step-01
const bindActionCreator = redux.bindActionCreators
// end of setp -01

const ORDERED = "ORDERED"
const RESTOCKED = "RESTOCKED"


function ordered() {
    return {
        type : ORDERED,
        quantity : 1
    }
}

function restocked(qty) {
    return {
        type: RESTOCKED,
        quantity : qty
    }
}

const initialState = {
    quantity : 5,
}

const reducer = (state = initialState, action) => {
 switch(action.type) {
    case 'ORDERED' :
        return {
            ...state,
            quantity: state.quantity-1
        }
    case 'RESTOCKED' :
        return {
            ...state,
            quantity: state.quantity+action.quantity
        }
    default: 
        return state
 }

}


const store = createStore(reducer)
console.log('initail quantity',store.getState())

const unsubscribe = store.subscribe(()=>console.log('updated quanity',store.getState()))

store.dispatch(ordered())
store.dispatch(ordered())
store.dispatch(restocked(11))

// bind action creator - step 02
const action = bindActionCreator({ordered, restocked}, store.dispatch)
action.ordered()
action.ordered()
action.ordered()
action.ordered()
action.restocked(11)
// now we can remove the lines from 53-55
// end of step 02



unsubscribe()
