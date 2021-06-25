import React from 'react'

function EmbedHTML({ node }: any): JSX.Element {
  const { html } = node

  if (!html) {
    return <div />
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default EmbedHTML
