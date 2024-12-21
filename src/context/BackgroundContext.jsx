import { createContext, useState } from "react"

export const backgroundContext = createContext()

export const BackgroundProvider = ({children}) => {
  const [background, setBackground] = useState('#e4eafa')

  const changeBackground = () => {
    const gerarValorHex = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')

    setBackground(`#${gerarValorHex()}${gerarValorHex()}${gerarValorHex()}`)
  }

  return(
    <backgroundContext.Provider value={{background, changeBackground, setBackground}}>
      {children}
    </backgroundContext.Provider>
  )
}