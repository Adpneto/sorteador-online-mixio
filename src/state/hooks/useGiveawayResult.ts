import { useRecoilValue } from "recoil"
import { resultGiveaway } from "../atom"

export const useGiveawayResult = () => {
    return useRecoilValue(resultGiveaway)
}