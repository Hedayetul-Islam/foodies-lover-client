import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading="Check It Out" heading="Featured Item"></SectionTitle>
            <div className='flex justify-center items-center bg-slate-600 opacity-80 gap-8 pb-20 pt-4 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2023</p>
                    <p className='my-2 font-medium uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam commodi distinctio, officia cumque officiis, odio excepturi quidem hic similique libero recusandae itaque optio, ex corrupti perspiciatis error impedit! Repellendus maxime recusandae voluptatum totam tempore dolores, sequi mollitia nulla expedita accusamus atque iure eum officia alias voluptates. Repellendus nemo nam dolorem!</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-4">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;