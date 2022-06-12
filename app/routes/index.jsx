import {useNavigate} from "@remix-run/react";
import { useEffect } from "react";
import Catalog from './catalog';
export default function Index () {
    const navigate = useNavigate();
    useEffect(()=> {
        navigate('/catalog', { replace: true })
    }, [])
    return (
    <>
    </>
    )
}