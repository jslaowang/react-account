import React from 'react'
// require('icons/chart.svg')
// require('icons/money.svg')
// require('icons/tag.svg')
const req = require.context('icons', false, /\.svg$/)
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext)
requireAll(req)

type Props = {
  name: String
}

const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name} />
    </svg>
  )
}

export default Icon