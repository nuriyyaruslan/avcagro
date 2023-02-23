import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import './NewsDetails.css';
import newsImg from '../../../../src/assets/imgs/news-1.png';

const NewsDetails = () => {
    return (
        <div>
            <Header />
            <div class="head-layer"></div>
            <section class="news-section">
                <Container>
                    <h2 className="head-h1 text-center">
                        <span>XƏBƏRLƏR</span>
                    </h2>
                    <Row className="news-single-cover" >
                        <Col sm={12} md={9}>
                            <div class="news-left">
                                <h3 class="news-single-title">Azərbaycanda yemiş sahələrinin güzəştli sığortası başlayıb</h3>
                                <div class="news-single-data">
                                    <img src={newsImg} alt="" />
                                    Aqrar Sığorta Fondu ölkədə ilk dəfə olaraq yemiş sahələrini sığorta etməyə başlayıb. Digər əkin sahələrində olduğu kim yemiş təsərrüfatları üzrə də sığorta haqqının yarısını fermerlərə dəstək üçün dövlət ödəyir.
                                    Aqrar sığorta yemiş əkinlərini çoxsaylı risklərdən qoruyur. Bura dolu, sel-su basma, leysan, ildırım, yanğın, qasırğa, fırtına, bitki xəstəlikləri və ziyanvericilər, üçüncü şəxslərin hərəkətləri və sair hallar aiddir.
                                    Yemiş təsərrüfat sahələrinin sahibləri onu baza sığorta zərfi ilə yanaşı, ayrıca olaraq bitki xəstəlikləri və zərərvericilərdən, eləcə də dolu riski nəticəsində yaranan miqdar itkisi ilə yanaşı, keyfiyyət itkisi üzrə də sığorta edə bilərlər.
                                    Belə ki, ölkəmizdə yemiş istehsalının 24,1%-i Saatlı, 19,1%-i Kürdəmir, 17,1%-i Sabirabad, 9,5%-i Naxçıvan Muxtar Respublikası, 5,3%-i Salyan, 3,8%-i Masallı, 2,5%-i Hacıqabul, 1,8%-i Ağsu, 1,5%-i Zərdab, 1,4%-i Astara rayonunun payına düşüb. Yemişin əsas istehsalçı rayonları olan Saatlı (285.9 sent/ha), Zərdab (281.0 sent/ha), Sabirabad (251.5 sent/ha) və Kürdəmir (184.2 sent/ha) rayonlarında məhsuldarlıq göstəricisi ölkə üzrə orta göstəricidən yüksəkdir.
                                    Relyef və iqlim baxımından ölkəmizdə bu bostan bitkisinin yetişdirilməsində biznes baxımından böyük imkanlar və fürsətlər var. Belə ki, daxili bazarın təlabatının ödənilməsi ilə yanaşı həmçinin böyük ixrac potensialı da mövcuddur.
                                    Yemiş təsrrüfatlarının baza sığorta zərfi ilə sığortası tarifi ölkənin ayrı-ayrı regionları üzrə fərqlidir və 1.87%-4.56% arasında dəyişir. Bu bitkinin ən çox əkildiyi Aran bölgəsində sığorta tarifi 1.96% təşkil edir. Hesablanan sığorta haqqının 50%-ni fermerə dəstək üçün dövlət ödəyir.
                                    Misal: Məhsuldarlığı 100 sentner, 1 sentnerin qiyməti 80 manat, yəni ümumilikdə 8 000 manatlıq məhsul gözləniən yemiş sahəsinin baza zərfi üzrə sığortalanması ölkənin regionlarından asılı olaraq 74.80 - 182,40 manat arasında dəyişir. Fermer bu məbləğin yalnız yarısını – 37,40 - 91,20 manatını ödəyir, qalan hissəni dövlət ödəyir. Sığorta hadisəsi nəticəsində sahədəki məhsul tamamilə itirilərsə, femerə 7 200 manatadək sığorta ödənişi edilə bilər.
                                    Aqrar sığortanın əhatə etdiyi meyvə məhsullarının sığorta şərtləri və tarifləri ilə Aqrar Sığorta Fondunun rəsmi internet səhifəsində “Bitkiçilik məhsulları” bölməsində ətraflı tanış olmaq mümkündür.
                                    Fermerlər əkin sahələrinin sığortası üzrə sığorta haqlarını və ödənişləri Aqrar Sığorta Fondunun rəsmi internet səhifəsində “Bitkiçilik kalkulyatoru” bölməsində hesablaya bilərlər. Əlavə məlumatları ASF-nin sosial şəbəkə hesablarını izləməklə və 1651 qısa nömrəsi ilə əlaqə saxlamaqla əldə etmək olar.
                                </div>
                                <span class="news-single-date">06-05-2022</span>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div class="news-right">
                                <p class="other-news">Digər xəbərlər</p>
                                <div class="news-others-all">
                                    <div class="news-item">
                                        <Link to={"/newsdetails"} >
                                            <div class="news-img-cover">
                                                <img src={newsImg} alt="" />
                                            </div>
                                            <div class="news-info">
                                                <span class="news-date">06-05-2022</span>
                                                <div class="news-txt">
                                                    Azərbaycanda ilk dəfə kənd təsərrüfatı bitkiləri üzərində yeni aqrokimyəvi maddənin sınaqları keçiriləcək
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="news-item">
                                        <Link to={"/newsdetails"} >
                                            <div class="news-img-cover">
                                                <img src={newsImg} alt="" />
                                            </div>
                                            <div class="news-info">
                                                <span class="news-date">06-05-2022</span>
                                                <div class="news-txt">
                                                    Azərbaycanda ilk dəfə kənd təsərrüfatı bitkiləri üzərində yeni aqrokimyəvi maddənin sınaqları keçiriləcək
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div class="news-item">
                                        <Link to={"/newsdetails"} >
                                            <div class="news-img-cover">
                                                <img src={newsImg} alt="" />
                                            </div>
                                            <div class="news-info">
                                                <span class="news-date">06-05-2022</span>
                                                <div class="news-txt">
                                                    Azərbaycanda ilk dəfə kənd təsərrüfatı bitkiləri üzərində yeni aqrokimyəvi maddənin sınaqları keçiriləcək
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default NewsDetails;