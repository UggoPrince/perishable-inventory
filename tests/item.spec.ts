import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';

chai.use(chaiHttp);

describe('Item', () => {
  describe('POST /api/v1/item/:item/add', () => {
    const route = '/api/v1/item/foo/add';
    const route2 = '/api/v1/item/shoe/add';
    const item = { quantity: 20, expiry: 10000 };
    const item2 = { quantity: 35, expiry: 1000000000 };
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
    it('should add an item', async () => {
      const request = await chai.request(app).post(route2).send(item2);
      expect(request.status).to.equal(201);
      expect(request.body).to.have.property('message');
    });
  });
  describe('GET /api/v1/item/:item/quantity', () => {
    const route = '/api/v1/item/doe/quantity';
    const route2 = '/api/v1/item/shoe/quantity';
    const route3 = '/api/v1/item/**/quantity';
    it('should not get an invalid item', async () => {
      const request = await chai.request(app).get(route3);
      expect(request.status).to.equal(422);
      expect(request.body).to.have.property('message');
    });
    it('should not get an empty item that does not exist', async () => {
      const request = await chai.request(app).get(route);
      expect(request.status).to.equal(200);
      expect(request.body.data).to.have.property('quantity');
      expect(request.body.data.quantity).to.equal(0);
    });
    it('should get an item', async () => {
      const request = await chai.request(app).get(route2);
      expect(request.status).to.equal(200);
      expect(request.body.data.quantity).to.equal('35');
    });
  });
});
