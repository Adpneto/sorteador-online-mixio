import { useRecoilValue } from "recoil"
import { listUsers } from "../atom"

export const useListUsers = () => {
    return useRecoilValue(listUsers)
}