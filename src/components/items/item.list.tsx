import React, { useState, useEffect, Fragment } from "react";

import { Input, Table } from "reactstrap";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

import ItemDataService from "./../../services/items.service" //"services/items.service";
import {ItemData,ItemMetadata} from './../../models/items.type';
import item_default_value from './../../models/items.type';

import ItemPreview from './item.preview';
import ListHeader from "../utils/list.header";

import './items.css'

type AppProps = {};
const ItemList = ({ }: AppProps) => {

  const [ items_list, setItemList] = useState< Array<ItemData> >([])
  const [ preview_visible , setPreviewVisible ] = useState<boolean>(false);
  const [ item_previewing , setItemPreviewing ] = useState<ItemMetadata>(item_default_value);

  const chekItem = (e:any,index:any) =>{
    console.log(e.target.checked,index)
  }

  const showPreview = (e:any,index:any) =>{
    let aux = items_list[index];
    let previewing : ItemMetadata = {} as ItemMetadata;

    for (let [ key , value] of Object.entries(aux)) {
      const aux_key : keyof ItemMetadata = key as keyof ItemMetadata;
      previewing[aux_key] = {
        visible: !(['id','uniqueValue'].includes(aux_key)),
        readonly:true,
        type:typeof value,
        value:value,
        newValue:value,
        displayValue:value+'',
        newDisplayValue:value+''
      }
    }
    setItemPreviewing(previewing);
    setPreviewVisible(true);
  }

  const toggleHandler = () =>{
    setItemPreviewing(item_default_value);
    setPreviewVisible(false);
  }

  useEffect(() => {
    ItemDataService.getAll()
      .then((response: any) => {
        console.log('OK', response.data);
        setItemList(response.data)
      })
      .catch((e: Error) => {
        console.log("Error", e);
      });
  },
    []
  )
  return (
    <div>
      <ItemPreview visible={preview_visible} data={item_previewing} toggleHandler={toggleHandler} />
      {
        items_list.length > 0 ?
        <Fragment>
          <ListHeader link="/items/details?sys_id=-1" label="Items" />
          <Table striped hover bordered >
            <thead>

              <tr>
                <th style={{border:'none'}}></th>
                <th style={{border:'none'}}></th>
                <th> Name </th>
                <th> Description </th>
                <th> Quantity </th>
              </tr>

            </thead>
            <tbody>
              {
                items_list.map((value, index) => {
                  return (
                    <tr key={value['uniqueValue']} >
                      <td width={20} >
                        <Input type="checkbox" onChange={(e)=>chekItem(e,index)} />
                      </td>
                      <td width={20} >
                        <BsInfoCircle className="pointer" onClick={e => showPreview(e,index) } ></BsInfoCircle>
                      </td>
                      <td>
                        <Link to={"/items/details?sys_id="+value['uniqueValue']} >
                          {value['name']}
                        </Link>
                      </td>
                      <td> {value['description']} </td>
                      <td> {value['quantity']} </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
          </Fragment>
          :
          <h2> No Items </h2>
      }
    </div>
  )
}

export default ItemList;