import BlockContent from '@sanity/block-content-to-react'
import React from 'react'
import client from '../client'
import serializers from './serializers'

const { projectId, dataset } = client.config()

function SimpleBlockContent(props: any): JSX.Element {
  const { blocks } = props

  if (!blocks) {
    return <div />
  }

  return (
    <div className={props.className}>
      <BlockContent
        blocks={blocks}
        serializers={serializers}
        projectId={projectId}
        dataset={dataset}
      />
    </div>
  )
}

export default SimpleBlockContent
