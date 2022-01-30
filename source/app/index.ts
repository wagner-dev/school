import config from '../../easyclassconfig'
import ValidateConfig from './ValidateConfig/index'
import StartSystem from '../controller/StartSystem/index'
import SetResponse from '../services/SetResponse/index'

const SetErrorResponse = (messages: string[]=["Ocorreu um erro"]) => {
    messages?.forEach(message => SetResponse(message))
}

(async () => {
    try{
        await ValidateConfig(config)
        StartSystem()

    }
    catch(errorData){
        const { errors } = errorData as { errors: string[] }
        SetErrorResponse(errors)
    }
})()
