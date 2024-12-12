"use client"
import Image from "next/image";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Cairo } from 'next/font/google';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import styles from "./page.module.scss";

const cairo = Cairo({
  subsets: ['latin'], // Specify subsets, e.g., 'latin', 'arabic'
  weight: ['400', '700'], // Choose desired font weights
});
export default function Home() {

  const imgUrl = ["/yazan.jpg","/saleem.jpg","/ahmad.jpg","/osama.jpg","/mohammad.jpg","/kareem.jpg","/philip.jpg","/shkaki.jpg"]
  return (
    <div className={`${styles.page} ${cairo.className}`}>
      <header className={styles.header}>
      <Image src="/syriaFlag.png"  width={100} height={50}/>
        <h1>
        
     التشكيلة الوزارية الجديدة لسوريا. 
     
        </h1>
        <Image src="/syriaFlag.png"  width={100} height={50}/>
        <hr />
      </header>
      <main className={styles.main}>
    

      <Swiper navigation={true} modules={[Navigation]} className={styles.mySwiper}>
        <SwiperSlide>
          <div className={styles.colLeft}>
            <h1 className={styles.title}>وزير الثقافة</h1>
            <h1 className={styles.name}>يزن محمد</h1>
            <h3>انتهازي براغماتي</h3>
            <p>القاب وأقوال مأثورة: 
              "شخرة"
            </p>
            <p>يزن محمد من أحد العائلات العلوية الشهيرة "محمد" , لديه عدة مسائل تتعلق بالأرث عالقة
              لكن يتوعد بنناء ثقافة هابطة للشعب السوري.
            </p>
          </div>
          <div className={styles.colRight} style={{backgroundImage:`url(${imgUrl[0]})`}}>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.colLeft }>
          <h1 className={styles.title}>وزير الدفاع</h1>
            <h1 className={styles.name}>سليم سلامة</h1>
            <h3>عربيد معرص</h3>
            <p>القاب وأقوال مأثورة: 
              "شبيح"
            </p>
            <p>من أبرز شبيحة مدينة درعا, قام بترويع العديد من المواطنين , حالياً يعمل في الفيز والاقامات في اربيل كنوع من الغطاء عن الاعمال السابقة</p>
          </div>
          <div className={styles.colRight} style={{backgroundImage:`url(${imgUrl[1]})`}}>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.colLeft }>
          <h1 className={styles.title}>وزير الاعلام</h1>
            <h1 className={styles.name}>
              أحمد رسول
            </h1>
            <h3>ديكتاتوري شيوعي</h3>
            <p>القاب وأقوال مأثورة: 
              "شريف شحادة الغلابة"
            </p>
            <p>بوق من أبواق النظام السوري السابق, لديه عدة نشاطات بعصية وتشبيحية
              محب للسيدة الأولى وبزازها.
            </p>
          </div>
          <div className={styles.colRight} style={{backgroundImage:`url(${imgUrl[2]})`}}>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.colLeft}>
          <h1 className={styles.title}>وزير التجارة الداحلية وحماية المستهلك</h1>
            <h1 className={styles.name}>أسامة لطفي</h1>
            <h3>علماني ديمقراطي</h3>
            <p>القاب وأقوال مأثورة: 
              "قائد زغبات المالكي"
            </p>
            <p>أحد أثرياء دمشق, لديه تنسيق سابق مع زغبات حي ركن الدين وحديقة شكو
              يتوعد بمضاجعة أخت سوريا وملئها بالزغب و القرباط.
            </p>
          </div>
          <div className={styles.colRight} style={{backgroundImage:`url(${imgUrl[3]})`}}>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.colLeft}>
          <h1 className={styles.title}>وزير الاقتصاد</h1>
            <h1 className={styles.name}>محمد قرواني</h1>
            <h3>اخوان مسلمين</h3>
            <p>القاب وأقوال مأثورة: 
              "الرجل الذي لم يوقع"
            </p>
            <p>اقتصادي محنك, يتوعد بتشحيد أفراد الشعب السوري
              لديه عدة نشاطات مع جماعات وأحزاب خفية
        متخفي بين صفوف الاخوان  لكن يعتقد بأنه ماصوني.
            </p>
          </div>
          <div className={styles.colRight} style={{backgroundImage:`url(${imgUrl[4]})`}}>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.colLeft}>
          <h1 className={styles.title}>وزير الشؤون الاجتماعية والعمل</h1>
            <h1 className={styles.name}>كريم شونو</h1>
            <h3>مجاهد شيشاني</h3>
            <p>القاب وأقوال مأثورة: 
              "أبو قتادة"
            </p>
            <p>جهادي متطرف, يدعي السلمية والحوار الهادء
              يتوعد بمضاجعة المحتمع السوري وعيث الفساد والفتن.
            </p>
          </div>
          <div className={styles.colRight} style={{backgroundImage:`url(${imgUrl[5]})`}}>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.colLeft}>
          <h1 className={styles.title}>وزير السياحة</h1>
            <h1 className={styles.name}>فيليب خوري</h1>
            <h3>رمادي محايد</h3>
            <p>القاب وأقوال مأثورة: 
              "والله لنييكها"
            </p>
            <p>لاعب ببجي مصنف ست أصابع, مسالم 
              سريع البعص, يعتقد أنه العقل المدبر خلف سجن صيدنايا لكونه أبن تلك الناحية
              ينوعد الشعب السوري بالزبر.
            </p>
          </div>
          <div className={styles.colRight} style={{backgroundImage:`url(${imgUrl[6]})`}}>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.colLeft}>
          <h1 className={styles.title}>وزير الزراعة والري</h1>
            <h1>أحمد شكاكي</h1>
            <h3>اقطاعي</h3>
            <p>القاب وأقوال مأثورة: 
              "ضاغطهم"
            </p>
            <p>من مخلفات الحزب الشيوعي السوري, ناش أخت الاقامات والفيز في اربيل سابقاً
              يتوعد بنهب أراضي الفلاحين وتجفيف مياه سوريا.
            </p>
          </div>
          <div className={styles.colRight} style={{backgroundImage:`url(${imgUrl[7]})`}}>
            
          </div>
        </SwiperSlide>
       
      </Swiper>

      </main>
   
    </div>
  );
}
