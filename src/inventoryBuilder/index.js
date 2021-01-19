import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import Header from 'components/Header';
import InventoryContainer from './InventoryContainer';

InventoryBuilder.propTypes = {};

function InventoryBuilder(props) {
  return (
    <Layout>
      <Header />
      <InventoryContainer />
    </Layout>
  );
}

export default InventoryBuilder;
