import React from 'react'
import { useDocs } from 'docz'

const IndexPage = () => {
  const docs = useDocs();
  console.log(docs);
  return (
    <div>Docs:</div>
  )
}

export default IndexPage