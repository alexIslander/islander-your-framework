import { TestBed, inject } from '@angular/core/testing';
import { MaterialTableHelper } from '../../../shared/helpers/material-table-helper';
import {DateFormatterUtil} from '../../../shared/utils/date-formatter.util';

describe('MaterialTableHelperService', () => {
  let materialTableHelper: MaterialTableHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MaterialTableHelper,
        DateFormatterUtil
      ]
    });
  });

  beforeEach(inject([MaterialTableHelper], (helper: MaterialTableHelper) => {
    materialTableHelper = helper;
  }));

  it('should be initialized', () => {
    expect(materialTableHelper).toBeTruthy();
  });

  xit('should have sortTable method', () => {
    const unsortedArray = [
      {
        name: 'name1',
        desc: 'desc1',
        creationDate: '1990-10-21T11:11:11.000',
        modificationDate: 'null'
      },
      {
        name: 'name2',
        desc: 'desc2',
        creationDate: '1990-10-20T11:11:11.000',
        modificationDate: '1990-10-20T11:12:11.000'
      }
    ];

    const sortEvent = {
      active: 'creationDate',
      direction: 'asc'
    };

    const sortedArray1 = materialTableHelper.sortTable(unsortedArray, sortEvent);

    sortedArray1.connect().subscribe((res) => {
      expect(res[0]['name']).toEqual('name2');
    });

    sortEvent.active = 'modificationDate';
    const sortedArray2 = materialTableHelper.sortTable(unsortedArray, sortEvent);

    sortedArray2.connect().subscribe((res) => {
      expect(res[0]['name']).toEqual('name1');
    });
  });
});
