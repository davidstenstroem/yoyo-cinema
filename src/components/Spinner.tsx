import * as React from 'react'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch, FontAwesomeIcon } from 'src/icons'

interface Props {
  size?: SizeProp
}

export const Spinner: React.FunctionComponent<Props> = ({
  size,
}): JSX.Element => (
  <div className="spinner-wrapper">
    <div className="spinner">
      <FontAwesomeIcon icon={faCircleNotch} size={size ? size : '1x'} spin />
    </div>
  </div>
)
