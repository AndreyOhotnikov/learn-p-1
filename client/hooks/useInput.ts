import React, { useState } from "react"

export const useInput = (initialState) => {
  const [value, setValue] = useState(initialState)
  const onChenge = (e: React.ChangeEvent<HTMLImageElement>) => {
    setValue(e.target.value)
  }

  return {
    value, onChenge
  }
}
