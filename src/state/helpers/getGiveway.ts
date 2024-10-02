import shuffle from "just-shuffle"

export function getGiveaway(participants: string[]) {
    const totalParticipants = participants.length
    const shuffleGiveawey = shuffle(participants)
    const result = new Map<string, string>()

    for (let index = 0; index < totalParticipants; index++) {
        const numberFriend = index === (totalParticipants - 1) ? 0 : index + 1
        result.set(shuffleGiveawey[index], shuffleGiveawey[numberFriend])
    }
    return result
}