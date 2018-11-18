import { GetTextByKeyPipe } from '../../../shared/utils/get-text-by-key.pipe';
import { inject, TestBed } from '@angular/core/testing';

describe('GetTextByKeyPipe', () => {

  let getTextByKeyPipe: GetTextByKeyPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetTextByKeyPipe
      ]
    });
  });

  beforeEach(inject([GetTextByKeyPipe], (pipe: GetTextByKeyPipe) => {
    getTextByKeyPipe = pipe;
  }));

  it('create an instance', () => {
    expect(getTextByKeyPipe).toBeTruthy();
  });

  xit('should have transform method', () => {
    const basicInputKey = 'yesButtonLabel';
    const basicInputValue = 'Yes';
    expect(getTextByKeyPipe.transform(basicInputKey)).toEqual(basicInputValue);

    const replacableInputKey = 'exceededInputLength';
    const replacableInputValue = 'You exceeded the allowed input numbers! \nAllowed: 123. Current: 456.';
    expect(getTextByKeyPipe.transform(replacableInputKey, '123', '456')).toEqual(replacableInputValue);
  });
});
