/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useEffect, useState, useContext } from 'react';
import MLContext from '../../Context/MLContext';
import Loading from '../../Components/Atoms/Loading';
import {
  IslandCruises, MenuDesktop, MenuMobile, PagesBanner, BespokeServices,
} from '../../Components/Molecules';
import Footer from '../../Components/Organisms/Footer';
import { DarkSection, IntroVillas } from '../../Components/Organisms';
import bannerYachts from '../../assets/images/bannerYachts.jpg';
import './style.css';
import renderYachts from '../../Utils/renderYachts';

const Yachts = () => {
  const { isFetching, allYachts } = useContext(MLContext);
  const [reload, setReload] = useState('');

  console.log(allYachts);

  useEffect(() => {
    const favoriteVillas = JSON.parse(localStorage.getItem('favoriteVillas'));
    if (!favoriteVillas) localStorage.setItem('favoriteVillas', JSON.stringify([]));
  }, [reload]);

  return (
    isFetching ? <Loading type="bubbles" color="black" />
      : (
        <main className="villas-container">
          <MenuMobile />
          <MenuDesktop />
          <PagesBanner
            title="luxury Yachts"
            color="white"
            banner={bannerYachts}
            subTitle="Making the best of the finest luxury tailor-made vacation, guaranteed."
          />
          <IntroVillas />
          {renderYachts(allYachts, setReload, reload)}
          <IslandCruises />
          <BespokeServices />
          <DarkSection />
          <Footer />
        </main>
      )
  );
};

export default Yachts;
