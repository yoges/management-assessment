const request = require('supertest');
const app = require('../../index');
const httpStatus = require('http-status');
const { expect } = require('chai');

const variables = {
  "featureName": "testFeature",
  "email": "test@test.com",
  "enable": true
}

describe('POST /feature', () => {
  it('should create an access for new feature', () => {
    return request(app)
      .post('/feature')
      .send(variables)
      .expect(httpStatus.OK)
      .then((res) => {
        expect(res.body).to.include('');
      });
  })
});

describe('GET /feature', () => {
  it('should get can access based on email and feature name', () => {
    return request(app)
      .get(`/feature?email=${variables.email}&featureName=${variables.featureName}`)
      .expect(httpStatus.OK)
      .then((res) => {
        expect(res.body).to.include({
          "canAccess": true
        });
      });
  })
});