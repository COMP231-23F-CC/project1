import {useEffect,useState} from "react"
import axios from "axios"

const useFetch = (url)=>{
    const [data,setData] = useState([])   //data：用于存储从网络请求获得的数据。
    const [loading,setLoading] = useState(false)  //loading：表示数据是否正在加载中。这在异步操作如网络请求中很常见，用于给用户展示加载指示器或其他相关 UI。
    const [error,setError] = useState(false)  //error：用于标记请求过程中是否发生错误。

    useEffect(()=>{  //fire the function whenever url changes
        const fetchData = async()=>{
            setLoading(true)
            try{
                const res =await axios.get(url);
                setData(res.data);
            }catch(err){
                setError(err);
            }
        }
        fetchData();
    },[url]);


const reFetch = async()=>{
    setLoading(true)
    try{
        const res = await axios.get(url);
        setData(res.data);
    }catch(err){
        setError(err);
    }
}
return {data,loading,error,reFetch}
}
export default useFetch;