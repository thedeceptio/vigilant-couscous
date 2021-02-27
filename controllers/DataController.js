const {DataServices} = require('../Services')
const {FIELDS_MAP} = require('../constants/FieldNames')


const GetCompensationData =async  function(req, res){
    try {
        let filters = {}
        for (key of Object.keys(FIELDS_MAP)){
            if(req.query[key]){
                filters [FIELDS_MAP[key]] = req.query.key
            }
        }
        let sort_fields = []
        // Parse the list of filter on which the user can search
        // Will implement it later . Fow now lets just return the whole data
        
        const data =await  DataServices.SearchCompensationData(filters, sort_fields)
        return res.getOKResponse({data})
    } catch (error) {
        console.error(error)
        return res.getErrorResponse({error: "Something went wrong"});
    }
}



module.exports = {
    GetCompensationData
}