import React from 'react'
import { Container } from '@material-ui/core'
import Hero from '../../Sections/HeroSection/HeroSection';
import Header from '../../components/Header/Header'
import Category from '../../Sections/CategorySection/Category'
import TitleForSection from '../../components/TitleForSection/TitleSection'
import ProductList from '../../components/Product/ListProducts';
import PromotionSection from '../../Sections/PromotionSection/PromotionSection';
import SlickProduct from '../../Sections/SlickProductSection/SlickProduct'
import ParalaxHome from '../../Sections/ParalaxSection/ParalaxSection'
import BestSeller from '../../Sections/BestSellerSection/BestSellerSection';
import OurBlogSection from '../../Sections/OurBlogSection/OurBlogSection';

function Home() {
    return (
        <div>
          <Hero />
          <Container maxWidth="lg">
            <Category />
            <TitleForSection title={'top weekly items'} />
            <ProductList />
            <TitleForSection title={'best seller products'} />
            <BestSeller />
            <PromotionSection />
            <TitleForSection title={'top weekly salls'} />
            <SlickProduct />
            <TitleForSection title={'latest blog'} />
            <OurBlogSection />
          </Container>
          <ParalaxHome />
        </div>
    )
}

export default Home