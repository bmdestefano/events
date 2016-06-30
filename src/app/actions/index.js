export const addTicket = (ticketType) => {
	return {
		type: 'ADD_TICKET',
		ticketType
	}
}

export const removeTicket = (id) => {
	return {
		type: 'REMOVE_TICKET',
		id
	}
}