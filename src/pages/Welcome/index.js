import React, { useEffect, useContext } from 'react';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Section from '../../components/Section';
import { useHistory } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { MastersContext } from '../../context/masters';

function Welcome() {
  const history = useHistory();
  const { master, isLoading, choose, updateMaster } = useContext(MastersContext)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateMaster(undefined), [])

  useEffect(() => {
    if (typeof master === 'object') {
      setTimeout(() => history.push(routes.MASTER));
    }
  }, [master, history])

  return (
    <Section>
      <Title className='mt-2 mt-md-3 pulsate'>Welcome to <strong>iClinic</strong></Title>
      <Subtitle>FRONTEND CHALLENGE</Subtitle>
      <Button isLoading={isLoading} className='mt-5 mb-auto blob-primary' onClick={() => choose()}>START</Button>
    </Section>
  );
}

export default Welcome;
