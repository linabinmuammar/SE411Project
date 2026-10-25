import {describe,it,expect} from 'vitest';import{initialAssets,upsertAsset,removeAsset,validateAsset}from '../src/assets.js';
const sample={id:'IT-2000',name:'Test Laptop',brand:'Dell',type:'Laptop',assignedTo:'',status:'Available',purchaseDate:'2026-10-01'};
describe('asset management',()=>{
 it('starts with sample data',()=>expect(initialAssets.length).toBeGreaterThan(0));
 it('adds an asset',()=>expect(upsertAsset(initialAssets,sample)).toHaveLength(initialAssets.length+1));
 it('updates an asset',()=>{const result=upsertAsset(initialAssets,{...initialAssets[0],name:'Updated'},initialAssets[0].id);expect(result[0].name).toBe('Updated');expect(result).toHaveLength(initialAssets.length)});
 it('deletes an asset',()=>expect(removeAsset(initialAssets,initialAssets[0].id)).toHaveLength(initialAssets.length-1));
 it('rejects duplicate IDs',()=>expect(validateAsset({...sample,id:initialAssets[0].id},initialAssets)).toMatch(/unique/));
 it('requires name, brand and ID',()=>expect(validateAsset({...sample,name:''},initialAssets)).toMatch(/required/));
 it('rejects invalid statuses',()=>expect(validateAsset({...sample,status:'Unknown'},initialAssets)).toMatch(/Invalid/));
});
