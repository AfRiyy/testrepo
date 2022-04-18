import { ZipfilterPipe } from './zipfilter.pipe';

describe('ZipfilterPipe', () => {
  it('a pipe elkészül', () => {
    const pipe = new ZipfilterPipe();
    expect(pipe).toBeTruthy();
  });
});
