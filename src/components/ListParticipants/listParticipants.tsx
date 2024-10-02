import { useAdd } from "../../state/hooks/useAdd"
import { useListUsers } from "../../state/hooks/useListUsers"

export const Participants = () => {
  const Users: string[] = useListUsers()
  return (
    <ul className="m-5 flex flex-wrap">
      {Users.map((participante, index) =>
        <li 
          key={participante}
          className="text-white font-bold text-center text-xl">
          {participante} 
          {index < Users.length - 1 && <span className="mx-1">-</span>} 
        </li>
      )}
    </ul>
  )
}

