import { useParams, useSearchParams, Outlet } from 'react-router-dom';

export const Posts = () => {
    const params = useParams();
    const { id } = params;
    const [ qs ] = useSearchParams();

    return(
        <div>
            <h1>Post {`Para: ${id} `} {`QS: ${qs}`}</h1>
            <Outlet/>
        </div>
    );
};