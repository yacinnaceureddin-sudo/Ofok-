const {test}=require('node:test');const assert=require('node:assert/strict');const Ofoq=require('../www/model');
test('initial state is valid',()=>assert.equal(Ofoq.valid(Ofoq.initial()),true));
test('creates product in centimes',()=>{const p=Ofoq.makeProduct({name:'حقيبة',price:'1250.50',stock:'4',category:'ملابس'});assert.equal(p.price,125050);assert.equal(p.stock,4);});
test('rejects invalid product price and stock',()=>{assert.throws(()=>Ofoq.makeProduct({name:'منتج',price:'0',stock:'1'}));assert.throws(()=>Ofoq.makeProduct({name:'منتج',price:'10',stock:'-1'}));});
test('creates order and calculates total',()=>{const p=Ofoq.makeProduct({name:'منتج',price:'100',stock:'5'});const o=Ofoq.makeOrder({customer:'عميل',product:p.id,quantity:'2',status:'جديد'},[p]);assert.equal(o.total,20000);assert.equal(o.quantity,2);});
test('rejects order quantity beyond stock',()=>{const p=Ofoq.makeProduct({name:'منتج',price:'100',stock:'1'});assert.throws(()=>Ofoq.makeOrder({customer:'عميل',product:p.id,quantity:'2',status:'جديد'},[p]));});
test('validates persisted state and rejects malformed data',()=>{const s=Ofoq.initial();s.products.push(Ofoq.makeProduct({name:'منتج',price:'5',stock:'2'}));assert.equal(Ofoq.valid(s),true);assert.equal(Ofoq.valid({...s,products:[{price:-1}]}),false);});
