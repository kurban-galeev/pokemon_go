import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'
import { getPokemons } from '../../pages/api'



interface IContext {
  isLightTheme: boolean
  setLightTheme: (isLightTheme: boolean) => void
  fetchPokemons: () => Promise<any>
}
interface Props {
  children: ReactNode
}

const InitialValue: IContext = {
  isLightTheme: true,
  setLightTheme: noop,
  fetchPokemons: async () => { }
}

const Context = createContext(InitialValue)

const ProviderContext = ({ children }: Props) => {
  const [isLightTheme, setLightTheme] = useState(true)

  const fetchPokemons = useCallback(async () => {
    const result = await getPokemons()
    return result
  }, [])


  const value = useMemo(
    () => ({ isLightTheme, setLightTheme, fetchPokemons }),
    [isLightTheme, setLightTheme, fetchPokemons],
  )

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export const useGlobalContext = () => useContext(Context)
export default ProviderContext
