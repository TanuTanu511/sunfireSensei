import { setSingleJob } from '@/redux/jobSlice'
import { JOB_API_ENDPOINT } from '@/utils/data'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const useGetSingleJob = (jobId) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSingleJob = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}` , {
                    withCredentials:true,
                });

                if(res.data.success){
                    dispatch(setSingleJob(res.data.job || res.data.jobs));
                }else{
                    console.log("Failed to fetch job");
                }

            } catch (error) {
                console.log(error);
                setError(error.message || "An error Occurred")
            } finally{
                setLoading(false);
            }
        };

        fetchSingleJob();
    }, [jobId , dispatch]);
}

export default useGetSingleJob
