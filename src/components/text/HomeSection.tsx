'use client'

import type { FC } from 'react'
import type { Section } from '@prisma/client'
import { Fragment } from 'react'

import { Heading3 } from '@/components/text/Heading3'
import { HorizontalDivider } from '@/components/layout/HorizontalDivider'
import { MarkdownParagraph } from '@/components/text/MarkdownParagraph'

export type HomeSectionProps = Section

export const HomeSection: FC<HomeSectionProps> = ({ heading, paragraphs }) => {

  return <Fragment>
    <Heading3>{heading}</Heading3>
    {
      paragraphs.map(paragraph => <MarkdownParagraph key={paragraph}>
        {paragraph}
      </MarkdownParagraph>)
    }
    <HorizontalDivider/>
  </Fragment>
}
