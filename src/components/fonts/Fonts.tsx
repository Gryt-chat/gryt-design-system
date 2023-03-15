// eslint-disable-next-line camelcase
import { Rubik, Noto_Color_Emoji } from 'next/font/google'

import React from 'react'

export const rubik = Rubik({ subsets: ['latin'] })
export const NotoColorEmoji = Noto_Color_Emoji({ weight: '400' })

export function FontStyle() {
  return (
    <style>{`
      html {
        font-family: ${rubik.style.fontFamily} ${NotoColorEmoji.style.fontFamily} sans-serif;
      }
    `}</style>
  )
}
