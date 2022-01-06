import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";

import Index from './index';

import ItemList from './items/item.list';
import ItemDetails from './items/item.details';
type AppProps = {};

const MyRouter = ({ }: AppProps) => {
  return (
    <Container className="nopadding" fluid>
      <BrowserRouter>
        <Routes>
            
            <Route path="/" element={<Index />} >

              <Route path="items" >
                  <Route index element={<ItemList />} />
                  <Route path="details" element={<ItemDetails />} />
              </Route>

            </Route>

        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default MyRouter;
