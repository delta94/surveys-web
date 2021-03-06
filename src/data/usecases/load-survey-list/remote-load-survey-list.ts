import { HttpGetClient } from '@/data/protocols/http'

class RemoteLoadSurveyList {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async loadAll (): Promise<void> {
    await this.httpGetClient.get({ url: this.url })
  }
}

export default RemoteLoadSurveyList
