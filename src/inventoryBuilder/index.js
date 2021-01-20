import React from 'react';
import Layout from './Layout';
import Header from 'components/Header';
import InventoryContainer from './InventoryContainer';


function InventoryBuilder(props) {
  return (
    <Layout>
      <Header />
      <InventoryContainer />
    </Layout>
  );
}

export default InventoryBuilder;
