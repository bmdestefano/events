export const addTicket = (id, type) => {
	return {
		type: 'ADD_TICKET',
		id,
		ticketType
	}
}

export const removeTicket = (id) => {
	return {
		type: 'REMOVE_TICKET',
		id
	}
}