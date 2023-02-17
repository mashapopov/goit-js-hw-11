import axios from 'axios';

const API_KAY = '33515786-5b52176933b5882b00b6da0a7';
const BASE_URL = 'https://pixabay.com/api/';

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.sumHitsLength = 0;
  }

  async axiosArticles() {
    const queryParams = {
      key: API_KAY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.page,
      per_page: 40,
    };

    const response = await axios.get(BASE_URL, {
      params: queryParams,
    });
    this.incrementPage();
    return response.data;
  }
//  увеличение страничтки, используется при полож. результате
  incrementPage() {
    this.page += 1;
  }

  plusHitsLength(hitsLength) {
    this.sumHitsLength += hitsLength;
  }
//  сброс страниц
  resetPage() {
    this.page = 1;
  }
//  перезаписываем переменную
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}