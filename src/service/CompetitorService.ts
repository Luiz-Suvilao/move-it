import axios from 'axios';

export default class CompetitorService {
	getCompetitores() {
		return axios.get('http://127.0.0.1:8000/api/competidores')
			.then(resp => resp.data);
	}

	saveNewCompetitor(data) {
		axios.post('http://127.0.0.1:8000/api/competidores', data);
	}

}
