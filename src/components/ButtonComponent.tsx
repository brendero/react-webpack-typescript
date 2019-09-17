import React from 'react'

interface IProps {
  buttonText: string
}

export const ButtonComponent: React.FC<IProps> = ({buttonText}) => {
  return (
    <div>
      <button>
        {buttonText}
      </button>
    </div>
  )
}