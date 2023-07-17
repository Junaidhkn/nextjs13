import React from 'react'

type DocsIdPageParams = {
  params: {
    id: string
  }
}

const DocsIdPage = ({ params }: DocsIdPageParams) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 text-4xl">
      DocsIdPage {params.id}
    </div>
  )
}

export default DocsIdPage
