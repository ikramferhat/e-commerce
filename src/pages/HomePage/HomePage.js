import React from 'react'
import { Container } from '@material-ui/core'
import Hero from '../../Sections/HeroSection/HeroSection';
import Category from '../../Sections/CategorySection/Category'
import TitleForSection from '../../components/TitleForSection/TitleSection'
import ProductList from '../../components/Product/ListProducts';
import SlickProduct from '../../Sections/SlickProductSection/SlickProduct'
import ParalaxHome from '../../Sections/ParalaxSection/ParalaxSection'
import BestSeller from '../../Sections/BestSellerSection/BestSellerSection';
import OurBlogSection from '../../Sections/OurBlogSection/OurBlogSection';
import img1 from '../../images/hero/hero20.jpg'


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
          </Container>
          <ParalaxHome img={img1} text="Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes. —Diana Vreeland" />
          <Container maxWidth="lg">
            <TitleForSection title={'top weekly salls'} />
            <SlickProduct />
            <TitleForSection title={'latest blog'} />
            <OurBlogSection />
          </Container>
          <ParalaxHome img={img1} text="What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language. —Miuccia Prada" />
        </div>
    )
}

export default Home