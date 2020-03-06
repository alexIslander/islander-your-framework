import { Component, OnInit } from '@angular/core';
import {DynamicField} from '../dynamic-field';
import {SearchInputFormatter} from '../../helpers/SearchInputFormatter';

@Component({
  selector: 'app-dynamic-upload',
  templateUrl: './dynamic-upload.component.html',
  styleUrls: ['./dynamic-upload.component.scss']
})
export class DynamicUploadComponent extends DynamicField implements OnInit {
  uploadSearchCriteria: string;
  uploadFiles: any = [];

  constructor(private searchInputFormatter: SearchInputFormatter) {
    super();
  }

  ngOnInit() {
    // NOOP
  }

  uploadFile(event, controllerName) {
    this.uploadFiles = [];
    this.formGroupParam.get(controllerName).setValue(null);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.uploadFiles.push(element);
    }
    event.files = this.uploadFiles;
    if (event.files && event.files[0]) {
      const inputFile = event.files[0];
      if (inputFile.name.indexOf('.csv') !== -1 || inputFile.name.indexOf('.txt') !== -1) {
        const reader = new FileReader();
        reader.onload = () => {
          this.uploadSearchCriteria = this.searchInputFormatter.formatSearchFieldText(reader.result as string);
          this.formGroupParam.get(controllerName).patchValue(this.uploadSearchCriteria);
        };
        reader.readAsText(inputFile);
      }
    }
  }

}
