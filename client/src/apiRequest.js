/* const apiRequest = async(url = '', optionsObj=null, errMsg =null) => {
    try{
        console.log("API Request URL:", url);
        console.log("API Request Options:", optionsObj);
        const response = await fetch(url,optionsObj)
        if(!response.ok) throw Error ("Please reload the app")
    } catch(err) {
        errMsg = err.message;
        console.error("API Request Error:", errMsg);
    } finally{
        return errMsg;
    }
}

export default apiRequest 

NOTE Without using Axios generate Custom method little bit more lines to code 😅

*/

