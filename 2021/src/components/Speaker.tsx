import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import Image, { FluidObject } from "gatsby-image"
import { enOrJa } from "../util/languages"

export type TalkType = {
  uuid: string
  title: string
  titleJa: string
  description: string
  descriptionJa: string
  spokenLanguage: string
  slideLanguage: string
  speakerIDs: string[]
  date: "day1" | "day2"
  startsAt: string
  endsAt: string
  hiddenTimeBoxes: string[] | null
  room: "A" | "B"
}

export type SpeakerType = {
  uuid: string
  name: string
  biography: string
  biographyJa: string
  presentations: string[]
  github: string
  twitter: string
}

export type AvatarType = {
  originalName: string
  originalImg: string
} & FluidObject

export type Props = {
  speaker: SpeakerType
  avatar: AvatarType
  talk: TalkType
}

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`
const Avatar = styled(Image)`
  width: 100%;
  max-width: 273px;
`
const Title = styled.h2`
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 2rem;
  overflow-wrap: break-word;
`
const Name = styled.p`
  margin-bottom: 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 1.6rem;
`

export function Speaker(props: Props) {
  console.log(props)
  const { i18n } = useTranslation()
  const { talk, speaker, avatar } = props
  const { uuid, title, titleJa } = talk
  const { name } = speaker

  if (!uuid || title === "TBA") {
    return (
      <div>
        <Avatar fluid={avatar} loading="lazy" />
        <Title lang="en">{enOrJa(i18n)(title, titleJa)}</Title>
        <Name>{name}</Name>
      </div>
    )
  }

  return (
    <LinkContainer to={`talk/${uuid}`}>
      <Avatar fluid={avatar} loading="lazy" />
      <Title>{enOrJa(i18n)(title, titleJa)}</Title>
      <Name>{name}</Name>
    </LinkContainer>
  )
}
