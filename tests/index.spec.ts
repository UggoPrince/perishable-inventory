import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';

chai.use(chaiHttp);

describe('Default route test', () => {
  it('Should return the default message', async () => {
    const request = await chai.request(app).get('/');
    expect(request.status).to.equal(200);
    expect(request.text).to.equal('Welcome to Perishable Inventory API');
  });
  it('Should return the api docs', async () => {
    const request = await chai.request(app).get('/api-docs.json');
    expect(request.status).to.equal(200);
    expect(request.type).to.be.equal('application/json');
  });
  it('Should return the api docs', async () => {
    const request = await chai.request(app).get('/api/v1/docs');
    expect(request.status).to.equal(200);
    expect(request.type).to.be.equal('text/html');
  });
  it('Should return the api docs', async () => {
    const request = await chai.request(app).get('/api/v1');
    expect(request.status).to.equal(200);
    expect(request.type).to.be.equal('text/html');
  });
  it('Should take route that does not exist', async () => {
    const request = await chai.request(app).get('/document');
    expect(request.status).to.equal(404);
    expect(request.type).to.be.equal('application/json');
  });
});
