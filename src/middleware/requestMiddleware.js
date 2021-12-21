import service from './../services/examServices';
import { ShowLoader, HideLoader, OnError } from '../components/LoaderController';

export default (view) => (text) =>{
    ShowLoader();
    service.getMatch(text)
    .then(view)
    .then(HideLoader)
    .catch(OnError(view));
}