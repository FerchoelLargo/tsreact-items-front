import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import {ItemData, ItemMetadata} from'./../../models/items.type'
import ItemDataService from "./../../services/items.service"
import item_default_value from'./../../models/items.type'
import ItemForm from './item.form'

import FormHeader from './../utils/form.header';
import Alert from './../utils/modal.alert';
import Loading from './../utils/modal.loading';

type AppProps = {};
const ItemDetails = ({ }: AppProps) => {

  const form_header_props_default = {label:'Item - New Element',isNew:true,operation:'insert'}
  
  const [ item_details , setItemDetails ] = useState<ItemMetadata>(item_default_value);
  const [ form_header_props , setFormHeaderProps ] = useState(form_header_props_default);

  const [ show_alert , setShowAlert] = useState(false)
  const [ loading , setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{//on load page
    setLoading(true);
    const parms = Object.fromEntries(searchParams.entries());
    let form_header_props_initial = JSON.parse( JSON.stringify(form_header_props_default) )
    
    if(parms.sys_id){
      if(parms.sys_id != '-1'){
        form_header_props_initial.isNew = false;
        form_header_props_initial.operation = "update";
        ItemDataService.findByUnique(parms.sys_id)
        .then((response: any) => {
          if(response.status == 200){
            const data = response.data;
            if(data.length > 0){
              setItemDetails(createMetadataFromData(data[0]));
              form_header_props_initial.label="Item - " + data[0]['name'];
              setFormHeaderProps(form_header_props_initial);
            }else{//id no existe

            }
          }else{//error en el request

          }
          setLoading(false);
        })
        .catch((e: Error) => {
          console.log("Error", e);
        });
      }else{
        console.log("Es nuevo")
      }
    }else{//parms no definidos
      parms.sys_id = '-1';
      searchParams.append('sys_id','-1')
      setSearchParams(searchParams)
    }

  },[])

  const onSave = () => {
    setLoading(true);
    const item : ItemData = {
      name: item_details['name'].newValue,
      description: item_details['description'].newValue,
      quantity: item_details['quantity'].newValue,
      uniqueValue: item_details['uniqueValue'].value,
      created_at: item_details['created_at'].value,
      updated_at: item_details['updated_at'].value,
      id: item_details['id'].value,
    }
    ItemDataService.update(item,item.id)
    .then((response: any) => {
      if( response.status == 200 ){
        const {data} = response
        setItemDetails( createMetadataFromData( data ) );
        setFormHeaderProps(prev => ({...prev,label:'Item - '+data['name']}));

        setLoading(false);
      }
    })
    .catch(e =>{
      console.log(e)
    })
  }

  const onDelete = () => {
    setShowAlert(true)
  }

  const changeValues = ( index:string , newValue:any) =>{
    const aux_key : keyof ItemMetadata = index as keyof ItemMetadata;
    let aux = item_details[aux_key];
    aux['newValue'] = newValue;
    aux['newDisplayValue'] = newValue+'';
    console.log('item.details.changeValues',index,newValue,aux,aux_key)
    setItemDetails( prev => ({...prev,aux_key:aux}) )
  }

  const createMetadataFromData = (data:ItemData) =>{
    const metadata : ItemMetadata = {
      id:{visible:false, readonly:true, type:typeof data['id'], newValue:data['id'] , value:data['id'], displayValue:data['id']+'',newDisplayValue:data['id']+''},
      uniqueValue: {visible:false, readonly:true, type:typeof data['uniqueValue'], newValue:data['uniqueValue'] , value:data['uniqueValue'], displayValue:data['uniqueValue']+'',newDisplayValue:data['uniqueValue']+''},

      name: {visible:true, readonly:false, type:typeof data['name'], newValue:data['name'] , value:data['name'], displayValue:data['name']+'',newDisplayValue:data['name']+''},
      description: {visible:true, readonly:false, type:typeof data['description'], newValue:data['description'] , value:data['description'], displayValue:data['description']+'',newDisplayValue:data['description']+''},
      quantity: {visible:true, readonly:false, type:typeof data['quantity'], newValue:data['quantity'] , value:data['quantity'], displayValue:data['quantity']+'',newDisplayValue:data['quantity']+''},
      created_at: {visible:true, readonly:true, type:typeof data['created_at'], newValue:data['created_at'] , value:data['created_at'], displayValue:data['created_at']+'',newDisplayValue:data['created_at']+''},
      updated_at: {visible:true, readonly:true, type:typeof data['updated_at'], newValue:data['updated_at'] , value:data['updated_at'], displayValue:data['updated_at']+'',newDisplayValue:data['updated_at']+''}
    }
    return metadata;
  }

  return (
    <div className="utils-form-container" >
      <Alert
        
        title="Confirm"
        text="Are you sure you want to delete tis record?"
        okText="Delete"
        cancelText="Cancel"

        onOk={()=>alert('OK')}
        onCancel={()=>alert('Cancel')}
        toggleHandler={()=>setShowAlert(false)}

        visible={show_alert  }


      />

      <Loading visible={loading} />
      <FormHeader
        label={form_header_props.label}
        isNew={form_header_props.isNew}
        operation={form_header_props.operation}
        onSave={onSave}
        onDelete={onDelete}
        />
      <ItemForm data={item_details} onChangeValues={changeValues} />
    </div>
  )
}

export default ItemDetails;