import React, { SetStateAction } from 'react'

export interface Prop {
  activeIdx: number
  setActiveIdx: React.Dispatch<SetStateAction<number>>
}

export type Props = Prop & React.ComponentPropsWithoutRef<any>
