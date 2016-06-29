const ticket = (state, action) => {
	switch (action.type) {
		case 'ADD_TICKET':
			return {
				id: action.id,
				ticketType: action.ticketType
			}
		default:
			return state	
	}
}

const tickets = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TICKET':
			return [
				...state,
				ticket(undefined, action)
			]
		default:
			return state
	}
}

export default tickets