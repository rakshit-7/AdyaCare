import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class VideoService {
  private readonly apiKey = 'YOUR_API_KEY';
  private readonly apiUrl = 'AIzaSyC29HfHKFiPRLvi1o3CSZED5C626PztnaM';

  async fetchVideos(query: string): Promise<any> {
    const url = `${this.apiUrl}?part=snippet&q=${query}&type=video&key=${this.apiKey}`;
    const response = await axios.get(url);
    return response.data;
  }
}
