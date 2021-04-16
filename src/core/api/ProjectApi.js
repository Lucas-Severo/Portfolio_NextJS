import axios from 'axios'

class ProjectApi {
    async buscarProjetos() {
        const {data} = await axios.get('http://localhost:3000/api/projects')
        return data
    }
}

export default new ProjectApi()