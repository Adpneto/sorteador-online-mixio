import { useListUsers } from "./useListUsers"
import { useSetRecoilState } from "recoil"
import { resultGiveaway } from "../atom"
import { getGiveaway } from "../helpers/getGiveway"

export const useGiveaway = () => {
    const participants = useListUsers()
    const setResult = useSetRecoilState(resultGiveaway)

    return () => {
        const result = getGiveaway(participants)
        setResult(result)
    }
}