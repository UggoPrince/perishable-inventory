import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';

chai.use(chaiHttp);

describe('Item', () => {
  describe('Add Item /api/v1/item/:item/add', () => {
    const route = '/api/v1/item/foo/add';
    const item = { quantity: '20', expiry: '10000' };
    it('should not add an empty item', async () => {
      const request = await chai.request(app).post(route).send({});
      expect(request.status).to.equal(422);
      expect(request.body).to.have.property('message');
    });
    it('should add an item', async () => {
      const request = await chai.request(app).post(route).send(item);
      expect(request.status).to.equal(201);
      expect(request.body).to.have.property('message');
    });
  });
});
