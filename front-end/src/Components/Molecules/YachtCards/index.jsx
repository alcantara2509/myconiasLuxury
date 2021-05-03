/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  iconGuests, iconRooms, iconCrew, iconArrowRight,
} from '../../../assets';
import { imgError, heartClick, checkHeart } from '../../../Utils';
import { ItalicHighlight, MainTitle } from '../../Atoms/Texts';
import { IconsCard } from '../../Atoms';
import './style.css';
import Colors from '../../../Colors';

const VillaCards = ({ cardProps }) => {
  const {
    image, name, guests, cabins, crew, setReload, reload,
  } = cardProps;

  return (
    <section key={name} className="card-container">
      <button
        className="fav-button"
        type="button"
        onClick={({ target: { alt } }) => heartClick(alt, reload, setReload)}
      >
        {checkHeart(name)}
      </button>
      <Link to={`/yachts/${name}`} className="card-link">
        <img className="image-size" src={image} onError={imgError} alt={name} />
        <section className="villa-cards-infos-container-desktop">
          <MainTitle props={{ textColor: Colors.primaryColor }}>
            {name}
            &apos;
          </MainTitle>
          <section className="infos-container">
            <IconsCard iconsProps={{ icon: iconRooms, info: cabins }} />
            <IconsCard iconsProps={{ icon: iconGuests, info: guests }} />
            <IconsCard iconsProps={{ icon: iconCrew, info: crew }} />
          </section>
          <Link to={`/yachts/${name}`}>
            <article className="villa-cards-p-btn">
              <ItalicHighlight props={{ textColor: Colors.primaryColor }}>
                SEE YACHT
                <img src={iconArrowRight} alt="icon arrow" className="findout-more-arrow" />
              </ItalicHighlight>
            </article>
          </Link>
        </section>
      </Link>
    </section>
  );
};

export default VillaCards;
