/* global describe it */
import { expect } from 'chai';

const creatTunnel = require('./../src/lib/creatTunnel');

describe('取得分享網址', () => {
  it('should return localtunnel URL', async() => {
    const result = await creatTunnel.getURL('demo.png');
    expect(result).to.be.a('string');
  });
});
