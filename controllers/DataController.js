const SearchCompesationData = function(req, res){
    try {
        let data = ['Sample tuple']
        return res.getOKResponse({data})
    } catch (error) {
        console.error(error)
        res.getErrorResponse({error: "Something went wrong"});
    }
}

module.exports = {
    SearchCompesationData
}