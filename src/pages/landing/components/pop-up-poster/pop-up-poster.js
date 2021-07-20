import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPopUpPosterConf } from '../../../../shared/redux/features/popUpPosterConfSetter';
import store from '../../../../shared/redux/store';
import './pop-up-poster.scss'

function PopUpPoster() {

  let [isShow, setIsShow] = useState(false);
  let [imgLink, setImgLink] = useState(''); 
  const dispatch = useDispatch();

  useEffect(() => { listenStoreChanges(); }, []);

  const onClosePopUp = () => {
    setIsShow(false);
    setImgLink('');
    dispatch(setPopUpPosterConf({ isShow: false, imgLink: '' }));
  }

  const listenStoreChanges = () => {
    store.subscribe((res) => {
      if (isShow !== store.getState().popUpPosterConf.isShow) {
        setIsShow(store.getState().popUpPosterConf.isShow);
        setImgLink(store.getState().popUpPosterConf.imgLink);
      }
    });
  }

  return (
    <div className={'pop-up-poster' + ((isShow === true) ? ' show' : ' hidden')} >
      <div className='pop-up-poster-content'>
        <span className="close-btn" onClick={ () => onClosePopUp() }>Close</span>
        <img src={ imgLink } alt="Poster popup img" data-testid="pop-up-poster-img" />
      </div>
    </div>
  );
}

export default PopUpPoster;