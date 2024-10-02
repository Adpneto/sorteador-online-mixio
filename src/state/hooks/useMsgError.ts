import { useRecoilValue } from "recoil"
import { errorState } from "../atom"

export const useMsgError = () => {
    const msg = useRecoilValue(errorState)
    return msg
}