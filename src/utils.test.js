import { isTweetFr } from './utils.js';
import {
  tweetFr,
  tweetFrCa,
  tweetIn,
  tweetNull,
  tweetUndefined,
} from './__mocks__/tweets.js';
describe('Test isTweetFr', () => {
  it("tweetFr return true if tweet.lang = 'fr'", () => {
    expect(isTweetFr(tweetFr)).toBe(true);
  });

  it("tweetFr return false if tweet.lang = 'in'", () => {
    expect(isTweetFr(tweetIn)).toBe(false);
  });

  it("tweetFr return false if tweet.lang = 'fr-ca'", () => {
    expect(isTweetFr(tweetFrCa)).toBe(true);
  });

  it('tweetFr return false if tweet.lang = null', () => {
    expect(isTweetFr(tweetNull)).toBe(false);
  });

  it('tweetFr return false if tweet.lang = undefined', () => {
    expect(isTweetFr(tweetUndefined)).toBe(false);
  });

  it('tweetFr return ThrowError if no tweet', () => {
    expect(() => isTweetFr(undefined)).toThrow();
  });
});
