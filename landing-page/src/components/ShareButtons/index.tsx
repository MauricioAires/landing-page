import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

import * as S from './styles'

const ShareButtons = () => (
  <S.Wrapper>
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
    >
      <FaFacebook />
    </a>

    <a
      href="https://twitter.com"
      target="_blank"
      rel="noreferrer"
      aria-label="Twitter"
    >
      <FaTwitter />
    </a>
  </S.Wrapper>
)

export default ShareButtons
