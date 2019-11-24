import {Injectable} from '@angular/core';

@Injectable()
export class ProductImageService {

  private map: Map<string, string> = new Map([
    ['2960ac04-7ab7-4397-9376-27c42544a59e', 'assets/images/soupWithFrik.jpg']
  ]);

  public getImageSrc(id: string): string {
    return this.map.get(id);
  }

  public setImageSrc(id: string, path: string): void {
    this.map.set(id, path);
  }
}

