import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logger : string[] = [];
  constructor() { }

  log(message : string) : void {
    this.logger.push(message);
    console.log(message);
  }
}
