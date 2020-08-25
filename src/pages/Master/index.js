import React, { useEffect, useContext } from 'react';
import classNames from 'classnames';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Section from '../../components/Section';

import Image from '../../components/Image';
import Back from "../../components/Back";
import { useHistory } from "react-router-dom";
import { routes } from "../../constants/routes";
import { MastersContext } from "../../context/masters";

function Master() {
  const history = useHistory();
  const { master, isLoading, choose } = useContext(MastersContext)

  useEffect(() => {
    if (!master) {
      history.push(routes.INDEX);
      return;
    }
  }, [master, history])

  if (!master) {
    return null;
  }

  return (
    <Section
      className={ classNames('Master mt-0', {
      'bg-yellow': master.THEME === 'yellow',
      'bg-secondary': master.THEME === 'dark'
      }) }
    >
      <Back />
      <Button
        isLoading={isLoading}
        onClick={() => choose()}
        className={ classNames('mt-0 px-1 px-sm-3 py-1 mb-sm-4', {
          'btn-white blob-white': master.THEME === 'dark',
          'btn-secondary blob-secondary': master.THEME === 'yellow'
        })}
      >
        choose your path again, Padawan
      </Button>
      <Image
        className={ classNames('mt-0 mb-2', {
          'blink-dark': master.THEME === 'yellow',
          'blink-white': master.THEME === 'dark'
        })}
        src={master.IMAGE}
        alt={master.DESC}
      />
      <Text
        className={ classNames('mt-1 mb-4 mb-sm-auto', {
          'text-secondary': master.THEME === 'yellow',
          'text-white': master.THEME === 'dark'
        })}
      >
        Your master is <strong>{master.DESC}</strong>
      </Text>
    </Section>
  );
}

export default Master;
