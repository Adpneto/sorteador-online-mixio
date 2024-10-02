import { getGiveaway } from "./getGiveway"

describe('Dado um sorteio de amigo secreto', () => { 
    test('Cada participante não sorteie o proprio nome', () => { 
        const participants = [
            'Ana',
            'Catarina',
            'Juliana',
            'João',
            'Vinicius',
            'Nathália'
        ]

        const giveaway = getGiveaway(participants)
        participants.forEach(participant => {
            const friend = giveaway.get(participant)
            expect(friend).not.toEqual(participant)  
        })
     })
 })