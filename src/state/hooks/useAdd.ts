import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, listUsers } from "../atom"

export const useAdd = () => {
    const setList = useSetRecoilState(listUsers)
    const list = useRecoilValue(listUsers)
    const setError = useSetRecoilState(errorState)
    return (usersCurrent: string) => {
        if (list.includes(usersCurrent)) {
            setError('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setError('')
            }, 5000)
            return
        }
        return setList(listCurrent => [...listCurrent, usersCurrent])
    }
}
