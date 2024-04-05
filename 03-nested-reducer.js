const redux = require('redux')

const initalState = {
    name : 'Pradeep',
    address : {
        street: 'Thaninayaga st',
        town: 'Koomankulam',
        country: 'Sri Lanka'

    }
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload : street,
    }
}

const reducer = (state = initalState, action) => {

    switch(action.type){
        case STREET_UPDATED:
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload,
                }
            }
        default: 
             return state
            
    }
 }

 const store = redux.createStore(reducer)

 console.log('Initial state', store.getState())

 const unsubscribe = store.subscribe(()=> {console.log('Updated state', store.getState())})

 store.dispatch(updateStreet('Gayathiri lane'))

 unsubscribe()
