interface TableField{
  visible:boolean,
  readonly:boolean,
  type:any,
  value:any,
  displayValue:any,
  newValue:any,
  newDisplayValue:any,
}
type TableFieldType =  TableField

interface ItemData {
  id: number | null,
  name: string,
  description: string,
  quantity: number,
  uniqueValue: string,
  created_at:string,
  updated_at:string
}

interface ItemMetadata{
  id: TableFieldType,
  name: TableFieldType,
  description: TableFieldType,
  quantity: TableFieldType,
  uniqueValue: TableFieldType,
  created_at: TableFieldType,
  updated_at: TableFieldType
}

const item_default_value : ItemMetadata = {
  id: {visible:false, readonly:true, type:"string", value:"", displayValue:"",newValue:'',newDisplayValue:''},
  name: {visible:false, readonly:true, type:"string", value:"", displayValue:"",newValue:'',newDisplayValue:''},
  description: {visible:false, readonly:true, type:"string", value:"", displayValue:"",newValue:'',newDisplayValue:''},
  quantity: {visible:false, readonly:true, type:"string", value:"", displayValue:"",newValue:'',newDisplayValue:''},
  uniqueValue: {visible:false, readonly:true, type:"string", value:"", displayValue:"",newValue:'',newDisplayValue:''},
  created_at: {visible:false, readonly:true, type:"string", value:"", displayValue:"",newValue:'',newDisplayValue:''},
  updated_at: {visible:false, readonly:true, type:"string", value:"", displayValue:"",newValue:'',newDisplayValue:''}
}

export type {ItemData,ItemMetadata};
export default item_default_value;