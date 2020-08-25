import DarthVaderImage from '../assets/images/dv.png';
import LukeImage from '../assets/images/lk.png';

export const DARTH_VADER = 'darthvader'
export const LUKE = 'luke'

export const masters = {
  [DARTH_VADER]: {
    IMAGE: DarthVaderImage,
    DESC: 'Darth Vader',
    THEME: 'dark'
  },
  [LUKE]: {
    IMAGE: LukeImage,
    DESC: 'Luke Skywalker',
    THEME: 'yellow'
  }
}
