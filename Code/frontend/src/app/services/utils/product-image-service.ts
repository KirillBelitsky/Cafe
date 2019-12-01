import {Injectable} from '@angular/core';

@Injectable()
export class ProductImageService {

  private map: Map<string, string> = new Map([
    ['80fce9bf-1d25-42bb-ac80-40f430e726b5', '/assets/images/blinWithTvorog.jpg'],
    ['6244e02a-72e3-440f-8cd1-e322a3c9b96b', '/assets/images/blinWithSirAndVetchina.jpg'],
    ['c575278d-9871-4a60-a54c-2a3667c01079', '/assets/images/blinWithTvorog.jpg'],
    ['4c6ddde9-4c19-4f85-b06c-f1094fec689a', '/assets/images/omletWithVetchina.jpg'],
    ['9cec9e2f-2f9d-402a-aff2-bf7e69f18d51', '/assets/images/bulonWithKrutonami.jpg'],
    ['a63d1d4a-f57e-4658-8e47-921e6ba07eaa', '/assets/images/OvsKashaWithKuraga.jpg'],
    ['a19714a5-f8b7-4df1-b15c-aeff158bd224', '/assets/images/SalatWithKucinii.jpg'],
    ['424b5b15-41a8-42de-8745-530b72f9c5a9', '/assets/images/Grecheskiy.jpg'],
    ['94b8e5d0-c460-46d4-b70a-f18bdf9251d5', '/assets/images/CezarWithLosos.jpg'],
    ['d8ee94a5-be28-4807-a367-e2faab791196', '/assets/images/salatWithIndeykaWithSous.jpg'],
    ['b6659951-ca5a-4ffe-a8d9-3fdc09fa1767', '/assets/images/olivieWithFile.jpg'],
    ['b13e030e-291b-4f98-93cb-a69aa3caf76f', '/assets/images/tomKha.jpg'],
    ['5c1af908-d986-4564-aef0-40e4c844a2ed', '/assets/images/bulonWithChesnHleb.jpg'],
    ['a2fe88d5-91f9-4782-a9f6-b685a843876b', '/assets/images/solyanka.jpg'],
  ]);

  public getImageSrc(id: string): string {
    return this.map.get(id);
  }

  public setImageSrc(id: string, path: string): void {
    this.map.set(id, path);
  }
}

