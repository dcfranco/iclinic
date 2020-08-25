import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { masters, LUKE, DARTH_VADER } from '../constants/masters'
import { LukeSkywalkerApi, DarthVaderApi } from '../constants/config'

export const MastersContext = React.createContext({
  master: {},
  isLoading: false,
  updateMaster: (o) => {},
  choose: () => {}
})

const MastersProvider = ({ children }) => {
  const [master, updateMaster] = useState()
  const [isLoading, toggleLoading] = useState(false)

  return (
    <MastersContext.Provider
      value={{
        master,
        isLoading,
        updateMaster,
        choose: () => {
          toggleLoading(true)

          const abortController = {
            [LUKE]: new AbortController(),
            [DARTH_VADER]: new AbortController()
          };

          const lukeRequest = fetch(LukeSkywalkerApi, {
            method: 'get',
            signal: abortController[LUKE].signal
          })
          const darthvaderRequest = fetch(DarthVaderApi, {
            method: 'get',
            signal: abortController[DARTH_VADER].signal
          })

          Promise.race([lukeRequest, darthvaderRequest]).then((response) => {
            if (response.url === LukeSkywalkerApi) {
              updateMaster(masters[LUKE])
              abortController[DARTH_VADER].abort()
              return;
            }
            updateMaster(masters[DARTH_VADER])
            abortController[LUKE].abort()
            return;
          }).catch((e) => console.log(e)).finally(() => toggleLoading(false))
        }
      }}
    >
      { children }
    </MastersContext.Provider>
  )
}

MastersProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default MastersProvider
