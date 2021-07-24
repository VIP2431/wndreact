import axios from "axios";

const ITEM_REST_API_URL = 'http://localhost:8091/api/items';
const NODE_REST_API_URL = 'http://localhost:8091/api/nodes';
const NODE_TYPE_REST_API_URL = 'http://localhost:8091/api/itemDtoTypeList';
const ITEMDTO_NAME_REST_API_URL = 'http://localhost:8091/api/itemDtoListName';
const ITEMDTO_ID_REST_API_URL = 'http://localhost:8091/api/itemDtoListId';

class ItemService {

    getDtoTypeList(url: string){ return axios.get( url); }

    getItems(){ return axios.get(ITEM_REST_API_URL); }
    getNodeTypeList(){ return axios.get(NODE_TYPE_REST_API_URL); }
    getNodes(){ return axios.get(NODE_REST_API_URL); }
    getItemDtoListName(){ return axios.get(ITEMDTO_NAME_REST_API_URL); }
    getItemDtoListId(){ return axios.get(ITEMDTO_ID_REST_API_URL); }

}

export default new ItemService();