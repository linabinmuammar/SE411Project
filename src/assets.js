export const initialAssets = [
{id:'IT-1001',name:'MacBook Pro 14',type:'Laptop',brand:'Apple',assignedTo:'Sarah Ahmed',status:'In Use',purchaseDate:'2025-02-14'},
{id:'IT-1002',name:'Latitude 7440',type:'Laptop',brand:'Dell',assignedTo:'Omar Khalid',status:'In Use',purchaseDate:'2025-05-11'},
{id:'IT-1003',name:'ThinkCentre M90',type:'Desktop',brand:'Lenovo',assignedTo:'',status:'Available',purchaseDate:'2024-11-20'},
{id:'IT-1004',name:'EliteBook 840',type:'Laptop',brand:'HP',assignedTo:'Noura Ali',status:'Maintenance',purchaseDate:'2024-09-09'},
{id:'IT-1005',name:'iMac 24',type:'Desktop',brand:'Apple',assignedTo:'Faisal Saad',status:'In Use',purchaseDate:'2025-07-01'}
];
export const emptyAsset={id:'',name:'',type:'Laptop',brand:'',assignedTo:'',status:'Available',purchaseDate:''};
export function validateAsset(asset,assets,editingId=null){
 if(!asset.id.trim()||!asset.name.trim()||!asset.brand.trim())return 'Asset ID, name, and brand are required.';
 if(assets.some(a=>a.id.toLowerCase()===asset.id.trim().toLowerCase()&&a.id!==editingId))return 'Asset ID must be unique.';
 if(!['Laptop','Desktop'].includes(asset.type))return 'Invalid asset type.';
 if(!['Available','In Use','Maintenance','Retired'].includes(asset.status))return 'Invalid status.';
 return '';
}
export function upsertAsset(assets,asset,editingId=null){const error=validateAsset(asset,assets,editingId);if(error)throw new Error(error);const clean=Object.fromEntries(Object.entries(asset).map(([k,v])=>[k,typeof v==='string'?v.trim():v]));return editingId?assets.map(a=>a.id===editingId?clean:a):[...assets,clean]}
export function removeAsset(assets,id){return assets.filter(a=>a.id!==id)}
