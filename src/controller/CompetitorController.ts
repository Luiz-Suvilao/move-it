import CompetitorService from '../service/CompetitorService';

export default class CompetitorController {
	competitorService: CompetitorService;

	constructor() {
		this.competitorService = new CompetitorService();
	}

	async getAllCompetitores() {
		const resp = await this.competitorService.getCompetitores();
		if (resp && resp.data) {
			return resp.data;
		}
		return {};
	}
}


