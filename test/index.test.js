/* global describe it */
const chai = require('chai');
const expect = chai.expect;    // Using Expect style

const creatTunnel = require('./../src/lib/creatTunnel');

describe('取得分享網址', () => {
  it('should return localtunnel URL', async() => {
    const result = await creatTunnel.getURL('demo.png');
    expect(result).to.be.a('string');
  });
});
