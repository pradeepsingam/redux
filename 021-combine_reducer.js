const redux = require('redux')
const createStore = redux.createStore
const bindActionCreator = redux.bindActionCreators
const combineReducers = redux.combineReducers

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

function cakeordered(qty =1) {
    return {
    type: CAKE_ORDERED,
    payload: qty,
        }
}

function cakeRestocked(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload : qty,
    }
}

function orderIceCream(qty =1) {
    return {
        type: ICECREAM_ORDERED,
        payload : qty,
    }
}

function restockIceCream(qty =1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload : qty,
    }
}

//Reducers
// (prevState,action) => newState

const initialStateCakes = {
    numberOfCakes : 20,
}

const initialStateIceCream = {
    numberOfIceCream : 20,
}

const Cakereducer = (state = initialStateCakes, action) => {
    switch( action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes : state.numberOfCakes - action.payload
            }
        case CAKE_RESTOCKED: 
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            }   
            
        default :
            return state
    }
}

const IceCreamreducer = (state = initialStateIceCream, action) => {
    switch( action.type) {
        case ICECREAM_ORDERED: 
            return {
                ...state,
                numberOfIceCream : state.numberOfIceCream - action.payload
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIceCream : state.numberOfIceCream + action.payload
            }        
            
        default :
            return state
    }
}

const rootReducer = combineReducers({
    cake : Cakereducer,
    icecream: IceCreamreducer,
})

const store = createStore(rootReducer)
console.log('Inital state',store.getState())

//Subscribe - updated state
const unsubscribe = store.subscribe(()=> console.log('Updated state',store.getState()))


const action = bindActionCreator({cakeordered,cakeRestocked,orderIceCream,restockIceCream}, store.dispatch)
action.cakeordered()
action.cakeordered(10)
action.orderIceCream(5)
action.cakeRestocked(8)
action.cakeordered()
action.cakeRestocked(5)
action.restockIceCream(40)

unsubscribe()
