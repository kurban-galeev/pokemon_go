import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'
import noop from 'lodash/noop'


interface IContext {
  isLightTheme: boolean
  setLightTheme: (isLightTheme: boolean) => void

}
interface Props {
  children: ReactNode
}

const InitialValue: IContext = {
  isLightTheme: true,
  setLightTheme: noop,

}

const Context = createContext(InitialValue)

export const Provider = ({ children }: Props) => {
  const [isLightTheme, setLightTheme] = useState(true)


  const value = useMemo(
    () => ({ isLightTheme, setLightTheme }),
    [isLightTheme, setLightTheme],
  )

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export const useGlobalContext = () => useContext(Context)
