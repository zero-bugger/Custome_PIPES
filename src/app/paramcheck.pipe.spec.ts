import { ParamcheckPipe } from './paramcheck.pipe';

describe('ParamcheckPipe', () => {
  it('create an instance', () => {
    const pipe = new ParamcheckPipe();
    expect(pipe).toBeTruthy();
  });
});
